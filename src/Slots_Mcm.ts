import {on, once, hooks, printConsole, Game, Form, Debug, Key } from  'skyrimPlatform';
import { FormListToArray, GetStringValue, SetFloatValue, SetIntValue, SetStringValue, StringListAdd, StringListClear, StringListCopy, StringListToArray } from "@skyrim-platform/papyrus-util/StorageUtil";
import * as mcm from "@skyrim-platform/mcm-helper/MCM"
import { ModEvent } from "./modevent";
import { ItemCategories, BaseSlots, Slot } from "./InventorySlots";


//___________VARIABLES______________________________________

let mcm_settings = { 

    SelectedSlot: 'sActiveSlots:Slots',
    inputSlotName: 'sAddSlotName:Slots',
    addSlotButton: 'bAddSlotButton:Slots',
    removeSlotButton: 'bDeleteSlotButton:Slots',
    sliderSlotMax: 'fSlotMax:Slots',
    AddCategories: 'sSlotCategoriesRemove:Lists',
    RemoveCategories: 'sSlotCategoriesAdd:Lists',

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
    Object.values(ItemCategories).forEach(c => {
        if (Number(c) || c as number == 0 ){return;}
        StringListAdd(null, storageKeys.categories, c as string)
    });
}

function FillMCMOptions () {
	FilterMCMOptions('')	
	var a: Form[] 

    StringListClear(null, mcm_settings.SelectedSlot)
    StringListClear(null, storageKeys.menuBlackList)
    StringListClear(null, storageKeys.menuWhiteList)
    StringListAdd(null, mcm_settings.SelectedSlot, 'No Changes')
    StringListAdd(null, storageKeys.menuWhiteList, 'No Changes')
    StringListAdd(null, storageKeys.menuBlackList, 'No Changes')
    BaseSlots.forEach(s => {
        let name: string = s.name
        StringListAdd(null, mcm_settings.SelectedSlot, name)
        StringListAdd(null, storageKeys.menuWhiteList, name)
        StringListAdd(null, storageKeys.menuBlackList, name)
    });
    mcm.SetModSettingString(modname, mcm_settings.SelectedSlot, "No Changes")
    mcm.SetModSettingString(modname, mcm_settings.RemoveCategories, "No Changes")
    mcm.SetModSettingString(modname, mcm_settings.AddCategories, "No Changes")
    HideGroupOne(true)
	// SetMenuOptions()
	// RefreshMCM()
	// // printConsole('refreshmenu has been sent')
};

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

function getSlotFromName(name: string): Slot | undefined{
    let output: Slot | undefined = undefined
    BaseSlots.forEach(s => {
        let s_name: string = s.name
        if (name.toLowerCase() == s_name.toLowerCase()) {output = s}
    });
    return output
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
    SetFloatValue(null, `YM.Slots.${ slot.name }.${key}`, mcm.GetModSettingFloat(modname, key))
    slot.baseSize = mcm.GetModSettingFloat(modname, key)
}

function SetIntSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingInt(modname, key))
    slot.baseSize = mcm.GetModSettingFloat(modname, key)
}

function SetBoolSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingBool(modname, key) ? 1:0)
    slot.baseSize = mcm.GetModSettingFloat(modname, key)
}

function SetStringSetting(changed_setting: string, slot: Slot) {
    let key: string = stringToSetting(changed_setting)
    SetStringValue(null,'YM.Slots.' + key, mcm.GetModSettingString(modname, key))
    slot.baseSize = mcm.GetModSettingFloat(modname, key)
}

//__________EVENTS____________________________________________

export let mainMcm  = ()  => { 

    once('update', () => {
        pl()?.registerForModEvent('Slots_MCM_PageSelect', 'OnPageSelect')
        pl()?.registerForModEvent('Slots_Menu_Open', 'OnMenuOpen')
        pl()?.registerForModEvent('YM.Slots.SETTING_CHANGED', 'OnSettingChanged')
        initItemCategoriesList()
    });


    // on('modEvent', (event) => {
    //     printConsole(event.eventName)
    // });

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
                let value: string = mcm.GetModSettingString(modname, mcm_settings.SelectedSlot)
                let slot: Slot = getSlotFromName(value)
                // printConsole(changed_setting)
                if (changed_setting.includes('ActiveSlot')){ 
                    if (value == 'No Changes'){HideGroupOne(true)}
                    else { HideGroupOne(false); mcm.SetModSettingFloat(modname, mcm_settings.sliderSlotMax, slot.baseSize)}
                }
                else if (changed_setting[0] == 'f'){
                    SetFloatSetting(changed_setting, slot)
                } 
                else if (changed_setting[0] == 'i') {
                    SetIntSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 'b') {
                    SetBoolSetting(changed_setting, slot)
                }
                else if (changed_setting[0] == 's') {
                    SetStringSetting(changed_setting, slot)
                }

            });
            
        },
    }, 0x14, 0x14, 'OnSettingChanged')

 }