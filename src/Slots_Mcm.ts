import {on, once, hooks, printConsole, Game, Form, Debug, Key, PlayerPositionEventType } from  'skyrimPlatform';
import { FormListToArray, GetStringValue, SetFloatValue, SetIntValue, SetStringValue, StringListAdd, StringListClear, StringListCopy, StringListRemove, StringListToArray } from "@skyrim-platform/papyrus-util/StorageUtil";
import * as mcm from "@skyrim-platform/mcm-helper/MCM"
import { ModEvent } from "./modevent";
import { getSlotFromName, ItemCategories,  Slot, saveToDataFile, importDataFromFile, categoryToSlot, itemCategoryVolumes, EvaluateInventory } from "./InventorySlots";


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

function initItemCategoriesList(){
    // Object.values(ItemCategories).forEach(c => {
    //     if (Number(c) || c as number == 0 ){return;}
    //     StringListAdd(null, storageKeys.categories, c as string)
    // });

}

function FillMCMOptions () {
	FilterMCMOptions('')	
	var a: Form[] 

    let lists: string[] = [ mcm_settings.SelectedSlot, storageKeys.menuBlackList, storageKeys.menuWhiteList ]

    lists.forEach(list => {
        StringListClear(null,list)
        StringListAdd(null, list, 'No Changes')
        mcm.SetModSettingString(modname, list, "No Changes")
    });

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
	// SetMenuOptions()
	// RefreshMCM()
	// // printConsole('refreshmenu has been sent')
};

