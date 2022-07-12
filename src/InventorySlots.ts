import { once, on, Form, Keyword, Game, Utility, printConsole, MiscObject, ObjectReference, browser, destroyAllTexts, hooks, Debug, Actor, FormType, Potion, EventHandle, unsubscribe, settings, SlotType } from  'skyrimPlatform';
import * as su from '@skyrim-platform/papyrus-util/StorageUtil'
import { WriteToFile, ReadFromFile, FileExists } from "@skyrim-platform/papyrus-util/MiscUtil";
import * as ju from '@skyrim-platform/papyrus-util/JsonUtil'
import {ModEvent} from './modevent'
import * as wt from '../../modules/SPTextUtils/spTextUtils'
import { Ui } from '@skyrim-platform/skyrim-platform';
import {AddAllItemsToArray} from '@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions'
import { mainMcm } from "./Slots_Mcm";

// script check
once('update', () => {
    const checkScriptNumbers = function (name: string) {
            if (FileExists(`data/platform/plugins/${name}`) && FileExists(`data/platform/pluginsdev/${name}`)){printConsole('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT')}
    }
    checkScriptNumbers('InventorySlots.js')
});

//__________________________ Variable Setup______________________________________________
browser.setVisible(true)
let x: number = 2500
let y: number = 1000
const white: number[] = [1,1,1,1]
destroyAllTexts()
const inventoryCurrentHighlighted: wt.spText = new wt.spText(1500,y, 'currentItem', [1,1,1,0], undefined, 'InventorySlots')
// ____________________FUNCTIONS___________________________________________
export function pl() { return Game.getPlayer(); }

enum weapKwdIds {
	WeapTypeBattleaxe = 448818,
	WeapTypeBoundArrow = 1103105,
	WeapTypeBoundWeapon = 227817,
	WeapTypeBow = 124693,
	WeapTypeDagger = 124691,
	WeapTypeGreatsword = 448817,
	WeapTypeMace = 124692,
	// WeapTypeMelee = 422523,
	WeapTypeStaff = 124694,
	WeapTypeSword = 124689,
	// WeapTypeUnique = 1363610,
	WeapTypeWarAxe = 124690,
	WeapTypeWarhammer = 448816
}

enum armorKwdIds {
	ArmorBoots = 442605,
	ArmorClothing = 441320,
	ArmorCuirass = 442604,
	ArmorGauntlets = 442607,
	// ArmorHeavy = 441298,
	ArmorHelmet = 442606,
	ArmorJewelry = 441321,
	// ArmorLight = 441299,
	ArmorShield = 615858
}

enum miscKwdIds {
	VendorItemAnimalHide = 595178,
	VendorItemAnimalPart = 595179,
	// VendorItemArmor = 588121,
	VendorItemArrow = 595943,
	// VendorItemClothing = 588123,
	VendorItemClutter = 595177,
	VendorItemDaedricArtifact = 595944,
	VendorItemFireword = 781527,
	VendorItemFood = 577002,
	VendorItemFoodRaw = 659030,
	VendorItemGem = 595181,
	VendorItemIngredient = 577003,
	VendorItemJewelry = 588122,
	VendorItemKey = 595183,
	// VendorItemOrderRobes = 294336,
	VendorItemOreIngot = 595180,
	VendorItemPeaceweed = 295999,
	VendorItemPoison = 577005,
	VendorItemPotion = 577004,
	// VendorItemPropertyArkMarket = 1316183,
	// VendorItemPropertyArkUpperCity = 290106,
	VendorItemRecipe = 1006768,
	VendorItemScroll = 659031,
	VendorItemSoulGem = 604067,
	VendorItemSpellTome = 604069,
	VendorItemBook = 604066,
	VendorItemStaff = 604068,
	VendorItemTool = 595182,
	VendorItemWeapon = 588120
}

