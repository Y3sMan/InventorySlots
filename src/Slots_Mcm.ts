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
    if (key.includes('bAddSlot')){}
    // SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingBool(modname, key) ? 1:0)
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