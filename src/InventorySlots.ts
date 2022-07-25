import { once, on, Form, Keyword, Game, Utility, printConsole, ObjectReference, browser, destroyAllTexts, Debug, FormType, unsubscribe, setTextString, setTextColor, setTextPos  } from  'skyrimPlatform';
import { WriteToFile, ReadFromFile, FileExists } from "@skyrim-platform/papyrus-util/MiscUtil";
import {ModEvent} from './modevent'
import * as wt from '../../modules/SPTextUtils/spTextUtils'
import { Ui } from '@skyrim-platform/skyrim-platform';
import {AddAllItemsToArray, GetFormEditorID} from '@skyrim-platform/po3-papyrus-extender/PO3_SKSEFunctions'
import { mainMcm } from "./Slots_Mcm";

// script check
once('update', () => {
    // for debugg purposes. Make sure there aren't two instances of the script running
    const checkScriptNumbers = function (name: string) {
        if (FileExists(`data/platform/plugins/${name}`) && FileExists(`data/platform/pluginsdev/${name}`)){Debug.messageBox('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT')}
    }
    checkScriptNumbers('InventorySlots.js')

    // Ensure the esp is enabled
    let isPlugin: boolean = Game.isPluginInstalled('InventorySlots.esp')
    if (!isPlugin){Debug.messageBox('The Inventory Slots plugin was not found or is not enabled. Please restart the game and enable it.')}



});

//__________________________ Variable Setup______________________________________________
let modname: string = 'InventorySlots'
browser.setVisible(true)
let widget_x: number = 1500
let widget_y: number = 800
const white: number[] = [1,1,1,1]
// wt.spText.destroyAllTexts()
// destroyAllTexts()

wt.spText.destroyAllModTexts(modname)

// export const inventoryCurrentHighlighted: wt.spText = new wt.spText(950, widget_y, 'currentItem', [1,1,1,0], undefined, modname)
// let debugMsg: wt.spText = new wt.spText(100, 100, 'Debug Log', white, undefined, 'ym_debug')

// ____________________FUNCTIONS___________________________________________

let debugging: boolean = false 
export function log(msg: string){
    if (debugging){
        printConsole(msg)
    }
}

let text_debug_log: boolean = false 
export function textLog(msg: string | number){
    msg = msg as string
    if (text_debug_log){
        printConsole(msg)
        debugMsg.setText(msg)
    }
}

export function pl() { return Game.getPlayer(); }

export function GetBaseWidgetPos(){
    return [ widget_x, widget_y ]
}

export function setBaseWidgetPos(newPos: number[]){
    widget_x = newPos[0]
    widget_y = newPos[1]
}

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
ItemType_WeaponArrow,
ItemType_WeaponArrow_Equipped,
ItemType_WeaponBolt,
ItemType_WeaponBolt_Equipped,
ItemType_Weapon1H,
ItemType_Weapon1H_Equipped,
ItemType_Weapon2H,
ItemType_Weapon2H_Equipped,
ItemType_WeaponDagger,
ItemType_WeaponDagger_Equipped,
ItemType_WeaponCrossBow,
ItemType_WeaponCrossBow_Equipped,
ItemType_WeaponBow,
ItemType_WeaponBow_Equipped,

// armors
ItemType_ArmorShield,
ItemType_ArmorShield_Equipped,
ItemType_ArmorCuirass,
ItemType_ArmorCuirass_Equipped,
ItemType_ArmorBoots,
ItemType_ArmorBoots_Equipped,
ItemType_ArmorHelmet,
ItemType_ArmorHelmet_Equipped,
ItemType_ArmorGauntlets,
ItemType_ArmorGauntlets_Equipped,
ItemType_Clothes,
ItemType_Clothes_Equipped,
ItemType_Jewelry,
ItemType_Jewelry_Equipped,

// misc
ItemType_BookScroll,
ItemType_Food,
ItemType_Potion,
ItemType_Drink,
ItemType_Ingredient,
ItemType_Gem,
ItemType_Soulgem,
ItemType_Lockpick,
ItemType_MiscLarge,
ItemType_MiscMedium,
ItemType_MiscSmall,
ItemType_Gold,
ItemType_OreIngot,
ItemType_HidePelt

}