export enum ItemCategories{  

// weapons
RABInv_ItemType_WeaponArrow,
RABInv_ItemType_WeaponArrow_Equipped,
RABInv_ItemType_WeaponBolt,
RABInv_ItemType_WeaponBolt_Equipped,
RABInv_ItemType_Weapon1H,
RABInv_ItemType_Weapon1H_Equipped,
RABInv_ItemType_Weapon2H,
RABInv_ItemType_Weapon2H_Equipped,
RABInv_ItemType_WeaponDagger,
RABInv_ItemType_WeaponDagger_Equipped,
RABInv_ItemType_WeaponCrossBow,
RABInv_ItemType_WeaponCrossBow_Equipped,
RABInv_ItemType_WeaponBow,
RABInv_ItemType_WeaponBow_Equipped,

// armors
RABInv_ItemType_ArmorShield,
RABInv_ItemType_ArmorShield_Equipped,
RABInv_ItemType_ArmorCuirass,
RABInv_ItemType_ArmorCuirass_Equipped,
RABInv_ItemType_ArmorBoots,
RABInv_ItemType_ArmorBoots_Equipped,
RABInv_ItemType_ArmorHelmet,
RABInv_ItemType_ArmorHelmet_Equipped,
RABInv_ItemType_ArmorGauntlets,
RABInv_ItemType_ArmorGauntlets_Equipped,
RABInv_ItemType_Clothes,
RABInv_ItemType_Clothes_Equipped,
RABInv_ItemType_Jewelry,
RABInv_ItemType_Jewelry_Equipped,

// misc
RABInv_ItemType_BookScroll,
RABInv_ItemType_Food,
RABInv_ItemType_Potion,
RABInv_ItemType_Drink,
RABInv_ItemType_Ingredient,
RABInv_ItemType_Gem,
RABInv_ItemType_Soulgem,
RABInv_ItemType_Lockpick,
RABInv_ItemType_MiscLarge,
RABInv_ItemType_MiscMedium,
RABInv_ItemType_MiscSmall,
RABInv_ItemType_Gold,
RABInv_ItemType_OreIngot,
RABInv_ItemType_HidePelt

}

export let itemCategoryVolumes = { 
    // weapons
'RABInv_ItemType_WeaponArrow':1,
'RABInv_ItemType_WeaponArrow_Equipped':1,
'RABInv_ItemType_WeaponBolt':0.5,
'RABInv_ItemType_WeaponBolt_Equipped':0.5,
'RABInv_ItemType_Weapon1H':5,
'RABInv_ItemType_Weapon1H_Equipped':5,
'RABInv_ItemType_Weapon2H':10,
'RABInv_ItemType_Weapon2H_Equipped':10,
'RABInv_ItemType_WeaponDagger':2,
'RABInv_ItemType_WeaponDagger_Equipped':2,
'RABInv_ItemType_WeaponCrossBow':8,
'RABInv_ItemType_WeaponCrossBow_Equipped':8,
'RABInv_ItemType_WeaponBow':8,
'RABInv_ItemType_WeaponBow_Equipped':8,
//armors
'RABInv_ItemType_ArmorShield':9,
'RABInv_ItemType_ArmorShield_Equipped':9,
'RABInv_ItemType_ArmorCuirass':15,
'RABInv_ItemType_ArmorCuirass_Equipped':15,
'RABInv_ItemType_ArmorBoots':6,
'RABInv_ItemType_ArmorBoots_Equipped':6,
'RABInv_ItemType_ArmorHelmet':6,
'RABInv_ItemType_ArmorHelmet_Equipped':6,
'RABInv_ItemType_ArmorGauntlets':4,
'RABInv_ItemType_ArmorGauntlets_Equipped':4,
'RABInv_ItemType_Clothes':6,
'RABInv_ItemType_Clothes_Equipped':6,
'RABInv_ItemType_Jewelry':3,
'RABInv_ItemType_Jewelry_Equipped':3,
//misc
'RABInv_ItemType_BookScroll':2,
'RABInv_ItemType_Food':1,
'RABInv_ItemType_Potion':1,
'RABInv_ItemType_Drink':2,
'RABInv_ItemType_Ingredient':0.1,
'RABInv_ItemType_Gem':1,
'RABInv_ItemType_Soulgem':1,
'RABInv_ItemType_Lockpick':0.5,
'RABInv_ItemType_MiscLarge':5,
'RABInv_ItemType_MiscMedium':3,
'RABInv_ItemType_MiscSmall':0.1,
'RABInv_ItemType_Gold':0.0,
'RABInv_ItemType_OreIngot':2,
'RABInv_ItemType_HidePelt':1
}

