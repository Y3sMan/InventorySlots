import { once, on, Form, Keyword, Game, Utility, printConsole, MiscObject, ObjectReference, browser, destroyAllTexts } from  'skyrimPlatform';
import * as su from '@skyrim-platform/papyrus-util/StorageUtil'
import {ModEvent} from './modevent'
import * as wt from '../../modules/SPTextUtils/spTextUtils'
import { Ui } from '@skyrim-platform/skyrim-platform';


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

enum ItemCategories{  
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

enum itemCategoryVolumes{ 
    // weapons
    RABInv_ItemType_WeaponArrow = 1,
    RABInv_ItemType_WeaponArrow_Equipped = 1,
    RABInv_ItemType_WeaponBolt = 0.5,
    RABInv_ItemType_WeaponBolt_Equipped = 0.5,
    RABInv_ItemType_Weapon1H = 5,
    RABInv_ItemType_Weapon1H_Equipped = 5,
    RABInv_ItemType_Weapon2H = 10,
    RABInv_ItemType_Weapon2H_Equipped = 10,
    RABInv_ItemType_WeaponDagger = 2,
    RABInv_ItemType_WeaponDagger_Equipped = 2,
    RABInv_ItemType_WeaponCrossBow = 8,
    RABInv_ItemType_WeaponCrossBow_Equipped = 8,
    RABInv_ItemType_WeaponBow = 8,
    RABInv_ItemType_WeaponBow_Equipped = 8,
    // armors
    RABInv_ItemType_ArmorShield = 9,
    RABInv_ItemType_ArmorShield_Equipped = 9,
    RABInv_ItemType_ArmorCuirass = 15,
    RABInv_ItemType_ArmorCuirass_Equipped = 15,
    RABInv_ItemType_ArmorBoots = 6,
    RABInv_ItemType_ArmorBoots_Equipped = 6,
    RABInv_ItemType_ArmorHelmet = 6,
    RABInv_ItemType_ArmorHelmet_Equipped = 6,
    RABInv_ItemType_ArmorGauntlets =4,
    RABInv_ItemType_ArmorGauntlets_Equipped = 4,
    RABInv_ItemType_Clothes = 6,
    RABInv_ItemType_Clothes_Equipped = 6,
    RABInv_ItemType_Jewelry = 3,
    RABInv_ItemType_Jewelry_Equipped = 3,
    // misc
    RABInv_ItemType_BookScroll = 2,
    RABInv_ItemType_Food = 1,
    RABInv_ItemType_Potion = 1,
    RABInv_ItemType_Drink = 2,
    RABInv_ItemType_Ingredient = 1,
    RABInv_ItemType_Gem = 1,
    RABInv_ItemType_Soulgem = 1,
    RABInv_ItemType_Lockpick = 0.5,
    RABInv_ItemType_MiscLarge = 5,
    RABInv_ItemType_MiscMedium = 3,
    RABInv_ItemType_MiscSmall = 1,
    RABInv_ItemType_Gold = 0.1,
    RABInv_ItemType_OreIngot = 2,
    RABInv_ItemType_HidePelt = 1
}

function determineItemCategory(item: Form){
    const isEquipped: boolean = pl()?.isEquipped(item)
	const kyds: Keyword[] = item.getKeywords()
	for (let i = 0; i < kyds!.length; i++) {
		const k = kyds[i];
		const f: number = Form.from(k)!.getFormID()
        // printConsole(`determineItemCategory:: the keyword id is ${f}`)
        //  Weapons
        if (f == weapKwdIds.WeapTypeBattleaxe || f == weapKwdIds.WeapTypeGreatsword || f == weapKwdIds.WeapTypeWarhammer) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_Weapon2H_Equipped}
            else {return ItemCategories.RABInv_ItemType_Weapon2H}
        }
        else if (f == weapKwdIds.WeapTypeMace || f == weapKwdIds.WeapTypeSword || f == weapKwdIds.WeapTypeWarAxe || f == weapKwdIds.WeapTypeDagger || f == weapKwdIds.WeapTypeStaff) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_Weapon1H_Equipped}
            else {return ItemCategories.RABInv_ItemType_Weapon1H}
        }
        else if (f == weapKwdIds.WeapTypeBow) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_WeaponBow_Equipped}
            else {return ItemCategories.RABInv_ItemType_WeaponBow}
        }
        else if (f == miscKwdIds.VendorItemArrow) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_WeaponArrow_Equipped}
            else {return ItemCategories.RABInv_ItemType_WeaponArrow}
        }
        // Armor
        else if (f == armorKwdIds.ArmorBoots) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_ArmorBoots_Equipped}
            else {return ItemCategories.RABInv_ItemType_ArmorBoots}
        }
        else if (f == armorKwdIds.ArmorClothing) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_Clothes_Equipped}
            else {return ItemCategories.RABInv_ItemType_Clothes}
        }
        else if (f == armorKwdIds.ArmorCuirass) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_ArmorCuirass_Equipped}
            else {return ItemCategories.RABInv_ItemType_ArmorCuirass}
        }
        else if (f == armorKwdIds.ArmorGauntlets) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_ArmorGauntlets_Equipped}
            else {return ItemCategories.RABInv_ItemType_ArmorGauntlets}
        }
        else if (f == armorKwdIds.ArmorHelmet) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_ArmorHelmet_Equipped}
            else {return ItemCategories.RABInv_ItemType_ArmorHelmet}
        }
        else if (f == armorKwdIds.ArmorJewelry) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_Jewelry_Equipped}
            else {return ItemCategories.RABInv_ItemType_Jewelry}
        }
        else if (f == armorKwdIds.ArmorShield) { 
            if (isEquipped) {return ItemCategories.RABInv_ItemType_ArmorShield_Equipped}
            else {return ItemCategories.RABInv_ItemType_ArmorShield}
        }
        // Misc
        else if (f == miscKwdIds.VendorItemAnimalHide) { 
            return ItemCategories.RABInv_ItemType_HidePelt
        }
        else if (f == miscKwdIds.VendorItemAnimalPart) { 
            return ItemCategories.RABInv_ItemType_Food
        }
        else if (f == miscKwdIds.VendorItemBook) { 
            return ItemCategories.RABInv_ItemType_BookScroll
        }
        else if (f == miscKwdIds.VendorItemClutter) { 
            return ItemCategories.RABInv_ItemType_MiscSmall
        }
        else if (f == miscKwdIds.VendorItemFireword) { 
            return ItemCategories.RABInv_ItemType_MiscMedium
        }
        else if (f == miscKwdIds.VendorItemFood || f == miscKwdIds.VendorItemFoodRaw) { 
            return ItemCategories.RABInv_ItemType_Food
        }
        else if (f == miscKwdIds.VendorItemGem) { 
            return ItemCategories.RABInv_ItemType_Gem
        }
        else if (f == miscKwdIds.VendorItemIngredient) { 
            return ItemCategories.RABInv_ItemType_Ingredient
        }
        else if (f == miscKwdIds.VendorItemOreIngot) { 
            return ItemCategories.RABInv_ItemType_OreIngot
        }
        else if (f == miscKwdIds.VendorItemPoison || f == miscKwdIds.VendorItemPotion) { 
            return ItemCategories.RABInv_ItemType_Potion
        }
        else if (f == miscKwdIds.VendorItemRecipe) { 
            return ItemCategories.RABInv_ItemType_BookScroll
        }
        else if (f == miscKwdIds.VendorItemScroll || f == miscKwdIds.VendorItemBook || f == miscKwdIds.VendorItemSpellTome) { 
            return ItemCategories.RABInv_ItemType_BookScroll
        }
        else if (f == miscKwdIds.VendorItemTool) { 
            return ItemCategories.RABInv_ItemType_MiscMedium
        }
	}
}