export let itemCategoryVolumes = { 
    
    // weapons
'ItemType_WeaponArrow':1,
'ItemType_WeaponArrow_Equipped':1,
'ItemType_WeaponBolt':0.5,
'ItemType_WeaponBolt_Equipped':0.5,
'ItemType_Weapon1H':5,
'ItemType_Weapon1H_Equipped':5,
'ItemType_Weapon2H':10,
'ItemType_Weapon2H_Equipped':10,
'ItemType_WeaponDagger':2,
'ItemType_WeaponDagger_Equipped':2,
'ItemType_WeaponCrossBow':8,
'ItemType_WeaponCrossBow_Equipped':8,
'ItemType_WeaponBow':8,
'ItemType_WeaponBow_Equipped':8,

// armors
'ItemType_ArmorShield':9,
'ItemType_ArmorShield_Equipped':9,
'ItemType_ArmorCuirass':15,
'ItemType_ArmorCuirass_Equipped':15,
'ItemType_ArmorBoots':6,
'ItemType_ArmorBoots_Equipped':6,
'ItemType_ArmorHelmet':6,
'ItemType_ArmorHelmet_Equipped':6,
'ItemType_ArmorGauntlets':4,
'ItemType_ArmorGauntlets_Equipped':4,
'ItemType_Clothes':6,
'ItemType_Clothes_Equipped':6,
'ItemType_Jewelry':3,
'ItemType_Jewelry_Equipped':3,

//misc
'ItemType_BookScroll':2,
'ItemType_Food':1,
'ItemType_Potion':1,
'ItemType_Drink':2,
'ItemType_Ingredient':0.1,
'ItemType_Gem':1,
'ItemType_Soulgem':1,
'ItemType_Lockpick':0.5,
'ItemType_MiscLarge':5,
'ItemType_MiscMedium':3,
'ItemType_MiscSmall':0.1,
'ItemType_Gold':0.0,
'ItemType_OreIngot':2,
'ItemType_HidePelt':1
}

let keywordToCategory = {
// weapons	
WeapTypeBattleaxe : ItemCategories.ItemType_Weapon2H,
WeapTypeBow : ItemCategories.ItemType_WeaponBow,
WeapTypeDagger : ItemCategories.ItemType_WeaponDagger,
WeapTypeGreatsword: ItemCategories.ItemType_Weapon2H,
WeapTypeMace : ItemCategories.ItemType_Weapon1H,
WeapTypeStaff : ItemCategories.ItemType_Weapon1H,
WeapTypeSword : ItemCategories.ItemType_Weapon1H,
WeapTypeWarAxe : ItemCategories.ItemType_Weapon1H,
WeapTypeWarhammer : ItemCategories.ItemType_Weapon2H,
VendorItemArrow: ItemCategories.ItemType_WeaponArrow,
	
// armors
ArmorBoots  : ItemCategories.ItemType_ArmorBoots,
ArmorClothing  : ItemCategories.ItemType_Clothes,
ArmorCuirass  : ItemCategories.ItemType_ArmorCuirass,
ArmorGauntlets : ItemCategories.ItemType_ArmorGauntlets,
ArmorHelmet  : ItemCategories.ItemType_ArmorHelmet,
ArmorJewelry  : ItemCategories.ItemType_Jewelry,
ArmorShield  : ItemCategories.ItemType_ArmorShield,

// Miscs	
VendorItemAnimalHide: ItemCategories.ItemType_HidePelt,
VendorItemAnimalPart: ItemCategories.ItemType_Food,
VendorItemClutter : ItemCategories.ItemType_MiscSmall,
VendorItemFireword : ItemCategories.ItemType_MiscMedium,
VendorItemFood : ItemCategories.ItemType_Food,
VendorItemFoodRaw : ItemCategories.ItemType_Food,
VendorItemGem : ItemCategories.ItemType_Gem,
VendorItemIngredient: ItemCategories.ItemType_Ingredient,
VendorItemJewelry : ItemCategories.ItemType_Jewelry,
VendorItemOreIngot : ItemCategories.ItemType_OreIngot,
VendorItemPoison : ItemCategories.ItemType_Potion,
VendorItemPotion  : ItemCategories.ItemType_Potion,
VendorItemRecipe  : ItemCategories.ItemType_BookScroll,
VendorItemScroll : ItemCategories.ItemType_BookScroll,
VendorItemSoulGem : ItemCategories.ItemType_Soulgem,
VendorItemSpellTome : ItemCategories.ItemType_BookScroll,
VendorItemBook : ItemCategories.ItemType_BookScroll,
VendorItemStaff : ItemCategories.ItemType_Weapon1H,
VendorItemTool  : ItemCategories.ItemType_MiscSmall,
}