let keywordToCategory = {
// weapons
448818 : ItemCategories.RABInv_ItemType_Weapon2H,
124693 : ItemCategories.RABInv_ItemType_WeaponBow,
124691 : ItemCategories.RABInv_ItemType_Weapon1H,
448817 : ItemCategories.RABInv_ItemType_Weapon2H,
124692 : ItemCategories.RABInv_ItemType_Weapon1H,
124694 : ItemCategories.RABInv_ItemType_Weapon1H,
124689 : ItemCategories.RABInv_ItemType_Weapon1H,
124690 : ItemCategories.RABInv_ItemType_Weapon1H,
448816 : ItemCategories.RABInv_ItemType_Weapon2H,
595943 : ItemCategories.RABInv_ItemType_WeaponArrow,

// armors
442605 : ItemCategories.RABInv_ItemType_ArmorBoots,
441320 : ItemCategories.RABInv_ItemType_Clothes,
442604 : ItemCategories.RABInv_ItemType_ArmorCuirass,
442607 : ItemCategories.RABInv_ItemType_ArmorGauntlets,
442606 : ItemCategories.RABInv_ItemType_ArmorHelmet,
441321 : ItemCategories.RABInv_ItemType_Jewelry,
615858 : ItemCategories.RABInv_ItemType_ArmorShield,

// Miscs
595178 : ItemCategories.RABInv_ItemType_HidePelt,
595179 : ItemCategories.RABInv_ItemType_Food,
595177 : ItemCategories.RABInv_ItemType_MiscSmall,
781527 : ItemCategories.RABInv_ItemType_MiscMedium,
577002 : ItemCategories.RABInv_ItemType_Food,
659030 : ItemCategories.RABInv_ItemType_Food,
595181 : ItemCategories.RABInv_ItemType_Gem,
577003 : ItemCategories.RABInv_ItemType_Ingredient,
588122 : ItemCategories.RABInv_ItemType_Jewelry,
595180 : ItemCategories.RABInv_ItemType_OreIngot,
577005 : ItemCategories.RABInv_ItemType_Potion,
577004 : ItemCategories.RABInv_ItemType_Potion,
1006768 : ItemCategories.RABInv_ItemType_BookScroll,
659031 : ItemCategories.RABInv_ItemType_BookScroll,
604067 : ItemCategories.RABInv_ItemType_Soulgem,
604069 : ItemCategories.RABInv_ItemType_BookScroll,
604066 : ItemCategories.RABInv_ItemType_BookScroll,
604068 : ItemCategories.RABInv_ItemType_Weapon1H,
595182 : ItemCategories.RABInv_ItemType_MiscSmall,
}

function determineItemCategory(item: number){
    const f: Form = Game.getFormEx(item)
    const isEquipped: boolean = pl()?.isEquipped(f)
    if (!f){return;}
    // printConsole(`isEquipped:: ${pl()?.isEquipped(f)}`)
	const kyds: Keyword[] = f.getKeywords()
    let key: number = -1
    if (item == 15){return ItemCategories.RABInv_ItemType_Gold} // gold doesn't have a keyword and needs to be treated different
	for (let i = 0; i < kyds?.length; i++) {
		const k = kyds[i];
		const f: number = Form.from(k)!.getFormID()
        if (Object.keys(keywordToCategory).includes(`${f}`)) {
            // @ts-ignore
            key = keywordToCategory[f];
            if (isEquipped){key += 1; if (key > 27){key = 0}}

            // printConsole(`determineItemCategory:: the key is ${key}`)
            // printConsole(`determineItemCategory:: the keyword id is ${f}`)

            return key
        }
        else {continue}
	}
    if (key == -1){return 0;}
}

function determineItemVolume(item: number): number{
    const category: number = determineItemCategory(item)
    const vol: number = Object.values(itemCategoryVolumes)[category]
    // printConsole(`determineItemVolume:: the vol is ${vol}`)
    if (!vol){return 0}
    return vol
}