function fillSlotCategoryLists(selected_slot: Slot){


    let lists: string[] = [ storageKeys.menuBlackList, storageKeys.menuWhiteList ]

    lists.forEach(list => {
        StringListClear(null,list)
        StringListAdd(null, list, 'No Changes')
        mcm.SetModSettingString(modname, list, "No Changes")
    });

    Object.keys(categoryToSlot).forEach((c, i) => {
        if (Number(c) || c == '0'){return;}
        let slot: Slot = Object.values(categoryToSlot)[i]
        // c = c.slice(c.lastIndexOf('_') + 1)
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
        let original_data = {"volumes":{"RABInv_ItemType_WeaponArrow":1,"RABInv_ItemType_WeaponArrow_Equipped":1,"RABInv_ItemType_WeaponBolt":0.5,"RABInv_ItemType_WeaponBolt_Equipped":0.5,"RABInv_ItemType_Weapon1H":5,"RABInv_ItemType_Weapon1H_Equipped":5,"RABInv_ItemType_Weapon2H":10,"RABInv_ItemType_Weapon2H_Equipped":10,"RABInv_ItemType_WeaponDagger":2,"RABInv_ItemType_WeaponDagger_Equipped":2,"RABInv_ItemType_WeaponCrossBow":8,"RABInv_ItemType_WeaponCrossBow_Equipped":8,"RABInv_ItemType_WeaponBow":8,"RABInv_ItemType_WeaponBow_Equipped":8,"RABInv_ItemType_ArmorShield":9,"RABInv_ItemType_ArmorShield_Equipped":9,"RABInv_ItemType_ArmorCuirass":15,"RABInv_ItemType_ArmorCuirass_Equipped":15,"RABInv_ItemType_ArmorBoots":6,"RABInv_ItemType_ArmorBoots_Equipped":6,"RABInv_ItemType_ArmorHelmet":6,"RABInv_ItemType_ArmorHelmet_Equipped":6,"RABInv_ItemType_ArmorGauntlets":4,"RABInv_ItemType_ArmorGauntlets_Equipped":4,"RABInv_ItemType_Clothes":6,"RABInv_ItemType_Clothes_Equipped":6,"RABInv_ItemType_Jewelry":3,"RABInv_ItemType_Jewelry_Equipped":3,"RABInv_ItemType_BookScroll":2,"RABInv_ItemType_Food":1,"RABInv_ItemType_Potion":1,"RABInv_ItemType_Drink":2,"RABInv_ItemType_Ingredient":0.1,"RABInv_ItemType_Gem":1,"RABInv_ItemType_Soulgem":1,"RABInv_ItemType_Lockpick":0.5,"RABInv_ItemType_MiscLarge":5,"RABInv_ItemType_MiscMedium":3,"RABInv_ItemType_MiscSmall":0.1,"RABInv_ItemType_Gold":0,"RABInv_ItemType_OreIngot":2,"RABInv_ItemType_HidePelt":1},"slots":[{"name":"Misc","baseSize":200,"currentSize":0,"widget":{"index":2,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":800},"items":[]},{"name":"Weapons","baseSize":20,"currentSize":0,"widget":{"index":3,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":820},"items":[]},{"name":"Quiver","baseSize":60,"currentSize":0,"widget":{"index":4,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":840},"items":[]},{"name":"Valuables","baseSize":50,"currentSize":0,"widget":{"index":5,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":860},"items":[]},{"name":"Bottles","baseSize":10,"currentSize":0,"widget":{"index":6,"type":"undefined","owningMod":"InventorySlots","x":1500,"y":880},"items":[]}],"Category-to-Slots":[["RABInv_ItemType_WeaponArrow","Quiver"],["RABInv_ItemType_WeaponArrow_Equipped","Quiver"],["RABInv_ItemType_WeaponBolt","Quiver"],["RABInv_ItemType_WeaponBolt_Equipped","Quiver"],["RABInv_ItemType_Weapon1H","Weapons"],["RABInv_ItemType_Weapon1H_Equipped","Weapons"],["RABInv_ItemType_Weapon2H","Weapons"],["RABInv_ItemType_Weapon2H_Equipped","Weapons"],["RABInv_ItemType_WeaponDagger","Weapons"],["RABInv_ItemType_WeaponDagger_Equipped","Weapons"],["RABInv_ItemType_WeaponCrossBow","Weapons"],["RABInv_ItemType_WeaponCrossBow_Equipped","Weapons"],["RABInv_ItemType_WeaponBow","Weapons"],["RABInv_ItemType_WeaponBow_Equipped","Weapons"],["RABInv_ItemType_ArmorShield","Misc"],["RABInv_ItemType_ArmorShield_Equipped","Weapons"],["RABInv_ItemType_ArmorCuirass","Misc"],["RABInv_ItemType_ArmorCuirass_Equipped","Weapons"],["RABInv_ItemType_ArmorBoots","Misc"],["RABInv_ItemType_ArmorBoots_Equipped","Weapons"],["RABInv_ItemType_ArmorHelmet","Misc"],["RABInv_ItemType_ArmorHelmet_Equipped","Weapons"],["RABInv_ItemType_ArmorGauntlets","Misc"],["RABInv_ItemType_ArmorGauntlets_Equipped","Weapons"],["RABInv_ItemType_Clothes","Misc"],["RABInv_ItemType_Clothes_Equipped","Misc"],["RABInv_ItemType_Jewelry","Valuables"],["RABInv_ItemType_Jewelry_Equipped","Weapons"],["RABInv_ItemType_BookScroll","Misc"],["RABInv_ItemType_Food","Misc"],["RABInv_ItemType_Potion","Bottles"],["RABInv_ItemType_Drink","Bottles"],["RABInv_ItemType_Ingredient","Misc"],["RABInv_ItemType_Gem","Valuables"],["RABInv_ItemType_Soulgem","Valuables"],["RABInv_ItemType_Lockpick","Misc"],["RABInv_ItemType_MiscLarge","Misc"],["RABInv_ItemType_MiscMedium","Misc"],["RABInv_ItemType_MiscSmall","Misc"],["RABInv_ItemType_Gold","Valuables"],["RABInv_ItemType_OreIngot","Misc"],["RABInv_ItemType_HidePelt","Misc"]],"Current Item Widget Position":[950,800],"Base Widget Position":[1500,800]}
        WriteToFile(data_json, JSON.stringify(original_data), false);
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
        categoryToSlot[value] = Slot.getAllSlots()[0] // sets to the default slot 'Misc_slot'
    }
    else if (key.includes('CategoresAdd')){
        StringListAdd(null, storageKeys.menuBlackList, value);
        StringListRemove(null, storageKeys.menuWhiteList, value);
        categoryToSlot[value] = slot
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
        },
    }, 0x14, 0x14, 'OnMenuClose')

    hooks.sendPapyrusEvent.add({
        enter(ctx) {
            printConsole(ctx.papyrusEventName)
            FillMCMOptions()
        },
    }, 0x14, 0x14, 'OnPageSelect' || 'OnMenuOpen')

    hooks.sendPapyrusEvent.add({
        enter(ctx) {
            // printConsole(ctx.papyrusEventName)
            once('update', () => {
                let changed_setting: string = GetStringValue(null, storageKeys.changed_setting)
                let value: string
                let slot: Slot
                printConsole(changed_setting)
                value = mcm.GetModSettingString(modname, mcm_settings.SelectedSlot)
                if (value.toLowerCase() == 'No Changes'.toLowerCase()){HideGroupOne(true)}
                slot  = getSlotFromName(value) 
                // printConsole(slot.name)
                if (changed_setting.includes('ActiveSlot')){ 
                    if (!slot){return;}
                    HideGroupOne(false); mcm.SetModSettingFloat(modname, mcm_settings.sliderSlotMax, slot.baseSize);
                    fillSlotCategoryLists(slot) 
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
                        printConsole(changed_setting)
                        itemCategoryVolumes[changed_setting] = newSize
                        printConsole(itemCategoryVolumes[changed_setting])
                    }
                    // if (changed_setting.includes('fSlotMax')){slot}
                } 
                else if (changed_setting[0] == 'i') {
                    if (!slot){return;}
                    SetIntSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 'b') {
                    if (!slot){return;}
                    SetBoolSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 's') {
                    if (!slot){return;}
                    if (value == 'No Changes') { return;}
                    SetStringSetting(changed_setting, slot)
                    printConsole( mcm.GetModSettingString(modname, mcm_settings.RemoveCategories ) )
                }

                SetMenuOptions()
            });
            
        },
    }, 0x14, 0x14, 'OnSettingChanged')

 }