function determineItemCategory(item: number){
    const f: Form = Game.getFormEx(item)
    const isEquipped: boolean = pl()?.isEquipped(f)
    if (!f){return;}
    // log(`isEquipped:: ${pl()?.isEquipped(f)}`)
	const kyds: Keyword[] = f.getKeywords()
    let key: number = -1
    if (item == 15){return ItemCategories.ItemType_Gold} // gold doesn't have a keyword and needs to be treated different
	for (let i = 0; i < kyds?.length; i++) {
		const k = kyds[i];
		const f: number = Form.from(k)!.getFormID()
        const editorid: string = GetFormEditorID(Form.from(k))
        if (Object.keys(keywordToCategory).includes(editorid)) {
            // @ts-ignore
            key = keywordToCategory[editorid];
            if (isEquipped){key += 1; if (key > 27){key = 0}}

            // log(`determineItemCategory:: the key is ${key}`)
            // log(`determineItemCategory:: the keyword id is ${f}`)

            return key
        }
        else {continue}
	}
    if (key == -1){return -1;}
}

function determineItemVolume(item: number): number{
    const category: number = determineItemCategory(item)
    if (category === -1){return 0}
    const vol: number = Object.values(itemCategoryVolumes)[category]
    // log(`determineItemVolume:: the vol is ${vol}`)
    if (!vol){return 0}
    return vol
}

// new class of text widgets that automatically comes with a second widget to act as a black outline for the primary widget
class Text extends wt.spText {
    widget_outline: wt.spText
    constructor(xPos: number, yPos: number, text: string, col: number[], sType?: string, sModName?: string){
        super(xPos + 2, yPos + 2, text, [1,1,1,0], sType, modname)
        this.widget_outline = new wt.spText(xPos + 2, yPos + 2, text, [0,0,0,0], sType, modname)
        this.destroyText()
        super(xPos, yPos, text, col, sType , sModName )
        
    }

    setText(txt: string): void {
        setTextString(this.index, txt);
        setTextString(this.widget_outline.index, txt)
    }

    setAlpha(alpha: number): void{
        let color: number[] = this.getColor();
        setTextColor(this.index, [color[0], color[1], color[2], alpha])
        setTextColor(this.widget_outline.index, [0, 0, 0, alpha])
    }

    setOwningMod(mod: string): void {
        this.owningMod = mod;
        this.widget_outline.owningMod = mod;
    }

    setPosition(xPos: number, yPos: number): void {
        setTextPos(this.index, xPos, yPos);
        setTextPos(this.widget_outline.index, xPos + 2, yPos + 2);
    }
}


let BaseSlots: Slot[] = []
export class Slot {
    name: string
    baseSize: number
    currentSize: number
    widget: Text
    items: number[]
    constructor(name: string, maxSize: number, x: number, y: number) {
        this.name = name
        this.baseSize = maxSize            
        this.currentSize = 0
        this.widget = new Text(x,y, this.name, [1,1,1,0], undefined, modname)
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
        this.updateWidgets()
        this.getAllSlots().forEach(s => {
            s.widget.setAlpha(0.5)
        });
    }
    static setAllWidgetPos(newPos: number[]){
        let x: number = newPos[0]
        let y: number = newPos[1]
        this.getAllSlots().forEach(s => {
           let w: Text = s.widget 
           w.setPosition(x, y)
           y += 20
        });
    }
}