let BaseSlots: Slot[] = []
export class Slot {
    name: string
    baseSize: number
    currentSize: number
    widget: wt.spText
    items: number[]
    constructor(name: string, maxSize: number, x: number, y: number) {
        this.name = name
        this.baseSize = maxSize            
        this.currentSize = 0
        this.widget = new wt.spText(x,y, this.name, white, undefined, 'InventorySlots')
        this.items = []
        BaseSlots.push(this)
    }

    getFilled(){
        return this.currentSize.toFixed(2)
    }
    getFilledProportion(){
        return `${this.name}:   ${this.currentSize.toFixed(2)} / ${this.baseSize.toFixed(2)}`
    }
    grayIn(){
        this.widget.setAlpha(1)
    }
    static updateWidgets(){
        BaseSlots.forEach(s => {
            if (s.currentSize <= 0) {s.currentSize = 0}
            s.widget.setAlpha(1)
            s.widget.setColor(white)
            s.widget.setText(s.getFilledProportion())
        });
    }
    static fadeAllOut(){
        BaseSlots.forEach(s => {
            s.widget.setAlpha(0)
        });
    }
    static fadeAllIn(){
        BaseSlots.forEach(s => {
            s.widget.setAlpha(1)
        });
    }
    static getAllSlotNames(){
        let names: string[] = []
        BaseSlots.forEach(s => {
            names.push(s.name)
        });
        return names
    }
    static getAllSlots(){
        return BaseSlots
    }
    static resetSlotCapacities(){
        this.getAllSlots().forEach(s => {
            s.currentSize = 0
        });
        this.updateWidgets()
    }
    static grayOutAll(){
        this.getAllSlots().forEach(s => {
            s.widget.setAlpha(0.0)
        });
        this.updateWidgets()
    }
    // static getSlotsDict(){
    //     var names_slots = {}
    //     BaseSlots.forEach(s => {
    //         let name: string = s.name
    //         names_slots[name] = s
    //     });
    // }
}

let Misc_slot = new Slot('Misc',200, x, y)
let WeaponSheaths_slot = new Slot('Weapons',20, x, y + 20)
let Ammo_slot = new Slot('Quiver',60, x, y + 40)
let Valuables_slot = new Slot('Valuables',50, x, y + 60)
let Bottles_slot = new Slot('Bottles',10, x, y + 80)
// let Equipped_slot = new Slot('Equipped Load',50, x, y + 100)

function determineItemsSlot(item: number): Slot{
    const category: number = determineItemCategory(item)
    // printConsole(`determineItemCategory:: category number == ${category}`)
    const key= Object.keys(categoryToSlot)[category]
    return Object.values(categoryToSlot)[category]
}

export var categoryToSlot ={
// weapons
'RABInv_ItemType_WeaponArrow' : Ammo_slot,
'RABInv_ItemType_WeaponArrow_Equipped' : Ammo_slot,
'RABInv_ItemType_WeaponBolt' : Ammo_slot,
'RABInv_ItemType_WeaponBolt_Equipped' : Ammo_slot,
'RABInv_ItemType_Weapon1H' : WeaponSheaths_slot,
'RABInv_ItemType_Weapon1H_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_Weapon2H' : WeaponSheaths_slot,
'RABInv_ItemType_Weapon2H_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponDagger' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponDagger_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponCrossBow' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponCrossBow_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponBow' : WeaponSheaths_slot,
'RABInv_ItemType_WeaponBow_Equipped' : WeaponSheaths_slot,

// armors
'RABInv_ItemType_ArmorShield' : Misc_slot,
'RABInv_ItemType_ArmorShield_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_ArmorCuirass' : Misc_slot,
'RABInv_ItemType_ArmorCuirass_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_ArmorBoots' : Misc_slot,
'RABInv_ItemType_ArmorBoots_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_ArmorHelmet' : Misc_slot,
'RABInv_ItemType_ArmorHelmet_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_ArmorGauntlets' : Misc_slot,
'RABInv_ItemType_ArmorGauntlets_Equipped' : WeaponSheaths_slot,
'RABInv_ItemType_Clothes' : Misc_slot,
'RABInv_ItemType_Clothes_Equipped' : Misc_slot,
'RABInv_ItemType_Jewelry' : Valuables_slot,
'RABInv_ItemType_Jewelry_Equipped' : WeaponSheaths_slot,

// misc
'RABInv_ItemType_BookScroll' : Misc_slot,
'RABInv_ItemType_Food' : Misc_slot,
'RABInv_ItemType_Potion' : Bottles_slot,
'RABInv_ItemType_Drink' : Bottles_slot,
'RABInv_ItemType_Ingredient' : Misc_slot,
'RABInv_ItemType_Gem' : Valuables_slot,
'RABInv_ItemType_Soulgem' : Valuables_slot,
'RABInv_ItemType_Lockpick' : Misc_slot,
'RABInv_ItemType_MiscLarge' : Misc_slot,
'RABInv_ItemType_MiscMedium' : Misc_slot,
'RABInv_ItemType_MiscSmall' : Misc_slot,
'RABInv_ItemType_Gold' : Valuables_slot,
'RABInv_ItemType_OreIngot' : Misc_slot,
'RABInv_ItemType_HidePelt' : Misc_slot
}