function determineItemVolume(item: Form){
    const category: number = determineItemCategory(item)
    const key: string = itemCategoryVolumes[category]
    // @ts-ignore
    const vol: number = itemCategoryVolumes[key]
    if (!vol){return 0}
    return vol
}

enum BaseSlotsSizes {
	Misc = 200,
	WeaponSheaths = 100,
	AmmoQuiver = 60,
	ValuablesPurse = 50,
	FragileBottles = 10,
	EquippedArmor = 50,
	EquippedWeapons = 50
} 
enum currentSlotsSizes {
	Misc = 0,
	WeaponSheaths = 0,
	AmmoQuiver = 0,
	ValuablesPurse = 0,
	FragileBottles = 0,
	EquippedArmor = 0,
	EquippedWeapons = 0
} 

function determineItemsSlot(item: Form): string{
    const category: number = determineItemCategory(item)
    // printConsole(`determineItemCategory:: category number == ${category}`)
    const key= Object.keys(categoryToSlot)[category]
    return Object.values(categoryToSlot)[category]
}

enum categoryToSlot{
// weapons
RABInv_ItemType_WeaponArrow = 'AmmoQuiver',
RABInv_ItemType_WeaponArrow_Equipped = 'AmmoQuiver',
RABInv_ItemType_WeaponBolt = 'AmmoQuiver',
RABInv_ItemType_WeaponBolt_Equipped = 'AmmoQuiver',
RABInv_ItemType_Weapon1H = 'WeaponSheaths',
RABInv_ItemType_Weapon1H_Equipped = 'WeaponSheaths',
RABInv_ItemType_Weapon2H = 'WeaponSheaths',
RABInv_ItemType_Weapon2H_Equipped = 'WeaponSheaths',
RABInv_ItemType_WeaponDagger = 'WeaponSheaths',
RABInv_ItemType_WeaponDagger_Equipped = 'WeaponSheaths',
RABInv_ItemType_WeaponCrossBow = 'WeaponSheaths',
RABInv_ItemType_WeaponCrossBow_Equipped = 'WeaponSheaths',
RABInv_ItemType_WeaponBow = 'WeaponSheaths',
RABInv_ItemType_WeaponBow_Equipped = 'WeaponSheaths',
// armors
RABInv_ItemType_ArmorShield = 'Misc',
RABInv_ItemType_ArmorShield_Equipped = 'Misc',
RABInv_ItemType_ArmorCuirass = 'Misc',
RABInv_ItemType_ArmorCuirass_Equipped = 'Misc',
RABInv_ItemType_ArmorBoots = 'Misc',
RABInv_ItemType_ArmorBoots_Equipped = 'Misc',
RABInv_ItemType_ArmorHelmet = 'Misc',
RABInv_ItemType_ArmorHelmet_Equipped = 'Misc',
RABInv_ItemType_ArmorGauntlets = 'Misc',
RABInv_ItemType_ArmorGauntlets_Equipped = 'Misc',
RABInv_ItemType_Clothes = 'Misc',
RABInv_ItemType_Clothes_Equipped = 'Misc',
RABInv_ItemType_Jewelry = 'ValuablesPurse',
RABInv_ItemType_Jewelry_Equipped = 'ValuablesPurse',
RABInv_ItemType_BookScroll = 'Misc',
RABInv_ItemType_Food = 'Misc',
RABInv_ItemType_Potion = 'FragileBottles',
RABInv_ItemType_Drink = 'FragileBottles',
RABInv_ItemType_Ingredient = 'Misc',
RABInv_ItemType_Gem = 'ValuablesPurse',
RABInv_ItemType_Soulgem = 'ValuablesPurse',
RABInv_ItemType_Lockpick = 'Misc',
RABInv_ItemType_MiscLarge = 'Misc',
RABInv_ItemType_MiscMedium = 'Misc',
RABInv_ItemType_MiscSmall = 'Misc',
RABInv_ItemType_Gold = 'ValuablesPurse',
RABInv_ItemType_OreIngot = 'Misc',
RABInv_ItemType_HidePelt = 'Misc'
}