export const inventoryCurrentHighlighted: Text = new Text(950, widget_y, 'currentItem', [1,1,1,0], undefined, modname)

let Misc_slot = new Slot('Misc',200, widget_x, widget_y)
let WeaponSheaths_slot = new Slot('Weapons',20, widget_x, widget_y + 20)
let Ammo_slot = new Slot('Quiver',60, widget_x, widget_y + 40)
let Valuables_slot = new Slot('Valuables',50, widget_x, widget_y + 60)
let Bottles_slot = new Slot('Bottles',10, widget_x, widget_y + 80)
// let Equipped_slot = new Slot('Equipped Load',50, widget_x, widget_y + 100)

function determineItemsSlot(item: number): Slot{
    const category: number = determineItemCategory(item)
    const key= Object.keys(categoryToSlot)[category]
    // log(`determineItemCategory:: category number == ${key}`)
    return Object.values(categoryToSlot)[category]
}

export var categoryToSlot ={
// weapons
'ItemType_WeaponArrow' : Ammo_slot,
'ItemType_WeaponArrow_Equipped' : Ammo_slot,
'ItemType_WeaponBolt' : Ammo_slot,
'ItemType_WeaponBolt_Equipped' : Ammo_slot,
'ItemType_Weapon1H' : WeaponSheaths_slot,
'ItemType_Weapon1H_Equipped' : WeaponSheaths_slot,
'ItemType_Weapon2H' : WeaponSheaths_slot,
'ItemType_Weapon2H_Equipped' : WeaponSheaths_slot,
'ItemType_WeaponDagger' : WeaponSheaths_slot,
'ItemType_WeaponDagger_Equipped' : WeaponSheaths_slot,
'ItemType_WeaponCrossBow' : WeaponSheaths_slot,
'ItemType_WeaponCrossBow_Equipped' : WeaponSheaths_slot,
'ItemType_WeaponBow' : WeaponSheaths_slot,
'ItemType_WeaponBow_Equipped' : WeaponSheaths_slot,

// armors
'ItemType_ArmorShield' : Misc_slot,
'ItemType_ArmorShield_Equipped' : Misc_slot,
'ItemType_ArmorCuirass' : Misc_slot,
'ItemType_ArmorCuirass_Equipped' : Misc_slot,
'ItemType_ArmorBoots' : Misc_slot,
'ItemType_ArmorBoots_Equipped' : Misc_slot,
'ItemType_ArmorHelmet' : Misc_slot,
'ItemType_ArmorHelmet_Equipped' : Misc_slot,
'ItemType_ArmorGauntlets' : Misc_slot,
'ItemType_ArmorGauntlets_Equipped' : Misc_slot,
'ItemType_Clothes' : Misc_slot,
'ItemType_Clothes_Equipped' : Misc_slot,
'ItemType_Jewelry' : Valuables_slot,
'ItemType_Jewelry_Equipped' : Valuables_slot,

// misc
'ItemType_BookScroll' : Misc_slot,
'ItemType_Food' : Misc_slot,
'ItemType_Potion' : Bottles_slot,
'ItemType_Drink' : Bottles_slot,
'ItemType_Ingredient' : Misc_slot,
'ItemType_Gem' : Valuables_slot,
'ItemType_Soulgem' : Valuables_slot,
'ItemType_Lockpick' : Misc_slot,
'ItemType_MiscLarge' : Misc_slot,
'ItemType_MiscMedium' : Misc_slot,
'ItemType_MiscSmall' : Misc_slot,
'ItemType_Gold' : Valuables_slot,
'ItemType_OreIngot' : Misc_slot,
'ItemType_HidePelt' : Misc_slot
}

function solveIncomingItemInfo(item: number): [number, Slot] {
    return [determineItemVolume(item), determineItemsSlot(item)]
}