function solveIncomingItemInfo(item: number): [number, Slot] {
    return [determineItemVolume(item), determineItemsSlot(item)]
}

function addItemtoSlot(item: number, num: number = 1, newSlot: Slot = undefined){
    let slot: Slot
    let tuple = solveIncomingItemInfo(item)
    const vol: number = tuple[0] * num
    if (!newSlot){
        slot = tuple[1]
    }
    else {
        slot = newSlot
    }
    slot.items.push(item)
    // printConsole(slot.items)
    slot.currentSize += vol
    Slot.updateWidgets()
}

function removeItemfromSlot(item: number, num: number = 1, oldSlot: Slot = undefined){
    let slot: Slot
    let tuple = solveIncomingItemInfo(item)
    const vol: number = tuple[0] * num
    let stopFlag: boolean = false
    // if (!oldSlot){
    //     slot = tuple[1]
    // }
    // else {
        BaseSlots.forEach(s => {
           if (s.items.includes(item)) {
                slot = s; 
                // printConsole(slot.name); 
                stopFlag = false; 
                const i: number = slot.items.indexOf(item)
                slot.items.splice(i,1)
                slot.currentSize -= vol
            }
           else {stopFlag = true}
        });
        // if (stopFlag){return}
        // else {slot.currentSize -= vol}
        // oldSlot.currentSize -= vol
    // }
    Slot.updateWidgets()
}


// const GetItemSelected = async () => {
// 	await Utility.wait(0.01);
// 	const recieved: Form = su.GetFormValue(null, "YM.RAB.Select.")
// 	if (!recieved) {return;}
//     // addItemtoSlot(recieved)
// }

function slotLookatItem(item: number, num: number = 1) {
   
    let tuple = solveIncomingItemInfo(item)
    const vol: number = +( tuple[0] ).toFixed(2) * num
    const slot: Slot = tuple[1]
    let slotMax: number = slot.baseSize.toFixed(2)
    let slotCurrent: number = +( slot.currentSize ).toFixed(2)
    // printConsole(`lotAtItem:: slot.baseSize = ${slot.baseSize}`)
    Slot.updateWidgets()
    inventoryCurrentHighlighted.setAlpha(1)
    inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: ${slot.name}`)
    // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slotMax}`)
    slot.widget.setText(`${slot.name}:  ${slotCurrent} (${slotCurrent + vol}) /${slot.baseSize.toFixed(2)}`)
    slot.widget.setColor([0,1,0,1])
}