function solveIncomingItemInfo(item: Form): [number, string] {
    return [determineItemVolume(item), determineItemsSlot(item)]
}

const GetItemSelected = async () => {
	await Utility.wait(0.01);
	const recieved: Form = su.GetFormValue(null, "YM.RAB.Select.")
	if (!recieved) {return;}
    let vol, slot = solveIncomingItemInfo(recieved)
	// printConsole(`${recieved.getName()} has been selected`)
}

const GetItemHighlighted = async () => {
	await Utility.wait(0.01);
	const recieved: Form = su.GetFormValue(null, "YM.RAB.Highlight.")
	if (!recieved) {return;}
    let tuple = solveIncomingItemInfo(recieved)
    const vol: number = tuple[0]
    const slot: string = tuple[1]
    let slotMax: number = BaseSlotsSizes[slot]
    let slotCurrent: number = currentSlotsSizes[slot]
    // slotCurrent += vol
    printConsole(slot)
    weaponSheaths_widget.setText(`${currentSlotsSizes.WeaponSheaths}/${BaseSlotsSizes.WeaponSheaths}`)
    Misc_widget.setText(`${currentSlotsSizes.Misc}/${BaseSlotsSizes.Misc}`)
    Ammo_widget.setText(`${currentSlotsSizes.AmmoQuiver}/${BaseSlotsSizes.AmmoQuiver}`)
    FragileBottles_widget.setText(`${currentSlotsSizes.FragileBottles}/${BaseSlotsSizes.FragileBottles}`)

    if (slot.includes('Misc')){Misc_widget.setText(`${slotCurrent} (+${vol})/${slotMax}`)}
    else if (slot.includes('Weapon')) {weaponSheaths_widget.setText(`${slotCurrent} (+${vol})/${slotMax}`)}
    else if (slot.includes('Ammo')) {Ammo_widget.setText(`${slotCurrent} (+${vol})/${slotMax}`)}
    // else if (slot.includes('Valuables')) {widg.setText(`${slotCurrent} (+${vol})/${slotMax}`)}

    // eval(`${slot}_widget.setText(${slotCurrent}/${slotMax})`)
	// printConsole(`${recieved.getName()} has been highlighted`)
}


