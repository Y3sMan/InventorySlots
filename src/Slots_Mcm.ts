import {on, once, hooks, printConsole, Game, Form, Debug, Key, PlayerPositionEventType } from  'skyrimPlatform';
import { FormListToArray, GetStringValue, SetFloatValue, SetIntValue, SetStringValue, StringListAdd, StringListClear, StringListCopy, StringListCount, StringListRemove, StringListToArray } from "@skyrim-platform/papyrus-util/StorageUtil";
import * as mcm from "@skyrim-platform/mcm-helper/MCM"
import { ModEvent } from "./modevent";
import { getSlotFromName, ItemCategories,  Slot, saveToDataFile, importDataFromFile, categoryToSlot, itemCategoryVolumes, EvaluateInventory, inventoryCurrentHighlighted, setBaseWidgetPos, GetBaseWidgetPos } from "./InventorySlots";
import { JsonExists } from '@skyrim-platform/papyrus-util/JsonUtil';
import { WriteToFile } from '@skyrim-platform/papyrus-util/MiscUtil';


//___________VARIABLES______________________________________

let mcm_settings = { 

    SelectedSlot: 'sActiveSlots:Slots',
    inputSlotName: 'sAddSlotName:Slots',
    addSlotButton: 'bAddSlotButton:Slots',
    removeSlotButton: 'bDeleteSlotButton:Slots',
    sliderSlotMax: 'fSlotMax:Slots',
    AddCategories: 'sSlotCategoriesAdd:Lists',
    RemoveCategories: 'sSlotCategoriesRemove:Lists',

}

let storageKeys = {

    categories: 'YM.SLOTS.ITEM_CATEGORIES',
    changed_setting: 'YM.Slots.SETTING_CHANGED',
    menuWhiteList: 'YM.Slots.MCM.Menu.Categories.WhiteList',
    menuBlackList: 'YM.Slots.MCM.Menu.Categories.BlackList',
    SlotAssignment: 'YM.SLOTS.MCM.MENU.CATEGORIES.SLOT_CHOICES'

}

let mcmSettingsToStorageKeys = {
    // `YM.Slots.${s.name}.fSlotMax:Slots`
}

let modname: string = 'InventorySlots'

export function pl() { return Game.getPlayer(); }

//___________FUNCTIONS______________________________________


const RefreshMCM = function () {
	once('update', () => {
		const handle = ModEvent.Create('YM.Slots.REFRESH')
		ModEvent.PushString(handle, 'Refresh')
		ModEvent.Send(handle)
	});
}

const SetMenuOptions = function () {
	once('update', () => {
		const handle = ModEvent.Create('YM.Slots.REFRESH')
		ModEvent.PushString(handle, 'SetMenuOptions')
		ModEvent.Send(handle)
	});
	RefreshMCM()
}


export const saveSettings = function () {
	// SetIntValue(null, mcm_settings.AddCategories, mcm.GetModSettingInt(modname, mcm_settings.AddCategories))
	// SetIntValue(null, mcm_settings.RemoveCategories, mcm.GetModSettingInt(modname, mcm_settings.RemoveCategories))
	// SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, mcm_settings.SelectedSlot))
	// SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, mcm_settings.addSlotButton))
	// SetIntValue(null, mcm_settings., mcm.GetModSettingBool(modname, mcm_settings.inputSlotName) ? 1:0)
	// SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, ""))
	// SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, ""))

}

function FillMCMOptions () {
	// FilterMCMOptions('')	

    let lists: string[] = [ mcm_settings.SelectedSlot, storageKeys.menuBlackList, storageKeys.menuWhiteList ]

    // fill each menu with the default first option, "No Changes"
    lists.forEach(list => {
        StringListClear(null,list)
        StringListAdd(null, list, 'No Changes')
        mcm.SetModSettingString(modname, list, "No Changes")
    });

    // slot selection menu of first page
    Slot.getAllSlotNames().forEach(s => {
        let name: string = s
        StringListAdd(null, mcm_settings.SelectedSlot, name)
    });

    // item category editing, second page
    let volumes: number[] = Object.values(itemCategoryVolumes)
    Object.keys(itemCategoryVolumes).forEach((c, i) => {
        c = `f${c}:Categories`
        mcm.SetModSettingFloat(modname, c, volumes[i])
    })

    // // selecting a slot for each category, third page, setting each option to what's currently selected
    // let slots: Slot[] = Object.values(categoryToSlot)
    // Object.keys(categoryToSlot).forEach((c, i) => {
    //     c = `s${c}:SlotAssignment`
    //     let s: Slot = slots[i]
    //     mcm.SetModSettingString(modname, c, s.name)
    // })

    // //  filling each category menu with slot names as options
    // if (StringListCount(null, storageKeys.SlotAssignment) <= 0) { 
    //     let slot_names: string[] = Slot.getAllSlotNames()
    //     StringListClear(null, storageKeys.SlotAssignment)

    //     slot_names.forEach(s => {
    //         StringListAdd(null, storageKeys.SlotAssignment, s)
    //     })
    // }

    // hide all group one mcm settings until a slot is chosen from sActiveSlot, the mcm option
    HideGroupOne(true)

    mcm.SetModSettingInt(modname, "iWidgetX:Slots", GetBaseWidgetPos()[0])
    mcm.SetModSettingInt(modname, "iWidgetY:Slots", GetBaseWidgetPos()[1])

    mcm.SetModSettingInt(modname, "iInventoryWidgetX:Slots", inventoryCurrentHighlighted.getPosition()[0])
    mcm.SetModSettingInt(modname, "iInventoryWidgetY:Slots", inventoryCurrentHighlighted.getPosition()[1])
};