const GetItemHighlighted = async (item: number) => {
	await Utility.wait(0.001);
    inventoryCurrentHighlighted.setAlpha(1); 
    // Slot.grayOutAll()
	// const recieved: Form = su.GetFormValue(null, "YM.RAB.Highlight.")
    // printConsole(recieved.getName())
	// if (!recieved) {return;}

    const count: number = getHighlightedItemCount()
    let tuple = solveIncomingItemInfo(item)
    let vol: number = +( tuple[0] ).toFixed(2)
    const slot: Slot = tuple[1]
    if (!vol || !slot){return;}
    let slotMax: number = slot.baseSize.toFixed(2)
    let slotCurrent: number = +( slot.currentSize ).toFixed(2)
    // printConsole(`GetItemHighlighted:: slot.baseSize = ${slot.baseSize}`)
    // slot.grayIn()

    Slot.updateWidgets()
    const isInventory: boolean = Ui.isMenuOpen('InventoryMenu')
    const isContainer: boolean = Ui.isMenuOpen('ContainerMenu')

    // printConsole(`Volume: ${vol}\nSlot: ${slot.name}`)
    inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: ${slot.name}`)
    vol *= count
    if (isInventory){

    }
    else if (isContainer) {
        slot.widget.setColor([0,1,0,1])
        // slot.widget.setColorR(0)
        // slot.widget.setColorG(1)
        // slot.widget.setColorB(0)
        if (isViewingContainer()){
            // slot.widget.setColor([1,0.1,.1,1])
            if (slotCurrent + vol > slotMax){slot.widget.setColor([1,0,0,1])}
            // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slot.baseSize}`)
            slot.widget.setText(`${slot.name}:  ${slotCurrent} (${slotCurrent + vol}) /${slotMax}`)
        }
        else if (!isViewingContainer()){
            if (slotCurrent + vol > slotMax){slot.widget.setColor([1,0,0,1])}
            slot.widget.setText(`${slot.name}:  ${slotCurrent} (${slotCurrent - vol}) /${slotMax}`)
        }
    }
	// Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true)
	// printConsole(`${recieved.getName()} has been highlighted`)
}


function DropItem (itemId: number, num: number) {
	const handle = ModEvent.Create('YM_RAB_SLOTS_DropRequest');
	ModEvent.PushInt(handle, itemId);
	ModEvent.PushInt(handle, num);
	ModEvent.Send(handle);
}

const waitRemoveItem = async (item: number, container: number) => {
	await Utility.wait(0.1);
	pl()?.removeItem(Game.getFormEx(item), 1, false, ObjectReference.from(Game.getFormEx(container))) 
	Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true)
}

function DenySelection(itemId: number, oldContainer: ObjectReference, slotName: string = 'Its slot') {
    let count: number = getHighlightedItemCount()
	pl()?.removeItem(Game.getFormEx(itemId), count, true, oldContainer) 
	Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true)
    Debug.notification(`You can not pick this item up. ${slotName} is full`)
}

const waitFadeOut = async () => {
    await Utility.wait(1.5);
    if (isFadein){return;}
    Slot.fadeAllOut(); 
    inventoryCurrentHighlighted.setAlpha(0)
}

function isViewingContainer() {
    return Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.categoryList.activeSegment") ? false:true
}

export function EvaluateInventory() {
    // Re-evaluate player inventory and fill slots accordingly
    Slot.resetSlotCapacities()
    const allItems: Form[] = AddAllItemsToArray(pl(), false, false, true)
    allItems.forEach(f => {
        addItemtoSlot(f.getFormID(), pl()?.getItemCount(f))
    });
}

