/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inventoryCurrentHighlighted": () => (/* binding */ inventoryCurrentHighlighted),
/* harmony export */   "log": () => (/* binding */ log),
/* harmony export */   "pl": () => (/* binding */ pl),
/* harmony export */   "GetBaseWidgetPos": () => (/* binding */ GetBaseWidgetPos),
/* harmony export */   "setBaseWidgetPos": () => (/* binding */ setBaseWidgetPos),
/* harmony export */   "ItemCategories": () => (/* binding */ ItemCategories),
/* harmony export */   "itemCategoryVolumes": () => (/* binding */ itemCategoryVolumes),
/* harmony export */   "Slot": () => (/* binding */ Slot),
/* harmony export */   "categoryToSlot": () => (/* binding */ categoryToSlot),
/* harmony export */   "EvaluateInventory": () => (/* binding */ EvaluateInventory),
/* harmony export */   "saveToDataFile": () => (/* binding */ saveToDataFile),
/* harmony export */   "getSlotFromName": () => (/* binding */ getSlotFromName),
/* harmony export */   "importDataFromFile": () => (/* binding */ importDataFromFile)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modevent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _Slots_Mcm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







// script check
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    var checkScriptNumbers = function (name) {
        if ((0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)("data/platform/plugins/".concat(name)) && (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)("data/platform/pluginsdev/".concat(name))) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT');
        }
    };
    checkScriptNumbers('InventorySlots.js');
});
//__________________________ Variable Setup______________________________________________
var modname = 'InventorySlots';
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
var widget_x = 1500;
var widget_y = 800;
var white = [1, 1, 1, 1];
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
// wt.spText.destroyAllModTexts(modname)
var inventoryCurrentHighlighted = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_3__.spText(950, widget_y, 'currentItem', [1, 1, 1, 0], undefined, modname);
// ____________________FUNCTIONS___________________________________________
var debugging = false;
function log(msg) {
    if (debugging) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(msg);
    }
}
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
function GetBaseWidgetPos() {
    return [widget_x, widget_y];
}
function setBaseWidgetPos(newPos) {
    widget_x = newPos[0];
    widget_y = newPos[1];
}
var weapKwdIds;
(function (weapKwdIds) {
    weapKwdIds[weapKwdIds["WeapTypeBattleaxe"] = 448818] = "WeapTypeBattleaxe";
    weapKwdIds[weapKwdIds["WeapTypeBoundArrow"] = 1103105] = "WeapTypeBoundArrow";
    weapKwdIds[weapKwdIds["WeapTypeBoundWeapon"] = 227817] = "WeapTypeBoundWeapon";
    weapKwdIds[weapKwdIds["WeapTypeBow"] = 124693] = "WeapTypeBow";
    weapKwdIds[weapKwdIds["WeapTypeDagger"] = 124691] = "WeapTypeDagger";
    weapKwdIds[weapKwdIds["WeapTypeGreatsword"] = 448817] = "WeapTypeGreatsword";
    weapKwdIds[weapKwdIds["WeapTypeMace"] = 124692] = "WeapTypeMace";
    // WeapTypeMelee = 422523,
    weapKwdIds[weapKwdIds["WeapTypeStaff"] = 124694] = "WeapTypeStaff";
    weapKwdIds[weapKwdIds["WeapTypeSword"] = 124689] = "WeapTypeSword";
    // WeapTypeUnique = 1363610,
    weapKwdIds[weapKwdIds["WeapTypeWarAxe"] = 124690] = "WeapTypeWarAxe";
    weapKwdIds[weapKwdIds["WeapTypeWarhammer"] = 448816] = "WeapTypeWarhammer";
})(weapKwdIds || (weapKwdIds = {}));
var armorKwdIds;
(function (armorKwdIds) {
    armorKwdIds[armorKwdIds["ArmorBoots"] = 442605] = "ArmorBoots";
    armorKwdIds[armorKwdIds["ArmorClothing"] = 441320] = "ArmorClothing";
    armorKwdIds[armorKwdIds["ArmorCuirass"] = 442604] = "ArmorCuirass";
    armorKwdIds[armorKwdIds["ArmorGauntlets"] = 442607] = "ArmorGauntlets";
    // ArmorHeavy = 441298,
    armorKwdIds[armorKwdIds["ArmorHelmet"] = 442606] = "ArmorHelmet";
    armorKwdIds[armorKwdIds["ArmorJewelry"] = 441321] = "ArmorJewelry";
    // ArmorLight = 441299,
    armorKwdIds[armorKwdIds["ArmorShield"] = 615858] = "ArmorShield";
})(armorKwdIds || (armorKwdIds = {}));
var miscKwdIds;
(function (miscKwdIds) {
    miscKwdIds[miscKwdIds["VendorItemAnimalHide"] = 595178] = "VendorItemAnimalHide";
    miscKwdIds[miscKwdIds["VendorItemAnimalPart"] = 595179] = "VendorItemAnimalPart";
    // VendorItemArmor = 588121,
    miscKwdIds[miscKwdIds["VendorItemArrow"] = 595943] = "VendorItemArrow";
    // VendorItemClothing = 588123,
    miscKwdIds[miscKwdIds["VendorItemClutter"] = 595177] = "VendorItemClutter";
    miscKwdIds[miscKwdIds["VendorItemDaedricArtifact"] = 595944] = "VendorItemDaedricArtifact";
    miscKwdIds[miscKwdIds["VendorItemFireword"] = 781527] = "VendorItemFireword";
    miscKwdIds[miscKwdIds["VendorItemFood"] = 577002] = "VendorItemFood";
    miscKwdIds[miscKwdIds["VendorItemFoodRaw"] = 659030] = "VendorItemFoodRaw";
    miscKwdIds[miscKwdIds["VendorItemGem"] = 595181] = "VendorItemGem";
    miscKwdIds[miscKwdIds["VendorItemIngredient"] = 577003] = "VendorItemIngredient";
    miscKwdIds[miscKwdIds["VendorItemJewelry"] = 588122] = "VendorItemJewelry";
    miscKwdIds[miscKwdIds["VendorItemKey"] = 595183] = "VendorItemKey";
    // VendorItemOrderRobes = 294336,
    miscKwdIds[miscKwdIds["VendorItemOreIngot"] = 595180] = "VendorItemOreIngot";
    miscKwdIds[miscKwdIds["VendorItemPeaceweed"] = 295999] = "VendorItemPeaceweed";
    miscKwdIds[miscKwdIds["VendorItemPoison"] = 577005] = "VendorItemPoison";
    miscKwdIds[miscKwdIds["VendorItemPotion"] = 577004] = "VendorItemPotion";
    // VendorItemPropertyArkMarket = 1316183,
    // VendorItemPropertyArkUpperCity = 290106,
    miscKwdIds[miscKwdIds["VendorItemRecipe"] = 1006768] = "VendorItemRecipe";
    miscKwdIds[miscKwdIds["VendorItemScroll"] = 659031] = "VendorItemScroll";
    miscKwdIds[miscKwdIds["VendorItemSoulGem"] = 604067] = "VendorItemSoulGem";
    miscKwdIds[miscKwdIds["VendorItemSpellTome"] = 604069] = "VendorItemSpellTome";
    miscKwdIds[miscKwdIds["VendorItemBook"] = 604066] = "VendorItemBook";
    miscKwdIds[miscKwdIds["VendorItemStaff"] = 604068] = "VendorItemStaff";
    miscKwdIds[miscKwdIds["VendorItemTool"] = 595182] = "VendorItemTool";
    miscKwdIds[miscKwdIds["VendorItemWeapon"] = 588120] = "VendorItemWeapon";
})(miscKwdIds || (miscKwdIds = {}));
var ItemCategories;
(function (ItemCategories) {
    // weapons
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponArrow"] = 0] = "RABInv_ItemType_WeaponArrow";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponArrow_Equipped"] = 1] = "RABInv_ItemType_WeaponArrow_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponBolt"] = 2] = "RABInv_ItemType_WeaponBolt";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponBolt_Equipped"] = 3] = "RABInv_ItemType_WeaponBolt_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_Weapon1H"] = 4] = "RABInv_ItemType_Weapon1H";
    ItemCategories[ItemCategories["RABInv_ItemType_Weapon1H_Equipped"] = 5] = "RABInv_ItemType_Weapon1H_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_Weapon2H"] = 6] = "RABInv_ItemType_Weapon2H";
    ItemCategories[ItemCategories["RABInv_ItemType_Weapon2H_Equipped"] = 7] = "RABInv_ItemType_Weapon2H_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponDagger"] = 8] = "RABInv_ItemType_WeaponDagger";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponDagger_Equipped"] = 9] = "RABInv_ItemType_WeaponDagger_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponCrossBow"] = 10] = "RABInv_ItemType_WeaponCrossBow";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponCrossBow_Equipped"] = 11] = "RABInv_ItemType_WeaponCrossBow_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponBow"] = 12] = "RABInv_ItemType_WeaponBow";
    ItemCategories[ItemCategories["RABInv_ItemType_WeaponBow_Equipped"] = 13] = "RABInv_ItemType_WeaponBow_Equipped";
    // armors
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorShield"] = 14] = "RABInv_ItemType_ArmorShield";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorShield_Equipped"] = 15] = "RABInv_ItemType_ArmorShield_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorCuirass"] = 16] = "RABInv_ItemType_ArmorCuirass";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorCuirass_Equipped"] = 17] = "RABInv_ItemType_ArmorCuirass_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorBoots"] = 18] = "RABInv_ItemType_ArmorBoots";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorBoots_Equipped"] = 19] = "RABInv_ItemType_ArmorBoots_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorHelmet"] = 20] = "RABInv_ItemType_ArmorHelmet";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorHelmet_Equipped"] = 21] = "RABInv_ItemType_ArmorHelmet_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorGauntlets"] = 22] = "RABInv_ItemType_ArmorGauntlets";
    ItemCategories[ItemCategories["RABInv_ItemType_ArmorGauntlets_Equipped"] = 23] = "RABInv_ItemType_ArmorGauntlets_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_Clothes"] = 24] = "RABInv_ItemType_Clothes";
    ItemCategories[ItemCategories["RABInv_ItemType_Clothes_Equipped"] = 25] = "RABInv_ItemType_Clothes_Equipped";
    ItemCategories[ItemCategories["RABInv_ItemType_Jewelry"] = 26] = "RABInv_ItemType_Jewelry";
    ItemCategories[ItemCategories["RABInv_ItemType_Jewelry_Equipped"] = 27] = "RABInv_ItemType_Jewelry_Equipped";
    // misc
    ItemCategories[ItemCategories["RABInv_ItemType_BookScroll"] = 28] = "RABInv_ItemType_BookScroll";
    ItemCategories[ItemCategories["RABInv_ItemType_Food"] = 29] = "RABInv_ItemType_Food";
    ItemCategories[ItemCategories["RABInv_ItemType_Potion"] = 30] = "RABInv_ItemType_Potion";
    ItemCategories[ItemCategories["RABInv_ItemType_Drink"] = 31] = "RABInv_ItemType_Drink";
    ItemCategories[ItemCategories["RABInv_ItemType_Ingredient"] = 32] = "RABInv_ItemType_Ingredient";
    ItemCategories[ItemCategories["RABInv_ItemType_Gem"] = 33] = "RABInv_ItemType_Gem";
    ItemCategories[ItemCategories["RABInv_ItemType_Soulgem"] = 34] = "RABInv_ItemType_Soulgem";
    ItemCategories[ItemCategories["RABInv_ItemType_Lockpick"] = 35] = "RABInv_ItemType_Lockpick";
    ItemCategories[ItemCategories["RABInv_ItemType_MiscLarge"] = 36] = "RABInv_ItemType_MiscLarge";
    ItemCategories[ItemCategories["RABInv_ItemType_MiscMedium"] = 37] = "RABInv_ItemType_MiscMedium";
    ItemCategories[ItemCategories["RABInv_ItemType_MiscSmall"] = 38] = "RABInv_ItemType_MiscSmall";
    ItemCategories[ItemCategories["RABInv_ItemType_Gold"] = 39] = "RABInv_ItemType_Gold";
    ItemCategories[ItemCategories["RABInv_ItemType_OreIngot"] = 40] = "RABInv_ItemType_OreIngot";
    ItemCategories[ItemCategories["RABInv_ItemType_HidePelt"] = 41] = "RABInv_ItemType_HidePelt";
})(ItemCategories || (ItemCategories = {}));
var itemCategoryVolumes = {
    // weapons
    'RABInv_ItemType_WeaponArrow': 1,
    'RABInv_ItemType_WeaponArrow_Equipped': 1,
    'RABInv_ItemType_WeaponBolt': 0.5,
    'RABInv_ItemType_WeaponBolt_Equipped': 0.5,
    'RABInv_ItemType_Weapon1H': 5,
    'RABInv_ItemType_Weapon1H_Equipped': 5,
    'RABInv_ItemType_Weapon2H': 10,
    'RABInv_ItemType_Weapon2H_Equipped': 10,
    'RABInv_ItemType_WeaponDagger': 2,
    'RABInv_ItemType_WeaponDagger_Equipped': 2,
    'RABInv_ItemType_WeaponCrossBow': 8,
    'RABInv_ItemType_WeaponCrossBow_Equipped': 8,
    'RABInv_ItemType_WeaponBow': 8,
    'RABInv_ItemType_WeaponBow_Equipped': 8,
    // armors
    'RABInv_ItemType_ArmorShield': 9,
    'RABInv_ItemType_ArmorShield_Equipped': 9,
    'RABInv_ItemType_ArmorCuirass': 15,
    'RABInv_ItemType_ArmorCuirass_Equipped': 15,
    'RABInv_ItemType_ArmorBoots': 6,
    'RABInv_ItemType_ArmorBoots_Equipped': 6,
    'RABInv_ItemType_ArmorHelmet': 6,
    'RABInv_ItemType_ArmorHelmet_Equipped': 6,
    'RABInv_ItemType_ArmorGauntlets': 4,
    'RABInv_ItemType_ArmorGauntlets_Equipped': 4,
    'RABInv_ItemType_Clothes': 6,
    'RABInv_ItemType_Clothes_Equipped': 6,
    'RABInv_ItemType_Jewelry': 3,
    'RABInv_ItemType_Jewelry_Equipped': 3,
    //misc
    'RABInv_ItemType_BookScroll': 2,
    'RABInv_ItemType_Food': 1,
    'RABInv_ItemType_Potion': 1,
    'RABInv_ItemType_Drink': 2,
    'RABInv_ItemType_Ingredient': 0.1,
    'RABInv_ItemType_Gem': 1,
    'RABInv_ItemType_Soulgem': 1,
    'RABInv_ItemType_Lockpick': 0.5,
    'RABInv_ItemType_MiscLarge': 5,
    'RABInv_ItemType_MiscMedium': 3,
    'RABInv_ItemType_MiscSmall': 0.1,
    'RABInv_ItemType_Gold': 0.0,
    'RABInv_ItemType_OreIngot': 2,
    'RABInv_ItemType_HidePelt': 1
};
var keywordToCategory = {
    // weapons	
    WeapTypeBattleaxe: ItemCategories.RABInv_ItemType_Weapon2H,
    WeapTypeBow: ItemCategories.RABInv_ItemType_WeaponBow,
    WeapTypeDagger: ItemCategories.RABInv_ItemType_Weapon1H,
    WeapTypeGreatsword: ItemCategories.RABInv_ItemType_Weapon2H,
    WeapTypeMace: ItemCategories.RABInv_ItemType_Weapon1H,
    WeapTypeStaff: ItemCategories.RABInv_ItemType_Weapon1H,
    WeapTypeSword: ItemCategories.RABInv_ItemType_Weapon1H,
    WeapTypeWarAxe: ItemCategories.RABInv_ItemType_Weapon1H,
    WeapTypeWarhammer: ItemCategories.RABInv_ItemType_Weapon2H,
    VendorItemArrow: ItemCategories.RABInv_ItemType_WeaponArrow,
    // armors
    ArmorBoots: ItemCategories.RABInv_ItemType_ArmorBoots,
    ArmorClothing: ItemCategories.RABInv_ItemType_Clothes,
    ArmorCuirass: ItemCategories.RABInv_ItemType_ArmorCuirass,
    ArmorGauntlets: ItemCategories.RABInv_ItemType_ArmorGauntlets,
    ArmorHelmet: ItemCategories.RABInv_ItemType_ArmorHelmet,
    ArmorJewelry: ItemCategories.RABInv_ItemType_Jewelry,
    ArmorShield: ItemCategories.RABInv_ItemType_ArmorShield,
    // Miscs	
    VendorItemAnimalHide: ItemCategories.RABInv_ItemType_HidePelt,
    VendorItemAnimalPart: ItemCategories.RABInv_ItemType_Food,
    VendorItemClutter: ItemCategories.RABInv_ItemType_MiscSmall,
    VendorItemFireword: ItemCategories.RABInv_ItemType_MiscMedium,
    VendorItemFood: ItemCategories.RABInv_ItemType_Food,
    VendorItemFoodRaw: ItemCategories.RABInv_ItemType_Food,
    VendorItemGem: ItemCategories.RABInv_ItemType_Gem,
    VendorItemIngredient: ItemCategories.RABInv_ItemType_Ingredient,
    VendorItemJewelry: ItemCategories.RABInv_ItemType_Jewelry,
    VendorItemOreIngot: ItemCategories.RABInv_ItemType_OreIngot,
    VendorItemPoison: ItemCategories.RABInv_ItemType_Potion,
    VendorItemPotion: ItemCategories.RABInv_ItemType_Potion,
    VendorItemRecipe: ItemCategories.RABInv_ItemType_BookScroll,
    VendorItemScroll: ItemCategories.RABInv_ItemType_BookScroll,
    VendorItemSoulGem: ItemCategories.RABInv_ItemType_Soulgem,
    VendorItemSpellTome: ItemCategories.RABInv_ItemType_BookScroll,
    VendorItemBook: ItemCategories.RABInv_ItemType_BookScroll,
    VendorItemStaff: ItemCategories.RABInv_ItemType_Weapon1H,
    VendorItemTool: ItemCategories.RABInv_ItemType_MiscSmall,
};
function determineItemCategory(item) {
    var _a;
    var f = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(item);
    var isEquipped = (_a = pl()) === null || _a === void 0 ? void 0 : _a.isEquipped(f);
    if (!f) {
        return;
    }
    // log(`isEquipped:: ${pl()?.isEquipped(f)}`)
    var kyds = f.getKeywords();
    var key = -1;
    if (item == 15) {
        return ItemCategories.RABInv_ItemType_Gold;
    } // gold doesn't have a keyword and needs to be treated different
    for (var i = 0; i < (kyds === null || kyds === void 0 ? void 0 : kyds.length); i++) {
        var k = kyds[i];
        var f_1 = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(k).getFormID();
        var editorid = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_4__.GetFormEditorID)(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(k));
        if (Object.keys(keywordToCategory).includes(editorid)) {
            // @ts-ignore
            key = keywordToCategory[editorid];
            if (isEquipped) {
                key += 1;
                if (key > 27) {
                    key = 0;
                }
            }
            // log(`determineItemCategory:: the key is ${key}`)
            // log(`determineItemCategory:: the keyword id is ${f}`)
            return key;
        }
        else {
            continue;
        }
    }
    if (key == -1) {
        return -1;
    }
}
function determineItemVolume(item) {
    var category = determineItemCategory(item);
    if (category === -1) {
        return 0;
    }
    var vol = Object.values(itemCategoryVolumes)[category];
    // log(`determineItemVolume:: the vol is ${vol}`)
    if (!vol) {
        return 0;
    }
    return vol;
}
var BaseSlots = [];
var Slot = /** @class */ (function () {
    function Slot(name, maxSize, x, y) {
        this.name = name;
        this.baseSize = maxSize;
        this.currentSize = 0;
        this.widget = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_3__.spText(x, y, this.name, white, undefined, modname);
        this.items = [];
        BaseSlots.push(this);
    }
    Slot.prototype.getFilled = function () {
        return this.currentSize.toFixed(2);
    };
    Slot.prototype.getFilledProportion = function () {
        return "".concat(this.name, ":   ").concat(this.currentSize.toFixed(2), " / ").concat(this.baseSize.toFixed(2));
    };
    Slot.prototype.grayIn = function () {
        this.widget.setAlpha(1);
    };
    Slot.updateWidgets = function () {
        BaseSlots.forEach(function (s) {
            if (s.currentSize <= 0) {
                s.currentSize = 0;
            }
            s.widget.setAlpha(1);
            s.widget.setColor(white);
            s.widget.setText(s.getFilledProportion());
        });
    };
    Slot.fadeAllOut = function () {
        BaseSlots.forEach(function (s) {
            s.widget.setAlpha(0);
        });
    };
    Slot.fadeAllIn = function () {
        BaseSlots.forEach(function (s) {
            s.widget.setAlpha(1);
        });
    };
    Slot.getAllSlotNames = function () {
        var names = [];
        BaseSlots.forEach(function (s) {
            names.push(s.name);
        });
        return names;
    };
    Slot.getAllSlots = function () {
        return BaseSlots;
    };
    Slot.resetSlotCapacities = function () {
        this.getAllSlots().forEach(function (s) {
            s.currentSize = 0;
        });
        this.updateWidgets();
    };
    Slot.grayOutAll = function () {
        this.updateWidgets();
        this.getAllSlots().forEach(function (s) {
            s.widget.setAlpha(0.5);
        });
    };
    Slot.setAllWidgetPos = function (newPos) {
        var x = newPos[0];
        var y = newPos[1];
        this.getAllSlots().forEach(function (s) {
            var w = s.widget;
            w.setPosition(x, y);
            y += 20;
        });
    };
    return Slot;
}());

var Misc_slot = new Slot('Misc', 200, widget_x, widget_y);
var WeaponSheaths_slot = new Slot('Weapons', 20, widget_x, widget_y + 20);
var Ammo_slot = new Slot('Quiver', 60, widget_x, widget_y + 40);
var Valuables_slot = new Slot('Valuables', 50, widget_x, widget_y + 60);
var Bottles_slot = new Slot('Bottles', 10, widget_x, widget_y + 80);
// let Equipped_slot = new Slot('Equipped Load',50, widget_x, widget_y + 100)
function determineItemsSlot(item) {
    var category = determineItemCategory(item);
    var key = Object.keys(categoryToSlot)[category];
    // log(`determineItemCategory:: category number == ${key}`)
    return Object.values(categoryToSlot)[category];
}
var categoryToSlot = {
    // weapons
    'RABInv_ItemType_WeaponArrow': Ammo_slot,
    'RABInv_ItemType_WeaponArrow_Equipped': Ammo_slot,
    'RABInv_ItemType_WeaponBolt': Ammo_slot,
    'RABInv_ItemType_WeaponBolt_Equipped': Ammo_slot,
    'RABInv_ItemType_Weapon1H': WeaponSheaths_slot,
    'RABInv_ItemType_Weapon1H_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_Weapon2H': WeaponSheaths_slot,
    'RABInv_ItemType_Weapon2H_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponDagger': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponDagger_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponCrossBow': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponCrossBow_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponBow': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponBow_Equipped': WeaponSheaths_slot,
    // armors
    'RABInv_ItemType_ArmorShield': Misc_slot,
    'RABInv_ItemType_ArmorShield_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_ArmorCuirass': Misc_slot,
    'RABInv_ItemType_ArmorCuirass_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_ArmorBoots': Misc_slot,
    'RABInv_ItemType_ArmorBoots_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_ArmorHelmet': Misc_slot,
    'RABInv_ItemType_ArmorHelmet_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_ArmorGauntlets': Misc_slot,
    'RABInv_ItemType_ArmorGauntlets_Equipped': WeaponSheaths_slot,
    'RABInv_ItemType_Clothes': Misc_slot,
    'RABInv_ItemType_Clothes_Equipped': Misc_slot,
    'RABInv_ItemType_Jewelry': Valuables_slot,
    'RABInv_ItemType_Jewelry_Equipped': WeaponSheaths_slot,
    // misc
    'RABInv_ItemType_BookScroll': Misc_slot,
    'RABInv_ItemType_Food': Misc_slot,
    'RABInv_ItemType_Potion': Bottles_slot,
    'RABInv_ItemType_Drink': Bottles_slot,
    'RABInv_ItemType_Ingredient': Misc_slot,
    'RABInv_ItemType_Gem': Valuables_slot,
    'RABInv_ItemType_Soulgem': Valuables_slot,
    'RABInv_ItemType_Lockpick': Misc_slot,
    'RABInv_ItemType_MiscLarge': Misc_slot,
    'RABInv_ItemType_MiscMedium': Misc_slot,
    'RABInv_ItemType_MiscSmall': Misc_slot,
    'RABInv_ItemType_Gold': Valuables_slot,
    'RABInv_ItemType_OreIngot': Misc_slot,
    'RABInv_ItemType_HidePelt': Misc_slot
};
function solveIncomingItemInfo(item) {
    return [determineItemVolume(item), determineItemsSlot(item)];
}
function addItemtoSlot(item, num, newSlot) {
    if (num === void 0) { num = 1; }
    if (newSlot === void 0) { newSlot = undefined; }
    var slot;
    var tuple = solveIncomingItemInfo(item);
    var vol = tuple[0] * num;
    // log(`additemtoslot:: vol:: ${vol}`)
    // if (!newSlot){
    slot = tuple[1];
    if (!slot) {
        return;
    }
    // }
    // else {
    //     slot = newSlot
    // }
    // slot.items.push(item)
    // log(slot.items)
    slot.currentSize += vol;
    Slot.updateWidgets();
}
function removeItemfromSlot(item, num, oldSlot) {
    if (num === void 0) { num = 1; }
    if (oldSlot === void 0) { oldSlot = undefined; }
    var slot;
    var tuple = solveIncomingItemInfo(item);
    var vol = tuple[0] * num;
    var stopFlag = false;
    // if (!oldSlot){
    //     slot = tuple[1]
    // }
    // else {
    BaseSlots.forEach(function (s) {
        if (s.items.includes(item)) {
            slot = s;
            // log(slot.name); 
            stopFlag = false;
            var i = slot.items.indexOf(item);
            slot.items.splice(i, 1);
            slot.currentSize -= vol;
        }
        else {
            stopFlag = true;
        }
    });
    // if (stopFlag){return}
    // else {slot.currentSize -= vol}
    // oldSlot.currentSize -= vol
    // }
    Slot.updateWidgets();
}
// const GetItemSelected = async () => {
// 	await Utility.wait(0.01);
// 	const recieved: Form = su.GetFormValue(null, "YM.RAB.Select.")
// 	if (!recieved) {return;}
//     // addItemtoSlot(recieved)
// }
function slotLookatItem(item, num) {
    if (num === void 0) { num = 1; }
    var tuple = solveIncomingItemInfo(item);
    var vol = +(tuple[0]).toFixed(2) * num;
    var slot = tuple[1];
    if (!slot) {
        inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: None"));
        return;
    }
    var slotMax = slot.baseSize.toFixed(2);
    var slotCurrent = +(slot.currentSize).toFixed(2);
    // log(`lotAtItem:: slot.baseSize = ${slot.baseSize}`)
    Slot.updateWidgets();
    // inventoryCurrentHighlighted.setAlpha(1)
    inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
    // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slotMax}`)
    slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat((slotCurrent + vol).toFixed(2), ") /").concat(slot.baseSize.toFixed(2)));
    if (slotCurrent + vol > slotMax) {
        slot.widget.setColor([1, 0, 0, 1]);
    } // if the item would overfill a slot
    else {
        slot.widget.setColor([0, 1, 0, 1]);
    }
}
var GetItemHighlighted = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var count, tuple, vol, slot, slotMax, slotCurrent, isInventory, isContainer, isBarter;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.001)];
            case 1:
                _a.sent();
                count = getHighlightedItemCount();
                tuple = solveIncomingItemInfo(item);
                vol = +(tuple[0]).toFixed(2);
                slot = tuple[1];
                if (!vol || !slot) {
                    return [2 /*return*/];
                }
                slotMax = slot.baseSize.toFixed(2);
                slotCurrent = +(slot.currentSize).toFixed(2);
                // log(`GetItemHighlighted:: slot.baseSize = ${slot.baseSize}`)
                // log(`The selected item's slot is ${slot.name}`)
                Slot.grayOutAll();
                slot.grayIn();
                isInventory = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('InventoryMenu');
                isContainer = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('ContainerMenu');
                isBarter = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu');
                // log(`Volume: ${vol}\nSlot: ${slot.name}`)
                inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
                vol *= count;
                if (isInventory) { }
                else if (isContainer || isBarter) {
                    // slot.widget.setColor([0,1,0,1])
                    if (isViewingContainer()) {
                        slot.widget.setColorR(0);
                        slot.widget.setColorG(1);
                        slot.widget.setColorB(0);
                        // slot.widget.setColor([1,0.1,.1,1])
                        if (slotCurrent + vol > slotMax) {
                            slot.widget.setColor([1, 0, 0, 1]);
                        }
                        // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slot.baseSize}`)
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat((slotCurrent + vol).toFixed(2), ") /").concat(slotMax));
                    }
                    else if (!isViewingContainer()) {
                        slot.widget.setColorR(1);
                        slot.widget.setColorG(1);
                        slot.widget.setColorB(1);
                        // if (slotCurrent + vol > slotMax){slot.widget.setColor([1,0,0,1])}
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat((slotCurrent - vol).toFixed(2), ") /").concat(slotMax));
                    }
                }
                return [2 /*return*/];
        }
    });
}); };
var ignoreContainerChangedEvent = false;
function DropItem(itemId, num) {
    ignoreContainerChangedEvent = true;
    var handle = _modevent__WEBPACK_IMPORTED_MODULE_2__.ModEvent.Create('YM_RAB_SLOTS_DropRequest');
    _modevent__WEBPACK_IMPORTED_MODULE_2__.ModEvent.PushInt(handle, itemId);
    _modevent__WEBPACK_IMPORTED_MODULE_2__.ModEvent.PushInt(handle, num);
    _modevent__WEBPACK_IMPORTED_MODULE_2__.ModEvent.Send(handle);
}
var waitRemoveItem = function (item, container) { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.1)];
            case 1:
                _b.sent();
                (_a = pl()) === null || _a === void 0 ? void 0 : _a.removeItem(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(item), 1, false, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.ObjectReference.from(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(container)));
                skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true);
                return [2 /*return*/];
        }
    });
}); };
function DenySelection(itemId, count, oldContainer, slotName) {
    var _a;
    if (slotName === void 0) { slotName = 'Its slot'; }
    // let count: number = getHighlightedItemCount()
    ignoreContainerChangedEvent = true;
    (_a = pl()) === null || _a === void 0 ? void 0 : _a.removeItem(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(itemId), count, true, oldContainer);
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true);
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.notification("You can not pick this item up. ".concat(slotName, " is full"));
}
var waitFadeOut = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(1.5)];
            case 1:
                _a.sent();
                if (isFadein) {
                    return [2 /*return*/];
                }
                Slot.fadeAllOut();
                return [2 /*return*/];
        }
    });
}); };
function isViewingContainer() {
    return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.categoryList.activeSegment") ? false : true;
}
function EvaluateInventory() {
    // Re-evaluate player inventory and fill slots accordingly
    Slot.resetSlotCapacities();
    var allItems = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_4__.AddAllItemsToArray)(pl(), false, false, true);
    allItems.forEach(function (f) {
        var _a;
        addItemtoSlot(f.getFormID(), (_a = pl()) === null || _a === void 0 ? void 0 : _a.getItemCount(f));
    });
}
function getHighlightedItemCount() {
    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('ContainerMenu')) {
        return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count");
    }
    else if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('InventoryMenu')) {
        return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.count");
    }
    return 1;
}
// _____________________________ JSON file functions __________________________________
function checkFilesExist() {
    if (!(0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/skse/plugins/InventorySlots/Slots.json')) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)('data/skse/plugins/InventorySlots/Slots.json', JSON.stringify({}), true);
    }
    if (!(0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/skse/plugins/InventorySlots/Keywords.json')) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)('data/skse/plugins/InventorySlots/Keywords.json', JSON.stringify({}), true);
    }
    var file1 = 'data/skse/plugins/InventorySlots/Keywords.json';
    var file2 = 'data/skse/plugins/InventorySlots/Slots.json';
    var file_contents1 = (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.ReadFromFile)(file1);
    var file_contents2 = (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.ReadFromFile)(file2);
    if (file_contents1.length <= 2) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(file1, JSON.stringify({}), false);
        saveKeywordCategoriesToDataFile();
    }
    if (file_contents2.length <= 2) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(file2, JSON.stringify({}), false);
        saveToDataFile();
    }
}
function saveToDataFile() {
    var data_json = 'data/skse/plugins/InventorySlots/Slots.json';
    // Check if json file exists, and create one if otherwise
    if (!(0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)(data_json)) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify({}), false);
    }
    var oldFile = (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.ReadFromFile)(data_json);
    // If the file is empty, like after just being created or something, give it the initial {} 'squacket' things
    if (oldFile.length == 0) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify({}), false);
        saveToDataFile();
    }
    var innerDict = JSON.parse(oldFile);
    innerDict['volumes'] = itemCategoryVolumes;
    innerDict['slots'] = Slot.getAllSlots();
    // overwrite each slot's widget's private position variables with its actual position 
    innerDict['slots'].forEach(function (s, i) {
        var w = s.widget;
        innerDict['slots'][i]['widget']['x'] = s.widget.getPosition()[0];
        innerDict['slots'][i]['widget']['y'] = s.widget.getPosition()[1];
    });
    var slotNames = [];
    var catNames = Object.keys(categoryToSlot);
    Object.values(categoryToSlot).forEach(function (s, i) {
        var name = s.name;
        var cat = catNames[i];
        slotNames.push([cat, name]);
    });
    innerDict['Category-to-Slots'] = slotNames;
    innerDict['Current Item Widget Position'] = inventoryCurrentHighlighted.getPosition();
    innerDict['Base Widget Position'] = GetBaseWidgetPos();
    (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify(innerDict), false);
}
function saveKeywordCategoriesToDataFile() {
    var data_json = 'data/skse/plugins/InventorySlots/Keywords.json';
    // Check if json file exists, and create one if otherwise
    // if (!FileExists(data_json)){ WriteToFile(data_json, JSON.stringify({}), false) }
    // let oldFile: string = ReadFromFile(data_json)
    // If the file is empty, like after just being created or something, give it the initial {} 'squacket' things
    // if (oldFile.length == 0){ WriteToFile(data_json, JSON.stringify({}), false); saveKeywordCategoriesToDataFile() }
    // let keywords_categories =  JSON.parse(oldFile) 
    var keywords_categories = {
        keywords: {}
    };
    var kwyds = Object.keys(keywordToCategory);
    var cats = Object.values(keywordToCategory);
    var names = [];
    var newDict = [];
    kwyds.forEach(function (k, i) {
        var n = "".concat(ItemCategories[cats[i]]);
        // printConsole(k)
        var t = {};
        t[k] = n;
        newDict.push(t);
    });
    // compatability file. Player can manipulate keyword list to add/remove support for certain items
    keywords_categories['keywords'] = newDict;
    (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify(keywords_categories), false);
}
function importKeywordsFile() {
    var data_json = 'data/skse/plugins/InventorySlots/Keywords.json';
    var oldFile = (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.ReadFromFile)(data_json);
    return JSON.parse(oldFile);
}
function importKeywordsFromFile() {
    var kywds = importKeywordsFile()['keywords'];
    var newKeywordToCategory = [];
    kywds.forEach(function (k, i) {
        var n = Object.keys(k)[0];
        var c = Object.values(k)[0];
        var index = ItemCategories[c];
        // if (!Object.keys(keywordToCategory).includes(n)){ keywordToCategory[n] = index }
        // else {keywordToCategory}
        keywordToCategory[n] = index;
    });
    // printConsole(keywordToCategory)
    // keywordToCategory = newKeywordToCategory
}
function importSlotsFile() {
    var data_json = 'data/skse/plugins/InventorySlots/Slots.json';
    if (!(0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)(data_json)) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify({}), false);
    }
    var oldFile = (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.ReadFromFile)(data_json);
    if (oldFile.length == 0) {
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify({}), false);
        saveToDataFile();
    }
    else {
        return JSON.parse(oldFile);
    }
}
function getSlotFromName(name) {
    var output = undefined;
    Slot.getAllSlots().forEach(function (s) {
        var s_name = s.name;
        if (name.toLowerCase() == s_name.toLowerCase()) {
            output = s;
        }
    });
    return output;
}
function importSlotsfromFile() {
    var slot_info = importSlotsFile()['slots'];
    var names = [];
    slot_info.forEach(function (s) {
        var name = s['name'];
        // if slot in file is not found in current list of slots, create it?
        if (!Slot.getAllSlotNames().includes(name)) {
            names.push([name, s['baseSize'], s['widget']['x'], s['widget']['y']]);
        }
        else { // if slot already exists, overwrite its properties with what's saved
            var new_size = s['baseSize'];
            var index = Slot.getAllSlotNames().indexOf(name);
            var oldSlot = Slot.getAllSlots()[index];
            // import slot size
            oldSlot.baseSize = new_size;
            // import widget positions
            var new_pos_x = s['widget']['x'];
            var new_pos_y = s['widget']['y'];
            oldSlot.widget.setPosition(new_pos_x, new_pos_y);
        }
    });
    Slot.updateWidgets();
    // log(`The new slots are ${names}`)
    // create new slots from json file
    names.forEach(function (info, i) {
        var name = info[0];
        var size = info[1];
        var x = info[2];
        var y = info[3];
        // log(`The new slot has properties: name: ${name}; size: ${size}; pos: ${x}, ${y}`)
        new Slot(name, size, x, y);
    });
}
function importCategoriesfromFile() {
    var cats_slots = importSlotsFile()['Category-to-Slots'];
    cats_slots.forEach(function (cat_slot) {
        var cat = cat_slot[0];
        var slot_name = cat_slot[1];
        var slot = getSlotFromName(slot_name);
        categoryToSlot[cat] = slot;
    });
}
function importCategoryVolumesfromFile() {
    var vols = importSlotsFile()['volumes'];
    var newVolumes = Object.values(vols);
    Object.keys(vols).forEach(function (v, i) {
        var volume = newVolumes[i];
        itemCategoryVolumes[v] = volume;
    });
}
function importInventoryWidgetPositionfromFile() {
    var xy = importSlotsFile()['Current Item Widget Position'];
    inventoryCurrentHighlighted.setPosition(xy[0], xy[1]);
}
function importBaseWidgetPosfromFile() {
    var xy = importSlotsFile()['Base Widget Position'];
    setBaseWidgetPos(xy);
}
function importDataFromFile() {
    checkFilesExist();
    importKeywordsFromFile();
    importCategoryVolumesfromFile();
    importCategoriesfromFile();
    importSlotsfromFile();
    importBaseWidgetPosfromFile();
    importInventoryWidgetPositionfromFile();
}
//____________________________________EVENTS______________________________________________
// mcm script
(0,_Slots_Mcm__WEBPACK_IMPORTED_MODULE_5__.mainMcm)();
var eventBlacklist = ['YM_OnSelect_selectPress', 'YM_OnHighlight_selectHighlight'];
var handle;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuOpen', function (event) {
    var lastitemName = -2;
    var menuName = event.name;
    if (menuName != 'InventoryMenu' && menuName != 'ContainerMenu' && menuName != 'BarterMenu') {
        return;
    }
    var item = 0;
    Slot.updateWidgets();
    handle = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
        if (menuName === 'InventoryMenu') {
            item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
        }
        else if (menuName === 'ContainerMenu') {
            item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
        }
        else if (menuName === 'BarterMenu') {
            item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("BarterMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
        }
        if (item != lastitemName) {
            inventoryCurrentHighlighted.setAlpha(1);
            GetItemHighlighted(item);
            lastitemName = item;
        }
    });
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function (event) {
    inventoryCurrentHighlighted.setColor([1, 1, 1, 0]);
    if (event.name != 'InventoryMenu' && event.name != 'ContainerMenu') {
        return;
    }
    if (handle) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.unsubscribe)(handle);
    }
    EvaluateInventory();
    Slot.fadeAllOut();
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    // log(Object.values(importSlotsFile()['volumes'])[ItemCategories.RABInv_ItemType_ArmorGauntlets])
    // importSlotsfromFile()
    // saveToDataFile()
    if ((0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/plugins/InventorySlots.js') && (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/pluginsdev/InventorySlots.js')) {
        log('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT');
    }
    importDataFromFile();
    EvaluateInventory();
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('containerChanged', function (event) {
    var action = 'Picked Up';
    var newId = -1;
    var oldId = -1;
    var itemId = event.baseObj.getFormID();
    var num = event.numItems;
    var info = solveIncomingItemInfo(event.baseObj.getFormID());
    var volume = info[0];
    var fullVolume = volume * num;
    var slot = info[1];
    if (!slot) {
        return;
    }
    if (event.oldContainer) {
        oldId = event.oldContainer.getFormID();
    }
    if (event.newContainer) {
        newId = event.newContainer.getFormID();
    }
    // if (ignoreContainerChangedEvent){ignoreContainerChangedEvent = false; return;}
    if (itemId === 15) {
        return;
    }
    // log(`oldcontainer == ${ event.oldContainer.getFormID() }`)
    // log(`newcontainer == ${ event.newContainer.getFormID() }`)
    log("containerChanged Running::");
    log("containerChanged Running:: IgnoreFlag:: ".concat(ignoreContainerChangedEvent));
    // Item added to player's inventory
    // ignore gold coming in and out
    if (newId == 20 && !ignoreContainerChangedEvent && itemId != 15) {
        log("newId == 20::");
        // check how many are in an item stack and if any are allowed to be picked up
        var allowedCount = (slot.baseSize - slot.currentSize) / volume;
        if (allowedCount > num) {
            allowedCount = num;
        }
        if (volume <= 0) {
            allowedCount = num;
        }
        var disallowedCount = num - allowedCount;
        // if it is not a stack of items
        if (num === 1) {
            log("num === 1::");
            // the slot is filled
            if (slot.currentSize + fullVolume > slot.baseSize) {
                log("Slot might be filled");
                // if the item was picked up from the world
                if (!event.oldContainer) {
                    DropItem(itemId, num);
                    log('!event.oldContainer:: ');
                }
                // if the item was taken from a container
                else {
                    log('allowedcount === 1:: Trying to deny selection');
                    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu')) {
                        DropItem(itemId, num);
                    }
                    else {
                        // Flat out prevent taking the item
                        DenySelection(itemId, disallowedCount, event.oldContainer, slot.name);
                    }
                    log('event.oldContainer');
                }
                // ignoreContainerChangedEvent = true 
            }
            else {
                log("num === 1:: additemtoslot");
                addItemtoSlot(itemId, num);
            }
        }
        // if it is a stack of items
        else if (num > 1) {
            log("\nnum > 1:: allowedcount:: ".concat(allowedCount, "\ndisallowedcount:: ").concat(disallowedCount, "\nvolume * num = ").concat(volume, " * ").concat(allowedCount));
            addItemtoSlot(itemId, allowedCount);
            // removeItemfromSlot(itemId, disallowedCount)
            // if the item was picked up from the world
            if (slot.currentSize + (volume * allowedCount) >= slot.baseSize) {
                if (!event.oldContainer && disallowedCount > 0) {
                    DropItem(itemId, disallowedCount);
                    log('!event.oldContainer:: disallowed count > 0::');
                }
                // if the item was taken from a container
                else if (disallowedCount) {
                    // Check if it's possible to allow a few through, like arrows
                    // Flat out prevent taking the item
                    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu')) {
                        log('allowedCount > 1:: trying to drop item');
                        DropItem(itemId, disallowedCount);
                    }
                    else {
                        log('allowedCount > 1:: Trying to deny selection');
                        DenySelection(itemId, disallowedCount, event.oldContainer, slot.name);
                    }
                    log('event.oldContainer');
                }
                // ignoreContainerChangedEvent = true 
                log("allowedCount > 1:: IgnoreFlag:: ".concat(ignoreContainerChangedEvent));
            }
        }
    }
    // Item removed from player's inventory
    else if (oldId == 20 && !ignoreContainerChangedEvent && itemId != 15) {
        log("Remove:: IgnoreFlag:: ".concat(ignoreContainerChangedEvent));
        log("Removing ".concat(itemId, " with count ").concat(num));
        removeItemfromSlot(itemId, num);
    }
    else {
        ignoreContainerChangedEvent = false;
    }
    if (slot.currentSize <= 0) {
        slot.currentSize = 0;
    }
});
var isFadein = false;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('crosshairRefChanged', function (event) {
    var _a, _b, _c, _d, _e, _f;
    var id = (_b = (_a = event.reference) === null || _a === void 0 ? void 0 : _a.getBaseObject()) === null || _b === void 0 ? void 0 : _b.getFormID();
    var typeBlacklist = [62 /* Character */, 24 /* Activator */, 29 /* Door */, 33 /* Apparatus */, 28 /* Container */, 43 /* NPC */, 39 /* Flora */, 38 /* Tree */];
    if (((_d = (_c = event.reference) === null || _c === void 0 ? void 0 : _c.getBaseObject()) === null || _d === void 0 ? void 0 : _d.isPlayable()) && !typeBlacklist.includes((_f = (_e = event.reference) === null || _e === void 0 ? void 0 : _e.getBaseObject()) === null || _f === void 0 ? void 0 : _f.getType())) {
        inventoryCurrentHighlighted.setAlpha(1);
        isFadein = true;
        Slot.updateWidgets();
        Slot.fadeAllIn();
        slotLookatItem(id);
    }
    else {
        isFadein = false;
        waitFadeOut();
    }
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('equip', function (event) {
    var _a, _b, _c;
    if (((_a = event.actor.getBaseObject()) === null || _a === void 0 ? void 0 : _a.getFormID()) != ((_c = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getBaseObject()) === null || _c === void 0 ? void 0 : _c.getFormID())) {
        return;
    }
    // log(event.baseObj.getName())
    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('MagicMenu')) {
        return;
    }
    var item = event.baseObj.getFormID();
    // log(`equip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
    var oldCat = determineItemCategory(item);
    removeItemfromSlot(item, 1);
    addItemtoSlot(item, 1);
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('unequip', function (event) {
    var _a, _b, _c;
    if (((_a = event.actor.getBaseObject()) === null || _a === void 0 ? void 0 : _a.getFormID()) != ((_c = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getBaseObject()) === null || _c === void 0 ? void 0 : _c.getFormID())) {
        return;
    }
    // log(event.baseObj.getName())
    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('MagicMenu')) {
        return;
    }
    var item = event.baseObj.getFormID();
    // log(`unequip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
    removeItemfromSlot(item, 1);
    addItemtoSlot(item, 1);
});


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanCellObjects": () => (/* binding */ ScanCellObjects),
/* harmony export */   "ScanCellNPCs": () => (/* binding */ ScanCellNPCs),
/* harmony export */   "ScanCellNPCsByFaction": () => (/* binding */ ScanCellNPCsByFaction),
/* harmony export */   "ToggleFreeCamera": () => (/* binding */ ToggleFreeCamera),
/* harmony export */   "SetFreeCameraSpeed": () => (/* binding */ SetFreeCameraSpeed),
/* harmony export */   "SetFreeCameraState": () => (/* binding */ SetFreeCameraState),
/* harmony export */   "FilesInFolder": () => (/* binding */ FilesInFolder),
/* harmony export */   "FoldersInFolder": () => (/* binding */ FoldersInFolder),
/* harmony export */   "FileExists": () => (/* binding */ FileExists),
/* harmony export */   "ReadFromFile": () => (/* binding */ ReadFromFile),
/* harmony export */   "WriteToFile": () => (/* binding */ WriteToFile),
/* harmony export */   "PrintConsole": () => (/* binding */ PrintConsole),
/* harmony export */   "GetRaceEditorID": () => (/* binding */ GetRaceEditorID),
/* harmony export */   "GetActorRaceEditorID": () => (/* binding */ GetActorRaceEditorID),
/* harmony export */   "SetMenus": () => (/* binding */ SetMenus),
/* harmony export */   "GetNodeRotation": () => (/* binding */ GetNodeRotation),
/* harmony export */   "ScanCellActors": () => (/* binding */ ScanCellActors)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.MiscUtil;
/** Cell scanning functions */
// Scans the current cell of the given CenterOn for an object of the given form type ID within radius and returns an array for all that
// and (optionally) also has the given keyword if changed from default none. Setting radius higher than 0.0 will restrict the 
// search distance from around CenterOn, 0.0 will search entire cell the object is in.
// NOTE: Keyword searches seem a little unpredictable so be sure to test if your usage of it works before using the results.
var ScanCellObjects = function (formType, CenterOn, radius, HasKeyword) {
    if (radius === void 0) { radius = 0.0; }
    if (HasKeyword === void 0) { HasKeyword = null; }
    return sn.ScanCellObjects(formType, CenterOn, radius, HasKeyword);
};
// Scans the current cell of the given CenterOn for an actor within the given radius and returns an array for all actors that are
// currently alive and (optionally) has the given keyword if changed from default none. Setting radius higher than 0.0 will restrict the 
// search distance from around CenterOn, 0.0 will search entire cell the object is in.
// NOTE: Keyword searches seem a little unpredictable so be sure to test if your usage of it works before using the results.
var ScanCellNPCs = function (CenterOn, radius, HasKeyword, IgnoreDead) {
    if (radius === void 0) { radius = 0.0; }
    if (HasKeyword === void 0) { HasKeyword = null; }
    if (IgnoreDead === void 0) { IgnoreDead = true; }
    return sn.ScanCellNPCs(CenterOn, radius, HasKeyword, IgnoreDead);
};
// Same as ScanCellNPCs(), however it filters the return by a given faction and (optionally) their rank in that faction.
var ScanCellNPCsByFaction = function (FindFaction, CenterOn, radius, minRank, maxRank, IgnoreDead) {
    if (radius === void 0) { radius = 0.0; }
    if (minRank === void 0) { minRank = 0; }
    if (maxRank === void 0) { maxRank = 127; }
    if (IgnoreDead === void 0) { IgnoreDead = true; }
    return sn.ScanCellNPCsByFaction(FindFaction, CenterOn, radius, minRank, maxRank, IgnoreDead);
};
/** Camera functions */
// Toggle freefly camera.
var ToggleFreeCamera = function (stopTime) {
    if (stopTime === void 0) { stopTime = false; }
    return sn.ToggleFreeCamera(stopTime);
};
// Set freefly cam speed.
var SetFreeCameraSpeed = function (speed) { return sn.SetFreeCameraSpeed(speed); };
// Set current freefly cam state & set the speed if enabling
var SetFreeCameraState = function (enable, speed) {
    if (speed === void 0) { speed = 10.0; }
    return sn.SetFreeCameraState(enable, speed);
};
/** File related functions */
// Get an array of files in a given parent directory that have the given extension.
// directory is relative to the root Skyrim folder (where skyrim.exe is) and is non-recursive.
// directory = "." to get all files in root Skyrim folder
// directory = "data/meshes" to get all files in the <root>/data/meshes folder
// extension = ".nif" to get all .nif mesh files.
// (default) extension="*" to get all files
var FilesInFolder = function (directory, extension) {
    if (extension === void 0) { extension = "*"; }
    return sn.FilesInFolder(directory, extension);
};
// Get an array of folders in a given parent directory
// Same rules and examples as above FilesInFolder apply to the directory rule here.
var FoldersInFolder = function (directory) { return sn.FoldersInFolder(directory); };
// Check if a given file exists relative to root Skyrim directory. Example: FileExists("data/meshes/example.nif")
var FileExists = function (fileName) { return sn.FileExists(fileName); };
// Read string from file. Do not read large files!
var ReadFromFile = function (fileName) { return sn.ReadFromFile(fileName); };
// Write string to file.
var WriteToFile = function (fileName, text, append, timestamp) {
    if (append === void 0) { append = true; }
    if (timestamp === void 0) { timestamp = false; }
    return sn.WriteToFile(fileName, text, append, timestamp);
};
/** Misc */
// Print text to console.
var PrintConsole = function (text) { return sn.PrintConsole(text); };
// Get race's editor ID.
var GetRaceEditorID = function (raceForm) { return sn.GetRaceEditorID(raceForm); };
// Get race's editor ID.
var GetActorRaceEditorID = function (actorRef) { return sn.GetActorRaceEditorID(actorRef); };
// Set HUD on / off - NOT CURRENT WORKING IN SKYRIM SPECIAL EDITION
var SetMenus = function (enabled) { return sn.SetMenus(enabled); };
// Get node rotation
// REMOVED v2.9: Useless, only does a part of the job.
// float function GetNodeRotation(ObjectReference obj, string nodeName, bool firstPerson, int rotationIndex) global native
var GetNodeRotation = function (obj, nodeName, firstPerson, rotationIndex) { return sn.GetNodeRotation(obj, nodeName, firstPerson, rotationIndex); };
// LEGACY v3.3 - Added Ignoredead parameter to function, aliased for backwards compatability with v3.2.
var ScanCellActors = function (CenterOn, radius, HasKeyword) {
    if (radius === void 0) { radius = 5000.0; }
    if (HasKeyword === void 0) { HasKeyword = null; }
    return sn.ScanCellActors(CenterOn, radius, HasKeyword);
};


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModEvent": () => (/* binding */ ModEvent)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var ModEvent = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.ModEvent;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spText": () => (/* binding */ spText)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var keykname = '.spTexts.';
var collectionKey = keykname + 'collection.';
var spTextsCollection = new Map();
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
var spText = /** @class */ (function () {
    function spText(xPos, yPos, text, col, sType, sModName) {
        this.index = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.createText)(xPos, yPos, text, [col[0], col[1], col[2], col[3]]);
        this.type = sType ? sType : "undefined";
        this.owningMod = sModName ? sModName : "undefined";
        this.x = xPos;
        this.y = yPos;
        spTextsCollection.set(this.index, this);
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    }
    spText.prototype.getIndex = function () {
        return this.index;
    };
    spText.prototype.getText = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextString)(this.index);
    };
    spText.prototype.getOwningMod = function () {
        return this.owningMod;
    };
    spText.prototype.getPosition = function () {
        var num = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextPos)(this.index);
        return num;
    };
    spText.prototype.getColor = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextColor)(this.index);
    };
    spText.prototype.getType = function () {
        return this.type;
    };
    spText.prototype.setType = function (t) {
        this.type = t;
    };
    spText.prototype.setText = function (txt) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(this.index, txt);
    };
    spText.prototype.setColor = function (rgba) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, rgba);
    };
    spText.prototype.setPosition = function (xPos, yPos) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextPos)(this.index, xPos, yPos);
    };
    spText.prototype.setOwningMod = function (mod) {
        this.owningMod = mod;
    };
    spText.prototype.setColorR = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [col, color[1], color[2], color[3]]);
    };
    spText.prototype.setColorG = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], col, color[2], color[3]]);
    };
    spText.prototype.setColorB = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], col, color[3]]);
    };
    spText.prototype.setAlpha = function (alpha) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], color[2], alpha]);
    };
    spText.prototype.destroyText = function () {
        spTextsCollection.delete(this.index);
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(this.index);
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.destroyAllTexts = function () {
        spTextsCollection.clear();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.countModTexts = function (mod) {
        var cnt = 0;
        var c = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        c.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.owningMod == mod)
                cnt++;
        });
        return cnt;
    };
    spText.countTypeTexts = function (t) {
        var cnt = 0;
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t)
                cnt++;
        });
        return cnt;
    };
    spText.destroyAllModTexts = function (mod) {
        // if (!tmpColl){return;}
        try {
            var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
            tmpColl.forEach(function (value, key) {
                var tmp = value;
                if (tmp.owningMod == mod) {
                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                    spTextsCollection.delete(key);
                }
            });
        }
        catch (_a) { }
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey] = spTextsCollection;
    };
    spText.destroyAllTypeTexts = function (t) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                tmpColl.delete(key);
                spTextsCollection.delete(key);
            }
        });
    };
    spText.disableModTexts = function (mod) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.enableModTexts = function (mod) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                tmp.setAlpha(1);
            }
        });
    };
    spText.disableTypeTexts = function (t) {
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.getTypeTexts = function (t) {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getModTexts = function (mod) {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getAllTexts = function () {
        var list = [];
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            list.push(tmp);
        });
        return list;
    };
    spText.getTextByIndex = function (i) {
        var tmp = null;
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            if (value.getIndex() == i) {
                tmp = value;
            }
        });
        return tmp;
    };
    spText.destroyTextByIndex = function (i) {
        var tmp = spText.getTextByIndex(i);
        if (tmp) {
            tmp.destroyText();
            return true;
        }
        return false;
    };
    spText.prototype.toString = function () {
        return "index: ".concat(this.getIndex(), ", text:\"").concat(this.getText(), "\", type: ").concat(this.getType(), ", mod: ").concat(this.getOwningMod());
    };
    return spText;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsScriptAttachedToActiveEffect": () => (/* binding */ IsScriptAttachedToActiveEffect),
/* harmony export */   "GetActiveEffects": () => (/* binding */ GetActiveEffects),
/* harmony export */   "GetActorAlpha": () => (/* binding */ GetActorAlpha),
/* harmony export */   "GetActorRefraction": () => (/* binding */ GetActorRefraction),
/* harmony export */   "GetActorState": () => (/* binding */ GetActorState),
/* harmony export */   "GetActorSoulSize": () => (/* binding */ GetActorSoulSize),
/* harmony export */   "GetActorValueModifier": () => (/* binding */ GetActorValueModifier),
/* harmony export */   "GetCriticalStage": () => (/* binding */ GetCriticalStage),
/* harmony export */   "GetCombatAllies": () => (/* binding */ GetCombatAllies),
/* harmony export */   "GetCombatTargets": () => (/* binding */ GetCombatTargets),
/* harmony export */   "GetCommandedActors": () => (/* binding */ GetCommandedActors),
/* harmony export */   "GetCommandingActor": () => (/* binding */ GetCommandingActor),
/* harmony export */   "GetHairColor": () => (/* binding */ GetHairColor),
/* harmony export */   "GetHeadPartTextureSet": () => (/* binding */ GetHeadPartTextureSet),
/* harmony export */   "GetLocalGravityActor": () => (/* binding */ GetLocalGravityActor),
/* harmony export */   "GetObjectUnderFeet": () => (/* binding */ GetObjectUnderFeet),
/* harmony export */   "GetRunningPackage": () => (/* binding */ GetRunningPackage),
/* harmony export */   "GetSkinColor": () => (/* binding */ GetSkinColor),
/* harmony export */   "GetTimeDead": () => (/* binding */ GetTimeDead),
/* harmony export */   "GetTimeOfDeath": () => (/* binding */ GetTimeOfDeath),
/* harmony export */   "HasActiveSpell": () => (/* binding */ HasActiveSpell),
/* harmony export */   "HasDeferredKill": () => (/* binding */ HasDeferredKill),
/* harmony export */   "HasMagicEffectWithArchetype": () => (/* binding */ HasMagicEffectWithArchetype),
/* harmony export */   "HasSkin": () => (/* binding */ HasSkin),
/* harmony export */   "IsActorInWater": () => (/* binding */ IsActorInWater),
/* harmony export */   "IsActorUnderwater": () => (/* binding */ IsActorUnderwater),
/* harmony export */   "IsLimbGone": () => (/* binding */ IsLimbGone),
/* harmony export */   "IsQuadruped": () => (/* binding */ IsQuadruped),
/* harmony export */   "IsSoulTrapped": () => (/* binding */ IsSoulTrapped),
/* harmony export */   "AddAllEquippedItemsToArray": () => (/* binding */ AddAllEquippedItemsToArray),
/* harmony export */   "AddBasePerk": () => (/* binding */ AddBasePerk),
/* harmony export */   "AddBaseSpell": () => (/* binding */ AddBaseSpell),
/* harmony export */   "BlendColorWithSkinTone": () => (/* binding */ BlendColorWithSkinTone),
/* harmony export */   "DecapitateActor": () => (/* binding */ DecapitateActor),
/* harmony export */   "FreezeActor": () => (/* binding */ FreezeActor),
/* harmony export */   "KillNoWait": () => (/* binding */ KillNoWait),
/* harmony export */   "MixColorWithSkinTone": () => (/* binding */ MixColorWithSkinTone),
/* harmony export */   "RemoveAddedSpells": () => (/* binding */ RemoveAddedSpells),
/* harmony export */   "RemoveBasePerk": () => (/* binding */ RemoveBasePerk),
/* harmony export */   "RemoveBaseSpell": () => (/* binding */ RemoveBaseSpell),
/* harmony export */   "ReplaceArmorTextureSet": () => (/* binding */ ReplaceArmorTextureSet),
/* harmony export */   "ReplaceFaceTextureSet": () => (/* binding */ ReplaceFaceTextureSet),
/* harmony export */   "ReplaceSkinTextureSet": () => (/* binding */ ReplaceSkinTextureSet),
/* harmony export */   "ResetActor3D": () => (/* binding */ ResetActor3D),
/* harmony export */   "SetActorRefraction": () => (/* binding */ SetActorRefraction),
/* harmony export */   "SetHairColor": () => (/* binding */ SetHairColor),
/* harmony export */   "SetHeadPartAlpha": () => (/* binding */ SetHeadPartAlpha),
/* harmony export */   "SetHeadPartTextureSet": () => (/* binding */ SetHeadPartTextureSet),
/* harmony export */   "SetLinearVelocity": () => (/* binding */ SetLinearVelocity),
/* harmony export */   "SetLocalGravityActor": () => (/* binding */ SetLocalGravityActor),
/* harmony export */   "SetSkinAlpha": () => (/* binding */ SetSkinAlpha),
/* harmony export */   "SetSkinColor": () => (/* binding */ SetSkinColor),
/* harmony export */   "SetSoulTrapped": () => (/* binding */ SetSoulTrapped),
/* harmony export */   "ToggleHairWigs": () => (/* binding */ ToggleHairWigs),
/* harmony export */   "UnequipAllOfType": () => (/* binding */ UnequipAllOfType),
/* harmony export */   "GetDeathItem": () => (/* binding */ GetDeathItem),
/* harmony export */   "GetNthPerk": () => (/* binding */ GetNthPerk),
/* harmony export */   "GetPerkCount": () => (/* binding */ GetPerkCount),
/* harmony export */   "SetDeathItem": () => (/* binding */ SetDeathItem),
/* harmony export */   "IsScriptAttachedToAlias": () => (/* binding */ IsScriptAttachedToAlias),
/* harmony export */   "GetFootstepSet": () => (/* binding */ GetFootstepSet),
/* harmony export */   "SetFootstepSet": () => (/* binding */ SetFootstepSet),
/* harmony export */   "AddActorToArray": () => (/* binding */ AddActorToArray),
/* harmony export */   "AddStringToArray": () => (/* binding */ AddStringToArray),
/* harmony export */   "ArrayStringCount": () => (/* binding */ ArrayStringCount),
/* harmony export */   "SortArrayString": () => (/* binding */ SortArrayString),
/* harmony export */   "GetSortedActorNames": () => (/* binding */ GetSortedActorNames),
/* harmony export */   "GetSortedNPCNames": () => (/* binding */ GetSortedNPCNames),
/* harmony export */   "ClearReadFlag": () => (/* binding */ ClearReadFlag),
/* harmony export */   "SetReadFlag": () => (/* binding */ SetReadFlag),
/* harmony export */   "GetCellNorthRotation": () => (/* binding */ GetCellNorthRotation),
/* harmony export */   "GetLightingTemplate": () => (/* binding */ GetLightingTemplate),
/* harmony export */   "SetLightingTemplate": () => (/* binding */ SetLightingTemplate),
/* harmony export */   "SetCellNorthRotation": () => (/* binding */ SetCellNorthRotation),
/* harmony export */   "GivePlayerSpellBook": () => (/* binding */ GivePlayerSpellBook),
/* harmony export */   "DumpAnimationVariables": () => (/* binding */ DumpAnimationVariables),
/* harmony export */   "CanActorBeDetected": () => (/* binding */ CanActorBeDetected),
/* harmony export */   "CanActorDetect": () => (/* binding */ CanActorDetect),
/* harmony export */   "ForceActorDetection": () => (/* binding */ ForceActorDetection),
/* harmony export */   "ForceActorDetecting": () => (/* binding */ ForceActorDetecting),
/* harmony export */   "IsDetectedByAnyone": () => (/* binding */ IsDetectedByAnyone),
/* harmony export */   "PreventActorDetection": () => (/* binding */ PreventActorDetection),
/* harmony export */   "PreventActorDetecting": () => (/* binding */ PreventActorDetecting),
/* harmony export */   "ResetActorDetection": () => (/* binding */ ResetActorDetection),
/* harmony export */   "ResetActorDetecting": () => (/* binding */ ResetActorDetecting),
/* harmony export */   "GetAddonModels": () => (/* binding */ GetAddonModels),
/* harmony export */   "GetEffectShaderTotalCount": () => (/* binding */ GetEffectShaderTotalCount),
/* harmony export */   "IsEffectShaderFlagSet": () => (/* binding */ IsEffectShaderFlagSet),
/* harmony export */   "GetMembraneFillTexture": () => (/* binding */ GetMembraneFillTexture),
/* harmony export */   "GetMembraneHolesTexture": () => (/* binding */ GetMembraneHolesTexture),
/* harmony export */   "GetMembranePaletteTexture": () => (/* binding */ GetMembranePaletteTexture),
/* harmony export */   "GetParticleFullCount": () => (/* binding */ GetParticleFullCount),
/* harmony export */   "GetParticlePaletteTexture": () => (/* binding */ GetParticlePaletteTexture),
/* harmony export */   "GetParticleShaderTexture": () => (/* binding */ GetParticleShaderTexture),
/* harmony export */   "GetParticlePersistentCount": () => (/* binding */ GetParticlePersistentCount),
/* harmony export */   "ClearEffectShaderFlag": () => (/* binding */ ClearEffectShaderFlag),
/* harmony export */   "SetAddonModels": () => (/* binding */ SetAddonModels),
/* harmony export */   "SetEffectShaderFlag": () => (/* binding */ SetEffectShaderFlag),
/* harmony export */   "SetMembraneColorKeyData": () => (/* binding */ SetMembraneColorKeyData),
/* harmony export */   "SetMembraneFillTexture": () => (/* binding */ SetMembraneFillTexture),
/* harmony export */   "SetMembraneHolesTexture": () => (/* binding */ SetMembraneHolesTexture),
/* harmony export */   "SetMembranePaletteTexture": () => (/* binding */ SetMembranePaletteTexture),
/* harmony export */   "SetParticleColorKeyData": () => (/* binding */ SetParticleColorKeyData),
/* harmony export */   "SetParticleFullCount": () => (/* binding */ SetParticleFullCount),
/* harmony export */   "SetParticlePaletteTexture": () => (/* binding */ SetParticlePaletteTexture),
/* harmony export */   "SetParticlePersistentCount": () => (/* binding */ SetParticlePersistentCount),
/* harmony export */   "SetParticleShaderTexture": () => (/* binding */ SetParticleShaderTexture),
/* harmony export */   "GetEnchantmentType": () => (/* binding */ GetEnchantmentType),
/* harmony export */   "AddMagicEffectToEnchantment": () => (/* binding */ AddMagicEffectToEnchantment),
/* harmony export */   "AddEffectItemToEnchantment": () => (/* binding */ AddEffectItemToEnchantment),
/* harmony export */   "RemoveMagicEffectFromEnchantment": () => (/* binding */ RemoveMagicEffectFromEnchantment),
/* harmony export */   "RemoveEffectItemFromEnchantment": () => (/* binding */ RemoveEffectItemFromEnchantment),
/* harmony export */   "GetDeathEffectType": () => (/* binding */ GetDeathEffectType),
/* harmony export */   "RemoveEffectsNotOfType": () => (/* binding */ RemoveEffectsNotOfType),
/* harmony export */   "SendFECResetEvent": () => (/* binding */ SendFECResetEvent),
/* harmony export */   "EvaluateConditionList": () => (/* binding */ EvaluateConditionList),
/* harmony export */   "ClearRecordFlag": () => (/* binding */ ClearRecordFlag),
/* harmony export */   "GetConditionList": () => (/* binding */ GetConditionList),
/* harmony export */   "GetFormEditorID": () => (/* binding */ GetFormEditorID),
/* harmony export */   "IsFormInMod": () => (/* binding */ IsFormInMod),
/* harmony export */   "IsGeneratedForm": () => (/* binding */ IsGeneratedForm),
/* harmony export */   "IsRecordFlagSet": () => (/* binding */ IsRecordFlagSet),
/* harmony export */   "IsScriptAttachedToForm": () => (/* binding */ IsScriptAttachedToForm),
/* harmony export */   "SetRecordFlag": () => (/* binding */ SetRecordFlag),
/* harmony export */   "AddKeywordToForm": () => (/* binding */ AddKeywordToForm),
/* harmony export */   "MarkItemAsFavorite": () => (/* binding */ MarkItemAsFavorite),
/* harmony export */   "ReplaceKeywordOnForm": () => (/* binding */ ReplaceKeywordOnForm),
/* harmony export */   "RemoveKeywordOnForm": () => (/* binding */ RemoveKeywordOnForm),
/* harmony export */   "UnmarkItemAsFavorite": () => (/* binding */ UnmarkItemAsFavorite),
/* harmony export */   "GetFurnitureType": () => (/* binding */ GetFurnitureType),
/* harmony export */   "GetAllEnchantments": () => (/* binding */ GetAllEnchantments),
/* harmony export */   "GetAllForms": () => (/* binding */ GetAllForms),
/* harmony export */   "GetAllRaces": () => (/* binding */ GetAllRaces),
/* harmony export */   "GetAllSpells": () => (/* binding */ GetAllSpells),
/* harmony export */   "GetActorsByProcessingLevel": () => (/* binding */ GetActorsByProcessingLevel),
/* harmony export */   "GetAllFormsInMod": () => (/* binding */ GetAllFormsInMod),
/* harmony export */   "GetAllEnchantmentsInMod": () => (/* binding */ GetAllEnchantmentsInMod),
/* harmony export */   "GetAllRacesInMod": () => (/* binding */ GetAllRacesInMod),
/* harmony export */   "GetAllSpellsInMod": () => (/* binding */ GetAllSpellsInMod),
/* harmony export */   "GetAttachedCells": () => (/* binding */ GetAttachedCells),
/* harmony export */   "GetFormFromEditorID": () => (/* binding */ GetFormFromEditorID),
/* harmony export */   "GetGameSettingBool": () => (/* binding */ GetGameSettingBool),
/* harmony export */   "GetGodMode": () => (/* binding */ GetGodMode),
/* harmony export */   "GetLocalGravity": () => (/* binding */ GetLocalGravity),
/* harmony export */   "GetNumActorsInHigh": () => (/* binding */ GetNumActorsInHigh),
/* harmony export */   "GetPlayerFollowers": () => (/* binding */ GetPlayerFollowers),
/* harmony export */   "IsPluginFound": () => (/* binding */ IsPluginFound),
/* harmony export */   "IsSurvivalModeActive": () => (/* binding */ IsSurvivalModeActive),
/* harmony export */   "SetLocalGravity": () => (/* binding */ SetLocalGravity),
/* harmony export */   "GetHazardArt": () => (/* binding */ GetHazardArt),
/* harmony export */   "GetHazardIMOD": () => (/* binding */ GetHazardIMOD),
/* harmony export */   "GetHazardIMODRadius": () => (/* binding */ GetHazardIMODRadius),
/* harmony export */   "GetHazardIPDS": () => (/* binding */ GetHazardIPDS),
/* harmony export */   "GetHazardLifetime": () => (/* binding */ GetHazardLifetime),
/* harmony export */   "GetHazardLight": () => (/* binding */ GetHazardLight),
/* harmony export */   "GetHazardLimit": () => (/* binding */ GetHazardLimit),
/* harmony export */   "GetHazardRadius": () => (/* binding */ GetHazardRadius),
/* harmony export */   "GetHazardSound": () => (/* binding */ GetHazardSound),
/* harmony export */   "GetHazardSpell": () => (/* binding */ GetHazardSpell),
/* harmony export */   "GetHazardTargetInterval": () => (/* binding */ GetHazardTargetInterval),
/* harmony export */   "IsHazardFlagSet": () => (/* binding */ IsHazardFlagSet),
/* harmony export */   "ClearHazardFlag": () => (/* binding */ ClearHazardFlag),
/* harmony export */   "SetHazardArt": () => (/* binding */ SetHazardArt),
/* harmony export */   "SetHazardFlag": () => (/* binding */ SetHazardFlag),
/* harmony export */   "SetHazardIMOD": () => (/* binding */ SetHazardIMOD),
/* harmony export */   "SetHazardIMODRadius": () => (/* binding */ SetHazardIMODRadius),
/* harmony export */   "SetHazardIPDS": () => (/* binding */ SetHazardIPDS),
/* harmony export */   "SetHazardLifetime": () => (/* binding */ SetHazardLifetime),
/* harmony export */   "SetHazardLight": () => (/* binding */ SetHazardLight),
/* harmony export */   "SetHazardLimit": () => (/* binding */ SetHazardLimit),
/* harmony export */   "SetHazardRadius": () => (/* binding */ SetHazardRadius),
/* harmony export */   "SetHazardSound": () => (/* binding */ SetHazardSound),
/* harmony export */   "SetHazardSpell": () => (/* binding */ SetHazardSpell),
/* harmony export */   "SetHazardTargetInterval": () => (/* binding */ SetHazardTargetInterval),
/* harmony export */   "GetLightColor": () => (/* binding */ GetLightColor),
/* harmony export */   "GetLightFade": () => (/* binding */ GetLightFade),
/* harmony export */   "GetLightFOV": () => (/* binding */ GetLightFOV),
/* harmony export */   "GetLightRadius": () => (/* binding */ GetLightRadius),
/* harmony export */   "GetLightRGB": () => (/* binding */ GetLightRGB),
/* harmony export */   "GetLightShadowDepthBias": () => (/* binding */ GetLightShadowDepthBias),
/* harmony export */   "GetLightType": () => (/* binding */ GetLightType),
/* harmony export */   "SetLightColor": () => (/* binding */ SetLightColor),
/* harmony export */   "SetLightFade": () => (/* binding */ SetLightFade),
/* harmony export */   "SetLightFOV": () => (/* binding */ SetLightFOV),
/* harmony export */   "SetLightRadius": () => (/* binding */ SetLightRadius),
/* harmony export */   "SetLightRGB": () => (/* binding */ SetLightRGB),
/* harmony export */   "SetLightShadowDepthBias": () => (/* binding */ SetLightShadowDepthBias),
/* harmony export */   "SetLightType": () => (/* binding */ SetLightType),
/* harmony export */   "GetParentLocation": () => (/* binding */ GetParentLocation),
/* harmony export */   "SetParentLocation": () => (/* binding */ SetParentLocation),
/* harmony export */   "GetAssociatedForm": () => (/* binding */ GetAssociatedForm),
/* harmony export */   "GetEffectArchetypeAsInt": () => (/* binding */ GetEffectArchetypeAsInt),
/* harmony export */   "GetEffectArchetypeAsString": () => (/* binding */ GetEffectArchetypeAsString),
/* harmony export */   "GetPrimaryActorValue": () => (/* binding */ GetPrimaryActorValue),
/* harmony export */   "GetSecondaryActorValue": () => (/* binding */ GetSecondaryActorValue),
/* harmony export */   "GetMagicEffectSound": () => (/* binding */ GetMagicEffectSound),
/* harmony export */   "SetAssociatedForm": () => (/* binding */ SetAssociatedForm),
/* harmony export */   "SetMagicEffectSound": () => (/* binding */ SetMagicEffectSound),
/* harmony export */   "AddAllItemsToArray": () => (/* binding */ AddAllItemsToArray),
/* harmony export */   "AddAllItemsToList": () => (/* binding */ AddAllItemsToList),
/* harmony export */   "AddItemsOfTypeToArray": () => (/* binding */ AddItemsOfTypeToArray),
/* harmony export */   "AddItemsOfTypeToList": () => (/* binding */ AddItemsOfTypeToList),
/* harmony export */   "FindAllReferencesOfFormType": () => (/* binding */ FindAllReferencesOfFormType),
/* harmony export */   "FindAllReferencesWithKeyword": () => (/* binding */ FindAllReferencesWithKeyword),
/* harmony export */   "FindAllReferencesOfType": () => (/* binding */ FindAllReferencesOfType),
/* harmony export */   "FindFirstItemInList": () => (/* binding */ FindFirstItemInList),
/* harmony export */   "GetActivateChildren": () => (/* binding */ GetActivateChildren),
/* harmony export */   "GetActiveGamebryoAnimation": () => (/* binding */ GetActiveGamebryoAnimation),
/* harmony export */   "GetActorCause": () => (/* binding */ GetActorCause),
/* harmony export */   "GetAllArtObjects": () => (/* binding */ GetAllArtObjects),
/* harmony export */   "GetAllEffectShaders": () => (/* binding */ GetAllEffectShaders),
/* harmony export */   "GetClosestActorFromRef": () => (/* binding */ GetClosestActorFromRef),
/* harmony export */   "GetEffectShaderDuration": () => (/* binding */ GetEffectShaderDuration),
/* harmony export */   "GetDoorDestination": () => (/* binding */ GetDoorDestination),
/* harmony export */   "GetLinkedChildren": () => (/* binding */ GetLinkedChildren),
/* harmony export */   "GetMagicEffectSource": () => (/* binding */ GetMagicEffectSource),
/* harmony export */   "GetMaterialType": () => (/* binding */ GetMaterialType),
/* harmony export */   "GetMotionType": () => (/* binding */ GetMotionType),
/* harmony export */   "GetRandomActorFromRef": () => (/* binding */ GetRandomActorFromRef),
/* harmony export */   "GetQuestItems": () => (/* binding */ GetQuestItems),
/* harmony export */   "GetRefAliases": () => (/* binding */ GetRefAliases),
/* harmony export */   "GetStoredSoulSize": () => (/* binding */ GetStoredSoulSize),
/* harmony export */   "HasArtObject": () => (/* binding */ HasArtObject),
/* harmony export */   "HasEffectShader": () => (/* binding */ HasEffectShader),
/* harmony export */   "HasNiExtraData": () => (/* binding */ HasNiExtraData),
/* harmony export */   "IsLoadDoor": () => (/* binding */ IsLoadDoor),
/* harmony export */   "IsQuestItem": () => (/* binding */ IsQuestItem),
/* harmony export */   "IsVIP": () => (/* binding */ IsVIP),
/* harmony export */   "ApplyMaterialShader": () => (/* binding */ ApplyMaterialShader),
/* harmony export */   "AddKeywordToRef": () => (/* binding */ AddKeywordToRef),
/* harmony export */   "MoveToNearestNavmeshLocation": () => (/* binding */ MoveToNearestNavmeshLocation),
/* harmony export */   "RemoveKeywordFromRef": () => (/* binding */ RemoveKeywordFromRef),
/* harmony export */   "ReplaceKeywordOnRef": () => (/* binding */ ReplaceKeywordOnRef),
/* harmony export */   "PlayDebugShader": () => (/* binding */ PlayDebugShader),
/* harmony export */   "ScaleObject3D": () => (/* binding */ ScaleObject3D),
/* harmony export */   "SetBaseObject": () => (/* binding */ SetBaseObject),
/* harmony export */   "SetCollisionLayer": () => (/* binding */ SetCollisionLayer),
/* harmony export */   "SetDoorDestination": () => (/* binding */ SetDoorDestination),
/* harmony export */   "SetEffectShaderDuration": () => (/* binding */ SetEffectShaderDuration),
/* harmony export */   "SetLinkedRef": () => (/* binding */ SetLinkedRef),
/* harmony export */   "SetMaterialType": () => (/* binding */ SetMaterialType),
/* harmony export */   "SetupBodyPartGeometry": () => (/* binding */ SetupBodyPartGeometry),
/* harmony export */   "SetShaderType": () => (/* binding */ SetShaderType),
/* harmony export */   "StopAllShaders": () => (/* binding */ StopAllShaders),
/* harmony export */   "StopArtObject": () => (/* binding */ StopArtObject),
/* harmony export */   "ToggleChildNode": () => (/* binding */ ToggleChildNode),
/* harmony export */   "UpdateHitEffectArtNode": () => (/* binding */ UpdateHitEffectArtNode),
/* harmony export */   "GetPackageType": () => (/* binding */ GetPackageType),
/* harmony export */   "GetPackageIdles": () => (/* binding */ GetPackageIdles),
/* harmony export */   "AddPackageIdle": () => (/* binding */ AddPackageIdle),
/* harmony export */   "RemovePackageIdle": () => (/* binding */ RemovePackageIdle),
/* harmony export */   "GetPapyrusExtenderVersion": () => (/* binding */ GetPapyrusExtenderVersion),
/* harmony export */   "AddMagicEffectToPotion": () => (/* binding */ AddMagicEffectToPotion),
/* harmony export */   "AddEffectItemToPotion": () => (/* binding */ AddEffectItemToPotion),
/* harmony export */   "RemoveMagicEffectFromPotion": () => (/* binding */ RemoveMagicEffectFromPotion),
/* harmony export */   "RemoveEffectItemFromPotion": () => (/* binding */ RemoveEffectItemFromPotion),
/* harmony export */   "GetProjectileGravity": () => (/* binding */ GetProjectileGravity),
/* harmony export */   "GetProjectileImpactForce": () => (/* binding */ GetProjectileImpactForce),
/* harmony export */   "GetProjectileRange": () => (/* binding */ GetProjectileRange),
/* harmony export */   "GetProjectileSpeed": () => (/* binding */ GetProjectileSpeed),
/* harmony export */   "GetProjectileType": () => (/* binding */ GetProjectileType),
/* harmony export */   "SetProjectileGravity": () => (/* binding */ SetProjectileGravity),
/* harmony export */   "SetProjectileImpactForce": () => (/* binding */ SetProjectileImpactForce),
/* harmony export */   "SetProjectileRange": () => (/* binding */ SetProjectileRange),
/* harmony export */   "SetProjectileSpeed": () => (/* binding */ SetProjectileSpeed),
/* harmony export */   "AddMagicEffectToScroll": () => (/* binding */ AddMagicEffectToScroll),
/* harmony export */   "AddEffectItemToScroll": () => (/* binding */ AddEffectItemToScroll),
/* harmony export */   "RemoveMagicEffectFromScroll": () => (/* binding */ RemoveMagicEffectFromScroll),
/* harmony export */   "RemoveEffectItemFromScroll": () => (/* binding */ RemoveEffectItemFromScroll),
/* harmony export */   "SetSoundDescriptor": () => (/* binding */ SetSoundDescriptor),
/* harmony export */   "GetSpellType": () => (/* binding */ GetSpellType),
/* harmony export */   "AddMagicEffectToSpell": () => (/* binding */ AddMagicEffectToSpell),
/* harmony export */   "AddEffectItemToSpell": () => (/* binding */ AddEffectItemToSpell),
/* harmony export */   "RemoveMagicEffectFromSpell": () => (/* binding */ RemoveMagicEffectFromSpell),
/* harmony export */   "RemoveEffectItemFromSpell": () => (/* binding */ RemoveEffectItemFromSpell),
/* harmony export */   "SetSpellCastingType": () => (/* binding */ SetSpellCastingType),
/* harmony export */   "SetSpellDeliveryType": () => (/* binding */ SetSpellDeliveryType),
/* harmony export */   "IntToString": () => (/* binding */ IntToString),
/* harmony export */   "StringToInt": () => (/* binding */ StringToInt),
/* harmony export */   "GetMenuContainer": () => (/* binding */ GetMenuContainer),
/* harmony export */   "GenerateRandomFloat": () => (/* binding */ GenerateRandomFloat),
/* harmony export */   "GenerateRandomInt": () => (/* binding */ GenerateRandomInt),
/* harmony export */   "GetSystemTime": () => (/* binding */ GetSystemTime),
/* harmony export */   "GetArtObject": () => (/* binding */ GetArtObject),
/* harmony export */   "GetArtObjectTotalCount": () => (/* binding */ GetArtObjectTotalCount),
/* harmony export */   "SetArtObject": () => (/* binding */ SetArtObject),
/* harmony export */   "GetWindSpeedAsFloat": () => (/* binding */ GetWindSpeedAsFloat),
/* harmony export */   "GetWindSpeedAsInt": () => (/* binding */ GetWindSpeedAsInt),
/* harmony export */   "GetWeatherType": () => (/* binding */ GetWeatherType)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.5.5
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.PO3_SKSEFunctions;
//----------------------------------------------------------------------------------------------------------
//ACTIVE EFFECT
//----------------------------------------------------------------------------------------------------------
//returns whether the activeEffect has script attached. If scriptName is empty, it will return if the activeEffect has any non-base scripts attached
var IsScriptAttachedToActiveEffect = function (akActiveEffect, asScriptName) { return sn.IsScriptAttachedToActiveEffect(akActiveEffect, asScriptName); };
//----------------------------------------------------------------------------------------------------------
//ACTORS
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets all magiceffects currently on the actor. Filters out inactive and hideinui spells.
var GetActiveEffects = function (akActor, abShowInactive) {
    if (abShowInactive === void 0) { abShowInactive = false; }
    return sn.GetActiveEffects(akActor, abShowInactive);
};
var GetActorAlpha = function (akActor) {
    return sn.GetActorAlpha(akActor);
};
var GetActorRefraction = function (akActor) {
    return sn.GetActorRefraction(akActor);
};
/** ACTOR STATE
        Alive = 0
        Dying = 1
        Dead = 2
        Unconscious = 3
        Reanimate = 4
        Recycle = 5
        Restrained = 6
        EssentialDown = 7
        Bleedout = 8 */
//Gets actor state
var GetActorState = function (akActor) {
    return sn.GetActorState(akActor);
};
//Gets actor soul size
var GetActorSoulSize = function (akActor) {
    return sn.GetActorSoulSize(akActor);
};
//Gets actor value modifier. 0 - permanent, 1 - temporary, 2 - damage
var GetActorValueModifier = function (akActor, aiModifier, asActorValue) { return sn.GetActorValueModifier(akActor, aiModifier, asActorValue); };
//Gets actor critical stage
var GetCriticalStage = function (akActor) {
    return sn.GetCriticalStage(akActor);
};
//Gets all allies of the actor, if in combat
var GetCombatAllies = function (akActor) {
    return sn.GetCombatAllies(akActor);
};
//Gets all targets of the actor, if in combat
var GetCombatTargets = function (akActor) {
    return sn.GetCombatTargets(akActor);
};
//Gets all current summons commanded by this actor
var GetCommandedActors = function (akActor) { return sn.GetCommandedActors(akActor); };
//Gets the owner of summoned actor
var GetCommandingActor = function (akActor) { return sn.GetCommandingActor(akActor); };
//Gets current hair color on actor. Fails if hair headpart doesn't exist
var GetHairColor = function (akActor) { return sn.GetHairColor(akActor); };
//Gets textureset belonging to headpart, if any.
var GetHeadPartTextureSet = function (akActor, aiType) { return sn.GetHeadPartTextureSet(akActor, aiType); };
//Gets the actor's local gravity.
var GetLocalGravityActor = function (akActor) { return sn.GetLocalGravityActor(akActor); };
//Gets object under actor's feet (eg. table). Does not work if the player is standing on the ground.
var GetObjectUnderFeet = function (akActor) { return sn.GetObjectUnderFeet(akActor); };
//Gets actual current package on actor, including internal packages used by the game (see GetPackageType below)
var GetRunningPackage = function (akActor) { return sn.GetRunningPackage(akActor); };
//Gets current skin color on actor.
var GetSkinColor = function (akActor) { return sn.GetSkinColor(akActor); };
//Similar to GetTimeDead console command. Returns 0.0 if actor is alive
var GetTimeDead = function (akActor) {
    return sn.GetTimeDead(akActor);
};
//Returns time of death in game days passed
var GetTimeOfDeath = function (akActor) {
    return sn.GetTimeOfDeath(akActor);
};
//HasSpell but checks if the spell is present on the actor (i.e active and not dispelled)
var HasActiveSpell = function (akActor, akSpell) { return sn.HasActiveSpell(akActor, akSpell); };
//Returns whether the actor is in deferred kill mode
var HasDeferredKill = function (akActor) {
    return sn.HasDeferredKill(akActor);
};
//Checks if activemagiceffect with given archetype is present on actor. Archetype MUST be typed as given below.
var HasMagicEffectWithArchetype = function (akActor, asArchetype) { return sn.HasMagicEffectWithArchetype(akActor, asArchetype); };
//Returns if the actor has skin/armor with skin present
var HasSkin = function (akActor, akArmorToCheck) { return sn.HasSkin(akActor, akArmorToCheck); };
//Returns whether the actor is in cell water or lava
var IsActorInWater = function (akActor) {
    return sn.IsActorInWater(akActor);
};
//Returns whether the actor is underwater
var IsActorUnderwater = function (akActor) {
    return sn.IsActorUnderwater(akActor);
};
/** LIMB
        None = -1
        Torso = 0
        Head = 1 */
//Returns whether limb is gone (i.e, the head, but adding the whole enum in case someone expands the dismemberment system in the future)
var IsLimbGone = function (akActor, aiLimb) { return sn.IsLimbGone(akActor, aiLimb); };
//Returns whether the actor is a quadruped
var IsQuadruped = function (akActor) {
    return sn.IsQuadruped(akActor);
};
//Returns whether target is soul trapped / capable of being soul trapped successfully (if using mods that bypass vanilla soul trap system).
var IsSoulTrapped = function (akActor) {
    return sn.IsSoulTrapped(akActor);
};
//-------
//SETTERS
//-------
//Adds all equipped items to array
var AddAllEquippedItemsToArray = function (akActor) { return sn.AddAllEquippedItemsToArray(akActor); };
//Adds perks to the actorbase, works on leveled actors/unique NPCs. Function serializes data to skse cosave, so perks are applied correctly on loading/reloading saves.
var AddBasePerk = function (akActor, akPerk) { return sn.AddBasePerk(akActor, akPerk); };
//Adds spells to actorbase, works on player/leveled actors/unique NPCs. Function serializes data to skse cosave, so spells are applied correctly on loading/reloading saves.
var AddBaseSpell = function (akActor, akSpell) { return sn.AddBaseSpell(akActor, akSpell); };
/** BLEND MODES
        Darken = 0
        Multiply = 1
        ColorBurn = 2
        LinearBurn = 3
        DarkerColor = 4
        Lighten = 5
        Screen = 6
        ColorDodge = 7
        LinearDodge = 8
        LighterColor = 9
        Overlay = 10
        SoftLight = 11
        HardLight = 12
        VividLight = 13
        LinearLight = 14
        PinLight = 15
        HardMix = 16
        Difference = 17
        Exclusion = 18
        Subtract = 19
        Divide = 20 */
//Blends existing skin color with specified color, using photoshop blend formulas, with alpha (opacity).
//If true, autoLuminance calculates skin tone relative luminance. The opacity value is then used as a multiplier on top of that, final value is clamped to 0-1
//If false, only opacity will be used. Recommend to use autoluminance because colors will not blend well for all skin tones using flat values.
var BlendColorWithSkinTone = function (akActor, akColor, aiBlendMode, abAutoLuminance, afOpacity) {
    return sn.BlendColorWithSkinTone(akActor, akColor, aiBlendMode, abAutoLuminance, afOpacity);
};
//Decapitates living and dead actors. Living actors will not die when this is called!
var DecapitateActor = function (akActor) {
    return sn.DecapitateActor(akActor);
};
//0 - EnableAI + toggling record hits flags so they don't go flying 300 feet when unfrozen.
//1 - Paralyzes actor, even when dead.
var FreezeActor = function (akActor, type, abFreeze) { return sn.FreezeActor(akActor, type, abFreeze); };
//Quick and dirty hack to instantly kill the actor and set as dead.
var KillNoWait = function (akActor) {
    return sn.KillNoWait(akActor);
};
//DEPRECIATED
//Blends existing skin color with specified color.
//True - intensity is manually calculated using percentage 0-1.0, False - automatically calculated using skin tone luminance
var MixColorWithSkinTone = function (akActor, akColor, abManualMode, afPercentage) {
    return sn.MixColorWithSkinTone(akActor, akColor, abManualMode, afPercentage);
};
//Batch added spell removal, filtered by optional mod name, and keyword array (matching any keyword or all of them)
var RemoveAddedSpells = function (akActor, modName, keywords, abMatchAll) { return sn.RemoveAddedSpells(akActor, modName, keywords, abMatchAll); };
//Removes perks from the actorbase
//Perk effects may not be removed from unique actors, more testing required.
//Function serializes data to skse cosave, so perks are applied correctly on loading/reloading saves.
var RemoveBasePerk = function (akActor, akPerk) { return sn.RemoveBasePerk(akActor, akPerk); };
//Removes spells from the actorbase, works on player/leveled actors/unique NPCs. Function serializes data to skse cosave, so spells are applied correctly on loading/reloading saves.
var RemoveBaseSpell = function (akActor, akSpell) { return sn.RemoveBaseSpell(akActor, akSpell); };
//Replaces specified source textureset on worn armor with target textureset. Lasts for one single gaming session.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced (diffuse is 0, normal is 1...)
var ReplaceArmorTextureSet = function (akActor, akArmor, akSourceTXST, akTargetTXST, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceArmorTextureSet(akActor, akArmor, akSourceTXST, akTargetTXST, aiTextureType);
};
//Replaces face textureset. Lasts one gaming session. Can be applied to non-unique actors.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced. Replacing the entire textureset may cause a visible neckseam.
var ReplaceFaceTextureSet = function (akActor, akMaleTXST, akFemaleTXST, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceFaceTextureSet(akActor, akMaleTXST, akFemaleTXST, aiTextureType);
};
//Replaces skin textureset for given slotmask (ie. body/hand). Lasts one gaming session. Has to be reapplied when re-equipping armor.
//If texture type is -1, the entire textureset is replaced, otherwise the texture map specified at [textureType] index is replaced.
var ReplaceSkinTextureSet = function (akActor, akMaleTXST, akFemaleTXST, aiSlotMask, aiTextureType) {
    if (aiTextureType === void 0) { aiTextureType = -1; }
    return sn.ReplaceSkinTextureSet(akActor, akMaleTXST, akFemaleTXST, aiSlotMask, aiTextureType);
};
//Checks for NiExtraData nodes on actor - PO3_TINT/PO3_ALPHA/PO3_TXST/PO3_TOGGLE/PO3_SHADER
//Stops all effect shaders and
//PO3_TINT - resets tint, rebuilds facegen if actor is player
//PO3_ALPHA - resets skin alpha
//PO3_TXST - resets texturesets with texturepaths containing folderName
//PO3_TOGGLE - unhides all children of nodes that were written to the extraData
//PO3_SHADER - recreates the original shader type (as close as possible, projectedUV params are not restored)
var ResetActor3D = function (akActor, asFolderName) { return sn.ResetActor3D(akActor, asFolderName); };
//0.0 disables refraction, 1.0 is max refraction
var SetActorRefraction = function (akActor, afRefraction) { return sn.SetActorRefraction(akActor, afRefraction); };
//Sets hair color on actor. Changes may persist throughout gaming session, even when reloading previous saves.
var SetHairColor = function (akActor, akColor) { return sn.SetHairColor(akActor, akColor); };
//Sets headpart's mesh alpha. Doesn't work for some hair types and heterochromic eyes
var SetHeadPartAlpha = function (akActor, aiPartType, afAlpha) { return sn.SetHeadPartAlpha(akActor, aiPartType, afAlpha); };
//Sets textureset belonging to headpart, if any.
var SetHeadPartTextureSet = function (akActor, headpartTXST, aiType) { return sn.SetHeadPartTextureSet(akActor, headpartTXST, aiType); };
//Sets velocity of the actor. May not take place immediately.
var SetLinearVelocity = function (akActor, afX, afY, afZ) { return sn.SetLinearVelocity(akActor, afX, afY, afZ); };
//Sets local gravity of the actor. Negative values will cause them to fly. May not take place immediately.
var SetLocalGravityActor = function (akActor, afValue, abDisableGravityOnGround) { return sn.SetLocalGravityActor(akActor, afValue, abDisableGravityOnGround); };
//Sets alpha on face, base skin form and armor meshes with visible skin. Has to be re-applied when armor is un/re-equipped.
var SetSkinAlpha = function (akActor, afAlpha) { return sn.SetSkinAlpha(akActor, afAlpha); };
//Sets skin color (face and body). Has to be re-applied when armor is un/re-equipped.
var SetSkinColor = function (akActor, akColor) { return sn.SetSkinColor(akActor, akColor); };
//Sets the flag used by the game to determine soul trapped NPCs
var SetSoulTrapped = function (akActor, abTrapped) { return sn.SetSoulTrapped(akActor, abTrapped); };
//Toggles any hair wigs (geometry with hair shader) found on slots Hair/LongHair
var ToggleHairWigs = function (akActor, abDisable) { return sn.ToggleHairWigs(akActor, abDisable); };
/** ARMOR TYPE
        Light = 0
        Heavy = 1
        Clothing = 2 */
//Unequips all armor of type, optionally skipping biped slots.
var UnequipAllOfType = function (akActor, afArmorType, aiSlotsToSkip) { return sn.UnequipAllOfType(akActor, afArmorType, aiSlotsToSkip); };
//----------------------------------------------------------------------------------------------------------
//ACTORBASE
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets npc death item
var GetDeathItem = function (akBase) { return sn.GetDeathItem(akBase); };
//Get actorbase perk at nth index
var GetNthPerk = function (akBase, aiIndex) { return sn.GetNthPerk(akBase, aiIndex); };
//Get total actorbase perk count
var GetPerkCount = function (akBase) {
    return sn.GetPerkCount(akBase);
};
//-------
//SETTERS
//-------
//Sets npc death item. Can be None.
var SetDeathItem = function (akBase, akLeveledItem) { return sn.SetDeathItem(akBase, akLeveledItem); };
//----------------------------------------------------------------------------------------------------------
//ALIAS
//----------------------------------------------------------------------------------------------------------
//returns whether the form has script attached. If scriptName is empty, it will return if the alias has any non-base scripts attached
var IsScriptAttachedToAlias = function (akAlias, asScriptName) { return sn.IsScriptAttachedToAlias(akAlias, asScriptName); };
//----------------------------------------------------------------------------------------------------------
//ARMOR/ADDONS
//----------------------------------------------------------------------------------------------------------
//Gets armor addon's footstep set
var GetFootstepSet = function (akArma) { return sn.GetFootstepSet(akArma); };
//Sets armor addon's footstep set
var SetFootstepSet = function (akArma, akFootstepSet) { return sn.SetFootstepSet(akArma, akFootstepSet); };
//----------------------------------------------------------------------------------------------------------
//ARRAYS
//----------------------------------------------------------------------------------------------------------
//Adds actor to array. Modifies array directly, it must be initialized!
var AddActorToArray = function (akActor, actorArray) { return sn.AddActorToArray(akActor, actorArray); };
//Adds string to array. Modifies array directly, it must be initialized!
var AddStringToArray = function (asString, asStrings) { return sn.AddStringToArray(asString, asStrings); };
//Counts how many instances of a string are in an array.
var ArrayStringCount = function (asString, asStrings) { return sn.ArrayStringCount(asString, asStrings); };
//Alphabetically sorts and returns truncated sring array.
var SortArrayString = function (asStrings) {
    return sn.SortArrayString(asStrings);
};
//Gets name array of all the actors in the area, sorted alphabetically. Generic actors are merged (ie. 3 Whiterun Guard(s)). Filter keyword optional
var GetSortedActorNames = function (akKeyword, asPlural, abInvertKeyword) {
    if (asPlural === void 0) { asPlural = "(s)"; }
    return sn.GetSortedActorNames(akKeyword, asPlural, abInvertKeyword);
};
//Gets name array of NPCs, sorted alphabetically. Generic actors are merged (ie. 3 Whiterun Guard(s)).
var GetSortedNPCNames = function (aiActorBases, asPlural) {
    if (asPlural === void 0) { asPlural = "(s)"; }
    return sn.GetSortedNPCNames(aiActorBases, asPlural);
};
//----------------------------------------------------------------------------------------------------------
//BOOK
//----------------------------------------------------------------------------------------------------------
//Clears read flag (and writes it to the save).
var ClearReadFlag = function (akBook) {
    return sn.ClearReadFlag(akBook);
};
//Sets read flag (and writes it to the save).
var SetReadFlag = function (akBook) {
    return sn.SetReadFlag(akBook);
};
//----------------------------------------------------------------------------------------------------------
//CELL
//----------------------------------------------------------------------------------------------------------
//Gets cell north rotation/worldspace north rotation for exterior cells. Rotation is in degrees.
var GetCellNorthRotation = function (akCell) {
    return sn.GetCellNorthRotation(akCell);
};
//Gets cell lighting template
var GetLightingTemplate = function (akCell) { return sn.GetLightingTemplate(akCell); };
//Sets cell lighting template
var SetLightingTemplate = function (akCell, akLightingTemplate) { return sn.SetLightingTemplate(akCell, akLightingTemplate); };
//Sets cell north rotation.
var SetCellNorthRotation = function (akCell, afAngle) { return sn.SetCellNorthRotation(akCell, afAngle); };
//----------------------------------------------------------------------------------------------------------
//DEBUG
//----------------------------------------------------------------------------------------------------------
//Adds all functional spells (ie. spells that can be learned from spell books, and not all 2000+ spells like psb)
var GivePlayerSpellBook = function () { return sn.GivePlayerSpellBook(); };
//Dumps current animation variables to po3_papyrusextender64.log
var DumpAnimationVariables = function (akActor, asAnimationVarPrefix) { return sn.DumpAnimationVariables(akActor, asAnimationVarPrefix); };
//----------------------------------------------------------------------------------------------------------
//DETECTION
//----------------------------------------------------------------------------------------------------------
//Returns whether other NPCs can detect this actor.
//0 -  can't be detected, 1 - normal, 2 -  will always be detected
var CanActorBeDetected = function (akActor) {
    return sn.CanActorBeDetected(akActor);
};
//Returns whether this actor can detect other NPCs.
//0 - can never detect, 1- normal, 2 - will always detect others
var CanActorDetect = function (akActor) {
    return sn.CanActorDetect(akActor);
};
//Force this actor to be detected by other NPCs (actor is always visible).
var ForceActorDetection = function (akActor) {
    return sn.ForceActorDetection(akActor);
};
//Force this actor to always detect their targets
var ForceActorDetecting = function (akActor) {
    return sn.ForceActorDetecting(akActor);
};
//Returns whether this actor is currently detected by other NPCs
var IsDetectedByAnyone = function (akActor) { return sn.IsDetectedByAnyone(akActor); };
//Prevent this actor from being detected by other NPCs (actor is hidden).
var PreventActorDetection = function (akActor) { return sn.PreventActorDetection(akActor); };
//Prevent this actor from detecting other NPCs (actor is blind)
var PreventActorDetecting = function (akActor) { return sn.PreventActorDetecting(akActor); };
//Resets detection state
var ResetActorDetection = function (akActor) {
    return sn.ResetActorDetection(akActor);
};
//Resets detecting state
var ResetActorDetecting = function (akActor) {
    return sn.ResetActorDetecting(akActor);
};
//----------------------------------------------------------------------------------------------------------
//EFFECTSHADER
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** EFFECT SHADER FLAGS
        kNoMembraneShader = 0x00000001
        kMembraneGreyscaleColor = 0x00000002
        kMembraneGreyscaleAlpha = 0x00000004
        kNoParticleShader = 0x00000008
        kEdgeEffectInverse = 0x00000010
        kAffectSkinOnly = 0x00000020
        kIgnoreAlpha = 0x00000040
        kProjectUV = 0x00000080
        kIgnoreBaseGeometryAlpha = 0x00000100
        kLighting = 0x00000200
        kNoWeapons = 0x00000400
        kParticleAnimated = 0x00008000
        kParticleGreyscaleColor = 0x00010000
        kParticleGreyscaleAlpha = 0x00020000
        kUseBloodGeometry = 0x01000000 */
//Gets addon models
var GetAddonModels = function (akEffectShader) { return sn.GetAddonModels(akEffectShader); };
//Returns the total number of effect shaders present/present and active (on objects) within the loaded area.
var GetEffectShaderTotalCount = function (akEffectShader, abActive) { return sn.GetEffectShaderTotalCount(akEffectShader, abActive); };
//Is effect shader flag set?
var IsEffectShaderFlagSet = function (akEffectShader, aiFlag) { return sn.IsEffectShaderFlagSet(akEffectShader, aiFlag); };
//Get fill texture
var GetMembraneFillTexture = function (akEffectShader) { return sn.GetMembraneFillTexture(akEffectShader); };
//Get holes texture
var GetMembraneHolesTexture = function (akEffectShader) { return sn.GetMembraneHolesTexture(akEffectShader); };
//Get membrane palette texture
var GetMembranePaletteTexture = function (akEffectShader) { return sn.GetMembranePaletteTexture(akEffectShader); };
//Gets full particle count.
var GetParticleFullCount = function (akEffectShader) { return sn.GetParticleFullCount(akEffectShader); };
//Get particle palette texture
var GetParticlePaletteTexture = function (akEffectShader) { return sn.GetParticlePaletteTexture(akEffectShader); };
//Get particle shader texture
var GetParticleShaderTexture = function (akEffectShader) { return sn.GetParticleShaderTexture(akEffectShader); };
//Gets persistent count.
var GetParticlePersistentCount = function (akEffectShader) { return sn.GetParticlePersistentCount(akEffectShader); };
//-------
//SETTERS
//-------
//Clears effect shader flag.
var ClearEffectShaderFlag = function (akEffectShader, aiFlag) { return sn.ClearEffectShaderFlag(akEffectShader, aiFlag); };
//Gets addon models
var SetAddonModels = function (akEffectShader, akDebris) { return sn.SetAddonModels(akEffectShader, akDebris); };
//Set effect shader flag.
var SetEffectShaderFlag = function (akEffectShader, aiFlag) { return sn.SetEffectShaderFlag(akEffectShader, aiFlag); };
//Set membrane color key
var SetMembraneColorKeyData = function (akEffectShader, aiColorKey, aiRGB, afAlpha, afTime) {
    return sn.SetMembraneColorKeyData(akEffectShader, aiColorKey, aiRGB, afAlpha, afTime);
};
//Set membrane fill texture
var SetMembraneFillTexture = function (akEffectShader, asTextureName) { return sn.SetMembraneFillTexture(akEffectShader, asTextureName); };
//Set membrane holes texture
var SetMembraneHolesTexture = function (akEffectShader, asTextureName) { return sn.SetMembraneHolesTexture(akEffectShader, asTextureName); };
//Set membrane palette texture
var SetMembranePaletteTexture = function (akEffectShader, asTextureName) { return sn.SetMembranePaletteTexture(akEffectShader, asTextureName); };
//Set particle color key
var SetParticleColorKeyData = function (akEffectShader, aiColorKey, aiRGB, afAlpha, afTime) {
    return sn.SetParticleColorKeyData(akEffectShader, aiColorKey, aiRGB, afAlpha, afTime);
};
//Sets full particle count.
var SetParticleFullCount = function (akEffectShader, afParticleCount) { return sn.SetParticleFullCount(akEffectShader, afParticleCount); };
//Set particle shader texture
var SetParticlePaletteTexture = function (akEffectShader, asTextureName) { return sn.SetParticlePaletteTexture(akEffectShader, asTextureName); };
//Sets persistent particle count.
var SetParticlePersistentCount = function (akEffectShader, afParticleCount) { return sn.SetParticlePersistentCount(akEffectShader, afParticleCount); };
//Set particle shader texture
var SetParticleShaderTexture = function (akEffectShader, asTextureName) { return sn.SetParticleShaderTexture(akEffectShader, asTextureName); };
//-----------------------------------------------------------------------------------------------------------
//ENCHANTMENT - see SPELL
//-----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
/** ENCHANTMENT TYPES
        Enchantment = 6,
        StaffEnchantment = 12 */
//Returns enchantment type. -1 if  is None
var GetEnchantmentType = function (akEnchantment) { return sn.GetEnchantmentType(akEnchantment); };
//--------
//SETTERS
//--------
var AddMagicEffectToEnchantment = function (akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToEnchantment(akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Enchantment to target Enchantment, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToEnchantment = function (akEnchantment, akEnchantmentToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToEnchantment(akEnchantment, akEnchantmentToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Enchantment that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromEnchantment = function (akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromEnchantment(akEnchantment, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Enchantment that matches Enchantment at index.
var RemoveEffectItemFromEnchantment = function (akEnchantment, akEnchantmentToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromEnchantment(akEnchantment, akEnchantmentToMatchFrom, aiIndex);
};
//----------------------------------------------------------------------------------------------------------
//FEC
//----------------------------------------------------------------------------------------------------------
//FEC function
//returns effect type, effect skill level, and projectile type, of the highest magnitude effect present on the actor
//permanent - SUN, ACID, FIRE, FROST, SHOCK, DRAIN
//temporary - POISON, FEAR
var GetDeathEffectType = function (akActor, type) { return sn.GetDeathEffectType(akActor, type); };
//0 - charred/skeleton
//1 - drained
//2 - poisoned/frightened
//3-  aged
//4 - charred creature
//5 - frozen
var RemoveEffectsNotOfType = function (akActor, aiEffectType) { return sn.RemoveEffectsNotOfType(akActor, aiEffectType); };
// 0 - permanent
// 1 - temporary
// 2 - frozenActor
// 3 - frozenCol
var SendFECResetEvent = function (akActor, aiType, abReset3D) { return sn.SendFECResetEvent(akActor, aiType, abReset3D); };
//----------------------------------------------------------------------------------------------------------
//FORM
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Record flags
//https://en.uesp.net/wiki/Skyrim_Mod:Mod_File_Format#Records
//evaluates condition lists for spells/potions/enchantments/mgefs and returns if they can be fullfilled
var EvaluateConditionList = function (akForm, akActionRef, akTargetRef) { return sn.EvaluateConditionList(akForm, akActionRef, akTargetRef); };
//Clear record flag
var ClearRecordFlag = function (akForm, aiFlag) { return sn.ClearRecordFlag(akForm, aiFlag); };
//Builds a list of conditions present on the form. Index is for spells/other forms that have lists with conditions
//Some conditions may be skipped (conditions that require non player references, overly complex conditions involving packages/aliases)
var GetConditionList = function (akForm, aiIndex) {
    if (aiIndex === void 0) { aiIndex = 0; }
    return sn.GetConditionList(akForm, aiIndex);
};
//Get form editorID
var GetFormEditorID = function (akForm) {
    return sn.GetFormEditorID(akForm);
};
//Returns whether the form is part of the mod
var IsFormInMod = function (akForm, asModName) { return sn.IsFormInMod(akForm, asModName); };
//Returns whether the form is temporary (ie. has a formID beginning with FF)
var IsGeneratedForm = function (akForm) {
    return sn.IsGeneratedForm(akForm);
};
//Is record flag set?
var IsRecordFlagSet = function (akForm, aiFlag) { return sn.IsRecordFlagSet(akForm, aiFlag); };
//returns whether the form has script attached. If scriptName is empty, it will return if the form has any non-base scripts attached
var IsScriptAttachedToForm = function (akForm, asScriptName) { return sn.IsScriptAttachedToForm(akForm, asScriptName); };
//Set record flag
var SetRecordFlag = function (akForm, aiFlag) { return sn.SetRecordFlag(akForm, aiFlag); };
//-------
//SETTERS
//-------
//Adds keyword to form. Fails if the form doesn't accept keywords.
var AddKeywordToForm = function (akForm, akKeyword) { return sn.AddKeywordToForm(akForm, akKeyword); };
//Favorites item (must be in inventory) or spell/shout
var MarkItemAsFavorite = function (akForm) {
    return sn.MarkItemAsFavorite(akForm);
};
//Replaces given keyword with new one on form. Only lasts for a single gaming session. [ported from DienesTools].
var ReplaceKeywordOnForm = function (akForm, akKeywordAdd, akKeywordRemove) { return sn.ReplaceKeywordOnForm(akForm, akKeywordAdd, akKeywordRemove); };
//Removes keyword, if present, from form.
var RemoveKeywordOnForm = function (akForm, akKeyword) { return sn.RemoveKeywordOnForm(akForm, akKeyword); };
//Unfavorites item (must be in inventory) or spell/shout
var UnmarkItemAsFavorite = function (akForm) {
    return sn.UnmarkItemAsFavorite(akForm);
};
//----------------------------------------------------------------------------------------------------------
//FURNITURE
//----------------------------------------------------------------------------------------------------------
/** FURNITURE TYPES
        Perch = 0
        Lean = 1
        Sit = 2
        Sleep = 3 */
//Gets furniture type
var GetFurnitureType = function (akFurniture) { return sn.GetFurnitureType(akFurniture); };
//----------------------------------------------------------------------------------------------------------
//GAME
//----------------------------------------------------------------------------------------------------------
//Gets all enchantments from base game + mods, filtered using optional keyword array
var GetAllEnchantments = function (akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllEnchantments(akKeywords);
};
//Gets all forms from base game + mods, filtered using formtype and optional keyword array
var GetAllForms = function (aiFormType, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllForms(aiFormType, akKeywords);
};
//Gets all races from base game + mods, filtered using optional keyword array
var GetAllRaces = function (akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllRaces(akKeywords);
};
//Gets all spells from base game + mods, filtered using optional keyword array. IsPlayable filters out spells that are not found in spellbooks.
var GetAllSpells = function (akKeywords, abIsPlayable) {
    if (akKeywords === void 0) { akKeywords = null; }
    if (abIsPlayable === void 0) { abIsPlayable = false; }
    return sn.GetAllSpells(akKeywords, abIsPlayable);
};
/** AI PROCESS LEVEL
        HighProcess = 0
        MiddleHighProcess = 1
        MiddleLowProcess = 2
        LowProcess = 3 */
//Gets all actors by AI processing type. https://geck.bethsoft.com/index.php?title=GetActorsByProcessingLevel for more info
var GetActorsByProcessingLevel = function (aiLevel) {
    return sn.GetActorsByProcessingLevel(aiLevel);
};
//Gets all forms added by a specified mod/game esm, filtered using formtype and optional keyword array.
var GetAllFormsInMod = function (asModName, aiFormType, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllFormsInMod(asModName, aiFormType, akKeywords);
};
//Gets all enchantments added by a specified mod/game esm, filtered using optional keyword array.
var GetAllEnchantmentsInMod = function (asModName, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllEnchantmentsInMod(asModName, akKeywords);
};
//Gets all races added by a specified mod/game esm, filtered using optional keyword array.
var GetAllRacesInMod = function (asModName, akKeywords) {
    if (akKeywords === void 0) { akKeywords = null; }
    return sn.GetAllRacesInMod(asModName, akKeywords);
};
//Gets all spells added by a specified mod/game esm, filtered using optional keyword array.
var GetAllSpellsInMod = function (asModName, akKeywords, abIsPlayable) {
    if (akKeywords === void 0) { akKeywords = null; }
    if (abIsPlayable === void 0) { abIsPlayable = false; }
    return sn.GetAllSpellsInMod(asModName, akKeywords, abIsPlayable);
};
//Gets current cell if in interior/attached cells in exterior/sky cells if in worldspace with no attached cells??
var GetAttachedCells = function () { return sn.GetAttachedCells(); };
//Gets form using its editorID
var GetFormFromEditorID = function (asEditorID) { return sn.GetFormFromEditorID(asEditorID); };
//Gets the value of the boolean gamesetting. Returns -1 if gmst is None or not a bool.
var GetGameSettingBool = function (asGameSetting) {
    return sn.GetGameSettingBool(asGameSetting);
};
//Returns whether God Mode is enabled
var GetGodMode = function () { return sn.GetGodMode(); };
//Gets local gravity of the exterior worldspace/interior cell. Default gravity is [0.0, 0.0, -9.81]
var GetLocalGravity = function () { return sn.GetLocalGravity(); };
//Gets how many actors are in high process
var GetNumActorsInHigh = function () { return sn.GetNumActorsInHigh(); };
//Returns all actors that are currently following the player
var GetPlayerFollowers = function () { return sn.GetPlayerFollowers(); };
//Returns whether plugin exists
var IsPluginFound = function (akName) {
    return sn.IsPluginFound(akName);
};
//Returns whether CC Survival Mode is enabled
var IsSurvivalModeActive = function () { return sn.IsSurvivalModeActive(); };
//Sets local gravity (ms-2) of the exterior worldspace/interior cell.
var SetLocalGravity = function (afXAxis, afYAxis, afZAxis) { return sn.SetLocalGravity(afXAxis, afYAxis, afZAxis); };
//----------------------------------------------------------------------------------------------------------
//HAZARD
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** HAZARD FLAGS
        None = 0
        PCOnly = 0x00000001
        InheritDuration = 0x00000002
        AlignToNormal = 0x00000004
        InheritRadius = 0x00000008
        DropToGround = 0x00000010 */
//Gets hazard art path, eg. "Effects/MyHazardArt.nif"
var GetHazardArt = function (akHazard) {
    return sn.GetHazardArt(akHazard);
};
//Gets associated IMOD
var GetHazardIMOD = function (akHazard) { return sn.GetHazardIMOD(akHazard); };
//Gets IMOD radius
var GetHazardIMODRadius = function (akHazard) { return sn.GetHazardIMODRadius(akHazard); };
//Gets impact data set
var GetHazardIPDS = function (akHazard) { return sn.GetHazardIPDS(akHazard); };
//Gets hazard lifetime
var GetHazardLifetime = function (akHazard) { return sn.GetHazardLifetime(akHazard); };
//Gets hazard light
var GetHazardLight = function (akHazard) { return sn.GetHazardLight(akHazard); };
//Gets hazard limit
var GetHazardLimit = function (akHazard) {
    return sn.GetHazardLimit(akHazard);
};
//Gets hazard radius
var GetHazardRadius = function (akHazard) {
    return sn.GetHazardRadius(akHazard);
};
//Gets hazard sound
var GetHazardSound = function (akHazard) { return sn.GetHazardSound(akHazard); };
//Gets hazard spell
var GetHazardSpell = function (akHazard) { return sn.GetHazardSpell(akHazard); };
//Gets target interval (duration between casts)
var GetHazardTargetInterval = function (akHazard) { return sn.GetHazardTargetInterval(akHazard); };
//Is hazard flag set?
var IsHazardFlagSet = function (akHazard, aiFlag) { return sn.IsHazardFlagSet(akHazard, aiFlag); };
//-------
//SETTERS
//-------
//Clears hazard flag
var ClearHazardFlag = function (akHazard, aiFlag) { return sn.ClearHazardFlag(akHazard, aiFlag); };
//Sets hazard art path. Does not work on active hazards
var SetHazardArt = function (akHazard, asPath) { return sn.SetHazardArt(akHazard, asPath); };
//Set flag
var SetHazardFlag = function (akHazard, aiFlag) { return sn.SetHazardFlag(akHazard, aiFlag); };
//Sets IMOD
var SetHazardIMOD = function (akHazard, akIMOD) { return sn.SetHazardIMOD(akHazard, akIMOD); };
//Sets IMOD radius
var SetHazardIMODRadius = function (akHazard, afRadius) { return sn.SetHazardIMODRadius(akHazard, afRadius); };
//Sets impact data set
var SetHazardIPDS = function (akHazard, akIPDS) { return sn.SetHazardIPDS(akHazard, akIPDS); };
//Sets hazard lifetime
var SetHazardLifetime = function (akHazard, afLifetime) { return sn.SetHazardLifetime(akHazard, afLifetime); };
//Sets hazard light
var SetHazardLight = function (akHazard, akLight) { return sn.SetHazardLight(akHazard, akLight); };
//Sets hazard limit
var SetHazardLimit = function (akHazard, aiLimit) { return sn.SetHazardLimit(akHazard, aiLimit); };
//Sets hazard radius
var SetHazardRadius = function (akHazard, afRadius) { return sn.SetHazardRadius(akHazard, afRadius); };
//Sets hazard sound
var SetHazardSound = function (akHazard, akSound) { return sn.SetHazardSound(akHazard, akSound); };
//Sets hazard spell
var SetHazardSpell = function (akHazard, akspell) { return sn.SetHazardSpell(akHazard, akspell); };
//Sets hazard interval
var SetHazardTargetInterval = function (akHazard, afInterval) { return sn.SetHazardTargetInterval(akHazard, afInterval); };
//----------------------------------------------------------------------------------------------------------
//LIGHT
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Gets light color.
var GetLightColor = function (akLight) { return sn.GetLightColor(akLight); };
//Gets light fade range.
var GetLightFade = function (akLight) {
    return sn.GetLightFade(akLight);
};
//Gets base light FOV.
var GetLightFOV = function (akLight) {
    return sn.GetLightFOV(akLight);
};
//Gets light radius (radius is actually int but changing that would break mods so fixed that in source).
var GetLightRadius = function (akLight) {
    return sn.GetLightRadius(akLight);
};
//Gets light color as RGB array [0-255].
var GetLightRGB = function (akLight) {
    return sn.GetLightRGB(akLight);
};
//Gets depth bias, returns 1 if not set.
var GetLightShadowDepthBias = function (akLightObject) { return sn.GetLightShadowDepthBias(akLightObject); };
/** LIGHT TYPES
        HemiShadow = 1
        Omni = 2
        OmniShadow = 3
        Spot = 4
        SpotShadow = 5 */
//Get light type
var GetLightType = function (akLight) {
    return sn.GetLightType(akLight);
};
//-------
//SETTERS
//-------
//Sets light color.
var SetLightColor = function (akLight, akColorform) { return sn.SetLightColor(akLight, akColorform); };
//Sets light fade range.
var SetLightFade = function (akLight, afRange) { return sn.SetLightFade(akLight, afRange); };
//sets base light FOV.
var SetLightFOV = function (akLight, afFOV) { return sn.SetLightFOV(akLight, afFOV); };
//Sets light radius (minimum light radius is 16) .
var SetLightRadius = function (akLight, afRadius) { return sn.SetLightRadius(akLight, afRadius); };
//Sets light color using RGB array [0-255]. Array must contain 3 elements (r,g,b).
var SetLightRGB = function (akLight, aiRGB) { return sn.SetLightRGB(akLight, aiRGB); };
//sets depth bias on light reference. Creates new depth bias extradata on lights that don't have it set.
var SetLightShadowDepthBias = function (akLightObject, afDepthBias) { return sn.SetLightShadowDepthBias(akLightObject, afDepthBias); };
//Sets light type. Does not persist between sessions.
var SetLightType = function (akLight, aiLightType) { return sn.SetLightType(akLight, aiLightType); };
//----------------------------------------------------------------------------------------------------------
//LOCATION
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
//Get parent location.
var GetParentLocation = function (akLoc) { return sn.GetParentLocation(akLoc); };
//-------
//SETTERS
//-------
//Set parent location.
var SetParentLocation = function (akLoc, akNewLoc) { return sn.SetParentLocation(akLoc, akNewLoc); };
//----------------------------------------------------------------------------------------------------------
//MAGIC EFFECTS
//----------------------------------------------------------------------------------------------------------
//---------
//GETTERS
//---------
//Gets associated form (Light for Light spells, Actor for Summon Creature...), if any
var GetAssociatedForm = function (akMagicEffect) { return sn.GetAssociatedForm(akMagicEffect); };
/** EFFECT ARCHETYPES
        ValueMod = 0
        Script = 1
        Dispel = 2
        CureDisease = 3
        Absorb = 4
        DualValueMod = 5
        Calm = 6
        Demoralize = 7
        Frenzy = 8
        Disarm = 9
        CommandSummoned = 10
        Invisibility = 11
        Light = 12
        Darkness = 13
        NightEye = 14
        Lock = 15
        Open = 16
        BoundWeapon = 17
        SummonCreature = 18
        DetectLife = 19
        Telekinesis = 20
        Paralysis = 21
        Reanimate = 22
        SoulTrap = 23
        TurnUndead = 24
        Guide = 25
        WerewolfFeed = 26
        CureParalysis = 27
        CureAddiction = 28
        CurePoison = 29
        Concussion = 30
        ValueAndParts = 31
        AccumulateMagnitude = 32
        Stagger = 33
        PeakValueMod = 34
        Cloak = 35
        Werewolf = 36
        SlowTime = 37
        Rally = 38
        EnhanceWeapon = 39
        SpawnHazard = 40
        Etherealize = 41
        Banish = 42
        SpawnScriptedRef = 43
        Disguise = 44
        GrabActor = 45
        VampireLord = 46 */
//Gets effect archetype of magiceffect and returns as int (0-46).
var GetEffectArchetypeAsInt = function (akMagicEffect) { return sn.GetEffectArchetypeAsInt(akMagicEffect); };
//Gets effect archetype of magiceffect and returns as String.
var GetEffectArchetypeAsString = function (akMagicEffect) { return sn.GetEffectArchetypeAsString(akMagicEffect); };
//Gets primary actor value as string, if any (FrostResist, SpeedMult).
var GetPrimaryActorValue = function (akMagicEffect) { return sn.GetPrimaryActorValue(akMagicEffect); };
//Gets secondary actor value as string, if any.
var GetSecondaryActorValue = function (akMagicEffect) { return sn.GetSecondaryActorValue(akMagicEffect); };
/** MGEF SOUND TYPES
        Draw/Sheathe = 0
        Charge = 1
        Ready = 2
        Release = 3
        Concentration Cast Loop = 4
        On Hit = 5 */
//Gets Sound attached to index of Sound type specified in magic effect.
var GetMagicEffectSound = function (akMagicEffect, aiType) {
    return sn.GetMagicEffectSound(akMagicEffect, aiType);
};
//-------
//SETTERS
//-------
//Sets associated form (Light for Light spells, Actor for Summon Creature...). Can be None
var SetAssociatedForm = function (akMagicEffect, akForm) { return sn.SetAssociatedForm(akMagicEffect, akForm); };
//Sets sound descriptor attached to index of Sound type specified in magic effect.
var SetMagicEffectSound = function (akMagicEffect, akSoundDescriptor, aiType) { return sn.SetMagicEffectSound(akMagicEffect, akSoundDescriptor, aiType); };
//----------------------------------------------------------------------------------------------------------
//OBJECTREFERENCES
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Adds all inventory items to array, filtering out equipped, favourited and quest items.
var AddAllItemsToArray = function (akRef, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddAllItemsToArray(akRef, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds all inventory items to formlist, filtering out equipped, favourited and quest items.
var AddAllItemsToList = function (akRef, akList, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddAllItemsToList(akRef, akList, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds inventory items matching formtype to array, filtering out equipped, favourited and quest items.
var AddItemsOfTypeToArray = function (akRef, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddItemsOfTypeToArray(akRef, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Adds inventory items matching formtype to formlist, filtering out equipped, favourited and quest items.
var AddItemsOfTypeToList = function (akRef, akList, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem) {
    if (abNoEquipped === void 0) { abNoEquipped = true; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    if (abNoQuestItem === void 0) { abNoQuestItem = false; }
    return sn.AddItemsOfTypeToList(akRef, akList, aiFormType, abNoEquipped, abNoFavorited, abNoQuestItem);
};
//Finds all references of form type in loaded cells, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesOfFormType = function (akRef, formType, afRadius) {
    return sn.FindAllReferencesOfFormType(akRef, formType, afRadius);
};
//Find all references with keyword in loaded cells, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesWithKeyword = function (akRef, keywordOrList, afRadius, abMatchAll) {
    return sn.FindAllReferencesWithKeyword(akRef, keywordOrList, afRadius, abMatchAll);
};
//Find all references matching base form/in formlist, within radius from ref. If afRadius is 0, it will get all references from all attached cells
var FindAllReferencesOfType = function (akRef, akFormOrList, afRadius) {
    return sn.FindAllReferencesOfType(akRef, akFormOrList, afRadius);
};
//Gets the first item in inventory that exists in formlist.
var FindFirstItemInList = function (akRef, akList) { return sn.FindFirstItemInList(akRef, akList); };
//Gets activate children - see IsActivateChild
var GetActivateChildren = function (akRef) { return sn.GetActivateChildren(akRef); };
//Gets current gamebryo animation
var GetActiveGamebryoAnimation = function (akRef) { return sn.GetActiveGamebryoAnimation(akRef); };
//Gets actor responsible for object.
var GetActorCause = function (akRef) { return sn.GetActorCause(akRef); };
//Get all art objects attached to this object.
var GetAllArtObjects = function (akRef) { return sn.GetAllArtObjects(akRef); };
//Get all effect shaders attached to this object.
var GetAllEffectShaders = function (akRef) { return sn.GetAllEffectShaders(akRef); };
//Gets closest actor to ref (without returning the reference itself).
var GetClosestActorFromRef = function (akRef, abIgnorePlayer) { return sn.GetClosestActorFromRef(akRef, abIgnorePlayer); };
//Gets duration of the effectshader on the ref.
var GetEffectShaderDuration = function (akRef, akShader) { return sn.GetEffectShaderDuration(akRef, akShader); };
//Gets the door which is linked to this load door.
var GetDoorDestination = function (akRef) { return sn.GetDoorDestination(akRef); };
//Gets all refs linked to akRef. Keyword optional.
var GetLinkedChildren = function (akRef, akKeyword) { return sn.GetLinkedChildren(akRef, akKeyword); };
//Gets the source of the magic effect (spell/enchantment/scroll etc) and the caster. Magic effect must be present on the reference.
var GetMagicEffectSource = function (akRef, akEffect) { return sn.GetMagicEffectSource(akRef, akEffect); };
/** MATERIAL TYPES - String
        StoneBroken
        BlockBlade1Hand
        Meat
        CarriageWheel
        MetalLight
        WoodLight
        Snow
        Gravel
        ChainMetal
        Bottle
        Wood
        Ash
        Skin
        BlockBlunt
        DLC1DeerSkin
        Insect
        Barrel
        CeramicMedium
        Basket
        Ice
        GlassStairs
        StoneStairs
        Water
        DraugrSkeleton
        Blade1Hand
        Book
        Carpet
        MetalSolid
        Axe1Hand
        BlockBlade2Hand
        OrganicLarge
        Amulet
        WoodStairs
        Mud
        BoulderSmall
        SnowStairs
        StoneHeavy
        DragonSkeleton
        Trap
        BowsStaves
        Alduin
        BlockBowsStaves
        WoodAsStairs
        SteelGreatSword
        Grass
        BoulderLarge
        StoneAsStairs
        Blade2Hand
        BottleSmall
        BoneActor
        Sand
        MetalHeavy
        DLC1SabreCatPelt
        IceForm
        Dragon
        Blade1HandSmall
        SkinSmall
        PotsPans
        SkinSkeleton
        Blunt1Hand
        StoneStairsBroken
        SkinLarge
        Organic
        Bone
        WoodHeavy
        Chain
        Dirt
        Ghost
        SkinMetalLarge
        BlockAxe
        ArmorLight
        ShieldLight
        Coin
        BlockBlunt2Hand
        ShieldHeavy
        ArmorHeavy
        Arrow
        Glass
        Stone
        WaterPuddle
        Cloth
        SkinMetalSmall
        Ward
        Web
        TrailerSteelSword
        Blunt2Hand
        DLC1SwingingBridge
        BoulderMedium */
//Gets the specified collision shape's havok material types as string array. Returns the first material type if nodeName is empty
var GetMaterialType = function (akRef, asNodeName) {
    if (asNodeName === void 0) { asNodeName = ""; }
    return sn.GetMaterialType(akRef, asNodeName);
};
//Gets the motion type of the object (see vanilla SetMotionType for types). Returns -1 if 3d is not loaded
var GetMotionType = function (akRef) { return sn.GetMotionType(akRef); };
//Gets random actor near ref (without returning the reference itself).
var GetRandomActorFromRef = function (akRef, afRadius, abIgnorePlayer) {
    return sn.GetRandomActorFromRef(akRef, afRadius, abIgnorePlayer);
};
//Gets quest items in this ref's inventory, if any
var GetQuestItems = function (akRef, abNoEquipped, abNoFavorited) {
    if (abNoEquipped === void 0) { abNoEquipped = false; }
    if (abNoFavorited === void 0) { abNoFavorited = false; }
    return sn.GetQuestItems(akRef, abNoEquipped, abNoFavorited);
};
//Get all aliases containing this ref
var GetRefAliases = function (akRef) { return sn.GetRefAliases(akRef); };
//Returns the size of the stored soul in a soulgem objectreference
var GetStoredSoulSize = function (akRef) { return sn.GetStoredSoulSize(akRef); };
//Returns the number of instances of the specified art object (attached using visual effects) on the reference.
var HasArtObject = function (akRef, akArtObject, abActive) {
    if (abActive === void 0) { abActive = false; }
    return sn.HasArtObject(akRef, akArtObject, abActive);
};
//Returns the number of instances of the specified effect shader on the reference.
var HasEffectShader = function (akRef, akShader, abActive) {
    if (abActive === void 0) { abActive = false; }
    return sn.HasEffectShader(akRef, akShader, abActive);
};
//Returns whether the reference has niextradata (attached to root 3D node). Partial matches accepted.
var HasNiExtraData = function (akRef, asName) { return sn.HasNiExtraData(akRef, asName); };
//Is door a load door?
var IsLoadDoor = function (akRef) { return sn.IsLoadDoor(akRef); };
//Is a quest object?
var IsQuestItem = function (akRef) { return sn.IsQuestItem(akRef); };
//Is a VIP (actor that is needed by quest)?
var IsVIP = function (akRef) {
    return sn.IsVIP(akRef);
};
//-------
//SETTERS
//-------
//Applies material shader to reference (doesn't have to be static)
var ApplyMaterialShader = function (akRef, akMatObject, directionalThresholdAngle) {
    return sn.ApplyMaterialShader(akRef, akMatObject, directionalThresholdAngle);
};
//Wrapper function for AddKeywordToForm.
var AddKeywordToRef = function (akRef, akKeyword) { return sn.AddKeywordToRef(akRef, akKeyword); };
//Snaps the object to the nearest navmesh point closest to its current position in the cell.
var MoveToNearestNavmeshLocation = function (akRef) { return sn.MoveToNearestNavmeshLocation(akRef); };
//Wrapper function for RemoveKeywordFromForm.
var RemoveKeywordFromRef = function (akRef, akKeyword) { return sn.RemoveKeywordFromRef(akRef, akKeyword); };
//Wrapper function for ReplaceKeywordOnForm.
var ReplaceKeywordOnRef = function (akRef, akKeywordAdd, akKeywordRemove) { return sn.ReplaceKeywordOnRef(akRef, akKeywordAdd, akKeywordRemove); };
//Plays debug shader on the reference, with normalised RGBA color (or fully white if empty)
var PlayDebugShader = function (akRef, afRGBA) { return sn.PlayDebugShader(akRef, afRGBA); };
//Scales node & collision (bhkBoxShape, bhkSphereShape). Entire nif will be scaled if string is empty. Collision has to be directly attached to named nodes.
//Adds "PO3_SCALE" niextradata to root node.
var ScaleObject3D = function (akRef, asNodeName, afScale) { return sn.ScaleObject3D(akRef, asNodeName, afScale); };
//Sets the base object of this reference and reloads 3D
var SetBaseObject = function (akRef, akBaseObject) { return sn.SetBaseObject(akRef, akBaseObject); };
/** COLLISION LAYERS
        kUnidentified = 0,
        kStatic = 1,
        kAnimStatic = 2,
        kTransparent = 3,
        kClutter = 4,
        kWeapon = 5,
        kProjectile = 6,
        kSpell = 7,
        kBiped = 8,
        kTrees = 9,
        kProps = 10,
        kWater = 11,
        kTrigger = 12,
        kTerrain = 13,
        kTrap = 14,
        kNonCollidable = 15,
        kCloudTrap = 16,
        kGround = 17,
        kPortal = 18,
        kDebrisSmall = 19,
        kDebrisLarge = 20,
        kAcousticSpace = 21,
        kActorZone = 22,
        kProjectileZone = 23,
        kGasTrap = 24,
        kShellCasting = 25,
        kTransparentWall = 26,
        kInvisibleWall = 27,
        kTransparentSmallAnim = 28,
        kClutterLarge = 29,
        kCharController = 30,
        kStairHelper = 31,
        kDeadBip = 32,
        kBipedNoCC = 33,
        kAvoidBox = 34,
        kCollisionBox = 35,
        kCameraSphere = 36,
        kDoorDetection = 37,
        kConeProjectile = 38,
        kCamera = 39,
        kItemPicker = 40,
        kLOS = 41,
        kPathingPick = 42,
        kUnused0 = 43,
        kUnused1 = 44,
        kSpellExplosion = 45,
        kDroppingPick = 46 */
//Sets object 3D root or specified node's collision layer
var SetCollisionLayer = function (akRef, asNodeName, aiCollisionLayer) { return sn.SetCollisionLayer(akRef, asNodeName, aiCollisionLayer); };
//Sets the door as the new linked door
var SetDoorDestination = function (akRef, akDoor) { return sn.SetDoorDestination(akRef, akDoor); };
//Sets effectshader duration. Internal duration is set when the effectshader begins and does not change with time.
var SetEffectShaderDuration = function (akRef, akShader, afTime, abAbsolute) { return sn.SetEffectShaderDuration(akRef, akShader, afTime, abAbsolute); };
//Sets linked ref. Pass None into akTargetRef to unset the linked ref.
var SetLinkedRef = function (akRef, akTargetRef, akKeyword) {
    if (akKeyword === void 0) { akKeyword = null; }
    return sn.SetLinkedRef(akRef, akTargetRef, akKeyword);
};
//Sets havok material type. Use oldMaterial string to select what material you want to change from to (eg. from stone to wood), and nodeName to apply it to the specific node.
//If both are empty, every collision material will be set.
var SetMaterialType = function (akRef, asNewMaterial, asOldMaterial, asNodeName) {
    if (asOldMaterial === void 0) { asOldMaterial = ""; }
    if (asNodeName === void 0) { asNodeName = ""; }
    return sn.SetMaterialType(akRef, asNewMaterial, asOldMaterial, asNodeName);
};
//Copies skin tint color from actorbase to bodyparts nif
var SetupBodyPartGeometry = function (akRef, akActor) { return sn.SetupBodyPartGeometry(akRef, akActor); };
/** SHADER TYPES
        kDefault = 0
        kEnvironmentMap = 1
        kGlowMap = 2
        kParallax = 3
        kFaceGen = 4
        kFaceGenRGBTint = 5
        kHairTint = 6
        kParallaxOcc = 7
        kMultiTexLand = 8
        kLODLand = 9
        kMultilayerParallax = 11
        kTreeAnim = 12
        kMultiIndexTriShapeSnow = 14
        kLODObjectsHD = 15
        kEye = 16
        kCloud = 17
        kLODLandNoise = 18
        kMultiTexLandLODBlend = 19 */
//sets the ref's shader material type ie. default to cubemap
//template needs to be loaded
//if texture type is -1, the reference's entire textureset is replaced using the template's textureset//
//if texture type is 0-9 the template's textureset is still applied but reference's texture at that index will take priority.
//optional diffuse path can be used to filter shapes to apply the shader to, partial matches are accepted like "Draugr.dds"
//limitations - cannot be used on geometry with no normals (ie. body skin meshes)
var SetShaderType = function (akRef, akTemplate, asDiffusePath, aiShaderType, aiTextureType, abNoWeapons, abNoAlphaProperty) {
    return sn.SetShaderType(akRef, akTemplate, asDiffusePath, aiShaderType, aiTextureType, abNoWeapons, abNoAlphaProperty);
};
//Stops ALL effect shaders and art objects (visual effects) currently on this actor
var StopAllShaders = function (akRef) { return sn.StopAllShaders(akRef); };
//Removes all instances of the art object (hit magic effect/visual effect) attached to the reference.
var StopArtObject = function (akRef, akArt) { return sn.StopArtObject(akRef, akArt); };
//Toggles node visibility.
var ToggleChildNode = function (akRef, asNodeName, abDisable) { return sn.ToggleChildNode(akRef, asNodeName, abDisable); };
//Updates node data. Move hit effect art to new node (ie. from "MagicEffectsNode" to "NPC Head [Head]") or update translate, rotate, and scale values.
//Translate and Rotate arrays must have three values in order to work. Rotate uses euler angles in degrees (XYZ). Scale is relative, and is multiplied by existing scale.
//If the hit effect art is removed and reattached, it will revert back to the values in the nif.
var UpdateHitEffectArtNode = function (akRef, akArt, asNewNode, afTranslate, afRotate, afRelativeScale) {
    if (afRelativeScale === void 0) { afRelativeScale = 1.0; }
    return sn.UpdateHitEffectArtNode(akRef, akArt, asNewNode, afTranslate, afRotate, afRelativeScale);
};
//----------------------------------------------------------------------------------------------------------
//PACKAGES
//----------------------------------------------------------------------------------------------------------
//-------
//GETTERS
//-------
/** PACKAGE TYPES
        Find = 0
        Follow = 1
        Escort = 2
        Eat = 3
        Sleep = 4
        Wander = 5
        Travel = 6
        Accompany = 7
        UseItemAt = 8
        Ambush = 9
        FleeNotCombat = 10
        CastMagic = 11
        Sandbox = 12
        Patrol = 13
        Guard = 14
        Dialogue = 15
        UseWeapon = 16
        Find2 = 17
        Package = 18
        PackageTemplate = 19
        Activate = 20
        Alarm = 21
        Flee = 22
        Trespass = 23
        Spectator = 24
        ReactToDead = 25
        GetUpFromChair = 26
        DoNothing = 27
        InGameDialogue = 28
        Surface =  29
        SearchForAttacker = 30
        AvoidPlayer = 31
        ReactToDestroyedObject = 32
        ReactToGrenadeOrMine = 33
        StealWarning = 34
        PickPocketWarning = 35
        MovementBlocked = 36
        VampireFeed = 37
        CannibalFeed = 38 */
//Gets package type. Returns -1 if package is none
var GetPackageType = function (akPackage) {
    return sn.GetPackageType(akPackage);
};
//Gets all idles on this package
var GetPackageIdles = function (akPackage) { return sn.GetPackageIdles(akPackage); };
//-------
//SETTERS
//-------
//Adds idle to the end of the package idle stack, creating it if needed.
var AddPackageIdle = function (akPackage, akIdle) { return sn.AddPackageIdle(akPackage, akIdle); };
//Removes idle from package
var RemovePackageIdle = function (akPackage, akIdle) { return sn.RemovePackageIdle(akPackage, akIdle); };
//----------------------------------------------------------------------------------------------------------
//PAPYRUS EXTENDER
//----------------------------------------------------------------------------------------------------------
//returns current version as int array (major,minor,patch / 4,3,7)
var GetPapyrusExtenderVersion = function () {
    return sn.GetPapyrusExtenderVersion();
};
//-----------------------------------------------------------------------------------------------------------
//POTION - see SPELL
//-----------------------------------------------------------------------------------------------------------
var AddMagicEffectToPotion = function (akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToPotion(akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Potion to target Potion, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToPotion = function (akPotion, akPotionToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToPotion(akPotion, akPotionToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Potion that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromPotion = function (akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromPotion(akPotion, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Potion that matches Potion at index.
var RemoveEffectItemFromPotion = function (akPotion, akPotionToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromPotion(akPotion, akPotionToMatchFrom, aiIndex);
};
//----------------------------------------------------------------------------------------------------------
//PROJECTILES
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Gets projectile gravity (usually 0.0 for non arrow projectiles).
var GetProjectileGravity = function (akProjectile) { return sn.GetProjectileGravity(akProjectile); };
//Gets projectile impact force.
var GetProjectileImpactForce = function (akProjectile) { return sn.GetProjectileImpactForce(akProjectile); };
//Gets projectile range.
var GetProjectileRange = function (akProjectile) { return sn.GetProjectileRange(akProjectile); };
//Gets projectile speed.
var GetProjectileSpeed = function (akProjectile) { return sn.GetProjectileSpeed(akProjectile); };
/** PROJECTILE TYPES
        Missile = 1
        Lobber = 2
        Beam = 3
        Flame = 4
        Cone = 5
        Barrier = 6
        Arrow = 7 */
//Get projectile type. 0 if projectile is None.
var GetProjectileType = function (akProjectile) { return sn.GetProjectileType(akProjectile); };
//-------
//SETTERS
//-------
//Sets projectile gravity.
var SetProjectileGravity = function (akProjectile, afGravity) { return sn.SetProjectileGravity(akProjectile, afGravity); };
//Sets projectile impact force.
var SetProjectileImpactForce = function (akProjectile, afImpactForce) { return sn.SetProjectileImpactForce(akProjectile, afImpactForce); };
//Sets projectile range.
var SetProjectileRange = function (akProjectile, afRange) { return sn.SetProjectileRange(akProjectile, afRange); };
//Sets projectile speed.
var SetProjectileSpeed = function (akProjectile, afSpeed) { return sn.SetProjectileSpeed(akProjectile, afSpeed); };
//-----------------------------------------------------------------------------------------------------------
//SCROLL - see SPELL
//-----------------------------------------------------------------------------------------------------------
var AddMagicEffectToScroll = function (akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToScroll(akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from Scroll to target Scroll, at given index. Same as above function, but less verbose, and preserves all conditions. Optional cost argument.
var AddEffectItemToScroll = function (akScroll, akScrollToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToScroll(akScroll, akScrollToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from Scroll that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromScroll = function (akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromScroll(akScroll, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from Scroll that matches Scroll at index.
var RemoveEffectItemFromScroll = function (akScroll, akScrollToMatchFrom, aiIndex) {
    return sn.RemoveEffectItemFromScroll(akScroll, akScrollToMatchFrom, aiIndex);
};
//-----------------------------------------------------------------------------------------------------------
//SOUND
//-----------------------------------------------------------------------------------------------------------
//Sets sound descriptor attached to the sound.
var SetSoundDescriptor = function (akSound, akSoundDescriptor) { return sn.SetSoundDescriptor(akSound, akSoundDescriptor); };
//-----------------------------------------------------------------------------------------------------------
//SPELL
//-----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
/** SPELL TYPES
        Spell = 0
        Disease = 1
        Power = 2
        LesserPower = 3
        Ability = 4
        Poison = 5
        Addition = 6
        Voice = 7 */
//Returns spell type. -1 if spell is None
var GetSpellType = function (akSpell) {
    return sn.GetSpellType(akSpell);
};
//--------
//SETTERS
//--------
//ConditionItemObject | Function ID | parameter 1 | parameter 2 | OPCode | float | ANDOR
//conditions which have no parameters (eg. IsSneaking) / take in forms (GetIsRace) work
//conditions which accept int/float/strings are skipped
//Subject	| HasMagicEffectKeyword	| MagicInvisibility		| NONE | == | 0.0 | AND - in game
//Subject 	| HasMagicEffectKeyword	| 0001EA6F ~ Skyrim.esm | NONE | == | 0.0 | AND	- in papyrus
var AddMagicEffectToSpell = function (akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.AddMagicEffectToSpell(akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost, asConditionList);
};
//Adds effectitem from spell to target spell, at given index. Same as above function, but less verbose, and preserves all conditions.
var AddEffectItemToSpell = function (akSpell, akSpellToCopyFrom, aiIndex, afCost) {
    if (afCost === void 0) { afCost = -1.0; }
    return sn.AddEffectItemToSpell(akSpell, akSpellToCopyFrom, aiIndex, afCost);
};
//Removes magic effect from spell that matches magnitude/area/duration/cost.
var RemoveMagicEffectFromSpell = function (akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost) {
    if (afCost === void 0) { afCost = 0.0; }
    return sn.RemoveMagicEffectFromSpell(akSpell, akMagicEffect, afMagnitude, aiArea, aiDuration, afCost);
};
//Removes effectitem from spell that matches spell at index.
var RemoveEffectItemFromSpell = function (akSpell, akSpellToMatchFrom, aiIndex) { return sn.RemoveEffectItemFromSpell(akSpell, akSpellToMatchFrom, aiIndex); };
//Sets casting type of spell (and all attached magic effects)
var SetSpellCastingType = function (akSpell, aiType) { return sn.SetSpellCastingType(akSpell, aiType); };
//Sets delivery type of spell (and all attached magic effects)
var SetSpellDeliveryType = function (akSpell, aiType) { return sn.SetSpellDeliveryType(akSpell, aiType); };
//----------------------------------------------------------------------------------------------------------
//STRINGS
//----------------------------------------------------------------------------------------------------------
//Converts string to hex value if valid
var IntToString = function (aiValue, abHex) {
    return sn.IntToString(aiValue, abHex);
};
//Converts string to int. Returns -1 for out of bound values.
var StringToInt = function (asString) {
    return sn.StringToInt(asString);
};
//----------------------------------------------------------------------------------------------------------
//UI
//----------------------------------------------------------------------------------------------------------
//Gets the objectreference of the currently opened container in container menu
var GetMenuContainer = function () {
    return sn.GetMenuContainer();
};
//----------------------------------------------------------------------------------------------------------
//UTILITY
//----------------------------------------------------------------------------------------------------------
//Calculates a random float between afMin and afMax, based on Mersenne Twister
var GenerateRandomFloat = function (afMin, afMax) {
    return sn.GenerateRandomFloat(afMin, afMax);
};
//Calculates a random integer between afMin and afMax, based on Mersenne Twister
var GenerateRandomInt = function (afMin, afMax) {
    return sn.GenerateRandomInt(afMin, afMax);
};
//Gets system time and date
//Year (1601 - 30827)
//Month (1-12)
//DayOfWeek (1:Sunday - 7:Saturday)
//Day (1-31)
//Hour (0-23)
//Minute (0-59)
//Second (0-59)
//Millisecond (0-999)
var GetSystemTime = function () { return sn.GetSystemTime(); };
//-----------------------------------------------------------------------------------------------------------
//VISUALEFFECTS
//----------------------------------------------------------------------------------------------------------
//--------
//GETTERS
//--------
//Gets the art object associated with the visual effect.
var GetArtObject = function (akEffect) { return sn.GetArtObject(akEffect); };
//Returns the total number of art objects present/active (on objects) within the loaded area.
var GetArtObjectTotalCount = function (akEffect, abActive) { return sn.GetArtObjectTotalCount(akEffect, abActive); };
//--------
//SETTERS
//--------
//Sets the art object associated with the visual effect.
var SetArtObject = function (akEffect, akArt) { return sn.SetArtObject(akEffect, akArt); };
//-----------------------------------------------------------------------------------------------------------
//WEATHER
//----------------------------------------------------------------------------------------------------------
//Gets wind speed as shown as in CK conditions (0.0-1.0).
var GetWindSpeedAsFloat = function (akWeather) { return sn.GetWindSpeedAsFloat(akWeather); };
//Gets wind speed as shown in the weather form (0-255).
var GetWindSpeedAsInt = function (akWeather) { return sn.GetWindSpeedAsInt(akWeather); };
/** WEATHER TYPES
        Pleasant = 0
        Cloudy = 1
        Rainy = 2
        Snow = 3 */
//Gets weather/current weather type if akWeather is None
var GetWeatherType = function (akWeather) {
    if (akWeather === void 0) { akWeather = null; }
    return sn.GetWeatherType(akWeather);
};


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl),
/* harmony export */   "saveSettings": () => (/* binding */ saveSettings),
/* harmony export */   "mainMcm": () => (/* binding */ mainMcm)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _modevent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _InventorySlots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);






//___________VARIABLES______________________________________
var mcm_settings = {
    SelectedSlot: 'sActiveSlots:Slots',
    inputSlotName: 'sAddSlotName:Slots',
    addSlotButton: 'bAddSlotButton:Slots',
    removeSlotButton: 'bDeleteSlotButton:Slots',
    sliderSlotMax: 'fSlotMax:Slots',
    AddCategories: 'sSlotCategoriesAdd:Lists',
    RemoveCategories: 'sSlotCategoriesRemove:Lists',
};
var storageKeys = {
    categories: 'YM.SLOTS.ITEM_CATEGORIES',
    changed_setting: 'YM.Slots.SETTING_CHANGED',
    menuWhiteList: 'YM.Slots.MCM.Menu.Categories.WhiteList',
    menuBlackList: 'YM.Slots.MCM.Menu.Categories.BlackList',
    SlotAssignment: 'YM.SLOTS.MCM.MENU.CATEGORIES.SLOT_CHOICES'
};
var mcmSettingsToStorageKeys = {
// `YM.Slots.${s.name}.fSlotMax:Slots`
};
var modname = 'InventorySlots';
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
//___________FUNCTIONS______________________________________
var RefreshMCM = function () {
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        var handle = _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.Create('YM.Slots.REFRESH');
        _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.PushString(handle, 'Refresh');
        _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.Send(handle);
    });
};
var SetMenuOptions = function () {
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        var handle = _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.Create('YM.Slots.REFRESH');
        _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.PushString(handle, 'SetMenuOptions');
        _modevent__WEBPACK_IMPORTED_MODULE_3__.ModEvent.Send(handle);
    });
    RefreshMCM();
};
var saveSettings = function () {
    // SetIntValue(null, mcm_settings.AddCategories, mcm.GetModSettingInt(modname, mcm_settings.AddCategories))
    // SetIntValue(null, mcm_settings.RemoveCategories, mcm.GetModSettingInt(modname, mcm_settings.RemoveCategories))
    // SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, mcm_settings.SelectedSlot))
    // SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, mcm_settings.addSlotButton))
    // SetIntValue(null, mcm_settings., mcm.GetModSettingBool(modname, mcm_settings.inputSlotName) ? 1:0)
    // SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, ""))
    // SetIntValue(null, mcm_settings., mcm.GetModSettingInt(modname, ""))
};
function FillMCMOptions() {
    FilterMCMOptions('');
    var lists = [mcm_settings.SelectedSlot, storageKeys.menuBlackList, storageKeys.menuWhiteList];
    // fill each menu with the default first option, "No Changes"
    lists.forEach(function (list) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, list);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, list, 'No Changes');
        _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingString(modname, list, "No Changes");
    });
    // slot selection menu of first page
    _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.getAllSlotNames().forEach(function (s) {
        var name = s;
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, mcm_settings.SelectedSlot, name);
    });
    // item category editing, second page
    var volumes = Object.values(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.itemCategoryVolumes);
    Object.keys(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.itemCategoryVolumes).forEach(function (c, i) {
        c = "f".concat(c, ":Categories");
        _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingFloat(modname, c, volumes[i]);
    });
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
    HideGroupOne(true);
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iWidgetX:Slots", (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.GetBaseWidgetPos)()[0]);
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iWidgetY:Slots", (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.GetBaseWidgetPos)()[1]);
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iInventoryWidgetX:Slots", _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.inventoryCurrentHighlighted.getPosition()[0]);
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iInventoryWidgetY:Slots", _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.inventoryCurrentHighlighted.getPosition()[1]);
}
;
function fillSlotCategoryLists(selected_slot) {
    var lists = [storageKeys.menuBlackList, storageKeys.menuWhiteList];
    lists.forEach(function (list) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, list);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, list, 'No Changes');
        _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingString(modname, list, "No Changes");
    });
    Object.keys(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot).forEach(function (c, i) {
        if (Number(c) || c == '0') {
            return;
        }
        var slot = Object.values(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot)[i];
        var under_index = c.indexOf('_', 9) + 1;
        c = c.slice(under_index);
        if (slot == selected_slot) {
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, storageKeys.menuBlackList, c);
        }
        else {
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, storageKeys.menuWhiteList, c);
        }
    });
}
// Function to clear and refill the mcm menu lists according to a filter criteria
function FilterMCMOptions(query) {
    if (!query) {
        query = '';
    }
    ;
    // FillMCMOptions()
    var mainKey = "YM.Lorica.MCM.Enum.";
    // arr = mainKey + arr
    var keys = ["Upkeep", "Blacklist", "Exclusion"];
    keys.forEach(function (key) {
        key = mainKey + key;
        var filtered = FilterOptions((0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListToArray)(null, key), query);
        if (!filtered) {
            return;
        }
        filtered.unshift('No Changes');
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, key);
        filtered.forEach(function (f) {
            (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, key, f, false);
        });
    });
    SetMenuOptions();
    RefreshMCM();
}
function FilterOptions(arr, query) {
    if (!arr) {
        return arr;
    }
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
}
function HideGroupOne(makeVisible) {
    makeVisible = !makeVisible;
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingBool(modname, 'bHiddenToggle1:Slots', makeVisible);
    RefreshMCM();
}
function stringToSetting(changed_setting) {
    var i = Object.values(mcm_settings).indexOf(changed_setting);
    return Object.values(mcm_settings)[i];
}
function solveSlotStoragePath(s) {
    return "YM.Slots.".concat(s.name, ".");
}
function SetFloatSetting(changed_setting, slot) {
    var key = stringToSetting(changed_setting);
    // SetFloatValue(null, `YM.Slots.${ slot.name }.${key}`, mcm.GetModSettingFloat(modname, key))
    slot.baseSize = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingFloat(modname, changed_setting);
}
function SetIntSetting(changed_setting, slot) {
    var key = stringToSetting(changed_setting);
    // SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingInt(modname, key))
    // slot.baseSize = mcm.GetModSettingFloat(modname, key)
}
function SetBoolSetting(changed_setting, slot) {
    var key = stringToSetting(changed_setting);
    var value = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingBool(modname, key);
    if (changed_setting.includes('bAddSlot') || changed_setting.includes('DeleteSlot')) {
        _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingBool(modname, changed_setting, false);
        if (key.includes('bAddSlot')) {
            var newSlot = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingString(modname, 'sAddSlotName:Slots');
            _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingString(modname, 'sAddSlotName:Slots', 'Enter');
            new _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot(newSlot, 50, (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.GetBaseWidgetPos)()[0], (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.GetBaseWidgetPos)()[1]);
        }
        else if (key.includes('DeleteSlot')) {
            if (!slot) {
                return;
            }
            var oldSlot_name = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingString(modname, 'sActiveSlots:Slots');
            var oldSlot_1 = (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.getSlotFromName)(oldSlot_name);
            var allSlots = _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.getAllSlots();
            var firstSlot_1 = allSlots[0];
            allSlots.splice(allSlots.indexOf(oldSlot_1), 1);
            Object.values(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot).forEach(function (s, i) {
                if (s === oldSlot_1) {
                    Object.values(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot)[i] = firstSlot_1;
                }
            });
            // can't really delete the object
            oldSlot_1.widget.setAlpha(0);
            skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.messageBox("Reverted ".concat(oldSlot_name, "'s assigned items to a default slot, ").concat(firstSlot_1.name));
        }
    }
    else if (changed_setting.includes('Reset')) {
        var data_json = 'data/skse/plugins/InventorySlots/Slots.json';
        var original_data = { "volumes": { "RABInv_ItemType_WeaponArrow": 1, "RABInv_ItemType_WeaponArrow_Equipped": 1, "RABInv_ItemType_WeaponBolt": 0.5, "RABInv_ItemType_WeaponBolt_Equipped": 0.5, "RABInv_ItemType_Weapon1H": 5, "RABInv_ItemType_Weapon1H_Equipped": 5, "RABInv_ItemType_Weapon2H": 10, "RABInv_ItemType_Weapon2H_Equipped": 10, "RABInv_ItemType_WeaponDagger": 2, "RABInv_ItemType_WeaponDagger_Equipped": 2, "RABInv_ItemType_WeaponCrossBow": 8, "RABInv_ItemType_WeaponCrossBow_Equipped": 8, "RABInv_ItemType_WeaponBow": 8, "RABInv_ItemType_WeaponBow_Equipped": 8, "RABInv_ItemType_ArmorShield": 9, "RABInv_ItemType_ArmorShield_Equipped": 9, "RABInv_ItemType_ArmorCuirass": 15, "RABInv_ItemType_ArmorCuirass_Equipped": 15, "RABInv_ItemType_ArmorBoots": 6, "RABInv_ItemType_ArmorBoots_Equipped": 6, "RABInv_ItemType_ArmorHelmet": 6, "RABInv_ItemType_ArmorHelmet_Equipped": 6, "RABInv_ItemType_ArmorGauntlets": 4, "RABInv_ItemType_ArmorGauntlets_Equipped": 4, "RABInv_ItemType_Clothes": 6, "RABInv_ItemType_Clothes_Equipped": 6, "RABInv_ItemType_Jewelry": 3, "RABInv_ItemType_Jewelry_Equipped": 3, "RABInv_ItemType_BookScroll": 2, "RABInv_ItemType_Food": 1, "RABInv_ItemType_Potion": 1, "RABInv_ItemType_Drink": 2, "RABInv_ItemType_Ingredient": 0.1, "RABInv_ItemType_Gem": 1, "RABInv_ItemType_Soulgem": 1, "RABInv_ItemType_Lockpick": 0.5, "RABInv_ItemType_MiscLarge": 5, "RABInv_ItemType_MiscMedium": 3, "RABInv_ItemType_MiscSmall": 0.1, "RABInv_ItemType_Gold": 0, "RABInv_ItemType_OreIngot": 2, "RABInv_ItemType_HidePelt": 1 }, "slots": [{ "name": "Misc", "baseSize": 200, "currentSize": 0, "widget": { "index": 2, "type": "undefined", "owningMod": "InventorySlots", "x": 1500, "y": 800 }, "items": [] }, { "name": "Weapons", "baseSize": 20, "currentSize": 0, "widget": { "index": 3, "type": "undefined", "owningMod": "InventorySlots", "x": 1500, "y": 820 }, "items": [] }, { "name": "Quiver", "baseSize": 60, "currentSize": 0, "widget": { "index": 4, "type": "undefined", "owningMod": "InventorySlots", "x": 1500, "y": 840 }, "items": [] }, { "name": "Valuables", "baseSize": 50, "currentSize": 0, "widget": { "index": 5, "type": "undefined", "owningMod": "InventorySlots", "x": 1500, "y": 860 }, "items": [] }, { "name": "Bottles", "baseSize": 10, "currentSize": 0, "widget": { "index": 6, "type": "undefined", "owningMod": "InventorySlots", "x": 1500, "y": 880 }, "items": [] }], "Category-to-Slots": [["RABInv_ItemType_WeaponArrow", "Quiver"], ["RABInv_ItemType_WeaponArrow_Equipped", "Quiver"], ["RABInv_ItemType_WeaponBolt", "Quiver"], ["RABInv_ItemType_WeaponBolt_Equipped", "Quiver"], ["RABInv_ItemType_Weapon1H", "Weapons"], ["RABInv_ItemType_Weapon1H_Equipped", "Weapons"], ["RABInv_ItemType_Weapon2H", "Weapons"], ["RABInv_ItemType_Weapon2H_Equipped", "Weapons"], ["RABInv_ItemType_WeaponDagger", "Weapons"], ["RABInv_ItemType_WeaponDagger_Equipped", "Weapons"], ["RABInv_ItemType_WeaponCrossBow", "Weapons"], ["RABInv_ItemType_WeaponCrossBow_Equipped", "Weapons"], ["RABInv_ItemType_WeaponBow", "Weapons"], ["RABInv_ItemType_WeaponBow_Equipped", "Weapons"], ["RABInv_ItemType_ArmorShield", "Misc"], ["RABInv_ItemType_ArmorShield_Equipped", "Weapons"], ["RABInv_ItemType_ArmorCuirass", "Misc"], ["RABInv_ItemType_ArmorCuirass_Equipped", "Weapons"], ["RABInv_ItemType_ArmorBoots", "Misc"], ["RABInv_ItemType_ArmorBoots_Equipped", "Weapons"], ["RABInv_ItemType_ArmorHelmet", "Misc"], ["RABInv_ItemType_ArmorHelmet_Equipped", "Weapons"], ["RABInv_ItemType_ArmorGauntlets", "Misc"], ["RABInv_ItemType_ArmorGauntlets_Equipped", "Weapons"], ["RABInv_ItemType_Clothes", "Misc"], ["RABInv_ItemType_Clothes_Equipped", "Misc"], ["RABInv_ItemType_Jewelry", "Valuables"], ["RABInv_ItemType_Jewelry_Equipped", "Weapons"], ["RABInv_ItemType_BookScroll", "Misc"], ["RABInv_ItemType_Food", "Misc"], ["RABInv_ItemType_Potion", "Bottles"], ["RABInv_ItemType_Drink", "Bottles"], ["RABInv_ItemType_Ingredient", "Misc"], ["RABInv_ItemType_Gem", "Valuables"], ["RABInv_ItemType_Soulgem", "Valuables"], ["RABInv_ItemType_Lockpick", "Misc"], ["RABInv_ItemType_MiscLarge", "Misc"], ["RABInv_ItemType_MiscMedium", "Misc"], ["RABInv_ItemType_MiscSmall", "Misc"], ["RABInv_ItemType_Gold", "Valuables"], ["RABInv_ItemType_OreIngot", "Misc"], ["RABInv_ItemType_HidePelt", "Misc"]], "Current Item Widget Position": [950, 800], "Base Widget Position": [1500, 800] };
        (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_5__.WriteToFile)(data_json, JSON.stringify(original_data), false);
        (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.importDataFromFile)();
    }
    else if (changed_setting.includes('Import')) {
        (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.importDataFromFile)();
    }
}
function SetStringSetting(changed_setting, slot) {
    var key = stringToSetting(changed_setting);
    var value = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingString(modname, key);
    if (value == 'No Changes') {
        return;
    }
    if (key.includes('CategoriesRemove')) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, storageKeys.menuWhiteList, value);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListRemove)(null, storageKeys.menuBlackList, value);
        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot[value] = null; // sets to the default slot 'Misc_slot'
    }
    else if (key.includes('CategoriesAdd')) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, storageKeys.menuBlackList, value);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListRemove)(null, storageKeys.menuWhiteList, value);
        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot[value] = slot;
    }
    else if (key.includes('sAddSlot')) {
        RefreshMCM();
    }
}
function SetSlotWidgetPositionSettings(slot) {
    var xy = slot.widget.getPosition();
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iSlotWidgetX:Slots", xy[0]);
    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingInt(modname, "iSlotWidgetY:Slots", xy[1]);
}
function checkOrphanedCategories() {
    var keys = Object.keys(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot);
    var orphans = [];
    Object.values(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot).forEach(function (s, i) {
        if (!s) {
            orphans.push(keys[i]);
        }
    });
    return orphans;
}
//__________EVENTS____________________________________________
var mainMcm = function () {
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
        var _a, _b, _c, _d;
        (_a = pl()) === null || _a === void 0 ? void 0 : _a.registerForModEvent('Slots_MCM_PageSelect', 'OnPageSelect');
        (_b = pl()) === null || _b === void 0 ? void 0 : _b.registerForModEvent('Slots_Menu_Open', 'OnMenuOpen');
        (_c = pl()) === null || _c === void 0 ? void 0 : _c.registerForModEvent('YM.Slots.SETTING_CHANGED', 'OnSettingChanged');
        (_d = pl()) === null || _d === void 0 ? void 0 : _d.registerForModEvent('Slots_Menu_Close_Update', 'OnMenuClose');
        // initItemCategoriesList()
    });
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            // Check if any item categories are unassigned
            var emptyCat = checkOrphanedCategories();
            if (emptyCat.length != 0) {
                skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.messageBox("The following categories need an assigned slot: ".concat(JSON.stringify(emptyCat)));
            }
            (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.EvaluateInventory)();
            (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.saveToDataFile)();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.updateWidgets();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.fadeAllOut();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.inventoryCurrentHighlighted.setAlpha(0);
        },
    }, 0x14, 0x14, 'OnMenuClose');
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            // printConsole(ctx.papyrusEventName)
            FillMCMOptions();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.fadeAllIn();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.inventoryCurrentHighlighted.setAlpha(1);
        },
    }, 0x14, 0x14, 'OnPageSelect' || 0);
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            // printConsole(ctx.papyrusEventName)
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                var changed_setting = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetStringValue)(null, storageKeys.changed_setting);
                var value;
                var slot;
                // printConsole(changed_setting)
                value = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingString(modname, mcm_settings.SelectedSlot);
                if (value.toLowerCase() == 'No Changes'.toLowerCase()) {
                    HideGroupOne(true);
                }
                slot = (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.getSlotFromName)(value);
                // printConsole(slot.name)
                if (changed_setting.includes('ActiveSlot')) {
                    if (!slot) {
                        return;
                    }
                    HideGroupOne(false);
                    _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingFloat(modname, mcm_settings.sliderSlotMax, slot.baseSize);
                    fillSlotCategoryLists(slot);
                    SetSlotWidgetPositionSettings(slot);
                }
                else if (changed_setting[0] == 'f') {
                    // SetFloatSetting(changed_setting, slot)
                    if (changed_setting.includes('SlotMax')) {
                        if (!slot) {
                            return;
                        }
                        slot.baseSize = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingFloat(modname, changed_setting);
                    }
                    else if (changed_setting.includes('ItemType')) {
                        var newSize = _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingFloat(modname, changed_setting);
                        changed_setting = changed_setting.slice(1, changed_setting.length - 11);
                        // printConsole(changed_setting)
                        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.itemCategoryVolumes[changed_setting] = newSize;
                        // printConsole(itemCategoryVolumes[changed_setting])
                    }
                    // if (changed_setting.includes('fSlotMax')){slot}
                }
                else if (changed_setting[0] == 'i') {
                    if (changed_setting.includes('SlotWidgetX') || changed_setting.includes('SlotWidgetY')) {
                        if (!slot) {
                            return;
                        }
                        slot.widget.setPosition(_skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iSlotWidgetX:Slots"), _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iSlotWidgetY:Slots"));
                        // printConsole(`This slot has been moved to ${slot.widget.getPosition()} `)
                        (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.saveToDataFile)();
                    }
                    else if (changed_setting.includes('InventoryWidgetX') || changed_setting.includes('InventoryWidgetY')) {
                        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.inventoryCurrentHighlighted.setPosition(_skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iInventoryWidgetX:Slots"), _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iInventoryWidgetY:Slots"));
                    }
                    else if (changed_setting.includes('iWidgetX') || changed_setting.includes('iWidgetY')) {
                        (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.setBaseWidgetPos)([_skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iWidgetX:Slots"), _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingInt(modname, "iWidgetY:Slots")]);
                        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.setAllWidgetPos((0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.GetBaseWidgetPos)());
                    }
                    SetIntSetting(changed_setting, slot);
                }
                else if (changed_setting[0] == 'b') {
                    SetBoolSetting(changed_setting, slot);
                }
                else if (changed_setting[0] == 's') {
                    if (!slot) {
                        return;
                    }
                    if (value == 'No Changes') {
                        return;
                    }
                    SetStringSetting(changed_setting, slot);
                    // printConsole( mcm.GetModSettingString(modname, mcm_settings.RemoveCategories ) )
                }
                SetMenuOptions();
            });
        },
    }, 0x14, 0x14, 'OnSettingChanged');
};


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetIntValue": () => (/* binding */ SetIntValue),
/* harmony export */   "SetFloatValue": () => (/* binding */ SetFloatValue),
/* harmony export */   "SetStringValue": () => (/* binding */ SetStringValue),
/* harmony export */   "SetFormValue": () => (/* binding */ SetFormValue),
/* harmony export */   "UnsetIntValue": () => (/* binding */ UnsetIntValue),
/* harmony export */   "UnsetFloatValue": () => (/* binding */ UnsetFloatValue),
/* harmony export */   "UnsetStringValue": () => (/* binding */ UnsetStringValue),
/* harmony export */   "UnsetFormValue": () => (/* binding */ UnsetFormValue),
/* harmony export */   "HasIntValue": () => (/* binding */ HasIntValue),
/* harmony export */   "HasFloatValue": () => (/* binding */ HasFloatValue),
/* harmony export */   "HasStringValue": () => (/* binding */ HasStringValue),
/* harmony export */   "HasFormValue": () => (/* binding */ HasFormValue),
/* harmony export */   "GetIntValue": () => (/* binding */ GetIntValue),
/* harmony export */   "GetFloatValue": () => (/* binding */ GetFloatValue),
/* harmony export */   "GetStringValue": () => (/* binding */ GetStringValue),
/* harmony export */   "GetFormValue": () => (/* binding */ GetFormValue),
/* harmony export */   "PluckIntValue": () => (/* binding */ PluckIntValue),
/* harmony export */   "PluckFloatValue": () => (/* binding */ PluckFloatValue),
/* harmony export */   "PluckStringValue": () => (/* binding */ PluckStringValue),
/* harmony export */   "PluckFormValue": () => (/* binding */ PluckFormValue),
/* harmony export */   "AdjustIntValue": () => (/* binding */ AdjustIntValue),
/* harmony export */   "AdjustFloatValue": () => (/* binding */ AdjustFloatValue),
/* harmony export */   "IntListAdd": () => (/* binding */ IntListAdd),
/* harmony export */   "FloatListAdd": () => (/* binding */ FloatListAdd),
/* harmony export */   "StringListAdd": () => (/* binding */ StringListAdd),
/* harmony export */   "FormListAdd": () => (/* binding */ FormListAdd),
/* harmony export */   "IntListGet": () => (/* binding */ IntListGet),
/* harmony export */   "FloatListGet": () => (/* binding */ FloatListGet),
/* harmony export */   "StringListGet": () => (/* binding */ StringListGet),
/* harmony export */   "FormListGet": () => (/* binding */ FormListGet),
/* harmony export */   "IntListSet": () => (/* binding */ IntListSet),
/* harmony export */   "FloatListSet": () => (/* binding */ FloatListSet),
/* harmony export */   "StringListSet": () => (/* binding */ StringListSet),
/* harmony export */   "FormListSet": () => (/* binding */ FormListSet),
/* harmony export */   "IntListPluck": () => (/* binding */ IntListPluck),
/* harmony export */   "FloatListPluck": () => (/* binding */ FloatListPluck),
/* harmony export */   "StringListPluck": () => (/* binding */ StringListPluck),
/* harmony export */   "FormListPluck": () => (/* binding */ FormListPluck),
/* harmony export */   "IntListShift": () => (/* binding */ IntListShift),
/* harmony export */   "FloatListShift": () => (/* binding */ FloatListShift),
/* harmony export */   "StringListShift": () => (/* binding */ StringListShift),
/* harmony export */   "FormListShift": () => (/* binding */ FormListShift),
/* harmony export */   "IntListPop": () => (/* binding */ IntListPop),
/* harmony export */   "FloatListPop": () => (/* binding */ FloatListPop),
/* harmony export */   "StringListPop": () => (/* binding */ StringListPop),
/* harmony export */   "FormListPop": () => (/* binding */ FormListPop),
/* harmony export */   "IntListAdjust": () => (/* binding */ IntListAdjust),
/* harmony export */   "FloatListAdjust": () => (/* binding */ FloatListAdjust),
/* harmony export */   "IntListInsert": () => (/* binding */ IntListInsert),
/* harmony export */   "FloatListInsert": () => (/* binding */ FloatListInsert),
/* harmony export */   "StringListInsert": () => (/* binding */ StringListInsert),
/* harmony export */   "FormListInsert": () => (/* binding */ FormListInsert),
/* harmony export */   "IntListRemove": () => (/* binding */ IntListRemove),
/* harmony export */   "FloatListRemove": () => (/* binding */ FloatListRemove),
/* harmony export */   "StringListRemove": () => (/* binding */ StringListRemove),
/* harmony export */   "FormListRemove": () => (/* binding */ FormListRemove),
/* harmony export */   "IntListClear": () => (/* binding */ IntListClear),
/* harmony export */   "FloatListClear": () => (/* binding */ FloatListClear),
/* harmony export */   "StringListClear": () => (/* binding */ StringListClear),
/* harmony export */   "FormListClear": () => (/* binding */ FormListClear),
/* harmony export */   "IntListRemoveAt": () => (/* binding */ IntListRemoveAt),
/* harmony export */   "FloatListRemoveAt": () => (/* binding */ FloatListRemoveAt),
/* harmony export */   "StringListRemoveAt": () => (/* binding */ StringListRemoveAt),
/* harmony export */   "FormListRemoveAt": () => (/* binding */ FormListRemoveAt),
/* harmony export */   "IntListCount": () => (/* binding */ IntListCount),
/* harmony export */   "FloatListCount": () => (/* binding */ FloatListCount),
/* harmony export */   "StringListCount": () => (/* binding */ StringListCount),
/* harmony export */   "FormListCount": () => (/* binding */ FormListCount),
/* harmony export */   "IntListCountValue": () => (/* binding */ IntListCountValue),
/* harmony export */   "FloatListCountValue": () => (/* binding */ FloatListCountValue),
/* harmony export */   "StringListCountValue": () => (/* binding */ StringListCountValue),
/* harmony export */   "FormListCountValue": () => (/* binding */ FormListCountValue),
/* harmony export */   "IntListFind": () => (/* binding */ IntListFind),
/* harmony export */   "FloatListFind": () => (/* binding */ FloatListFind),
/* harmony export */   "StringListFind": () => (/* binding */ StringListFind),
/* harmony export */   "FormListFind": () => (/* binding */ FormListFind),
/* harmony export */   "IntListHas": () => (/* binding */ IntListHas),
/* harmony export */   "FloatListHas": () => (/* binding */ FloatListHas),
/* harmony export */   "StringListHas": () => (/* binding */ StringListHas),
/* harmony export */   "FormListHas": () => (/* binding */ FormListHas),
/* harmony export */   "IntListSort": () => (/* binding */ IntListSort),
/* harmony export */   "FloatListSort": () => (/* binding */ FloatListSort),
/* harmony export */   "StringListSort": () => (/* binding */ StringListSort),
/* harmony export */   "FormListSort": () => (/* binding */ FormListSort),
/* harmony export */   "IntListSlice": () => (/* binding */ IntListSlice),
/* harmony export */   "FloatListSlice": () => (/* binding */ FloatListSlice),
/* harmony export */   "StringListSlice": () => (/* binding */ StringListSlice),
/* harmony export */   "FormListSlice": () => (/* binding */ FormListSlice),
/* harmony export */   "IntListResize": () => (/* binding */ IntListResize),
/* harmony export */   "FloatListResize": () => (/* binding */ FloatListResize),
/* harmony export */   "StringListResize": () => (/* binding */ StringListResize),
/* harmony export */   "FormListResize": () => (/* binding */ FormListResize),
/* harmony export */   "IntListCopy": () => (/* binding */ IntListCopy),
/* harmony export */   "FloatListCopy": () => (/* binding */ FloatListCopy),
/* harmony export */   "StringListCopy": () => (/* binding */ StringListCopy),
/* harmony export */   "FormListCopy": () => (/* binding */ FormListCopy),
/* harmony export */   "IntListToArray": () => (/* binding */ IntListToArray),
/* harmony export */   "FloatListToArray": () => (/* binding */ FloatListToArray),
/* harmony export */   "StringListToArray": () => (/* binding */ StringListToArray),
/* harmony export */   "FormListToArray": () => (/* binding */ FormListToArray),
/* harmony export */   "FormListFilterByTypes": () => (/* binding */ FormListFilterByTypes),
/* harmony export */   "FormListFilterByType": () => (/* binding */ FormListFilterByType),
/* harmony export */   "CountIntValuePrefix": () => (/* binding */ CountIntValuePrefix),
/* harmony export */   "CountFloatValuePrefix": () => (/* binding */ CountFloatValuePrefix),
/* harmony export */   "CountStringValuePrefix": () => (/* binding */ CountStringValuePrefix),
/* harmony export */   "CountFormValuePrefix": () => (/* binding */ CountFormValuePrefix),
/* harmony export */   "CountIntListPrefix": () => (/* binding */ CountIntListPrefix),
/* harmony export */   "CountFloatListPrefix": () => (/* binding */ CountFloatListPrefix),
/* harmony export */   "CountStringListPrefix": () => (/* binding */ CountStringListPrefix),
/* harmony export */   "CountFormListPrefix": () => (/* binding */ CountFormListPrefix),
/* harmony export */   "CountAllPrefix": () => (/* binding */ CountAllPrefix),
/* harmony export */   "CountObjIntValuePrefix": () => (/* binding */ CountObjIntValuePrefix),
/* harmony export */   "CountObjFloatValuePrefix": () => (/* binding */ CountObjFloatValuePrefix),
/* harmony export */   "CountObjStringValuePrefix": () => (/* binding */ CountObjStringValuePrefix),
/* harmony export */   "CountObjFormValuePrefix": () => (/* binding */ CountObjFormValuePrefix),
/* harmony export */   "CountObjIntListPrefix": () => (/* binding */ CountObjIntListPrefix),
/* harmony export */   "CountObjFloatListPrefix": () => (/* binding */ CountObjFloatListPrefix),
/* harmony export */   "CountObjStringListPrefix": () => (/* binding */ CountObjStringListPrefix),
/* harmony export */   "CountObjFormListPrefix": () => (/* binding */ CountObjFormListPrefix),
/* harmony export */   "CountAllObjPrefix": () => (/* binding */ CountAllObjPrefix),
/* harmony export */   "ClearIntValuePrefix": () => (/* binding */ ClearIntValuePrefix),
/* harmony export */   "ClearFloatValuePrefix": () => (/* binding */ ClearFloatValuePrefix),
/* harmony export */   "ClearStringValuePrefix": () => (/* binding */ ClearStringValuePrefix),
/* harmony export */   "ClearFormValuePrefix": () => (/* binding */ ClearFormValuePrefix),
/* harmony export */   "ClearIntListPrefix": () => (/* binding */ ClearIntListPrefix),
/* harmony export */   "ClearFloatListPrefix": () => (/* binding */ ClearFloatListPrefix),
/* harmony export */   "ClearStringListPrefix": () => (/* binding */ ClearStringListPrefix),
/* harmony export */   "ClearFormListPrefix": () => (/* binding */ ClearFormListPrefix),
/* harmony export */   "ClearAllPrefix": () => (/* binding */ ClearAllPrefix),
/* harmony export */   "ClearObjIntValuePrefix": () => (/* binding */ ClearObjIntValuePrefix),
/* harmony export */   "ClearObjFloatValuePrefix": () => (/* binding */ ClearObjFloatValuePrefix),
/* harmony export */   "ClearObjStringValuePrefix": () => (/* binding */ ClearObjStringValuePrefix),
/* harmony export */   "ClearObjFormValuePrefix": () => (/* binding */ ClearObjFormValuePrefix),
/* harmony export */   "ClearObjIntListPrefix": () => (/* binding */ ClearObjIntListPrefix),
/* harmony export */   "ClearObjFloatListPrefix": () => (/* binding */ ClearObjFloatListPrefix),
/* harmony export */   "ClearObjStringListPrefix": () => (/* binding */ ClearObjStringListPrefix),
/* harmony export */   "ClearObjFormListPrefix": () => (/* binding */ ClearObjFormListPrefix),
/* harmony export */   "ClearAllObjPrefix": () => (/* binding */ ClearAllObjPrefix),
/* harmony export */   "debug_DeleteValues": () => (/* binding */ debug_DeleteValues),
/* harmony export */   "debug_DeleteAllValues": () => (/* binding */ debug_DeleteAllValues),
/* harmony export */   "debug_Cleanup": () => (/* binding */ debug_Cleanup),
/* harmony export */   "debug_AllIntObjs": () => (/* binding */ debug_AllIntObjs),
/* harmony export */   "debug_AllFloatObjs": () => (/* binding */ debug_AllFloatObjs),
/* harmony export */   "debug_AllStringObjs": () => (/* binding */ debug_AllStringObjs),
/* harmony export */   "debug_AllFormObjs": () => (/* binding */ debug_AllFormObjs),
/* harmony export */   "debug_AllIntListObjs": () => (/* binding */ debug_AllIntListObjs),
/* harmony export */   "debug_AllFloatListObjs": () => (/* binding */ debug_AllFloatListObjs),
/* harmony export */   "debug_AllStringListObjs": () => (/* binding */ debug_AllStringListObjs),
/* harmony export */   "debug_AllFormListObjs": () => (/* binding */ debug_AllFormListObjs),
/* harmony export */   "debug_AllObjIntKeys": () => (/* binding */ debug_AllObjIntKeys),
/* harmony export */   "debug_AllObjFloatKeys": () => (/* binding */ debug_AllObjFloatKeys),
/* harmony export */   "debug_AllObjStringKeys": () => (/* binding */ debug_AllObjStringKeys),
/* harmony export */   "debug_AllObjFormKeys": () => (/* binding */ debug_AllObjFormKeys),
/* harmony export */   "debug_AllObjIntListKeys": () => (/* binding */ debug_AllObjIntListKeys),
/* harmony export */   "debug_AllObjFloatListKeys": () => (/* binding */ debug_AllObjFloatListKeys),
/* harmony export */   "debug_AllObjStringListKeys": () => (/* binding */ debug_AllObjStringListKeys),
/* harmony export */   "debug_AllObjFormListKeys": () => (/* binding */ debug_AllObjFormListKeys),
/* harmony export */   "debug_GetIntObjectCount": () => (/* binding */ debug_GetIntObjectCount),
/* harmony export */   "debug_GetFloatObjectCount": () => (/* binding */ debug_GetFloatObjectCount),
/* harmony export */   "debug_GetStringObjectCount": () => (/* binding */ debug_GetStringObjectCount),
/* harmony export */   "debug_GetFormObjectCount": () => (/* binding */ debug_GetFormObjectCount),
/* harmony export */   "debug_GetIntListObjectCount": () => (/* binding */ debug_GetIntListObjectCount),
/* harmony export */   "debug_GetFloatListObjectCount": () => (/* binding */ debug_GetFloatListObjectCount),
/* harmony export */   "debug_GetStringListObjectCount": () => (/* binding */ debug_GetStringListObjectCount),
/* harmony export */   "debug_GetFormListObjectCount": () => (/* binding */ debug_GetFormListObjectCount),
/* harmony export */   "debug_GetIntObject": () => (/* binding */ debug_GetIntObject),
/* harmony export */   "debug_GetFloatObject": () => (/* binding */ debug_GetFloatObject),
/* harmony export */   "debug_GetStringObject": () => (/* binding */ debug_GetStringObject),
/* harmony export */   "debug_GetFormObject": () => (/* binding */ debug_GetFormObject),
/* harmony export */   "debug_GetIntListObject": () => (/* binding */ debug_GetIntListObject),
/* harmony export */   "debug_GetFloatListObject": () => (/* binding */ debug_GetFloatListObject),
/* harmony export */   "debug_GetStringListObject": () => (/* binding */ debug_GetStringListObject),
/* harmony export */   "debug_GetFormListObject": () => (/* binding */ debug_GetFormListObject),
/* harmony export */   "debug_GetIntKeysCount": () => (/* binding */ debug_GetIntKeysCount),
/* harmony export */   "debug_GetFloatKeysCount": () => (/* binding */ debug_GetFloatKeysCount),
/* harmony export */   "debug_GetStringKeysCount": () => (/* binding */ debug_GetStringKeysCount),
/* harmony export */   "debug_GetFormKeysCount": () => (/* binding */ debug_GetFormKeysCount),
/* harmony export */   "debug_GetIntListKeysCount": () => (/* binding */ debug_GetIntListKeysCount),
/* harmony export */   "debug_GetFloatListKeysCount": () => (/* binding */ debug_GetFloatListKeysCount),
/* harmony export */   "debug_GetStringListKeysCount": () => (/* binding */ debug_GetStringListKeysCount),
/* harmony export */   "debug_GetFormListKeysCount": () => (/* binding */ debug_GetFormListKeysCount),
/* harmony export */   "debug_GetIntKey": () => (/* binding */ debug_GetIntKey),
/* harmony export */   "debug_GetFloatKey": () => (/* binding */ debug_GetFloatKey),
/* harmony export */   "debug_GetStringKey": () => (/* binding */ debug_GetStringKey),
/* harmony export */   "debug_GetFormKey": () => (/* binding */ debug_GetFormKey),
/* harmony export */   "debug_GetIntListKey": () => (/* binding */ debug_GetIntListKey),
/* harmony export */   "debug_GetFloatListKey": () => (/* binding */ debug_GetFloatListKey),
/* harmony export */   "debug_GetStringListKey": () => (/* binding */ debug_GetStringListKey),
/* harmony export */   "debug_GetFormListKey": () => (/* binding */ debug_GetFormListKey),
/* harmony export */   "FileSetIntValue": () => (/* binding */ FileSetIntValue),
/* harmony export */   "FileSetFloatValue": () => (/* binding */ FileSetFloatValue),
/* harmony export */   "FileSetStringValue": () => (/* binding */ FileSetStringValue),
/* harmony export */   "FileSetFormValue": () => (/* binding */ FileSetFormValue),
/* harmony export */   "FileAdjustIntValue": () => (/* binding */ FileAdjustIntValue),
/* harmony export */   "FileAdjustFloatValue": () => (/* binding */ FileAdjustFloatValue),
/* harmony export */   "FileUnsetIntValue": () => (/* binding */ FileUnsetIntValue),
/* harmony export */   "FileUnsetFloatValue": () => (/* binding */ FileUnsetFloatValue),
/* harmony export */   "FileUnsetStringValue": () => (/* binding */ FileUnsetStringValue),
/* harmony export */   "FileUnsetFormValue": () => (/* binding */ FileUnsetFormValue),
/* harmony export */   "FileHasIntValue": () => (/* binding */ FileHasIntValue),
/* harmony export */   "FileHasFloatValue": () => (/* binding */ FileHasFloatValue),
/* harmony export */   "FileHasStringValue": () => (/* binding */ FileHasStringValue),
/* harmony export */   "FileHasFormValue": () => (/* binding */ FileHasFormValue),
/* harmony export */   "FileGetIntValue": () => (/* binding */ FileGetIntValue),
/* harmony export */   "FileGetFloatValue": () => (/* binding */ FileGetFloatValue),
/* harmony export */   "FileGetStringValue": () => (/* binding */ FileGetStringValue),
/* harmony export */   "FileGetFormValue": () => (/* binding */ FileGetFormValue),
/* harmony export */   "FileIntListAdd": () => (/* binding */ FileIntListAdd),
/* harmony export */   "FileFloatListAdd": () => (/* binding */ FileFloatListAdd),
/* harmony export */   "FileStringListAdd": () => (/* binding */ FileStringListAdd),
/* harmony export */   "FileFormListAdd": () => (/* binding */ FileFormListAdd),
/* harmony export */   "FileIntListAdjust": () => (/* binding */ FileIntListAdjust),
/* harmony export */   "FileFloatListAdjust": () => (/* binding */ FileFloatListAdjust),
/* harmony export */   "FileIntListRemove": () => (/* binding */ FileIntListRemove),
/* harmony export */   "FileFloatListRemove": () => (/* binding */ FileFloatListRemove),
/* harmony export */   "FileStringListRemove": () => (/* binding */ FileStringListRemove),
/* harmony export */   "FileFormListRemove": () => (/* binding */ FileFormListRemove),
/* harmony export */   "FileIntListGet": () => (/* binding */ FileIntListGet),
/* harmony export */   "FileFloatListGet": () => (/* binding */ FileFloatListGet),
/* harmony export */   "FileStringListGet": () => (/* binding */ FileStringListGet),
/* harmony export */   "FileFormListGet": () => (/* binding */ FileFormListGet),
/* harmony export */   "FileIntListSet": () => (/* binding */ FileIntListSet),
/* harmony export */   "FileFloatListSet": () => (/* binding */ FileFloatListSet),
/* harmony export */   "FileStringListSet": () => (/* binding */ FileStringListSet),
/* harmony export */   "FileFormListSet": () => (/* binding */ FileFormListSet),
/* harmony export */   "FileIntListClear": () => (/* binding */ FileIntListClear),
/* harmony export */   "FileFloatListClear": () => (/* binding */ FileFloatListClear),
/* harmony export */   "FileStringListClear": () => (/* binding */ FileStringListClear),
/* harmony export */   "FileFormListClear": () => (/* binding */ FileFormListClear),
/* harmony export */   "FileIntListRemoveAt": () => (/* binding */ FileIntListRemoveAt),
/* harmony export */   "FileFloatListRemoveAt": () => (/* binding */ FileFloatListRemoveAt),
/* harmony export */   "FileStringListRemoveAt": () => (/* binding */ FileStringListRemoveAt),
/* harmony export */   "FileFormListRemoveAt": () => (/* binding */ FileFormListRemoveAt),
/* harmony export */   "FileIntListInsert": () => (/* binding */ FileIntListInsert),
/* harmony export */   "FileFloatListInsert": () => (/* binding */ FileFloatListInsert),
/* harmony export */   "FileStringListInsert": () => (/* binding */ FileStringListInsert),
/* harmony export */   "FileFormListInsert": () => (/* binding */ FileFormListInsert),
/* harmony export */   "FileIntListCount": () => (/* binding */ FileIntListCount),
/* harmony export */   "FileFloatListCount": () => (/* binding */ FileFloatListCount),
/* harmony export */   "FileStringListCount": () => (/* binding */ FileStringListCount),
/* harmony export */   "FileFormListCount": () => (/* binding */ FileFormListCount),
/* harmony export */   "FileIntListFind": () => (/* binding */ FileIntListFind),
/* harmony export */   "FileFloatListFind": () => (/* binding */ FileFloatListFind),
/* harmony export */   "FileStringListFind": () => (/* binding */ FileStringListFind),
/* harmony export */   "FileFormListFind": () => (/* binding */ FileFormListFind),
/* harmony export */   "FileIntListHas": () => (/* binding */ FileIntListHas),
/* harmony export */   "FileFloatListHas": () => (/* binding */ FileFloatListHas),
/* harmony export */   "FileStringListHas": () => (/* binding */ FileStringListHas),
/* harmony export */   "FileFormListHas": () => (/* binding */ FileFormListHas),
/* harmony export */   "FileIntListSlice": () => (/* binding */ FileIntListSlice),
/* harmony export */   "FileFloatListSlice": () => (/* binding */ FileFloatListSlice),
/* harmony export */   "FileStringListSlice": () => (/* binding */ FileStringListSlice),
/* harmony export */   "FileFormListSlice": () => (/* binding */ FileFormListSlice),
/* harmony export */   "FileIntListResize": () => (/* binding */ FileIntListResize),
/* harmony export */   "FileFloatListResize": () => (/* binding */ FileFloatListResize),
/* harmony export */   "FileStringListResize": () => (/* binding */ FileStringListResize),
/* harmony export */   "FileFormListResize": () => (/* binding */ FileFormListResize),
/* harmony export */   "FileIntListCopy": () => (/* binding */ FileIntListCopy),
/* harmony export */   "FileFloatListCopy": () => (/* binding */ FileFloatListCopy),
/* harmony export */   "FileStringListCopy": () => (/* binding */ FileStringListCopy),
/* harmony export */   "FileFormListCopy": () => (/* binding */ FileFormListCopy),
/* harmony export */   "debug_SaveFile": () => (/* binding */ debug_SaveFile),
/* harmony export */   "debug_FileGetIntKeysCount": () => (/* binding */ debug_FileGetIntKeysCount),
/* harmony export */   "debug_FileGetFloatKeysCount": () => (/* binding */ debug_FileGetFloatKeysCount),
/* harmony export */   "debug_FileGetStringKeysCount": () => (/* binding */ debug_FileGetStringKeysCount),
/* harmony export */   "debug_FileGetIntListKeysCount": () => (/* binding */ debug_FileGetIntListKeysCount),
/* harmony export */   "debug_FileGetFloatListKeysCount": () => (/* binding */ debug_FileGetFloatListKeysCount),
/* harmony export */   "debug_FileGetStringListKeysCount": () => (/* binding */ debug_FileGetStringListKeysCount),
/* harmony export */   "debug_FileGetIntKey": () => (/* binding */ debug_FileGetIntKey),
/* harmony export */   "debug_FileGetFloatKey": () => (/* binding */ debug_FileGetFloatKey),
/* harmony export */   "debug_FileGetStringKey": () => (/* binding */ debug_FileGetStringKey),
/* harmony export */   "debug_FileGetIntListKey": () => (/* binding */ debug_FileGetIntListKey),
/* harmony export */   "debug_FileGetFloatListKey": () => (/* binding */ debug_FileGetFloatListKey),
/* harmony export */   "debug_FileGetStringListKey": () => (/* binding */ debug_FileGetStringListKey),
/* harmony export */   "debug_FileDeleteAllValues": () => (/* binding */ debug_FileDeleteAllValues),
/* harmony export */   "debug_SetDebugMode": () => (/* binding */ debug_SetDebugMode),
/* harmony export */   "ImportFile": () => (/* binding */ ImportFile),
/* harmony export */   "ExportFile": () => (/* binding */ ExportFile)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/*
==============================================
Typescript definitions for v4.2
==============================================

This file was automatically generated by Papyrus-2-Typescript.exe
https://github.com/CarlosLeyvaAyala/Papyrus-2-Typescript

The program has no way to know the intention of the humans that made
the scripts, so it's always advisable to manually check all generated
files to make sure everything is declared as it should.

Take note the program assumes this script exists in some subfolder
to the folder where `skyrimPlatform.ts` is found, otherwise you'll get
"Cannot find module..." type of errors.

If you want to have this script in some other place, just change the
relative path of each `import`.
*/

var sn = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.StorageUtil;
/** MOD AUTHORS, READ!

    This script contains functions for saving and loading any amount of int, float, form and string values
    by name on a form or globally. These values can be accessed and changed from any mod which allows
    mods to become compatible with each other without adding any requirements to the other mod or its version
    other than this plugin.

    Values will stay on forms or globally until they are Unset or Cleared in case of lists. If value
    is set on a form and the object is deleted then THE value will be removed when saving game.
    If you are done with using a certain variable you should use Unset or Clear function to remove them
    but it is not required.

    Saving MCM config values here would allow other mods to change your mod settings which may
    be useful. It should also allow you to change MCM config script without worrying about versioning
    since there are no new variables in the script itself.

    Functions that start with File in the name will save values to a separate file, so that you can
    access the same values from all savegames. This may be useful for configuration settings.
   (FILE FUNCTIONS ARE DEPRECATED! USE JSONUTIL.PSC INSTEAD)

    Saved values take very little memory - expect to use less than 500 KB of physical memory even when
    setting thousands of values.

    Value names are not case sensitive, that means GetIntValue(none, "abc") == GetIntValue(none, "aBC").

    All values are separated from each other by type! That means SetIntValue(none, "abc", 1) and
    SetFloatValue(none, "abc", 2.0) create separate entries and aren't affected by each other.
    StorageUtil.SetIntValue(none, "myValue", 1)
    StorageUtil.SetFloatValue(none, "myValue", 5.0)
    int value = StorageUtil.GetIntValue(none, "myValue")
    value == 1 ; true
    value == 5 ; false

    When choosing names for variables try to remember that all mods access the same storage, so if you
    create a variable with name "Name" then many other mods could use the same variable but in different
    ways that lead to unwanted behavior. It is recommended to prefix the variable with your mod name,
    that way you can be sure nobody else will try to use the same variable in their mod. For example
    realistic needs and diseases might set hunger as "rnd_hungervalue".

    You can also use this storage to make your mod functions available to other mods, for example if
    your mod has a function that sets an Actor to be invisible you could add a script that checks:
    int i = StorageUtil.FormListCount(none, "MakeInvisible")
    while(i > 0)
        i--
        Actor make = StorageUtil.FormListGet(none, "MakeInvisible", i) as Actor
        if(make)
            MyScriptFunction(make)
        endif
        StorageUtil.FormListRemoveAt(none, "MakeInvisible", i)
    endwhile
    And the other mod could write:
    StorageUtil.FormListAdd(none, "MakeInvisible", myActor)
    to make someone invisible using your mod. But if your mod isn't present then nothing happens.
    This is just an example, I'm sure you can find better ways to implement compatibility, it would
    help to include a documentation for other modders if you do.
/**





/**
    Storage functions - values in save game file. */
/** Set int/float/string/Form value globally or on any form by name and return
   the value passed, or as uninitialized variable if invalid keys given.

   ObjKey: form to save on. Set none to save globally.
   KeyName: name of value.
   value: value to set to the given keys. If zero, empty, or none are given, the key will be unset. */
var SetIntValue = function (ObjKey, KeyName, value) { return sn.SetIntValue(ObjKey, KeyName, value); };
var SetFloatValue = function (ObjKey, KeyName, value) { return sn.SetFloatValue(ObjKey, KeyName, value); };
var SetStringValue = function (ObjKey, KeyName, value) { return sn.SetStringValue(ObjKey, KeyName, value); };
var SetFormValue = function (ObjKey, KeyName, value) { return sn.SetFormValue(ObjKey, KeyName, value); };
/** Remove a previously set int/float/string/Form value on an form or globally and
if successful. This will return false if value didn't exist.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value. */
var UnsetIntValue = function (ObjKey, KeyName) { return sn.UnsetIntValue(ObjKey, KeyName); };
var UnsetFloatValue = function (ObjKey, KeyName) { return sn.UnsetFloatValue(ObjKey, KeyName); };
var UnsetStringValue = function (ObjKey, KeyName) { return sn.UnsetStringValue(ObjKey, KeyName); };
var UnsetFormValue = function (ObjKey, KeyName) { return sn.UnsetFormValue(ObjKey, KeyName); };
/** Check if int/float/string/Form value has been set on form or globally.

   ObjKey: form to check on. Set none to check global value.
   KeyName: name of value. */
var HasIntValue = function (ObjKey, KeyName) { return sn.HasIntValue(ObjKey, KeyName); };
var HasFloatValue = function (ObjKey, KeyName) { return sn.HasFloatValue(ObjKey, KeyName); };
var HasStringValue = function (ObjKey, KeyName) { return sn.HasStringValue(ObjKey, KeyName); };
var HasFormValue = function (ObjKey, KeyName) { return sn.HasFormValue(ObjKey, KeyName); };
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var GetIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.GetIntValue(ObjKey, KeyName, missing);
};
var GetFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.GetFloatValue(ObjKey, KeyName, missing);
};
var GetStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.GetStringValue(ObjKey, KeyName, missing);
};
var GetFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.GetFormValue(ObjKey, KeyName, missing);
};
/** Plucks a previously saved int/float/string/Form value on form or globally.
   Returning the value stored, then removing it from storage.

   ObjKey: form to pluck from. Set none to get global value.
   KeyName: name of value.
   [optional] missing: if value has not been set, return this value instead. */
var PluckIntValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.PluckIntValue(ObjKey, KeyName, missing);
};
var PluckFloatValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.PluckFloatValue(ObjKey, KeyName, missing);
};
var PluckStringValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.PluckStringValue(ObjKey, KeyName, missing);
};
var PluckFormValue = function (ObjKey, KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.PluckFormValue(ObjKey, KeyName, missing);
};
/** Get previously saved int/float/string/Form value on form or globally.

   ObjKey: form to get from. Set none to get global value.
   KeyName: name of value.
   amount: +/- the amount to adjust the current value by

   given keys will be initialized to given amount if it does not exist */
var AdjustIntValue = function (ObjKey, KeyName, amount) { return sn.AdjustIntValue(ObjKey, KeyName, amount); };
var AdjustFloatValue = function (ObjKey, KeyName, amount) { return sn.AdjustFloatValue(ObjKey, KeyName, amount); };
/** Add an int/float/string/Form to a list on form or globally and return
   the value's new index. Index can be -1 if we were unable to add
   the value.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   value: value to add.
   [optional] allowDuplicate: allow adding value to list if this value already exists in the list. */
var IntListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.IntListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FloatListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FloatListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var StringListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.StringListAdd(ObjKey, KeyName, value, allowDuplicate);
};
var FormListAdd = function (ObjKey, KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FormListAdd(ObjKey, KeyName, value, allowDuplicate);
};
/** Get a value from list by index on form or globally.
   This will return 0 as value if there was a problem.

   ObjKey: form to get value on. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListGet = function (ObjKey, KeyName, index) { return sn.IntListGet(ObjKey, KeyName, index); };
var FloatListGet = function (ObjKey, KeyName, index) { return sn.FloatListGet(ObjKey, KeyName, index); };
var StringListGet = function (ObjKey, KeyName, index) { return sn.StringListGet(ObjKey, KeyName, index); };
var FormListGet = function (ObjKey, KeyName, index) { return sn.FormListGet(ObjKey, KeyName, index); };
/** Set a value in list by index on form or globally.
   This will return the previous value or 0 if there was a problem.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   value: value to set to. */
var IntListSet = function (ObjKey, KeyName, index, value) { return sn.IntListSet(ObjKey, KeyName, index, value); };
var FloatListSet = function (ObjKey, KeyName, index, value) { return sn.FloatListSet(ObjKey, KeyName, index, value); };
var StringListSet = function (ObjKey, KeyName, index, value) { return sn.StringListSet(ObjKey, KeyName, index, value); };
var FormListSet = function (ObjKey, KeyName, index, value) { return sn.FormListSet(ObjKey, KeyName, index, value); };
/** Plucks a value from list by index on form or globally.
   The index is removed from the list's storage after returning it's value.

   ObjKey: form to pluck value from. Set none to get global list value.
   KeyName: name of list.
   index: index of value in the list.
   [optional] missing: if index has not been set, return this value instead. */
var IntListPluck = function (ObjKey, KeyName, index, missing) { return sn.IntListPluck(ObjKey, KeyName, index, missing); };
var FloatListPluck = function (ObjKey, KeyName, index, missing) { return sn.FloatListPluck(ObjKey, KeyName, index, missing); };
var StringListPluck = function (ObjKey, KeyName, index, missing) { return sn.StringListPluck(ObjKey, KeyName, index, missing); };
var FormListPluck = function (ObjKey, KeyName, index, missing) { return sn.FormListPluck(ObjKey, KeyName, index, missing); };
/** Gets the value of the very first element in a list, and subsequently removes the index afterward.

   ObjKey: form to shift value from. Set none to get global list value.
   KeyName: name of list to shift it's first value from. */
var IntListShift = function (ObjKey, KeyName) { return sn.IntListShift(ObjKey, KeyName); };
var FloatListShift = function (ObjKey, KeyName) { return sn.FloatListShift(ObjKey, KeyName); };
var StringListShift = function (ObjKey, KeyName) { return sn.StringListShift(ObjKey, KeyName); };
var FormListShift = function (ObjKey, KeyName) { return sn.FormListShift(ObjKey, KeyName); };
/** Gets the value of the very last element in a list, and subsequently removes the index afterward.

   ObjKey: form to pop value from. Set none to get global list value.
   KeyName: name of list to pop off it's last value. */
var IntListPop = function (ObjKey, KeyName) { return sn.IntListPop(ObjKey, KeyName); };
var FloatListPop = function (ObjKey, KeyName) { return sn.FloatListPop(ObjKey, KeyName); };
var StringListPop = function (ObjKey, KeyName) { return sn.StringListPop(ObjKey, KeyName); };
var FormListPop = function (ObjKey, KeyName) { return sn.FormListPop(ObjKey, KeyName); };
/** Adjust the existing value of a list by the given amount.

   ObjKey: form to set value on. Set none to set global list value.
   KeyName: name of list.
   index: index of value in the list.
   amount: +/- the amount to adjust the lists current index value by.

s 0 if index does not exists */
var IntListAdjust = function (ObjKey, KeyName, index, amount) { return sn.IntListAdjust(ObjKey, KeyName, index, amount); };
var FloatListAdjust = function (ObjKey, KeyName, index, amount) { return sn.FloatListAdjust(ObjKey, KeyName, index, amount); };
/** Insert an int/float/string/Form to a list on form or globally and return
   if successful.

   ObjKey: form to add to. Set none to add global value.
   KeyName: name of value.
   index: position in list to put the value. 0 is first entry in list.
   value: value to add. */
var IntListInsert = function (ObjKey, KeyName, index, value) { return sn.IntListInsert(ObjKey, KeyName, index, value); };
var FloatListInsert = function (ObjKey, KeyName, index, value) { return sn.FloatListInsert(ObjKey, KeyName, index, value); };
var StringListInsert = function (ObjKey, KeyName, index, value) { return sn.StringListInsert(ObjKey, KeyName, index, value); };
var FormListInsert = function (ObjKey, KeyName, index, value) { return sn.FormListInsert(ObjKey, KeyName, index, value); };
/** Remove a previously added int/float/string/Form value from a list on form
   or globally and return how many instances of this value were removed.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of value.
   value: value to remove.
   [optional] allowInstances: remove all instances of this value in a list. */
var IntListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.IntListRemove(ObjKey, KeyName, value, allInstances);
};
var FloatListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FloatListRemove(ObjKey, KeyName, value, allInstances);
};
var StringListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.StringListRemove(ObjKey, KeyName, value, allInstances);
};
var FormListRemove = function (ObjKey, KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FormListRemove(ObjKey, KeyName, value, allInstances);
};
/** Clear a list of values (unset) on an form or globally and
the previous size of list.

   ObjKey: form to clear on. Set none to clear global list.
   KeyName: name of list. */
var IntListClear = function (ObjKey, KeyName) { return sn.IntListClear(ObjKey, KeyName); };
var FloatListClear = function (ObjKey, KeyName) { return sn.FloatListClear(ObjKey, KeyName); };
var StringListClear = function (ObjKey, KeyName) { return sn.StringListClear(ObjKey, KeyName); };
var FormListClear = function (ObjKey, KeyName) { return sn.FormListClear(ObjKey, KeyName); };
/** Remove a value from list by index on form or globally and
if we were successful in doing so.

   ObjKey: form to remove from. Set none to remove global value.
   KeyName: name of list.
   index: index of value in the list. */
var IntListRemoveAt = function (ObjKey, KeyName, index) { return sn.IntListRemoveAt(ObjKey, KeyName, index); };
var FloatListRemoveAt = function (ObjKey, KeyName, index) { return sn.FloatListRemoveAt(ObjKey, KeyName, index); };
var StringListRemoveAt = function (ObjKey, KeyName, index) { return sn.StringListRemoveAt(ObjKey, KeyName, index); };
var FormListRemoveAt = function (ObjKey, KeyName, index) { return sn.FormListRemoveAt(ObjKey, KeyName, index); };
/** Get size of a list on form or globally.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list. */
var IntListCount = function (ObjKey, KeyName) { return sn.IntListCount(ObjKey, KeyName); };
var FloatListCount = function (ObjKey, KeyName) { return sn.FloatListCount(ObjKey, KeyName); };
var StringListCount = function (ObjKey, KeyName) { return sn.StringListCount(ObjKey, KeyName); };
var FormListCount = function (ObjKey, KeyName) { return sn.FormListCount(ObjKey, KeyName); };
/** Get the number of occurrences of a specific value within a list.

   ObjKey: form to check on. Set none to check global list.
   KeyName: name of list.
   value: value to look for.
   [optional] exclude: if true, function will return number of elements NOT equal to value. */
var IntListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.IntListCountValue(ObjKey, KeyName, value, exclude);
};
var FloatListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FloatListCountValue(ObjKey, KeyName, value, exclude);
};
var StringListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.StringListCountValue(ObjKey, KeyName, value, exclude);
};
var FormListCountValue = function (ObjKey, KeyName, value, exclude) {
    if (exclude === void 0) { exclude = false; }
    return sn.FormListCountValue(ObjKey, KeyName, value, exclude);
};
/** Find a value in list on form or globally and return its
   index or -1 if value was not found.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListFind = function (ObjKey, KeyName, value) { return sn.IntListFind(ObjKey, KeyName, value); };
var FloatListFind = function (ObjKey, KeyName, value) { return sn.FloatListFind(ObjKey, KeyName, value); };
var StringListFind = function (ObjKey, KeyName, value) { return sn.StringListFind(ObjKey, KeyName, value); };
var FormListFind = function (ObjKey, KeyName, value) { return sn.FormListFind(ObjKey, KeyName, value); };
/** Find if a value in list on form or globally exists, true if it exists,
   false if it doesn't.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   value: value to search. */
var IntListHas = function (ObjKey, KeyName, value) { return sn.IntListHas(ObjKey, KeyName, value); };
var FloatListHas = function (ObjKey, KeyName, value) { return sn.FloatListHas(ObjKey, KeyName, value); };
var StringListHas = function (ObjKey, KeyName, value) { return sn.StringListHas(ObjKey, KeyName, value); };
var FormListHas = function (ObjKey, KeyName, value) { return sn.FormListHas(ObjKey, KeyName, value); };
/** Sort an int/float/string/Form list by values in ascending order.

   ObjKey: form to sort on. Set none for global value.
   KeyName: name of value. */
var IntListSort = function (ObjKey, KeyName) { return sn.IntListSort(ObjKey, KeyName); };
var FloatListSort = function (ObjKey, KeyName) { return sn.FloatListSort(ObjKey, KeyName); };
var StringListSort = function (ObjKey, KeyName) { return sn.StringListSort(ObjKey, KeyName); };
var FormListSort = function (ObjKey, KeyName) { return sn.FormListSort(ObjKey, KeyName); };
/** Fills the given input array with the values of the list on form or globally,
   will fill the array until either the array or list runs out of valid indexes

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   slice[]: an initialized array set to the slice size you want, i.e. int[] slice = new int[10]
   [optional] startIndex: the starting list index you want to start filling your slice array with */
var IntListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.IntListSlice(ObjKey, KeyName, slice, startIndex);
};
var FloatListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FloatListSlice(ObjKey, KeyName, slice, startIndex);
};
var StringListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.StringListSlice(ObjKey, KeyName, slice, startIndex);
};
var FormListSlice = function (ObjKey, KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FormListSlice(ObjKey, KeyName, slice, startIndex);
};
/** Sizes the given list to a set number of elements. If the list exists already it will be truncated
   when given fewer elements, or resized to the appropriate length with the filler argument being used as
   the default values

   Returns the number of elements truncated (signed) or added (unsigned) onto the list.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   toLength: The size you want to change the list to. Max length when using this function is 500.
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.IntListResize(ObjKey, KeyName, toLength, filler);
};
var FloatListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FloatListResize(ObjKey, KeyName, toLength, filler);
};
var StringListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.StringListResize(ObjKey, KeyName, toLength, filler);
};
var FormListResize = function (ObjKey, KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FormListResize(ObjKey, KeyName, toLength, filler);
};
/** Creates a copy of array on the given storage list at the given object+key,
   overwriting any list that might already exists.

   Returns true on success.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   copy[]: The papyrus array with the content you wish to copy over into StorageUtil
   [optional] filler: When adding empty elements to the list this will be used as the default value */
var IntListCopy = function (ObjKey, KeyName, copy) { return sn.IntListCopy(ObjKey, KeyName, copy); };
var FloatListCopy = function (ObjKey, KeyName, copy) { return sn.FloatListCopy(ObjKey, KeyName, copy); };
var StringListCopy = function (ObjKey, KeyName, copy) { return sn.StringListCopy(ObjKey, KeyName, copy); };
var FormListCopy = function (ObjKey, KeyName, copy) { return sn.FormListCopy(ObjKey, KeyName, copy); };
/** Outputs the values currently stored by the given object+key.

   Returns a new array containing the values.

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list. */
var IntListToArray = function (ObjKey, KeyName) { return sn.IntListToArray(ObjKey, KeyName); };
var FloatListToArray = function (ObjKey, KeyName) { return sn.FloatListToArray(ObjKey, KeyName); };
var StringListToArray = function (ObjKey, KeyName) { return sn.StringListToArray(ObjKey, KeyName); };
var FormListToArray = function (ObjKey, KeyName) { return sn.FormListToArray(ObjKey, KeyName); };
/** Returns array of forms from list that have (or optionally don't have) the specified form types.
   For valid list of form types, see FormType.psc or http://www.creationkit.com/GetType_-_Form

   ObjKey: form to find value on. Set none to find global list value.
   KeyName: name of list.
   FormTypeIDs[]: The int papyrus array with all the form types you wish to filter for
   [optional] ReturnMatching: By default, TRUE, the output Form[] array will contain forms from list that match the form types
                              If set to FALSE, inverts the resulting array with forms that have a type that DO NOT match. */
var FormListFilterByTypes = function (ObjKey, KeyName, FormTypeIDs, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByTypes(ObjKey, KeyName, FormTypeIDs, ReturnMatching);
};
// Convenience version of FormListFilterByTypes() for when only getting a single type.
var FormListFilterByType = function (ObjKey, KeyName, FormTypeID, ReturnMatching) {
    if (ReturnMatching === void 0) { ReturnMatching = true; }
    return sn.FormListFilterByType(ObjKey, KeyName, FormTypeID, ReturnMatching);
};
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountIntValuePrefix = function (PrefixKey) { return sn.CountIntValuePrefix(PrefixKey); };
var CountFloatValuePrefix = function (PrefixKey) { return sn.CountFloatValuePrefix(PrefixKey); };
var CountStringValuePrefix = function (PrefixKey) { return sn.CountStringValuePrefix(PrefixKey); };
var CountFormValuePrefix = function (PrefixKey) { return sn.CountFormValuePrefix(PrefixKey); };
var CountIntListPrefix = function (PrefixKey) { return sn.CountIntListPrefix(PrefixKey); };
var CountFloatListPrefix = function (PrefixKey) { return sn.CountFloatListPrefix(PrefixKey); };
var CountStringListPrefix = function (PrefixKey) { return sn.CountStringListPrefix(PrefixKey); };
var CountFormListPrefix = function (PrefixKey) { return sn.CountFormListPrefix(PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllPrefix = function (PrefixKey) { return sn.CountAllPrefix(PrefixKey); };
/** Counts each type of of any KeyName that starts with a given string prefix on all objects.

   ObjKey: form to perform the prefix count on.
   PrefixKey: The string a KeyName must start with to be counted. Cannot be empty. */
var CountObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntValuePrefix(ObjKey, PrefixKey); };
var CountObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatValuePrefix(ObjKey, PrefixKey); };
var CountObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringValuePrefix(ObjKey, PrefixKey); };
var CountObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormValuePrefix(ObjKey, PrefixKey); };
var CountObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjIntListPrefix(ObjKey, PrefixKey); };
var CountObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFloatListPrefix(ObjKey, PrefixKey); };
var CountObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjStringListPrefix(ObjKey, PrefixKey); };
var CountObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.CountObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix counts in one go.
var CountAllObjPrefix = function (ObjKey, PrefixKey) { return sn.CountAllObjPrefix(ObjKey, PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on all objects.
   Returns the number of values/lists that were unset.

   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearIntValuePrefix = function (PrefixKey) { return sn.ClearIntValuePrefix(PrefixKey); };
var ClearFloatValuePrefix = function (PrefixKey) { return sn.ClearFloatValuePrefix(PrefixKey); };
var ClearStringValuePrefix = function (PrefixKey) { return sn.ClearStringValuePrefix(PrefixKey); };
var ClearFormValuePrefix = function (PrefixKey) { return sn.ClearFormValuePrefix(PrefixKey); };
var ClearIntListPrefix = function (PrefixKey) { return sn.ClearIntListPrefix(PrefixKey); };
var ClearFloatListPrefix = function (PrefixKey) { return sn.ClearFloatListPrefix(PrefixKey); };
var ClearStringListPrefix = function (PrefixKey) { return sn.ClearStringListPrefix(PrefixKey); };
var ClearFormListPrefix = function (PrefixKey) { return sn.ClearFormListPrefix(PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllPrefix = function (PrefixKey) { return sn.ClearAllPrefix(PrefixKey); };
/** Clears each type of of any KeyName that starts with a given string prefix on specific objects.
   Returns the number of values/lists that were unset.

   ObjKey: form to perform the prefix clear on.
   PrefixKey: The string a KeyName must start with to be cleared. Cannot be empty. */
var ClearObjIntValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntValuePrefix(ObjKey, PrefixKey); };
var ClearObjFloatValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatValuePrefix(ObjKey, PrefixKey); };
var ClearObjStringValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringValuePrefix(ObjKey, PrefixKey); };
var ClearObjFormValuePrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormValuePrefix(ObjKey, PrefixKey); };
var ClearObjIntListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjIntListPrefix(ObjKey, PrefixKey); };
var ClearObjFloatListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFloatListPrefix(ObjKey, PrefixKey); };
var ClearObjStringListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjStringListPrefix(ObjKey, PrefixKey); };
var ClearObjFormListPrefix = function (ObjKey, PrefixKey) { return sn.ClearObjFormListPrefix(ObjKey, PrefixKey); };
// Performs all of the above prefix clears in one go.
var ClearAllObjPrefix = function (ObjKey, PrefixKey) { return sn.ClearAllObjPrefix(ObjKey, PrefixKey); };
/** Debug functions - can be helpful to find problems or for development. */
var debug_DeleteValues = function (ObjKey) { return sn.debug_DeleteValues(ObjKey); };
var debug_DeleteAllValues = function () { return sn.debug_DeleteAllValues(); };
var debug_Cleanup = function () { return sn.debug_Cleanup(); };
var debug_AllIntObjs = function () { return sn.debug_AllIntObjs(); };
var debug_AllFloatObjs = function () { return sn.debug_AllFloatObjs(); };
var debug_AllStringObjs = function () { return sn.debug_AllStringObjs(); };
var debug_AllFormObjs = function () { return sn.debug_AllFormObjs(); };
var debug_AllIntListObjs = function () { return sn.debug_AllIntListObjs(); };
var debug_AllFloatListObjs = function () { return sn.debug_AllFloatListObjs(); };
var debug_AllStringListObjs = function () { return sn.debug_AllStringListObjs(); };
var debug_AllFormListObjs = function () { return sn.debug_AllFormListObjs(); };
var debug_AllObjIntKeys = function (ObjKey) { return sn.debug_AllObjIntKeys(ObjKey); };
var debug_AllObjFloatKeys = function (ObjKey) { return sn.debug_AllObjFloatKeys(ObjKey); };
var debug_AllObjStringKeys = function (ObjKey) { return sn.debug_AllObjStringKeys(ObjKey); };
var debug_AllObjFormKeys = function (ObjKey) { return sn.debug_AllObjFormKeys(ObjKey); };
var debug_AllObjIntListKeys = function (ObjKey) { return sn.debug_AllObjIntListKeys(ObjKey); };
var debug_AllObjFloatListKeys = function (ObjKey) { return sn.debug_AllObjFloatListKeys(ObjKey); };
var debug_AllObjStringListKeys = function (ObjKey) { return sn.debug_AllObjStringListKeys(ObjKey); };
var debug_AllObjFormListKeys = function (ObjKey) { return sn.debug_AllObjFormListKeys(ObjKey); };
var debug_GetIntObjectCount = function () { return sn.debug_GetIntObjectCount(); };
var debug_GetFloatObjectCount = function () { return sn.debug_GetFloatObjectCount(); };
var debug_GetStringObjectCount = function () { return sn.debug_GetStringObjectCount(); };
var debug_GetFormObjectCount = function () { return sn.debug_GetFormObjectCount(); };
var debug_GetIntListObjectCount = function () { return sn.debug_GetIntListObjectCount(); };
var debug_GetFloatListObjectCount = function () { return sn.debug_GetFloatListObjectCount(); };
var debug_GetStringListObjectCount = function () { return sn.debug_GetStringListObjectCount(); };
var debug_GetFormListObjectCount = function () { return sn.debug_GetFormListObjectCount(); };
var debug_GetIntObject = function (index) { return sn.debug_GetIntObject(index); };
var debug_GetFloatObject = function (index) { return sn.debug_GetFloatObject(index); };
var debug_GetStringObject = function (index) { return sn.debug_GetStringObject(index); };
var debug_GetFormObject = function (index) { return sn.debug_GetFormObject(index); };
var debug_GetIntListObject = function (index) { return sn.debug_GetIntListObject(index); };
var debug_GetFloatListObject = function (index) { return sn.debug_GetFloatListObject(index); };
var debug_GetStringListObject = function (index) { return sn.debug_GetStringListObject(index); };
var debug_GetFormListObject = function (index) { return sn.debug_GetFormListObject(index); };
var debug_GetIntKeysCount = function (ObjKey) { return sn.debug_GetIntKeysCount(ObjKey); };
var debug_GetFloatKeysCount = function (ObjKey) { return sn.debug_GetFloatKeysCount(ObjKey); };
var debug_GetStringKeysCount = function (ObjKey) { return sn.debug_GetStringKeysCount(ObjKey); };
var debug_GetFormKeysCount = function (ObjKey) { return sn.debug_GetFormKeysCount(ObjKey); };
var debug_GetIntListKeysCount = function (ObjKey) { return sn.debug_GetIntListKeysCount(ObjKey); };
var debug_GetFloatListKeysCount = function (ObjKey) { return sn.debug_GetFloatListKeysCount(ObjKey); };
var debug_GetStringListKeysCount = function (ObjKey) { return sn.debug_GetStringListKeysCount(ObjKey); };
var debug_GetFormListKeysCount = function (ObjKey) { return sn.debug_GetFormListKeysCount(ObjKey); };
var debug_GetIntKey = function (ObjKey, index) { return sn.debug_GetIntKey(ObjKey, index); };
var debug_GetFloatKey = function (ObjKey, index) { return sn.debug_GetFloatKey(ObjKey, index); };
var debug_GetStringKey = function (ObjKey, index) { return sn.debug_GetStringKey(ObjKey, index); };
var debug_GetFormKey = function (ObjKey, index) { return sn.debug_GetFormKey(ObjKey, index); };
var debug_GetIntListKey = function (ObjKey, index) { return sn.debug_GetIntListKey(ObjKey, index); };
var debug_GetFloatListKey = function (ObjKey, index) { return sn.debug_GetFloatListKey(ObjKey, index); };
var debug_GetStringListKey = function (ObjKey, index) { return sn.debug_GetStringListKey(ObjKey, index); };
var debug_GetFormListKey = function (ObjKey, index) { return sn.debug_GetFormListKey(ObjKey, index); };
/** Storage functions - separate file. These are shared in all save games. Values are loaded and saved
   when savegame is loaded or saved.

   DEPRECATED v2.9: Replaced by JsonUtil functions. Existing functions here have been proxied to a shared
   json file to maintain compatibility. */
var FileSetIntValue = function (KeyName, value) { return sn.FileSetIntValue(KeyName, value); };
var FileSetFloatValue = function (KeyName, value) { return sn.FileSetFloatValue(KeyName, value); };
var FileSetStringValue = function (KeyName, value) { return sn.FileSetStringValue(KeyName, value); };
var FileSetFormValue = function (KeyName, value) { return sn.FileSetFormValue(KeyName, value); };
var FileAdjustIntValue = function (KeyName, amount) { return sn.FileAdjustIntValue(KeyName, amount); };
var FileAdjustFloatValue = function (KeyName, amount) { return sn.FileAdjustFloatValue(KeyName, amount); };
var FileUnsetIntValue = function (KeyName) { return sn.FileUnsetIntValue(KeyName); };
var FileUnsetFloatValue = function (KeyName) { return sn.FileUnsetFloatValue(KeyName); };
var FileUnsetStringValue = function (KeyName) { return sn.FileUnsetStringValue(KeyName); };
var FileUnsetFormValue = function (KeyName) { return sn.FileUnsetFormValue(KeyName); };
var FileHasIntValue = function (KeyName) { return sn.FileHasIntValue(KeyName); };
var FileHasFloatValue = function (KeyName) { return sn.FileHasFloatValue(KeyName); };
var FileHasStringValue = function (KeyName) { return sn.FileHasStringValue(KeyName); };
var FileHasFormValue = function (KeyName) { return sn.FileHasFormValue(KeyName); };
var FileGetIntValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0; }
    return sn.FileGetIntValue(KeyName, missing);
};
var FileGetFloatValue = function (KeyName, missing) {
    if (missing === void 0) { missing = 0.0; }
    return sn.FileGetFloatValue(KeyName, missing);
};
var FileGetStringValue = function (KeyName, missing) {
    if (missing === void 0) { missing = ""; }
    return sn.FileGetStringValue(KeyName, missing);
};
var FileGetFormValue = function (KeyName, missing) {
    if (missing === void 0) { missing = null; }
    return sn.FileGetFormValue(KeyName, missing);
};
var FileIntListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileIntListAdd(KeyName, value, allowDuplicate);
};
var FileFloatListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFloatListAdd(KeyName, value, allowDuplicate);
};
var FileStringListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileStringListAdd(KeyName, value, allowDuplicate);
};
var FileFormListAdd = function (KeyName, value, allowDuplicate) {
    if (allowDuplicate === void 0) { allowDuplicate = true; }
    return sn.FileFormListAdd(KeyName, value, allowDuplicate);
};
var FileIntListAdjust = function (KeyName, index, amount) { return sn.FileIntListAdjust(KeyName, index, amount); };
var FileFloatListAdjust = function (KeyName, index, amount) { return sn.FileFloatListAdjust(KeyName, index, amount); };
var FileIntListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileIntListRemove(KeyName, value, allInstances);
};
var FileFloatListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFloatListRemove(KeyName, value, allInstances);
};
var FileStringListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileStringListRemove(KeyName, value, allInstances);
};
var FileFormListRemove = function (KeyName, value, allInstances) {
    if (allInstances === void 0) { allInstances = false; }
    return sn.FileFormListRemove(KeyName, value, allInstances);
};
var FileIntListGet = function (KeyName, index) { return sn.FileIntListGet(KeyName, index); };
var FileFloatListGet = function (KeyName, index) { return sn.FileFloatListGet(KeyName, index); };
var FileStringListGet = function (KeyName, index) { return sn.FileStringListGet(KeyName, index); };
var FileFormListGet = function (KeyName, index) { return sn.FileFormListGet(KeyName, index); };
var FileIntListSet = function (KeyName, index, value) { return sn.FileIntListSet(KeyName, index, value); };
var FileFloatListSet = function (KeyName, index, value) { return sn.FileFloatListSet(KeyName, index, value); };
var FileStringListSet = function (KeyName, index, value) { return sn.FileStringListSet(KeyName, index, value); };
var FileFormListSet = function (KeyName, index, value) { return sn.FileFormListSet(KeyName, index, value); };
var FileIntListClear = function (KeyName) { return sn.FileIntListClear(KeyName); };
var FileFloatListClear = function (KeyName) { return sn.FileFloatListClear(KeyName); };
var FileStringListClear = function (KeyName) { return sn.FileStringListClear(KeyName); };
var FileFormListClear = function (KeyName) { return sn.FileFormListClear(KeyName); };
var FileIntListRemoveAt = function (KeyName, index) { return sn.FileIntListRemoveAt(KeyName, index); };
var FileFloatListRemoveAt = function (KeyName, index) { return sn.FileFloatListRemoveAt(KeyName, index); };
var FileStringListRemoveAt = function (KeyName, index) { return sn.FileStringListRemoveAt(KeyName, index); };
var FileFormListRemoveAt = function (KeyName, index) { return sn.FileFormListRemoveAt(KeyName, index); };
var FileIntListInsert = function (KeyName, index, value) { return sn.FileIntListInsert(KeyName, index, value); };
var FileFloatListInsert = function (KeyName, index, value) { return sn.FileFloatListInsert(KeyName, index, value); };
var FileStringListInsert = function (KeyName, index, value) { return sn.FileStringListInsert(KeyName, index, value); };
var FileFormListInsert = function (KeyName, index, value) { return sn.FileFormListInsert(KeyName, index, value); };
var FileIntListCount = function (KeyName) { return sn.FileIntListCount(KeyName); };
var FileFloatListCount = function (KeyName) { return sn.FileFloatListCount(KeyName); };
var FileStringListCount = function (KeyName) { return sn.FileStringListCount(KeyName); };
var FileFormListCount = function (KeyName) { return sn.FileFormListCount(KeyName); };
var FileIntListFind = function (KeyName, value) { return sn.FileIntListFind(KeyName, value); };
var FileFloatListFind = function (KeyName, value) { return sn.FileFloatListFind(KeyName, value); };
var FileStringListFind = function (KeyName, value) { return sn.FileStringListFind(KeyName, value); };
var FileFormListFind = function (KeyName, value) { return sn.FileFormListFind(KeyName, value); };
var FileIntListHas = function (KeyName, value) { return sn.FileIntListHas(KeyName, value); };
var FileFloatListHas = function (KeyName, value) { return sn.FileFloatListHas(KeyName, value); };
var FileStringListHas = function (KeyName, value) { return sn.FileStringListHas(KeyName, value); };
var FileFormListHas = function (KeyName, value) { return sn.FileFormListHas(KeyName, value); };
var FileIntListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileIntListSlice(KeyName, slice, startIndex);
};
var FileFloatListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFloatListSlice(KeyName, slice, startIndex);
};
var FileStringListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileStringListSlice(KeyName, slice, startIndex);
};
var FileFormListSlice = function (KeyName, slice, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    return sn.FileFormListSlice(KeyName, slice, startIndex);
};
var FileIntListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0; }
    return sn.FileIntListResize(KeyName, toLength, filler);
};
var FileFloatListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = 0.0; }
    return sn.FileFloatListResize(KeyName, toLength, filler);
};
var FileStringListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = ""; }
    return sn.FileStringListResize(KeyName, toLength, filler);
};
var FileFormListResize = function (KeyName, toLength, filler) {
    if (filler === void 0) { filler = null; }
    return sn.FileFormListResize(KeyName, toLength, filler);
};
var FileIntListCopy = function (KeyName, copy) { return sn.FileIntListCopy(KeyName, copy); };
var FileFloatListCopy = function (KeyName, copy) { return sn.FileFloatListCopy(KeyName, copy); };
var FileStringListCopy = function (KeyName, copy) { return sn.FileStringListCopy(KeyName, copy); };
var FileFormListCopy = function (KeyName, copy) { return sn.FileFormListCopy(KeyName, copy); };
var debug_SaveFile = function () { return sn.debug_SaveFile(); };
/** Currently no longer implemented, unknown if/when they will return. */
var debug_FileGetIntKeysCount = function () { return sn.debug_FileGetIntKeysCount(); };
0;
var debug_FileGetFloatKeysCount = function () { return sn.debug_FileGetFloatKeysCount(); };
0;
var debug_FileGetStringKeysCount = function () { return sn.debug_FileGetStringKeysCount(); };
0;
var debug_FileGetIntListKeysCount = function () { return sn.debug_FileGetIntListKeysCount(); };
0;
var debug_FileGetFloatListKeysCount = function () { return sn.debug_FileGetFloatListKeysCount(); };
0;
var debug_FileGetStringListKeysCount = function () { return sn.debug_FileGetStringListKeysCount(); };
0;
var debug_FileGetIntKey = function (index) { return sn.debug_FileGetIntKey(index); };
"";
var debug_FileGetFloatKey = function (index) { return sn.debug_FileGetFloatKey(index); };
"";
var debug_FileGetStringKey = function (index) { return sn.debug_FileGetStringKey(index); };
"";
var debug_FileGetIntListKey = function (index) { return sn.debug_FileGetIntListKey(index); };
"";
var debug_FileGetFloatListKey = function (index) { return sn.debug_FileGetFloatListKey(index); };
"";
var debug_FileGetStringListKey = function (index) { return sn.debug_FileGetStringListKey(index); };
"";
var debug_FileDeleteAllValues = function () { return sn.debug_FileDeleteAllValues(); };
var debug_SetDebugMode = function (enabled) { return sn.debug_SetDebugMode(enabled); };
var ImportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    return sn.ImportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains);
};
false;
var ExportFile = function (fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append) {
    if (restrictKey === void 0) { restrictKey = ""; }
    if (restrictType === void 0) { restrictType = -1; }
    if (restrictForm === void 0) { restrictForm = null; }
    if (restrictGlobal === void 0) { restrictGlobal = false; }
    if (keyContains === void 0) { keyContains = false; }
    if (append === void 0) { append = true; }
    return sn.ExportFile(fileName, restrictKey, restrictType, restrictForm, restrictGlobal, keyContains, append);
};
false;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GetModSettingBool": () => (/* binding */ GetModSettingBool),
/* harmony export */   "GetModSettingInt": () => (/* binding */ GetModSettingInt),
/* harmony export */   "GetModSettingFloat": () => (/* binding */ GetModSettingFloat),
/* harmony export */   "GetModSettingString": () => (/* binding */ GetModSettingString),
/* harmony export */   "SetModSettingBool": () => (/* binding */ SetModSettingBool),
/* harmony export */   "SetModSettingInt": () => (/* binding */ SetModSettingInt),
/* harmony export */   "SetModSettingFloat": () => (/* binding */ SetModSettingFloat),
/* harmony export */   "SetModSettingString": () => (/* binding */ SetModSettingString)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);


const MCM = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.MCM

var GetModSettingBool = function (modname, setting_name) {return MCM.GetModSettingBool(modname, setting_name)}
var GetModSettingInt = function (modname, setting_name) {return MCM.GetModSettingInt(modname, setting_name)}
var GetModSettingFloat = function (modname, setting_name) {return MCM.GetModSettingFloat(modname, setting_name)}
var GetModSettingString = function (modname, setting_name) {return MCM.GetModSettingString(modname, setting_name)}

var SetModSettingBool = function (modname, setting_name, value) {return MCM.SetModSettingBool(modname, setting_name, value)}
var SetModSettingInt = function (modname, setting_name, value) {return MCM.SetModSettingInt(modname, setting_name, value)}
var SetModSettingFloat = function (modname, setting_name, value) {return MCM.SetModSettingFloat(modname, setting_name, value)}
var SetModSettingString = function (modname, setting_name, value) {return MCM.SetModSettingString(modname, setting_name, value)}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5U2xvdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsY0FBYyw2QkFBNkIsMEJBQTBCLGNBQWMscUJBQXFCO0FBQ3hHLGlCQUFpQixvREFBb0QscUVBQXFFLGNBQWM7QUFDeEosdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsbUNBQW1DLFNBQVM7QUFDNUMsbUNBQW1DLFdBQVcsVUFBVTtBQUN4RCwwQ0FBMEMsY0FBYztBQUN4RDtBQUNBLDhHQUE4RyxPQUFPO0FBQ3JILGlGQUFpRixpQkFBaUI7QUFDbEcseURBQXlELGdCQUFnQixRQUFRO0FBQ2pGLCtDQUErQyxnQkFBZ0IsZ0JBQWdCO0FBQy9FO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxVQUFVLFlBQVksYUFBYSxTQUFTLFVBQVU7QUFDdEQsb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUM0STtBQUM3QztBQUN6RDtBQUNzQjtBQUNOO0FBQ3dEO0FBQ3hFO0FBQ3RDO0FBQ0Esb0RBQUk7QUFDSjtBQUNBLFlBQVksa0ZBQVUsMkNBQTJDLGtGQUFVO0FBQzNFLFlBQVksNERBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSw4REFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsK0RBQWU7QUFDZjtBQUNPLHNDQUFzQyxvRUFBUztBQUN0RDtBQUNBO0FBQ087QUFDUDtBQUNBLFFBQVEsNERBQVk7QUFDcEI7QUFDQTtBQUNPLGdCQUFnQixPQUFPLDBEQUFjO0FBQ3JDO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0M7QUFDMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsd0NBQXdDO0FBQ2xDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUM7QUFDckMsU0FBUyx1REFBYztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sc0RBQXNEO0FBQ3RE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QUFDbEM7QUFDQTtBQUNBO0FBQ087QUFDUCxrQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxxQ0FBcUM7QUFDckMsa0NBQWtDO0FBQ2xDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHVCQTtBQUNvQztBQUNwQyxZQUFZLCtDQUFNO0FBQ2xCO0FBQ08sMERBQTBEO0FBQzFELHlEQUF5RDtBQUN6RCwyREFBMkQ7QUFDM0QsNERBQTREO0FBQ25FO0FBQ08saUVBQWlFO0FBQ2pFLGdFQUFnRTtBQUNoRSxrRUFBa0U7QUFDbEUsbUVBQW1FOzs7OztVQ1oxRTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vc3JjL0ludmVudG9yeVNsb3RzLnRzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9NaXNjVXRpbC5qcyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL3NyYy9tb2RldmVudC50cyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uLi9tb2R1bGVzL1NQVGV4dFV0aWxzL3NwVGV4dFV0aWxzLnRzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcG8zLXBhcHlydXMtZXh0ZW5kZXIvUE8zX1NLU0VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9zcmMvU2xvdHNfTWNtLnRzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL1N0b3JhZ2VVdGlsLmpzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL21jbS1oZWxwZXIvTUNNLmpzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5pbXBvcnQgeyBvbmNlLCBvbiwgRm9ybSwgR2FtZSwgVXRpbGl0eSwgcHJpbnRDb25zb2xlLCBPYmplY3RSZWZlcmVuY2UsIGJyb3dzZXIsIGRlc3Ryb3lBbGxUZXh0cywgRGVidWcsIHVuc3Vic2NyaWJlIH0gZnJvbSAnc2t5cmltUGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBXcml0ZVRvRmlsZSwgUmVhZEZyb21GaWxlLCBGaWxlRXhpc3RzIH0gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL01pc2NVdGlsXCI7XHJcbmltcG9ydCB7IE1vZEV2ZW50IH0gZnJvbSAnLi9tb2RldmVudCc7XHJcbmltcG9ydCAqIGFzIHd0IGZyb20gJy4uLy4uL21vZHVsZXMvU1BUZXh0VXRpbHMvc3BUZXh0VXRpbHMnO1xyXG5pbXBvcnQgeyBVaSB9IGZyb20gJ0Bza3lyaW0tcGxhdGZvcm0vc2t5cmltLXBsYXRmb3JtJztcclxuaW1wb3J0IHsgQWRkQWxsSXRlbXNUb0FycmF5LCBHZXRGb3JtRWRpdG9ySUQgfSBmcm9tICdAc2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgbWFpbk1jbSB9IGZyb20gXCIuL1Nsb3RzX01jbVwiO1xyXG4vLyBzY3JpcHQgY2hlY2tcclxub25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoZWNrU2NyaXB0TnVtYmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKEZpbGVFeGlzdHMoXCJkYXRhL3BsYXRmb3JtL3BsdWdpbnMvXCIuY29uY2F0KG5hbWUpKSAmJiBGaWxlRXhpc3RzKFwiZGF0YS9wbGF0Zm9ybS9wbHVnaW5zZGV2L1wiLmNvbmNhdChuYW1lKSkpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKCdBQk9SVCBURVNUSU5HLiBUSEVSRSBBUkUgVFdPIElOU1RBTkNFUyBPRiBUSElTIFNDUklQVCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGVja1NjcmlwdE51bWJlcnMoJ0ludmVudG9yeVNsb3RzLmpzJyk7XHJcbn0pO1xyXG4vL19fX19fX19fX19fX19fX19fX19fX19fX19fIFZhcmlhYmxlIFNldHVwX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG52YXIgbW9kbmFtZSA9ICdJbnZlbnRvcnlTbG90cyc7XHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxudmFyIHdpZGdldF94ID0gMTUwMDtcclxudmFyIHdpZGdldF95ID0gODAwO1xyXG52YXIgd2hpdGUgPSBbMSwgMSwgMSwgMV07XHJcbmRlc3Ryb3lBbGxUZXh0cygpO1xyXG4vLyB3dC5zcFRleHQuZGVzdHJveUFsbE1vZFRleHRzKG1vZG5hbWUpXHJcbmV4cG9ydCB2YXIgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkID0gbmV3IHd0LnNwVGV4dCg5NTAsIHdpZGdldF95LCAnY3VycmVudEl0ZW0nLCBbMSwgMSwgMSwgMF0sIHVuZGVmaW5lZCwgbW9kbmFtZSk7XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fRlVOQ1RJT05TX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG52YXIgZGVidWdnaW5nID0gZmFsc2U7XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2cobXNnKSB7XHJcbiAgICBpZiAoZGVidWdnaW5nKSB7XHJcbiAgICAgICAgcHJpbnRDb25zb2xlKG1zZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHBsKCkgeyByZXR1cm4gR2FtZS5nZXRQbGF5ZXIoKTsgfVxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QmFzZVdpZGdldFBvcygpIHtcclxuICAgIHJldHVybiBbd2lkZ2V0X3gsIHdpZGdldF95XTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFzZVdpZGdldFBvcyhuZXdQb3MpIHtcclxuICAgIHdpZGdldF94ID0gbmV3UG9zWzBdO1xyXG4gICAgd2lkZ2V0X3kgPSBuZXdQb3NbMV07XHJcbn1cclxudmFyIHdlYXBLd2RJZHM7XHJcbihmdW5jdGlvbiAod2VhcEt3ZElkcykge1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCYXR0bGVheGVcIl0gPSA0NDg4MThdID0gXCJXZWFwVHlwZUJhdHRsZWF4ZVwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZEFycm93XCJdID0gMTEwMzEwNV0gPSBcIldlYXBUeXBlQm91bmRBcnJvd1wiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZFdlYXBvblwiXSA9IDIyNzgxN10gPSBcIldlYXBUeXBlQm91bmRXZWFwb25cIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQm93XCJdID0gMTI0NjkzXSA9IFwiV2VhcFR5cGVCb3dcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlRGFnZ2VyXCJdID0gMTI0NjkxXSA9IFwiV2VhcFR5cGVEYWdnZXJcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlR3JlYXRzd29yZFwiXSA9IDQ0ODgxN10gPSBcIldlYXBUeXBlR3JlYXRzd29yZFwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVNYWNlXCJdID0gMTI0NjkyXSA9IFwiV2VhcFR5cGVNYWNlXCI7XHJcbiAgICAvLyBXZWFwVHlwZU1lbGVlID0gNDIyNTIzLFxyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVTdGFmZlwiXSA9IDEyNDY5NF0gPSBcIldlYXBUeXBlU3RhZmZcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlU3dvcmRcIl0gPSAxMjQ2ODldID0gXCJXZWFwVHlwZVN3b3JkXCI7XHJcbiAgICAvLyBXZWFwVHlwZVVuaXF1ZSA9IDEzNjM2MTAsXHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhckF4ZVwiXSA9IDEyNDY5MF0gPSBcIldlYXBUeXBlV2FyQXhlXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhcmhhbW1lclwiXSA9IDQ0ODgxNl0gPSBcIldlYXBUeXBlV2FyaGFtbWVyXCI7XHJcbn0pKHdlYXBLd2RJZHMgfHwgKHdlYXBLd2RJZHMgPSB7fSkpO1xyXG52YXIgYXJtb3JLd2RJZHM7XHJcbihmdW5jdGlvbiAoYXJtb3JLd2RJZHMpIHtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JCb290c1wiXSA9IDQ0MjYwNV0gPSBcIkFybW9yQm9vdHNcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDbG90aGluZ1wiXSA9IDQ0MTMyMF0gPSBcIkFybW9yQ2xvdGhpbmdcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDdWlyYXNzXCJdID0gNDQyNjA0XSA9IFwiQXJtb3JDdWlyYXNzXCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yR2F1bnRsZXRzXCJdID0gNDQyNjA3XSA9IFwiQXJtb3JHYXVudGxldHNcIjtcclxuICAgIC8vIEFybW9ySGVhdnkgPSA0NDEyOTgsXHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9ySGVsbWV0XCJdID0gNDQyNjA2XSA9IFwiQXJtb3JIZWxtZXRcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JKZXdlbHJ5XCJdID0gNDQxMzIxXSA9IFwiQXJtb3JKZXdlbHJ5XCI7XHJcbiAgICAvLyBBcm1vckxpZ2h0ID0gNDQxMjk5LFxyXG4gICAgYXJtb3JLd2RJZHNbYXJtb3JLd2RJZHNbXCJBcm1vclNoaWVsZFwiXSA9IDYxNTg1OF0gPSBcIkFybW9yU2hpZWxkXCI7XHJcbn0pKGFybW9yS3dkSWRzIHx8IChhcm1vckt3ZElkcyA9IHt9KSk7XHJcbnZhciBtaXNjS3dkSWRzO1xyXG4oZnVuY3Rpb24gKG1pc2NLd2RJZHMpIHtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxIaWRlXCJdID0gNTk1MTc4XSA9IFwiVmVuZG9ySXRlbUFuaW1hbEhpZGVcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxQYXJ0XCJdID0gNTk1MTc5XSA9IFwiVmVuZG9ySXRlbUFuaW1hbFBhcnRcIjtcclxuICAgIC8vIFZlbmRvckl0ZW1Bcm1vciA9IDU4ODEyMSxcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BcnJvd1wiXSA9IDU5NTk0M10gPSBcIlZlbmRvckl0ZW1BcnJvd1wiO1xyXG4gICAgLy8gVmVuZG9ySXRlbUNsb3RoaW5nID0gNTg4MTIzLFxyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUNsdXR0ZXJcIl0gPSA1OTUxNzddID0gXCJWZW5kb3JJdGVtQ2x1dHRlclwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbURhZWRyaWNBcnRpZmFjdFwiXSA9IDU5NTk0NF0gPSBcIlZlbmRvckl0ZW1EYWVkcmljQXJ0aWZhY3RcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1GaXJld29yZFwiXSA9IDc4MTUyN10gPSBcIlZlbmRvckl0ZW1GaXJld29yZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RcIl0gPSA1NzcwMDJdID0gXCJWZW5kb3JJdGVtRm9vZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RSYXdcIl0gPSA2NTkwMzBdID0gXCJWZW5kb3JJdGVtRm9vZFJhd1wiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUdlbVwiXSA9IDU5NTE4MV0gPSBcIlZlbmRvckl0ZW1HZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1JbmdyZWRpZW50XCJdID0gNTc3MDAzXSA9IFwiVmVuZG9ySXRlbUluZ3JlZGllbnRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1KZXdlbHJ5XCJdID0gNTg4MTIyXSA9IFwiVmVuZG9ySXRlbUpld2VscnlcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1LZXlcIl0gPSA1OTUxODNdID0gXCJWZW5kb3JJdGVtS2V5XCI7XHJcbiAgICAvLyBWZW5kb3JJdGVtT3JkZXJSb2JlcyA9IDI5NDMzNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1PcmVJbmdvdFwiXSA9IDU5NTE4MF0gPSBcIlZlbmRvckl0ZW1PcmVJbmdvdFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVBlYWNld2VlZFwiXSA9IDI5NTk5OV0gPSBcIlZlbmRvckl0ZW1QZWFjZXdlZWRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Qb2lzb25cIl0gPSA1NzcwMDVdID0gXCJWZW5kb3JJdGVtUG9pc29uXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtUG90aW9uXCJdID0gNTc3MDA0XSA9IFwiVmVuZG9ySXRlbVBvdGlvblwiO1xyXG4gICAgLy8gVmVuZG9ySXRlbVByb3BlcnR5QXJrTWFya2V0ID0gMTMxNjE4MyxcclxuICAgIC8vIFZlbmRvckl0ZW1Qcm9wZXJ0eUFya1VwcGVyQ2l0eSA9IDI5MDEwNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1SZWNpcGVcIl0gPSAxMDA2NzY4XSA9IFwiVmVuZG9ySXRlbVJlY2lwZVwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVNjcm9sbFwiXSA9IDY1OTAzMV0gPSBcIlZlbmRvckl0ZW1TY3JvbGxcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Tb3VsR2VtXCJdID0gNjA0MDY3XSA9IFwiVmVuZG9ySXRlbVNvdWxHZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1TcGVsbFRvbWVcIl0gPSA2MDQwNjldID0gXCJWZW5kb3JJdGVtU3BlbGxUb21lXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQm9va1wiXSA9IDYwNDA2Nl0gPSBcIlZlbmRvckl0ZW1Cb29rXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtU3RhZmZcIl0gPSA2MDQwNjhdID0gXCJWZW5kb3JJdGVtU3RhZmZcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Ub29sXCJdID0gNTk1MTgyXSA9IFwiVmVuZG9ySXRlbVRvb2xcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1XZWFwb25cIl0gPSA1ODgxMjBdID0gXCJWZW5kb3JJdGVtV2VhcG9uXCI7XHJcbn0pKG1pc2NLd2RJZHMgfHwgKG1pc2NLd2RJZHMgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEl0ZW1DYXRlZ29yaWVzO1xyXG4oZnVuY3Rpb24gKEl0ZW1DYXRlZ29yaWVzKSB7XHJcbiAgICAvLyB3ZWFwb25zXHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd1wiXSA9IDBdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkXCJdID0gMV0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdFwiXSA9IDJdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZFwiXSA9IDNdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhcIl0gPSA0XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZFwiXSA9IDVdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIXCJdID0gNl0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkhfRXF1aXBwZWRcIl0gPSA3XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJcIl0gPSA4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlclwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkXCJdID0gOV0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93XCJdID0gMTBdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkXCJdID0gMTFdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiXSA9IDEyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkXCJdID0gMTNdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkXCI7XHJcbiAgICAvLyBhcm1vcnNcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkXCJdID0gMTRdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkX0VxdWlwcGVkXCJdID0gMTVdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc1wiXSA9IDE2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkXCJdID0gMTddID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzXCJdID0gMThdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c19FcXVpcHBlZFwiXSA9IDE5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0XCJdID0gMjBdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0X0VxdWlwcGVkXCJdID0gMjFdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzXCJdID0gMjJdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzX0VxdWlwcGVkXCJdID0gMjNdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNcIl0gPSAyNF0gPSBcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzX0VxdWlwcGVkXCJdID0gMjVdID0gXCJSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeVwiXSA9IDI2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWRcIl0gPSAyN10gPSBcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkXCI7XHJcbiAgICAvLyBtaXNjXHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsXCJdID0gMjhdID0gXCJSQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfRm9vZFwiXSA9IDI5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0Zvb2RcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1BvdGlvblwiXSA9IDMwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1BvdGlvblwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfRHJpbmtcIl0gPSAzMV0gPSBcIlJBQkludl9JdGVtVHlwZV9Ecmlua1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudFwiXSA9IDMyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0dlbVwiXSA9IDMzXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0dlbVwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfU291bGdlbVwiXSA9IDM0XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1NvdWxnZW1cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrXCJdID0gMzVdID0gXCJSQUJJbnZfSXRlbVR5cGVfTG9ja3BpY2tcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NMYXJnZVwiXSA9IDM2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NMYXJnZVwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfTWlzY01lZGl1bVwiXSA9IDM3XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW1cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbFwiXSA9IDM4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfR29sZFwiXSA9IDM5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0dvbGRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX09yZUluZ290XCJdID0gNDBdID0gXCJSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3RcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0XCJdID0gNDFdID0gXCJSQUJJbnZfSXRlbVR5cGVfSGlkZVBlbHRcIjtcclxufSkoSXRlbUNhdGVnb3JpZXMgfHwgKEl0ZW1DYXRlZ29yaWVzID0ge30pKTtcclxuZXhwb3J0IHZhciBpdGVtQ2F0ZWdvcnlWb2x1bWVzID0ge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdCc6IDAuNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZCc6IDAuNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgnOiA1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCc6IDUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIJzogMTAsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkJzogMTAsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcic6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcl9FcXVpcHBlZCc6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93JzogOCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWQnOiA4LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3cnOiA4LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dfRXF1aXBwZWQnOiA4LFxyXG4gICAgLy8gYXJtb3JzXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkJzogOSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWQnOiA5LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3MnOiAxNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkJzogMTUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHMnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzX0VxdWlwcGVkJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXQnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZCc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzJzogNCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWQnOiA0LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9DbG90aGVzJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZCc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0pld2VscnknOiAzLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkJzogMyxcclxuICAgIC8vbWlzY1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsJzogMixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfRm9vZCc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1BvdGlvbic6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0RyaW5rJzogMixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudCc6IDAuMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfR2VtJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfU291bGdlbSc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrJzogMC41LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2UnOiA1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtJzogMyxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsJzogMC4xLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Hb2xkJzogMC4wLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9PcmVJbmdvdCc6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0JzogMVxyXG59O1xyXG52YXIga2V5d29yZFRvQ2F0ZWdvcnkgPSB7XHJcbiAgICAvLyB3ZWFwb25zXHRcclxuICAgIFdlYXBUeXBlQmF0dGxlYXhlOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgsXHJcbiAgICBXZWFwVHlwZUJvdzogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvdyxcclxuICAgIFdlYXBUeXBlRGFnZ2VyOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgsXHJcbiAgICBXZWFwVHlwZUdyZWF0c3dvcmQ6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24ySCxcclxuICAgIFdlYXBUeXBlTWFjZTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgV2VhcFR5cGVTdGFmZjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgV2VhcFR5cGVTd29yZDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgV2VhcFR5cGVXYXJBeGU6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIFdlYXBUeXBlV2FyaGFtbWVyOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgsXHJcbiAgICBWZW5kb3JJdGVtQXJyb3c6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyxcclxuICAgIC8vIGFybW9yc1xyXG4gICAgQXJtb3JCb290czogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHMsXHJcbiAgICBBcm1vckNsb3RoaW5nOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQ2xvdGhlcyxcclxuICAgIEFybW9yQ3VpcmFzczogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzcyxcclxuICAgIEFybW9yR2F1bnRsZXRzOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHMsXHJcbiAgICBBcm1vckhlbG1ldDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0LFxyXG4gICAgQXJtb3JKZXdlbHJ5OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSxcclxuICAgIEFybW9yU2hpZWxkOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGQsXHJcbiAgICAvLyBNaXNjc1x0XHJcbiAgICBWZW5kb3JJdGVtQW5pbWFsSGlkZTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0LFxyXG4gICAgVmVuZG9ySXRlbUFuaW1hbFBhcnQ6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Gb29kLFxyXG4gICAgVmVuZG9ySXRlbUNsdXR0ZXI6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9NaXNjU21hbGwsXHJcbiAgICBWZW5kb3JJdGVtRmlyZXdvcmQ6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtLFxyXG4gICAgVmVuZG9ySXRlbUZvb2Q6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Gb29kLFxyXG4gICAgVmVuZG9ySXRlbUZvb2RSYXc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Gb29kLFxyXG4gICAgVmVuZG9ySXRlbUdlbTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0dlbSxcclxuICAgIFZlbmRvckl0ZW1JbmdyZWRpZW50OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudCxcclxuICAgIFZlbmRvckl0ZW1KZXdlbHJ5OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSxcclxuICAgIFZlbmRvckl0ZW1PcmVJbmdvdDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX09yZUluZ290LFxyXG4gICAgVmVuZG9ySXRlbVBvaXNvbjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1BvdGlvbixcclxuICAgIFZlbmRvckl0ZW1Qb3Rpb246IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Qb3Rpb24sXHJcbiAgICBWZW5kb3JJdGVtUmVjaXBlOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbCxcclxuICAgIFZlbmRvckl0ZW1TY3JvbGw6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsLFxyXG4gICAgVmVuZG9ySXRlbVNvdWxHZW06IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtLFxyXG4gICAgVmVuZG9ySXRlbVNwZWxsVG9tZTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICBWZW5kb3JJdGVtQm9vazogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICBWZW5kb3JJdGVtU3RhZmY6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIFZlbmRvckl0ZW1Ub29sOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsLFxyXG59O1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIGYgPSBHYW1lLmdldEZvcm1FeChpdGVtKTtcclxuICAgIHZhciBpc0VxdWlwcGVkID0gKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzRXF1aXBwZWQoZik7XHJcbiAgICBpZiAoIWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBsb2coYGlzRXF1aXBwZWQ6OiAke3BsKCk/LmlzRXF1aXBwZWQoZil9YClcclxuICAgIHZhciBreWRzID0gZi5nZXRLZXl3b3JkcygpO1xyXG4gICAgdmFyIGtleSA9IC0xO1xyXG4gICAgaWYgKGl0ZW0gPT0gMTUpIHtcclxuICAgICAgICByZXR1cm4gSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0dvbGQ7XHJcbiAgICB9IC8vIGdvbGQgZG9lc24ndCBoYXZlIGEga2V5d29yZCBhbmQgbmVlZHMgdG8gYmUgdHJlYXRlZCBkaWZmZXJlbnRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgKGt5ZHMgPT09IG51bGwgfHwga3lkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDoga3lkcy5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB2YXIgayA9IGt5ZHNbaV07XHJcbiAgICAgICAgdmFyIGZfMSA9IEZvcm0uZnJvbShrKS5nZXRGb3JtSUQoKTtcclxuICAgICAgICB2YXIgZWRpdG9yaWQgPSBHZXRGb3JtRWRpdG9ySUQoRm9ybS5mcm9tKGspKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoa2V5d29yZFRvQ2F0ZWdvcnkpLmluY2x1ZGVzKGVkaXRvcmlkKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGtleSA9IGtleXdvcmRUb0NhdGVnb3J5W2VkaXRvcmlkXTtcclxuICAgICAgICAgICAgaWYgKGlzRXF1aXBwZWQpIHtcclxuICAgICAgICAgICAgICAgIGtleSArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDI3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBsb2coYGRldGVybWluZUl0ZW1DYXRlZ29yeTo6IHRoZSBrZXkgaXMgJHtrZXl9YClcclxuICAgICAgICAgICAgLy8gbG9nKGBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnk6OiB0aGUga2V5d29yZCBpZCBpcyAke2Z9YClcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChrZXkgPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGV0ZXJtaW5lSXRlbVZvbHVtZShpdGVtKSB7XHJcbiAgICB2YXIgY2F0ZWdvcnkgPSBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICBpZiAoY2F0ZWdvcnkgPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICB2YXIgdm9sID0gT2JqZWN0LnZhbHVlcyhpdGVtQ2F0ZWdvcnlWb2x1bWVzKVtjYXRlZ29yeV07XHJcbiAgICAvLyBsb2coYGRldGVybWluZUl0ZW1Wb2x1bWU6OiB0aGUgdm9sIGlzICR7dm9sfWApXHJcbiAgICBpZiAoIXZvbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZvbDtcclxufVxyXG52YXIgQmFzZVNsb3RzID0gW107XHJcbnZhciBTbG90ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2xvdChuYW1lLCBtYXhTaXplLCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmJhc2VTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gMDtcclxuICAgICAgICB0aGlzLndpZGdldCA9IG5ldyB3dC5zcFRleHQoeCwgeSwgdGhpcy5uYW1lLCB3aGl0ZSwgdW5kZWZpbmVkLCBtb2RuYW1lKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgQmFzZVNsb3RzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRGaWxsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNpemUudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRGaWxsZWRQcm9wb3J0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiOiAgIFwiKS5jb25jYXQodGhpcy5jdXJyZW50U2l6ZS50b0ZpeGVkKDIpLCBcIiAvIFwiKS5jb25jYXQodGhpcy5iYXNlU2l6ZS50b0ZpeGVkKDIpKTtcclxuICAgIH07XHJcbiAgICBTbG90LnByb3RvdHlwZS5ncmF5SW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXQuc2V0QWxwaGEoMSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEJhc2VTbG90cy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLmN1cnJlbnRTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHMuY3VycmVudFNpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldEFscGhhKDEpO1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRDb2xvcih3aGl0ZSk7XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldFRleHQocy5nZXRGaWxsZWRQcm9wb3J0aW9uKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZmFkZUFsbE91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmZhZGVBbGxJbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmdldEFsbFNsb3ROYW1lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBuYW1lcy5wdXNoKHMubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVzO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZ2V0QWxsU2xvdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VTbG90cztcclxuICAgIH07XHJcbiAgICBTbG90LnJlc2V0U2xvdENhcGFjaXRpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxTbG90cygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgcy5jdXJyZW50U2l6ZSA9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5ncmF5T3V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsU2xvdHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldEFscGhhKDAuNSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5zZXRBbGxXaWRnZXRQb3MgPSBmdW5jdGlvbiAobmV3UG9zKSB7XHJcbiAgICAgICAgdmFyIHggPSBuZXdQb3NbMF07XHJcbiAgICAgICAgdmFyIHkgPSBuZXdQb3NbMV07XHJcbiAgICAgICAgdGhpcy5nZXRBbGxTbG90cygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgdmFyIHcgPSBzLndpZGdldDtcclxuICAgICAgICAgICAgdy5zZXRQb3NpdGlvbih4LCB5KTtcclxuICAgICAgICAgICAgeSArPSAyMDtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2xvdDtcclxufSgpKTtcclxuZXhwb3J0IHsgU2xvdCB9O1xyXG52YXIgTWlzY19zbG90ID0gbmV3IFNsb3QoJ01pc2MnLCAyMDAsIHdpZGdldF94LCB3aWRnZXRfeSk7XHJcbnZhciBXZWFwb25TaGVhdGhzX3Nsb3QgPSBuZXcgU2xvdCgnV2VhcG9ucycsIDIwLCB3aWRnZXRfeCwgd2lkZ2V0X3kgKyAyMCk7XHJcbnZhciBBbW1vX3Nsb3QgPSBuZXcgU2xvdCgnUXVpdmVyJywgNjAsIHdpZGdldF94LCB3aWRnZXRfeSArIDQwKTtcclxudmFyIFZhbHVhYmxlc19zbG90ID0gbmV3IFNsb3QoJ1ZhbHVhYmxlcycsIDUwLCB3aWRnZXRfeCwgd2lkZ2V0X3kgKyA2MCk7XHJcbnZhciBCb3R0bGVzX3Nsb3QgPSBuZXcgU2xvdCgnQm90dGxlcycsIDEwLCB3aWRnZXRfeCwgd2lkZ2V0X3kgKyA4MCk7XHJcbi8vIGxldCBFcXVpcHBlZF9zbG90ID0gbmV3IFNsb3QoJ0VxdWlwcGVkIExvYWQnLDUwLCB3aWRnZXRfeCwgd2lkZ2V0X3kgKyAxMDApXHJcbmZ1bmN0aW9uIGRldGVybWluZUl0ZW1zU2xvdChpdGVtKSB7XHJcbiAgICB2YXIgY2F0ZWdvcnkgPSBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICB2YXIga2V5ID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpW2NhdGVnb3J5XTtcclxuICAgIC8vIGxvZyhgZGV0ZXJtaW5lSXRlbUNhdGVnb3J5OjogY2F0ZWdvcnkgbnVtYmVyID09ICR7a2V5fWApXHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdClbY2F0ZWdvcnldO1xyXG59XHJcbmV4cG9ydCB2YXIgY2F0ZWdvcnlUb1Nsb3QgPSB7XHJcbiAgICAvLyB3ZWFwb25zXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93JzogQW1tb19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZCc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdCc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZCc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24ySCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkhfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcic6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Dcm9zc0Jvdyc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvdyc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgLy8gYXJtb3JzXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZF9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3NfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHMnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0JzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHMnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9DbG90aGVzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9DbG90aGVzX0VxdWlwcGVkJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5JzogVmFsdWFibGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAvLyBtaXNjXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Zvb2QnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1BvdGlvbic6IEJvdHRsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfRHJpbmsnOiBCb3R0bGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnQnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0dlbSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Tb3VsZ2VtJzogVmFsdWFibGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2UnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW0nOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfR29sZCc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9PcmVJbmdvdCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSGlkZVBlbHQnOiBNaXNjX3Nsb3RcclxufTtcclxuZnVuY3Rpb24gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pIHtcclxuICAgIHJldHVybiBbZGV0ZXJtaW5lSXRlbVZvbHVtZShpdGVtKSwgZGV0ZXJtaW5lSXRlbXNTbG90KGl0ZW0pXTtcclxufVxyXG5mdW5jdGlvbiBhZGRJdGVtdG9TbG90KGl0ZW0sIG51bSwgbmV3U2xvdCkge1xyXG4gICAgaWYgKG51bSA9PT0gdm9pZCAwKSB7IG51bSA9IDE7IH1cclxuICAgIGlmIChuZXdTbG90ID09PSB2b2lkIDApIHsgbmV3U2xvdCA9IHVuZGVmaW5lZDsgfVxyXG4gICAgdmFyIHNsb3Q7XHJcbiAgICB2YXIgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICB2YXIgdm9sID0gdHVwbGVbMF0gKiBudW07XHJcbiAgICAvLyBsb2coYGFkZGl0ZW10b3Nsb3Q6OiB2b2w6OiAke3ZvbH1gKVxyXG4gICAgLy8gaWYgKCFuZXdTbG90KXtcclxuICAgIHNsb3QgPSB0dXBsZVsxXTtcclxuICAgIGlmICghc2xvdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICAgIHNsb3QgPSBuZXdTbG90XHJcbiAgICAvLyB9XHJcbiAgICAvLyBzbG90Lml0ZW1zLnB1c2goaXRlbSlcclxuICAgIC8vIGxvZyhzbG90Lml0ZW1zKVxyXG4gICAgc2xvdC5jdXJyZW50U2l6ZSArPSB2b2w7XHJcbiAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVJdGVtZnJvbVNsb3QoaXRlbSwgbnVtLCBvbGRTbG90KSB7XHJcbiAgICBpZiAobnVtID09PSB2b2lkIDApIHsgbnVtID0gMTsgfVxyXG4gICAgaWYgKG9sZFNsb3QgPT09IHZvaWQgMCkgeyBvbGRTbG90ID0gdW5kZWZpbmVkOyB9XHJcbiAgICB2YXIgc2xvdDtcclxuICAgIHZhciB0dXBsZSA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKTtcclxuICAgIHZhciB2b2wgPSB0dXBsZVswXSAqIG51bTtcclxuICAgIHZhciBzdG9wRmxhZyA9IGZhbHNlO1xyXG4gICAgLy8gaWYgKCFvbGRTbG90KXtcclxuICAgIC8vICAgICBzbG90ID0gdHVwbGVbMV1cclxuICAgIC8vIH1cclxuICAgIC8vIGVsc2Uge1xyXG4gICAgQmFzZVNsb3RzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICBpZiAocy5pdGVtcy5pbmNsdWRlcyhpdGVtKSkge1xyXG4gICAgICAgICAgICBzbG90ID0gcztcclxuICAgICAgICAgICAgLy8gbG9nKHNsb3QubmFtZSk7IFxyXG4gICAgICAgICAgICBzdG9wRmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB2YXIgaSA9IHNsb3QuaXRlbXMuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgc2xvdC5pdGVtcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIHNsb3QuY3VycmVudFNpemUgLT0gdm9sO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gaWYgKHN0b3BGbGFnKXtyZXR1cm59XHJcbiAgICAvLyBlbHNlIHtzbG90LmN1cnJlbnRTaXplIC09IHZvbH1cclxuICAgIC8vIG9sZFNsb3QuY3VycmVudFNpemUgLT0gdm9sXHJcbiAgICAvLyB9XHJcbiAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxufVxyXG4vLyBjb25zdCBHZXRJdGVtU2VsZWN0ZWQgPSBhc3luYyAoKSA9PiB7XHJcbi8vIFx0YXdhaXQgVXRpbGl0eS53YWl0KDAuMDEpO1xyXG4vLyBcdGNvbnN0IHJlY2lldmVkOiBGb3JtID0gc3UuR2V0Rm9ybVZhbHVlKG51bGwsIFwiWU0uUkFCLlNlbGVjdC5cIilcclxuLy8gXHRpZiAoIXJlY2lldmVkKSB7cmV0dXJuO31cclxuLy8gICAgIC8vIGFkZEl0ZW10b1Nsb3QocmVjaWV2ZWQpXHJcbi8vIH1cclxuZnVuY3Rpb24gc2xvdExvb2thdEl0ZW0oaXRlbSwgbnVtKSB7XHJcbiAgICBpZiAobnVtID09PSB2b2lkIDApIHsgbnVtID0gMTsgfVxyXG4gICAgdmFyIHR1cGxlID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9ICsodHVwbGVbMF0pLnRvRml4ZWQoMikgKiBudW07XHJcbiAgICB2YXIgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFRleHQoXCJWb2x1bWU6IFwiLmNvbmNhdCh2b2wsIFwiXFxuU2xvdDogTm9uZVwiKSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHNsb3RNYXggPSBzbG90LmJhc2VTaXplLnRvRml4ZWQoMik7XHJcbiAgICB2YXIgc2xvdEN1cnJlbnQgPSArKHNsb3QuY3VycmVudFNpemUpLnRvRml4ZWQoMik7XHJcbiAgICAvLyBsb2coYGxvdEF0SXRlbTo6IHNsb3QuYmFzZVNpemUgPSAke3Nsb3QuYmFzZVNpemV9YClcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgLy8gaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpXHJcbiAgICBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0VGV4dChcIlZvbHVtZTogXCIuY29uY2F0KHZvbCwgXCJcXG5TbG90OiBcIikuY29uY2F0KHNsb3QubmFtZSkpO1xyXG4gICAgLy8gc2xvdC53aWRnZXQuc2V0VGV4dChgJHtzbG90Lm5hbWV9OiAgJHtzbG90Q3VycmVudH0gKCske3ZvbH0pIC8ke3Nsb3RNYXh9YClcclxuICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQsIFwiIChcIikuY29uY2F0KChzbG90Q3VycmVudCArIHZvbCkudG9GaXhlZCgyKSwgXCIpIC9cIikuY29uY2F0KHNsb3QuYmFzZVNpemUudG9GaXhlZCgyKSkpO1xyXG4gICAgaWYgKHNsb3RDdXJyZW50ICsgdm9sID4gc2xvdE1heCkge1xyXG4gICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yKFsxLCAwLCAwLCAxXSk7XHJcbiAgICB9IC8vIGlmIHRoZSBpdGVtIHdvdWxkIG92ZXJmaWxsIGEgc2xvdFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3IoWzAsIDEsIDAsIDFdKTtcclxuICAgIH1cclxufVxyXG52YXIgR2V0SXRlbUhpZ2hsaWdodGVkID0gZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY291bnQsIHR1cGxlLCB2b2wsIHNsb3QsIHNsb3RNYXgsIHNsb3RDdXJyZW50LCBpc0ludmVudG9yeSwgaXNDb250YWluZXIsIGlzQmFydGVyO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4wMDEpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnZXRIaWdobGlnaHRlZEl0ZW1Db3VudCgpO1xyXG4gICAgICAgICAgICAgICAgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2b2wgPSArKHR1cGxlWzBdKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2b2wgfHwgIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90TWF4ID0gc2xvdC5iYXNlU2l6ZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvdEN1cnJlbnQgPSArKHNsb3QuY3VycmVudFNpemUpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2coYEdldEl0ZW1IaWdobGlnaHRlZDo6IHNsb3QuYmFzZVNpemUgPSAke3Nsb3QuYmFzZVNpemV9YClcclxuICAgICAgICAgICAgICAgIC8vIGxvZyhgVGhlIHNlbGVjdGVkIGl0ZW0ncyBzbG90IGlzICR7c2xvdC5uYW1lfWApXHJcbiAgICAgICAgICAgICAgICBTbG90LmdyYXlPdXRBbGwoKTtcclxuICAgICAgICAgICAgICAgIHNsb3QuZ3JheUluKCk7XHJcbiAgICAgICAgICAgICAgICBpc0ludmVudG9yeSA9IFVpLmlzTWVudU9wZW4oJ0ludmVudG9yeU1lbnUnKTtcclxuICAgICAgICAgICAgICAgIGlzQ29udGFpbmVyID0gVWkuaXNNZW51T3BlbignQ29udGFpbmVyTWVudScpO1xyXG4gICAgICAgICAgICAgICAgaXNCYXJ0ZXIgPSBVaS5pc01lbnVPcGVuKCdCYXJ0ZXJNZW51Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2coYFZvbHVtZTogJHt2b2x9XFxuU2xvdDogJHtzbG90Lm5hbWV9YClcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRUZXh0KFwiVm9sdW1lOiBcIi5jb25jYXQodm9sLCBcIlxcblNsb3Q6IFwiKS5jb25jYXQoc2xvdC5uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICB2b2wgKj0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNJbnZlbnRvcnkpIHsgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNDb250YWluZXIgfHwgaXNCYXJ0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbG90LndpZGdldC5zZXRDb2xvcihbMCwxLDAsMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmlld2luZ0NvbnRhaW5lcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yUigwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3JHKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvckIoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldENvbG9yKFsxLDAuMSwuMSwxXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsb3RDdXJyZW50ICsgdm9sID4gc2xvdE1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3IoWzEsIDAsIDAsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbG90LndpZGdldC5zZXRUZXh0KGAke3Nsb3QubmFtZX06ICAke3Nsb3RDdXJyZW50fSAoKyR7dm9sfSkgLyR7c2xvdC5iYXNlU2l6ZX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRUZXh0KFwiXCIuY29uY2F0KHNsb3QubmFtZSwgXCI6ICBcIikuY29uY2F0KHNsb3RDdXJyZW50LCBcIiAoXCIpLmNvbmNhdCgoc2xvdEN1cnJlbnQgKyB2b2wpLnRvRml4ZWQoMiksIFwiKSAvXCIpLmNvbmNhdChzbG90TWF4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1ZpZXdpbmdDb250YWluZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvclIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yRygxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3JCKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoc2xvdEN1cnJlbnQgKyB2b2wgPiBzbG90TWF4KXtzbG90LndpZGdldC5zZXRDb2xvcihbMSwwLDAsMV0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRUZXh0KFwiXCIuY29uY2F0KHNsb3QubmFtZSwgXCI6ICBcIikuY29uY2F0KHNsb3RDdXJyZW50LCBcIiAoXCIpLmNvbmNhdCgoc2xvdEN1cnJlbnQgLSB2b2wpLnRvRml4ZWQoMiksIFwiKSAvXCIpLmNvbmNhdChzbG90TWF4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxudmFyIGlnbm9yZUNvbnRhaW5lckNoYW5nZWRFdmVudCA9IGZhbHNlO1xyXG5mdW5jdGlvbiBEcm9wSXRlbShpdGVtSWQsIG51bSkge1xyXG4gICAgaWdub3JlQ29udGFpbmVyQ2hhbmdlZEV2ZW50ID0gdHJ1ZTtcclxuICAgIHZhciBoYW5kbGUgPSBNb2RFdmVudC5DcmVhdGUoJ1lNX1JBQl9TTE9UU19Ecm9wUmVxdWVzdCcpO1xyXG4gICAgTW9kRXZlbnQuUHVzaEludChoYW5kbGUsIGl0ZW1JZCk7XHJcbiAgICBNb2RFdmVudC5QdXNoSW50KGhhbmRsZSwgbnVtKTtcclxuICAgIE1vZEV2ZW50LlNlbmQoaGFuZGxlKTtcclxufVxyXG52YXIgd2FpdFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgY29udGFpbmVyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4xKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVJdGVtKEdhbWUuZ2V0Rm9ybUV4KGl0ZW0pLCAxLCBmYWxzZSwgT2JqZWN0UmVmZXJlbmNlLmZyb20oR2FtZS5nZXRGb3JtRXgoY29udGFpbmVyKSkpO1xyXG4gICAgICAgICAgICAgICAgVWkuaW52b2tlQm9vbChcIkhVRCBNZW51XCIsIFwiX2dsb2JhbC5za3l1aS5jb21wb25lbnRzLmxpc3QuTGlzdExheW91dC5SZWZyZXNoXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZnVuY3Rpb24gRGVueVNlbGVjdGlvbihpdGVtSWQsIGNvdW50LCBvbGRDb250YWluZXIsIHNsb3ROYW1lKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoc2xvdE5hbWUgPT09IHZvaWQgMCkgeyBzbG90TmFtZSA9ICdJdHMgc2xvdCc7IH1cclxuICAgIC8vIGxldCBjb3VudDogbnVtYmVyID0gZ2V0SGlnaGxpZ2h0ZWRJdGVtQ291bnQoKVxyXG4gICAgaWdub3JlQ29udGFpbmVyQ2hhbmdlZEV2ZW50ID0gdHJ1ZTtcclxuICAgIChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVJdGVtKEdhbWUuZ2V0Rm9ybUV4KGl0ZW1JZCksIGNvdW50LCB0cnVlLCBvbGRDb250YWluZXIpO1xyXG4gICAgVWkuaW52b2tlQm9vbChcIkhVRCBNZW51XCIsIFwiX2dsb2JhbC5za3l1aS5jb21wb25lbnRzLmxpc3QuTGlzdExheW91dC5SZWZyZXNoXCIsIHRydWUpO1xyXG4gICAgRGVidWcubm90aWZpY2F0aW9uKFwiWW91IGNhbiBub3QgcGljayB0aGlzIGl0ZW0gdXAuIFwiLmNvbmNhdChzbG90TmFtZSwgXCIgaXMgZnVsbFwiKSk7XHJcbn1cclxudmFyIHdhaXRGYWRlT3V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgVXRpbGl0eS53YWl0KDEuNSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGYWRlaW4pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBTbG90LmZhZGVBbGxPdXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmZ1bmN0aW9uIGlzVmlld2luZ0NvbnRhaW5lcigpIHtcclxuICAgIHJldHVybiBVaS5nZXRJbnQoXCJDb250YWluZXJNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5jYXRlZ29yeUxpc3QuYWN0aXZlU2VnbWVudFwiKSA/IGZhbHNlIDogdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gRXZhbHVhdGVJbnZlbnRvcnkoKSB7XHJcbiAgICAvLyBSZS1ldmFsdWF0ZSBwbGF5ZXIgaW52ZW50b3J5IGFuZCBmaWxsIHNsb3RzIGFjY29yZGluZ2x5XHJcbiAgICBTbG90LnJlc2V0U2xvdENhcGFjaXRpZXMoKTtcclxuICAgIHZhciBhbGxJdGVtcyA9IEFkZEFsbEl0ZW1zVG9BcnJheShwbCgpLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xyXG4gICAgYWxsSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICBhZGRJdGVtdG9TbG90KGYuZ2V0Rm9ybUlEKCksIChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRJdGVtQ291bnQoZikpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGlnaGxpZ2h0ZWRJdGVtQ291bnQoKSB7XHJcbiAgICBpZiAoVWkuaXNNZW51T3BlbignQ29udGFpbmVyTWVudScpKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuY291bnRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChVaS5pc01lbnVPcGVuKCdJbnZlbnRvcnlNZW51JykpIHtcclxuICAgICAgICByZXR1cm4gVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5jb3VudFwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiAxO1xyXG59XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fIEpTT04gZmlsZSBmdW5jdGlvbnMgX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5mdW5jdGlvbiBjaGVja0ZpbGVzRXhpc3QoKSB7XHJcbiAgICBpZiAoIUZpbGVFeGlzdHMoJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL1Nsb3RzLmpzb24nKSkge1xyXG4gICAgICAgIFdyaXRlVG9GaWxlKCdkYXRhL3Nrc2UvcGx1Z2lucy9JbnZlbnRvcnlTbG90cy9TbG90cy5qc29uJywgSlNPTi5zdHJpbmdpZnkoe30pLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICghRmlsZUV4aXN0cygnZGF0YS9za3NlL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMvS2V5d29yZHMuanNvbicpKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL0tleXdvcmRzLmpzb24nLCBKU09OLnN0cmluZ2lmeSh7fSksIHRydWUpO1xyXG4gICAgfVxyXG4gICAgdmFyIGZpbGUxID0gJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL0tleXdvcmRzLmpzb24nO1xyXG4gICAgdmFyIGZpbGUyID0gJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL1Nsb3RzLmpzb24nO1xyXG4gICAgdmFyIGZpbGVfY29udGVudHMxID0gUmVhZEZyb21GaWxlKGZpbGUxKTtcclxuICAgIHZhciBmaWxlX2NvbnRlbnRzMiA9IFJlYWRGcm9tRmlsZShmaWxlMik7XHJcbiAgICBpZiAoZmlsZV9jb250ZW50czEubGVuZ3RoIDw9IDIpIHtcclxuICAgICAgICBXcml0ZVRvRmlsZShmaWxlMSwgSlNPTi5zdHJpbmdpZnkoe30pLCBmYWxzZSk7XHJcbiAgICAgICAgc2F2ZUtleXdvcmRDYXRlZ29yaWVzVG9EYXRhRmlsZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbGVfY29udGVudHMyLmxlbmd0aCA8PSAyKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZmlsZTIsIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpO1xyXG4gICAgICAgIHNhdmVUb0RhdGFGaWxlKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb0RhdGFGaWxlKCkge1xyXG4gICAgdmFyIGRhdGFfanNvbiA9ICdkYXRhL3Nrc2UvcGx1Z2lucy9JbnZlbnRvcnlTbG90cy9TbG90cy5qc29uJztcclxuICAgIC8vIENoZWNrIGlmIGpzb24gZmlsZSBleGlzdHMsIGFuZCBjcmVhdGUgb25lIGlmIG90aGVyd2lzZVxyXG4gICAgaWYgKCFGaWxlRXhpc3RzKGRhdGFfanNvbikpIHtcclxuICAgICAgICBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG9sZEZpbGUgPSBSZWFkRnJvbUZpbGUoZGF0YV9qc29uKTtcclxuICAgIC8vIElmIHRoZSBmaWxlIGlzIGVtcHR5LCBsaWtlIGFmdGVyIGp1c3QgYmVpbmcgY3JlYXRlZCBvciBzb21ldGhpbmcsIGdpdmUgaXQgdGhlIGluaXRpYWwge30gJ3NxdWFja2V0JyB0aGluZ3NcclxuICAgIGlmIChvbGRGaWxlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgICAgICBzYXZlVG9EYXRhRmlsZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIGlubmVyRGljdCA9IEpTT04ucGFyc2Uob2xkRmlsZSk7XHJcbiAgICBpbm5lckRpY3RbJ3ZvbHVtZXMnXSA9IGl0ZW1DYXRlZ29yeVZvbHVtZXM7XHJcbiAgICBpbm5lckRpY3RbJ3Nsb3RzJ10gPSBTbG90LmdldEFsbFNsb3RzKCk7XHJcbiAgICAvLyBvdmVyd3JpdGUgZWFjaCBzbG90J3Mgd2lkZ2V0J3MgcHJpdmF0ZSBwb3NpdGlvbiB2YXJpYWJsZXMgd2l0aCBpdHMgYWN0dWFsIHBvc2l0aW9uIFxyXG4gICAgaW5uZXJEaWN0WydzbG90cyddLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcclxuICAgICAgICB2YXIgdyA9IHMud2lkZ2V0O1xyXG4gICAgICAgIGlubmVyRGljdFsnc2xvdHMnXVtpXVsnd2lkZ2V0J11bJ3gnXSA9IHMud2lkZ2V0LmdldFBvc2l0aW9uKClbMF07XHJcbiAgICAgICAgaW5uZXJEaWN0WydzbG90cyddW2ldWyd3aWRnZXQnXVsneSddID0gcy53aWRnZXQuZ2V0UG9zaXRpb24oKVsxXTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHNsb3ROYW1lcyA9IFtdO1xyXG4gICAgdmFyIGNhdE5hbWVzID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpO1xyXG4gICAgT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xyXG4gICAgICAgIHZhciBuYW1lID0gcy5uYW1lO1xyXG4gICAgICAgIHZhciBjYXQgPSBjYXROYW1lc1tpXTtcclxuICAgICAgICBzbG90TmFtZXMucHVzaChbY2F0LCBuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIGlubmVyRGljdFsnQ2F0ZWdvcnktdG8tU2xvdHMnXSA9IHNsb3ROYW1lcztcclxuICAgIGlubmVyRGljdFsnQ3VycmVudCBJdGVtIFdpZGdldCBQb3NpdGlvbiddID0gaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLmdldFBvc2l0aW9uKCk7XHJcbiAgICBpbm5lckRpY3RbJ0Jhc2UgV2lkZ2V0IFBvc2l0aW9uJ10gPSBHZXRCYXNlV2lkZ2V0UG9zKCk7XHJcbiAgICBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KGlubmVyRGljdCksIGZhbHNlKTtcclxufVxyXG5mdW5jdGlvbiBzYXZlS2V5d29yZENhdGVnb3JpZXNUb0RhdGFGaWxlKCkge1xyXG4gICAgdmFyIGRhdGFfanNvbiA9ICdkYXRhL3Nrc2UvcGx1Z2lucy9JbnZlbnRvcnlTbG90cy9LZXl3b3Jkcy5qc29uJztcclxuICAgIC8vIENoZWNrIGlmIGpzb24gZmlsZSBleGlzdHMsIGFuZCBjcmVhdGUgb25lIGlmIG90aGVyd2lzZVxyXG4gICAgLy8gaWYgKCFGaWxlRXhpc3RzKGRhdGFfanNvbikpeyBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpIH1cclxuICAgIC8vIGxldCBvbGRGaWxlOiBzdHJpbmcgPSBSZWFkRnJvbUZpbGUoZGF0YV9qc29uKVxyXG4gICAgLy8gSWYgdGhlIGZpbGUgaXMgZW1wdHksIGxpa2UgYWZ0ZXIganVzdCBiZWluZyBjcmVhdGVkIG9yIHNvbWV0aGluZywgZ2l2ZSBpdCB0aGUgaW5pdGlhbCB7fSAnc3F1YWNrZXQnIHRoaW5nc1xyXG4gICAgLy8gaWYgKG9sZEZpbGUubGVuZ3RoID09IDApeyBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpOyBzYXZlS2V5d29yZENhdGVnb3JpZXNUb0RhdGFGaWxlKCkgfVxyXG4gICAgLy8gbGV0IGtleXdvcmRzX2NhdGVnb3JpZXMgPSAgSlNPTi5wYXJzZShvbGRGaWxlKSBcclxuICAgIHZhciBrZXl3b3Jkc19jYXRlZ29yaWVzID0ge1xyXG4gICAgICAgIGtleXdvcmRzOiB7fVxyXG4gICAgfTtcclxuICAgIHZhciBrd3lkcyA9IE9iamVjdC5rZXlzKGtleXdvcmRUb0NhdGVnb3J5KTtcclxuICAgIHZhciBjYXRzID0gT2JqZWN0LnZhbHVlcyhrZXl3b3JkVG9DYXRlZ29yeSk7XHJcbiAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgIHZhciBuZXdEaWN0ID0gW107XHJcbiAgICBrd3lkcy5mb3JFYWNoKGZ1bmN0aW9uIChrLCBpKSB7XHJcbiAgICAgICAgdmFyIG4gPSBcIlwiLmNvbmNhdChJdGVtQ2F0ZWdvcmllc1tjYXRzW2ldXSk7XHJcbiAgICAgICAgLy8gcHJpbnRDb25zb2xlKGspXHJcbiAgICAgICAgdmFyIHQgPSB7fTtcclxuICAgICAgICB0W2tdID0gbjtcclxuICAgICAgICBuZXdEaWN0LnB1c2godCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbXBhdGFiaWxpdHkgZmlsZS4gUGxheWVyIGNhbiBtYW5pcHVsYXRlIGtleXdvcmQgbGlzdCB0byBhZGQvcmVtb3ZlIHN1cHBvcnQgZm9yIGNlcnRhaW4gaXRlbXNcclxuICAgIGtleXdvcmRzX2NhdGVnb3JpZXNbJ2tleXdvcmRzJ10gPSBuZXdEaWN0O1xyXG4gICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeShrZXl3b3Jkc19jYXRlZ29yaWVzKSwgZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydEtleXdvcmRzRmlsZSgpIHtcclxuICAgIHZhciBkYXRhX2pzb24gPSAnZGF0YS9za3NlL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMvS2V5d29yZHMuanNvbic7XHJcbiAgICB2YXIgb2xkRmlsZSA9IFJlYWRGcm9tRmlsZShkYXRhX2pzb24pO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uob2xkRmlsZSk7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0S2V5d29yZHNGcm9tRmlsZSgpIHtcclxuICAgIHZhciBreXdkcyA9IGltcG9ydEtleXdvcmRzRmlsZSgpWydrZXl3b3JkcyddO1xyXG4gICAgdmFyIG5ld0tleXdvcmRUb0NhdGVnb3J5ID0gW107XHJcbiAgICBreXdkcy5mb3JFYWNoKGZ1bmN0aW9uIChrLCBpKSB7XHJcbiAgICAgICAgdmFyIG4gPSBPYmplY3Qua2V5cyhrKVswXTtcclxuICAgICAgICB2YXIgYyA9IE9iamVjdC52YWx1ZXMoaylbMF07XHJcbiAgICAgICAgdmFyIGluZGV4ID0gSXRlbUNhdGVnb3JpZXNbY107XHJcbiAgICAgICAgLy8gaWYgKCFPYmplY3Qua2V5cyhrZXl3b3JkVG9DYXRlZ29yeSkuaW5jbHVkZXMobikpeyBrZXl3b3JkVG9DYXRlZ29yeVtuXSA9IGluZGV4IH1cclxuICAgICAgICAvLyBlbHNlIHtrZXl3b3JkVG9DYXRlZ29yeX1cclxuICAgICAgICBrZXl3b3JkVG9DYXRlZ29yeVtuXSA9IGluZGV4O1xyXG4gICAgfSk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoa2V5d29yZFRvQ2F0ZWdvcnkpXHJcbiAgICAvLyBrZXl3b3JkVG9DYXRlZ29yeSA9IG5ld0tleXdvcmRUb0NhdGVnb3J5XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0U2xvdHNGaWxlKCkge1xyXG4gICAgdmFyIGRhdGFfanNvbiA9ICdkYXRhL3Nrc2UvcGx1Z2lucy9JbnZlbnRvcnlTbG90cy9TbG90cy5qc29uJztcclxuICAgIGlmICghRmlsZUV4aXN0cyhkYXRhX2pzb24pKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvbGRGaWxlID0gUmVhZEZyb21GaWxlKGRhdGFfanNvbik7XHJcbiAgICBpZiAob2xkRmlsZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkoe30pLCBmYWxzZSk7XHJcbiAgICAgICAgc2F2ZVRvRGF0YUZpbGUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKG9sZEZpbGUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTbG90RnJvbU5hbWUobmFtZSkge1xyXG4gICAgdmFyIG91dHB1dCA9IHVuZGVmaW5lZDtcclxuICAgIFNsb3QuZ2V0QWxsU2xvdHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIHNfbmFtZSA9IHMubmFtZTtcclxuICAgICAgICBpZiAobmFtZS50b0xvd2VyQ2FzZSgpID09IHNfbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IHM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydFNsb3RzZnJvbUZpbGUoKSB7XHJcbiAgICB2YXIgc2xvdF9pbmZvID0gaW1wb3J0U2xvdHNGaWxlKClbJ3Nsb3RzJ107XHJcbiAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgIHNsb3RfaW5mby5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBzWyduYW1lJ107XHJcbiAgICAgICAgLy8gaWYgc2xvdCBpbiBmaWxlIGlzIG5vdCBmb3VuZCBpbiBjdXJyZW50IGxpc3Qgb2Ygc2xvdHMsIGNyZWF0ZSBpdD9cclxuICAgICAgICBpZiAoIVNsb3QuZ2V0QWxsU2xvdE5hbWVzKCkuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgICAgbmFtZXMucHVzaChbbmFtZSwgc1snYmFzZVNpemUnXSwgc1snd2lkZ2V0J11bJ3gnXSwgc1snd2lkZ2V0J11bJ3knXV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy8gaWYgc2xvdCBhbHJlYWR5IGV4aXN0cywgb3ZlcndyaXRlIGl0cyBwcm9wZXJ0aWVzIHdpdGggd2hhdCdzIHNhdmVkXHJcbiAgICAgICAgICAgIHZhciBuZXdfc2l6ZSA9IHNbJ2Jhc2VTaXplJ107XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IFNsb3QuZ2V0QWxsU2xvdE5hbWVzKCkuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICAgICAgdmFyIG9sZFNsb3QgPSBTbG90LmdldEFsbFNsb3RzKClbaW5kZXhdO1xyXG4gICAgICAgICAgICAvLyBpbXBvcnQgc2xvdCBzaXplXHJcbiAgICAgICAgICAgIG9sZFNsb3QuYmFzZVNpemUgPSBuZXdfc2l6ZTtcclxuICAgICAgICAgICAgLy8gaW1wb3J0IHdpZGdldCBwb3NpdGlvbnNcclxuICAgICAgICAgICAgdmFyIG5ld19wb3NfeCA9IHNbJ3dpZGdldCddWyd4J107XHJcbiAgICAgICAgICAgIHZhciBuZXdfcG9zX3kgPSBzWyd3aWRnZXQnXVsneSddO1xyXG4gICAgICAgICAgICBvbGRTbG90LndpZGdldC5zZXRQb3NpdGlvbihuZXdfcG9zX3gsIG5ld19wb3NfeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgIC8vIGxvZyhgVGhlIG5ldyBzbG90cyBhcmUgJHtuYW1lc31gKVxyXG4gICAgLy8gY3JlYXRlIG5ldyBzbG90cyBmcm9tIGpzb24gZmlsZVxyXG4gICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5mbywgaSkge1xyXG4gICAgICAgIHZhciBuYW1lID0gaW5mb1swXTtcclxuICAgICAgICB2YXIgc2l6ZSA9IGluZm9bMV07XHJcbiAgICAgICAgdmFyIHggPSBpbmZvWzJdO1xyXG4gICAgICAgIHZhciB5ID0gaW5mb1szXTtcclxuICAgICAgICAvLyBsb2coYFRoZSBuZXcgc2xvdCBoYXMgcHJvcGVydGllczogbmFtZTogJHtuYW1lfTsgc2l6ZTogJHtzaXplfTsgcG9zOiAke3h9LCAke3l9YClcclxuICAgICAgICBuZXcgU2xvdChuYW1lLCBzaXplLCB4LCB5KTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydENhdGVnb3JpZXNmcm9tRmlsZSgpIHtcclxuICAgIHZhciBjYXRzX3Nsb3RzID0gaW1wb3J0U2xvdHNGaWxlKClbJ0NhdGVnb3J5LXRvLVNsb3RzJ107XHJcbiAgICBjYXRzX3Nsb3RzLmZvckVhY2goZnVuY3Rpb24gKGNhdF9zbG90KSB7XHJcbiAgICAgICAgdmFyIGNhdCA9IGNhdF9zbG90WzBdO1xyXG4gICAgICAgIHZhciBzbG90X25hbWUgPSBjYXRfc2xvdFsxXTtcclxuICAgICAgICB2YXIgc2xvdCA9IGdldFNsb3RGcm9tTmFtZShzbG90X25hbWUpO1xyXG4gICAgICAgIGNhdGVnb3J5VG9TbG90W2NhdF0gPSBzbG90O1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0Q2F0ZWdvcnlWb2x1bWVzZnJvbUZpbGUoKSB7XHJcbiAgICB2YXIgdm9scyA9IGltcG9ydFNsb3RzRmlsZSgpWyd2b2x1bWVzJ107XHJcbiAgICB2YXIgbmV3Vm9sdW1lcyA9IE9iamVjdC52YWx1ZXModm9scyk7XHJcbiAgICBPYmplY3Qua2V5cyh2b2xzKS5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XHJcbiAgICAgICAgdmFyIHZvbHVtZSA9IG5ld1ZvbHVtZXNbaV07XHJcbiAgICAgICAgaXRlbUNhdGVnb3J5Vm9sdW1lc1t2XSA9IHZvbHVtZTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydEludmVudG9yeVdpZGdldFBvc2l0aW9uZnJvbUZpbGUoKSB7XHJcbiAgICB2YXIgeHkgPSBpbXBvcnRTbG90c0ZpbGUoKVsnQ3VycmVudCBJdGVtIFdpZGdldCBQb3NpdGlvbiddO1xyXG4gICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFBvc2l0aW9uKHh5WzBdLCB4eVsxXSk7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0QmFzZVdpZGdldFBvc2Zyb21GaWxlKCkge1xyXG4gICAgdmFyIHh5ID0gaW1wb3J0U2xvdHNGaWxlKClbJ0Jhc2UgV2lkZ2V0IFBvc2l0aW9uJ107XHJcbiAgICBzZXRCYXNlV2lkZ2V0UG9zKHh5KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RGF0YUZyb21GaWxlKCkge1xyXG4gICAgY2hlY2tGaWxlc0V4aXN0KCk7XHJcbiAgICBpbXBvcnRLZXl3b3Jkc0Zyb21GaWxlKCk7XHJcbiAgICBpbXBvcnRDYXRlZ29yeVZvbHVtZXNmcm9tRmlsZSgpO1xyXG4gICAgaW1wb3J0Q2F0ZWdvcmllc2Zyb21GaWxlKCk7XHJcbiAgICBpbXBvcnRTbG90c2Zyb21GaWxlKCk7XHJcbiAgICBpbXBvcnRCYXNlV2lkZ2V0UG9zZnJvbUZpbGUoKTtcclxuICAgIGltcG9ydEludmVudG9yeVdpZGdldFBvc2l0aW9uZnJvbUZpbGUoKTtcclxufVxyXG4vL19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX0VWRU5UU19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gbWNtIHNjcmlwdFxyXG5tYWluTWNtKCk7XHJcbnZhciBldmVudEJsYWNrbGlzdCA9IFsnWU1fT25TZWxlY3Rfc2VsZWN0UHJlc3MnLCAnWU1fT25IaWdobGlnaHRfc2VsZWN0SGlnaGxpZ2h0J107XHJcbnZhciBoYW5kbGU7XHJcbm9uKCdtZW51T3BlbicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGxhc3RpdGVtTmFtZSA9IC0yO1xyXG4gICAgdmFyIG1lbnVOYW1lID0gZXZlbnQubmFtZTtcclxuICAgIGlmIChtZW51TmFtZSAhPSAnSW52ZW50b3J5TWVudScgJiYgbWVudU5hbWUgIT0gJ0NvbnRhaW5lck1lbnUnICYmIG1lbnVOYW1lICE9ICdCYXJ0ZXJNZW51Jykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtID0gMDtcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgaGFuZGxlID0gb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobWVudU5hbWUgPT09ICdJbnZlbnRvcnlNZW51Jykge1xyXG4gICAgICAgICAgICBpdGVtID0gVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1lbnVOYW1lID09PSAnQ29udGFpbmVyTWVudScpIHtcclxuICAgICAgICAgICAgaXRlbSA9IFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51TmFtZSA9PT0gJ0JhcnRlck1lbnUnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBVaS5nZXRJbnQoXCJCYXJ0ZXJNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5pdGVtTGlzdC5zZWxlY3RlZEVudHJ5LmZvcm1JZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW0gIT0gbGFzdGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgICAgICAgICAgR2V0SXRlbUhpZ2hsaWdodGVkKGl0ZW0pO1xyXG4gICAgICAgICAgICBsYXN0aXRlbU5hbWUgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxub24oJ21lbnVDbG9zZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldENvbG9yKFsxLCAxLCAxLCAwXSk7XHJcbiAgICBpZiAoZXZlbnQubmFtZSAhPSAnSW52ZW50b3J5TWVudScgJiYgZXZlbnQubmFtZSAhPSAnQ29udGFpbmVyTWVudScpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoaGFuZGxlKSB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoaGFuZGxlKTtcclxuICAgIH1cclxuICAgIEV2YWx1YXRlSW52ZW50b3J5KCk7XHJcbiAgICBTbG90LmZhZGVBbGxPdXQoKTtcclxufSk7XHJcbm9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIGxvZyhPYmplY3QudmFsdWVzKGltcG9ydFNsb3RzRmlsZSgpWyd2b2x1bWVzJ10pW0l0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c10pXHJcbiAgICAvLyBpbXBvcnRTbG90c2Zyb21GaWxlKClcclxuICAgIC8vIHNhdmVUb0RhdGFGaWxlKClcclxuICAgIGlmIChGaWxlRXhpc3RzKCdkYXRhL3BsYXRmb3JtL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMuanMnKSAmJiBGaWxlRXhpc3RzKCdkYXRhL3BsYXRmb3JtL3BsdWdpbnNkZXYvSW52ZW50b3J5U2xvdHMuanMnKSkge1xyXG4gICAgICAgIGxvZygnQUJPUlQgVEVTVElORy4gVEhFUkUgQVJFIFRXTyBJTlNUQU5DRVMgT0YgVEhJUyBTQ1JJUFQnKTtcclxuICAgIH1cclxuICAgIGltcG9ydERhdGFGcm9tRmlsZSgpO1xyXG4gICAgRXZhbHVhdGVJbnZlbnRvcnkoKTtcclxufSk7XHJcbm9uKCdjb250YWluZXJDaGFuZ2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgYWN0aW9uID0gJ1BpY2tlZCBVcCc7XHJcbiAgICB2YXIgbmV3SWQgPSAtMTtcclxuICAgIHZhciBvbGRJZCA9IC0xO1xyXG4gICAgdmFyIGl0ZW1JZCA9IGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCk7XHJcbiAgICB2YXIgbnVtID0gZXZlbnQubnVtSXRlbXM7XHJcbiAgICB2YXIgaW5mbyA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhldmVudC5iYXNlT2JqLmdldEZvcm1JRCgpKTtcclxuICAgIHZhciB2b2x1bWUgPSBpbmZvWzBdO1xyXG4gICAgdmFyIGZ1bGxWb2x1bWUgPSB2b2x1bWUgKiBudW07XHJcbiAgICB2YXIgc2xvdCA9IGluZm9bMV07XHJcbiAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQub2xkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgb2xkSWQgPSBldmVudC5vbGRDb250YWluZXIuZ2V0Rm9ybUlEKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQubmV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbmV3SWQgPSBldmVudC5uZXdDb250YWluZXIuZ2V0Rm9ybUlEKCk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoaWdub3JlQ29udGFpbmVyQ2hhbmdlZEV2ZW50KXtpZ25vcmVDb250YWluZXJDaGFuZ2VkRXZlbnQgPSBmYWxzZTsgcmV0dXJuO31cclxuICAgIGlmIChpdGVtSWQgPT09IDE1KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gbG9nKGBvbGRjb250YWluZXIgPT0gJHsgZXZlbnQub2xkQ29udGFpbmVyLmdldEZvcm1JRCgpIH1gKVxyXG4gICAgLy8gbG9nKGBuZXdjb250YWluZXIgPT0gJHsgZXZlbnQubmV3Q29udGFpbmVyLmdldEZvcm1JRCgpIH1gKVxyXG4gICAgbG9nKFwiY29udGFpbmVyQ2hhbmdlZCBSdW5uaW5nOjpcIik7XHJcbiAgICBsb2coXCJjb250YWluZXJDaGFuZ2VkIFJ1bm5pbmc6OiBJZ25vcmVGbGFnOjogXCIuY29uY2F0KGlnbm9yZUNvbnRhaW5lckNoYW5nZWRFdmVudCkpO1xyXG4gICAgLy8gSXRlbSBhZGRlZCB0byBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIC8vIGlnbm9yZSBnb2xkIGNvbWluZyBpbiBhbmQgb3V0XHJcbiAgICBpZiAobmV3SWQgPT0gMjAgJiYgIWlnbm9yZUNvbnRhaW5lckNoYW5nZWRFdmVudCAmJiBpdGVtSWQgIT0gMTUpIHtcclxuICAgICAgICBsb2coXCJuZXdJZCA9PSAyMDo6XCIpO1xyXG4gICAgICAgIC8vIGNoZWNrIGhvdyBtYW55IGFyZSBpbiBhbiBpdGVtIHN0YWNrIGFuZCBpZiBhbnkgYXJlIGFsbG93ZWQgdG8gYmUgcGlja2VkIHVwXHJcbiAgICAgICAgdmFyIGFsbG93ZWRDb3VudCA9IChzbG90LmJhc2VTaXplIC0gc2xvdC5jdXJyZW50U2l6ZSkgLyB2b2x1bWU7XHJcbiAgICAgICAgaWYgKGFsbG93ZWRDb3VudCA+IG51bSkge1xyXG4gICAgICAgICAgICBhbGxvd2VkQ291bnQgPSBudW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2b2x1bWUgPD0gMCkge1xyXG4gICAgICAgICAgICBhbGxvd2VkQ291bnQgPSBudW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkaXNhbGxvd2VkQ291bnQgPSBudW0gLSBhbGxvd2VkQ291bnQ7XHJcbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGEgc3RhY2sgb2YgaXRlbXNcclxuICAgICAgICBpZiAobnVtID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxvZyhcIm51bSA9PT0gMTo6XCIpO1xyXG4gICAgICAgICAgICAvLyB0aGUgc2xvdCBpcyBmaWxsZWRcclxuICAgICAgICAgICAgaWYgKHNsb3QuY3VycmVudFNpemUgKyBmdWxsVm9sdW1lID4gc2xvdC5iYXNlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nKFwiU2xvdCBtaWdodCBiZSBmaWxsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSB3YXMgcGlja2VkIHVwIGZyb20gdGhlIHdvcmxkXHJcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lm9sZENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgbnVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2coJyFldmVudC5vbGRDb250YWluZXI6OiAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIHdhcyB0YWtlbiBmcm9tIGEgY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2coJ2FsbG93ZWRjb3VudCA9PT0gMTo6IFRyeWluZyB0byBkZW55IHNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChVaS5pc01lbnVPcGVuKCdCYXJ0ZXJNZW51JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRHJvcEl0ZW0oaXRlbUlkLCBudW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmxhdCBvdXQgcHJldmVudCB0YWtpbmcgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVueVNlbGVjdGlvbihpdGVtSWQsIGRpc2FsbG93ZWRDb3VudCwgZXZlbnQub2xkQ29udGFpbmVyLCBzbG90Lm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsb2coJ2V2ZW50Lm9sZENvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWdub3JlQ29udGFpbmVyQ2hhbmdlZEV2ZW50ID0gdHJ1ZSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvZyhcIm51bSA9PT0gMTo6IGFkZGl0ZW10b3Nsb3RcIik7XHJcbiAgICAgICAgICAgICAgICBhZGRJdGVtdG9TbG90KGl0ZW1JZCwgbnVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiBpdCBpcyBhIHN0YWNrIG9mIGl0ZW1zXHJcbiAgICAgICAgZWxzZSBpZiAobnVtID4gMSkge1xyXG4gICAgICAgICAgICBsb2coXCJcXG5udW0gPiAxOjogYWxsb3dlZGNvdW50OjogXCIuY29uY2F0KGFsbG93ZWRDb3VudCwgXCJcXG5kaXNhbGxvd2VkY291bnQ6OiBcIikuY29uY2F0KGRpc2FsbG93ZWRDb3VudCwgXCJcXG52b2x1bWUgKiBudW0gPSBcIikuY29uY2F0KHZvbHVtZSwgXCIgKiBcIikuY29uY2F0KGFsbG93ZWRDb3VudCkpO1xyXG4gICAgICAgICAgICBhZGRJdGVtdG9TbG90KGl0ZW1JZCwgYWxsb3dlZENvdW50KTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50KVxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSB3YXMgcGlja2VkIHVwIGZyb20gdGhlIHdvcmxkXHJcbiAgICAgICAgICAgIGlmIChzbG90LmN1cnJlbnRTaXplICsgKHZvbHVtZSAqIGFsbG93ZWRDb3VudCkgPj0gc2xvdC5iYXNlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5vbGRDb250YWluZXIgJiYgZGlzYWxsb3dlZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBsb2coJyFldmVudC5vbGRDb250YWluZXI6OiBkaXNhbGxvd2VkIGNvdW50ID4gMDo6Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSB3YXMgdGFrZW4gZnJvbSBhIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlzYWxsb3dlZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBwb3NzaWJsZSB0byBhbGxvdyBhIGZldyB0aHJvdWdoLCBsaWtlIGFycm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXQgb3V0IHByZXZlbnQgdGFraW5nIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVpLmlzTWVudU9wZW4oJ0JhcnRlck1lbnUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ2FsbG93ZWRDb3VudCA+IDE6OiB0cnlpbmcgdG8gZHJvcCBpdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygnYWxsb3dlZENvdW50ID4gMTo6IFRyeWluZyB0byBkZW55IHNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZW55U2VsZWN0aW9uKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50LCBldmVudC5vbGRDb250YWluZXIsIHNsb3QubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxvZygnZXZlbnQub2xkQ29udGFpbmVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVDb250YWluZXJDaGFuZ2VkRXZlbnQgPSB0cnVlIFxyXG4gICAgICAgICAgICAgICAgbG9nKFwiYWxsb3dlZENvdW50ID4gMTo6IElnbm9yZUZsYWc6OiBcIi5jb25jYXQoaWdub3JlQ29udGFpbmVyQ2hhbmdlZEV2ZW50KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJdGVtIHJlbW92ZWQgZnJvbSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIGVsc2UgaWYgKG9sZElkID09IDIwICYmICFpZ25vcmVDb250YWluZXJDaGFuZ2VkRXZlbnQgJiYgaXRlbUlkICE9IDE1KSB7XHJcbiAgICAgICAgbG9nKFwiUmVtb3ZlOjogSWdub3JlRmxhZzo6IFwiLmNvbmNhdChpZ25vcmVDb250YWluZXJDaGFuZ2VkRXZlbnQpKTtcclxuICAgICAgICBsb2coXCJSZW1vdmluZyBcIi5jb25jYXQoaXRlbUlkLCBcIiB3aXRoIGNvdW50IFwiKS5jb25jYXQobnVtKSk7XHJcbiAgICAgICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW1JZCwgbnVtKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlnbm9yZUNvbnRhaW5lckNoYW5nZWRFdmVudCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsb3QuY3VycmVudFNpemUgPD0gMCkge1xyXG4gICAgICAgIHNsb3QuY3VycmVudFNpemUgPSAwO1xyXG4gICAgfVxyXG59KTtcclxudmFyIGlzRmFkZWluID0gZmFsc2U7XHJcbm9uKCdjcm9zc2hhaXJSZWZDaGFuZ2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgIHZhciBpZCA9IChfYiA9IChfYSA9IGV2ZW50LnJlZmVyZW5jZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1JRCgpO1xyXG4gICAgdmFyIHR5cGVCbGFja2xpc3QgPSBbNjIgLyogQ2hhcmFjdGVyICovLCAyNCAvKiBBY3RpdmF0b3IgKi8sIDI5IC8qIERvb3IgKi8sIDMzIC8qIEFwcGFyYXR1cyAqLywgMjggLyogQ29udGFpbmVyICovLCA0MyAvKiBOUEMgKi8sIDM5IC8qIEZsb3JhICovLCAzOCAvKiBUcmVlICovXTtcclxuICAgIGlmICgoKF9kID0gKF9jID0gZXZlbnQucmVmZXJlbmNlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaXNQbGF5YWJsZSgpKSAmJiAhdHlwZUJsYWNrbGlzdC5pbmNsdWRlcygoX2YgPSAoX2UgPSBldmVudC5yZWZlcmVuY2UpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5nZXRUeXBlKCkpKSB7XHJcbiAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpO1xyXG4gICAgICAgIGlzRmFkZWluID0gdHJ1ZTtcclxuICAgICAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgICAgICBTbG90LmZhZGVBbGxJbigpO1xyXG4gICAgICAgIHNsb3RMb29rYXRJdGVtKGlkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlzRmFkZWluID0gZmFsc2U7XHJcbiAgICAgICAgd2FpdEZhZGVPdXQoKTtcclxuICAgIH1cclxufSk7XHJcbm9uKCdlcXVpcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICBpZiAoKChfYSA9IGV2ZW50LmFjdG9yLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1JRCgpKSAhPSAoKF9jID0gKF9iID0gcGwoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1JRCgpKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIGxvZyhldmVudC5iYXNlT2JqLmdldE5hbWUoKSlcclxuICAgIGlmIChVaS5pc01lbnVPcGVuKCdNYWdpY01lbnUnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtID0gZXZlbnQuYmFzZU9iai5nZXRGb3JtSUQoKTtcclxuICAgIC8vIGxvZyhgZXF1aXA6OiBpc0VxdWlwcGVkOjogJHtwbCgpPy5pc0VxdWlwcGVkKGV2ZW50LmJhc2VPYmopfWApXHJcbiAgICB2YXIgb2xkQ2F0ID0gZGV0ZXJtaW5lSXRlbUNhdGVnb3J5KGl0ZW0pO1xyXG4gICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIDEpO1xyXG4gICAgYWRkSXRlbXRvU2xvdChpdGVtLCAxKTtcclxufSk7XHJcbm9uKCd1bmVxdWlwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIGlmICgoKF9hID0gZXZlbnQuYWN0b3IuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybUlEKCkpICE9ICgoX2MgPSAoX2IgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybUlEKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gbG9nKGV2ZW50LmJhc2VPYmouZ2V0TmFtZSgpKVxyXG4gICAgaWYgKFVpLmlzTWVudU9wZW4oJ01hZ2ljTWVudScpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGl0ZW0gPSBldmVudC5iYXNlT2JqLmdldEZvcm1JRCgpO1xyXG4gICAgLy8gbG9nKGB1bmVxdWlwOjogaXNFcXVpcHBlZDo6ICR7cGwoKT8uaXNFcXVpcHBlZChldmVudC5iYXNlT2JqKX1gKVxyXG4gICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIDEpO1xyXG4gICAgYWRkSXRlbXRvU2xvdChpdGVtLCAxKTtcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gc2t5cmltUGxhdGZvcm07IiwiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5UeXBlc2NyaXB0IGRlZmluaXRpb25zIGZvciB2NC4yXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRoaXMgZmlsZSB3YXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgUGFweXJ1cy0yLVR5cGVzY3JpcHQuZXhlXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9DYXJsb3NMZXl2YUF5YWxhL1BhcHlydXMtMi1UeXBlc2NyaXB0XHJcblxyXG5UaGUgcHJvZ3JhbSBoYXMgbm8gd2F5IHRvIGtub3cgdGhlIGludGVudGlvbiBvZiB0aGUgaHVtYW5zIHRoYXQgbWFkZVxyXG50aGUgc2NyaXB0cywgc28gaXQncyBhbHdheXMgYWR2aXNhYmxlIHRvIG1hbnVhbGx5IGNoZWNrIGFsbCBnZW5lcmF0ZWRcclxuZmlsZXMgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZGVjbGFyZWQgYXMgaXQgc2hvdWxkLlxyXG5cclxuVGFrZSBub3RlIHRoZSBwcm9ncmFtIGFzc3VtZXMgdGhpcyBzY3JpcHQgZXhpc3RzIGluIHNvbWUgc3ViZm9sZGVyXHJcbnRvIHRoZSBmb2xkZXIgd2hlcmUgYHNreXJpbVBsYXRmb3JtLnRzYCBpcyBmb3VuZCwgb3RoZXJ3aXNlIHlvdSdsbCBnZXRcclxuXCJDYW5ub3QgZmluZCBtb2R1bGUuLi5cIiB0eXBlIG9mIGVycm9ycy5cclxuXHJcbklmIHlvdSB3YW50IHRvIGhhdmUgdGhpcyBzY3JpcHQgaW4gc29tZSBvdGhlciBwbGFjZSwganVzdCBjaGFuZ2UgdGhlXHJcbnJlbGF0aXZlIHBhdGggb2YgZWFjaCBgaW1wb3J0YC5cclxuKi9cclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbnZhciBzbiA9IHNwLk1pc2NVdGlsO1xyXG4vKiogQ2VsbCBzY2FubmluZyBmdW5jdGlvbnMgKi9cclxuLy8gU2NhbnMgdGhlIGN1cnJlbnQgY2VsbCBvZiB0aGUgZ2l2ZW4gQ2VudGVyT24gZm9yIGFuIG9iamVjdCBvZiB0aGUgZ2l2ZW4gZm9ybSB0eXBlIElEIHdpdGhpbiByYWRpdXMgYW5kIHJldHVybnMgYW4gYXJyYXkgZm9yIGFsbCB0aGF0XHJcbi8vIGFuZCAob3B0aW9uYWxseSkgYWxzbyBoYXMgdGhlIGdpdmVuIGtleXdvcmQgaWYgY2hhbmdlZCBmcm9tIGRlZmF1bHQgbm9uZS4gU2V0dGluZyByYWRpdXMgaGlnaGVyIHRoYW4gMC4wIHdpbGwgcmVzdHJpY3QgdGhlIFxyXG4vLyBzZWFyY2ggZGlzdGFuY2UgZnJvbSBhcm91bmQgQ2VudGVyT24sIDAuMCB3aWxsIHNlYXJjaCBlbnRpcmUgY2VsbCB0aGUgb2JqZWN0IGlzIGluLlxyXG4vLyBOT1RFOiBLZXl3b3JkIHNlYXJjaGVzIHNlZW0gYSBsaXR0bGUgdW5wcmVkaWN0YWJsZSBzbyBiZSBzdXJlIHRvIHRlc3QgaWYgeW91ciB1c2FnZSBvZiBpdCB3b3JrcyBiZWZvcmUgdXNpbmcgdGhlIHJlc3VsdHMuXHJcbmV4cG9ydCB2YXIgU2NhbkNlbGxPYmplY3RzID0gZnVuY3Rpb24gKGZvcm1UeXBlLCBDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkKSB7XHJcbiAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsgcmFkaXVzID0gMC4wOyB9XHJcbiAgICBpZiAoSGFzS2V5d29yZCA9PT0gdm9pZCAwKSB7IEhhc0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uU2NhbkNlbGxPYmplY3RzKGZvcm1UeXBlLCBDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkKTtcclxufTtcclxuLy8gU2NhbnMgdGhlIGN1cnJlbnQgY2VsbCBvZiB0aGUgZ2l2ZW4gQ2VudGVyT24gZm9yIGFuIGFjdG9yIHdpdGhpbiB0aGUgZ2l2ZW4gcmFkaXVzIGFuZCByZXR1cm5zIGFuIGFycmF5IGZvciBhbGwgYWN0b3JzIHRoYXQgYXJlXHJcbi8vIGN1cnJlbnRseSBhbGl2ZSBhbmQgKG9wdGlvbmFsbHkpIGhhcyB0aGUgZ2l2ZW4ga2V5d29yZCBpZiBjaGFuZ2VkIGZyb20gZGVmYXVsdCBub25lLiBTZXR0aW5nIHJhZGl1cyBoaWdoZXIgdGhhbiAwLjAgd2lsbCByZXN0cmljdCB0aGUgXHJcbi8vIHNlYXJjaCBkaXN0YW5jZSBmcm9tIGFyb3VuZCBDZW50ZXJPbiwgMC4wIHdpbGwgc2VhcmNoIGVudGlyZSBjZWxsIHRoZSBvYmplY3QgaXMgaW4uXHJcbi8vIE5PVEU6IEtleXdvcmQgc2VhcmNoZXMgc2VlbSBhIGxpdHRsZSB1bnByZWRpY3RhYmxlIHNvIGJlIHN1cmUgdG8gdGVzdCBpZiB5b3VyIHVzYWdlIG9mIGl0IHdvcmtzIGJlZm9yZSB1c2luZyB0aGUgcmVzdWx0cy5cclxuZXhwb3J0IHZhciBTY2FuQ2VsbE5QQ3MgPSBmdW5jdGlvbiAoQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCwgSWdub3JlRGVhZCkge1xyXG4gICAgaWYgKHJhZGl1cyA9PT0gdm9pZCAwKSB7IHJhZGl1cyA9IDAuMDsgfVxyXG4gICAgaWYgKEhhc0tleXdvcmQgPT09IHZvaWQgMCkgeyBIYXNLZXl3b3JkID0gbnVsbDsgfVxyXG4gICAgaWYgKElnbm9yZURlYWQgPT09IHZvaWQgMCkgeyBJZ25vcmVEZWFkID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNjYW5DZWxsTlBDcyhDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkLCBJZ25vcmVEZWFkKTtcclxufTtcclxuLy8gU2FtZSBhcyBTY2FuQ2VsbE5QQ3MoKSwgaG93ZXZlciBpdCBmaWx0ZXJzIHRoZSByZXR1cm4gYnkgYSBnaXZlbiBmYWN0aW9uIGFuZCAob3B0aW9uYWxseSkgdGhlaXIgcmFuayBpbiB0aGF0IGZhY3Rpb24uXHJcbmV4cG9ydCB2YXIgU2NhbkNlbGxOUENzQnlGYWN0aW9uID0gZnVuY3Rpb24gKEZpbmRGYWN0aW9uLCBDZW50ZXJPbiwgcmFkaXVzLCBtaW5SYW5rLCBtYXhSYW5rLCBJZ25vcmVEZWFkKSB7XHJcbiAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsgcmFkaXVzID0gMC4wOyB9XHJcbiAgICBpZiAobWluUmFuayA9PT0gdm9pZCAwKSB7IG1pblJhbmsgPSAwOyB9XHJcbiAgICBpZiAobWF4UmFuayA9PT0gdm9pZCAwKSB7IG1heFJhbmsgPSAxMjc7IH1cclxuICAgIGlmIChJZ25vcmVEZWFkID09PSB2b2lkIDApIHsgSWdub3JlRGVhZCA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5TY2FuQ2VsbE5QQ3NCeUZhY3Rpb24oRmluZEZhY3Rpb24sIENlbnRlck9uLCByYWRpdXMsIG1pblJhbmssIG1heFJhbmssIElnbm9yZURlYWQpO1xyXG59O1xyXG4vKiogQ2FtZXJhIGZ1bmN0aW9ucyAqL1xyXG4vLyBUb2dnbGUgZnJlZWZseSBjYW1lcmEuXHJcbmV4cG9ydCB2YXIgVG9nZ2xlRnJlZUNhbWVyYSA9IGZ1bmN0aW9uIChzdG9wVGltZSkge1xyXG4gICAgaWYgKHN0b3BUaW1lID09PSB2b2lkIDApIHsgc3RvcFRpbWUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlRvZ2dsZUZyZWVDYW1lcmEoc3RvcFRpbWUpO1xyXG59O1xyXG4vLyBTZXQgZnJlZWZseSBjYW0gc3BlZWQuXHJcbmV4cG9ydCB2YXIgU2V0RnJlZUNhbWVyYVNwZWVkID0gZnVuY3Rpb24gKHNwZWVkKSB7IHJldHVybiBzbi5TZXRGcmVlQ2FtZXJhU3BlZWQoc3BlZWQpOyB9O1xyXG4vLyBTZXQgY3VycmVudCBmcmVlZmx5IGNhbSBzdGF0ZSAmIHNldCB0aGUgc3BlZWQgaWYgZW5hYmxpbmdcclxuZXhwb3J0IHZhciBTZXRGcmVlQ2FtZXJhU3RhdGUgPSBmdW5jdGlvbiAoZW5hYmxlLCBzcGVlZCkge1xyXG4gICAgaWYgKHNwZWVkID09PSB2b2lkIDApIHsgc3BlZWQgPSAxMC4wOyB9XHJcbiAgICByZXR1cm4gc24uU2V0RnJlZUNhbWVyYVN0YXRlKGVuYWJsZSwgc3BlZWQpO1xyXG59O1xyXG4vKiogRmlsZSByZWxhdGVkIGZ1bmN0aW9ucyAqL1xyXG4vLyBHZXQgYW4gYXJyYXkgb2YgZmlsZXMgaW4gYSBnaXZlbiBwYXJlbnQgZGlyZWN0b3J5IHRoYXQgaGF2ZSB0aGUgZ2l2ZW4gZXh0ZW5zaW9uLlxyXG4vLyBkaXJlY3RvcnkgaXMgcmVsYXRpdmUgdG8gdGhlIHJvb3QgU2t5cmltIGZvbGRlciAod2hlcmUgc2t5cmltLmV4ZSBpcykgYW5kIGlzIG5vbi1yZWN1cnNpdmUuXHJcbi8vIGRpcmVjdG9yeSA9IFwiLlwiIHRvIGdldCBhbGwgZmlsZXMgaW4gcm9vdCBTa3lyaW0gZm9sZGVyXHJcbi8vIGRpcmVjdG9yeSA9IFwiZGF0YS9tZXNoZXNcIiB0byBnZXQgYWxsIGZpbGVzIGluIHRoZSA8cm9vdD4vZGF0YS9tZXNoZXMgZm9sZGVyXHJcbi8vIGV4dGVuc2lvbiA9IFwiLm5pZlwiIHRvIGdldCBhbGwgLm5pZiBtZXNoIGZpbGVzLlxyXG4vLyAoZGVmYXVsdCkgZXh0ZW5zaW9uPVwiKlwiIHRvIGdldCBhbGwgZmlsZXNcclxuZXhwb3J0IHZhciBGaWxlc0luRm9sZGVyID0gZnVuY3Rpb24gKGRpcmVjdG9yeSwgZXh0ZW5zaW9uKSB7XHJcbiAgICBpZiAoZXh0ZW5zaW9uID09PSB2b2lkIDApIHsgZXh0ZW5zaW9uID0gXCIqXCI7IH1cclxuICAgIHJldHVybiBzbi5GaWxlc0luRm9sZGVyKGRpcmVjdG9yeSwgZXh0ZW5zaW9uKTtcclxufTtcclxuLy8gR2V0IGFuIGFycmF5IG9mIGZvbGRlcnMgaW4gYSBnaXZlbiBwYXJlbnQgZGlyZWN0b3J5XHJcbi8vIFNhbWUgcnVsZXMgYW5kIGV4YW1wbGVzIGFzIGFib3ZlIEZpbGVzSW5Gb2xkZXIgYXBwbHkgdG8gdGhlIGRpcmVjdG9yeSBydWxlIGhlcmUuXHJcbmV4cG9ydCB2YXIgRm9sZGVyc0luRm9sZGVyID0gZnVuY3Rpb24gKGRpcmVjdG9yeSkgeyByZXR1cm4gc24uRm9sZGVyc0luRm9sZGVyKGRpcmVjdG9yeSk7IH07XHJcbi8vIENoZWNrIGlmIGEgZ2l2ZW4gZmlsZSBleGlzdHMgcmVsYXRpdmUgdG8gcm9vdCBTa3lyaW0gZGlyZWN0b3J5LiBFeGFtcGxlOiBGaWxlRXhpc3RzKFwiZGF0YS9tZXNoZXMvZXhhbXBsZS5uaWZcIilcclxuZXhwb3J0IHZhciBGaWxlRXhpc3RzID0gZnVuY3Rpb24gKGZpbGVOYW1lKSB7IHJldHVybiBzbi5GaWxlRXhpc3RzKGZpbGVOYW1lKTsgfTtcclxuLy8gUmVhZCBzdHJpbmcgZnJvbSBmaWxlLiBEbyBub3QgcmVhZCBsYXJnZSBmaWxlcyFcclxuZXhwb3J0IHZhciBSZWFkRnJvbUZpbGUgPSBmdW5jdGlvbiAoZmlsZU5hbWUpIHsgcmV0dXJuIHNuLlJlYWRGcm9tRmlsZShmaWxlTmFtZSk7IH07XHJcbi8vIFdyaXRlIHN0cmluZyB0byBmaWxlLlxyXG5leHBvcnQgdmFyIFdyaXRlVG9GaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lLCB0ZXh0LCBhcHBlbmQsIHRpbWVzdGFtcCkge1xyXG4gICAgaWYgKGFwcGVuZCA9PT0gdm9pZCAwKSB7IGFwcGVuZCA9IHRydWU7IH1cclxuICAgIGlmICh0aW1lc3RhbXAgPT09IHZvaWQgMCkgeyB0aW1lc3RhbXAgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLldyaXRlVG9GaWxlKGZpbGVOYW1lLCB0ZXh0LCBhcHBlbmQsIHRpbWVzdGFtcCk7XHJcbn07XHJcbi8qKiBNaXNjICovXHJcbi8vIFByaW50IHRleHQgdG8gY29uc29sZS5cclxuZXhwb3J0IHZhciBQcmludENvbnNvbGUgPSBmdW5jdGlvbiAodGV4dCkgeyByZXR1cm4gc24uUHJpbnRDb25zb2xlKHRleHQpOyB9O1xyXG4vLyBHZXQgcmFjZSdzIGVkaXRvciBJRC5cclxuZXhwb3J0IHZhciBHZXRSYWNlRWRpdG9ySUQgPSBmdW5jdGlvbiAocmFjZUZvcm0pIHsgcmV0dXJuIHNuLkdldFJhY2VFZGl0b3JJRChyYWNlRm9ybSk7IH07XHJcbi8vIEdldCByYWNlJ3MgZWRpdG9yIElELlxyXG5leHBvcnQgdmFyIEdldEFjdG9yUmFjZUVkaXRvcklEID0gZnVuY3Rpb24gKGFjdG9yUmVmKSB7IHJldHVybiBzbi5HZXRBY3RvclJhY2VFZGl0b3JJRChhY3RvclJlZik7IH07XHJcbi8vIFNldCBIVUQgb24gLyBvZmYgLSBOT1QgQ1VSUkVOVCBXT1JLSU5HIElOIFNLWVJJTSBTUEVDSUFMIEVESVRJT05cclxuZXhwb3J0IHZhciBTZXRNZW51cyA9IGZ1bmN0aW9uIChlbmFibGVkKSB7IHJldHVybiBzbi5TZXRNZW51cyhlbmFibGVkKTsgfTtcclxuLy8gR2V0IG5vZGUgcm90YXRpb25cclxuLy8gUkVNT1ZFRCB2Mi45OiBVc2VsZXNzLCBvbmx5IGRvZXMgYSBwYXJ0IG9mIHRoZSBqb2IuXHJcbi8vIGZsb2F0IGZ1bmN0aW9uIEdldE5vZGVSb3RhdGlvbihPYmplY3RSZWZlcmVuY2Ugb2JqLCBzdHJpbmcgbm9kZU5hbWUsIGJvb2wgZmlyc3RQZXJzb24sIGludCByb3RhdGlvbkluZGV4KSBnbG9iYWwgbmF0aXZlXHJcbmV4cG9ydCB2YXIgR2V0Tm9kZVJvdGF0aW9uID0gZnVuY3Rpb24gKG9iaiwgbm9kZU5hbWUsIGZpcnN0UGVyc29uLCByb3RhdGlvbkluZGV4KSB7IHJldHVybiBzbi5HZXROb2RlUm90YXRpb24ob2JqLCBub2RlTmFtZSwgZmlyc3RQZXJzb24sIHJvdGF0aW9uSW5kZXgpOyB9O1xyXG4vLyBMRUdBQ1kgdjMuMyAtIEFkZGVkIElnbm9yZWRlYWQgcGFyYW1ldGVyIHRvIGZ1bmN0aW9uLCBhbGlhc2VkIGZvciBiYWNrd2FyZHMgY29tcGF0YWJpbGl0eSB3aXRoIHYzLjIuXHJcbmV4cG9ydCB2YXIgU2NhbkNlbGxBY3RvcnMgPSBmdW5jdGlvbiAoQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCkge1xyXG4gICAgaWYgKHJhZGl1cyA9PT0gdm9pZCAwKSB7IHJhZGl1cyA9IDUwMDAuMDsgfVxyXG4gICAgaWYgKEhhc0tleXdvcmQgPT09IHZvaWQgMCkgeyBIYXNLZXl3b3JkID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLlNjYW5DZWxsQWN0b3JzKENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQpO1xyXG59O1xyXG4iLCJpbXBvcnQgKiBhcyBzcCBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbmV4cG9ydCB2YXIgTW9kRXZlbnQgPSBzcC5Nb2RFdmVudDtcclxuIiwiaW1wb3J0IHsgc3RvcmFnZSwgY3JlYXRlVGV4dCwgZGVzdHJveUFsbFRleHRzLCBkZXN0cm95VGV4dCwgZ2V0VGV4dENvbG9yLCBnZXRUZXh0UG9zLCBnZXRUZXh0U3RyaW5nLCBzZXRUZXh0Q29sb3IsIHNldFRleHRQb3MsIHNldFRleHRTdHJpbmcgfSBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbnZhciBrZXlrbmFtZSA9ICcuc3BUZXh0cy4nO1xyXG52YXIgY29sbGVjdGlvbktleSA9IGtleWtuYW1lICsgJ2NvbGxlY3Rpb24uJztcclxudmFyIHNwVGV4dHNDb2xsZWN0aW9uID0gbmV3IE1hcCgpO1xyXG5zdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG52YXIgc3BUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gc3BUZXh0KHhQb3MsIHlQb3MsIHRleHQsIGNvbCwgc1R5cGUsIHNNb2ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGNyZWF0ZVRleHQoeFBvcywgeVBvcywgdGV4dCwgW2NvbFswXSwgY29sWzFdLCBjb2xbMl0sIGNvbFszXV0pO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHNUeXBlID8gc1R5cGUgOiBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIHRoaXMub3duaW5nTW9kID0gc01vZE5hbWUgPyBzTW9kTmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgdGhpcy54ID0geFBvcztcclxuICAgICAgICB0aGlzLnkgPSB5UG9zO1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLnNldCh0aGlzLmluZGV4LCB0aGlzKTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldEluZGV4ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGV4dFN0cmluZyh0aGlzLmluZGV4KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldE93bmluZ01vZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25pbmdNb2Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbnVtID0gZ2V0VGV4dFBvcyh0aGlzLmluZGV4KTtcclxuICAgICAgICByZXR1cm4gbnVtO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0Q29sb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRleHRDb2xvcih0aGlzLmluZGV4KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFR5cGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldFR5cGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHQ7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRUZXh0ID0gZnVuY3Rpb24gKHR4dCkge1xyXG4gICAgICAgIHNldFRleHRTdHJpbmcodGhpcy5pbmRleCwgdHh0KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yID0gZnVuY3Rpb24gKHJnYmEpIHtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgcmdiYSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICh4UG9zLCB5UG9zKSB7XHJcbiAgICAgICAgc2V0VGV4dFBvcyh0aGlzLmluZGV4LCB4UG9zLCB5UG9zKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldE93bmluZ01vZCA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB0aGlzLm93bmluZ01vZCA9IG1vZDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yUiA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2wsIGNvbG9yWzFdLCBjb2xvclsyXSwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yRyA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2xvclswXSwgY29sLCBjb2xvclsyXSwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldENvbG9yQiA9IGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2xvclswXSwgY29sb3JbMV0sIGNvbCwgY29sb3JbM11dKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldEFscGhhID0gZnVuY3Rpb24gKGFscGhhKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2xvclsyXSwgYWxwaGFdKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmRlc3Ryb3lUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZSh0aGlzLmluZGV4KTtcclxuICAgICAgICBkZXN0cm95VGV4dCh0aGlzLmluZGV4KTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIGRlc3Ryb3lBbGxUZXh0cygpO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH07XHJcbiAgICBzcFRleHQuY291bnRNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICB2YXIgYyA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgYy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgX2tleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZClcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmNvdW50VHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpXHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsTW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgLy8gaWYgKCF0bXBDb2xsKXtyZXR1cm47fVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXN0cm95VGV4dChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKF9hKSB7IH1cclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVRleHQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRtcENvbGwuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kaXNhYmxlTW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgdG1wLnNldEFscGhhKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmVuYWJsZU1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgIHRtcC5zZXRBbHBoYSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kaXNhYmxlVHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpIHtcclxuICAgICAgICAgICAgICAgIHRtcC5zZXRBbHBoYSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh0bXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmdldEFsbFRleHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0bXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRUZXh0QnlJbmRleCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgdmFyIHRtcCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0SW5kZXgoKSA9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0bXA7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lUZXh0QnlJbmRleCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgdmFyIHRtcCA9IHNwVGV4dC5nZXRUZXh0QnlJbmRleChpKTtcclxuICAgICAgICBpZiAodG1wKSB7XHJcbiAgICAgICAgICAgIHRtcC5kZXN0cm95VGV4dCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaW5kZXg6IFwiLmNvbmNhdCh0aGlzLmdldEluZGV4KCksIFwiLCB0ZXh0OlxcXCJcIikuY29uY2F0KHRoaXMuZ2V0VGV4dCgpLCBcIlxcXCIsIHR5cGU6IFwiKS5jb25jYXQodGhpcy5nZXRUeXBlKCksIFwiLCBtb2Q6IFwiKS5jb25jYXQodGhpcy5nZXRPd25pbmdNb2QoKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHNwVGV4dDtcclxufSgpKTtcclxuZXhwb3J0IHsgc3BUZXh0IH07XHJcbiIsIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3IgdjQuNS41XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcblRoaXMgZmlsZSB3YXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgUGFweXJ1cy0yLVR5cGVzY3JpcHQuZXhlXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9DYXJsb3NMZXl2YUF5YWxhL1BhcHlydXMtMi1UeXBlc2NyaXB0XHJcblxyXG5UaGUgcHJvZ3JhbSBoYXMgbm8gd2F5IHRvIGtub3cgdGhlIGludGVudGlvbiBvZiB0aGUgaHVtYW5zIHRoYXQgbWFkZVxyXG50aGUgc2NyaXB0cywgc28gaXQncyBhbHdheXMgYWR2aXNhYmxlIHRvIG1hbnVhbGx5IGNoZWNrIGFsbCBnZW5lcmF0ZWRcclxuZmlsZXMgdG8gbWFrZSBzdXJlIGV2ZXJ5dGhpbmcgaXMgZGVjbGFyZWQgYXMgaXQgc2hvdWxkLlxyXG5cclxuVGFrZSBub3RlIHRoZSBwcm9ncmFtIGFzc3VtZXMgdGhpcyBzY3JpcHQgZXhpc3RzIGluIHNvbWUgc3ViZm9sZGVyXHJcbnRvIHRoZSBmb2xkZXIgd2hlcmUgYHNreXJpbVBsYXRmb3JtLnRzYCBpcyBmb3VuZCwgb3RoZXJ3aXNlIHlvdSdsbCBnZXRcclxuXCJDYW5ub3QgZmluZCBtb2R1bGUuLi5cIiB0eXBlIG9mIGVycm9ycy5cclxuXHJcbklmIHlvdSB3YW50IHRvIGhhdmUgdGhpcyBzY3JpcHQgaW4gc29tZSBvdGhlciBwbGFjZSwganVzdCBjaGFuZ2UgdGhlXHJcbnJlbGF0aXZlIHBhdGggb2YgZWFjaCBgaW1wb3J0YC5cclxuKi9cclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCI7XHJcbnZhciBzbiA9IHNwLlBPM19TS1NFRnVuY3Rpb25zO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BQ1RJVkUgRUZGRUNUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgd2hldGhlciB0aGUgYWN0aXZlRWZmZWN0IGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBhY3RpdmVFZmZlY3QgaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvQWN0aXZlRWZmZWN0ID0gZnVuY3Rpb24gKGFrQWN0aXZlRWZmZWN0LCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0FjdGl2ZUVmZmVjdChha0FjdGl2ZUVmZmVjdCwgYXNTY3JpcHROYW1lKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUT1JTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgYWxsIG1hZ2ljZWZmZWN0cyBjdXJyZW50bHkgb24gdGhlIGFjdG9yLiBGaWx0ZXJzIG91dCBpbmFjdGl2ZSBhbmQgaGlkZWludWkgc3BlbGxzLlxyXG5leHBvcnQgdmFyIEdldEFjdGl2ZUVmZmVjdHMgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJTaG93SW5hY3RpdmUpIHtcclxuICAgIGlmIChhYlNob3dJbmFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiU2hvd0luYWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBY3RpdmVFZmZlY3RzKGFrQWN0b3IsIGFiU2hvd0luYWN0aXZlKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRBY3RvckFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvckFscGhhKGFrQWN0b3IpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEFjdG9yUmVmcmFjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JSZWZyYWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vKiogQUNUT1IgU1RBVEVcclxuICAgICAgICBBbGl2ZSA9IDBcclxuICAgICAgICBEeWluZyA9IDFcclxuICAgICAgICBEZWFkID0gMlxyXG4gICAgICAgIFVuY29uc2Npb3VzID0gM1xyXG4gICAgICAgIFJlYW5pbWF0ZSA9IDRcclxuICAgICAgICBSZWN5Y2xlID0gNVxyXG4gICAgICAgIFJlc3RyYWluZWQgPSA2XHJcbiAgICAgICAgRXNzZW50aWFsRG93biA9IDdcclxuICAgICAgICBCbGVlZG91dCA9IDggKi9cclxuLy9HZXRzIGFjdG9yIHN0YXRlXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JTdGF0ZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JTdGF0ZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFjdG9yIHNvdWwgc2l6ZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yU291bFNpemUgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yU291bFNpemUoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhY3RvciB2YWx1ZSBtb2RpZmllci4gMCAtIHBlcm1hbmVudCwgMSAtIHRlbXBvcmFyeSwgMiAtIGRhbWFnZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yVmFsdWVNb2RpZmllciA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaU1vZGlmaWVyLCBhc0FjdG9yVmFsdWUpIHsgcmV0dXJuIHNuLkdldEFjdG9yVmFsdWVNb2RpZmllcihha0FjdG9yLCBhaU1vZGlmaWVyLCBhc0FjdG9yVmFsdWUpOyB9O1xyXG4vL0dldHMgYWN0b3IgY3JpdGljYWwgc3RhZ2VcclxuZXhwb3J0IHZhciBHZXRDcml0aWNhbFN0YWdlID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRDcml0aWNhbFN0YWdlKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIGFsbGllcyBvZiB0aGUgYWN0b3IsIGlmIGluIGNvbWJhdFxyXG5leHBvcnQgdmFyIEdldENvbWJhdEFsbGllcyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q29tYmF0QWxsaWVzKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIHRhcmdldHMgb2YgdGhlIGFjdG9yLCBpZiBpbiBjb21iYXRcclxuZXhwb3J0IHZhciBHZXRDb21iYXRUYXJnZXRzID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRDb21iYXRUYXJnZXRzKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWxsIGN1cnJlbnQgc3VtbW9ucyBjb21tYW5kZWQgYnkgdGhpcyBhY3RvclxyXG5leHBvcnQgdmFyIEdldENvbW1hbmRlZEFjdG9ycyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRDb21tYW5kZWRBY3RvcnMoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyB0aGUgb3duZXIgb2Ygc3VtbW9uZWQgYWN0b3JcclxuZXhwb3J0IHZhciBHZXRDb21tYW5kaW5nQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0Q29tbWFuZGluZ0FjdG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgY3VycmVudCBoYWlyIGNvbG9yIG9uIGFjdG9yLiBGYWlscyBpZiBoYWlyIGhlYWRwYXJ0IGRvZXNuJ3QgZXhpc3RcclxuZXhwb3J0IHZhciBHZXRIYWlyQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0SGFpckNvbG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgdGV4dHVyZXNldCBiZWxvbmdpbmcgdG8gaGVhZHBhcnQsIGlmIGFueS5cclxuZXhwb3J0IHZhciBHZXRIZWFkUGFydFRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlUeXBlKSB7IHJldHVybiBzbi5HZXRIZWFkUGFydFRleHR1cmVTZXQoYWtBY3RvciwgYWlUeXBlKTsgfTtcclxuLy9HZXRzIHRoZSBhY3RvcidzIGxvY2FsIGdyYXZpdHkuXHJcbmV4cG9ydCB2YXIgR2V0TG9jYWxHcmF2aXR5QWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0TG9jYWxHcmF2aXR5QWN0b3IoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBvYmplY3QgdW5kZXIgYWN0b3IncyBmZWV0IChlZy4gdGFibGUpLiBEb2VzIG5vdCB3b3JrIGlmIHRoZSBwbGF5ZXIgaXMgc3RhbmRpbmcgb24gdGhlIGdyb3VuZC5cclxuZXhwb3J0IHZhciBHZXRPYmplY3RVbmRlckZlZXQgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0T2JqZWN0VW5kZXJGZWV0KGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgYWN0dWFsIGN1cnJlbnQgcGFja2FnZSBvbiBhY3RvciwgaW5jbHVkaW5nIGludGVybmFsIHBhY2thZ2VzIHVzZWQgYnkgdGhlIGdhbWUgKHNlZSBHZXRQYWNrYWdlVHlwZSBiZWxvdylcclxuZXhwb3J0IHZhciBHZXRSdW5uaW5nUGFja2FnZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRSdW5uaW5nUGFja2FnZShha0FjdG9yKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgc2tpbiBjb2xvciBvbiBhY3Rvci5cclxuZXhwb3J0IHZhciBHZXRTa2luQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0U2tpbkNvbG9yKGFrQWN0b3IpOyB9O1xyXG4vL1NpbWlsYXIgdG8gR2V0VGltZURlYWQgY29uc29sZSBjb21tYW5kLiBSZXR1cm5zIDAuMCBpZiBhY3RvciBpcyBhbGl2ZVxyXG5leHBvcnQgdmFyIEdldFRpbWVEZWFkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRUaW1lRGVhZChha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHRpbWUgb2YgZGVhdGggaW4gZ2FtZSBkYXlzIHBhc3NlZFxyXG5leHBvcnQgdmFyIEdldFRpbWVPZkRlYXRoID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRUaW1lT2ZEZWF0aChha0FjdG9yKTtcclxufTtcclxuLy9IYXNTcGVsbCBidXQgY2hlY2tzIGlmIHRoZSBzcGVsbCBpcyBwcmVzZW50IG9uIHRoZSBhY3RvciAoaS5lIGFjdGl2ZSBhbmQgbm90IGRpc3BlbGxlZClcclxuZXhwb3J0IHZhciBIYXNBY3RpdmVTcGVsbCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1NwZWxsKSB7IHJldHVybiBzbi5IYXNBY3RpdmVTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIGluIGRlZmVycmVkIGtpbGwgbW9kZVxyXG5leHBvcnQgdmFyIEhhc0RlZmVycmVkS2lsbCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSGFzRGVmZXJyZWRLaWxsKGFrQWN0b3IpO1xyXG59O1xyXG4vL0NoZWNrcyBpZiBhY3RpdmVtYWdpY2VmZmVjdCB3aXRoIGdpdmVuIGFyY2hldHlwZSBpcyBwcmVzZW50IG9uIGFjdG9yLiBBcmNoZXR5cGUgTVVTVCBiZSB0eXBlZCBhcyBnaXZlbiBiZWxvdy5cclxuZXhwb3J0IHZhciBIYXNNYWdpY0VmZmVjdFdpdGhBcmNoZXR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYXNBcmNoZXR5cGUpIHsgcmV0dXJuIHNuLkhhc01hZ2ljRWZmZWN0V2l0aEFyY2hldHlwZShha0FjdG9yLCBhc0FyY2hldHlwZSk7IH07XHJcbi8vUmV0dXJucyBpZiB0aGUgYWN0b3IgaGFzIHNraW4vYXJtb3Igd2l0aCBza2luIHByZXNlbnRcclxuZXhwb3J0IHZhciBIYXNTa2luID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQXJtb3JUb0NoZWNrKSB7IHJldHVybiBzbi5IYXNTa2luKGFrQWN0b3IsIGFrQXJtb3JUb0NoZWNrKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIGluIGNlbGwgd2F0ZXIgb3IgbGF2YVxyXG5leHBvcnQgdmFyIElzQWN0b3JJbldhdGVyID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc0FjdG9ySW5XYXRlcihha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIHVuZGVyd2F0ZXJcclxuZXhwb3J0IHZhciBJc0FjdG9yVW5kZXJ3YXRlciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNBY3RvclVuZGVyd2F0ZXIoYWtBY3Rvcik7XHJcbn07XHJcbi8qKiBMSU1CXHJcbiAgICAgICAgTm9uZSA9IC0xXHJcbiAgICAgICAgVG9yc28gPSAwXHJcbiAgICAgICAgSGVhZCA9IDEgKi9cclxuLy9SZXR1cm5zIHdoZXRoZXIgbGltYiBpcyBnb25lIChpLmUsIHRoZSBoZWFkLCBidXQgYWRkaW5nIHRoZSB3aG9sZSBlbnVtIGluIGNhc2Ugc29tZW9uZSBleHBhbmRzIHRoZSBkaXNtZW1iZXJtZW50IHN5c3RlbSBpbiB0aGUgZnV0dXJlKVxyXG5leHBvcnQgdmFyIElzTGltYkdvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlMaW1iKSB7IHJldHVybiBzbi5Jc0xpbWJHb25lKGFrQWN0b3IsIGFpTGltYik7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBhIHF1YWRydXBlZFxyXG5leHBvcnQgdmFyIElzUXVhZHJ1cGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc1F1YWRydXBlZChha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGFyZ2V0IGlzIHNvdWwgdHJhcHBlZCAvIGNhcGFibGUgb2YgYmVpbmcgc291bCB0cmFwcGVkIHN1Y2Nlc3NmdWxseSAoaWYgdXNpbmcgbW9kcyB0aGF0IGJ5cGFzcyB2YW5pbGxhIHNvdWwgdHJhcCBzeXN0ZW0pLlxyXG5leHBvcnQgdmFyIElzU291bFRyYXBwZWQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzU291bFRyYXBwZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQWRkcyBhbGwgZXF1aXBwZWQgaXRlbXMgdG8gYXJyYXlcclxuZXhwb3J0IHZhciBBZGRBbGxFcXVpcHBlZEl0ZW1zVG9BcnJheSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5BZGRBbGxFcXVpcHBlZEl0ZW1zVG9BcnJheShha0FjdG9yKTsgfTtcclxuLy9BZGRzIHBlcmtzIHRvIHRoZSBhY3RvcmJhc2UsIHdvcmtzIG9uIGxldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHBlcmtzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBBZGRCYXNlUGVyayA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1BlcmspIHsgcmV0dXJuIHNuLkFkZEJhc2VQZXJrKGFrQWN0b3IsIGFrUGVyayk7IH07XHJcbi8vQWRkcyBzcGVsbHMgdG8gYWN0b3JiYXNlLCB3b3JrcyBvbiBwbGF5ZXIvbGV2ZWxlZCBhY3RvcnMvdW5pcXVlIE5QQ3MuIEZ1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gc3BlbGxzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBBZGRCYXNlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uQWRkQmFzZVNwZWxsKGFrQWN0b3IsIGFrU3BlbGwpOyB9O1xyXG4vKiogQkxFTkQgTU9ERVNcclxuICAgICAgICBEYXJrZW4gPSAwXHJcbiAgICAgICAgTXVsdGlwbHkgPSAxXHJcbiAgICAgICAgQ29sb3JCdXJuID0gMlxyXG4gICAgICAgIExpbmVhckJ1cm4gPSAzXHJcbiAgICAgICAgRGFya2VyQ29sb3IgPSA0XHJcbiAgICAgICAgTGlnaHRlbiA9IDVcclxuICAgICAgICBTY3JlZW4gPSA2XHJcbiAgICAgICAgQ29sb3JEb2RnZSA9IDdcclxuICAgICAgICBMaW5lYXJEb2RnZSA9IDhcclxuICAgICAgICBMaWdodGVyQ29sb3IgPSA5XHJcbiAgICAgICAgT3ZlcmxheSA9IDEwXHJcbiAgICAgICAgU29mdExpZ2h0ID0gMTFcclxuICAgICAgICBIYXJkTGlnaHQgPSAxMlxyXG4gICAgICAgIFZpdmlkTGlnaHQgPSAxM1xyXG4gICAgICAgIExpbmVhckxpZ2h0ID0gMTRcclxuICAgICAgICBQaW5MaWdodCA9IDE1XHJcbiAgICAgICAgSGFyZE1peCA9IDE2XHJcbiAgICAgICAgRGlmZmVyZW5jZSA9IDE3XHJcbiAgICAgICAgRXhjbHVzaW9uID0gMThcclxuICAgICAgICBTdWJ0cmFjdCA9IDE5XHJcbiAgICAgICAgRGl2aWRlID0gMjAgKi9cclxuLy9CbGVuZHMgZXhpc3Rpbmcgc2tpbiBjb2xvciB3aXRoIHNwZWNpZmllZCBjb2xvciwgdXNpbmcgcGhvdG9zaG9wIGJsZW5kIGZvcm11bGFzLCB3aXRoIGFscGhhIChvcGFjaXR5KS5cclxuLy9JZiB0cnVlLCBhdXRvTHVtaW5hbmNlIGNhbGN1bGF0ZXMgc2tpbiB0b25lIHJlbGF0aXZlIGx1bWluYW5jZS4gVGhlIG9wYWNpdHkgdmFsdWUgaXMgdGhlbiB1c2VkIGFzIGEgbXVsdGlwbGllciBvbiB0b3Agb2YgdGhhdCwgZmluYWwgdmFsdWUgaXMgY2xhbXBlZCB0byAwLTFcclxuLy9JZiBmYWxzZSwgb25seSBvcGFjaXR5IHdpbGwgYmUgdXNlZC4gUmVjb21tZW5kIHRvIHVzZSBhdXRvbHVtaW5hbmNlIGJlY2F1c2UgY29sb3JzIHdpbGwgbm90IGJsZW5kIHdlbGwgZm9yIGFsbCBza2luIHRvbmVzIHVzaW5nIGZsYXQgdmFsdWVzLlxyXG5leHBvcnQgdmFyIEJsZW5kQ29sb3JXaXRoU2tpblRvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvciwgYWlCbGVuZE1vZGUsIGFiQXV0b0x1bWluYW5jZSwgYWZPcGFjaXR5KSB7XHJcbiAgICByZXR1cm4gc24uQmxlbmRDb2xvcldpdGhTa2luVG9uZShha0FjdG9yLCBha0NvbG9yLCBhaUJsZW5kTW9kZSwgYWJBdXRvTHVtaW5hbmNlLCBhZk9wYWNpdHkpO1xyXG59O1xyXG4vL0RlY2FwaXRhdGVzIGxpdmluZyBhbmQgZGVhZCBhY3RvcnMuIExpdmluZyBhY3RvcnMgd2lsbCBub3QgZGllIHdoZW4gdGhpcyBpcyBjYWxsZWQhXHJcbmV4cG9ydCB2YXIgRGVjYXBpdGF0ZUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5EZWNhcGl0YXRlQWN0b3IoYWtBY3Rvcik7XHJcbn07XHJcbi8vMCAtIEVuYWJsZUFJICsgdG9nZ2xpbmcgcmVjb3JkIGhpdHMgZmxhZ3Mgc28gdGhleSBkb24ndCBnbyBmbHlpbmcgMzAwIGZlZXQgd2hlbiB1bmZyb3plbi5cclxuLy8xIC0gUGFyYWx5emVzIGFjdG9yLCBldmVuIHdoZW4gZGVhZC5cclxuZXhwb3J0IHZhciBGcmVlemVBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yLCB0eXBlLCBhYkZyZWV6ZSkgeyByZXR1cm4gc24uRnJlZXplQWN0b3IoYWtBY3RvciwgdHlwZSwgYWJGcmVlemUpOyB9O1xyXG4vL1F1aWNrIGFuZCBkaXJ0eSBoYWNrIHRvIGluc3RhbnRseSBraWxsIHRoZSBhY3RvciBhbmQgc2V0IGFzIGRlYWQuXHJcbmV4cG9ydCB2YXIgS2lsbE5vV2FpdCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uS2lsbE5vV2FpdChha0FjdG9yKTtcclxufTtcclxuLy9ERVBSRUNJQVRFRFxyXG4vL0JsZW5kcyBleGlzdGluZyBza2luIGNvbG9yIHdpdGggc3BlY2lmaWVkIGNvbG9yLlxyXG4vL1RydWUgLSBpbnRlbnNpdHkgaXMgbWFudWFsbHkgY2FsY3VsYXRlZCB1c2luZyBwZXJjZW50YWdlIDAtMS4wLCBGYWxzZSAtIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB1c2luZyBza2luIHRvbmUgbHVtaW5hbmNlXHJcbmV4cG9ydCB2YXIgTWl4Q29sb3JXaXRoU2tpblRvbmUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvciwgYWJNYW51YWxNb2RlLCBhZlBlcmNlbnRhZ2UpIHtcclxuICAgIHJldHVybiBzbi5NaXhDb2xvcldpdGhTa2luVG9uZShha0FjdG9yLCBha0NvbG9yLCBhYk1hbnVhbE1vZGUsIGFmUGVyY2VudGFnZSk7XHJcbn07XHJcbi8vQmF0Y2ggYWRkZWQgc3BlbGwgcmVtb3ZhbCwgZmlsdGVyZWQgYnkgb3B0aW9uYWwgbW9kIG5hbWUsIGFuZCBrZXl3b3JkIGFycmF5IChtYXRjaGluZyBhbnkga2V5d29yZCBvciBhbGwgb2YgdGhlbSlcclxuZXhwb3J0IHZhciBSZW1vdmVBZGRlZFNwZWxscyA9IGZ1bmN0aW9uIChha0FjdG9yLCBtb2ROYW1lLCBrZXl3b3JkcywgYWJNYXRjaEFsbCkgeyByZXR1cm4gc24uUmVtb3ZlQWRkZWRTcGVsbHMoYWtBY3RvciwgbW9kTmFtZSwga2V5d29yZHMsIGFiTWF0Y2hBbGwpOyB9O1xyXG4vL1JlbW92ZXMgcGVya3MgZnJvbSB0aGUgYWN0b3JiYXNlXHJcbi8vUGVyayBlZmZlY3RzIG1heSBub3QgYmUgcmVtb3ZlZCBmcm9tIHVuaXF1ZSBhY3RvcnMsIG1vcmUgdGVzdGluZyByZXF1aXJlZC5cclxuLy9GdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHBlcmtzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBSZW1vdmVCYXNlUGVyayA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1BlcmspIHsgcmV0dXJuIHNuLlJlbW92ZUJhc2VQZXJrKGFrQWN0b3IsIGFrUGVyayk7IH07XHJcbi8vUmVtb3ZlcyBzcGVsbHMgZnJvbSB0aGUgYWN0b3JiYXNlLCB3b3JrcyBvbiBwbGF5ZXIvbGV2ZWxlZCBhY3RvcnMvdW5pcXVlIE5QQ3MuIEZ1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gc3BlbGxzIGFyZSBhcHBsaWVkIGNvcnJlY3RseSBvbiBsb2FkaW5nL3JlbG9hZGluZyBzYXZlcy5cclxuZXhwb3J0IHZhciBSZW1vdmVCYXNlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uUmVtb3ZlQmFzZVNwZWxsKGFrQWN0b3IsIGFrU3BlbGwpOyB9O1xyXG4vL1JlcGxhY2VzIHNwZWNpZmllZCBzb3VyY2UgdGV4dHVyZXNldCBvbiB3b3JuIGFybW9yIHdpdGggdGFyZ2V0IHRleHR1cmVzZXQuIExhc3RzIGZvciBvbmUgc2luZ2xlIGdhbWluZyBzZXNzaW9uLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkIChkaWZmdXNlIGlzIDAsIG5vcm1hbCBpcyAxLi4uKVxyXG5leHBvcnQgdmFyIFJlcGxhY2VBcm1vclRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtBcm1vciwgYWtTb3VyY2VUWFNULCBha1RhcmdldFRYU1QsIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZUFybW9yVGV4dHVyZVNldChha0FjdG9yLCBha0FybW9yLCBha1NvdXJjZVRYU1QsIGFrVGFyZ2V0VFhTVCwgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgZmFjZSB0ZXh0dXJlc2V0LiBMYXN0cyBvbmUgZ2FtaW5nIHNlc3Npb24uIENhbiBiZSBhcHBsaWVkIHRvIG5vbi11bmlxdWUgYWN0b3JzLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkLiBSZXBsYWNpbmcgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IG1heSBjYXVzZSBhIHZpc2libGUgbmVja3NlYW0uXHJcbmV4cG9ydCB2YXIgUmVwbGFjZUZhY2VUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlUZXh0dXJlVHlwZSkge1xyXG4gICAgaWYgKGFpVGV4dHVyZVR5cGUgPT09IHZvaWQgMCkgeyBhaVRleHR1cmVUeXBlID0gLTE7IH1cclxuICAgIHJldHVybiBzbi5SZXBsYWNlRmFjZVRleHR1cmVTZXQoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVRleHR1cmVUeXBlKTtcclxufTtcclxuLy9SZXBsYWNlcyBza2luIHRleHR1cmVzZXQgZm9yIGdpdmVuIHNsb3RtYXNrIChpZS4gYm9keS9oYW5kKS4gTGFzdHMgb25lIGdhbWluZyBzZXNzaW9uLiBIYXMgdG8gYmUgcmVhcHBsaWVkIHdoZW4gcmUtZXF1aXBwaW5nIGFybW9yLlxyXG4vL0lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkLCBvdGhlcndpc2UgdGhlIHRleHR1cmUgbWFwIHNwZWNpZmllZCBhdCBbdGV4dHVyZVR5cGVdIGluZGV4IGlzIHJlcGxhY2VkLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VTa2luVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpU2xvdE1hc2ssIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZVNraW5UZXh0dXJlU2V0KGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlTbG90TWFzaywgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vQ2hlY2tzIGZvciBOaUV4dHJhRGF0YSBub2RlcyBvbiBhY3RvciAtIFBPM19USU5UL1BPM19BTFBIQS9QTzNfVFhTVC9QTzNfVE9HR0xFL1BPM19TSEFERVJcclxuLy9TdG9wcyBhbGwgZWZmZWN0IHNoYWRlcnMgYW5kXHJcbi8vUE8zX1RJTlQgLSByZXNldHMgdGludCwgcmVidWlsZHMgZmFjZWdlbiBpZiBhY3RvciBpcyBwbGF5ZXJcclxuLy9QTzNfQUxQSEEgLSByZXNldHMgc2tpbiBhbHBoYVxyXG4vL1BPM19UWFNUIC0gcmVzZXRzIHRleHR1cmVzZXRzIHdpdGggdGV4dHVyZXBhdGhzIGNvbnRhaW5pbmcgZm9sZGVyTmFtZVxyXG4vL1BPM19UT0dHTEUgLSB1bmhpZGVzIGFsbCBjaGlsZHJlbiBvZiBub2RlcyB0aGF0IHdlcmUgd3JpdHRlbiB0byB0aGUgZXh0cmFEYXRhXHJcbi8vUE8zX1NIQURFUiAtIHJlY3JlYXRlcyB0aGUgb3JpZ2luYWwgc2hhZGVyIHR5cGUgKGFzIGNsb3NlIGFzIHBvc3NpYmxlLCBwcm9qZWN0ZWRVViBwYXJhbXMgYXJlIG5vdCByZXN0b3JlZClcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yM0QgPSBmdW5jdGlvbiAoYWtBY3RvciwgYXNGb2xkZXJOYW1lKSB7IHJldHVybiBzbi5SZXNldEFjdG9yM0QoYWtBY3RvciwgYXNGb2xkZXJOYW1lKTsgfTtcclxuLy8wLjAgZGlzYWJsZXMgcmVmcmFjdGlvbiwgMS4wIGlzIG1heCByZWZyYWN0aW9uXHJcbmV4cG9ydCB2YXIgU2V0QWN0b3JSZWZyYWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmUmVmcmFjdGlvbikgeyByZXR1cm4gc24uU2V0QWN0b3JSZWZyYWN0aW9uKGFrQWN0b3IsIGFmUmVmcmFjdGlvbik7IH07XHJcbi8vU2V0cyBoYWlyIGNvbG9yIG9uIGFjdG9yLiBDaGFuZ2VzIG1heSBwZXJzaXN0IHRocm91Z2hvdXQgZ2FtaW5nIHNlc3Npb24sIGV2ZW4gd2hlbiByZWxvYWRpbmcgcHJldmlvdXMgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgU2V0SGFpckNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IpIHsgcmV0dXJuIHNuLlNldEhhaXJDb2xvcihha0FjdG9yLCBha0NvbG9yKTsgfTtcclxuLy9TZXRzIGhlYWRwYXJ0J3MgbWVzaCBhbHBoYS4gRG9lc24ndCB3b3JrIGZvciBzb21lIGhhaXIgdHlwZXMgYW5kIGhldGVyb2Nocm9taWMgZXllc1xyXG5leHBvcnQgdmFyIFNldEhlYWRQYXJ0QWxwaGEgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlQYXJ0VHlwZSwgYWZBbHBoYSkgeyByZXR1cm4gc24uU2V0SGVhZFBhcnRBbHBoYShha0FjdG9yLCBhaVBhcnRUeXBlLCBhZkFscGhhKTsgfTtcclxuLy9TZXRzIHRleHR1cmVzZXQgYmVsb25naW5nIHRvIGhlYWRwYXJ0LCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgU2V0SGVhZFBhcnRUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGhlYWRwYXJ0VFhTVCwgYWlUeXBlKSB7IHJldHVybiBzbi5TZXRIZWFkUGFydFRleHR1cmVTZXQoYWtBY3RvciwgaGVhZHBhcnRUWFNULCBhaVR5cGUpOyB9O1xyXG4vL1NldHMgdmVsb2NpdHkgb2YgdGhlIGFjdG9yLiBNYXkgbm90IHRha2UgcGxhY2UgaW1tZWRpYXRlbHkuXHJcbmV4cG9ydCB2YXIgU2V0TGluZWFyVmVsb2NpdHkgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZYLCBhZlksIGFmWikgeyByZXR1cm4gc24uU2V0TGluZWFyVmVsb2NpdHkoYWtBY3RvciwgYWZYLCBhZlksIGFmWik7IH07XHJcbi8vU2V0cyBsb2NhbCBncmF2aXR5IG9mIHRoZSBhY3Rvci4gTmVnYXRpdmUgdmFsdWVzIHdpbGwgY2F1c2UgdGhlbSB0byBmbHkuIE1heSBub3QgdGFrZSBwbGFjZSBpbW1lZGlhdGVseS5cclxuZXhwb3J0IHZhciBTZXRMb2NhbEdyYXZpdHlBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlZhbHVlLCBhYkRpc2FibGVHcmF2aXR5T25Hcm91bmQpIHsgcmV0dXJuIHNuLlNldExvY2FsR3Jhdml0eUFjdG9yKGFrQWN0b3IsIGFmVmFsdWUsIGFiRGlzYWJsZUdyYXZpdHlPbkdyb3VuZCk7IH07XHJcbi8vU2V0cyBhbHBoYSBvbiBmYWNlLCBiYXNlIHNraW4gZm9ybSBhbmQgYXJtb3IgbWVzaGVzIHdpdGggdmlzaWJsZSBza2luLiBIYXMgdG8gYmUgcmUtYXBwbGllZCB3aGVuIGFybW9yIGlzIHVuL3JlLWVxdWlwcGVkLlxyXG5leHBvcnQgdmFyIFNldFNraW5BbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZkFscGhhKSB7IHJldHVybiBzbi5TZXRTa2luQWxwaGEoYWtBY3RvciwgYWZBbHBoYSk7IH07XHJcbi8vU2V0cyBza2luIGNvbG9yIChmYWNlIGFuZCBib2R5KS4gSGFzIHRvIGJlIHJlLWFwcGxpZWQgd2hlbiBhcm1vciBpcyB1bi9yZS1lcXVpcHBlZC5cclxuZXhwb3J0IHZhciBTZXRTa2luQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvcikgeyByZXR1cm4gc24uU2V0U2tpbkNvbG9yKGFrQWN0b3IsIGFrQ29sb3IpOyB9O1xyXG4vL1NldHMgdGhlIGZsYWcgdXNlZCBieSB0aGUgZ2FtZSB0byBkZXRlcm1pbmUgc291bCB0cmFwcGVkIE5QQ3NcclxuZXhwb3J0IHZhciBTZXRTb3VsVHJhcHBlZCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhYlRyYXBwZWQpIHsgcmV0dXJuIHNuLlNldFNvdWxUcmFwcGVkKGFrQWN0b3IsIGFiVHJhcHBlZCk7IH07XHJcbi8vVG9nZ2xlcyBhbnkgaGFpciB3aWdzIChnZW9tZXRyeSB3aXRoIGhhaXIgc2hhZGVyKSBmb3VuZCBvbiBzbG90cyBIYWlyL0xvbmdIYWlyXHJcbmV4cG9ydCB2YXIgVG9nZ2xlSGFpcldpZ3MgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJEaXNhYmxlKSB7IHJldHVybiBzbi5Ub2dnbGVIYWlyV2lncyhha0FjdG9yLCBhYkRpc2FibGUpOyB9O1xyXG4vKiogQVJNT1IgVFlQRVxyXG4gICAgICAgIExpZ2h0ID0gMFxyXG4gICAgICAgIEhlYXZ5ID0gMVxyXG4gICAgICAgIENsb3RoaW5nID0gMiAqL1xyXG4vL1VuZXF1aXBzIGFsbCBhcm1vciBvZiB0eXBlLCBvcHRpb25hbGx5IHNraXBwaW5nIGJpcGVkIHNsb3RzLlxyXG5leHBvcnQgdmFyIFVuZXF1aXBBbGxPZlR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZBcm1vclR5cGUsIGFpU2xvdHNUb1NraXApIHsgcmV0dXJuIHNuLlVuZXF1aXBBbGxPZlR5cGUoYWtBY3RvciwgYWZBcm1vclR5cGUsIGFpU2xvdHNUb1NraXApOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BQ1RPUkJBU0VcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0cyBucGMgZGVhdGggaXRlbVxyXG5leHBvcnQgdmFyIEdldERlYXRoSXRlbSA9IGZ1bmN0aW9uIChha0Jhc2UpIHsgcmV0dXJuIHNuLkdldERlYXRoSXRlbShha0Jhc2UpOyB9O1xyXG4vL0dldCBhY3RvcmJhc2UgcGVyayBhdCBudGggaW5kZXhcclxuZXhwb3J0IHZhciBHZXROdGhQZXJrID0gZnVuY3Rpb24gKGFrQmFzZSwgYWlJbmRleCkgeyByZXR1cm4gc24uR2V0TnRoUGVyayhha0Jhc2UsIGFpSW5kZXgpOyB9O1xyXG4vL0dldCB0b3RhbCBhY3RvcmJhc2UgcGVyayBjb3VudFxyXG5leHBvcnQgdmFyIEdldFBlcmtDb3VudCA9IGZ1bmN0aW9uIChha0Jhc2UpIHtcclxuICAgIHJldHVybiBzbi5HZXRQZXJrQ291bnQoYWtCYXNlKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIG5wYyBkZWF0aCBpdGVtLiBDYW4gYmUgTm9uZS5cclxuZXhwb3J0IHZhciBTZXREZWF0aEl0ZW0gPSBmdW5jdGlvbiAoYWtCYXNlLCBha0xldmVsZWRJdGVtKSB7IHJldHVybiBzbi5TZXREZWF0aEl0ZW0oYWtCYXNlLCBha0xldmVsZWRJdGVtKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUxJQVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vcmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBhbGlhcyBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9BbGlhcyA9IGZ1bmN0aW9uIChha0FsaWFzLCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0FsaWFzKGFrQWxpYXMsIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FSTU9SL0FERE9OU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGFybW9yIGFkZG9uJ3MgZm9vdHN0ZXAgc2V0XHJcbmV4cG9ydCB2YXIgR2V0Rm9vdHN0ZXBTZXQgPSBmdW5jdGlvbiAoYWtBcm1hKSB7IHJldHVybiBzbi5HZXRGb290c3RlcFNldChha0FybWEpOyB9O1xyXG4vL1NldHMgYXJtb3IgYWRkb24ncyBmb290c3RlcCBzZXRcclxuZXhwb3J0IHZhciBTZXRGb290c3RlcFNldCA9IGZ1bmN0aW9uIChha0FybWEsIGFrRm9vdHN0ZXBTZXQpIHsgcmV0dXJuIHNuLlNldEZvb3RzdGVwU2V0KGFrQXJtYSwgYWtGb290c3RlcFNldCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FSUkFZU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BZGRzIGFjdG9yIHRvIGFycmF5LiBNb2RpZmllcyBhcnJheSBkaXJlY3RseSwgaXQgbXVzdCBiZSBpbml0aWFsaXplZCFcclxuZXhwb3J0IHZhciBBZGRBY3RvclRvQXJyYXkgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWN0b3JBcnJheSkgeyByZXR1cm4gc24uQWRkQWN0b3JUb0FycmF5KGFrQWN0b3IsIGFjdG9yQXJyYXkpOyB9O1xyXG4vL0FkZHMgc3RyaW5nIHRvIGFycmF5LiBNb2RpZmllcyBhcnJheSBkaXJlY3RseSwgaXQgbXVzdCBiZSBpbml0aWFsaXplZCFcclxuZXhwb3J0IHZhciBBZGRTdHJpbmdUb0FycmF5ID0gZnVuY3Rpb24gKGFzU3RyaW5nLCBhc1N0cmluZ3MpIHsgcmV0dXJuIHNuLkFkZFN0cmluZ1RvQXJyYXkoYXNTdHJpbmcsIGFzU3RyaW5ncyk7IH07XHJcbi8vQ291bnRzIGhvdyBtYW55IGluc3RhbmNlcyBvZiBhIHN0cmluZyBhcmUgaW4gYW4gYXJyYXkuXHJcbmV4cG9ydCB2YXIgQXJyYXlTdHJpbmdDb3VudCA9IGZ1bmN0aW9uIChhc1N0cmluZywgYXNTdHJpbmdzKSB7IHJldHVybiBzbi5BcnJheVN0cmluZ0NvdW50KGFzU3RyaW5nLCBhc1N0cmluZ3MpOyB9O1xyXG4vL0FscGhhYmV0aWNhbGx5IHNvcnRzIGFuZCByZXR1cm5zIHRydW5jYXRlZCBzcmluZyBhcnJheS5cclxuZXhwb3J0IHZhciBTb3J0QXJyYXlTdHJpbmcgPSBmdW5jdGlvbiAoYXNTdHJpbmdzKSB7XHJcbiAgICByZXR1cm4gc24uU29ydEFycmF5U3RyaW5nKGFzU3RyaW5ncyk7XHJcbn07XHJcbi8vR2V0cyBuYW1lIGFycmF5IG9mIGFsbCB0aGUgYWN0b3JzIGluIHRoZSBhcmVhLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkuIEdlbmVyaWMgYWN0b3JzIGFyZSBtZXJnZWQgKGllLiAzIFdoaXRlcnVuIEd1YXJkKHMpKS4gRmlsdGVyIGtleXdvcmQgb3B0aW9uYWxcclxuZXhwb3J0IHZhciBHZXRTb3J0ZWRBY3Rvck5hbWVzID0gZnVuY3Rpb24gKGFrS2V5d29yZCwgYXNQbHVyYWwsIGFiSW52ZXJ0S2V5d29yZCkge1xyXG4gICAgaWYgKGFzUGx1cmFsID09PSB2b2lkIDApIHsgYXNQbHVyYWwgPSBcIihzKVwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U29ydGVkQWN0b3JOYW1lcyhha0tleXdvcmQsIGFzUGx1cmFsLCBhYkludmVydEtleXdvcmQpO1xyXG59O1xyXG4vL0dldHMgbmFtZSBhcnJheSBvZiBOUENzLCBzb3J0ZWQgYWxwaGFiZXRpY2FsbHkuIEdlbmVyaWMgYWN0b3JzIGFyZSBtZXJnZWQgKGllLiAzIFdoaXRlcnVuIEd1YXJkKHMpKS5cclxuZXhwb3J0IHZhciBHZXRTb3J0ZWROUENOYW1lcyA9IGZ1bmN0aW9uIChhaUFjdG9yQmFzZXMsIGFzUGx1cmFsKSB7XHJcbiAgICBpZiAoYXNQbHVyYWwgPT09IHZvaWQgMCkgeyBhc1BsdXJhbCA9IFwiKHMpXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTb3J0ZWROUENOYW1lcyhhaUFjdG9yQmFzZXMsIGFzUGx1cmFsKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQk9PS1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DbGVhcnMgcmVhZCBmbGFnIChhbmQgd3JpdGVzIGl0IHRvIHRoZSBzYXZlKS5cclxuZXhwb3J0IHZhciBDbGVhclJlYWRGbGFnID0gZnVuY3Rpb24gKGFrQm9vaykge1xyXG4gICAgcmV0dXJuIHNuLkNsZWFyUmVhZEZsYWcoYWtCb29rKTtcclxufTtcclxuLy9TZXRzIHJlYWQgZmxhZyAoYW5kIHdyaXRlcyBpdCB0byB0aGUgc2F2ZSkuXHJcbmV4cG9ydCB2YXIgU2V0UmVhZEZsYWcgPSBmdW5jdGlvbiAoYWtCb29rKSB7XHJcbiAgICByZXR1cm4gc24uU2V0UmVhZEZsYWcoYWtCb29rKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ0VMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGNlbGwgbm9ydGggcm90YXRpb24vd29ybGRzcGFjZSBub3J0aCByb3RhdGlvbiBmb3IgZXh0ZXJpb3IgY2VsbHMuIFJvdGF0aW9uIGlzIGluIGRlZ3JlZXMuXHJcbmV4cG9ydCB2YXIgR2V0Q2VsbE5vcnRoUm90YXRpb24gPSBmdW5jdGlvbiAoYWtDZWxsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q2VsbE5vcnRoUm90YXRpb24oYWtDZWxsKTtcclxufTtcclxuLy9HZXRzIGNlbGwgbGlnaHRpbmcgdGVtcGxhdGVcclxuZXhwb3J0IHZhciBHZXRMaWdodGluZ1RlbXBsYXRlID0gZnVuY3Rpb24gKGFrQ2VsbCkgeyByZXR1cm4gc24uR2V0TGlnaHRpbmdUZW1wbGF0ZShha0NlbGwpOyB9O1xyXG4vL1NldHMgY2VsbCBsaWdodGluZyB0ZW1wbGF0ZVxyXG5leHBvcnQgdmFyIFNldExpZ2h0aW5nVGVtcGxhdGUgPSBmdW5jdGlvbiAoYWtDZWxsLCBha0xpZ2h0aW5nVGVtcGxhdGUpIHsgcmV0dXJuIHNuLlNldExpZ2h0aW5nVGVtcGxhdGUoYWtDZWxsLCBha0xpZ2h0aW5nVGVtcGxhdGUpOyB9O1xyXG4vL1NldHMgY2VsbCBub3J0aCByb3RhdGlvbi5cclxuZXhwb3J0IHZhciBTZXRDZWxsTm9ydGhSb3RhdGlvbiA9IGZ1bmN0aW9uIChha0NlbGwsIGFmQW5nbGUpIHsgcmV0dXJuIHNuLlNldENlbGxOb3J0aFJvdGF0aW9uKGFrQ2VsbCwgYWZBbmdsZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0RFQlVHXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGZ1bmN0aW9uYWwgc3BlbGxzIChpZS4gc3BlbGxzIHRoYXQgY2FuIGJlIGxlYXJuZWQgZnJvbSBzcGVsbCBib29rcywgYW5kIG5vdCBhbGwgMjAwMCsgc3BlbGxzIGxpa2UgcHNiKVxyXG5leHBvcnQgdmFyIEdpdmVQbGF5ZXJTcGVsbEJvb2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HaXZlUGxheWVyU3BlbGxCb29rKCk7IH07XHJcbi8vRHVtcHMgY3VycmVudCBhbmltYXRpb24gdmFyaWFibGVzIHRvIHBvM19wYXB5cnVzZXh0ZW5kZXI2NC5sb2dcclxuZXhwb3J0IHZhciBEdW1wQW5pbWF0aW9uVmFyaWFibGVzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzQW5pbWF0aW9uVmFyUHJlZml4KSB7IHJldHVybiBzbi5EdW1wQW5pbWF0aW9uVmFyaWFibGVzKGFrQWN0b3IsIGFzQW5pbWF0aW9uVmFyUHJlZml4KTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vREVURUNUSU9OXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1JldHVybnMgd2hldGhlciBvdGhlciBOUENzIGNhbiBkZXRlY3QgdGhpcyBhY3Rvci5cclxuLy8wIC0gIGNhbid0IGJlIGRldGVjdGVkLCAxIC0gbm9ybWFsLCAyIC0gIHdpbGwgYWx3YXlzIGJlIGRldGVjdGVkXHJcbmV4cG9ydCB2YXIgQ2FuQWN0b3JCZURldGVjdGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5DYW5BY3RvckJlRGV0ZWN0ZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoaXMgYWN0b3IgY2FuIGRldGVjdCBvdGhlciBOUENzLlxyXG4vLzAgLSBjYW4gbmV2ZXIgZGV0ZWN0LCAxLSBub3JtYWwsIDIgLSB3aWxsIGFsd2F5cyBkZXRlY3Qgb3RoZXJzXHJcbmV4cG9ydCB2YXIgQ2FuQWN0b3JEZXRlY3QgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkNhbkFjdG9yRGV0ZWN0KGFrQWN0b3IpO1xyXG59O1xyXG4vL0ZvcmNlIHRoaXMgYWN0b3IgdG8gYmUgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDcyAoYWN0b3IgaXMgYWx3YXlzIHZpc2libGUpLlxyXG5leHBvcnQgdmFyIEZvcmNlQWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkZvcmNlQWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7XHJcbn07XHJcbi8vRm9yY2UgdGhpcyBhY3RvciB0byBhbHdheXMgZGV0ZWN0IHRoZWlyIHRhcmdldHNcclxuZXhwb3J0IHZhciBGb3JjZUFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Gb3JjZUFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGlzIGFjdG9yIGlzIGN1cnJlbnRseSBkZXRlY3RlZCBieSBvdGhlciBOUENzXHJcbmV4cG9ydCB2YXIgSXNEZXRlY3RlZEJ5QW55b25lID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLklzRGV0ZWN0ZWRCeUFueW9uZShha0FjdG9yKTsgfTtcclxuLy9QcmV2ZW50IHRoaXMgYWN0b3IgZnJvbSBiZWluZyBkZXRlY3RlZCBieSBvdGhlciBOUENzIChhY3RvciBpcyBoaWRkZW4pLlxyXG5leHBvcnQgdmFyIFByZXZlbnRBY3RvckRldGVjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5QcmV2ZW50QWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7IH07XHJcbi8vUHJldmVudCB0aGlzIGFjdG9yIGZyb20gZGV0ZWN0aW5nIG90aGVyIE5QQ3MgKGFjdG9yIGlzIGJsaW5kKVxyXG5leHBvcnQgdmFyIFByZXZlbnRBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5QcmV2ZW50QWN0b3JEZXRlY3RpbmcoYWtBY3Rvcik7IH07XHJcbi8vUmVzZXRzIGRldGVjdGlvbiBzdGF0ZVxyXG5leHBvcnQgdmFyIFJlc2V0QWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLlJlc2V0QWN0b3JEZXRlY3Rpb24oYWtBY3Rvcik7XHJcbn07XHJcbi8vUmVzZXRzIGRldGVjdGluZyBzdGF0ZVxyXG5leHBvcnQgdmFyIFJlc2V0QWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLlJlc2V0QWN0b3JEZXRlY3RpbmcoYWtBY3Rvcik7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0VGRkVDVFNIQURFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIEVGRkVDVCBTSEFERVIgRkxBR1NcclxuICAgICAgICBrTm9NZW1icmFuZVNoYWRlciA9IDB4MDAwMDAwMDFcclxuICAgICAgICBrTWVtYnJhbmVHcmV5c2NhbGVDb2xvciA9IDB4MDAwMDAwMDJcclxuICAgICAgICBrTWVtYnJhbmVHcmV5c2NhbGVBbHBoYSA9IDB4MDAwMDAwMDRcclxuICAgICAgICBrTm9QYXJ0aWNsZVNoYWRlciA9IDB4MDAwMDAwMDhcclxuICAgICAgICBrRWRnZUVmZmVjdEludmVyc2UgPSAweDAwMDAwMDEwXHJcbiAgICAgICAga0FmZmVjdFNraW5Pbmx5ID0gMHgwMDAwMDAyMFxyXG4gICAgICAgIGtJZ25vcmVBbHBoYSA9IDB4MDAwMDAwNDBcclxuICAgICAgICBrUHJvamVjdFVWID0gMHgwMDAwMDA4MFxyXG4gICAgICAgIGtJZ25vcmVCYXNlR2VvbWV0cnlBbHBoYSA9IDB4MDAwMDAxMDBcclxuICAgICAgICBrTGlnaHRpbmcgPSAweDAwMDAwMjAwXHJcbiAgICAgICAga05vV2VhcG9ucyA9IDB4MDAwMDA0MDBcclxuICAgICAgICBrUGFydGljbGVBbmltYXRlZCA9IDB4MDAwMDgwMDBcclxuICAgICAgICBrUGFydGljbGVHcmV5c2NhbGVDb2xvciA9IDB4MDAwMTAwMDBcclxuICAgICAgICBrUGFydGljbGVHcmV5c2NhbGVBbHBoYSA9IDB4MDAwMjAwMDBcclxuICAgICAgICBrVXNlQmxvb2RHZW9tZXRyeSA9IDB4MDEwMDAwMDAgKi9cclxuLy9HZXRzIGFkZG9uIG1vZGVsc1xyXG5leHBvcnQgdmFyIEdldEFkZG9uTW9kZWxzID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRBZGRvbk1vZGVscyhha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGVmZmVjdCBzaGFkZXJzIHByZXNlbnQvcHJlc2VudCBhbmQgYWN0aXZlIChvbiBvYmplY3RzKSB3aXRoaW4gdGhlIGxvYWRlZCBhcmVhLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdFNoYWRlclRvdGFsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFiQWN0aXZlKSB7IHJldHVybiBzbi5HZXRFZmZlY3RTaGFkZXJUb3RhbENvdW50KGFrRWZmZWN0U2hhZGVyLCBhYkFjdGl2ZSk7IH07XHJcbi8vSXMgZWZmZWN0IHNoYWRlciBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc0VmZmVjdFNoYWRlckZsYWdTZXQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uSXNFZmZlY3RTaGFkZXJGbGFnU2V0KGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL0dldCBmaWxsIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZUZpbGxUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZUZpbGxUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgaG9sZXMgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldE1lbWJyYW5lSG9sZXNUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZUhvbGVzVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IG1lbWJyYW5lIHBhbGV0dGUgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldHMgZnVsbCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZUZ1bGxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVGdWxsQ291bnQoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBwYXJ0aWNsZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlU2hhZGVyVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0cyBwZXJzaXN0ZW50IGNvdW50LlxyXG5leHBvcnQgdmFyIEdldFBhcnRpY2xlUGVyc2lzdGVudENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudChha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQ2xlYXJzIGVmZmVjdCBzaGFkZXIgZmxhZy5cclxuZXhwb3J0IHZhciBDbGVhckVmZmVjdFNoYWRlckZsYWcgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJFZmZlY3RTaGFkZXJGbGFnKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL0dldHMgYWRkb24gbW9kZWxzXHJcbmV4cG9ydCB2YXIgU2V0QWRkb25Nb2RlbHMgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFrRGVicmlzKSB7IHJldHVybiBzbi5TZXRBZGRvbk1vZGVscyhha0VmZmVjdFNoYWRlciwgYWtEZWJyaXMpOyB9O1xyXG4vL1NldCBlZmZlY3Qgc2hhZGVyIGZsYWcuXHJcbmV4cG9ydCB2YXIgU2V0RWZmZWN0U2hhZGVyRmxhZyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRFZmZlY3RTaGFkZXJGbGFnKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBjb2xvciBrZXlcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZUNvbG9yS2V5RGF0YSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSkge1xyXG4gICAgcmV0dXJuIHNuLlNldE1lbWJyYW5lQ29sb3JLZXlEYXRhKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKTtcclxufTtcclxuLy9TZXQgbWVtYnJhbmUgZmlsbCB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVGaWxsVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVGaWxsVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IG1lbWJyYW5lIGhvbGVzIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZUhvbGVzVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVIb2xlc1RleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgcGFydGljbGUgY29sb3Iga2V5XHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVDb2xvcktleURhdGEgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpIHtcclxuICAgIHJldHVybiBzbi5TZXRQYXJ0aWNsZUNvbG9yS2V5RGF0YShha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSk7XHJcbn07XHJcbi8vU2V0cyBmdWxsIHBhcnRpY2xlIGNvdW50LlxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlRnVsbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlRnVsbENvdW50KGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpOyB9O1xyXG4vL1NldCBwYXJ0aWNsZSBzaGFkZXIgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldHMgcGVyc2lzdGVudCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KTsgfTtcclxuLy9TZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlU2hhZGVyVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9FTkNIQU5UTUVOVCAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLyoqIEVOQ0hBTlRNRU5UIFRZUEVTXHJcbiAgICAgICAgRW5jaGFudG1lbnQgPSA2LFxyXG4gICAgICAgIFN0YWZmRW5jaGFudG1lbnQgPSAxMiAqL1xyXG4vL1JldHVybnMgZW5jaGFudG1lbnQgdHlwZS4gLTEgaWYgIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRFbmNoYW50bWVudFR5cGUgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCkgeyByZXR1cm4gc24uR2V0RW5jaGFudG1lbnRUeXBlKGFrRW5jaGFudG1lbnQpOyB9O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb0VuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb0VuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBFbmNoYW50bWVudCB0byB0YXJnZXQgRW5jaGFudG1lbnQsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub0VuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBFbmNoYW50bWVudCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIEVuY2hhbnRtZW50IHRoYXQgbWF0Y2hlcyBFbmNoYW50bWVudCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbUVuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb01hdGNoRnJvbSwgYWlJbmRleCkge1xyXG4gICAgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvTWF0Y2hGcm9tLCBhaUluZGV4KTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRkVDXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZFQyBmdW5jdGlvblxyXG4vL3JldHVybnMgZWZmZWN0IHR5cGUsIGVmZmVjdCBza2lsbCBsZXZlbCwgYW5kIHByb2plY3RpbGUgdHlwZSwgb2YgdGhlIGhpZ2hlc3QgbWFnbml0dWRlIGVmZmVjdCBwcmVzZW50IG9uIHRoZSBhY3RvclxyXG4vL3Blcm1hbmVudCAtIFNVTiwgQUNJRCwgRklSRSwgRlJPU1QsIFNIT0NLLCBEUkFJTlxyXG4vL3RlbXBvcmFyeSAtIFBPSVNPTiwgRkVBUlxyXG5leHBvcnQgdmFyIEdldERlYXRoRWZmZWN0VHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCB0eXBlKSB7IHJldHVybiBzbi5HZXREZWF0aEVmZmVjdFR5cGUoYWtBY3RvciwgdHlwZSk7IH07XHJcbi8vMCAtIGNoYXJyZWQvc2tlbGV0b25cclxuLy8xIC0gZHJhaW5lZFxyXG4vLzIgLSBwb2lzb25lZC9mcmlnaHRlbmVkXHJcbi8vMy0gIGFnZWRcclxuLy80IC0gY2hhcnJlZCBjcmVhdHVyZVxyXG4vLzUgLSBmcm96ZW5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RzTm90T2ZUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpRWZmZWN0VHlwZSkgeyByZXR1cm4gc24uUmVtb3ZlRWZmZWN0c05vdE9mVHlwZShha0FjdG9yLCBhaUVmZmVjdFR5cGUpOyB9O1xyXG4vLyAwIC0gcGVybWFuZW50XHJcbi8vIDEgLSB0ZW1wb3JhcnlcclxuLy8gMiAtIGZyb3plbkFjdG9yXHJcbi8vIDMgLSBmcm96ZW5Db2xcclxuZXhwb3J0IHZhciBTZW5kRkVDUmVzZXRFdmVudCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaVR5cGUsIGFiUmVzZXQzRCkgeyByZXR1cm4gc24uU2VuZEZFQ1Jlc2V0RXZlbnQoYWtBY3RvciwgYWlUeXBlLCBhYlJlc2V0M0QpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GT1JNXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1JlY29yZCBmbGFnc1xyXG4vL2h0dHBzOi8vZW4udWVzcC5uZXQvd2lraS9Ta3lyaW1fTW9kOk1vZF9GaWxlX0Zvcm1hdCNSZWNvcmRzXHJcbi8vZXZhbHVhdGVzIGNvbmRpdGlvbiBsaXN0cyBmb3Igc3BlbGxzL3BvdGlvbnMvZW5jaGFudG1lbnRzL21nZWZzIGFuZCByZXR1cm5zIGlmIHRoZXkgY2FuIGJlIGZ1bGxmaWxsZWRcclxuZXhwb3J0IHZhciBFdmFsdWF0ZUNvbmRpdGlvbkxpc3QgPSBmdW5jdGlvbiAoYWtGb3JtLCBha0FjdGlvblJlZiwgYWtUYXJnZXRSZWYpIHsgcmV0dXJuIHNuLkV2YWx1YXRlQ29uZGl0aW9uTGlzdChha0Zvcm0sIGFrQWN0aW9uUmVmLCBha1RhcmdldFJlZik7IH07XHJcbi8vQ2xlYXIgcmVjb3JkIGZsYWdcclxuZXhwb3J0IHZhciBDbGVhclJlY29yZEZsYWcgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFyUmVjb3JkRmxhZyhha0Zvcm0sIGFpRmxhZyk7IH07XHJcbi8vQnVpbGRzIGEgbGlzdCBvZiBjb25kaXRpb25zIHByZXNlbnQgb24gdGhlIGZvcm0uIEluZGV4IGlzIGZvciBzcGVsbHMvb3RoZXIgZm9ybXMgdGhhdCBoYXZlIGxpc3RzIHdpdGggY29uZGl0aW9uc1xyXG4vL1NvbWUgY29uZGl0aW9ucyBtYXkgYmUgc2tpcHBlZCAoY29uZGl0aW9ucyB0aGF0IHJlcXVpcmUgbm9uIHBsYXllciByZWZlcmVuY2VzLCBvdmVybHkgY29tcGxleCBjb25kaXRpb25zIGludm9sdmluZyBwYWNrYWdlcy9hbGlhc2VzKVxyXG5leHBvcnQgdmFyIEdldENvbmRpdGlvbkxpc3QgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUluZGV4KSB7XHJcbiAgICBpZiAoYWlJbmRleCA9PT0gdm9pZCAwKSB7IGFpSW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uR2V0Q29uZGl0aW9uTGlzdChha0Zvcm0sIGFpSW5kZXgpO1xyXG59O1xyXG4vL0dldCBmb3JtIGVkaXRvcklEXHJcbmV4cG9ydCB2YXIgR2V0Rm9ybUVkaXRvcklEID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLkdldEZvcm1FZGl0b3JJRChha0Zvcm0pO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgZm9ybSBpcyBwYXJ0IG9mIHRoZSBtb2RcclxuZXhwb3J0IHZhciBJc0Zvcm1Jbk1vZCA9IGZ1bmN0aW9uIChha0Zvcm0sIGFzTW9kTmFtZSkgeyByZXR1cm4gc24uSXNGb3JtSW5Nb2QoYWtGb3JtLCBhc01vZE5hbWUpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgZm9ybSBpcyB0ZW1wb3JhcnkgKGllLiBoYXMgYSBmb3JtSUQgYmVnaW5uaW5nIHdpdGggRkYpXHJcbmV4cG9ydCB2YXIgSXNHZW5lcmF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLklzR2VuZXJhdGVkRm9ybShha0Zvcm0pO1xyXG59O1xyXG4vL0lzIHJlY29yZCBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc1JlY29yZEZsYWdTZXQgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzUmVjb3JkRmxhZ1NldChha0Zvcm0sIGFpRmxhZyk7IH07XHJcbi8vcmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGhhcyBzY3JpcHQgYXR0YWNoZWQuIElmIHNjcmlwdE5hbWUgaXMgZW1wdHksIGl0IHdpbGwgcmV0dXJuIGlmIHRoZSBmb3JtIGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0Zvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBhc1NjcmlwdE5hbWUpIHsgcmV0dXJuIHNuLklzU2NyaXB0QXR0YWNoZWRUb0Zvcm0oYWtGb3JtLCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vL1NldCByZWNvcmQgZmxhZ1xyXG5leHBvcnQgdmFyIFNldFJlY29yZEZsYWcgPSBmdW5jdGlvbiAoYWtGb3JtLCBhaUZsYWcpIHsgcmV0dXJuIHNuLlNldFJlY29yZEZsYWcoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMga2V5d29yZCB0byBmb3JtLiBGYWlscyBpZiB0aGUgZm9ybSBkb2Vzbid0IGFjY2VwdCBrZXl3b3Jkcy5cclxuZXhwb3J0IHZhciBBZGRLZXl3b3JkVG9Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5BZGRLZXl3b3JkVG9Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkKTsgfTtcclxuLy9GYXZvcml0ZXMgaXRlbSAobXVzdCBiZSBpbiBpbnZlbnRvcnkpIG9yIHNwZWxsL3Nob3V0XHJcbmV4cG9ydCB2YXIgTWFya0l0ZW1Bc0Zhdm9yaXRlID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLk1hcmtJdGVtQXNGYXZvcml0ZShha0Zvcm0pO1xyXG59O1xyXG4vL1JlcGxhY2VzIGdpdmVuIGtleXdvcmQgd2l0aCBuZXcgb25lIG9uIGZvcm0uIE9ubHkgbGFzdHMgZm9yIGEgc2luZ2xlIGdhbWluZyBzZXNzaW9uLiBbcG9ydGVkIGZyb20gRGllbmVzVG9vbHNdLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VLZXl3b3JkT25Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpIHsgcmV0dXJuIHNuLlJlcGxhY2VLZXl3b3JkT25Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpOyB9O1xyXG4vL1JlbW92ZXMga2V5d29yZCwgaWYgcHJlc2VudCwgZnJvbSBmb3JtLlxyXG5leHBvcnQgdmFyIFJlbW92ZUtleXdvcmRPbkZvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLlJlbW92ZUtleXdvcmRPbkZvcm0oYWtGb3JtLCBha0tleXdvcmQpOyB9O1xyXG4vL1VuZmF2b3JpdGVzIGl0ZW0gKG11c3QgYmUgaW4gaW52ZW50b3J5KSBvciBzcGVsbC9zaG91dFxyXG5leHBvcnQgdmFyIFVubWFya0l0ZW1Bc0Zhdm9yaXRlID0gZnVuY3Rpb24gKGFrRm9ybSkge1xyXG4gICAgcmV0dXJuIHNuLlVubWFya0l0ZW1Bc0Zhdm9yaXRlKGFrRm9ybSk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZVUk5JVFVSRVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyoqIEZVUk5JVFVSRSBUWVBFU1xyXG4gICAgICAgIFBlcmNoID0gMFxyXG4gICAgICAgIExlYW4gPSAxXHJcbiAgICAgICAgU2l0ID0gMlxyXG4gICAgICAgIFNsZWVwID0gMyAqL1xyXG4vL0dldHMgZnVybml0dXJlIHR5cGVcclxuZXhwb3J0IHZhciBHZXRGdXJuaXR1cmVUeXBlID0gZnVuY3Rpb24gKGFrRnVybml0dXJlKSB7IHJldHVybiBzbi5HZXRGdXJuaXR1cmVUeXBlKGFrRnVybml0dXJlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR0FNRVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIGFsbCBlbmNoYW50bWVudHMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsRW5jaGFudG1lbnRzID0gZnVuY3Rpb24gKGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxFbmNoYW50bWVudHMoYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZm9ybXMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBmb3JtdHlwZSBhbmQgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbEZvcm1zID0gZnVuY3Rpb24gKGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxGb3JtcyhhaUZvcm1UeXBlLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCByYWNlcyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxSYWNlcyA9IGZ1bmN0aW9uIChha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsUmFjZXMoYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgc3BlbGxzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS4gSXNQbGF5YWJsZSBmaWx0ZXJzIG91dCBzcGVsbHMgdGhhdCBhcmUgbm90IGZvdW5kIGluIHNwZWxsYm9va3MuXHJcbmV4cG9ydCB2YXIgR2V0QWxsU3BlbGxzID0gZnVuY3Rpb24gKGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSkge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgaWYgKGFiSXNQbGF5YWJsZSA9PT0gdm9pZCAwKSB7IGFiSXNQbGF5YWJsZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsU3BlbGxzKGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSk7XHJcbn07XHJcbi8qKiBBSSBQUk9DRVNTIExFVkVMXHJcbiAgICAgICAgSGlnaFByb2Nlc3MgPSAwXHJcbiAgICAgICAgTWlkZGxlSGlnaFByb2Nlc3MgPSAxXHJcbiAgICAgICAgTWlkZGxlTG93UHJvY2VzcyA9IDJcclxuICAgICAgICBMb3dQcm9jZXNzID0gMyAqL1xyXG4vL0dldHMgYWxsIGFjdG9ycyBieSBBSSBwcm9jZXNzaW5nIHR5cGUuIGh0dHBzOi8vZ2Vjay5iZXRoc29mdC5jb20vaW5kZXgucGhwP3RpdGxlPUdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsIGZvciBtb3JlIGluZm9cclxuZXhwb3J0IHZhciBHZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbCA9IGZ1bmN0aW9uIChhaUxldmVsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwoYWlMZXZlbCk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZm9ybXMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBmb3JtdHlwZSBhbmQgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxGb3Jtc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEZvcm1zSW5Nb2QoYXNNb2ROYW1lLCBhaUZvcm1UeXBlLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBlbmNoYW50bWVudHMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbEVuY2hhbnRtZW50c0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEVuY2hhbnRtZW50c0luTW9kKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgcmFjZXMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbFJhY2VzSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsUmFjZXNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHNwZWxscyBhZGRlZCBieSBhIHNwZWNpZmllZCBtb2QvZ2FtZSBlc20sIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsU3BlbGxzSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBha0tleXdvcmRzLCBhYklzUGxheWFibGUpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIGlmIChhYklzUGxheWFibGUgPT09IHZvaWQgMCkgeyBhYklzUGxheWFibGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFNwZWxsc0luTW9kKGFzTW9kTmFtZSwgYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKTtcclxufTtcclxuLy9HZXRzIGN1cnJlbnQgY2VsbCBpZiBpbiBpbnRlcmlvci9hdHRhY2hlZCBjZWxscyBpbiBleHRlcmlvci9za3kgY2VsbHMgaWYgaW4gd29ybGRzcGFjZSB3aXRoIG5vIGF0dGFjaGVkIGNlbGxzPz9cclxuZXhwb3J0IHZhciBHZXRBdHRhY2hlZENlbGxzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0QXR0YWNoZWRDZWxscygpOyB9O1xyXG4vL0dldHMgZm9ybSB1c2luZyBpdHMgZWRpdG9ySURcclxuZXhwb3J0IHZhciBHZXRGb3JtRnJvbUVkaXRvcklEID0gZnVuY3Rpb24gKGFzRWRpdG9ySUQpIHsgcmV0dXJuIHNuLkdldEZvcm1Gcm9tRWRpdG9ySUQoYXNFZGl0b3JJRCk7IH07XHJcbi8vR2V0cyB0aGUgdmFsdWUgb2YgdGhlIGJvb2xlYW4gZ2FtZXNldHRpbmcuIFJldHVybnMgLTEgaWYgZ21zdCBpcyBOb25lIG9yIG5vdCBhIGJvb2wuXHJcbmV4cG9ydCB2YXIgR2V0R2FtZVNldHRpbmdCb29sID0gZnVuY3Rpb24gKGFzR2FtZVNldHRpbmcpIHtcclxuICAgIHJldHVybiBzbi5HZXRHYW1lU2V0dGluZ0Jvb2woYXNHYW1lU2V0dGluZyk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIEdvZCBNb2RlIGlzIGVuYWJsZWRcclxuZXhwb3J0IHZhciBHZXRHb2RNb2RlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0R29kTW9kZSgpOyB9O1xyXG4vL0dldHMgbG9jYWwgZ3Jhdml0eSBvZiB0aGUgZXh0ZXJpb3Igd29ybGRzcGFjZS9pbnRlcmlvciBjZWxsLiBEZWZhdWx0IGdyYXZpdHkgaXMgWzAuMCwgMC4wLCAtOS44MV1cclxuZXhwb3J0IHZhciBHZXRMb2NhbEdyYXZpdHkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRMb2NhbEdyYXZpdHkoKTsgfTtcclxuLy9HZXRzIGhvdyBtYW55IGFjdG9ycyBhcmUgaW4gaGlnaCBwcm9jZXNzXHJcbmV4cG9ydCB2YXIgR2V0TnVtQWN0b3JzSW5IaWdoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0TnVtQWN0b3JzSW5IaWdoKCk7IH07XHJcbi8vUmV0dXJucyBhbGwgYWN0b3JzIHRoYXQgYXJlIGN1cnJlbnRseSBmb2xsb3dpbmcgdGhlIHBsYXllclxyXG5leHBvcnQgdmFyIEdldFBsYXllckZvbGxvd2VycyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldFBsYXllckZvbGxvd2VycygpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciBwbHVnaW4gZXhpc3RzXHJcbmV4cG9ydCB2YXIgSXNQbHVnaW5Gb3VuZCA9IGZ1bmN0aW9uIChha05hbWUpIHtcclxuICAgIHJldHVybiBzbi5Jc1BsdWdpbkZvdW5kKGFrTmFtZSk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIENDIFN1cnZpdmFsIE1vZGUgaXMgZW5hYmxlZFxyXG5leHBvcnQgdmFyIElzU3Vydml2YWxNb2RlQWN0aXZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uSXNTdXJ2aXZhbE1vZGVBY3RpdmUoKTsgfTtcclxuLy9TZXRzIGxvY2FsIGdyYXZpdHkgKG1zLTIpIG9mIHRoZSBleHRlcmlvciB3b3JsZHNwYWNlL2ludGVyaW9yIGNlbGwuXHJcbmV4cG9ydCB2YXIgU2V0TG9jYWxHcmF2aXR5ID0gZnVuY3Rpb24gKGFmWEF4aXMsIGFmWUF4aXMsIGFmWkF4aXMpIHsgcmV0dXJuIHNuLlNldExvY2FsR3Jhdml0eShhZlhBeGlzLCBhZllBeGlzLCBhZlpBeGlzKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vSEFaQVJEXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vKiogSEFaQVJEIEZMQUdTXHJcbiAgICAgICAgTm9uZSA9IDBcclxuICAgICAgICBQQ09ubHkgPSAweDAwMDAwMDAxXHJcbiAgICAgICAgSW5oZXJpdER1cmF0aW9uID0gMHgwMDAwMDAwMlxyXG4gICAgICAgIEFsaWduVG9Ob3JtYWwgPSAweDAwMDAwMDA0XHJcbiAgICAgICAgSW5oZXJpdFJhZGl1cyA9IDB4MDAwMDAwMDhcclxuICAgICAgICBEcm9wVG9Hcm91bmQgPSAweDAwMDAwMDEwICovXHJcbi8vR2V0cyBoYXphcmQgYXJ0IHBhdGgsIGVnLiBcIkVmZmVjdHMvTXlIYXphcmRBcnQubmlmXCJcclxuZXhwb3J0IHZhciBHZXRIYXphcmRBcnQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRBcnQoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgYXNzb2NpYXRlZCBJTU9EXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkSU1PRCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkSU1PRChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBJTU9EIHJhZGl1c1xyXG5leHBvcnQgdmFyIEdldEhhemFyZElNT0RSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElNT0RSYWRpdXMoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaW1wYWN0IGRhdGEgc2V0XHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkSVBEUyA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkSVBEUyhha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGlmZXRpbWVcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaWZldGltZSA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkTGlmZXRpbWUoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpZ2h0XHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGlnaHQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZExpZ2h0KGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaW1pdFxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpbWl0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkTGltaXQoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgaGF6YXJkIHJhZGl1c1xyXG5leHBvcnQgdmFyIEdldEhhemFyZFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZFJhZGl1cyhha0hhemFyZCk7XHJcbn07XHJcbi8vR2V0cyBoYXphcmQgc291bmRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRTb3VuZCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkU291bmQoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIHNwZWxsXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkU3BlbGwgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFNwZWxsKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIHRhcmdldCBpbnRlcnZhbCAoZHVyYXRpb24gYmV0d2VlbiBjYXN0cylcclxuZXhwb3J0IHZhciBHZXRIYXphcmRUYXJnZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwoYWtIYXphcmQpOyB9O1xyXG4vL0lzIGhhemFyZCBmbGFnIHNldD9cclxuZXhwb3J0IHZhciBJc0hhemFyZEZsYWdTZXQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uSXNIYXphcmRGbGFnU2V0KGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0NsZWFycyBoYXphcmQgZmxhZ1xyXG5leHBvcnQgdmFyIENsZWFySGF6YXJkRmxhZyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhckhhemFyZEZsYWcoYWtIYXphcmQsIGFpRmxhZyk7IH07XHJcbi8vU2V0cyBoYXphcmQgYXJ0IHBhdGguIERvZXMgbm90IHdvcmsgb24gYWN0aXZlIGhhemFyZHNcclxuZXhwb3J0IHZhciBTZXRIYXphcmRBcnQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFzUGF0aCkgeyByZXR1cm4gc24uU2V0SGF6YXJkQXJ0KGFrSGF6YXJkLCBhc1BhdGgpOyB9O1xyXG4vL1NldCBmbGFnXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkRmxhZyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRIYXphcmRGbGFnKGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vL1NldHMgSU1PRFxyXG5leHBvcnQgdmFyIFNldEhhemFyZElNT0QgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrSU1PRCkgeyByZXR1cm4gc24uU2V0SGF6YXJkSU1PRChha0hhemFyZCwgYWtJTU9EKTsgfTtcclxuLy9TZXRzIElNT0QgcmFkaXVzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkSU1PRFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldEhhemFyZElNT0RSYWRpdXMoYWtIYXphcmQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGltcGFjdCBkYXRhIHNldFxyXG5leHBvcnQgdmFyIFNldEhhemFyZElQRFMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrSVBEUykgeyByZXR1cm4gc24uU2V0SGF6YXJkSVBEUyhha0hhemFyZCwgYWtJUERTKTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaWZldGltZVxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpZmV0aW1lID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZkxpZmV0aW1lKSB7IHJldHVybiBzbi5TZXRIYXphcmRMaWZldGltZShha0hhemFyZCwgYWZMaWZldGltZSk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGlnaHRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaWdodCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtMaWdodCkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGlnaHQoYWtIYXphcmQsIGFrTGlnaHQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpbWl0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGltaXQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpTGltaXQpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpbWl0KGFrSGF6YXJkLCBhaUxpbWl0KTsgfTtcclxuLy9TZXRzIGhhemFyZCByYWRpdXNcclxuZXhwb3J0IHZhciBTZXRIYXphcmRSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRIYXphcmRSYWRpdXMoYWtIYXphcmQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGhhemFyZCBzb3VuZFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFNvdW5kID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha1NvdW5kKSB7IHJldHVybiBzbi5TZXRIYXphcmRTb3VuZChha0hhemFyZCwgYWtTb3VuZCk7IH07XHJcbi8vU2V0cyBoYXphcmQgc3BlbGxcclxuZXhwb3J0IHZhciBTZXRIYXphcmRTcGVsbCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtzcGVsbCkgeyByZXR1cm4gc24uU2V0SGF6YXJkU3BlbGwoYWtIYXphcmQsIGFrc3BlbGwpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGludGVydmFsXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmSW50ZXJ2YWwpIHsgcmV0dXJuIHNuLlNldEhhemFyZFRhcmdldEludGVydmFsKGFrSGF6YXJkLCBhZkludGVydmFsKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTElHSFRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0cyBsaWdodCBjb2xvci5cclxuZXhwb3J0IHZhciBHZXRMaWdodENvbG9yID0gZnVuY3Rpb24gKGFrTGlnaHQpIHsgcmV0dXJuIHNuLkdldExpZ2h0Q29sb3IoYWtMaWdodCk7IH07XHJcbi8vR2V0cyBsaWdodCBmYWRlIHJhbmdlLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0RmFkZSA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRGYWRlKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgYmFzZSBsaWdodCBGT1YuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRGT1YgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0Rk9WKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgbGlnaHQgcmFkaXVzIChyYWRpdXMgaXMgYWN0dWFsbHkgaW50IGJ1dCBjaGFuZ2luZyB0aGF0IHdvdWxkIGJyZWFrIG1vZHMgc28gZml4ZWQgdGhhdCBpbiBzb3VyY2UpLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0UmFkaXVzID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFJhZGl1cyhha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGxpZ2h0IGNvbG9yIGFzIFJHQiBhcnJheSBbMC0yNTVdLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0UkdCID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFJHQihha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGRlcHRoIGJpYXMsIHJldHVybnMgMSBpZiBub3Qgc2V0LlxyXG5leHBvcnQgdmFyIEdldExpZ2h0U2hhZG93RGVwdGhCaWFzID0gZnVuY3Rpb24gKGFrTGlnaHRPYmplY3QpIHsgcmV0dXJuIHNuLkdldExpZ2h0U2hhZG93RGVwdGhCaWFzKGFrTGlnaHRPYmplY3QpOyB9O1xyXG4vKiogTElHSFQgVFlQRVNcclxuICAgICAgICBIZW1pU2hhZG93ID0gMVxyXG4gICAgICAgIE9tbmkgPSAyXHJcbiAgICAgICAgT21uaVNoYWRvdyA9IDNcclxuICAgICAgICBTcG90ID0gNFxyXG4gICAgICAgIFNwb3RTaGFkb3cgPSA1ICovXHJcbi8vR2V0IGxpZ2h0IHR5cGVcclxuZXhwb3J0IHZhciBHZXRMaWdodFR5cGUgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0VHlwZShha0xpZ2h0KTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIGxpZ2h0IGNvbG9yLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0Q29sb3IgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWtDb2xvcmZvcm0pIHsgcmV0dXJuIHNuLlNldExpZ2h0Q29sb3IoYWtMaWdodCwgYWtDb2xvcmZvcm0pOyB9O1xyXG4vL1NldHMgbGlnaHQgZmFkZSByYW5nZS5cclxuZXhwb3J0IHZhciBTZXRMaWdodEZhZGUgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZSYW5nZSkgeyByZXR1cm4gc24uU2V0TGlnaHRGYWRlKGFrTGlnaHQsIGFmUmFuZ2UpOyB9O1xyXG4vL3NldHMgYmFzZSBsaWdodCBGT1YuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRGT1YgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZGT1YpIHsgcmV0dXJuIHNuLlNldExpZ2h0Rk9WKGFrTGlnaHQsIGFmRk9WKTsgfTtcclxuLy9TZXRzIGxpZ2h0IHJhZGl1cyAobWluaW11bSBsaWdodCByYWRpdXMgaXMgMTYpIC5cclxuZXhwb3J0IHZhciBTZXRMaWdodFJhZGl1cyA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0TGlnaHRSYWRpdXMoYWtMaWdodCwgYWZSYWRpdXMpOyB9O1xyXG4vL1NldHMgbGlnaHQgY29sb3IgdXNpbmcgUkdCIGFycmF5IFswLTI1NV0uIEFycmF5IG11c3QgY29udGFpbiAzIGVsZW1lbnRzIChyLGcsYikuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRSR0IgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWlSR0IpIHsgcmV0dXJuIHNuLlNldExpZ2h0UkdCKGFrTGlnaHQsIGFpUkdCKTsgfTtcclxuLy9zZXRzIGRlcHRoIGJpYXMgb24gbGlnaHQgcmVmZXJlbmNlLiBDcmVhdGVzIG5ldyBkZXB0aCBiaWFzIGV4dHJhZGF0YSBvbiBsaWdodHMgdGhhdCBkb24ndCBoYXZlIGl0IHNldC5cclxuZXhwb3J0IHZhciBTZXRMaWdodFNoYWRvd0RlcHRoQmlhcyA9IGZ1bmN0aW9uIChha0xpZ2h0T2JqZWN0LCBhZkRlcHRoQmlhcykgeyByZXR1cm4gc24uU2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMoYWtMaWdodE9iamVjdCwgYWZEZXB0aEJpYXMpOyB9O1xyXG4vL1NldHMgbGlnaHQgdHlwZS4gRG9lcyBub3QgcGVyc2lzdCBiZXR3ZWVuIHNlc3Npb25zLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0VHlwZSA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhaUxpZ2h0VHlwZSkgeyByZXR1cm4gc24uU2V0TGlnaHRUeXBlKGFrTGlnaHQsIGFpTGlnaHRUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTE9DQVRJT05cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0IHBhcmVudCBsb2NhdGlvbi5cclxuZXhwb3J0IHZhciBHZXRQYXJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIChha0xvYykgeyByZXR1cm4gc24uR2V0UGFyZW50TG9jYXRpb24oYWtMb2MpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldCBwYXJlbnQgbG9jYXRpb24uXHJcbmV4cG9ydCB2YXIgU2V0UGFyZW50TG9jYXRpb24gPSBmdW5jdGlvbiAoYWtMb2MsIGFrTmV3TG9jKSB7IHJldHVybiBzbi5TZXRQYXJlbnRMb2NhdGlvbihha0xvYywgYWtOZXdMb2MpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9NQUdJQyBFRkZFQ1RTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLS1cclxuLy9HZXRzIGFzc29jaWF0ZWQgZm9ybSAoTGlnaHQgZm9yIExpZ2h0IHNwZWxscywgQWN0b3IgZm9yIFN1bW1vbiBDcmVhdHVyZS4uLiksIGlmIGFueVxyXG5leHBvcnQgdmFyIEdldEFzc29jaWF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEFzc29jaWF0ZWRGb3JtKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vKiogRUZGRUNUIEFSQ0hFVFlQRVNcclxuICAgICAgICBWYWx1ZU1vZCA9IDBcclxuICAgICAgICBTY3JpcHQgPSAxXHJcbiAgICAgICAgRGlzcGVsID0gMlxyXG4gICAgICAgIEN1cmVEaXNlYXNlID0gM1xyXG4gICAgICAgIEFic29yYiA9IDRcclxuICAgICAgICBEdWFsVmFsdWVNb2QgPSA1XHJcbiAgICAgICAgQ2FsbSA9IDZcclxuICAgICAgICBEZW1vcmFsaXplID0gN1xyXG4gICAgICAgIEZyZW56eSA9IDhcclxuICAgICAgICBEaXNhcm0gPSA5XHJcbiAgICAgICAgQ29tbWFuZFN1bW1vbmVkID0gMTBcclxuICAgICAgICBJbnZpc2liaWxpdHkgPSAxMVxyXG4gICAgICAgIExpZ2h0ID0gMTJcclxuICAgICAgICBEYXJrbmVzcyA9IDEzXHJcbiAgICAgICAgTmlnaHRFeWUgPSAxNFxyXG4gICAgICAgIExvY2sgPSAxNVxyXG4gICAgICAgIE9wZW4gPSAxNlxyXG4gICAgICAgIEJvdW5kV2VhcG9uID0gMTdcclxuICAgICAgICBTdW1tb25DcmVhdHVyZSA9IDE4XHJcbiAgICAgICAgRGV0ZWN0TGlmZSA9IDE5XHJcbiAgICAgICAgVGVsZWtpbmVzaXMgPSAyMFxyXG4gICAgICAgIFBhcmFseXNpcyA9IDIxXHJcbiAgICAgICAgUmVhbmltYXRlID0gMjJcclxuICAgICAgICBTb3VsVHJhcCA9IDIzXHJcbiAgICAgICAgVHVyblVuZGVhZCA9IDI0XHJcbiAgICAgICAgR3VpZGUgPSAyNVxyXG4gICAgICAgIFdlcmV3b2xmRmVlZCA9IDI2XHJcbiAgICAgICAgQ3VyZVBhcmFseXNpcyA9IDI3XHJcbiAgICAgICAgQ3VyZUFkZGljdGlvbiA9IDI4XHJcbiAgICAgICAgQ3VyZVBvaXNvbiA9IDI5XHJcbiAgICAgICAgQ29uY3Vzc2lvbiA9IDMwXHJcbiAgICAgICAgVmFsdWVBbmRQYXJ0cyA9IDMxXHJcbiAgICAgICAgQWNjdW11bGF0ZU1hZ25pdHVkZSA9IDMyXHJcbiAgICAgICAgU3RhZ2dlciA9IDMzXHJcbiAgICAgICAgUGVha1ZhbHVlTW9kID0gMzRcclxuICAgICAgICBDbG9hayA9IDM1XHJcbiAgICAgICAgV2VyZXdvbGYgPSAzNlxyXG4gICAgICAgIFNsb3dUaW1lID0gMzdcclxuICAgICAgICBSYWxseSA9IDM4XHJcbiAgICAgICAgRW5oYW5jZVdlYXBvbiA9IDM5XHJcbiAgICAgICAgU3Bhd25IYXphcmQgPSA0MFxyXG4gICAgICAgIEV0aGVyZWFsaXplID0gNDFcclxuICAgICAgICBCYW5pc2ggPSA0MlxyXG4gICAgICAgIFNwYXduU2NyaXB0ZWRSZWYgPSA0M1xyXG4gICAgICAgIERpc2d1aXNlID0gNDRcclxuICAgICAgICBHcmFiQWN0b3IgPSA0NVxyXG4gICAgICAgIFZhbXBpcmVMb3JkID0gNDYgKi9cclxuLy9HZXRzIGVmZmVjdCBhcmNoZXR5cGUgb2YgbWFnaWNlZmZlY3QgYW5kIHJldHVybnMgYXMgaW50ICgwLTQ2KS5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RBcmNoZXR5cGVBc0ludCA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRFZmZlY3RBcmNoZXR5cGVBc0ludChha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIGVmZmVjdCBhcmNoZXR5cGUgb2YgbWFnaWNlZmZlY3QgYW5kIHJldHVybnMgYXMgU3RyaW5nLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdEFyY2hldHlwZUFzU3RyaW5nID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEVmZmVjdEFyY2hldHlwZUFzU3RyaW5nKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgcHJpbWFyeSBhY3RvciB2YWx1ZSBhcyBzdHJpbmcsIGlmIGFueSAoRnJvc3RSZXNpc3QsIFNwZWVkTXVsdCkuXHJcbmV4cG9ydCB2YXIgR2V0UHJpbWFyeUFjdG9yVmFsdWUgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0UHJpbWFyeUFjdG9yVmFsdWUoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBzZWNvbmRhcnkgYWN0b3IgdmFsdWUgYXMgc3RyaW5nLCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgR2V0U2Vjb25kYXJ5QWN0b3JWYWx1ZSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRTZWNvbmRhcnlBY3RvclZhbHVlKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vKiogTUdFRiBTT1VORCBUWVBFU1xyXG4gICAgICAgIERyYXcvU2hlYXRoZSA9IDBcclxuICAgICAgICBDaGFyZ2UgPSAxXHJcbiAgICAgICAgUmVhZHkgPSAyXHJcbiAgICAgICAgUmVsZWFzZSA9IDNcclxuICAgICAgICBDb25jZW50cmF0aW9uIENhc3QgTG9vcCA9IDRcclxuICAgICAgICBPbiBIaXQgPSA1ICovXHJcbi8vR2V0cyBTb3VuZCBhdHRhY2hlZCB0byBpbmRleCBvZiBTb3VuZCB0eXBlIHNwZWNpZmllZCBpbiBtYWdpYyBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgR2V0TWFnaWNFZmZlY3RTb3VuZCA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBhaVR5cGUpIHtcclxuICAgIHJldHVybiBzbi5HZXRNYWdpY0VmZmVjdFNvdW5kKGFrTWFnaWNFZmZlY3QsIGFpVHlwZSk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBhc3NvY2lhdGVkIGZvcm0gKExpZ2h0IGZvciBMaWdodCBzcGVsbHMsIEFjdG9yIGZvciBTdW1tb24gQ3JlYXR1cmUuLi4pLiBDYW4gYmUgTm9uZVxyXG5leHBvcnQgdmFyIFNldEFzc29jaWF0ZWRGb3JtID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFrRm9ybSkgeyByZXR1cm4gc24uU2V0QXNzb2NpYXRlZEZvcm0oYWtNYWdpY0VmZmVjdCwgYWtGb3JtKTsgfTtcclxuLy9TZXRzIHNvdW5kIGRlc2NyaXB0b3IgYXR0YWNoZWQgdG8gaW5kZXggb2YgU291bmQgdHlwZSBzcGVjaWZpZWQgaW4gbWFnaWMgZWZmZWN0LlxyXG5leHBvcnQgdmFyIFNldE1hZ2ljRWZmZWN0U291bmQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWtTb3VuZERlc2NyaXB0b3IsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0TWFnaWNFZmZlY3RTb3VuZChha01hZ2ljRWZmZWN0LCBha1NvdW5kRGVzY3JpcHRvciwgYWlUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vT0JKRUNUUkVGRVJFTkNFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGludmVudG9yeSBpdGVtcyB0byBhcnJheSwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkQWxsSXRlbXNUb0FycmF5ID0gZnVuY3Rpb24gKGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRBbGxJdGVtc1RvQXJyYXkoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBhbGwgaW52ZW50b3J5IGl0ZW1zIHRvIGZvcm1saXN0LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRBbGxJdGVtc1RvTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0LCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRBbGxJdGVtc1RvTGlzdChha1JlZiwgYWtMaXN0LCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgaW52ZW50b3J5IGl0ZW1zIG1hdGNoaW5nIGZvcm10eXBlIHRvIGFycmF5LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRJdGVtc09mVHlwZVRvQXJyYXkgPSBmdW5jdGlvbiAoYWtSZWYsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEl0ZW1zT2ZUeXBlVG9BcnJheShha1JlZiwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGludmVudG9yeSBpdGVtcyBtYXRjaGluZyBmb3JtdHlwZSB0byBmb3JtbGlzdCwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkSXRlbXNPZlR5cGVUb0xpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkSXRlbXNPZlR5cGVUb0xpc3QoYWtSZWYsIGFrTGlzdCwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9GaW5kcyBhbGwgcmVmZXJlbmNlcyBvZiBmb3JtIHR5cGUgaW4gbG9hZGVkIGNlbGxzLCB3aXRoaW4gcmFkaXVzIGZyb20gcmVmLiBJZiBhZlJhZGl1cyBpcyAwLCBpdCB3aWxsIGdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIGFsbCBhdHRhY2hlZCBjZWxsc1xyXG5leHBvcnQgdmFyIEZpbmRBbGxSZWZlcmVuY2VzT2ZGb3JtVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgZm9ybVR5cGUsIGFmUmFkaXVzKSB7XHJcbiAgICByZXR1cm4gc24uRmluZEFsbFJlZmVyZW5jZXNPZkZvcm1UeXBlKGFrUmVmLCBmb3JtVHlwZSwgYWZSYWRpdXMpO1xyXG59O1xyXG4vL0ZpbmQgYWxsIHJlZmVyZW5jZXMgd2l0aCBrZXl3b3JkIGluIGxvYWRlZCBjZWxscywgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc1dpdGhLZXl3b3JkID0gZnVuY3Rpb24gKGFrUmVmLCBrZXl3b3JkT3JMaXN0LCBhZlJhZGl1cywgYWJNYXRjaEFsbCkge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzV2l0aEtleXdvcmQoYWtSZWYsIGtleXdvcmRPckxpc3QsIGFmUmFkaXVzLCBhYk1hdGNoQWxsKTtcclxufTtcclxuLy9GaW5kIGFsbCByZWZlcmVuY2VzIG1hdGNoaW5nIGJhc2UgZm9ybS9pbiBmb3JtbGlzdCwgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc09mVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtGb3JtT3JMaXN0LCBhZlJhZGl1cykge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzT2ZUeXBlKGFrUmVmLCBha0Zvcm1Pckxpc3QsIGFmUmFkaXVzKTtcclxufTtcclxuLy9HZXRzIHRoZSBmaXJzdCBpdGVtIGluIGludmVudG9yeSB0aGF0IGV4aXN0cyBpbiBmb3JtbGlzdC5cclxuZXhwb3J0IHZhciBGaW5kRmlyc3RJdGVtSW5MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QpIHsgcmV0dXJuIHNuLkZpbmRGaXJzdEl0ZW1Jbkxpc3QoYWtSZWYsIGFrTGlzdCk7IH07XHJcbi8vR2V0cyBhY3RpdmF0ZSBjaGlsZHJlbiAtIHNlZSBJc0FjdGl2YXRlQ2hpbGRcclxuZXhwb3J0IHZhciBHZXRBY3RpdmF0ZUNoaWxkcmVuID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RpdmF0ZUNoaWxkcmVuKGFrUmVmKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgZ2FtZWJyeW8gYW5pbWF0aW9uXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZlR2FtZWJyeW9BbmltYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdGl2ZUdhbWVicnlvQW5pbWF0aW9uKGFrUmVmKTsgfTtcclxuLy9HZXRzIGFjdG9yIHJlc3BvbnNpYmxlIGZvciBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JDYXVzZSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0b3JDYXVzZShha1JlZik7IH07XHJcbi8vR2V0IGFsbCBhcnQgb2JqZWN0cyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBbGxBcnRPYmplY3RzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBbGxBcnRPYmplY3RzKGFrUmVmKTsgfTtcclxuLy9HZXQgYWxsIGVmZmVjdCBzaGFkZXJzIGF0dGFjaGVkIHRvIHRoaXMgb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFsbEVmZmVjdFNoYWRlcnMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFsbEVmZmVjdFNoYWRlcnMoYWtSZWYpOyB9O1xyXG4vL0dldHMgY2xvc2VzdCBhY3RvciB0byByZWYgKHdpdGhvdXQgcmV0dXJuaW5nIHRoZSByZWZlcmVuY2UgaXRzZWxmKS5cclxuZXhwb3J0IHZhciBHZXRDbG9zZXN0QWN0b3JGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBhYklnbm9yZVBsYXllcikgeyByZXR1cm4gc24uR2V0Q2xvc2VzdEFjdG9yRnJvbVJlZihha1JlZiwgYWJJZ25vcmVQbGF5ZXIpOyB9O1xyXG4vL0dldHMgZHVyYXRpb24gb2YgdGhlIGVmZmVjdHNoYWRlciBvbiB0aGUgcmVmLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdFNoYWRlckR1cmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlcikgeyByZXR1cm4gc24uR2V0RWZmZWN0U2hhZGVyRHVyYXRpb24oYWtSZWYsIGFrU2hhZGVyKTsgfTtcclxuLy9HZXRzIHRoZSBkb29yIHdoaWNoIGlzIGxpbmtlZCB0byB0aGlzIGxvYWQgZG9vci5cclxuZXhwb3J0IHZhciBHZXREb29yRGVzdGluYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldERvb3JEZXN0aW5hdGlvbihha1JlZik7IH07XHJcbi8vR2V0cyBhbGwgcmVmcyBsaW5rZWQgdG8gYWtSZWYuIEtleXdvcmQgb3B0aW9uYWwuXHJcbmV4cG9ydCB2YXIgR2V0TGlua2VkQ2hpbGRyZW4gPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uR2V0TGlua2VkQ2hpbGRyZW4oYWtSZWYsIGFrS2V5d29yZCk7IH07XHJcbi8vR2V0cyB0aGUgc291cmNlIG9mIHRoZSBtYWdpYyBlZmZlY3QgKHNwZWxsL2VuY2hhbnRtZW50L3Njcm9sbCBldGMpIGFuZCB0aGUgY2FzdGVyLiBNYWdpYyBlZmZlY3QgbXVzdCBiZSBwcmVzZW50IG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgR2V0TWFnaWNFZmZlY3RTb3VyY2UgPSBmdW5jdGlvbiAoYWtSZWYsIGFrRWZmZWN0KSB7IHJldHVybiBzbi5HZXRNYWdpY0VmZmVjdFNvdXJjZShha1JlZiwgYWtFZmZlY3QpOyB9O1xyXG4vKiogTUFURVJJQUwgVFlQRVMgLSBTdHJpbmdcclxuICAgICAgICBTdG9uZUJyb2tlblxyXG4gICAgICAgIEJsb2NrQmxhZGUxSGFuZFxyXG4gICAgICAgIE1lYXRcclxuICAgICAgICBDYXJyaWFnZVdoZWVsXHJcbiAgICAgICAgTWV0YWxMaWdodFxyXG4gICAgICAgIFdvb2RMaWdodFxyXG4gICAgICAgIFNub3dcclxuICAgICAgICBHcmF2ZWxcclxuICAgICAgICBDaGFpbk1ldGFsXHJcbiAgICAgICAgQm90dGxlXHJcbiAgICAgICAgV29vZFxyXG4gICAgICAgIEFzaFxyXG4gICAgICAgIFNraW5cclxuICAgICAgICBCbG9ja0JsdW50XHJcbiAgICAgICAgRExDMURlZXJTa2luXHJcbiAgICAgICAgSW5zZWN0XHJcbiAgICAgICAgQmFycmVsXHJcbiAgICAgICAgQ2VyYW1pY01lZGl1bVxyXG4gICAgICAgIEJhc2tldFxyXG4gICAgICAgIEljZVxyXG4gICAgICAgIEdsYXNzU3RhaXJzXHJcbiAgICAgICAgU3RvbmVTdGFpcnNcclxuICAgICAgICBXYXRlclxyXG4gICAgICAgIERyYXVnclNrZWxldG9uXHJcbiAgICAgICAgQmxhZGUxSGFuZFxyXG4gICAgICAgIEJvb2tcclxuICAgICAgICBDYXJwZXRcclxuICAgICAgICBNZXRhbFNvbGlkXHJcbiAgICAgICAgQXhlMUhhbmRcclxuICAgICAgICBCbG9ja0JsYWRlMkhhbmRcclxuICAgICAgICBPcmdhbmljTGFyZ2VcclxuICAgICAgICBBbXVsZXRcclxuICAgICAgICBXb29kU3RhaXJzXHJcbiAgICAgICAgTXVkXHJcbiAgICAgICAgQm91bGRlclNtYWxsXHJcbiAgICAgICAgU25vd1N0YWlyc1xyXG4gICAgICAgIFN0b25lSGVhdnlcclxuICAgICAgICBEcmFnb25Ta2VsZXRvblxyXG4gICAgICAgIFRyYXBcclxuICAgICAgICBCb3dzU3RhdmVzXHJcbiAgICAgICAgQWxkdWluXHJcbiAgICAgICAgQmxvY2tCb3dzU3RhdmVzXHJcbiAgICAgICAgV29vZEFzU3RhaXJzXHJcbiAgICAgICAgU3RlZWxHcmVhdFN3b3JkXHJcbiAgICAgICAgR3Jhc3NcclxuICAgICAgICBCb3VsZGVyTGFyZ2VcclxuICAgICAgICBTdG9uZUFzU3RhaXJzXHJcbiAgICAgICAgQmxhZGUySGFuZFxyXG4gICAgICAgIEJvdHRsZVNtYWxsXHJcbiAgICAgICAgQm9uZUFjdG9yXHJcbiAgICAgICAgU2FuZFxyXG4gICAgICAgIE1ldGFsSGVhdnlcclxuICAgICAgICBETEMxU2FicmVDYXRQZWx0XHJcbiAgICAgICAgSWNlRm9ybVxyXG4gICAgICAgIERyYWdvblxyXG4gICAgICAgIEJsYWRlMUhhbmRTbWFsbFxyXG4gICAgICAgIFNraW5TbWFsbFxyXG4gICAgICAgIFBvdHNQYW5zXHJcbiAgICAgICAgU2tpblNrZWxldG9uXHJcbiAgICAgICAgQmx1bnQxSGFuZFxyXG4gICAgICAgIFN0b25lU3RhaXJzQnJva2VuXHJcbiAgICAgICAgU2tpbkxhcmdlXHJcbiAgICAgICAgT3JnYW5pY1xyXG4gICAgICAgIEJvbmVcclxuICAgICAgICBXb29kSGVhdnlcclxuICAgICAgICBDaGFpblxyXG4gICAgICAgIERpcnRcclxuICAgICAgICBHaG9zdFxyXG4gICAgICAgIFNraW5NZXRhbExhcmdlXHJcbiAgICAgICAgQmxvY2tBeGVcclxuICAgICAgICBBcm1vckxpZ2h0XHJcbiAgICAgICAgU2hpZWxkTGlnaHRcclxuICAgICAgICBDb2luXHJcbiAgICAgICAgQmxvY2tCbHVudDJIYW5kXHJcbiAgICAgICAgU2hpZWxkSGVhdnlcclxuICAgICAgICBBcm1vckhlYXZ5XHJcbiAgICAgICAgQXJyb3dcclxuICAgICAgICBHbGFzc1xyXG4gICAgICAgIFN0b25lXHJcbiAgICAgICAgV2F0ZXJQdWRkbGVcclxuICAgICAgICBDbG90aFxyXG4gICAgICAgIFNraW5NZXRhbFNtYWxsXHJcbiAgICAgICAgV2FyZFxyXG4gICAgICAgIFdlYlxyXG4gICAgICAgIFRyYWlsZXJTdGVlbFN3b3JkXHJcbiAgICAgICAgQmx1bnQySGFuZFxyXG4gICAgICAgIERMQzFTd2luZ2luZ0JyaWRnZVxyXG4gICAgICAgIEJvdWxkZXJNZWRpdW0gKi9cclxuLy9HZXRzIHRoZSBzcGVjaWZpZWQgY29sbGlzaW9uIHNoYXBlJ3MgaGF2b2sgbWF0ZXJpYWwgdHlwZXMgYXMgc3RyaW5nIGFycmF5LiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRlcmlhbCB0eXBlIGlmIG5vZGVOYW1lIGlzIGVtcHR5XHJcbmV4cG9ydCB2YXIgR2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lKSB7XHJcbiAgICBpZiAoYXNOb2RlTmFtZSA9PT0gdm9pZCAwKSB7IGFzTm9kZU5hbWUgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0TWF0ZXJpYWxUeXBlKGFrUmVmLCBhc05vZGVOYW1lKTtcclxufTtcclxuLy9HZXRzIHRoZSBtb3Rpb24gdHlwZSBvZiB0aGUgb2JqZWN0IChzZWUgdmFuaWxsYSBTZXRNb3Rpb25UeXBlIGZvciB0eXBlcykuIFJldHVybnMgLTEgaWYgM2QgaXMgbm90IGxvYWRlZFxyXG5leHBvcnQgdmFyIEdldE1vdGlvblR5cGUgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldE1vdGlvblR5cGUoYWtSZWYpOyB9O1xyXG4vL0dldHMgcmFuZG9tIGFjdG9yIG5lYXIgcmVmICh3aXRob3V0IHJldHVybmluZyB0aGUgcmVmZXJlbmNlIGl0c2VsZikuXHJcbmV4cG9ydCB2YXIgR2V0UmFuZG9tQWN0b3JGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBhZlJhZGl1cywgYWJJZ25vcmVQbGF5ZXIpIHtcclxuICAgIHJldHVybiBzbi5HZXRSYW5kb21BY3RvckZyb21SZWYoYWtSZWYsIGFmUmFkaXVzLCBhYklnbm9yZVBsYXllcik7XHJcbn07XHJcbi8vR2V0cyBxdWVzdCBpdGVtcyBpbiB0aGlzIHJlZidzIGludmVudG9yeSwgaWYgYW55XHJcbmV4cG9ydCB2YXIgR2V0UXVlc3RJdGVtcyA9IGZ1bmN0aW9uIChha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0UXVlc3RJdGVtcyhha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkKTtcclxufTtcclxuLy9HZXQgYWxsIGFsaWFzZXMgY29udGFpbmluZyB0aGlzIHJlZlxyXG5leHBvcnQgdmFyIEdldFJlZkFsaWFzZXMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldFJlZkFsaWFzZXMoYWtSZWYpOyB9O1xyXG4vL1JldHVybnMgdGhlIHNpemUgb2YgdGhlIHN0b3JlZCBzb3VsIGluIGEgc291bGdlbSBvYmplY3RyZWZlcmVuY2VcclxuZXhwb3J0IHZhciBHZXRTdG9yZWRTb3VsU2l6ZSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0U3RvcmVkU291bFNpemUoYWtSZWYpOyB9O1xyXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBpbnN0YW5jZXMgb2YgdGhlIHNwZWNpZmllZCBhcnQgb2JqZWN0IChhdHRhY2hlZCB1c2luZyB2aXN1YWwgZWZmZWN0cykgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBIYXNBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0T2JqZWN0LCBhYkFjdGl2ZSkge1xyXG4gICAgaWYgKGFiQWN0aXZlID09PSB2b2lkIDApIHsgYWJBY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkhhc0FydE9iamVjdChha1JlZiwgYWtBcnRPYmplY3QsIGFiQWN0aXZlKTtcclxufTtcclxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgZWZmZWN0IHNoYWRlciBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEhhc0VmZmVjdFNoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIsIGFiQWN0aXZlKSB7XHJcbiAgICBpZiAoYWJBY3RpdmUgPT09IHZvaWQgMCkgeyBhYkFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSGFzRWZmZWN0U2hhZGVyKGFrUmVmLCBha1NoYWRlciwgYWJBY3RpdmUpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgcmVmZXJlbmNlIGhhcyBuaWV4dHJhZGF0YSAoYXR0YWNoZWQgdG8gcm9vdCAzRCBub2RlKS4gUGFydGlhbCBtYXRjaGVzIGFjY2VwdGVkLlxyXG5leHBvcnQgdmFyIEhhc05pRXh0cmFEYXRhID0gZnVuY3Rpb24gKGFrUmVmLCBhc05hbWUpIHsgcmV0dXJuIHNuLkhhc05pRXh0cmFEYXRhKGFrUmVmLCBhc05hbWUpOyB9O1xyXG4vL0lzIGRvb3IgYSBsb2FkIGRvb3I/XHJcbmV4cG9ydCB2YXIgSXNMb2FkRG9vciA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uSXNMb2FkRG9vcihha1JlZik7IH07XHJcbi8vSXMgYSBxdWVzdCBvYmplY3Q/XHJcbmV4cG9ydCB2YXIgSXNRdWVzdEl0ZW0gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLklzUXVlc3RJdGVtKGFrUmVmKTsgfTtcclxuLy9JcyBhIFZJUCAoYWN0b3IgdGhhdCBpcyBuZWVkZWQgYnkgcXVlc3QpP1xyXG5leHBvcnQgdmFyIElzVklQID0gZnVuY3Rpb24gKGFrUmVmKSB7XHJcbiAgICByZXR1cm4gc24uSXNWSVAoYWtSZWYpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FwcGxpZXMgbWF0ZXJpYWwgc2hhZGVyIHRvIHJlZmVyZW5jZSAoZG9lc24ndCBoYXZlIHRvIGJlIHN0YXRpYylcclxuZXhwb3J0IHZhciBBcHBseU1hdGVyaWFsU2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBha01hdE9iamVjdCwgZGlyZWN0aW9uYWxUaHJlc2hvbGRBbmdsZSkge1xyXG4gICAgcmV0dXJuIHNuLkFwcGx5TWF0ZXJpYWxTaGFkZXIoYWtSZWYsIGFrTWF0T2JqZWN0LCBkaXJlY3Rpb25hbFRocmVzaG9sZEFuZ2xlKTtcclxufTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBBZGRLZXl3b3JkVG9Gb3JtLlxyXG5leHBvcnQgdmFyIEFkZEtleXdvcmRUb1JlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5BZGRLZXl3b3JkVG9SZWYoYWtSZWYsIGFrS2V5d29yZCk7IH07XHJcbi8vU25hcHMgdGhlIG9iamVjdCB0byB0aGUgbmVhcmVzdCBuYXZtZXNoIHBvaW50IGNsb3Nlc3QgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGNlbGwuXHJcbmV4cG9ydCB2YXIgTW92ZVRvTmVhcmVzdE5hdm1lc2hMb2NhdGlvbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uTW92ZVRvTmVhcmVzdE5hdm1lc2hMb2NhdGlvbihha1JlZik7IH07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgUmVtb3ZlS2V5d29yZEZyb21Gb3JtLlxyXG5leHBvcnQgdmFyIFJlbW92ZUtleXdvcmRGcm9tUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLlJlbW92ZUtleXdvcmRGcm9tUmVmKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIFJlcGxhY2VLZXl3b3JkT25Gb3JtLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VLZXl3b3JkT25SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKSB7IHJldHVybiBzbi5SZXBsYWNlS2V5d29yZE9uUmVmKGFrUmVmLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSk7IH07XHJcbi8vUGxheXMgZGVidWcgc2hhZGVyIG9uIHRoZSByZWZlcmVuY2UsIHdpdGggbm9ybWFsaXNlZCBSR0JBIGNvbG9yIChvciBmdWxseSB3aGl0ZSBpZiBlbXB0eSlcclxuZXhwb3J0IHZhciBQbGF5RGVidWdTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFmUkdCQSkgeyByZXR1cm4gc24uUGxheURlYnVnU2hhZGVyKGFrUmVmLCBhZlJHQkEpOyB9O1xyXG4vL1NjYWxlcyBub2RlICYgY29sbGlzaW9uIChiaGtCb3hTaGFwZSwgYmhrU3BoZXJlU2hhcGUpLiBFbnRpcmUgbmlmIHdpbGwgYmUgc2NhbGVkIGlmIHN0cmluZyBpcyBlbXB0eS4gQ29sbGlzaW9uIGhhcyB0byBiZSBkaXJlY3RseSBhdHRhY2hlZCB0byBuYW1lZCBub2Rlcy5cclxuLy9BZGRzIFwiUE8zX1NDQUxFXCIgbmlleHRyYWRhdGEgdG8gcm9vdCBub2RlLlxyXG5leHBvcnQgdmFyIFNjYWxlT2JqZWN0M0QgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUsIGFmU2NhbGUpIHsgcmV0dXJuIHNuLlNjYWxlT2JqZWN0M0QoYWtSZWYsIGFzTm9kZU5hbWUsIGFmU2NhbGUpOyB9O1xyXG4vL1NldHMgdGhlIGJhc2Ugb2JqZWN0IG9mIHRoaXMgcmVmZXJlbmNlIGFuZCByZWxvYWRzIDNEXHJcbmV4cG9ydCB2YXIgU2V0QmFzZU9iamVjdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtCYXNlT2JqZWN0KSB7IHJldHVybiBzbi5TZXRCYXNlT2JqZWN0KGFrUmVmLCBha0Jhc2VPYmplY3QpOyB9O1xyXG4vKiogQ09MTElTSU9OIExBWUVSU1xyXG4gICAgICAgIGtVbmlkZW50aWZpZWQgPSAwLFxyXG4gICAgICAgIGtTdGF0aWMgPSAxLFxyXG4gICAgICAgIGtBbmltU3RhdGljID0gMixcclxuICAgICAgICBrVHJhbnNwYXJlbnQgPSAzLFxyXG4gICAgICAgIGtDbHV0dGVyID0gNCxcclxuICAgICAgICBrV2VhcG9uID0gNSxcclxuICAgICAgICBrUHJvamVjdGlsZSA9IDYsXHJcbiAgICAgICAga1NwZWxsID0gNyxcclxuICAgICAgICBrQmlwZWQgPSA4LFxyXG4gICAgICAgIGtUcmVlcyA9IDksXHJcbiAgICAgICAga1Byb3BzID0gMTAsXHJcbiAgICAgICAga1dhdGVyID0gMTEsXHJcbiAgICAgICAga1RyaWdnZXIgPSAxMixcclxuICAgICAgICBrVGVycmFpbiA9IDEzLFxyXG4gICAgICAgIGtUcmFwID0gMTQsXHJcbiAgICAgICAga05vbkNvbGxpZGFibGUgPSAxNSxcclxuICAgICAgICBrQ2xvdWRUcmFwID0gMTYsXHJcbiAgICAgICAga0dyb3VuZCA9IDE3LFxyXG4gICAgICAgIGtQb3J0YWwgPSAxOCxcclxuICAgICAgICBrRGVicmlzU21hbGwgPSAxOSxcclxuICAgICAgICBrRGVicmlzTGFyZ2UgPSAyMCxcclxuICAgICAgICBrQWNvdXN0aWNTcGFjZSA9IDIxLFxyXG4gICAgICAgIGtBY3RvclpvbmUgPSAyMixcclxuICAgICAgICBrUHJvamVjdGlsZVpvbmUgPSAyMyxcclxuICAgICAgICBrR2FzVHJhcCA9IDI0LFxyXG4gICAgICAgIGtTaGVsbENhc3RpbmcgPSAyNSxcclxuICAgICAgICBrVHJhbnNwYXJlbnRXYWxsID0gMjYsXHJcbiAgICAgICAga0ludmlzaWJsZVdhbGwgPSAyNyxcclxuICAgICAgICBrVHJhbnNwYXJlbnRTbWFsbEFuaW0gPSAyOCxcclxuICAgICAgICBrQ2x1dHRlckxhcmdlID0gMjksXHJcbiAgICAgICAga0NoYXJDb250cm9sbGVyID0gMzAsXHJcbiAgICAgICAga1N0YWlySGVscGVyID0gMzEsXHJcbiAgICAgICAga0RlYWRCaXAgPSAzMixcclxuICAgICAgICBrQmlwZWROb0NDID0gMzMsXHJcbiAgICAgICAga0F2b2lkQm94ID0gMzQsXHJcbiAgICAgICAga0NvbGxpc2lvbkJveCA9IDM1LFxyXG4gICAgICAgIGtDYW1lcmFTcGhlcmUgPSAzNixcclxuICAgICAgICBrRG9vckRldGVjdGlvbiA9IDM3LFxyXG4gICAgICAgIGtDb25lUHJvamVjdGlsZSA9IDM4LFxyXG4gICAgICAgIGtDYW1lcmEgPSAzOSxcclxuICAgICAgICBrSXRlbVBpY2tlciA9IDQwLFxyXG4gICAgICAgIGtMT1MgPSA0MSxcclxuICAgICAgICBrUGF0aGluZ1BpY2sgPSA0MixcclxuICAgICAgICBrVW51c2VkMCA9IDQzLFxyXG4gICAgICAgIGtVbnVzZWQxID0gNDQsXHJcbiAgICAgICAga1NwZWxsRXhwbG9zaW9uID0gNDUsXHJcbiAgICAgICAga0Ryb3BwaW5nUGljayA9IDQ2ICovXHJcbi8vU2V0cyBvYmplY3QgM0Qgcm9vdCBvciBzcGVjaWZpZWQgbm9kZSdzIGNvbGxpc2lvbiBsYXllclxyXG5leHBvcnQgdmFyIFNldENvbGxpc2lvbkxheWVyID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhaUNvbGxpc2lvbkxheWVyKSB7IHJldHVybiBzbi5TZXRDb2xsaXNpb25MYXllcihha1JlZiwgYXNOb2RlTmFtZSwgYWlDb2xsaXNpb25MYXllcik7IH07XHJcbi8vU2V0cyB0aGUgZG9vciBhcyB0aGUgbmV3IGxpbmtlZCBkb29yXHJcbmV4cG9ydCB2YXIgU2V0RG9vckRlc3RpbmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha0Rvb3IpIHsgcmV0dXJuIHNuLlNldERvb3JEZXN0aW5hdGlvbihha1JlZiwgYWtEb29yKTsgfTtcclxuLy9TZXRzIGVmZmVjdHNoYWRlciBkdXJhdGlvbi4gSW50ZXJuYWwgZHVyYXRpb24gaXMgc2V0IHdoZW4gdGhlIGVmZmVjdHNoYWRlciBiZWdpbnMgYW5kIGRvZXMgbm90IGNoYW5nZSB3aXRoIHRpbWUuXHJcbmV4cG9ydCB2YXIgU2V0RWZmZWN0U2hhZGVyRHVyYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyLCBhZlRpbWUsIGFiQWJzb2x1dGUpIHsgcmV0dXJuIHNuLlNldEVmZmVjdFNoYWRlckR1cmF0aW9uKGFrUmVmLCBha1NoYWRlciwgYWZUaW1lLCBhYkFic29sdXRlKTsgfTtcclxuLy9TZXRzIGxpbmtlZCByZWYuIFBhc3MgTm9uZSBpbnRvIGFrVGFyZ2V0UmVmIHRvIHVuc2V0IHRoZSBsaW5rZWQgcmVmLlxyXG5leHBvcnQgdmFyIFNldExpbmtlZFJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtUYXJnZXRSZWYsIGFrS2V5d29yZCkge1xyXG4gICAgaWYgKGFrS2V5d29yZCA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZCA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5TZXRMaW5rZWRSZWYoYWtSZWYsIGFrVGFyZ2V0UmVmLCBha0tleXdvcmQpO1xyXG59O1xyXG4vL1NldHMgaGF2b2sgbWF0ZXJpYWwgdHlwZS4gVXNlIG9sZE1hdGVyaWFsIHN0cmluZyB0byBzZWxlY3Qgd2hhdCBtYXRlcmlhbCB5b3Ugd2FudCB0byBjaGFuZ2UgZnJvbSB0byAoZWcuIGZyb20gc3RvbmUgdG8gd29vZCksIGFuZCBub2RlTmFtZSB0byBhcHBseSBpdCB0byB0aGUgc3BlY2lmaWMgbm9kZS5cclxuLy9JZiBib3RoIGFyZSBlbXB0eSwgZXZlcnkgY29sbGlzaW9uIG1hdGVyaWFsIHdpbGwgYmUgc2V0LlxyXG5leHBvcnQgdmFyIFNldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOZXdNYXRlcmlhbCwgYXNPbGRNYXRlcmlhbCwgYXNOb2RlTmFtZSkge1xyXG4gICAgaWYgKGFzT2xkTWF0ZXJpYWwgPT09IHZvaWQgMCkgeyBhc09sZE1hdGVyaWFsID0gXCJcIjsgfVxyXG4gICAgaWYgKGFzTm9kZU5hbWUgPT09IHZvaWQgMCkgeyBhc05vZGVOYW1lID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLlNldE1hdGVyaWFsVHlwZShha1JlZiwgYXNOZXdNYXRlcmlhbCwgYXNPbGRNYXRlcmlhbCwgYXNOb2RlTmFtZSk7XHJcbn07XHJcbi8vQ29waWVzIHNraW4gdGludCBjb2xvciBmcm9tIGFjdG9yYmFzZSB0byBib2R5cGFydHMgbmlmXHJcbmV4cG9ydCB2YXIgU2V0dXBCb2R5UGFydEdlb21ldHJ5ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FjdG9yKSB7IHJldHVybiBzbi5TZXR1cEJvZHlQYXJ0R2VvbWV0cnkoYWtSZWYsIGFrQWN0b3IpOyB9O1xyXG4vKiogU0hBREVSIFRZUEVTXHJcbiAgICAgICAga0RlZmF1bHQgPSAwXHJcbiAgICAgICAga0Vudmlyb25tZW50TWFwID0gMVxyXG4gICAgICAgIGtHbG93TWFwID0gMlxyXG4gICAgICAgIGtQYXJhbGxheCA9IDNcclxuICAgICAgICBrRmFjZUdlbiA9IDRcclxuICAgICAgICBrRmFjZUdlblJHQlRpbnQgPSA1XHJcbiAgICAgICAga0hhaXJUaW50ID0gNlxyXG4gICAgICAgIGtQYXJhbGxheE9jYyA9IDdcclxuICAgICAgICBrTXVsdGlUZXhMYW5kID0gOFxyXG4gICAgICAgIGtMT0RMYW5kID0gOVxyXG4gICAgICAgIGtNdWx0aWxheWVyUGFyYWxsYXggPSAxMVxyXG4gICAgICAgIGtUcmVlQW5pbSA9IDEyXHJcbiAgICAgICAga011bHRpSW5kZXhUcmlTaGFwZVNub3cgPSAxNFxyXG4gICAgICAgIGtMT0RPYmplY3RzSEQgPSAxNVxyXG4gICAgICAgIGtFeWUgPSAxNlxyXG4gICAgICAgIGtDbG91ZCA9IDE3XHJcbiAgICAgICAga0xPRExhbmROb2lzZSA9IDE4XHJcbiAgICAgICAga011bHRpVGV4TGFuZExPREJsZW5kID0gMTkgKi9cclxuLy9zZXRzIHRoZSByZWYncyBzaGFkZXIgbWF0ZXJpYWwgdHlwZSBpZS4gZGVmYXVsdCB0byBjdWJlbWFwXHJcbi8vdGVtcGxhdGUgbmVlZHMgdG8gYmUgbG9hZGVkXHJcbi8vaWYgdGV4dHVyZSB0eXBlIGlzIC0xLCB0aGUgcmVmZXJlbmNlJ3MgZW50aXJlIHRleHR1cmVzZXQgaXMgcmVwbGFjZWQgdXNpbmcgdGhlIHRlbXBsYXRlJ3MgdGV4dHVyZXNldC8vXHJcbi8vaWYgdGV4dHVyZSB0eXBlIGlzIDAtOSB0aGUgdGVtcGxhdGUncyB0ZXh0dXJlc2V0IGlzIHN0aWxsIGFwcGxpZWQgYnV0IHJlZmVyZW5jZSdzIHRleHR1cmUgYXQgdGhhdCBpbmRleCB3aWxsIHRha2UgcHJpb3JpdHkuXHJcbi8vb3B0aW9uYWwgZGlmZnVzZSBwYXRoIGNhbiBiZSB1c2VkIHRvIGZpbHRlciBzaGFwZXMgdG8gYXBwbHkgdGhlIHNoYWRlciB0bywgcGFydGlhbCBtYXRjaGVzIGFyZSBhY2NlcHRlZCBsaWtlIFwiRHJhdWdyLmRkc1wiXHJcbi8vbGltaXRhdGlvbnMgLSBjYW5ub3QgYmUgdXNlZCBvbiBnZW9tZXRyeSB3aXRoIG5vIG5vcm1hbHMgKGllLiBib2R5IHNraW4gbWVzaGVzKVxyXG5leHBvcnQgdmFyIFNldFNoYWRlclR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrVGVtcGxhdGUsIGFzRGlmZnVzZVBhdGgsIGFpU2hhZGVyVHlwZSwgYWlUZXh0dXJlVHlwZSwgYWJOb1dlYXBvbnMsIGFiTm9BbHBoYVByb3BlcnR5KSB7XHJcbiAgICByZXR1cm4gc24uU2V0U2hhZGVyVHlwZShha1JlZiwgYWtUZW1wbGF0ZSwgYXNEaWZmdXNlUGF0aCwgYWlTaGFkZXJUeXBlLCBhaVRleHR1cmVUeXBlLCBhYk5vV2VhcG9ucywgYWJOb0FscGhhUHJvcGVydHkpO1xyXG59O1xyXG4vL1N0b3BzIEFMTCBlZmZlY3Qgc2hhZGVycyBhbmQgYXJ0IG9iamVjdHMgKHZpc3VhbCBlZmZlY3RzKSBjdXJyZW50bHkgb24gdGhpcyBhY3RvclxyXG5leHBvcnQgdmFyIFN0b3BBbGxTaGFkZXJzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5TdG9wQWxsU2hhZGVycyhha1JlZik7IH07XHJcbi8vUmVtb3ZlcyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBhcnQgb2JqZWN0IChoaXQgbWFnaWMgZWZmZWN0L3Zpc3VhbCBlZmZlY3QpIGF0dGFjaGVkIHRvIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgU3RvcEFydE9iamVjdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtBcnQpIHsgcmV0dXJuIHNuLlN0b3BBcnRPYmplY3QoYWtSZWYsIGFrQXJ0KTsgfTtcclxuLy9Ub2dnbGVzIG5vZGUgdmlzaWJpbGl0eS5cclxuZXhwb3J0IHZhciBUb2dnbGVDaGlsZE5vZGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUsIGFiRGlzYWJsZSkgeyByZXR1cm4gc24uVG9nZ2xlQ2hpbGROb2RlKGFrUmVmLCBhc05vZGVOYW1lLCBhYkRpc2FibGUpOyB9O1xyXG4vL1VwZGF0ZXMgbm9kZSBkYXRhLiBNb3ZlIGhpdCBlZmZlY3QgYXJ0IHRvIG5ldyBub2RlIChpZS4gZnJvbSBcIk1hZ2ljRWZmZWN0c05vZGVcIiB0byBcIk5QQyBIZWFkIFtIZWFkXVwiKSBvciB1cGRhdGUgdHJhbnNsYXRlLCByb3RhdGUsIGFuZCBzY2FsZSB2YWx1ZXMuXHJcbi8vVHJhbnNsYXRlIGFuZCBSb3RhdGUgYXJyYXlzIG11c3QgaGF2ZSB0aHJlZSB2YWx1ZXMgaW4gb3JkZXIgdG8gd29yay4gUm90YXRlIHVzZXMgZXVsZXIgYW5nbGVzIGluIGRlZ3JlZXMgKFhZWikuIFNjYWxlIGlzIHJlbGF0aXZlLCBhbmQgaXMgbXVsdGlwbGllZCBieSBleGlzdGluZyBzY2FsZS5cclxuLy9JZiB0aGUgaGl0IGVmZmVjdCBhcnQgaXMgcmVtb3ZlZCBhbmQgcmVhdHRhY2hlZCwgaXQgd2lsbCByZXZlcnQgYmFjayB0byB0aGUgdmFsdWVzIGluIHRoZSBuaWYuXHJcbmV4cG9ydCB2YXIgVXBkYXRlSGl0RWZmZWN0QXJ0Tm9kZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtBcnQsIGFzTmV3Tm9kZSwgYWZUcmFuc2xhdGUsIGFmUm90YXRlLCBhZlJlbGF0aXZlU2NhbGUpIHtcclxuICAgIGlmIChhZlJlbGF0aXZlU2NhbGUgPT09IHZvaWQgMCkgeyBhZlJlbGF0aXZlU2NhbGUgPSAxLjA7IH1cclxuICAgIHJldHVybiBzbi5VcGRhdGVIaXRFZmZlY3RBcnROb2RlKGFrUmVmLCBha0FydCwgYXNOZXdOb2RlLCBhZlRyYW5zbGF0ZSwgYWZSb3RhdGUsIGFmUmVsYXRpdmVTY2FsZSk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BBQ0tBR0VTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vKiogUEFDS0FHRSBUWVBFU1xyXG4gICAgICAgIEZpbmQgPSAwXHJcbiAgICAgICAgRm9sbG93ID0gMVxyXG4gICAgICAgIEVzY29ydCA9IDJcclxuICAgICAgICBFYXQgPSAzXHJcbiAgICAgICAgU2xlZXAgPSA0XHJcbiAgICAgICAgV2FuZGVyID0gNVxyXG4gICAgICAgIFRyYXZlbCA9IDZcclxuICAgICAgICBBY2NvbXBhbnkgPSA3XHJcbiAgICAgICAgVXNlSXRlbUF0ID0gOFxyXG4gICAgICAgIEFtYnVzaCA9IDlcclxuICAgICAgICBGbGVlTm90Q29tYmF0ID0gMTBcclxuICAgICAgICBDYXN0TWFnaWMgPSAxMVxyXG4gICAgICAgIFNhbmRib3ggPSAxMlxyXG4gICAgICAgIFBhdHJvbCA9IDEzXHJcbiAgICAgICAgR3VhcmQgPSAxNFxyXG4gICAgICAgIERpYWxvZ3VlID0gMTVcclxuICAgICAgICBVc2VXZWFwb24gPSAxNlxyXG4gICAgICAgIEZpbmQyID0gMTdcclxuICAgICAgICBQYWNrYWdlID0gMThcclxuICAgICAgICBQYWNrYWdlVGVtcGxhdGUgPSAxOVxyXG4gICAgICAgIEFjdGl2YXRlID0gMjBcclxuICAgICAgICBBbGFybSA9IDIxXHJcbiAgICAgICAgRmxlZSA9IDIyXHJcbiAgICAgICAgVHJlc3Bhc3MgPSAyM1xyXG4gICAgICAgIFNwZWN0YXRvciA9IDI0XHJcbiAgICAgICAgUmVhY3RUb0RlYWQgPSAyNVxyXG4gICAgICAgIEdldFVwRnJvbUNoYWlyID0gMjZcclxuICAgICAgICBEb05vdGhpbmcgPSAyN1xyXG4gICAgICAgIEluR2FtZURpYWxvZ3VlID0gMjhcclxuICAgICAgICBTdXJmYWNlID0gIDI5XHJcbiAgICAgICAgU2VhcmNoRm9yQXR0YWNrZXIgPSAzMFxyXG4gICAgICAgIEF2b2lkUGxheWVyID0gMzFcclxuICAgICAgICBSZWFjdFRvRGVzdHJveWVkT2JqZWN0ID0gMzJcclxuICAgICAgICBSZWFjdFRvR3JlbmFkZU9yTWluZSA9IDMzXHJcbiAgICAgICAgU3RlYWxXYXJuaW5nID0gMzRcclxuICAgICAgICBQaWNrUG9ja2V0V2FybmluZyA9IDM1XHJcbiAgICAgICAgTW92ZW1lbnRCbG9ja2VkID0gMzZcclxuICAgICAgICBWYW1waXJlRmVlZCA9IDM3XHJcbiAgICAgICAgQ2FubmliYWxGZWVkID0gMzggKi9cclxuLy9HZXRzIHBhY2thZ2UgdHlwZS4gUmV0dXJucyAtMSBpZiBwYWNrYWdlIGlzIG5vbmVcclxuZXhwb3J0IHZhciBHZXRQYWNrYWdlVHlwZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UpIHtcclxuICAgIHJldHVybiBzbi5HZXRQYWNrYWdlVHlwZShha1BhY2thZ2UpO1xyXG59O1xyXG4vL0dldHMgYWxsIGlkbGVzIG9uIHRoaXMgcGFja2FnZVxyXG5leHBvcnQgdmFyIEdldFBhY2thZ2VJZGxlcyA9IGZ1bmN0aW9uIChha1BhY2thZ2UpIHsgcmV0dXJuIHNuLkdldFBhY2thZ2VJZGxlcyhha1BhY2thZ2UpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMgaWRsZSB0byB0aGUgZW5kIG9mIHRoZSBwYWNrYWdlIGlkbGUgc3RhY2ssIGNyZWF0aW5nIGl0IGlmIG5lZWRlZC5cclxuZXhwb3J0IHZhciBBZGRQYWNrYWdlSWRsZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UsIGFrSWRsZSkgeyByZXR1cm4gc24uQWRkUGFja2FnZUlkbGUoYWtQYWNrYWdlLCBha0lkbGUpOyB9O1xyXG4vL1JlbW92ZXMgaWRsZSBmcm9tIHBhY2thZ2VcclxuZXhwb3J0IHZhciBSZW1vdmVQYWNrYWdlSWRsZSA9IGZ1bmN0aW9uIChha1BhY2thZ2UsIGFrSWRsZSkgeyByZXR1cm4gc24uUmVtb3ZlUGFja2FnZUlkbGUoYWtQYWNrYWdlLCBha0lkbGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QQVBZUlVTIEVYVEVOREVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgY3VycmVudCB2ZXJzaW9uIGFzIGludCBhcnJheSAobWFqb3IsbWlub3IscGF0Y2ggLyA0LDMsNylcclxuZXhwb3J0IHZhciBHZXRQYXB5cnVzRXh0ZW5kZXJWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHNuLkdldFBhcHlydXNFeHRlbmRlclZlcnNpb24oKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BPVElPTiAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1BvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvUG90aW9uKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gUG90aW9uIHRvIHRhcmdldCBQb3Rpb24sIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1BvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtQb3Rpb25Ub0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvUG90aW9uKGFrUG90aW9uLCBha1BvdGlvblRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBQb3Rpb24gdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21Qb3Rpb24oYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gUG90aW9uIHRoYXQgbWF0Y2hlcyBQb3Rpb24gYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrUG90aW9uVG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVBvdGlvbihha1BvdGlvbiwgYWtQb3Rpb25Ub01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BST0pFQ1RJTEVTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vR2V0cyBwcm9qZWN0aWxlIGdyYXZpdHkgKHVzdWFsbHkgMC4wIGZvciBub24gYXJyb3cgcHJvamVjdGlsZXMpLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVHcmF2aXR5ID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZUdyYXZpdHkoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgaW1wYWN0IGZvcmNlLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVJbXBhY3RGb3JjZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVJbXBhY3RGb3JjZShha1Byb2plY3RpbGUpOyB9O1xyXG4vL0dldHMgcHJvamVjdGlsZSByYW5nZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlUmFuZ2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlUmFuZ2UoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgc3BlZWQuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVNwZWVkID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVNwZWVkKGFrUHJvamVjdGlsZSk7IH07XHJcbi8qKiBQUk9KRUNUSUxFIFRZUEVTXHJcbiAgICAgICAgTWlzc2lsZSA9IDFcclxuICAgICAgICBMb2JiZXIgPSAyXHJcbiAgICAgICAgQmVhbSA9IDNcclxuICAgICAgICBGbGFtZSA9IDRcclxuICAgICAgICBDb25lID0gNVxyXG4gICAgICAgIEJhcnJpZXIgPSA2XHJcbiAgICAgICAgQXJyb3cgPSA3ICovXHJcbi8vR2V0IHByb2plY3RpbGUgdHlwZS4gMCBpZiBwcm9qZWN0aWxlIGlzIE5vbmUuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVR5cGUgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlVHlwZShha1Byb2plY3RpbGUpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgcHJvamVjdGlsZSBncmF2aXR5LlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVHcmF2aXR5ID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZHcmF2aXR5KSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlR3Jhdml0eShha1Byb2plY3RpbGUsIGFmR3Jhdml0eSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIGltcGFjdCBmb3JjZS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZkltcGFjdEZvcmNlKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UoYWtQcm9qZWN0aWxlLCBhZkltcGFjdEZvcmNlKTsgfTtcclxuLy9TZXRzIHByb2plY3RpbGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZVJhbmdlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZSYW5nZSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZVJhbmdlKGFrUHJvamVjdGlsZSwgYWZSYW5nZSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIHNwZWVkLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVTcGVlZCA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmU3BlZWQpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVTcGVlZChha1Byb2plY3RpbGUsIGFmU3BlZWQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU0NST0xMIC0gc2VlIFNQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9TY3JvbGwoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBTY3JvbGwgdG8gdGFyZ2V0IFNjcm9sbCwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuIE9wdGlvbmFsIGNvc3QgYXJndW1lbnQuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha1Njcm9sbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9TY3JvbGwoYWtTY3JvbGwsIGFrU2Nyb2xsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIFNjcm9sbCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNjcm9sbChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBTY3JvbGwgdGhhdCBtYXRjaGVzIFNjcm9sbCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVNjcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtTY3JvbGxUb01hdGNoRnJvbSwgYWlJbmRleCkge1xyXG4gICAgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tU2Nyb2xsKGFrU2Nyb2xsLCBha1Njcm9sbFRvTWF0Y2hGcm9tLCBhaUluZGV4KTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NPVU5EXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TZXRzIHNvdW5kIGRlc2NyaXB0b3IgYXR0YWNoZWQgdG8gdGhlIHNvdW5kLlxyXG5leHBvcnQgdmFyIFNldFNvdW5kRGVzY3JpcHRvciA9IGZ1bmN0aW9uIChha1NvdW5kLCBha1NvdW5kRGVzY3JpcHRvcikgeyByZXR1cm4gc24uU2V0U291bmREZXNjcmlwdG9yKGFrU291bmQsIGFrU291bmREZXNjcmlwdG9yKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vKiogU1BFTEwgVFlQRVNcclxuICAgICAgICBTcGVsbCA9IDBcclxuICAgICAgICBEaXNlYXNlID0gMVxyXG4gICAgICAgIFBvd2VyID0gMlxyXG4gICAgICAgIExlc3NlclBvd2VyID0gM1xyXG4gICAgICAgIEFiaWxpdHkgPSA0XHJcbiAgICAgICAgUG9pc29uID0gNVxyXG4gICAgICAgIEFkZGl0aW9uID0gNlxyXG4gICAgICAgIFZvaWNlID0gNyAqL1xyXG4vL1JldHVybnMgc3BlbGwgdHlwZS4gLTEgaWYgc3BlbGwgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldFNwZWxsVHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsKSB7XHJcbiAgICByZXR1cm4gc24uR2V0U3BlbGxUeXBlKGFrU3BlbGwpO1xyXG59O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vQ29uZGl0aW9uSXRlbU9iamVjdCB8IEZ1bmN0aW9uIElEIHwgcGFyYW1ldGVyIDEgfCBwYXJhbWV0ZXIgMiB8IE9QQ29kZSB8IGZsb2F0IHwgQU5ET1JcclxuLy9jb25kaXRpb25zIHdoaWNoIGhhdmUgbm8gcGFyYW1ldGVycyAoZWcuIElzU25lYWtpbmcpIC8gdGFrZSBpbiBmb3JtcyAoR2V0SXNSYWNlKSB3b3JrXHJcbi8vY29uZGl0aW9ucyB3aGljaCBhY2NlcHQgaW50L2Zsb2F0L3N0cmluZ3MgYXJlIHNraXBwZWRcclxuLy9TdWJqZWN0XHR8IEhhc01hZ2ljRWZmZWN0S2V5d29yZFx0fCBNYWdpY0ludmlzaWJpbGl0eVx0XHR8IE5PTkUgfCA9PSB8IDAuMCB8IEFORCAtIGluIGdhbWVcclxuLy9TdWJqZWN0IFx0fCBIYXNNYWdpY0VmZmVjdEtleXdvcmRcdHwgMDAwMUVBNkYgfiBTa3lyaW0uZXNtIHwgTk9ORSB8ID09IHwgMC4wIHwgQU5EXHQtIGluIHBhcHlydXNcclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvU3BlbGwoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIHNwZWxsIHRvIHRhcmdldCBzcGVsbCwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtTcGVsbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9TcGVsbChha1NwZWxsLCBha1NwZWxsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIHNwZWxsIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNwZWxsKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gc3BlbGwgdGhhdCBtYXRjaGVzIHNwZWxsIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtTcGVsbFRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7IHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsKGFrU3BlbGwsIGFrU3BlbGxUb01hdGNoRnJvbSwgYWlJbmRleCk7IH07XHJcbi8vU2V0cyBjYXN0aW5nIHR5cGUgb2Ygc3BlbGwgKGFuZCBhbGwgYXR0YWNoZWQgbWFnaWMgZWZmZWN0cylcclxuZXhwb3J0IHZhciBTZXRTcGVsbENhc3RpbmdUeXBlID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0U3BlbGxDYXN0aW5nVHlwZShha1NwZWxsLCBhaVR5cGUpOyB9O1xyXG4vL1NldHMgZGVsaXZlcnkgdHlwZSBvZiBzcGVsbCAoYW5kIGFsbCBhdHRhY2hlZCBtYWdpYyBlZmZlY3RzKVxyXG5leHBvcnQgdmFyIFNldFNwZWxsRGVsaXZlcnlUeXBlID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0U3BlbGxEZWxpdmVyeVR5cGUoYWtTcGVsbCwgYWlUeXBlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU1RSSU5HU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9Db252ZXJ0cyBzdHJpbmcgdG8gaGV4IHZhbHVlIGlmIHZhbGlkXHJcbmV4cG9ydCB2YXIgSW50VG9TdHJpbmcgPSBmdW5jdGlvbiAoYWlWYWx1ZSwgYWJIZXgpIHtcclxuICAgIHJldHVybiBzbi5JbnRUb1N0cmluZyhhaVZhbHVlLCBhYkhleCk7XHJcbn07XHJcbi8vQ29udmVydHMgc3RyaW5nIHRvIGludC4gUmV0dXJucyAtMSBmb3Igb3V0IG9mIGJvdW5kIHZhbHVlcy5cclxuZXhwb3J0IHZhciBTdHJpbmdUb0ludCA9IGZ1bmN0aW9uIChhc1N0cmluZykge1xyXG4gICAgcmV0dXJuIHNuLlN0cmluZ1RvSW50KGFzU3RyaW5nKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVUlcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyB0aGUgb2JqZWN0cmVmZXJlbmNlIG9mIHRoZSBjdXJyZW50bHkgb3BlbmVkIGNvbnRhaW5lciBpbiBjb250YWluZXIgbWVudVxyXG5leHBvcnQgdmFyIEdldE1lbnVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc24uR2V0TWVudUNvbnRhaW5lcigpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9VVElMSVRZXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NhbGN1bGF0ZXMgYSByYW5kb20gZmxvYXQgYmV0d2VlbiBhZk1pbiBhbmQgYWZNYXgsIGJhc2VkIG9uIE1lcnNlbm5lIFR3aXN0ZXJcclxuZXhwb3J0IHZhciBHZW5lcmF0ZVJhbmRvbUZsb2F0ID0gZnVuY3Rpb24gKGFmTWluLCBhZk1heCkge1xyXG4gICAgcmV0dXJuIHNuLkdlbmVyYXRlUmFuZG9tRmxvYXQoYWZNaW4sIGFmTWF4KTtcclxufTtcclxuLy9DYWxjdWxhdGVzIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBhZk1pbiBhbmQgYWZNYXgsIGJhc2VkIG9uIE1lcnNlbm5lIFR3aXN0ZXJcclxuZXhwb3J0IHZhciBHZW5lcmF0ZVJhbmRvbUludCA9IGZ1bmN0aW9uIChhZk1pbiwgYWZNYXgpIHtcclxuICAgIHJldHVybiBzbi5HZW5lcmF0ZVJhbmRvbUludChhZk1pbiwgYWZNYXgpO1xyXG59O1xyXG4vL0dldHMgc3lzdGVtIHRpbWUgYW5kIGRhdGVcclxuLy9ZZWFyICgxNjAxIC0gMzA4MjcpXHJcbi8vTW9udGggKDEtMTIpXHJcbi8vRGF5T2ZXZWVrICgxOlN1bmRheSAtIDc6U2F0dXJkYXkpXHJcbi8vRGF5ICgxLTMxKVxyXG4vL0hvdXIgKDAtMjMpXHJcbi8vTWludXRlICgwLTU5KVxyXG4vL1NlY29uZCAoMC01OSlcclxuLy9NaWxsaXNlY29uZCAoMC05OTkpXHJcbmV4cG9ydCB2YXIgR2V0U3lzdGVtVGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldFN5c3RlbVRpbWUoKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1ZJU1VBTEVGRkVDVFNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9HZXRzIHRoZSBhcnQgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlzdWFsIGVmZmVjdC5cclxuZXhwb3J0IHZhciBHZXRBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEFydE9iamVjdChha0VmZmVjdCk7IH07XHJcbi8vUmV0dXJucyB0aGUgdG90YWwgbnVtYmVyIG9mIGFydCBvYmplY3RzIHByZXNlbnQvYWN0aXZlIChvbiBvYmplY3RzKSB3aXRoaW4gdGhlIGxvYWRlZCBhcmVhLlxyXG5leHBvcnQgdmFyIEdldEFydE9iamVjdFRvdGFsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3QsIGFiQWN0aXZlKSB7IHJldHVybiBzbi5HZXRBcnRPYmplY3RUb3RhbENvdW50KGFrRWZmZWN0LCBhYkFjdGl2ZSk7IH07XHJcbi8vLS0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9TZXRzIHRoZSBhcnQgb2JqZWN0IGFzc29jaWF0ZWQgd2l0aCB0aGUgdmlzdWFsIGVmZmVjdC5cclxuZXhwb3J0IHZhciBTZXRBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtFZmZlY3QsIGFrQXJ0KSB7IHJldHVybiBzbi5TZXRBcnRPYmplY3QoYWtFZmZlY3QsIGFrQXJ0KTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1dFQVRIRVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyB3aW5kIHNwZWVkIGFzIHNob3duIGFzIGluIENLIGNvbmRpdGlvbnMgKDAuMC0xLjApLlxyXG5leHBvcnQgdmFyIEdldFdpbmRTcGVlZEFzRmxvYXQgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7IHJldHVybiBzbi5HZXRXaW5kU3BlZWRBc0Zsb2F0KGFrV2VhdGhlcik7IH07XHJcbi8vR2V0cyB3aW5kIHNwZWVkIGFzIHNob3duIGluIHRoZSB3ZWF0aGVyIGZvcm0gKDAtMjU1KS5cclxuZXhwb3J0IHZhciBHZXRXaW5kU3BlZWRBc0ludCA9IGZ1bmN0aW9uIChha1dlYXRoZXIpIHsgcmV0dXJuIHNuLkdldFdpbmRTcGVlZEFzSW50KGFrV2VhdGhlcik7IH07XHJcbi8qKiBXRUFUSEVSIFRZUEVTXHJcbiAgICAgICAgUGxlYXNhbnQgPSAwXHJcbiAgICAgICAgQ2xvdWR5ID0gMVxyXG4gICAgICAgIFJhaW55ID0gMlxyXG4gICAgICAgIFNub3cgPSAzICovXHJcbi8vR2V0cyB3ZWF0aGVyL2N1cnJlbnQgd2VhdGhlciB0eXBlIGlmIGFrV2VhdGhlciBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0V2VhdGhlclR5cGUgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7XHJcbiAgICBpZiAoYWtXZWF0aGVyID09PSB2b2lkIDApIHsgYWtXZWF0aGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFdlYXRoZXJUeXBlKGFrV2VhdGhlcik7XHJcbn07XHJcbiIsImltcG9ydCB7IG9uY2UsIGhvb2tzLCBHYW1lLCBEZWJ1ZyB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxuaW1wb3J0IHsgR2V0U3RyaW5nVmFsdWUsIFN0cmluZ0xpc3RBZGQsIFN0cmluZ0xpc3RDbGVhciwgU3RyaW5nTGlzdFJlbW92ZSwgU3RyaW5nTGlzdFRvQXJyYXkgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuaW1wb3J0ICogYXMgbWNtIGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL21jbS1oZWxwZXIvTUNNXCI7XHJcbmltcG9ydCB7IE1vZEV2ZW50IH0gZnJvbSBcIi4vbW9kZXZlbnRcIjtcclxuaW1wb3J0IHsgZ2V0U2xvdEZyb21OYW1lLCBTbG90LCBzYXZlVG9EYXRhRmlsZSwgaW1wb3J0RGF0YUZyb21GaWxlLCBjYXRlZ29yeVRvU2xvdCwgaXRlbUNhdGVnb3J5Vm9sdW1lcywgRXZhbHVhdGVJbnZlbnRvcnksIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZCwgc2V0QmFzZVdpZGdldFBvcywgR2V0QmFzZVdpZGdldFBvcyB9IGZyb20gXCIuL0ludmVudG9yeVNsb3RzXCI7XHJcbmltcG9ydCB7IFdyaXRlVG9GaWxlIH0gZnJvbSAnQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvTWlzY1V0aWwnO1xyXG4vL19fX19fX19fX19fVkFSSUFCTEVTX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxudmFyIG1jbV9zZXR0aW5ncyA9IHtcclxuICAgIFNlbGVjdGVkU2xvdDogJ3NBY3RpdmVTbG90czpTbG90cycsXHJcbiAgICBpbnB1dFNsb3ROYW1lOiAnc0FkZFNsb3ROYW1lOlNsb3RzJyxcclxuICAgIGFkZFNsb3RCdXR0b246ICdiQWRkU2xvdEJ1dHRvbjpTbG90cycsXHJcbiAgICByZW1vdmVTbG90QnV0dG9uOiAnYkRlbGV0ZVNsb3RCdXR0b246U2xvdHMnLFxyXG4gICAgc2xpZGVyU2xvdE1heDogJ2ZTbG90TWF4OlNsb3RzJyxcclxuICAgIEFkZENhdGVnb3JpZXM6ICdzU2xvdENhdGVnb3JpZXNBZGQ6TGlzdHMnLFxyXG4gICAgUmVtb3ZlQ2F0ZWdvcmllczogJ3NTbG90Q2F0ZWdvcmllc1JlbW92ZTpMaXN0cycsXHJcbn07XHJcbnZhciBzdG9yYWdlS2V5cyA9IHtcclxuICAgIGNhdGVnb3JpZXM6ICdZTS5TTE9UUy5JVEVNX0NBVEVHT1JJRVMnLFxyXG4gICAgY2hhbmdlZF9zZXR0aW5nOiAnWU0uU2xvdHMuU0VUVElOR19DSEFOR0VEJyxcclxuICAgIG1lbnVXaGl0ZUxpc3Q6ICdZTS5TbG90cy5NQ00uTWVudS5DYXRlZ29yaWVzLldoaXRlTGlzdCcsXHJcbiAgICBtZW51QmxhY2tMaXN0OiAnWU0uU2xvdHMuTUNNLk1lbnUuQ2F0ZWdvcmllcy5CbGFja0xpc3QnLFxyXG4gICAgU2xvdEFzc2lnbm1lbnQ6ICdZTS5TTE9UUy5NQ00uTUVOVS5DQVRFR09SSUVTLlNMT1RfQ0hPSUNFUydcclxufTtcclxudmFyIG1jbVNldHRpbmdzVG9TdG9yYWdlS2V5cyA9IHtcclxuLy8gYFlNLlNsb3RzLiR7cy5uYW1lfS5mU2xvdE1heDpTbG90c2BcclxufTtcclxudmFyIG1vZG5hbWUgPSAnSW52ZW50b3J5U2xvdHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gcGwoKSB7IHJldHVybiBHYW1lLmdldFBsYXllcigpOyB9XHJcbi8vX19fX19fX19fX19GVU5DVElPTlNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG52YXIgUmVmcmVzaE1DTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gTW9kRXZlbnQuQ3JlYXRlKCdZTS5TbG90cy5SRUZSRVNIJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuUHVzaFN0cmluZyhoYW5kbGUsICdSZWZyZXNoJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuU2VuZChoYW5kbGUpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBTZXRNZW51T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gTW9kRXZlbnQuQ3JlYXRlKCdZTS5TbG90cy5SRUZSRVNIJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuUHVzaFN0cmluZyhoYW5kbGUsICdTZXRNZW51T3B0aW9ucycpO1xyXG4gICAgICAgIE1vZEV2ZW50LlNlbmQoaGFuZGxlKTtcclxuICAgIH0pO1xyXG4gICAgUmVmcmVzaE1DTSgpO1xyXG59O1xyXG5leHBvcnQgdmFyIHNhdmVTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy5BZGRDYXRlZ29yaWVzLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuQWRkQ2F0ZWdvcmllcykpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuUmVtb3ZlQ2F0ZWdvcmllcywgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgbWNtX3NldHRpbmdzLlJlbW92ZUNhdGVnb3JpZXMpKVxyXG4gICAgLy8gU2V0SW50VmFsdWUobnVsbCwgbWNtX3NldHRpbmdzLiwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgbWNtX3NldHRpbmdzLlNlbGVjdGVkU2xvdCkpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuYWRkU2xvdEJ1dHRvbikpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwgbWNtX3NldHRpbmdzLmlucHV0U2xvdE5hbWUpID8gMTowKVxyXG4gICAgLy8gU2V0SW50VmFsdWUobnVsbCwgbWNtX3NldHRpbmdzLiwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJcIikpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcIlwiKSlcclxufTtcclxuZnVuY3Rpb24gRmlsbE1DTU9wdGlvbnMoKSB7XHJcbiAgICBGaWx0ZXJNQ01PcHRpb25zKCcnKTtcclxuICAgIHZhciBsaXN0cyA9IFttY21fc2V0dGluZ3MuU2VsZWN0ZWRTbG90LCBzdG9yYWdlS2V5cy5tZW51QmxhY2tMaXN0LCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0XTtcclxuICAgIC8vIGZpbGwgZWFjaCBtZW51IHdpdGggdGhlIGRlZmF1bHQgZmlyc3Qgb3B0aW9uLCBcIk5vIENoYW5nZXNcIlxyXG4gICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBsaXN0KTtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGxpc3QsICdObyBDaGFuZ2VzJyk7XHJcbiAgICAgICAgbWNtLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbGlzdCwgXCJObyBDaGFuZ2VzXCIpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBzbG90IHNlbGVjdGlvbiBtZW51IG9mIGZpcnN0IHBhZ2VcclxuICAgIFNsb3QuZ2V0QWxsU2xvdE5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBuYW1lID0gcztcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIG1jbV9zZXR0aW5ncy5TZWxlY3RlZFNsb3QsIG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBpdGVtIGNhdGVnb3J5IGVkaXRpbmcsIHNlY29uZCBwYWdlXHJcbiAgICB2YXIgdm9sdW1lcyA9IE9iamVjdC52YWx1ZXMoaXRlbUNhdGVnb3J5Vm9sdW1lcyk7XHJcbiAgICBPYmplY3Qua2V5cyhpdGVtQ2F0ZWdvcnlWb2x1bWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjLCBpKSB7XHJcbiAgICAgICAgYyA9IFwiZlwiLmNvbmNhdChjLCBcIjpDYXRlZ29yaWVzXCIpO1xyXG4gICAgICAgIG1jbS5TZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgYywgdm9sdW1lc1tpXSk7XHJcbiAgICB9KTtcclxuICAgIC8vIC8vIHNlbGVjdGluZyBhIHNsb3QgZm9yIGVhY2ggY2F0ZWdvcnksIHRoaXJkIHBhZ2UsIHNldHRpbmcgZWFjaCBvcHRpb24gdG8gd2hhdCdzIGN1cnJlbnRseSBzZWxlY3RlZFxyXG4gICAgLy8gbGV0IHNsb3RzOiBTbG90W10gPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5VG9TbG90KVxyXG4gICAgLy8gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpLmZvckVhY2goKGMsIGkpID0+IHtcclxuICAgIC8vICAgICBjID0gYHMke2N9OlNsb3RBc3NpZ25tZW50YFxyXG4gICAgLy8gICAgIGxldCBzOiBTbG90ID0gc2xvdHNbaV1cclxuICAgIC8vICAgICBtY20uU2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBjLCBzLm5hbWUpXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLy8gIGZpbGxpbmcgZWFjaCBjYXRlZ29yeSBtZW51IHdpdGggc2xvdCBuYW1lcyBhcyBvcHRpb25zXHJcbiAgICAvLyBpZiAoU3RyaW5nTGlzdENvdW50KG51bGwsIHN0b3JhZ2VLZXlzLlNsb3RBc3NpZ25tZW50KSA8PSAwKSB7IFxyXG4gICAgLy8gICAgIGxldCBzbG90X25hbWVzOiBzdHJpbmdbXSA9IFNsb3QuZ2V0QWxsU2xvdE5hbWVzKClcclxuICAgIC8vICAgICBTdHJpbmdMaXN0Q2xlYXIobnVsbCwgc3RvcmFnZUtleXMuU2xvdEFzc2lnbm1lbnQpXHJcbiAgICAvLyAgICAgc2xvdF9uYW1lcy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgLy8gICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLlNsb3RBc3NpZ25tZW50LCBzKVxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyB9XHJcbiAgICAvLyBoaWRlIGFsbCBncm91cCBvbmUgbWNtIHNldHRpbmdzIHVudGlsIGEgc2xvdCBpcyBjaG9zZW4gZnJvbSBzQWN0aXZlU2xvdCwgdGhlIG1jbSBvcHRpb25cclxuICAgIEhpZGVHcm91cE9uZSh0cnVlKTtcclxuICAgIG1jbS5TZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIFwiaVdpZGdldFg6U2xvdHNcIiwgR2V0QmFzZVdpZGdldFBvcygpWzBdKTtcclxuICAgIG1jbS5TZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIFwiaVdpZGdldFk6U2xvdHNcIiwgR2V0QmFzZVdpZGdldFBvcygpWzFdKTtcclxuICAgIG1jbS5TZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIFwiaUludmVudG9yeVdpZGdldFg6U2xvdHNcIiwgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLmdldFBvc2l0aW9uKClbMF0pO1xyXG4gICAgbWNtLlNldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJpSW52ZW50b3J5V2lkZ2V0WTpTbG90c1wiLCBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuZ2V0UG9zaXRpb24oKVsxXSk7XHJcbn1cclxuO1xyXG5mdW5jdGlvbiBmaWxsU2xvdENhdGVnb3J5TGlzdHMoc2VsZWN0ZWRfc2xvdCkge1xyXG4gICAgdmFyIGxpc3RzID0gW3N0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3RdO1xyXG4gICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBsaXN0KTtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGxpc3QsICdObyBDaGFuZ2VzJyk7XHJcbiAgICAgICAgbWNtLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbGlzdCwgXCJObyBDaGFuZ2VzXCIpO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3Qua2V5cyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAoYywgaSkge1xyXG4gICAgICAgIGlmIChOdW1iZXIoYykgfHwgYyA9PSAnMCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2xvdCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlUb1Nsb3QpW2ldO1xyXG4gICAgICAgIHZhciB1bmRlcl9pbmRleCA9IGMuaW5kZXhPZignXycsIDkpICsgMTtcclxuICAgICAgICBjID0gYy5zbGljZSh1bmRlcl9pbmRleCk7XHJcbiAgICAgICAgaWYgKHNsb3QgPT0gc2VsZWN0ZWRfc2xvdCkge1xyXG4gICAgICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0LCBjKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyBGdW5jdGlvbiB0byBjbGVhciBhbmQgcmVmaWxsIHRoZSBtY20gbWVudSBsaXN0cyBhY2NvcmRpbmcgdG8gYSBmaWx0ZXIgY3JpdGVyaWFcclxuZnVuY3Rpb24gRmlsdGVyTUNNT3B0aW9ucyhxdWVyeSkge1xyXG4gICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gJyc7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyBGaWxsTUNNT3B0aW9ucygpXHJcbiAgICB2YXIgbWFpbktleSA9IFwiWU0uTG9yaWNhLk1DTS5FbnVtLlwiO1xyXG4gICAgLy8gYXJyID0gbWFpbktleSArIGFyclxyXG4gICAgdmFyIGtleXMgPSBbXCJVcGtlZXBcIiwgXCJCbGFja2xpc3RcIiwgXCJFeGNsdXNpb25cIl07XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGtleSA9IG1haW5LZXkgKyBrZXk7XHJcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gRmlsdGVyT3B0aW9ucyhTdHJpbmdMaXN0VG9BcnJheShudWxsLCBrZXkpLCBxdWVyeSk7XHJcbiAgICAgICAgaWYgKCFmaWx0ZXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbHRlcmVkLnVuc2hpZnQoJ05vIENoYW5nZXMnKTtcclxuICAgICAgICBTdHJpbmdMaXN0Q2xlYXIobnVsbCwga2V5KTtcclxuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwga2V5LCBmLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFNldE1lbnVPcHRpb25zKCk7XHJcbiAgICBSZWZyZXNoTUNNKCk7XHJcbn1cclxuZnVuY3Rpb24gRmlsdGVyT3B0aW9ucyhhcnIsIHF1ZXJ5KSB7XHJcbiAgICBpZiAoIWFycikge1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIEhpZGVHcm91cE9uZShtYWtlVmlzaWJsZSkge1xyXG4gICAgbWFrZVZpc2libGUgPSAhbWFrZVZpc2libGU7XHJcbiAgICBtY20uU2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwgJ2JIaWRkZW5Ub2dnbGUxOlNsb3RzJywgbWFrZVZpc2libGUpO1xyXG4gICAgUmVmcmVzaE1DTSgpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpIHtcclxuICAgIHZhciBpID0gT2JqZWN0LnZhbHVlcyhtY21fc2V0dGluZ3MpLmluZGV4T2YoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1jbV9zZXR0aW5ncylbaV07XHJcbn1cclxuZnVuY3Rpb24gc29sdmVTbG90U3RvcmFnZVBhdGgocykge1xyXG4gICAgcmV0dXJuIFwiWU0uU2xvdHMuXCIuY29uY2F0KHMubmFtZSwgXCIuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIFNldEZsb2F0U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIC8vIFNldEZsb2F0VmFsdWUobnVsbCwgYFlNLlNsb3RzLiR7IHNsb3QubmFtZSB9LiR7a2V5fWAsIG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwga2V5KSlcclxuICAgIHNsb3QuYmFzZVNpemUgPSBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGNoYW5nZWRfc2V0dGluZyk7XHJcbn1cclxuZnVuY3Rpb24gU2V0SW50U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsICdZTS5TbG90cy4nICsga2V5LCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBrZXkpKVxyXG4gICAgLy8gc2xvdC5iYXNlU2l6ZSA9IG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwga2V5KVxyXG59XHJcbmZ1bmN0aW9uIFNldEJvb2xTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCkge1xyXG4gICAgdmFyIGtleSA9IHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgdmFyIHZhbHVlID0gbWNtLkdldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIGtleSk7XHJcbiAgICBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdiQWRkU2xvdCcpIHx8IGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnRGVsZXRlU2xvdCcpKSB7XHJcbiAgICAgICAgbWNtLlNldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIGNoYW5nZWRfc2V0dGluZywgZmFsc2UpO1xyXG4gICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ2JBZGRTbG90JykpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1Nsb3QgPSBtY20uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCAnc0FkZFNsb3ROYW1lOlNsb3RzJyk7XHJcbiAgICAgICAgICAgIG1jbS5TZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsICdzQWRkU2xvdE5hbWU6U2xvdHMnLCAnRW50ZXInKTtcclxuICAgICAgICAgICAgbmV3IFNsb3QobmV3U2xvdCwgNTAsIEdldEJhc2VXaWRnZXRQb3MoKVswXSwgR2V0QmFzZVdpZGdldFBvcygpWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoa2V5LmluY2x1ZGVzKCdEZWxldGVTbG90JykpIHtcclxuICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG9sZFNsb3RfbmFtZSA9IG1jbS5HZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsICdzQWN0aXZlU2xvdHM6U2xvdHMnKTtcclxuICAgICAgICAgICAgdmFyIG9sZFNsb3RfMSA9IGdldFNsb3RGcm9tTmFtZShvbGRTbG90X25hbWUpO1xyXG4gICAgICAgICAgICB2YXIgYWxsU2xvdHMgPSBTbG90LmdldEFsbFNsb3RzKCk7XHJcbiAgICAgICAgICAgIHZhciBmaXJzdFNsb3RfMSA9IGFsbFNsb3RzWzBdO1xyXG4gICAgICAgICAgICBhbGxTbG90cy5zcGxpY2UoYWxsU2xvdHMuaW5kZXhPZihvbGRTbG90XzEpLCAxKTtcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHMgPT09IG9sZFNsb3RfMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlUb1Nsb3QpW2ldID0gZmlyc3RTbG90XzE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjYW4ndCByZWFsbHkgZGVsZXRlIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgb2xkU2xvdF8xLndpZGdldC5zZXRBbHBoYSgwKTtcclxuICAgICAgICAgICAgRGVidWcubWVzc2FnZUJveChcIlJldmVydGVkIFwiLmNvbmNhdChvbGRTbG90X25hbWUsIFwiJ3MgYXNzaWduZWQgaXRlbXMgdG8gYSBkZWZhdWx0IHNsb3QsIFwiKS5jb25jYXQoZmlyc3RTbG90XzEubmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnUmVzZXQnKSkge1xyXG4gICAgICAgIHZhciBkYXRhX2pzb24gPSAnZGF0YS9za3NlL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMvU2xvdHMuanNvbic7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsX2RhdGEgPSB7IFwidm9sdW1lc1wiOiB7IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93XCI6IDEsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkXCI6IDEsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRcIjogMC41LCBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Cb2x0X0VxdWlwcGVkXCI6IDAuNSwgXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhcIjogNSwgXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhfRXF1aXBwZWRcIjogNSwgXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkhcIjogMTAsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkXCI6IDEwLCBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJcIjogMiwgXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkXCI6IDIsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93XCI6IDgsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkXCI6IDgsIFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiOiA4LCBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dfRXF1aXBwZWRcIjogOCwgXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRcIjogOSwgXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWRcIjogOSwgXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzXCI6IDE1LCBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3NfRXF1aXBwZWRcIjogMTUsIFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNcIjogNiwgXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c19FcXVpcHBlZFwiOiA2LCBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldFwiOiA2LCBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZFwiOiA2LCBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c1wiOiA0LCBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZFwiOiA0LCBcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzXCI6IDYsIFwiUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNfRXF1aXBwZWRcIjogNiwgXCJSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeVwiOiAzLCBcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkXCI6IDMsIFwiUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGxcIjogMiwgXCJSQUJJbnZfSXRlbVR5cGVfRm9vZFwiOiAxLCBcIlJBQkludl9JdGVtVHlwZV9Qb3Rpb25cIjogMSwgXCJSQUJJbnZfSXRlbVR5cGVfRHJpbmtcIjogMiwgXCJSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudFwiOiAwLjEsIFwiUkFCSW52X0l0ZW1UeXBlX0dlbVwiOiAxLCBcIlJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtXCI6IDEsIFwiUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrXCI6IDAuNSwgXCJSQUJJbnZfSXRlbVR5cGVfTWlzY0xhcmdlXCI6IDUsIFwiUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW1cIjogMywgXCJSQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsXCI6IDAuMSwgXCJSQUJJbnZfSXRlbVR5cGVfR29sZFwiOiAwLCBcIlJBQkludl9JdGVtVHlwZV9PcmVJbmdvdFwiOiAyLCBcIlJBQkludl9JdGVtVHlwZV9IaWRlUGVsdFwiOiAxIH0sIFwic2xvdHNcIjogW3sgXCJuYW1lXCI6IFwiTWlzY1wiLCBcImJhc2VTaXplXCI6IDIwMCwgXCJjdXJyZW50U2l6ZVwiOiAwLCBcIndpZGdldFwiOiB7IFwiaW5kZXhcIjogMiwgXCJ0eXBlXCI6IFwidW5kZWZpbmVkXCIsIFwib3duaW5nTW9kXCI6IFwiSW52ZW50b3J5U2xvdHNcIiwgXCJ4XCI6IDE1MDAsIFwieVwiOiA4MDAgfSwgXCJpdGVtc1wiOiBbXSB9LCB7IFwibmFtZVwiOiBcIldlYXBvbnNcIiwgXCJiYXNlU2l6ZVwiOiAyMCwgXCJjdXJyZW50U2l6ZVwiOiAwLCBcIndpZGdldFwiOiB7IFwiaW5kZXhcIjogMywgXCJ0eXBlXCI6IFwidW5kZWZpbmVkXCIsIFwib3duaW5nTW9kXCI6IFwiSW52ZW50b3J5U2xvdHNcIiwgXCJ4XCI6IDE1MDAsIFwieVwiOiA4MjAgfSwgXCJpdGVtc1wiOiBbXSB9LCB7IFwibmFtZVwiOiBcIlF1aXZlclwiLCBcImJhc2VTaXplXCI6IDYwLCBcImN1cnJlbnRTaXplXCI6IDAsIFwid2lkZ2V0XCI6IHsgXCJpbmRleFwiOiA0LCBcInR5cGVcIjogXCJ1bmRlZmluZWRcIiwgXCJvd25pbmdNb2RcIjogXCJJbnZlbnRvcnlTbG90c1wiLCBcInhcIjogMTUwMCwgXCJ5XCI6IDg0MCB9LCBcIml0ZW1zXCI6IFtdIH0sIHsgXCJuYW1lXCI6IFwiVmFsdWFibGVzXCIsIFwiYmFzZVNpemVcIjogNTAsIFwiY3VycmVudFNpemVcIjogMCwgXCJ3aWRnZXRcIjogeyBcImluZGV4XCI6IDUsIFwidHlwZVwiOiBcInVuZGVmaW5lZFwiLCBcIm93bmluZ01vZFwiOiBcIkludmVudG9yeVNsb3RzXCIsIFwieFwiOiAxNTAwLCBcInlcIjogODYwIH0sIFwiaXRlbXNcIjogW10gfSwgeyBcIm5hbWVcIjogXCJCb3R0bGVzXCIsIFwiYmFzZVNpemVcIjogMTAsIFwiY3VycmVudFNpemVcIjogMCwgXCJ3aWRnZXRcIjogeyBcImluZGV4XCI6IDYsIFwidHlwZVwiOiBcInVuZGVmaW5lZFwiLCBcIm93bmluZ01vZFwiOiBcIkludmVudG9yeVNsb3RzXCIsIFwieFwiOiAxNTAwLCBcInlcIjogODgwIH0sIFwiaXRlbXNcIjogW10gfV0sIFwiQ2F0ZWdvcnktdG8tU2xvdHNcIjogW1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd1wiLCBcIlF1aXZlclwiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkXCIsIFwiUXVpdmVyXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdFwiLCBcIlF1aXZlclwiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWRcIiwgXCJRdWl2ZXJcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb24xSFwiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZFwiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySFwiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySF9FcXVpcHBlZFwiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkXCIsIFwiV2VhcG9uc1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93XCIsIFwiV2VhcG9uc1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkXCIsIFwiV2VhcG9uc1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dfRXF1aXBwZWRcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRcIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWRcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzXCIsIFwiTWlzY1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc19FcXVpcHBlZFwiLCBcIldlYXBvbnNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzXCIsIFwiTWlzY1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWRcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRcIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRfRXF1aXBwZWRcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNcIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWRcIiwgXCJXZWFwb25zXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc1wiLCBcIk1pc2NcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzX0VxdWlwcGVkXCIsIFwiTWlzY1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlcIiwgXCJWYWx1YWJsZXNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkXCIsIFwiV2VhcG9uc1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGxcIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfRm9vZFwiLCBcIk1pc2NcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9Qb3Rpb25cIiwgXCJCb3R0bGVzXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfRHJpbmtcIiwgXCJCb3R0bGVzXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudFwiLCBcIk1pc2NcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9HZW1cIiwgXCJWYWx1YWJsZXNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtXCIsIFwiVmFsdWFibGVzXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfTG9ja3BpY2tcIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfTWlzY0xhcmdlXCIsIFwiTWlzY1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW1cIiwgXCJNaXNjXCJdLCBbXCJSQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsXCIsIFwiTWlzY1wiXSwgW1wiUkFCSW52X0l0ZW1UeXBlX0dvbGRcIiwgXCJWYWx1YWJsZXNcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9PcmVJbmdvdFwiLCBcIk1pc2NcIl0sIFtcIlJBQkludl9JdGVtVHlwZV9IaWRlUGVsdFwiLCBcIk1pc2NcIl1dLCBcIkN1cnJlbnQgSXRlbSBXaWRnZXQgUG9zaXRpb25cIjogWzk1MCwgODAwXSwgXCJCYXNlIFdpZGdldCBQb3NpdGlvblwiOiBbMTUwMCwgODAwXSB9O1xyXG4gICAgICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxfZGF0YSksIGZhbHNlKTtcclxuICAgICAgICBpbXBvcnREYXRhRnJvbUZpbGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnSW1wb3J0JykpIHtcclxuICAgICAgICBpbXBvcnREYXRhRnJvbUZpbGUoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBTZXRTdHJpbmdTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCkge1xyXG4gICAgdmFyIGtleSA9IHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgdmFyIHZhbHVlID0gbWNtLkdldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwga2V5KTtcclxuICAgIGlmICh2YWx1ZSA9PSAnTm8gQ2hhbmdlcycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5LmluY2x1ZGVzKCdDYXRlZ29yaWVzUmVtb3ZlJykpIHtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3QsIHZhbHVlKTtcclxuICAgICAgICBTdHJpbmdMaXN0UmVtb3ZlKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHZhbHVlKTtcclxuICAgICAgICBjYXRlZ29yeVRvU2xvdFt2YWx1ZV0gPSBudWxsOyAvLyBzZXRzIHRvIHRoZSBkZWZhdWx0IHNsb3QgJ01pc2Nfc2xvdCdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS5pbmNsdWRlcygnQ2F0ZWdvcmllc0FkZCcpKSB7XHJcbiAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBzdG9yYWdlS2V5cy5tZW51QmxhY2tMaXN0LCB2YWx1ZSk7XHJcbiAgICAgICAgU3RyaW5nTGlzdFJlbW92ZShudWxsLCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0LCB2YWx1ZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUb1Nsb3RbdmFsdWVdID0gc2xvdDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS5pbmNsdWRlcygnc0FkZFNsb3QnKSkge1xyXG4gICAgICAgIFJlZnJlc2hNQ00oKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBTZXRTbG90V2lkZ2V0UG9zaXRpb25TZXR0aW5ncyhzbG90KSB7XHJcbiAgICB2YXIgeHkgPSBzbG90LndpZGdldC5nZXRQb3NpdGlvbigpO1xyXG4gICAgbWNtLlNldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJpU2xvdFdpZGdldFg6U2xvdHNcIiwgeHlbMF0pO1xyXG4gICAgbWNtLlNldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJpU2xvdFdpZGdldFk6U2xvdHNcIiwgeHlbMV0pO1xyXG59XHJcbmZ1bmN0aW9uIGNoZWNrT3JwaGFuZWRDYXRlZ29yaWVzKCkge1xyXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjYXRlZ29yeVRvU2xvdCk7XHJcbiAgICB2YXIgb3JwaGFucyA9IFtdO1xyXG4gICAgT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xyXG4gICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICBvcnBoYW5zLnB1c2goa2V5c1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb3JwaGFucztcclxufVxyXG4vL19fX19fX19fX19FVkVOVFNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5leHBvcnQgdmFyIG1haW5NY20gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xyXG4gICAgICAgIChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZWdpc3RlckZvck1vZEV2ZW50KCdTbG90c19NQ01fUGFnZVNlbGVjdCcsICdPblBhZ2VTZWxlY3QnKTtcclxuICAgICAgICAoX2IgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucmVnaXN0ZXJGb3JNb2RFdmVudCgnU2xvdHNfTWVudV9PcGVuJywgJ09uTWVudU9wZW4nKTtcclxuICAgICAgICAoX2MgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVnaXN0ZXJGb3JNb2RFdmVudCgnWU0uU2xvdHMuU0VUVElOR19DSEFOR0VEJywgJ09uU2V0dGluZ0NoYW5nZWQnKTtcclxuICAgICAgICAoX2QgPSBwbCgpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucmVnaXN0ZXJGb3JNb2RFdmVudCgnU2xvdHNfTWVudV9DbG9zZV9VcGRhdGUnLCAnT25NZW51Q2xvc2UnKTtcclxuICAgICAgICAvLyBpbml0SXRlbUNhdGVnb3JpZXNMaXN0KClcclxuICAgIH0pO1xyXG4gICAgaG9va3Muc2VuZFBhcHlydXNFdmVudC5hZGQoe1xyXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGFueSBpdGVtIGNhdGVnb3JpZXMgYXJlIHVuYXNzaWduZWRcclxuICAgICAgICAgICAgdmFyIGVtcHR5Q2F0ID0gY2hlY2tPcnBoYW5lZENhdGVnb3JpZXMoKTtcclxuICAgICAgICAgICAgaWYgKGVtcHR5Q2F0Lmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICBEZWJ1Zy5tZXNzYWdlQm94KFwiVGhlIGZvbGxvd2luZyBjYXRlZ29yaWVzIG5lZWQgYW4gYXNzaWduZWQgc2xvdDogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVtcHR5Q2F0KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEV2YWx1YXRlSW52ZW50b3J5KCk7XHJcbiAgICAgICAgICAgIHNhdmVUb0RhdGFGaWxlKCk7XHJcbiAgICAgICAgICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgICAgICBTbG90LmZhZGVBbGxPdXQoKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDApO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25NZW51Q2xvc2UnKTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoY3R4LnBhcHlydXNFdmVudE5hbWUpXHJcbiAgICAgICAgICAgIEZpbGxNQ01PcHRpb25zKCk7XHJcbiAgICAgICAgICAgIFNsb3QuZmFkZUFsbEluKCk7XHJcbiAgICAgICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uUGFnZVNlbGVjdCcgfHwgJ09uTWVudU9wZW4nKTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoY3R4LnBhcHlydXNFdmVudE5hbWUpXHJcbiAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VkX3NldHRpbmcgPSBHZXRTdHJpbmdWYWx1ZShudWxsLCBzdG9yYWdlS2V5cy5jaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsb3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoY2hhbmdlZF9zZXR0aW5nKVxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtY20uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBtY21fc2V0dGluZ3MuU2VsZWN0ZWRTbG90KTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09ICdObyBDaGFuZ2VzJy50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgSGlkZUdyb3VwT25lKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2xvdCA9IGdldFNsb3RGcm9tTmFtZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoc2xvdC5uYW1lKVxyXG4gICAgICAgICAgICAgICAgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnQWN0aXZlU2xvdCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgSGlkZUdyb3VwT25lKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBtY20uU2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIG1jbV9zZXR0aW5ncy5zbGlkZXJTbG90TWF4LCBzbG90LmJhc2VTaXplKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsU2xvdENhdGVnb3J5TGlzdHMoc2xvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0U2xvdFdpZGdldFBvc2l0aW9uU2V0dGluZ3Moc2xvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VkX3NldHRpbmdbMF0gPT0gJ2YnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0RmxvYXRTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdTbG90TWF4JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC5iYXNlU2l6ZSA9IG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdJdGVtVHlwZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuZXdTaXplID0gbWNtLkdldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkX3NldHRpbmcgPSBjaGFuZ2VkX3NldHRpbmcuc2xpY2UoMSwgY2hhbmdlZF9zZXR0aW5nLmxlbmd0aCAtIDExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGNoYW5nZWRfc2V0dGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5Vm9sdW1lc1tjaGFuZ2VkX3NldHRpbmddID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGl0ZW1DYXRlZ29yeVZvbHVtZXNbY2hhbmdlZF9zZXR0aW5nXSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnZlNsb3RNYXgnKSl7c2xvdH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZ1swXSA9PSAnaScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdTbG90V2lkZ2V0WCcpIHx8IGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnU2xvdFdpZGdldFknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRQb3NpdGlvbihtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcImlTbG90V2lkZ2V0WDpTbG90c1wiKSwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJpU2xvdFdpZGdldFk6U2xvdHNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoYFRoaXMgc2xvdCBoYXMgYmVlbiBtb3ZlZCB0byAke3Nsb3Qud2lkZ2V0LmdldFBvc2l0aW9uKCl9IGApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVUb0RhdGFGaWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnSW52ZW50b3J5V2lkZ2V0WCcpIHx8IGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnSW52ZW50b3J5V2lkZ2V0WScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRQb3NpdGlvbihtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcImlJbnZlbnRvcnlXaWRnZXRYOlNsb3RzXCIpLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcImlJbnZlbnRvcnlXaWRnZXRZOlNsb3RzXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdpV2lkZ2V0WCcpIHx8IGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnaVdpZGdldFknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRCYXNlV2lkZ2V0UG9zKFttY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcImlXaWRnZXRYOlNsb3RzXCIpLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcImlXaWRnZXRZOlNsb3RzXCIpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNsb3Quc2V0QWxsV2lkZ2V0UG9zKEdldEJhc2VXaWRnZXRQb3MoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFNldEludFNldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZ1swXSA9PSAnYicpIHtcclxuICAgICAgICAgICAgICAgICAgICBTZXRCb29sU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhbmdlZF9zZXR0aW5nWzBdID09ICdzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnTm8gQ2hhbmdlcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBTZXRTdHJpbmdTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKCBtY20uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBtY21fc2V0dGluZ3MuUmVtb3ZlQ2F0ZWdvcmllcyApIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNldE1lbnVPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25TZXR0aW5nQ2hhbmdlZCcpO1xyXG59O1xyXG4iLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuU3RvcmFnZVV0aWw7XHJcbi8qKiBNT0QgQVVUSE9SUywgUkVBRCFcclxuXHJcbiAgICBUaGlzIHNjcmlwdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNhdmluZyBhbmQgbG9hZGluZyBhbnkgYW1vdW50IG9mIGludCwgZmxvYXQsIGZvcm0gYW5kIHN0cmluZyB2YWx1ZXNcclxuICAgIGJ5IG5hbWUgb24gYSBmb3JtIG9yIGdsb2JhbGx5LiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGFjY2Vzc2VkIGFuZCBjaGFuZ2VkIGZyb20gYW55IG1vZCB3aGljaCBhbGxvd3NcclxuICAgIG1vZHMgdG8gYmVjb21lIGNvbXBhdGlibGUgd2l0aCBlYWNoIG90aGVyIHdpdGhvdXQgYWRkaW5nIGFueSByZXF1aXJlbWVudHMgdG8gdGhlIG90aGVyIG1vZCBvciBpdHMgdmVyc2lvblxyXG4gICAgb3RoZXIgdGhhbiB0aGlzIHBsdWdpbi5cclxuXHJcbiAgICBWYWx1ZXMgd2lsbCBzdGF5IG9uIGZvcm1zIG9yIGdsb2JhbGx5IHVudGlsIHRoZXkgYXJlIFVuc2V0IG9yIENsZWFyZWQgaW4gY2FzZSBvZiBsaXN0cy4gSWYgdmFsdWVcclxuICAgIGlzIHNldCBvbiBhIGZvcm0gYW5kIHRoZSBvYmplY3QgaXMgZGVsZXRlZCB0aGVuIFRIRSB2YWx1ZSB3aWxsIGJlIHJlbW92ZWQgd2hlbiBzYXZpbmcgZ2FtZS5cclxuICAgIElmIHlvdSBhcmUgZG9uZSB3aXRoIHVzaW5nIGEgY2VydGFpbiB2YXJpYWJsZSB5b3Ugc2hvdWxkIHVzZSBVbnNldCBvciBDbGVhciBmdW5jdGlvbiB0byByZW1vdmUgdGhlbVxyXG4gICAgYnV0IGl0IGlzIG5vdCByZXF1aXJlZC5cclxuXHJcbiAgICBTYXZpbmcgTUNNIGNvbmZpZyB2YWx1ZXMgaGVyZSB3b3VsZCBhbGxvdyBvdGhlciBtb2RzIHRvIGNoYW5nZSB5b3VyIG1vZCBzZXR0aW5ncyB3aGljaCBtYXlcclxuICAgIGJlIHVzZWZ1bC4gSXQgc2hvdWxkIGFsc28gYWxsb3cgeW91IHRvIGNoYW5nZSBNQ00gY29uZmlnIHNjcmlwdCB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHZlcnNpb25pbmdcclxuICAgIHNpbmNlIHRoZXJlIGFyZSBubyBuZXcgdmFyaWFibGVzIGluIHRoZSBzY3JpcHQgaXRzZWxmLlxyXG5cclxuICAgIEZ1bmN0aW9ucyB0aGF0IHN0YXJ0IHdpdGggRmlsZSBpbiB0aGUgbmFtZSB3aWxsIHNhdmUgdmFsdWVzIHRvIGEgc2VwYXJhdGUgZmlsZSwgc28gdGhhdCB5b3UgY2FuXHJcbiAgICBhY2Nlc3MgdGhlIHNhbWUgdmFsdWVzIGZyb20gYWxsIHNhdmVnYW1lcy4gVGhpcyBtYXkgYmUgdXNlZnVsIGZvciBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxyXG4gICAoRklMRSBGVU5DVElPTlMgQVJFIERFUFJFQ0FURUQhIFVTRSBKU09OVVRJTC5QU0MgSU5TVEVBRClcclxuXHJcbiAgICBTYXZlZCB2YWx1ZXMgdGFrZSB2ZXJ5IGxpdHRsZSBtZW1vcnkgLSBleHBlY3QgdG8gdXNlIGxlc3MgdGhhbiA1MDAgS0Igb2YgcGh5c2ljYWwgbWVtb3J5IGV2ZW4gd2hlblxyXG4gICAgc2V0dGluZyB0aG91c2FuZHMgb2YgdmFsdWVzLlxyXG5cclxuICAgIFZhbHVlIG5hbWVzIGFyZSBub3QgY2FzZSBzZW5zaXRpdmUsIHRoYXQgbWVhbnMgR2V0SW50VmFsdWUobm9uZSwgXCJhYmNcIikgPT0gR2V0SW50VmFsdWUobm9uZSwgXCJhQkNcIikuXHJcblxyXG4gICAgQWxsIHZhbHVlcyBhcmUgc2VwYXJhdGVkIGZyb20gZWFjaCBvdGhlciBieSB0eXBlISBUaGF0IG1lYW5zIFNldEludFZhbHVlKG5vbmUsIFwiYWJjXCIsIDEpIGFuZFxyXG4gICAgU2V0RmxvYXRWYWx1ZShub25lLCBcImFiY1wiLCAyLjApIGNyZWF0ZSBzZXBhcmF0ZSBlbnRyaWVzIGFuZCBhcmVuJ3QgYWZmZWN0ZWQgYnkgZWFjaCBvdGhlci5cclxuICAgIFN0b3JhZ2VVdGlsLlNldEludFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiLCAxKVxyXG4gICAgU3RvcmFnZVV0aWwuU2V0RmxvYXRWYWx1ZShub25lLCBcIm15VmFsdWVcIiwgNS4wKVxyXG4gICAgaW50IHZhbHVlID0gU3RvcmFnZVV0aWwuR2V0SW50VmFsdWUobm9uZSwgXCJteVZhbHVlXCIpXHJcbiAgICB2YWx1ZSA9PSAxIDsgdHJ1ZVxyXG4gICAgdmFsdWUgPT0gNSA7IGZhbHNlXHJcblxyXG4gICAgV2hlbiBjaG9vc2luZyBuYW1lcyBmb3IgdmFyaWFibGVzIHRyeSB0byByZW1lbWJlciB0aGF0IGFsbCBtb2RzIGFjY2VzcyB0aGUgc2FtZSBzdG9yYWdlLCBzbyBpZiB5b3VcclxuICAgIGNyZWF0ZSBhIHZhcmlhYmxlIHdpdGggbmFtZSBcIk5hbWVcIiB0aGVuIG1hbnkgb3RoZXIgbW9kcyBjb3VsZCB1c2UgdGhlIHNhbWUgdmFyaWFibGUgYnV0IGluIGRpZmZlcmVudFxyXG4gICAgd2F5cyB0aGF0IGxlYWQgdG8gdW53YW50ZWQgYmVoYXZpb3IuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHByZWZpeCB0aGUgdmFyaWFibGUgd2l0aCB5b3VyIG1vZCBuYW1lLFxyXG4gICAgdGhhdCB3YXkgeW91IGNhbiBiZSBzdXJlIG5vYm9keSBlbHNlIHdpbGwgdHJ5IHRvIHVzZSB0aGUgc2FtZSB2YXJpYWJsZSBpbiB0aGVpciBtb2QuIEZvciBleGFtcGxlXHJcbiAgICByZWFsaXN0aWMgbmVlZHMgYW5kIGRpc2Vhc2VzIG1pZ2h0IHNldCBodW5nZXIgYXMgXCJybmRfaHVuZ2VydmFsdWVcIi5cclxuXHJcbiAgICBZb3UgY2FuIGFsc28gdXNlIHRoaXMgc3RvcmFnZSB0byBtYWtlIHlvdXIgbW9kIGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gb3RoZXIgbW9kcywgZm9yIGV4YW1wbGUgaWZcclxuICAgIHlvdXIgbW9kIGhhcyBhIGZ1bmN0aW9uIHRoYXQgc2V0cyBhbiBBY3RvciB0byBiZSBpbnZpc2libGUgeW91IGNvdWxkIGFkZCBhIHNjcmlwdCB0aGF0IGNoZWNrczpcclxuICAgIGludCBpID0gU3RvcmFnZVV0aWwuRm9ybUxpc3RDb3VudChub25lLCBcIk1ha2VJbnZpc2libGVcIilcclxuICAgIHdoaWxlKGkgPiAwKVxyXG4gICAgICAgIGktLVxyXG4gICAgICAgIEFjdG9yIG1ha2UgPSBTdG9yYWdlVXRpbC5Gb3JtTGlzdEdldChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgaSkgYXMgQWN0b3JcclxuICAgICAgICBpZihtYWtlKVxyXG4gICAgICAgICAgICBNeVNjcmlwdEZ1bmN0aW9uKG1ha2UpXHJcbiAgICAgICAgZW5kaWZcclxuICAgICAgICBTdG9yYWdlVXRpbC5Gb3JtTGlzdFJlbW92ZUF0KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBpKVxyXG4gICAgZW5kd2hpbGVcclxuICAgIEFuZCB0aGUgb3RoZXIgbW9kIGNvdWxkIHdyaXRlOlxyXG4gICAgU3RvcmFnZVV0aWwuRm9ybUxpc3RBZGQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIG15QWN0b3IpXHJcbiAgICB0byBtYWtlIHNvbWVvbmUgaW52aXNpYmxlIHVzaW5nIHlvdXIgbW9kLiBCdXQgaWYgeW91ciBtb2QgaXNuJ3QgcHJlc2VudCB0aGVuIG5vdGhpbmcgaGFwcGVucy5cclxuICAgIFRoaXMgaXMganVzdCBhbiBleGFtcGxlLCBJJ20gc3VyZSB5b3UgY2FuIGZpbmQgYmV0dGVyIHdheXMgdG8gaW1wbGVtZW50IGNvbXBhdGliaWxpdHksIGl0IHdvdWxkXHJcbiAgICBoZWxwIHRvIGluY2x1ZGUgYSBkb2N1bWVudGF0aW9uIGZvciBvdGhlciBtb2RkZXJzIGlmIHlvdSBkby5cclxuLyoqXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAgICBTdG9yYWdlIGZ1bmN0aW9ucyAtIHZhbHVlcyBpbiBzYXZlIGdhbWUgZmlsZS4gKi9cclxuLyoqIFNldCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgZ2xvYmFsbHkgb3Igb24gYW55IGZvcm0gYnkgbmFtZSBhbmQgcmV0dXJuXHJcbiAgIHRoZSB2YWx1ZSBwYXNzZWQsIG9yIGFzIHVuaW5pdGlhbGl6ZWQgdmFyaWFibGUgaWYgaW52YWxpZCBrZXlzIGdpdmVuLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNhdmUgb24uIFNldCBub25lIHRvIHNhdmUgZ2xvYmFsbHkuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZXQgdG8gdGhlIGdpdmVuIGtleXMuIElmIHplcm8sIGVtcHR5LCBvciBub25lIGFyZSBnaXZlbiwgdGhlIGtleSB3aWxsIGJlIHVuc2V0LiAqL1xyXG5leHBvcnQgdmFyIFNldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgcHJldmlvdXNseSBzZXQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbmlmIHN1Y2Nlc3NmdWwuIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgaWYgdmFsdWUgZGlkbid0IGV4aXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIFVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBDaGVjayBpZiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgaGFzIGJlZW4gc2V0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiB2YWx1ZSBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIEdldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIFBsdWNrcyBhIHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFJldHVybmluZyB0aGUgdmFsdWUgc3RvcmVkLCB0aGVuIHJlbW92aW5nIGl0IGZyb20gc3RvcmFnZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIHZhbHVlIGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgUGx1Y2tJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5QbHVja1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIEdldCBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgY3VycmVudCB2YWx1ZSBieVxyXG5cclxuICAgZ2l2ZW4ga2V5cyB3aWxsIGJlIGluaXRpYWxpemVkIHRvIGdpdmVuIGFtb3VudCBpZiBpdCBkb2VzIG5vdCBleGlzdCAqL1xyXG5leHBvcnQgdmFyIEFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbi8qKiBBZGQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHRvIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm5cclxuICAgdGhlIHZhbHVlJ3MgbmV3IGluZGV4LiBJbmRleCBjYW4gYmUgLTEgaWYgd2Ugd2VyZSB1bmFibGUgdG8gYWRkXHJcbiAgIHRoZSB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBhZGQgdG8uIFNldCBub25lIHRvIGFkZCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuXHJcbiAgIFtvcHRpb25hbF0gYWxsb3dEdXBsaWNhdGU6IGFsbG93IGFkZGluZyB2YWx1ZSB0byBsaXN0IGlmIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbi8qKiBHZXQgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiAwIGFzIHZhbHVlIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuLyoqIFNldCBhIHZhbHVlIGluIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiB0aGUgcHJldmlvdXMgdmFsdWUgb3IgMCBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gc2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNldCB0by4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuLyoqIFBsdWNrcyBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGUgaW5kZXggaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0J3Mgc3RvcmFnZSBhZnRlciByZXR1cm5pbmcgaXQncyB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIGluZGV4IGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkludExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5GbG9hdExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uRm9ybUxpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ5IGZpcnN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzaGlmdCB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdCB0byBzaGlmdCBpdCdzIGZpcnN0IHZhbHVlIGZyb20uICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdmVyeSBsYXN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwb3AgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QgdG8gcG9wIG9mZiBpdCdzIGxhc3QgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEFkanVzdCB0aGUgZXhpc3RpbmcgdmFsdWUgb2YgYSBsaXN0IGJ5IHRoZSBnaXZlbiBhbW91bnQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBzZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgbGlzdHMgY3VycmVudCBpbmRleCB2YWx1ZSBieS5cclxuXHJcbnMgMCBpZiBpbmRleCBkb2VzIG5vdCBleGlzdHMgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uSW50TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG4vKiogSW5zZXJ0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSB0byBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuXHJcbiAgIGlmIHN1Y2Nlc3NmdWwuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gYWRkIHRvLiBTZXQgbm9uZSB0byBhZGQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBpbmRleDogcG9zaXRpb24gaW4gbGlzdCB0byBwdXQgdGhlIHZhbHVlLiAwIGlzIGZpcnN0IGVudHJ5IGluIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbi8qKiBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBmcm9tIGEgbGlzdCBvbiBmb3JtXHJcbiAgIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoaXMgdmFsdWUgd2VyZSByZW1vdmVkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gcmVtb3ZlLlxyXG4gICBbb3B0aW9uYWxdIGFsbG93SW5zdGFuY2VzOiByZW1vdmUgYWxsIGluc3RhbmNlcyBvZiB0aGlzIHZhbHVlIGluIGEgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG4vKiogQ2xlYXIgYSBsaXN0IG9mIHZhbHVlcyAodW5zZXQpIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbnRoZSBwcmV2aW91cyBzaXplIG9mIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2xlYXIgb24uIFNldCBub25lIHRvIGNsZWFyIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseSBhbmRcclxuaWYgd2Ugd2VyZSBzdWNjZXNzZnVsIGluIGRvaW5nIHNvLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG4vKiogR2V0IHNpemUgb2YgYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIHNwZWNpZmljIHZhbHVlIHdpdGhpbiBhIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBsb29rIGZvci5cclxuICAgW29wdGlvbmFsXSBleGNsdWRlOiBpZiB0cnVlLCBmdW5jdGlvbiB3aWxsIHJldHVybiBudW1iZXIgb2YgZWxlbWVudHMgTk9UIGVxdWFsIHRvIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbi8qKiBGaW5kIGEgdmFsdWUgaW4gbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaXRzXHJcbiAgIGluZGV4IG9yIC0xIGlmIHZhbHVlIHdhcyBub3QgZm91bmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2VhcmNoLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogRmluZCBpZiBhIHZhbHVlIGluIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBleGlzdHMsIHRydWUgaWYgaXQgZXhpc3RzLFxyXG4gICBmYWxzZSBpZiBpdCBkb2Vzbid0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNlYXJjaC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBTb3J0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSBsaXN0IGJ5IHZhbHVlcyBpbiBhc2NlbmRpbmcgb3JkZXIuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc29ydCBvbi4gU2V0IG5vbmUgZm9yIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBGaWxscyB0aGUgZ2l2ZW4gaW5wdXQgYXJyYXkgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHksXHJcbiAgIHdpbGwgZmlsbCB0aGUgYXJyYXkgdW50aWwgZWl0aGVyIHRoZSBhcnJheSBvciBsaXN0IHJ1bnMgb3V0IG9mIHZhbGlkIGluZGV4ZXNcclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHNsaWNlW106IGFuIGluaXRpYWxpemVkIGFycmF5IHNldCB0byB0aGUgc2xpY2Ugc2l6ZSB5b3Ugd2FudCwgaS5lLiBpbnRbXSBzbGljZSA9IG5ldyBpbnRbMTBdXHJcbiAgIFtvcHRpb25hbF0gc3RhcnRJbmRleDogdGhlIHN0YXJ0aW5nIGxpc3QgaW5kZXggeW91IHdhbnQgdG8gc3RhcnQgZmlsbGluZyB5b3VyIHNsaWNlIGFycmF5IHdpdGggKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuLyoqIFNpemVzIHRoZSBnaXZlbiBsaXN0IHRvIGEgc2V0IG51bWJlciBvZiBlbGVtZW50cy4gSWYgdGhlIGxpc3QgZXhpc3RzIGFscmVhZHkgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICAgd2hlbiBnaXZlbiBmZXdlciBlbGVtZW50cywgb3IgcmVzaXplZCB0byB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIHdpdGggdGhlIGZpbGxlciBhcmd1bWVudCBiZWluZyB1c2VkIGFzXHJcbiAgIHRoZSBkZWZhdWx0IHZhbHVlc1xyXG5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRydW5jYXRlZCAoc2lnbmVkKSBvciBhZGRlZCAodW5zaWduZWQpIG9udG8gdGhlIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB0b0xlbmd0aDogVGhlIHNpemUgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBsaXN0IHRvLiBNYXggbGVuZ3RoIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpcyA1MDAuXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG4vKiogQ3JlYXRlcyBhIGNvcHkgb2YgYXJyYXkgb24gdGhlIGdpdmVuIHN0b3JhZ2UgbGlzdCBhdCB0aGUgZ2l2ZW4gb2JqZWN0K2tleSxcclxuICAgb3ZlcndyaXRpbmcgYW55IGxpc3QgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0cy5cclxuXHJcbiAgIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgY29weVtdOiBUaGUgcGFweXJ1cyBhcnJheSB3aXRoIHRoZSBjb250ZW50IHlvdSB3aXNoIHRvIGNvcHkgb3ZlciBpbnRvIFN0b3JhZ2VVdGlsXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uSW50TGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5Gb3JtTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuLyoqIE91dHB1dHMgdGhlIHZhbHVlcyBjdXJyZW50bHkgc3RvcmVkIGJ5IHRoZSBnaXZlbiBvYmplY3Qra2V5LlxyXG5cclxuICAgUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIFJldHVybnMgYXJyYXkgb2YgZm9ybXMgZnJvbSBsaXN0IHRoYXQgaGF2ZSAob3Igb3B0aW9uYWxseSBkb24ndCBoYXZlKSB0aGUgc3BlY2lmaWVkIGZvcm0gdHlwZXMuXHJcbiAgIEZvciB2YWxpZCBsaXN0IG9mIGZvcm0gdHlwZXMsIHNlZSBGb3JtVHlwZS5wc2Mgb3IgaHR0cDovL3d3dy5jcmVhdGlvbmtpdC5jb20vR2V0VHlwZV8tX0Zvcm1cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIEZvcm1UeXBlSURzW106IFRoZSBpbnQgcGFweXJ1cyBhcnJheSB3aXRoIGFsbCB0aGUgZm9ybSB0eXBlcyB5b3Ugd2lzaCB0byBmaWx0ZXIgZm9yXHJcbiAgIFtvcHRpb25hbF0gUmV0dXJuTWF0Y2hpbmc6IEJ5IGRlZmF1bHQsIFRSVUUsIHRoZSBvdXRwdXQgRm9ybVtdIGFycmF5IHdpbGwgY29udGFpbiBmb3JtcyBmcm9tIGxpc3QgdGhhdCBtYXRjaCB0aGUgZm9ybSB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gRkFMU0UsIGludmVydHMgdGhlIHJlc3VsdGluZyBhcnJheSB3aXRoIGZvcm1zIHRoYXQgaGF2ZSBhIHR5cGUgdGhhdCBETyBOT1QgbWF0Y2guICovXHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaWx0ZXJCeVR5cGVzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRHMsIFJldHVybk1hdGNoaW5nKSB7XHJcbiAgICBpZiAoUmV0dXJuTWF0Y2hpbmcgPT09IHZvaWQgMCkgeyBSZXR1cm5NYXRjaGluZyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEZpbHRlckJ5VHlwZXMoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlEcywgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIEZvcm1MaXN0RmlsdGVyQnlUeXBlcygpIGZvciB3aGVuIG9ubHkgZ2V0dGluZyBhIHNpbmdsZSB0eXBlLlxyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmlsdGVyQnlUeXBlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpIHtcclxuICAgIGlmIChSZXR1cm5NYXRjaGluZyA9PT0gdm9pZCAwKSB7IFJldHVybk1hdGNoaW5nID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0RmlsdGVyQnlUeXBlKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vKiogQ291bnRzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNvdW50ZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDb3VudEludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50SW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudFN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENvdW50cyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNvdW50IG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjb3VudGVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBDbGVhcnMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdmFsdWVzL2xpc3RzIHRoYXQgd2VyZSB1bnNldC5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNsZWFyZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDbGVhckludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFySW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFySW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENsZWFycyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gc3BlY2lmaWMgb2JqZWN0cy5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZhbHVlcy9saXN0cyB0aGF0IHdlcmUgdW5zZXQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNsZWFyIG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjbGVhcmVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBEZWJ1ZyBmdW5jdGlvbnMgLSBjYW4gYmUgaGVscGZ1bCB0byBmaW5kIHByb2JsZW1zIG9yIGZvciBkZXZlbG9wbWVudC4gKi9cclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVWYWx1ZXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVWYWx1ZXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVBbGxWYWx1ZXMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19DbGVhbnVwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQ2xlYW51cCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEludE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRmxvYXRPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRmxvYXRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbFN0cmluZ09ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGb3JtT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1PYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsSW50TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZsb2F0TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGbG9hdExpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nTGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxTdHJpbmdMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZvcm1MaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1MaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakludEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRmxvYXRLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRmxvYXRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9ialN0cmluZ0tleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGb3JtS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1LZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqSW50TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZsb2F0TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGbG9hdExpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nTGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpTdHJpbmdMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ09iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ09iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybU9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybU9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0tleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1LZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuLyoqIFN0b3JhZ2UgZnVuY3Rpb25zIC0gc2VwYXJhdGUgZmlsZS4gVGhlc2UgYXJlIHNoYXJlZCBpbiBhbGwgc2F2ZSBnYW1lcy4gVmFsdWVzIGFyZSBsb2FkZWQgYW5kIHNhdmVkXHJcbiAgIHdoZW4gc2F2ZWdhbWUgaXMgbG9hZGVkIG9yIHNhdmVkLlxyXG5cclxuICAgREVQUkVDQVRFRCB2Mi45OiBSZXBsYWNlZCBieSBKc29uVXRpbCBmdW5jdGlvbnMuIEV4aXN0aW5nIGZ1bmN0aW9ucyBoZXJlIGhhdmUgYmVlbiBwcm94aWVkIHRvIGEgc2hhcmVkXHJcbiAgIGpzb24gZmlsZSB0byBtYWludGFpbiBjb21wYXRpYmlsaXR5LiAqL1xyXG5leHBvcnQgdmFyIEZpbGVTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEludFZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEZsb2F0VmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldFN0cmluZ1ZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0Rm9ybVZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlQWRqdXN0SW50VmFsdWUoS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVBZGp1c3RGbG9hdFZhbHVlKEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0SW50VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGbG9hdFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldFN0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGb3JtVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0ludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNJbnRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzRmxvYXRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc1N0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0Zvcm1WYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRJbnRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0RmxvYXRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRTdHJpbmdWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0Rm9ybVZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEFkanVzdChLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RBZGp1c3QoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NhdmVGaWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfU2F2ZUZpbGUoKTsgfTtcclxuLyoqIEN1cnJlbnRseSBubyBsb25nZXIgaW1wbGVtZW50ZWQsIHVua25vd24gaWYvd2hlbiB0aGV5IHdpbGwgcmV0dXJuLiAqL1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlRGVsZXRlQWxsVmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZURlbGV0ZUFsbFZhbHVlcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NldERlYnVnTW9kZSA9IGZ1bmN0aW9uIChlbmFibGVkKSB7IHJldHVybiBzbi5kZWJ1Z19TZXREZWJ1Z01vZGUoZW5hYmxlZCk7IH07XHJcbmV4cG9ydCB2YXIgSW1wb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMpIHtcclxuICAgIGlmIChyZXN0cmljdEtleSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0S2V5ID0gXCJcIjsgfVxyXG4gICAgaWYgKHJlc3RyaWN0VHlwZSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0VHlwZSA9IC0xOyB9XHJcbiAgICBpZiAocmVzdHJpY3RGb3JtID09PSB2b2lkIDApIHsgcmVzdHJpY3RGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHJlc3RyaWN0R2xvYmFsID09PSB2b2lkIDApIHsgcmVzdHJpY3RHbG9iYWwgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGtleUNvbnRhaW5zID09PSB2b2lkIDApIHsga2V5Q29udGFpbnMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkltcG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zKTtcclxufTtcclxuZmFsc2U7XHJcbmV4cG9ydCB2YXIgRXhwb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMsIGFwcGVuZCkge1xyXG4gICAgaWYgKHJlc3RyaWN0S2V5ID09PSB2b2lkIDApIHsgcmVzdHJpY3RLZXkgPSBcIlwiOyB9XHJcbiAgICBpZiAocmVzdHJpY3RUeXBlID09PSB2b2lkIDApIHsgcmVzdHJpY3RUeXBlID0gLTE7IH1cclxuICAgIGlmIChyZXN0cmljdEZvcm0gPT09IHZvaWQgMCkgeyByZXN0cmljdEZvcm0gPSBudWxsOyB9XHJcbiAgICBpZiAocmVzdHJpY3RHbG9iYWwgPT09IHZvaWQgMCkgeyByZXN0cmljdEdsb2JhbCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoa2V5Q29udGFpbnMgPT09IHZvaWQgMCkgeyBrZXlDb250YWlucyA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkV4cG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zLCBhcHBlbmQpO1xyXG59O1xyXG5mYWxzZTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiXHJcbmNvbnN0IE1DTSA9IHNwLk1DTVxyXG5cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUpIHtyZXR1cm4gTUNNLkdldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIHNldHRpbmdfbmFtZSl9XHJcbmV4cG9ydCB2YXIgR2V0TW9kU2V0dGluZ0ludCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUpIHtyZXR1cm4gTUNNLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgc2V0dGluZ19uYW1lKX1cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nRmxvYXQgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lKSB7cmV0dXJuIE1DTS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgc2V0dGluZ19uYW1lKX1cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nU3RyaW5nID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSkge3JldHVybiBNQ00uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBzZXR0aW5nX25hbWUpfVxyXG5cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKSB7cmV0dXJuIE1DTS5TZXRNb2RTZXR0aW5nQm9vbChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX1cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nSW50ID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSl9XHJcbmV4cG9ydCB2YXIgU2V0TW9kU2V0dGluZ0Zsb2F0ID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX1cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nU3RyaW5nID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==