function addItemtoSlot(item: number, num: number = 1, newSlot: Slot = undefined){
    let slot: Slot
    let tuple = solveIncomingItemInfo(item)
    const vol: number = tuple[0] * num
    slot = tuple[1]
    if (!slot){return;}
    slot.items.push(item)
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
                // log(slot.name); 
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
    if (!slot){inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: None`); return;}
    let slotMax: number = +( slot.baseSize ).toFixed(2)
    let slotCurrent: number = +( slot.currentSize ).toFixed(2)
    // log(`lotAtItem:: slot.baseSize = ${slot.baseSize}`)

    Slot.updateWidgets()
    inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: ${slot.name}`)
    slot.widget.setText(`${slot.name}:  ${slotCurrent} (${( slotCurrent + vol ).toFixed(2)}) /${slot.baseSize.toFixed(2)}`)

    if (slotCurrent + vol > slotMax){slot.widget.setColor([1,0,0,1])} // if the item would overfill a slot
    else {slot.widget.setColor([0,1,0,1])}
}

function GetItemHighlighted(item: number) {
    // inventoryCurrentHighlighted.setAlpha(1); 

    let count: number = getHighlightedItemCount()
    // const count: number = 1
    let tuple = solveIncomingItemInfo(item)
    let vol: number = +( tuple[0] ).toFixed(2)
    const slot: Slot = tuple[1]
    if (!slot || !vol){inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: None`); Slot.grayOutAll() ; return;}
    let slotMax: number = +( slot.baseSize ).toFixed(2)
    let slotCurrent: number = +( slot.currentSize ).toFixed(2)
    // log(`GetItemHighlighted:: slot.baseSize = ${slot.baseSize}`)
    // log(`The selected item's slot is ${slot.name}`)
    Slot.grayOutAll()
    slot.grayIn()

    const isInventory: boolean = Ui.isMenuOpen('InventoryMenu')
    const isContainer: boolean = Ui.isMenuOpen('ContainerMenu')
    const isBarter: boolean = Ui.isMenuOpen('BarterMenu')

    // log(`Volume: ${vol}\nSlot: ${slot.name}`)
    inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: ${slot.name}`)
    vol *= count
    if (isInventory){ }
    else if (isContainer || isBarter) {
        if (isViewingContainer()){
            if (slotCurrent + vol > slotMax){slot.widget.setColor([1,0,0,1])}
            else {slot.widget.setColor([0, 1, 0, 1])}
            slot.widget.setText(`${slot.name}:  ${slotCurrent} (${( slotCurrent + vol ).toFixed(2)}) /${slotMax}`)
        }
        else if (!isViewingContainer()){
            slot.widget.setColor([1, 1, 1, 1])
            slot.widget.setText(`${slot.name}:  ${slotCurrent} (${( slotCurrent - vol ).toFixed(2)}) /${slotMax}`)
        }
    }
}


let ignoreContainerChangedEvent: boolean = false;
function DropItem (itemId: number, num: number) {
    ignoreContainerChangedEvent = true
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

function DenySelection(itemId: number, count: number, oldContainer: ObjectReference, slotName: string = 'Its slot') {
    // let count: number = getHighlightedItemCount()
    ignoreContainerChangedEvent = true
	pl()?.removeItem(Game.getFormEx(itemId), count, true, oldContainer) 
	Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true)
    Debug.notification(`You can not pick this item up. ${slotName} is full`)
}

const waitFadeOut = async () => {
    await Utility.wait(1.5);
    if (isFadein){return;}
    Slot.fadeAllOut(); 
    inventoryCurrentHighlighted.setAlpha(0);
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

    Slot.fadeAllOut()
}

function getHighlightedItemCount(){
    if (Ui.isMenuOpen('ContainerMenu')){    return Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count") }
    else if (Ui.isMenuOpen('InventoryMenu')){    return Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count") }
    return 1
}

// _____________________________ JSON file functions __________________________________


function checkFilesExist(){
    if (!FileExists('data/skse/plugins/InventorySlots/Slots.json')){ WriteToFile('data/skse/plugins/InventorySlots/Slots.json',JSON.stringify({}) , true) }
    if (!FileExists('data/skse/plugins/InventorySlots/Keywords.json')){ WriteToFile('data/skse/plugins/InventorySlots/Keywords.json', JSON.stringify({}), true) }
    let file1: string = 'data/skse/plugins/InventorySlots/Keywords.json'
    let file2: string = 'data/skse/plugins/InventorySlots/Slots.json'
    let file_contents1: string = ReadFromFile(file1)
    let file_contents2: string = ReadFromFile(file2)
    if (file_contents1.length <= 2){ 
        WriteToFile(file1, JSON.stringify({}), false);
        saveKeywordCategoriesToDataFile()
    }
    if (file_contents2.length <= 2){ 
        WriteToFile(file2, JSON.stringify({}), false);
        saveToDataFile() 
    }
}

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

    // overwrite each slot's widget's private position variables with its actual position 
    innerDict['slots'].forEach((s, i) => {
        let w: wt.spText = s.widget;
        innerDict['slots'][i]['widget']['x'] = s.widget.getPosition()[0]
        innerDict['slots'][i]['widget']['y'] = s.widget.getPosition()[1]
    });

    let slotNames: string[][] = []
    let catNames: string[] = Object.keys(categoryToSlot)
    Object.values(categoryToSlot).forEach(( s, i ) => {
        let name: string = s.name
        let cat: string = catNames[i]
        slotNames.push([cat, name])
    });

    innerDict['Category-to-Slots'] = slotNames  
    innerDict['Current Item Widget Position'] = inventoryCurrentHighlighted.getPosition()
    innerDict['Base Widget Position'] = GetBaseWidgetPos()


    WriteToFile(data_json, JSON.stringify(innerDict), false)
}

function saveKeywordCategoriesToDataFile(){
    let data_json: string = 'data/skse/plugins/InventorySlots/Keywords.json' 

    // Check if json file exists, and create one if otherwise
    // if (!FileExists(data_json)){ WriteToFile(data_json, JSON.stringify({}), false) }
    // let oldFile: string = ReadFromFile(data_json)

    // If the file is empty, like after just being created or something, give it the initial {} 'squacket' things
    // if (oldFile.length == 0){ WriteToFile(data_json, JSON.stringify({}), false); saveKeywordCategoriesToDataFile() }

    // let keywords_categories =  JSON.parse(oldFile) 
    let keywords_categories = {
        keywords: {}
    } 

    let kwyds = Object.keys(keywordToCategory)
    let cats = Object.values(keywordToCategory)
    let names: string[] = []
    let newDict = []
    kwyds.forEach((k: string, i) => {
        let n: string = `${ItemCategories[cats[i]]}`
        // printConsole(k)
        let t = {  }
        t[k] = n
        newDict.push(t)
    });
    // compatability file. Player can manipulate keyword list to add/remove support for certain items
    keywords_categories['keywords'] = newDict

    WriteToFile(data_json, JSON.stringify(keywords_categories), false)
}

function importKeywordsFile(){
    let data_json: string = 'data/skse/plugins/InventorySlots/Keywords.json' 
    let oldFile: string = ReadFromFile(data_json)
    return JSON.parse(oldFile)
}

function importKeywordsFromFile(){
    let kywds = importKeywordsFile()['keywords']
    let newKeywordToCategory = keywordToCategory
    // clear out old dictionary
    for (var prop in keywordToCategory) {
        if (keywordToCategory.hasOwnProperty(prop)) {
            delete keywordToCategory[prop];
        }
    }
    // replace it with the keywords.json 
    // nothing can go wrong with this ever right?
    kywds.forEach((k: {}, i: number) => {
        let n = Object.keys(k)[0] 
        let c = Object.values(k)[0]
        let index: number = ItemCategories[c] 
        keywordToCategory[n] = index
    })
    keywordToCategory = newKeywordToCategory
}

function importSlotsFile(){
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
    let slot_info = importSlotsFile()['slots']
    let names = []
    slot_info.forEach(s => {
        let name: string = s['name']
        // if slot in file is not found in current list of slots, create it?
        if (!Slot.getAllSlotNames().includes(name)) { names.push([name, s['baseSize'], s['widget']['x'], s['widget']['y']])}
        else { // if slot already exists, overwrite its properties with what's saved
            let new_size: number = s['baseSize']
            let index: number = Slot.getAllSlotNames().indexOf(name)
            let oldSlot: Slot = Slot.getAllSlots()[index]

            // import slot size
            oldSlot.baseSize = new_size
            
            // import widget positions
            let new_pos_x: number = s['widget']['x']
            let new_pos_y: number = s['widget']['y']
            oldSlot.widget.setPosition(new_pos_x, new_pos_y)
        }
    });
    Slot.updateWidgets()
    // log(`The new slots are ${names}`)

    // create new slots from json file
    names.forEach((info, i) => {
        let name: string = info[0]
        let size: number = info[1]
        let x: number = info[2]
        let y: number = info[3]

        // log(`The new slot has properties: name: ${name}; size: ${size}; pos: ${x}, ${y}`)

        new Slot(name, size, x, y)
    });

}

function importCategoriesfromFile(){
    let cats_slots = importSlotsFile()['Category-to-Slots']
    cats_slots.forEach(cat_slot => {
        let cat: string = cat_slot[0]
        let slot_name: string = cat_slot[1]
        let slot: Slot = getSlotFromName(slot_name)

        categoryToSlot[cat] = slot
    });
}

function importCategoryVolumesfromFile(){
    let vols = importSlotsFile()['volumes']
    let newVolumes: number[] = Object.values(vols)
    Object.keys(vols).forEach((v, i) => {
       let volume: number = newVolumes[i];
       itemCategoryVolumes[v] = volume
    });

}

function importInventoryWidgetPositionfromFile(){
    let xy: number[] = importSlotsFile()['Current Item Widget Position']
    inventoryCurrentHighlighted.setPosition(xy[0], xy[1])
}

function importBaseWidgetPosfromFile(){
    let xy: number[] = importSlotsFile()['Base Widget Position']
    setBaseWidgetPos(xy)
}

export function importDataFromFile(){
    checkFilesExist()
    importKeywordsFromFile()
    importCategoryVolumesfromFile()
    importCategoriesfromFile()
    importSlotsfromFile()
    importBaseWidgetPosfromFile()
    importInventoryWidgetPositionfromFile()
}

//____________________________________EVENTS______________________________________________

// mcm script
mainMcm()


let handle
on('menuOpen', (event) => {
    let lastitemName: number = -2
    const menuName: string = event.name 
    if (menuName != 'InventoryMenu' && menuName != 'ContainerMenu' && menuName != 'BarterMenu') { return;}
    inventoryCurrentHighlighted.setAlpha(1)
    let item: number = 0
    Slot.updateWidgets()
    handle = on('update', () => {
        if (menuName === 'InventoryMenu'){
            item = Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") 
        }
        else if ( menuName === 'ContainerMenu'){
            item = Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") 
        }
        else if ( menuName === 'BarterMenu'){
            item = Ui.getInt("BarterMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") 
        }

        if (item != lastitemName) { 
            inventoryCurrentHighlighted.setAlpha(1); 
            GetItemHighlighted(item)
            lastitemName = item 
        }

    });
});

on('menuClose', (event) => {
    inventoryCurrentHighlighted.setAlpha(0)
    if (event.name != 'InventoryMenu' && event.name != 'ContainerMenu') { return;}
    if (handle){unsubscribe(handle);}
    EvaluateInventory();
    Slot.fadeAllOut(); 
});

once('update', () => {

    // log(Object.values(importSlotsFile()['volumes'])[ItemCategories.RABInv_ItemType_ArmorGauntlets])
    // importSlotsfromFile()
    // saveToDataFile()
    importDataFromFile()
    EvaluateInventory()
    printConsole(`Inventory Slots Initialized`)
});

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
    if (!slot){return;}
    if (event.oldContainer) {oldId = event.oldContainer.getFormID()}
    if (event.newContainer) {newId = event.newContainer.getFormID()}
    // if (ignoreContainerChangedEvent){ignoreContainerChangedEvent = false; return;}
    if (itemId === 15){return;}

    // log(`oldcontainer == ${ event.oldContainer.getFormID() }`)
    // log(`newcontainer == ${ event.newContainer.getFormID() }`)


    log(`containerChanged Running::`)
    log(`containerChanged Running:: IgnoreFlag:: ${ignoreContainerChangedEvent}`)
    // Item added to player's inventory
    // ignore gold coming in and out
    if (newId == 20 && !ignoreContainerChangedEvent && itemId != 15){
        log(`newId == 20::`)

        // check how many are in an item stack and if any are allowed to be picked up
        let allowedCount: number = (slot.baseSize - slot.currentSize) / volume 
        if (allowedCount > num){allowedCount = num}
        if (volume <= 0){allowedCount = num}
        let disallowedCount: number = num - allowedCount

        // if it is not a stack of items
        if (num === 1){ 
            log(`num === 1::`)
            // the slot is filled
            if (slot.currentSize + fullVolume > slot.baseSize ) {
                log(`Slot might be filled`)

                // if the item was picked up from the world
                if (!event.oldContainer){
                    DropItem(itemId, num)
                    log('!event.oldContainer:: ')
                }

                // if the item was taken from a container
                else {
                    log('allowedcount === 1:: Trying to deny selection')
                    if (Ui.isMenuOpen('BarterMenu')){
                        DropItem(itemId, num)
                    }
                    else{
                        // Flat out prevent taking the item
                        DenySelection(itemId, disallowedCount,event.oldContainer, slot.name)
                    }
                    log('event.oldContainer')
                }
                // ignoreContainerChangedEvent = true 
                
            }
            else {
                log(`num === 1:: additemtoslot`)
                addItemtoSlot(itemId, num)
            }
        }
        // if it is a stack of items
        else if (num > 1){
            log(`\nnum > 1:: allowedcount:: ${allowedCount}\ndisallowedcount:: ${disallowedCount}\nvolume * num = ${volume} * ${allowedCount}`)
            addItemtoSlot(itemId, allowedCount);
            // removeItemfromSlot(itemId, disallowedCount)
            // if the item was picked up from the world
            if (slot.currentSize + (volume * allowedCount) >= slot.baseSize ){ 

                if (!event.oldContainer && disallowedCount > 0){
                    DropItem(itemId, disallowedCount)
                    log('!event.oldContainer:: disallowed count > 0::')
                }

                // if the item was taken from a container
                else if (disallowedCount){
                    // Check if it's possible to allow a few through, like arrows
                    // Flat out prevent taking the item
                    if (Ui.isMenuOpen('BarterMenu')){
                        log('allowedCount > 1:: trying to drop item')
                        DropItem(itemId, disallowedCount)
                    }
                    else{
                        log('allowedCount > 1:: Trying to deny selection')
                        DenySelection(itemId, disallowedCount, event.oldContainer, slot.name)
                    }
                    log('event.oldContainer')
                }
                // ignoreContainerChangedEvent = true 
                log(`allowedCount > 1:: IgnoreFlag:: ${ignoreContainerChangedEvent}`)

            }
        }
    }
    // Item removed from player's inventory
    else if (oldId == 20 && !ignoreContainerChangedEvent && itemId != 15) {
        log(`Remove:: IgnoreFlag:: ${ignoreContainerChangedEvent}`)
        log(`Removing ${itemId} with count ${num}`)
        removeItemfromSlot(itemId, num)
    }
    else {ignoreContainerChangedEvent = false}
    if (slot.currentSize <= 0) {slot.currentSize = 0}
});

let isFadein: boolean = false
on('crosshairRefChanged', (event) => {
    const id: number = event.reference?.getBaseObject()?.getFormID()
    const typeBlacklist: number[] = [FormType.Character, FormType.Activator, FormType.Door, FormType.Apparatus, FormType.Container, FormType.NPC, FormType.Flora, FormType.Tree]
    if (event.reference?.getBaseObject()?.isPlayable() && !typeBlacklist.includes(event.reference?.getBaseObject()?.getType())){
            inventoryCurrentHighlighted.setAlpha(1)
            isFadein = true
            Slot.updateWidgets()
            Slot.fadeAllIn()
            slotLookatItem(id)
    }
    else {isFadein = false; Slot.fadeAllOut(); inventoryCurrentHighlighted.setAlpha(0);}
});