function getHighlightedItemCount(){
    if (Ui.isMenuOpen('ContainerMenu')){    return Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count") }
    else if (Ui.isMenuOpen('InventoryMenu')){    return Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count") }
    return 1
}

// JSON file functions

export function saveToDataFile(){
    let data_json: string = 'data/skse/plugins/InventorySlots/Slots.json' 
    // Check if json file exists, and create one if otherwise
    if (!FileExists(data_json)){ WriteToFile(data_json, JSON.stringify({}), false) }
    let oldFile: string = ReadFromFile(data_json)
    // If the file is empty, like after just being created or something, give it the initial {} 'squacket' things
    if (oldFile.length == 0){ WriteToFile(data_json, JSON.stringify({}), false); saveToDataFile() }
    let innerDict =  JSON.parse(oldFile) 
    innerDict['volumes'] = itemCategoryVolumes
    innerDict['slots'] = Slot.getAllSlots() 
    let slotNames: string[][] = []
    let catNames: string[] = Object.keys(categoryToSlot)
    Object.values(categoryToSlot).forEach(( s, i ) => {
        let name: string = s.name
        let cat: string = catNames[i]
        slotNames.push([cat, name])
    });
    innerDict['Category-to-Slots'] = slotNames
    WriteToFile(data_json, JSON.stringify(innerDict), false)
}

function importFile(){
    let data_json: string = 'data/skse/plugins/InventorySlots/Slots.json' 
    if (!FileExists(data_json)){ WriteToFile(data_json, JSON.stringify({}), false) }
    let oldFile: string = ReadFromFile(data_json)
    if (oldFile.length == 0){ WriteToFile(data_json, JSON.stringify({}), false); saveToDataFile() }
    else { return JSON.parse(oldFile)}
}

export function getSlotFromName(name: string): Slot | undefined{
    let output: Slot | undefined = undefined
    Slot.getAllSlots().forEach(s => {
        let s_name: string = s.name
        if (name.toLowerCase() == s_name.toLowerCase()) {output = s}
    });
    return output

}

function importSlotsfromFile(){
    let slot_info = importFile()['slots']
    let names = []
    slot_info.forEach(s => {
        let name: string = s['name']
        if (!Slot.getAllSlotNames().includes(name)) { names.push([name, s['baseSize'], s['x'], s['y']])}
        else {
            let new_size: number = s['baseSize']
            let index: number = Slot.getAllSlotNames().indexOf(name)
            let oldSlot: Slot = Slot.getAllSlots()[index]
            // printConsole(`The old size is ${oldSlot.baseSize} and the new size is ${new_size}`)
            oldSlot.baseSize = new_size
        }
    });
    Slot.updateWidgets()
    // printConsole(`The new slots are ${names}`)
    names.forEach(info => {
        let name: string = info[0][0]
        let size: number = info[0][1]
        let x: number = info[0][2]
        let y: number = info[0][3]
        new Slot(name, size, x, y)
    });

}

function importCategoriesfromFile(){
    let cats_slots = importFile()['Category-to-Slots']
    cats_slots.forEach(cat_slot => {
        let cat: string = cat_slot[0]
        let slot_name: string = cat_slot[1]
        let slot: Slot = getSlotFromName(slot_name)

        categoryToSlot[cat] = slot
    });
}

export function importDataFromFile(){
    importCategoriesfromFile()
    importSlotsfromFile()
}

//____________________________________EVENTS______________________________________________

// mcm script
mainMcm()

const eventBlacklist: string[] = [ 'YM_OnSelect_selectPress', 'YM_OnHighlight_selectHighlight' ]

let handle
on('menuOpen', (event) => {
    let lastitemName: number = -2
    const menuName: string = event.name 
    if (menuName != 'ContainerMenu' && menuName != 'InventoryMenu') {return;}
    let item: number = 0
    // if (!item){return;}
    inventoryCurrentHighlighted.setAlpha(1); 
    Slot.updateWidgets()
    // on('mouseMove', () => {
    //     printConsole(Game.getFormEx( Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") )?.getName())
    // });
    handle = on('update', () => {
        if (menuName === 'InventoryMenu'){
            item = Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") 
        }
        else if ( menuName === 'ContainerMenu'){
            item = Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") 
        }
        if (item != lastitemName) { 
            GetItemHighlighted(item)
            lastitemName = item 
        }

    });
});

on('menuClose', (event) => {
    if (event.name == 'InventoryMenu' || event.name == 'ContainerMenu'){inventoryCurrentHighlighted.setAlpha(0);
        Slot.fadeAllOut(); 
        if (handle){unsubscribe(handle);}
        EvaluateInventory()
    }
});

once('update', () => {

    // printConsole(Object.values(importFile()['volumes'])[ItemCategories.RABInv_ItemType_ArmorGauntlets])
    // importSlotsfromFile()
    // saveToDataFile()
    importDataFromFile()
    if (FileExists('data/platform/plugins/InventorySlots.js') && FileExists('data/platform/pluginsdev/InventorySlots.js')){printConsole('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT')}
    EvaluateInventory()
});

let ignoreFlag: boolean = false;
on('containerChanged', (event) => {
	let action: string = 'Picked Up'
	var newId: number = -1
	var oldId: number = -1
	const itemId: number = event.baseObj.getFormID()
	const num: number = event.numItems
    const info: [number, Slot] = solveIncomingItemInfo(event.baseObj.getFormID())
    const volume: number = info[0] 
    const fullVolume: number = volume * num
    const slot: Slot = info[1]
    if (event.oldContainer) {oldId = event.oldContainer.getFormID()}
    if (event.newContainer) {newId = event.newContainer.getFormID()}
    // if (ignoreFlag){ignoreFlag = false; return;}

    // printConsole(`oldcontainer == ${ event.oldContainer.getFormID() }`)
    // printConsole(`newcontainer == ${ event.newContainer.getFormID() }`)
    // Item added to player's inventory
    if (newId == 20 && !ignoreFlag){

        // check how many are in an item stack and if any are allowed to be picked up
        let allowedCount: number = (slot.baseSize - slot.currentSize) / volume 
        let disallowedCount: number = num - allowedCount

        // the slot is filled
        if (allowedCount <= 1){ 
            if (slot.currentSize + fullVolume > slot.baseSize ) {

                // if the item was picked up from the world
                if (!event.oldContainer){
                    DropItem(itemId, num)
                    // printConsole('!event.oldContainer')
                }

                // if the item was taken from a container
                else {
                    printConsole('Trying to deny selection')
                    // Flat out prevent taking the item
                    DenySelection(itemId, event.oldContainer, slot.name)
                    // printConsole('event.oldContainer')
                }
                ignoreFlag = true 
                
            }
            else {
                addItemtoSlot(itemId, num)
            }
        }
        else if (allowedCount > 1){
            addItemtoSlot(itemId, allowedCount);
            // removeItemfromSlot(itemId, disallowedCount)
            // if the item was picked up from the world
            if (!event.oldContainer){
                DropItem(itemId, disallowedCount)
                // printConsole('!event.oldContainer')
            }

            // if the item was taken from a container
            else {
                // Check if it's possible to allow a few through, like arrows
                printConsole('Trying to deny selection')
                // Flat out prevent taking the item
                DenySelection(itemId, event.oldContainer, slot.name)
                // printConsole('event.oldContainer')
            }
            ignoreFlag = true 

        }
    }
    // Item removed from player's inventory
    else if (oldId == 20 && !ignoreFlag) {
        removeItemfromSlot(itemId, num)
    }
    else {ignoreFlag = false}
    if (slot.currentSize <= 0) {slot.currentSize = 0}
    // printConsole( Misc_slot.baseSize )
});

let isFadein: boolean = false
on('crosshairRefChanged', (event) => {
    const id: number = event.reference?.getBaseObject()?.getFormID()
    const typeBlacklist: number[] = [FormType.Character, FormType.Activator, FormType.Door, FormType.Apparatus, FormType.Container, FormType.NPC, FormType.Flora, FormType.Tree]
    if (event.reference?.getBaseObject()?.isPlayable() && !typeBlacklist.includes(event.reference?.getBaseObject()?.getType())){
            isFadein = true
            Slot.updateWidgets()
            Slot.fadeAllIn()
            slotLookatItem(id)
    }
    else {isFadein = false; waitFadeOut()}
});

on('equip', (event) => {
    if (event.actor.getBaseObject()?.getFormID() != pl()?.getBaseObject()?.getFormID()){return;}
    // printConsole(event.baseObj.getName())
    if (Ui.isMenuOpen('MagicMenu')) {return;}
    const item: number = event.baseObj.getFormID()
    // printConsole(`equip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
    const oldCat: Slot = determineItemCategory(item)
    removeItemfromSlot(item, 1)
    addItemtoSlot(item, 1)
});

on('unequip', (event) => {
    if (event.actor.getBaseObject()?.getFormID() != pl()?.getBaseObject()?.getFormID()){return;}
    // printConsole(event.baseObj.getName())
    if (Ui.isMenuOpen('MagicMenu')) {return;}
    const item: number = event.baseObj.getFormID()
    // printConsole(`unequip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
    removeItemfromSlot(item, 1)
    addItemtoSlot(item, 1)
});