function DropItem (itemId: number, num: number, ref: ObjectReference) {
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

function DenySelection(itemId: number, oldContainer: ObjectReference) {
	pl()?.removeItem(Game.getFormEx(itemId), 1, false, oldContainer) 
	Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true)
}

function createAllWidgets(){
    let y_offset: number = 10 
    Object.keys(BaseSlotsSizes).forEach(slot => {
        eval(`var ${slot}_widget = ${new wt.spText(x,y + y_offset,slot, white, undefined, 'InventorySlots')}`)
        y_offset += 10
    });
}

//__________________________ Variable Setup______________________________________________
browser.setVisible(true)
let x: number = 2000
let y: number = 1000
const white: number[] = [1,1,1,1]
destroyAllTexts()
let Misc_widget = new wt.spText(x,y + 20,'baseSlot', white, undefined, 'InventorySlots')
let weaponSheaths_widget = new wt.spText(x,y + 40,'weaponSheaths', white, undefined, 'InventorySlots')
let Ammo_widget = new wt.spText(x,y + 60,'Ammo', white, undefined, 'InventorySlots')
let FragileBottles_widget = new wt.spText(x,y + 80,'Bottles', white, undefined, 'InventorySlots')

//____________________________________EVENTS______________________________________________

once('update', () => {
    // createAllWidgets()
});

const eventBlacklist: string[] = [ 'YM_OnSelect_selectPress', 'YM_OnHighlight_selectHighlight' ]
on('modEvent', (event) => {
	if (!eventBlacklist.includes(event.eventName)){return;}
	if (event.eventName == 'YM_OnSelect_selectPress') {	GetItemSelected()}
	if (event.eventName == 'YM_OnHighlight_selectHighlight') {	GetItemHighlighted() }

});

// on('containerChanged', (event) => {
// 	let action: string = 'Picked Up'
// 	var newId: number = -1
// 	const itemId: number = event.baseObj.getFormID()
// 	const num: number = event.numItems
// 	try {
// 		// 20 is the player's inv
// 		// the new container being '20' means the incoming item went into the player's inv
// 		// Added to the player's inventory
// 		newId = event.newContainer.getFormID()

// 		// if the player's inventory is involved
// 		if (newId == 20) {
// 			// if slot is filled
// 			if (slotFilled >= slotMax) {
// 				// picking up from the world
// 				if (!event.oldContainer) { 
// 					DropItem(itemId, num, event.oldContainer)
// 				}
// 				// trading with another container
// 				else {
// 					DenySelection(itemId, event.oldContainer)
// 				}
// 			}
// 			// else just let the transaction occur
// 			else {
// 			slotFilled +=  DetermineItemVolume(Game.getFormEx(itemId))[0]
// 			}
// 		}
// 		// Removal from the player's inventory
// 		else if (newId != 20 && event.newContainer) {
// 			action = 'Removed' 
// 			slotFilled -=  DetermineItemVolume(Game.getFormEx(itemId))[0]
// 		}
// 	} catch (error) {
// 		printConsole(error)
// 		// the new container will be undefined if the item is just dropped
// 		if (error == TypeError || !event.newContainer) {
// 			action = 'Dropped'
// 			slotFilled -=  DetermineItemVolume(Game.getFormEx(itemId))[0]
// 		}
// 	}
// 	finally {
// 		if (slotFilled <= 0) {slotFilled = 0}
// 		if (slot2Filled <= 0) {slot2Filled = 0}
// 		printConsole(`${action} Item ${event.baseObj.getName()}`)
// 		printConsole(`The current slot is filled ${slotFilled} out of ${slotMax}`)
// 		Debug.notification(`The current slot is filled ${slotFilled} out of ${slotMax}`)
// 	}
// 	BaseSlotWidget.setText(`${slotFilled}/${slotMax}`)	
// 	// LargeSlotWidget.setText(`${slot2Filled}/${slotMax}`)	
// });