function fillSlotCategoryLists(selected_slot: Slot){


    let lists: string[] = [ storageKeys.menuBlackList, storageKeys.menuWhiteList ]

    // add no changes
    lists.forEach(list => {
        StringListClear(null,list)
        StringListAdd(null, list, 'No Changes')
        mcm.SetModSettingString(modname, list, "No Changes")
    });

    Object.keys(categoryToSlot).forEach((c, i) => {
        if (Number(c) || c == '0'){return;}
        let slot: Slot = Object.values(categoryToSlot)[i]
        let under_index: number = c.indexOf('_', 9) + 1
        // c = c.slice(under_index)
        if (slot == selected_slot){
            StringListAdd(null, storageKeys.menuBlackList, c)
        }
        else {
            StringListAdd(null, storageKeys.menuWhiteList, c)
        }
    });
}

// Function to clear and refill the mcm menu lists according to a filter criteria
function FilterMCMOptions (query: string) {
	if ( !query ) { query = '';};
	// FillMCMOptions()
	const mainKey = "YM.Lorica.MCM.Enum."
	// arr = mainKey + arr
	let keys = [ "Upkeep", "Blacklist", "Exclusion" ]
	keys.forEach(key => {
		key = mainKey + key
		let filtered = FilterOptions(StringListToArray(null, key), query)
		if (!filtered){return;}
		filtered.unshift('No Changes')
		StringListClear(null, key)
		filtered.forEach(f => {
			StringListAdd(null, key, f, false)
		})
	})
	SetMenuOptions()
	RefreshMCM()
}

function FilterOptions (arr: string[], query: string) {
	if (!arr) {return arr}
	return arr.filter(function(el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
	})
}

function HideGroupOne(makeVisible: boolean){
    makeVisible = !makeVisible
    mcm.SetModSettingBool(modname, 'bHiddenToggle1:Slots', makeVisible)
    RefreshMCM()
}

function stringToSetting(changed_setting: string){
    let i: number = Object.values(mcm_settings).indexOf(changed_setting)
    return Object.values(mcm_settings)[i]
}

function solveSlotStoragePath(s: Slot){
    return `YM.Slots.${s.name}.`
}

function SetFloatSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)

    // SetFloatValue(null, `YM.Slots.${ slot.name }.${key}`, mcm.GetModSettingFloat(modname, key))
    slot.baseSize = mcm.GetModSettingFloat(modname, changed_setting)
}

function SetIntSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    // SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingInt(modname, key))
    // slot.baseSize = mcm.GetModSettingFloat(modname, key)
}

function SetBoolSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    let value: boolean = mcm.GetModSettingBool(modname, key)

    if (changed_setting.includes('bAddSlot') || changed_setting.includes('DeleteSlot')){
        mcm.SetModSettingBool(modname, changed_setting, false)

        if (key.includes('bAddSlot')){
            let newSlot: string = mcm.GetModSettingString(modname, 'sAddSlotName:Slots')
            mcm.SetModSettingString(modname, 'sAddSlotName:Slots', 'Enter')
            new Slot(newSlot, 50, GetBaseWidgetPos()[0], GetBaseWidgetPos()[1])
        }
        else if (key.includes('DeleteSlot')){
            if (!slot){return;}
            let oldSlot_name: string = mcm.GetModSettingString(modname, 'sActiveSlots:Slots')
            let oldSlot: Slot = getSlotFromName(oldSlot_name)
            let allSlots: Slot[] = Slot.getAllSlots()
            let firstSlot: Slot = allSlots[0]

            allSlots.splice(allSlots.indexOf(oldSlot), 1)

            Object.values(categoryToSlot).forEach((s, i) => {
                if (s === oldSlot){Object.values(categoryToSlot)[i] = firstSlot}
            })
           
            // can't really delete the object
            oldSlot.widget.setAlpha(0)
            
            Debug.messageBox(`Reverted ${oldSlot_name}'s assigned items to a default slot, ${firstSlot.name}`)
        }
    }
    else if (changed_setting.includes('Reset')){
        let data_json: string = 'data/skse/plugins/InventorySlots/Slots.json';
        let keyword_json: string = 'data/skse/plugins/InventorySlots/Keywords.json';

        let original_data = {"volumes":{"ItemType_WeaponArrow":1,"ItemType_WeaponArrow_Equipped":1,"ItemType_WeaponBolt":0.5,"ItemType_WeaponBolt_Equipped":0.5,"ItemType_Weapon1H":5,"ItemType_Weapon1H_Equipped":5,"ItemType_Weapon2H":10,"ItemType_Weapon2H_Equipped":10,"ItemType_WeaponDagger":2,"ItemType_WeaponDagger_Equipped":2,"ItemType_WeaponCrossBow":8,"ItemType_WeaponCrossBow_Equipped":8,"ItemType_WeaponBow":8,"ItemType_WeaponBow_Equipped":8,"ItemType_ArmorShield":9,"ItemType_ArmorShield_Equipped":9,"ItemType_ArmorCuirass":15,"ItemType_ArmorCuirass_Equipped":15,"ItemType_ArmorBoots":6,"ItemType_ArmorBoots_Equipped":6,"ItemType_ArmorHelmet":6,"ItemType_ArmorHelmet_Equipped":6,"ItemType_ArmorGauntlets":4,"ItemType_ArmorGauntlets_Equipped":4,"ItemType_Clothes":6,"ItemType_Clothes_Equipped":6,"ItemType_Jewelry":3,"ItemType_Jewelry_Equipped":3,"ItemType_BookScroll":2,"ItemType_Food":1,"ItemType_Potion":1,"ItemType_Drink":2,"ItemType_Ingredient":0.1,"ItemType_Gem":1,"ItemType_Soulgem":1,"ItemType_Lockpick":0.5,"ItemType_MiscLarge":5,"ItemType_MiscMedium":3,"ItemType_MiscSmall":0.1,"ItemType_Gold":0,"ItemType_OreIngot":2,"ItemType_HidePelt":1},"slots":[{"name":"Misc","baseSize":200,"currentSize":0,"widget":{"index":2,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":800},"items":[]},{"name":"Weapons","baseSize":20,"currentSize":0,"widget":{"index":3,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":820},"items":[]},{"name":"Quiver","baseSize":60,"currentSize":0,"widget":{"index":4,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":840},"items":[]},{"name":"Valuables","baseSize":50,"currentSize":0,"widget":{"index":5,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":860},"items":[]},{"name":"Bottles","baseSize":10,"currentSize":0,"widget":{"index":6,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":880},"items":[]}],"Category-to-Slots":[["ItemType_WeaponArrow","Quiver"],["ItemType_WeaponArrow_Equipped","Quiver"],["ItemType_WeaponBolt","Quiver"],["ItemType_WeaponBolt_Equipped","Quiver"],["ItemType_Weapon1H","Weapons"],["ItemType_Weapon1H_Equipped","Weapons"],["ItemType_Weapon2H","Weapons"],["ItemType_Weapon2H_Equipped","Weapons"],["ItemType_WeaponDagger","Weapons"],["ItemType_WeaponDagger_Equipped","Weapons"],["ItemType_WeaponCrossBow","Weapons"],["ItemType_WeaponCrossBow_Equipped","Weapons"],["ItemType_WeaponBow","Weapons"],["ItemType_WeaponBow_Equipped","Weapons"],["ItemType_ArmorShield","Misc"],["ItemType_ArmorShield_Equipped","Misc"],["ItemType_ArmorCuirass","Misc"],["ItemType_ArmorCuirass_Equipped","Misc"],["ItemType_ArmorBoots","Misc"],["ItemType_ArmorBoots_Equipped","Misc"],["ItemType_ArmorHelmet","Misc"],["ItemType_ArmorHelmet_Equipped","Misc"],["ItemType_ArmorGauntlets","Misc"],["ItemType_ArmorGauntlets_Equipped","Misc"],["ItemType_Clothes","Misc"],["ItemType_Clothes_Equipped","Misc"],["ItemType_Jewelry","Valuables"],["ItemType_Jewelry_Equipped","Valuables"],["ItemType_BookScroll","Misc"],["ItemType_Food","Misc"],["ItemType_Potion","Bottles"],["ItemType_Drink","Bottles"],["ItemType_Ingredient","Misc"],["ItemType_Gem","Valuables"],["ItemType_Soulgem","Valuables"],["ItemType_Lockpick","Misc"],["ItemType_MiscLarge","Misc"],["ItemType_MiscMedium","Misc"],["ItemType_MiscSmall","Misc"],["ItemType_Gold","Valuables"],["ItemType_OreIngot","Misc"],["ItemType_HidePelt","Misc"]],"Current Item Widget Position":[950,800],"Base Widget Position":[1500,800]}
        let original_keywords = {"keywords":[{"WeapTypeBattleaxe":"ItemType_Weapon2H"},{"WeapTypeBow":"ItemType_WeaponBow"},{"WeapTypeDagger":"ItemType_WeaponDagger"},{"WeapTypeGreatsword":"ItemType_Weapon2H"},{"WeapTypeMace":"ItemType_Weapon1H"},{"WeapTypeStaff":"ItemType_Weapon1H"},{"WeapTypeSword":"ItemType_Weapon1H"},{"WeapTypeWarAxe":"ItemType_Weapon1H"},{"WeapTypeWarhammer":"ItemType_Weapon2H"},{"VendorItemArrow":"ItemType_WeaponArrow"},{"ArmorBoots":"ItemType_ArmorBoots"},{"ArmorClothing":"ItemType_Clothes"},{"ArmorCuirass":"ItemType_ArmorCuirass"},{"ArmorGauntlets":"ItemType_ArmorGauntlets"},{"ArmorHelmet":"ItemType_ArmorHelmet"},{"ArmorJewelry":"ItemType_Jewelry"},{"ArmorShield":"ItemType_ArmorShield"},{"VendorItemAnimalHide":"ItemType_HidePelt"},{"VendorItemAnimalPart":"ItemType_Food"},{"VendorItemClutter":"ItemType_MiscSmall"},{"VendorItemFireword":"ItemType_MiscMedium"},{"VendorItemFood":"ItemType_Food"},{"VendorItemFoodRaw":"ItemType_Food"},{"VendorItemGem":"ItemType_Gem"},{"VendorItemIngredient":"ItemType_Ingredient"},{"VendorItemJewelry":"ItemType_Jewelry"},{"VendorItemOreIngot":"ItemType_OreIngot"},{"VendorItemPoison":"ItemType_Potion"},{"VendorItemPotion":"ItemType_Potion"},{"VendorItemRecipe":"ItemType_BookScroll"},{"VendorItemScroll":"ItemType_BookScroll"},{"VendorItemSoulGem":"ItemType_Soulgem"},{"VendorItemSpellTome":"ItemType_BookScroll"},{"VendorItemBook":"ItemType_BookScroll"},{"VendorItemStaff":"ItemType_Weapon1H"},{"VendorItemTool":"ItemType_MiscSmall"}]}

        WriteToFile(data_json, JSON.stringify(original_data), false);
        WriteToFile(keyword_json, JSON.stringify(original_keywords), false);
        importDataFromFile()
    }
    else if (changed_setting.includes('Import')){
        importDataFromFile()
    }
}

function SetStringSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    let value: string = mcm.GetModSettingString(modname, key)
    if (value == 'No Changes') { return;}
    if (key.includes('CategoriesRemove')){
        StringListAdd(null, storageKeys.menuWhiteList, value);
        StringListRemove(null, storageKeys.menuBlackList, value);
        categoryToSlot[value] = null // sets to the default slot 'Misc_slot'
    }
    else if (key.includes('CategoriesAdd')){
        StringListAdd(null, storageKeys.menuBlackList, value);
        StringListRemove(null, storageKeys.menuWhiteList, value);
        categoryToSlot[value] = slot
    }
    else if(key.includes('sAddSlot')){RefreshMCM()}
}

function SetSlotWidgetPositionSettings(slot: Slot){
    let xy: number[] = slot.widget.getPosition()
    mcm.SetModSettingInt(modname, "iSlotWidgetX:Slots", xy[0])
    mcm.SetModSettingInt(modname, "iSlotWidgetY:Slots", xy[1])
}

function checkOrphanedCategories(){
    let keys: string[] = Object.keys(categoryToSlot)
    let orphans: string[] = []
    Object.values(categoryToSlot).forEach((s, i) => {
        if (!s){orphans.push(keys[i])}
    })
    return orphans
}

//__________EVENTS____________________________________________

export let mainMcm  = ()  => { 

    once('update', () => {
        pl()?.registerForModEvent('Slots_MCM_PageSelect', 'OnPageSelect')
        pl()?.registerForModEvent('Slots_Menu_Open', 'OnMenuOpen')
        pl()?.registerForModEvent('YM.Slots.SETTING_CHANGED', 'OnSettingChanged')
        pl()?.registerForModEvent('Slots_Menu_Close_Update', 'OnMenuClose')
        // initItemCategoriesList()
    });


    hooks.sendPapyrusEvent.add({
        enter(ctx) {
            // Check if any item categories are unassigned
            let emptyCat: string[] = checkOrphanedCategories()
            if (emptyCat.length != 0){
                Debug.messageBox(`The following categories need an assigned slot: ${JSON.stringify(emptyCat)}`)
            }
            EvaluateInventory()
            saveToDataFile()
            Slot.updateWidgets()
            Slot.fadeAllOut()
            inventoryCurrentHighlighted.setAlpha(0)
        },
    }, 0x14, 0x14, 'OnMenuClose')

    hooks.sendPapyrusEvent.add({
        enter(ctx) {
            // printConsole(ctx.papyrusEventName)
            FillMCMOptions()
            Slot.fadeAllIn()
            inventoryCurrentHighlighted.setAlpha(1)
        },
    }, 0x14, 0x14, 'OnPageSelect' || 'OnMenuOpen')

    hooks.sendPapyrusEvent.add({
        enter(ctx) {
            // printConsole(ctx.papyrusEventName)
            once('update', () => {
                let changed_setting: string = GetStringValue(null, storageKeys.changed_setting)
                let value: string
                let slot: Slot
                // printConsole(changed_setting)
                value = mcm.GetModSettingString(modname, mcm_settings.SelectedSlot)
                if (value.toLowerCase() == 'No Changes'.toLowerCase()){HideGroupOne(true)}
                slot  = getSlotFromName(value) 
                // printConsole(slot.name)
                if (changed_setting.includes('ActiveSlot')){ 
                    if (!slot){return;}
                    HideGroupOne(false); mcm.SetModSettingFloat(modname, mcm_settings.sliderSlotMax, slot.baseSize);
                    fillSlotCategoryLists(slot) 
                    SetSlotWidgetPositionSettings(slot)
                }
                else if (changed_setting[0] == 'f'){
                    // SetFloatSetting(changed_setting, slot)
                    if (changed_setting.includes('SlotMax')){ 
                        if (!slot){return;}
                        slot.baseSize =  mcm.GetModSettingFloat(modname, changed_setting)
                    }
                    else if (changed_setting.includes('ItemType')){ 
                        let newSize: number = mcm.GetModSettingFloat(modname, changed_setting)
                        changed_setting = changed_setting.slice(1, changed_setting.length  - 11)
                        // printConsole(changed_setting)
                        itemCategoryVolumes[changed_setting] = newSize
                        // printConsole(itemCategoryVolumes[changed_setting])
                    }
                    // if (changed_setting.includes('fSlotMax')){slot}
                } 
                else if (changed_setting[0] == 'i') {
                    if (changed_setting.includes('SlotWidgetX') || changed_setting.includes('SlotWidgetY')){
                        if (!slot){return;}
                        slot.widget.setPosition(mcm.GetModSettingInt(modname, "iSlotWidgetX:Slots"), mcm.GetModSettingInt(modname, "iSlotWidgetY:Slots"))
                        // printConsole(`This slot has been moved to ${slot.widget.getPosition()} `)
                        saveToDataFile()
                    }
                    else if (changed_setting.includes('InventoryWidgetX') || changed_setting.includes('InventoryWidgetY')){
                        inventoryCurrentHighlighted.setPosition(mcm.GetModSettingInt(modname, "iInventoryWidgetX:Slots"), mcm.GetModSettingInt(modname, "iInventoryWidgetY:Slots"))
                    }
                    else if (changed_setting.includes('iWidgetX') || changed_setting.includes('iWidgetY')){
                        setBaseWidgetPos([ mcm.GetModSettingInt(modname, "iWidgetX:Slots"), mcm.GetModSettingInt(modname, "iWidgetY:Slots") ])
                        Slot.setAllWidgetPos(GetBaseWidgetPos())
                    }
                    SetIntSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 'b') {
                    SetBoolSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 's') {
                    if (!slot){return;}
                    if (value == 'No Changes') { return;}
                    SetStringSetting(changed_setting, slot)
                    // printConsole( mcm.GetModSettingString(modname, mcm_settings.RemoveCategories ) )
                }

                SetMenuOptions()
            });
            
        },
    }, 0x14, 0x14, 'OnSettingChanged')

 }