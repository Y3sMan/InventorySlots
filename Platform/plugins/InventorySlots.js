/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl),
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
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
var x = 2500;
var y = 1000;
var white = [1, 1, 1, 1];
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
var inventoryCurrentHighlighted = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_3__.spText(1500, y, 'currentItem', [1, 1, 1, 0], undefined, 'InventorySlots');
// ____________________FUNCTIONS___________________________________________
function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
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
    //armors
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
    448818: ItemCategories.RABInv_ItemType_Weapon2H,
    124693: ItemCategories.RABInv_ItemType_WeaponBow,
    124691: ItemCategories.RABInv_ItemType_Weapon1H,
    448817: ItemCategories.RABInv_ItemType_Weapon2H,
    124692: ItemCategories.RABInv_ItemType_Weapon1H,
    124694: ItemCategories.RABInv_ItemType_Weapon1H,
    124689: ItemCategories.RABInv_ItemType_Weapon1H,
    124690: ItemCategories.RABInv_ItemType_Weapon1H,
    448816: ItemCategories.RABInv_ItemType_Weapon2H,
    595943: ItemCategories.RABInv_ItemType_WeaponArrow,
    // armors
    442605: ItemCategories.RABInv_ItemType_ArmorBoots,
    441320: ItemCategories.RABInv_ItemType_Clothes,
    442604: ItemCategories.RABInv_ItemType_ArmorCuirass,
    442607: ItemCategories.RABInv_ItemType_ArmorGauntlets,
    442606: ItemCategories.RABInv_ItemType_ArmorHelmet,
    441321: ItemCategories.RABInv_ItemType_Jewelry,
    615858: ItemCategories.RABInv_ItemType_ArmorShield,
    // Miscs
    595178: ItemCategories.RABInv_ItemType_HidePelt,
    595179: ItemCategories.RABInv_ItemType_Food,
    595177: ItemCategories.RABInv_ItemType_MiscSmall,
    781527: ItemCategories.RABInv_ItemType_MiscMedium,
    577002: ItemCategories.RABInv_ItemType_Food,
    659030: ItemCategories.RABInv_ItemType_Food,
    595181: ItemCategories.RABInv_ItemType_Gem,
    577003: ItemCategories.RABInv_ItemType_Ingredient,
    588122: ItemCategories.RABInv_ItemType_Jewelry,
    595180: ItemCategories.RABInv_ItemType_OreIngot,
    577005: ItemCategories.RABInv_ItemType_Potion,
    577004: ItemCategories.RABInv_ItemType_Potion,
    1006768: ItemCategories.RABInv_ItemType_BookScroll,
    659031: ItemCategories.RABInv_ItemType_BookScroll,
    604067: ItemCategories.RABInv_ItemType_Soulgem,
    604069: ItemCategories.RABInv_ItemType_BookScroll,
    604066: ItemCategories.RABInv_ItemType_BookScroll,
    604068: ItemCategories.RABInv_ItemType_Weapon1H,
    595182: ItemCategories.RABInv_ItemType_MiscSmall,
};
function determineItemCategory(item) {
    var _a;
    var f = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(item);
    var isEquipped = (_a = pl()) === null || _a === void 0 ? void 0 : _a.isEquipped(f);
    if (!f) {
        return;
    }
    // printConsole(`isEquipped:: ${pl()?.isEquipped(f)}`)
    var kyds = f.getKeywords();
    var key = -1;
    if (item == 15) {
        return ItemCategories.RABInv_ItemType_Gold;
    } // gold doesn't have a keyword and needs to be treated different
    for (var i = 0; i < (kyds === null || kyds === void 0 ? void 0 : kyds.length); i++) {
        var k = kyds[i];
        var f_1 = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Form.from(k).getFormID();
        if (Object.keys(keywordToCategory).includes("".concat(f_1))) {
            // @ts-ignore
            key = keywordToCategory[f_1];
            if (isEquipped) {
                key += 1;
                if (key > 27) {
                    key = 0;
                }
            }
            // printConsole(`determineItemCategory:: the key is ${key}`)
            // printConsole(`determineItemCategory:: the keyword id is ${f}`)
            return key;
        }
        else {
            continue;
        }
    }
    if (key == -1) {
        return 0;
    }
}
function determineItemVolume(item) {
    var category = determineItemCategory(item);
    var vol = Object.values(itemCategoryVolumes)[category];
    // printConsole(`determineItemVolume:: the vol is ${vol}`)
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
        this.widget = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_3__.spText(x, y, this.name, white, undefined, 'InventorySlots');
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
    return Slot;
}());

var Misc_slot = new Slot('Misc', 200, x, y);
var WeaponSheaths_slot = new Slot('Weapons', 20, x, y + 20);
var Ammo_slot = new Slot('Quiver', 60, x, y + 40);
var Valuables_slot = new Slot('Valuables', 50, x, y + 60);
var Bottles_slot = new Slot('Bottles', 10, x, y + 80);
// let Equipped_slot = new Slot('Equipped Load',50, x, y + 100)
function determineItemsSlot(item) {
    var category = determineItemCategory(item);
    var key = Object.keys(categoryToSlot)[category];
    // printConsole(`determineItemCategory:: category number == ${key}`)
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
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("additemtoslot:: vol:: ".concat(vol));
    if (!newSlot) {
        slot = tuple[1];
    }
    else {
        slot = newSlot;
    }
    slot.items.push(item);
    // printConsole(slot.items)
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
            // printConsole(slot.name); 
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
    var slotMax = slot.baseSize.toFixed(2);
    var slotCurrent = +(slot.currentSize).toFixed(2);
    // printConsole(`lotAtItem:: slot.baseSize = ${slot.baseSize}`)
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
                // printConsole(`GetItemHighlighted:: slot.baseSize = ${slot.baseSize}`)
                // printConsole(`The selected item's slot is ${slot.name}`)
                Slot.grayOutAll();
                slot.grayIn();
                isInventory = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('InventoryMenu');
                isContainer = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('ContainerMenu');
                isBarter = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu');
                // printConsole(`Volume: ${vol}\nSlot: ${slot.name}`)
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
function DropItem(itemId, num) {
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
// JSON file functions
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
    var slotNames = [];
    var catNames = Object.keys(categoryToSlot);
    Object.values(categoryToSlot).forEach(function (s, i) {
        var name = s.name;
        var cat = catNames[i];
        slotNames.push([cat, name]);
    });
    innerDict['Category-to-Slots'] = slotNames;
    (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.WriteToFile)(data_json, JSON.stringify(innerDict), false);
}
function importFile() {
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
    var slot_info = importFile()['slots'];
    var names = [];
    slot_info.forEach(function (s) {
        var name = s['name'];
        if (!Slot.getAllSlotNames().includes(name)) {
            names.push([name, s['baseSize'], s['x'], s['y']]);
        }
        else {
            var new_size = s['baseSize'];
            var index = Slot.getAllSlotNames().indexOf(name);
            var oldSlot = Slot.getAllSlots()[index];
            // printConsole(`The old size is ${oldSlot.baseSize} and the new size is ${new_size}`)
            oldSlot.baseSize = new_size;
        }
    });
    Slot.updateWidgets();
    // printConsole(`The new slots are ${names}`)
    names.forEach(function (info) {
        var name = info[0][0];
        var size = info[0][1];
        var x = info[0][2];
        var y = info[0][3];
        new Slot(name, size, x, y);
    });
}
function importCategoriesfromFile() {
    var cats_slots = importFile()['Category-to-Slots'];
    cats_slots.forEach(function (cat_slot) {
        var cat = cat_slot[0];
        var slot_name = cat_slot[1];
        var slot = getSlotFromName(slot_name);
        categoryToSlot[cat] = slot;
    });
}
function importDataFromFile() {
    importCategoriesfromFile();
    importSlotsfromFile();
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
    // printConsole(Object.values(importFile()['volumes'])[ItemCategories.RABInv_ItemType_ArmorGauntlets])
    // importSlotsfromFile()
    // saveToDataFile()
    if ((0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/plugins/InventorySlots.js') && (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/pluginsdev/InventorySlots.js')) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT');
    }
    importDataFromFile();
    EvaluateInventory();
});
var ignoreFlag = false;
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
    if (event.oldContainer) {
        oldId = event.oldContainer.getFormID();
    }
    if (event.newContainer) {
        newId = event.newContainer.getFormID();
    }
    // if (ignoreFlag){ignoreFlag = false; return;}
    if (itemId === 15) {
        return;
    }
    // printConsole(`oldcontainer == ${ event.oldContainer.getFormID() }`)
    // printConsole(`newcontainer == ${ event.newContainer.getFormID() }`)
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("containerChanged Running::");
    // Item added to player's inventory
    // ignore gold coming in and out
    if (newId == 20 && !ignoreFlag && itemId != 15) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("newId == 20::");
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
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("num === 1::");
            // the slot is filled
            if (slot.currentSize + fullVolume > slot.baseSize) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("Slot might be filled");
                // if the item was picked up from the world
                if (!event.oldContainer) {
                    DropItem(itemId, num);
                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('!event.oldContainer:: ');
                }
                // if the item was taken from a container
                else {
                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('allowedcount === 1:: Trying to deny selection');
                    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu')) {
                        DropItem(itemId, num);
                    }
                    else {
                        // Flat out prevent taking the item
                        DenySelection(itemId, disallowedCount, event.oldContainer, slot.name);
                    }
                    // printConsole('event.oldContainer')
                }
                ignoreFlag = true;
            }
            else {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("num === 1:: additemtoslot");
                addItemtoSlot(itemId, num);
            }
        }
        // if it is a stack of items
        else if (num > 1) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("num > 1:: allowedcount:: ".concat(allowedCount, "\ndisallowedcount:: ").concat(disallowedCount, "\nvolume * num = ").concat(volume, " * ").concat(allowedCount));
            addItemtoSlot(itemId, allowedCount);
            // removeItemfromSlot(itemId, disallowedCount)
            // if the item was picked up from the world
            if (slot.currentSize + (volume * allowedCount) > slot.baseSize) {
                if (!event.oldContainer && disallowedCount > 0) {
                    DropItem(itemId, disallowedCount);
                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('!event.oldContainer:: disallowed count > 0::');
                }
                // if the item was taken from a container
                else if (disallowedCount) {
                    // Check if it's possible to allow a few through, like arrows
                    // Flat out prevent taking the item
                    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('BarterMenu')) {
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('allowedCount > 1:: trying to drop item');
                        DropItem(itemId, disallowedCount);
                    }
                    else {
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('allowedCount > 1:: Trying to deny selection');
                        DenySelection(itemId, disallowedCount, event.oldContainer, slot.name);
                    }
                    // printConsole('event.oldContainer')
                }
                ignoreFlag = true;
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("allowedCount > 1:: IgnoreFlag:: ".concat(ignoreFlag));
            }
        }
    }
    // Item removed from player's inventory
    else if (oldId == 20 && !ignoreFlag && itemId != 15) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("Remove:: IgnoreFlag:: ".concat(ignoreFlag));
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("Removing ".concat(itemId, " with count ").concat(num));
        removeItemfromSlot(itemId, num);
    }
    else {
        ignoreFlag = false;
    }
    if (slot.currentSize <= 0) {
        slot.currentSize = 0;
    }
    // printConsole( Misc_slot.baseSize )
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
    // printConsole(event.baseObj.getName())
    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('MagicMenu')) {
        return;
    }
    var item = event.baseObj.getFormID();
    // printConsole(`equip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
    var oldCat = determineItemCategory(item);
    removeItemfromSlot(item, 1);
    addItemtoSlot(item, 1);
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('unequip', function (event) {
    var _a, _b, _c;
    if (((_a = event.actor.getBaseObject()) === null || _a === void 0 ? void 0 : _a.getFormID()) != ((_c = (_b = pl()) === null || _b === void 0 ? void 0 : _b.getBaseObject()) === null || _c === void 0 ? void 0 : _c.getFormID())) {
        return;
    }
    // printConsole(event.baseObj.getName())
    if (skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('MagicMenu')) {
        return;
    }
    var item = event.baseObj.getFormID();
    // printConsole(`unequip:: isEquipped:: ${pl()?.isEquipped(event.baseObj)}`)
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
        var tmpColl = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.storage[collectionKey];
        tmpColl.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                spTextsCollection.delete(key);
            }
        });
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
function initItemCategoriesList() {
    // Object.values(ItemCategories).forEach(c => {
    //     if (Number(c) || c as number == 0 ){return;}
    //     StringListAdd(null, storageKeys.categories, c as string)
    // });
}
function FillMCMOptions() {
    FilterMCMOptions('');
    var a;
    var lists = [mcm_settings.SelectedSlot, storageKeys.menuBlackList, storageKeys.menuWhiteList];
    lists.forEach(function (list) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListClear)(null, list);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, list, 'No Changes');
        _skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.SetModSettingString(modname, list, "No Changes");
    });
    _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.getAllSlotNames().forEach(function (s) {
        var name = s;
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, mcm_settings.SelectedSlot, name);
    });
    HideGroupOne(true);
    // SetMenuOptions()
    // RefreshMCM()
    // // printConsole('refreshmenu has been sent')
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
        // c = c.slice(c.lastIndexOf('_') + 1)
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
    if (key.includes('bAddSlot')) { }
    // SetIntValue(null, 'YM.Slots.' + key, mcm.GetModSettingBool(modname, key) ? 1:0)
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
        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot[value] = _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.getAllSlots()[0]; // sets to the default slot 'Misc_slot'
    }
    else if (key.includes('CategoresAdd')) {
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListAdd)(null, storageKeys.menuBlackList, value);
        (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.StringListRemove)(null, storageKeys.menuWhiteList, value);
        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.categoryToSlot[value] = slot;
    }
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
            (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.EvaluateInventory)();
            (0,_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.saveToDataFile)();
            _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.Slot.updateWidgets();
        },
    }, 0x14, 0x14, 'OnMenuClose');
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(ctx.papyrusEventName);
            FillMCMOptions();
        },
    }, 0x14, 0x14, 'OnPageSelect' || 0);
    skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.hooks.sendPapyrusEvent.add({
        enter: function (ctx) {
            // printConsole(ctx.papyrusEventName)
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
                var changed_setting = (0,_skyrim_platform_papyrus_util_StorageUtil__WEBPACK_IMPORTED_MODULE_1__.GetStringValue)(null, storageKeys.changed_setting);
                var value;
                var slot;
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(changed_setting);
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
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(changed_setting);
                        _InventorySlots__WEBPACK_IMPORTED_MODULE_4__.itemCategoryVolumes[changed_setting] = newSize;
                        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(_InventorySlots__WEBPACK_IMPORTED_MODULE_4__.itemCategoryVolumes[changed_setting]);
                    }
                    // if (changed_setting.includes('fSlotMax')){slot}
                }
                else if (changed_setting[0] == 'i') {
                    if (!slot) {
                        return;
                    }
                    SetIntSetting(changed_setting, slot);
                }
                else if (changed_setting[0] == 'b') {
                    if (!slot) {
                        return;
                    }
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
                    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(_skyrim_platform_mcm_helper_MCM__WEBPACK_IMPORTED_MODULE_2__.GetModSettingString(modname, mcm_settings.RemoveCategories));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5U2xvdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQzRJO0FBQzdDO0FBQ3pEO0FBQ3NCO0FBQ047QUFDdUM7QUFDdkQ7QUFDdEM7QUFDQSxvREFBSTtBQUNKO0FBQ0EsWUFBWSxrRkFBVSwyQ0FBMkMsa0ZBQVU7QUFDM0UsWUFBWSw0REFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4REFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsK0RBQWU7QUFDZixzQ0FBc0Msb0VBQVM7QUFDL0M7QUFDTyxnQkFBZ0IsT0FBTywwREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ2xFLG1FQUFtRTs7Ozs7VUNaMUU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL3NyYy9JbnZlbnRvcnlTbG90cy50cyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy9leHRlcm5hbCB2YXIgW1wic2t5cmltUGxhdGZvcm1cIl0iLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvTWlzY1V0aWwuanMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9zcmMvbW9kZXZlbnQudHMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi4vbW9kdWxlcy9TUFRleHRVdGlscy9zcFRleHRVdGlscy50cyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zLmpzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vc3JjL1Nsb3RzX01jbS50cyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL25vZGVfbW9kdWxlcy9Ac2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbC5qcyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9tY20taGVscGVyL01DTS5qcyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgb25jZSwgb24sIEZvcm0sIEdhbWUsIFV0aWxpdHksIHByaW50Q29uc29sZSwgT2JqZWN0UmVmZXJlbmNlLCBicm93c2VyLCBkZXN0cm95QWxsVGV4dHMsIERlYnVnLCB1bnN1YnNjcmliZSB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxuaW1wb3J0IHsgV3JpdGVUb0ZpbGUsIFJlYWRGcm9tRmlsZSwgRmlsZUV4aXN0cyB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9NaXNjVXRpbFwiO1xyXG5pbXBvcnQgeyBNb2RFdmVudCB9IGZyb20gJy4vbW9kZXZlbnQnO1xyXG5pbXBvcnQgKiBhcyB3dCBmcm9tICcuLi8uLi9tb2R1bGVzL1NQVGV4dFV0aWxzL3NwVGV4dFV0aWxzJztcclxuaW1wb3J0IHsgVWkgfSBmcm9tICdAc2t5cmltLXBsYXRmb3JtL3NreXJpbS1wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEFkZEFsbEl0ZW1zVG9BcnJheSB9IGZyb20gJ0Bza3lyaW0tcGxhdGZvcm0vcG8zLXBhcHlydXMtZXh0ZW5kZXIvUE8zX1NLU0VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBtYWluTWNtIH0gZnJvbSBcIi4vU2xvdHNfTWNtXCI7XHJcbi8vIHNjcmlwdCBjaGVja1xyXG5vbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY2hlY2tTY3JpcHROdW1iZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICBpZiAoRmlsZUV4aXN0cyhcImRhdGEvcGxhdGZvcm0vcGx1Z2lucy9cIi5jb25jYXQobmFtZSkpICYmIEZpbGVFeGlzdHMoXCJkYXRhL3BsYXRmb3JtL3BsdWdpbnNkZXYvXCIuY29uY2F0KG5hbWUpKSkge1xyXG4gICAgICAgICAgICBwcmludENvbnNvbGUoJ0FCT1JUIFRFU1RJTkcuIFRIRVJFIEFSRSBUV08gSU5TVEFOQ0VTIE9GIFRISVMgU0NSSVBUJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNoZWNrU2NyaXB0TnVtYmVycygnSW52ZW50b3J5U2xvdHMuanMnKTtcclxufSk7XHJcbi8vX19fX19fX19fX19fX19fX19fX19fX19fX18gVmFyaWFibGUgU2V0dXBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxudmFyIHggPSAyNTAwO1xyXG52YXIgeSA9IDEwMDA7XHJcbnZhciB3aGl0ZSA9IFsxLCAxLCAxLCAxXTtcclxuZGVzdHJveUFsbFRleHRzKCk7XHJcbnZhciBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQgPSBuZXcgd3Quc3BUZXh0KDE1MDAsIHksICdjdXJyZW50SXRlbScsIFsxLCAxLCAxLCAwXSwgdW5kZWZpbmVkLCAnSW52ZW50b3J5U2xvdHMnKTtcclxuLy8gX19fX19fX19fX19fX19fX19fX19GVU5DVElPTlNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxudmFyIHdlYXBLd2RJZHM7XHJcbihmdW5jdGlvbiAod2VhcEt3ZElkcykge1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCYXR0bGVheGVcIl0gPSA0NDg4MThdID0gXCJXZWFwVHlwZUJhdHRsZWF4ZVwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZEFycm93XCJdID0gMTEwMzEwNV0gPSBcIldlYXBUeXBlQm91bmRBcnJvd1wiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZFdlYXBvblwiXSA9IDIyNzgxN10gPSBcIldlYXBUeXBlQm91bmRXZWFwb25cIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQm93XCJdID0gMTI0NjkzXSA9IFwiV2VhcFR5cGVCb3dcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlRGFnZ2VyXCJdID0gMTI0NjkxXSA9IFwiV2VhcFR5cGVEYWdnZXJcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlR3JlYXRzd29yZFwiXSA9IDQ0ODgxN10gPSBcIldlYXBUeXBlR3JlYXRzd29yZFwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVNYWNlXCJdID0gMTI0NjkyXSA9IFwiV2VhcFR5cGVNYWNlXCI7XHJcbiAgICAvLyBXZWFwVHlwZU1lbGVlID0gNDIyNTIzLFxyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVTdGFmZlwiXSA9IDEyNDY5NF0gPSBcIldlYXBUeXBlU3RhZmZcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlU3dvcmRcIl0gPSAxMjQ2ODldID0gXCJXZWFwVHlwZVN3b3JkXCI7XHJcbiAgICAvLyBXZWFwVHlwZVVuaXF1ZSA9IDEzNjM2MTAsXHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhckF4ZVwiXSA9IDEyNDY5MF0gPSBcIldlYXBUeXBlV2FyQXhlXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhcmhhbW1lclwiXSA9IDQ0ODgxNl0gPSBcIldlYXBUeXBlV2FyaGFtbWVyXCI7XHJcbn0pKHdlYXBLd2RJZHMgfHwgKHdlYXBLd2RJZHMgPSB7fSkpO1xyXG52YXIgYXJtb3JLd2RJZHM7XHJcbihmdW5jdGlvbiAoYXJtb3JLd2RJZHMpIHtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JCb290c1wiXSA9IDQ0MjYwNV0gPSBcIkFybW9yQm9vdHNcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDbG90aGluZ1wiXSA9IDQ0MTMyMF0gPSBcIkFybW9yQ2xvdGhpbmdcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDdWlyYXNzXCJdID0gNDQyNjA0XSA9IFwiQXJtb3JDdWlyYXNzXCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yR2F1bnRsZXRzXCJdID0gNDQyNjA3XSA9IFwiQXJtb3JHYXVudGxldHNcIjtcclxuICAgIC8vIEFybW9ySGVhdnkgPSA0NDEyOTgsXHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9ySGVsbWV0XCJdID0gNDQyNjA2XSA9IFwiQXJtb3JIZWxtZXRcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JKZXdlbHJ5XCJdID0gNDQxMzIxXSA9IFwiQXJtb3JKZXdlbHJ5XCI7XHJcbiAgICAvLyBBcm1vckxpZ2h0ID0gNDQxMjk5LFxyXG4gICAgYXJtb3JLd2RJZHNbYXJtb3JLd2RJZHNbXCJBcm1vclNoaWVsZFwiXSA9IDYxNTg1OF0gPSBcIkFybW9yU2hpZWxkXCI7XHJcbn0pKGFybW9yS3dkSWRzIHx8IChhcm1vckt3ZElkcyA9IHt9KSk7XHJcbnZhciBtaXNjS3dkSWRzO1xyXG4oZnVuY3Rpb24gKG1pc2NLd2RJZHMpIHtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxIaWRlXCJdID0gNTk1MTc4XSA9IFwiVmVuZG9ySXRlbUFuaW1hbEhpZGVcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxQYXJ0XCJdID0gNTk1MTc5XSA9IFwiVmVuZG9ySXRlbUFuaW1hbFBhcnRcIjtcclxuICAgIC8vIFZlbmRvckl0ZW1Bcm1vciA9IDU4ODEyMSxcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BcnJvd1wiXSA9IDU5NTk0M10gPSBcIlZlbmRvckl0ZW1BcnJvd1wiO1xyXG4gICAgLy8gVmVuZG9ySXRlbUNsb3RoaW5nID0gNTg4MTIzLFxyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUNsdXR0ZXJcIl0gPSA1OTUxNzddID0gXCJWZW5kb3JJdGVtQ2x1dHRlclwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbURhZWRyaWNBcnRpZmFjdFwiXSA9IDU5NTk0NF0gPSBcIlZlbmRvckl0ZW1EYWVkcmljQXJ0aWZhY3RcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1GaXJld29yZFwiXSA9IDc4MTUyN10gPSBcIlZlbmRvckl0ZW1GaXJld29yZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RcIl0gPSA1NzcwMDJdID0gXCJWZW5kb3JJdGVtRm9vZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RSYXdcIl0gPSA2NTkwMzBdID0gXCJWZW5kb3JJdGVtRm9vZFJhd1wiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUdlbVwiXSA9IDU5NTE4MV0gPSBcIlZlbmRvckl0ZW1HZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1JbmdyZWRpZW50XCJdID0gNTc3MDAzXSA9IFwiVmVuZG9ySXRlbUluZ3JlZGllbnRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1KZXdlbHJ5XCJdID0gNTg4MTIyXSA9IFwiVmVuZG9ySXRlbUpld2VscnlcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1LZXlcIl0gPSA1OTUxODNdID0gXCJWZW5kb3JJdGVtS2V5XCI7XHJcbiAgICAvLyBWZW5kb3JJdGVtT3JkZXJSb2JlcyA9IDI5NDMzNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1PcmVJbmdvdFwiXSA9IDU5NTE4MF0gPSBcIlZlbmRvckl0ZW1PcmVJbmdvdFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVBlYWNld2VlZFwiXSA9IDI5NTk5OV0gPSBcIlZlbmRvckl0ZW1QZWFjZXdlZWRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Qb2lzb25cIl0gPSA1NzcwMDVdID0gXCJWZW5kb3JJdGVtUG9pc29uXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtUG90aW9uXCJdID0gNTc3MDA0XSA9IFwiVmVuZG9ySXRlbVBvdGlvblwiO1xyXG4gICAgLy8gVmVuZG9ySXRlbVByb3BlcnR5QXJrTWFya2V0ID0gMTMxNjE4MyxcclxuICAgIC8vIFZlbmRvckl0ZW1Qcm9wZXJ0eUFya1VwcGVyQ2l0eSA9IDI5MDEwNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1SZWNpcGVcIl0gPSAxMDA2NzY4XSA9IFwiVmVuZG9ySXRlbVJlY2lwZVwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVNjcm9sbFwiXSA9IDY1OTAzMV0gPSBcIlZlbmRvckl0ZW1TY3JvbGxcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Tb3VsR2VtXCJdID0gNjA0MDY3XSA9IFwiVmVuZG9ySXRlbVNvdWxHZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1TcGVsbFRvbWVcIl0gPSA2MDQwNjldID0gXCJWZW5kb3JJdGVtU3BlbGxUb21lXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQm9va1wiXSA9IDYwNDA2Nl0gPSBcIlZlbmRvckl0ZW1Cb29rXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtU3RhZmZcIl0gPSA2MDQwNjhdID0gXCJWZW5kb3JJdGVtU3RhZmZcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Ub29sXCJdID0gNTk1MTgyXSA9IFwiVmVuZG9ySXRlbVRvb2xcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1XZWFwb25cIl0gPSA1ODgxMjBdID0gXCJWZW5kb3JJdGVtV2VhcG9uXCI7XHJcbn0pKG1pc2NLd2RJZHMgfHwgKG1pc2NLd2RJZHMgPSB7fSkpO1xyXG5leHBvcnQgdmFyIEl0ZW1DYXRlZ29yaWVzO1xyXG4oZnVuY3Rpb24gKEl0ZW1DYXRlZ29yaWVzKSB7XHJcbiAgICAvLyB3ZWFwb25zXHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd1wiXSA9IDBdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkXCJdID0gMV0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdFwiXSA9IDJdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZFwiXSA9IDNdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhcIl0gPSA0XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZFwiXSA9IDVdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIXCJdID0gNl0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkhfRXF1aXBwZWRcIl0gPSA3XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJcIl0gPSA4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlclwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkXCJdID0gOV0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93XCJdID0gMTBdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkXCJdID0gMTFdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiXSA9IDEyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkXCJdID0gMTNdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkXCI7XHJcbiAgICAvLyBhcm1vcnNcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkXCJdID0gMTRdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkX0VxdWlwcGVkXCJdID0gMTVdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc1wiXSA9IDE2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkXCJdID0gMTddID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzXCJdID0gMThdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c19FcXVpcHBlZFwiXSA9IDE5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0XCJdID0gMjBdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0X0VxdWlwcGVkXCJdID0gMjFdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzXCJdID0gMjJdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzX0VxdWlwcGVkXCJdID0gMjNdID0gXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNcIl0gPSAyNF0gPSBcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzX0VxdWlwcGVkXCJdID0gMjVdID0gXCJSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeVwiXSA9IDI2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWRcIl0gPSAyN10gPSBcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkXCI7XHJcbiAgICAvLyBtaXNjXHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsXCJdID0gMjhdID0gXCJSQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfRm9vZFwiXSA9IDI5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0Zvb2RcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1BvdGlvblwiXSA9IDMwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1BvdGlvblwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfRHJpbmtcIl0gPSAzMV0gPSBcIlJBQkludl9JdGVtVHlwZV9Ecmlua1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudFwiXSA9IDMyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0dlbVwiXSA9IDMzXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0dlbVwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfU291bGdlbVwiXSA9IDM0XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1NvdWxnZW1cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrXCJdID0gMzVdID0gXCJSQUJJbnZfSXRlbVR5cGVfTG9ja3BpY2tcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NMYXJnZVwiXSA9IDM2XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NMYXJnZVwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfTWlzY01lZGl1bVwiXSA9IDM3XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW1cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbFwiXSA9IDM4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfR29sZFwiXSA9IDM5XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0dvbGRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX09yZUluZ290XCJdID0gNDBdID0gXCJSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3RcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0XCJdID0gNDFdID0gXCJSQUJJbnZfSXRlbVR5cGVfSGlkZVBlbHRcIjtcclxufSkoSXRlbUNhdGVnb3JpZXMgfHwgKEl0ZW1DYXRlZ29yaWVzID0ge30pKTtcclxuZXhwb3J0IHZhciBpdGVtQ2F0ZWdvcnlWb2x1bWVzID0ge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93X0VxdWlwcGVkJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdCc6IDAuNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdF9FcXVpcHBlZCc6IDAuNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgnOiA1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCc6IDUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIJzogMTAsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkJzogMTAsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcic6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcl9FcXVpcHBlZCc6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93JzogOCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWQnOiA4LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3cnOiA4LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dfRXF1aXBwZWQnOiA4LFxyXG4gICAgLy9hcm1vcnNcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGQnOiA5LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZF9FcXVpcHBlZCc6IDksXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzcyc6IDE1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3NfRXF1aXBwZWQnOiAxNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290cyc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWQnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldCc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0X0VxdWlwcGVkJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHMnOiA0LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZCc6IDQsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXMnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9DbG90aGVzX0VxdWlwcGVkJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSc6IDMsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWQnOiAzLFxyXG4gICAgLy9taXNjXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwnOiAyLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Gb29kJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfUG90aW9uJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfRHJpbmsnOiAyLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50JzogMC4xLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9HZW0nOiAxLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Tb3VsZ2VtJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTG9ja3BpY2snOiAwLjUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX01pc2NMYXJnZSc6IDUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW0nOiAzLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjU21hbGwnOiAwLjEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0dvbGQnOiAwLjAsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX09yZUluZ290JzogMixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSGlkZVBlbHQnOiAxXHJcbn07XHJcbnZhciBrZXl3b3JkVG9DYXRlZ29yeSA9IHtcclxuICAgIC8vIHdlYXBvbnNcclxuICAgIDQ0ODgxODogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJILFxyXG4gICAgMTI0NjkzOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93LFxyXG4gICAgMTI0NjkxOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgsXHJcbiAgICA0NDg4MTc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24ySCxcclxuICAgIDEyNDY5MjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgMTI0Njk0OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgsXHJcbiAgICAxMjQ2ODk6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIDEyNDY5MDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgNDQ4ODE2OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgsXHJcbiAgICA1OTU5NDM6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyxcclxuICAgIC8vIGFybW9yc1xyXG4gICAgNDQyNjA1OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290cyxcclxuICAgIDQ0MTMyMDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXMsXHJcbiAgICA0NDI2MDQ6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3MsXHJcbiAgICA0NDI2MDc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0cyxcclxuICAgIDQ0MjYwNjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0LFxyXG4gICAgNDQxMzIxOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSxcclxuICAgIDYxNTg1ODogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkLFxyXG4gICAgLy8gTWlzY3NcclxuICAgIDU5NTE3ODogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0LFxyXG4gICAgNTk1MTc5OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfRm9vZCxcclxuICAgIDU5NTE3NzogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbCxcclxuICAgIDc4MTUyNzogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW0sXHJcbiAgICA1NzcwMDI6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Gb29kLFxyXG4gICAgNjU5MDMwOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfRm9vZCxcclxuICAgIDU5NTE4MTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0dlbSxcclxuICAgIDU3NzAwMzogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnQsXHJcbiAgICA1ODgxMjI6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5LFxyXG4gICAgNTk1MTgwOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3QsXHJcbiAgICA1NzcwMDU6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Qb3Rpb24sXHJcbiAgICA1NzcwMDQ6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Qb3Rpb24sXHJcbiAgICAxMDA2NzY4OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbCxcclxuICAgIDY1OTAzMTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICA2MDQwNjc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtLFxyXG4gICAgNjA0MDY5OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbCxcclxuICAgIDYwNDA2NjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICA2MDQwNjg6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIDU5NTE4MjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbCxcclxufTtcclxuZnVuY3Rpb24gZGV0ZXJtaW5lSXRlbUNhdGVnb3J5KGl0ZW0pIHtcclxuICAgIHZhciBfYTtcclxuICAgIHZhciBmID0gR2FtZS5nZXRGb3JtRXgoaXRlbSk7XHJcbiAgICB2YXIgaXNFcXVpcHBlZCA9IChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc0VxdWlwcGVkKGYpO1xyXG4gICAgaWYgKCFmKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpbnRDb25zb2xlKGBpc0VxdWlwcGVkOjogJHtwbCgpPy5pc0VxdWlwcGVkKGYpfWApXHJcbiAgICB2YXIga3lkcyA9IGYuZ2V0S2V5d29yZHMoKTtcclxuICAgIHZhciBrZXkgPSAtMTtcclxuICAgIGlmIChpdGVtID09IDE1KSB7XHJcbiAgICAgICAgcmV0dXJuIEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Hb2xkO1xyXG4gICAgfSAvLyBnb2xkIGRvZXNuJ3QgaGF2ZSBhIGtleXdvcmQgYW5kIG5lZWRzIHRvIGJlIHRyZWF0ZWQgZGlmZmVyZW50XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IChreWRzID09PSBudWxsIHx8IGt5ZHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGt5ZHMubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGsgPSBreWRzW2ldO1xyXG4gICAgICAgIHZhciBmXzEgPSBGb3JtLmZyb20oaykuZ2V0Rm9ybUlEKCk7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGtleXdvcmRUb0NhdGVnb3J5KS5pbmNsdWRlcyhcIlwiLmNvbmNhdChmXzEpKSkge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGtleSA9IGtleXdvcmRUb0NhdGVnb3J5W2ZfMV07XHJcbiAgICAgICAgICAgIGlmIChpc0VxdWlwcGVkKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgKz0gMTtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPiAyNykge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnk6OiB0aGUga2V5IGlzICR7a2V5fWApXHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgZGV0ZXJtaW5lSXRlbUNhdGVnb3J5OjogdGhlIGtleXdvcmQgaWQgaXMgJHtmfWApXHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5ID09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGV0ZXJtaW5lSXRlbVZvbHVtZShpdGVtKSB7XHJcbiAgICB2YXIgY2F0ZWdvcnkgPSBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICB2YXIgdm9sID0gT2JqZWN0LnZhbHVlcyhpdGVtQ2F0ZWdvcnlWb2x1bWVzKVtjYXRlZ29yeV07XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGRldGVybWluZUl0ZW1Wb2x1bWU6OiB0aGUgdm9sIGlzICR7dm9sfWApXHJcbiAgICBpZiAoIXZvbCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZvbDtcclxufVxyXG52YXIgQmFzZVNsb3RzID0gW107XHJcbnZhciBTbG90ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2xvdChuYW1lLCBtYXhTaXplLCB4LCB5KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmJhc2VTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTaXplID0gMDtcclxuICAgICAgICB0aGlzLndpZGdldCA9IG5ldyB3dC5zcFRleHQoeCwgeSwgdGhpcy5uYW1lLCB3aGl0ZSwgdW5kZWZpbmVkLCAnSW52ZW50b3J5U2xvdHMnKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgQmFzZVNsb3RzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRGaWxsZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNpemUudG9GaXhlZCgyKTtcclxuICAgIH07XHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRGaWxsZWRQcm9wb3J0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiOiAgIFwiKS5jb25jYXQodGhpcy5jdXJyZW50U2l6ZS50b0ZpeGVkKDIpLCBcIiAvIFwiKS5jb25jYXQodGhpcy5iYXNlU2l6ZS50b0ZpeGVkKDIpKTtcclxuICAgIH07XHJcbiAgICBTbG90LnByb3RvdHlwZS5ncmF5SW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy53aWRnZXQuc2V0QWxwaGEoMSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEJhc2VTbG90cy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLmN1cnJlbnRTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHMuY3VycmVudFNpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldEFscGhhKDEpO1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRDb2xvcih3aGl0ZSk7XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldFRleHQocy5nZXRGaWxsZWRQcm9wb3J0aW9uKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZmFkZUFsbE91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmZhZGVBbGxJbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmdldEFsbFNsb3ROYW1lcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBuYW1lcy5wdXNoKHMubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5hbWVzO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZ2V0QWxsU2xvdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEJhc2VTbG90cztcclxuICAgIH07XHJcbiAgICBTbG90LnJlc2V0U2xvdENhcGFjaXRpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxTbG90cygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgcy5jdXJyZW50U2l6ZSA9IDA7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5ncmF5T3V0QWxsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsU2xvdHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldEFscGhhKDAuNSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNsb3Q7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFNsb3QgfTtcclxudmFyIE1pc2Nfc2xvdCA9IG5ldyBTbG90KCdNaXNjJywgMjAwLCB4LCB5KTtcclxudmFyIFdlYXBvblNoZWF0aHNfc2xvdCA9IG5ldyBTbG90KCdXZWFwb25zJywgMjAsIHgsIHkgKyAyMCk7XHJcbnZhciBBbW1vX3Nsb3QgPSBuZXcgU2xvdCgnUXVpdmVyJywgNjAsIHgsIHkgKyA0MCk7XHJcbnZhciBWYWx1YWJsZXNfc2xvdCA9IG5ldyBTbG90KCdWYWx1YWJsZXMnLCA1MCwgeCwgeSArIDYwKTtcclxudmFyIEJvdHRsZXNfc2xvdCA9IG5ldyBTbG90KCdCb3R0bGVzJywgMTAsIHgsIHkgKyA4MCk7XHJcbi8vIGxldCBFcXVpcHBlZF9zbG90ID0gbmV3IFNsb3QoJ0VxdWlwcGVkIExvYWQnLDUwLCB4LCB5ICsgMTAwKVxyXG5mdW5jdGlvbiBkZXRlcm1pbmVJdGVtc1Nsb3QoaXRlbSkge1xyXG4gICAgdmFyIGNhdGVnb3J5ID0gZGV0ZXJtaW5lSXRlbUNhdGVnb3J5KGl0ZW0pO1xyXG4gICAgdmFyIGtleSA9IE9iamVjdC5rZXlzKGNhdGVnb3J5VG9TbG90KVtjYXRlZ29yeV07XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGRldGVybWluZUl0ZW1DYXRlZ29yeTo6IGNhdGVnb3J5IG51bWJlciA9PSAke2tleX1gKVxyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlUb1Nsb3QpW2NhdGVnb3J5XTtcclxufVxyXG5leHBvcnQgdmFyIGNhdGVnb3J5VG9TbG90ID0ge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXInOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcl9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3cnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3cnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd19FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgIC8vIGFybW9yc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzcyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlcyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgLy8gbWlzY1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Gb29kJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Qb3Rpb24nOiBCb3R0bGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0RyaW5rJzogQm90dGxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50JzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9HZW0nOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfU291bGdlbSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Mb2NrcGljayc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTWlzY0xhcmdlJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjU21hbGwnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0dvbGQnOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3QnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0JzogTWlzY19zbG90XHJcbn07XHJcbmZ1bmN0aW9uIHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKSB7XHJcbiAgICByZXR1cm4gW2RldGVybWluZUl0ZW1Wb2x1bWUoaXRlbSksIGRldGVybWluZUl0ZW1zU2xvdChpdGVtKV07XHJcbn1cclxuZnVuY3Rpb24gYWRkSXRlbXRvU2xvdChpdGVtLCBudW0sIG5ld1Nsb3QpIHtcclxuICAgIGlmIChudW0gPT09IHZvaWQgMCkgeyBudW0gPSAxOyB9XHJcbiAgICBpZiAobmV3U2xvdCA9PT0gdm9pZCAwKSB7IG5ld1Nsb3QgPSB1bmRlZmluZWQ7IH1cclxuICAgIHZhciBzbG90O1xyXG4gICAgdmFyIHR1cGxlID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9IHR1cGxlWzBdICogbnVtO1xyXG4gICAgcHJpbnRDb25zb2xlKFwiYWRkaXRlbXRvc2xvdDo6IHZvbDo6IFwiLmNvbmNhdCh2b2wpKTtcclxuICAgIGlmICghbmV3U2xvdCkge1xyXG4gICAgICAgIHNsb3QgPSB0dXBsZVsxXTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHNsb3QgPSBuZXdTbG90O1xyXG4gICAgfVxyXG4gICAgc2xvdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKHNsb3QuaXRlbXMpXHJcbiAgICBzbG90LmN1cnJlbnRTaXplICs9IHZvbDtcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtLCBudW0sIG9sZFNsb3QpIHtcclxuICAgIGlmIChudW0gPT09IHZvaWQgMCkgeyBudW0gPSAxOyB9XHJcbiAgICBpZiAob2xkU2xvdCA9PT0gdm9pZCAwKSB7IG9sZFNsb3QgPSB1bmRlZmluZWQ7IH1cclxuICAgIHZhciBzbG90O1xyXG4gICAgdmFyIHR1cGxlID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9IHR1cGxlWzBdICogbnVtO1xyXG4gICAgdmFyIHN0b3BGbGFnID0gZmFsc2U7XHJcbiAgICAvLyBpZiAoIW9sZFNsb3Qpe1xyXG4gICAgLy8gICAgIHNsb3QgPSB0dXBsZVsxXVxyXG4gICAgLy8gfVxyXG4gICAgLy8gZWxzZSB7XHJcbiAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgIGlmIChzLml0ZW1zLmluY2x1ZGVzKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgIHNsb3QgPSBzO1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoc2xvdC5uYW1lKTsgXHJcbiAgICAgICAgICAgIHN0b3BGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBpID0gc2xvdC5pdGVtcy5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgICAgICBzbG90Lml0ZW1zLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgc2xvdC5jdXJyZW50U2l6ZSAtPSB2b2w7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzdG9wRmxhZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBpZiAoc3RvcEZsYWcpe3JldHVybn1cclxuICAgIC8vIGVsc2Uge3Nsb3QuY3VycmVudFNpemUgLT0gdm9sfVxyXG4gICAgLy8gb2xkU2xvdC5jdXJyZW50U2l6ZSAtPSB2b2xcclxuICAgIC8vIH1cclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG59XHJcbi8vIGNvbnN0IEdldEl0ZW1TZWxlY3RlZCA9IGFzeW5jICgpID0+IHtcclxuLy8gXHRhd2FpdCBVdGlsaXR5LndhaXQoMC4wMSk7XHJcbi8vIFx0Y29uc3QgcmVjaWV2ZWQ6IEZvcm0gPSBzdS5HZXRGb3JtVmFsdWUobnVsbCwgXCJZTS5SQUIuU2VsZWN0LlwiKVxyXG4vLyBcdGlmICghcmVjaWV2ZWQpIHtyZXR1cm47fVxyXG4vLyAgICAgLy8gYWRkSXRlbXRvU2xvdChyZWNpZXZlZClcclxuLy8gfVxyXG5mdW5jdGlvbiBzbG90TG9va2F0SXRlbShpdGVtLCBudW0pIHtcclxuICAgIGlmIChudW0gPT09IHZvaWQgMCkgeyBudW0gPSAxOyB9XHJcbiAgICB2YXIgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICB2YXIgdm9sID0gKyh0dXBsZVswXSkudG9GaXhlZCgyKSAqIG51bTtcclxuICAgIHZhciBzbG90ID0gdHVwbGVbMV07XHJcbiAgICB2YXIgc2xvdE1heCA9IHNsb3QuYmFzZVNpemUudG9GaXhlZCgyKTtcclxuICAgIHZhciBzbG90Q3VycmVudCA9ICsoc2xvdC5jdXJyZW50U2l6ZSkudG9GaXhlZCgyKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgbG90QXRJdGVtOjogc2xvdC5iYXNlU2l6ZSA9ICR7c2xvdC5iYXNlU2l6ZX1gKVxyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAvLyBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0QWxwaGEoMSlcclxuICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRUZXh0KFwiVm9sdW1lOiBcIi5jb25jYXQodm9sLCBcIlxcblNsb3Q6IFwiKS5jb25jYXQoc2xvdC5uYW1lKSk7XHJcbiAgICAvLyBzbG90LndpZGdldC5zZXRUZXh0KGAke3Nsb3QubmFtZX06ICAke3Nsb3RDdXJyZW50fSAoKyR7dm9sfSkgLyR7c2xvdE1heH1gKVxyXG4gICAgc2xvdC53aWRnZXQuc2V0VGV4dChcIlwiLmNvbmNhdChzbG90Lm5hbWUsIFwiOiAgXCIpLmNvbmNhdChzbG90Q3VycmVudCwgXCIgKFwiKS5jb25jYXQoKHNsb3RDdXJyZW50ICsgdm9sKS50b0ZpeGVkKDIpLCBcIikgL1wiKS5jb25jYXQoc2xvdC5iYXNlU2l6ZS50b0ZpeGVkKDIpKSk7XHJcbiAgICBpZiAoc2xvdEN1cnJlbnQgKyB2b2wgPiBzbG90TWF4KSB7XHJcbiAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3IoWzEsIDAsIDAsIDFdKTtcclxuICAgIH0gLy8gaWYgdGhlIGl0ZW0gd291bGQgb3ZlcmZpbGwgYSBzbG90XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvcihbMCwgMSwgMCwgMV0pO1xyXG4gICAgfVxyXG59XHJcbnZhciBHZXRJdGVtSGlnaGxpZ2h0ZWQgPSBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBjb3VudCwgdHVwbGUsIHZvbCwgc2xvdCwgc2xvdE1heCwgc2xvdEN1cnJlbnQsIGlzSW52ZW50b3J5LCBpc0NvbnRhaW5lciwgaXNCYXJ0ZXI7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgwLjAwMSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb3VudCA9IGdldEhpZ2hsaWdodGVkSXRlbUNvdW50KCk7XHJcbiAgICAgICAgICAgICAgICB0dXBsZSA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIHZvbCA9ICsodHVwbGVbMF0pLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICBzbG90ID0gdHVwbGVbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZvbCB8fCAhc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3RNYXggPSBzbG90LmJhc2VTaXplLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICBzbG90Q3VycmVudCA9ICsoc2xvdC5jdXJyZW50U2l6ZSkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgR2V0SXRlbUhpZ2hsaWdodGVkOjogc2xvdC5iYXNlU2l6ZSA9ICR7c2xvdC5iYXNlU2l6ZX1gKVxyXG4gICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGBUaGUgc2VsZWN0ZWQgaXRlbSdzIHNsb3QgaXMgJHtzbG90Lm5hbWV9YClcclxuICAgICAgICAgICAgICAgIFNsb3QuZ3JheU91dEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgc2xvdC5ncmF5SW4oKTtcclxuICAgICAgICAgICAgICAgIGlzSW52ZW50b3J5ID0gVWkuaXNNZW51T3BlbignSW52ZW50b3J5TWVudScpO1xyXG4gICAgICAgICAgICAgICAgaXNDb250YWluZXIgPSBVaS5pc01lbnVPcGVuKCdDb250YWluZXJNZW51Jyk7XHJcbiAgICAgICAgICAgICAgICBpc0JhcnRlciA9IFVpLmlzTWVudU9wZW4oJ0JhcnRlck1lbnUnKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgVm9sdW1lOiAke3ZvbH1cXG5TbG90OiAke3Nsb3QubmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFRleHQoXCJWb2x1bWU6IFwiLmNvbmNhdCh2b2wsIFwiXFxuU2xvdDogXCIpLmNvbmNhdChzbG90Lm5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHZvbCAqPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ludmVudG9yeSkgeyB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0NvbnRhaW5lciB8fCBpc0JhcnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldENvbG9yKFswLDEsMCwxXSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaWV3aW5nQ29udGFpbmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3JSKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvckcoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yQigwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2xvdC53aWRnZXQuc2V0Q29sb3IoWzEsMC4xLC4xLDFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdEN1cnJlbnQgKyB2b2wgPiBzbG90TWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvcihbMSwgMCwgMCwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldFRleHQoYCR7c2xvdC5uYW1lfTogICR7c2xvdEN1cnJlbnR9ICgrJHt2b2x9KSAvJHtzbG90LmJhc2VTaXplfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQsIFwiIChcIikuY29uY2F0KChzbG90Q3VycmVudCArIHZvbCkudG9GaXhlZCgyKSwgXCIpIC9cIikuY29uY2F0KHNsb3RNYXgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVmlld2luZ0NvbnRhaW5lcigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yUigxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3JHKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvckIoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChzbG90Q3VycmVudCArIHZvbCA+IHNsb3RNYXgpe3Nsb3Qud2lkZ2V0LnNldENvbG9yKFsxLDAsMCwxXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQsIFwiIChcIikuY29uY2F0KChzbG90Q3VycmVudCAtIHZvbCkudG9GaXhlZCgyKSwgXCIpIC9cIikuY29uY2F0KHNsb3RNYXgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5mdW5jdGlvbiBEcm9wSXRlbShpdGVtSWQsIG51bSkge1xyXG4gICAgdmFyIGhhbmRsZSA9IE1vZEV2ZW50LkNyZWF0ZSgnWU1fUkFCX1NMT1RTX0Ryb3BSZXF1ZXN0Jyk7XHJcbiAgICBNb2RFdmVudC5QdXNoSW50KGhhbmRsZSwgaXRlbUlkKTtcclxuICAgIE1vZEV2ZW50LlB1c2hJbnQoaGFuZGxlLCBudW0pO1xyXG4gICAgTW9kRXZlbnQuU2VuZChoYW5kbGUpO1xyXG59XHJcbnZhciB3YWl0UmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBjb250YWluZXIpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgwLjEpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUl0ZW0oR2FtZS5nZXRGb3JtRXgoaXRlbSksIDEsIGZhbHNlLCBPYmplY3RSZWZlcmVuY2UuZnJvbShHYW1lLmdldEZvcm1FeChjb250YWluZXIpKSk7XHJcbiAgICAgICAgICAgICAgICBVaS5pbnZva2VCb29sKFwiSFVEIE1lbnVcIiwgXCJfZ2xvYmFsLnNreXVpLmNvbXBvbmVudHMubGlzdC5MaXN0TGF5b3V0LlJlZnJlc2hcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5mdW5jdGlvbiBEZW55U2VsZWN0aW9uKGl0ZW1JZCwgY291bnQsIG9sZENvbnRhaW5lciwgc2xvdE5hbWUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChzbG90TmFtZSA9PT0gdm9pZCAwKSB7IHNsb3ROYW1lID0gJ0l0cyBzbG90JzsgfVxyXG4gICAgLy8gbGV0IGNvdW50OiBudW1iZXIgPSBnZXRIaWdobGlnaHRlZEl0ZW1Db3VudCgpXHJcbiAgICAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlSXRlbShHYW1lLmdldEZvcm1FeChpdGVtSWQpLCBjb3VudCwgdHJ1ZSwgb2xkQ29udGFpbmVyKTtcclxuICAgIFVpLmludm9rZUJvb2woXCJIVUQgTWVudVwiLCBcIl9nbG9iYWwuc2t5dWkuY29tcG9uZW50cy5saXN0Lkxpc3RMYXlvdXQuUmVmcmVzaFwiLCB0cnVlKTtcclxuICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIllvdSBjYW4gbm90IHBpY2sgdGhpcyBpdGVtIHVwLiBcIi5jb25jYXQoc2xvdE5hbWUsIFwiIGlzIGZ1bGxcIikpO1xyXG59XHJcbnZhciB3YWl0RmFkZU91dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgxLjUpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmFkZWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2xvdC5mYWRlQWxsT3V0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5mdW5jdGlvbiBpc1ZpZXdpbmdDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gVWkuZ2V0SW50KFwiQ29udGFpbmVyTWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuY2F0ZWdvcnlMaXN0LmFjdGl2ZVNlZ21lbnRcIikgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEV2YWx1YXRlSW52ZW50b3J5KCkge1xyXG4gICAgLy8gUmUtZXZhbHVhdGUgcGxheWVyIGludmVudG9yeSBhbmQgZmlsbCBzbG90cyBhY2NvcmRpbmdseVxyXG4gICAgU2xvdC5yZXNldFNsb3RDYXBhY2l0aWVzKCk7XHJcbiAgICB2YXIgYWxsSXRlbXMgPSBBZGRBbGxJdGVtc1RvQXJyYXkocGwoKSwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcclxuICAgIGFsbEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgYWRkSXRlbXRvU2xvdChmLmdldEZvcm1JRCgpLCAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SXRlbUNvdW50KGYpKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkSXRlbUNvdW50KCkge1xyXG4gICAgaWYgKFVpLmlzTWVudU9wZW4oJ0NvbnRhaW5lck1lbnUnKSkge1xyXG4gICAgICAgIHJldHVybiBVaS5nZXRJbnQoXCJDb250YWluZXJNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5pdGVtTGlzdC5zZWxlY3RlZEVudHJ5LmNvdW50XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVWkuaXNNZW51T3BlbignSW52ZW50b3J5TWVudScpKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpLmdldEludChcIkludmVudG9yeU1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuY291bnRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMTtcclxufVxyXG4vLyBKU09OIGZpbGUgZnVuY3Rpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9EYXRhRmlsZSgpIHtcclxuICAgIHZhciBkYXRhX2pzb24gPSAnZGF0YS9za3NlL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMvU2xvdHMuanNvbic7XHJcbiAgICAvLyBDaGVjayBpZiBqc29uIGZpbGUgZXhpc3RzLCBhbmQgY3JlYXRlIG9uZSBpZiBvdGhlcndpc2VcclxuICAgIGlmICghRmlsZUV4aXN0cyhkYXRhX2pzb24pKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvbGRGaWxlID0gUmVhZEZyb21GaWxlKGRhdGFfanNvbik7XHJcbiAgICAvLyBJZiB0aGUgZmlsZSBpcyBlbXB0eSwgbGlrZSBhZnRlciBqdXN0IGJlaW5nIGNyZWF0ZWQgb3Igc29tZXRoaW5nLCBnaXZlIGl0IHRoZSBpbml0aWFsIHt9ICdzcXVhY2tldCcgdGhpbmdzXHJcbiAgICBpZiAob2xkRmlsZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkoe30pLCBmYWxzZSk7XHJcbiAgICAgICAgc2F2ZVRvRGF0YUZpbGUoKTtcclxuICAgIH1cclxuICAgIHZhciBpbm5lckRpY3QgPSBKU09OLnBhcnNlKG9sZEZpbGUpO1xyXG4gICAgaW5uZXJEaWN0Wyd2b2x1bWVzJ10gPSBpdGVtQ2F0ZWdvcnlWb2x1bWVzO1xyXG4gICAgaW5uZXJEaWN0WydzbG90cyddID0gU2xvdC5nZXRBbGxTbG90cygpO1xyXG4gICAgdmFyIHNsb3ROYW1lcyA9IFtdO1xyXG4gICAgdmFyIGNhdE5hbWVzID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpO1xyXG4gICAgT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xyXG4gICAgICAgIHZhciBuYW1lID0gcy5uYW1lO1xyXG4gICAgICAgIHZhciBjYXQgPSBjYXROYW1lc1tpXTtcclxuICAgICAgICBzbG90TmFtZXMucHVzaChbY2F0LCBuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIGlubmVyRGljdFsnQ2F0ZWdvcnktdG8tU2xvdHMnXSA9IHNsb3ROYW1lcztcclxuICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkoaW5uZXJEaWN0KSwgZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydEZpbGUoKSB7XHJcbiAgICB2YXIgZGF0YV9qc29uID0gJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL1Nsb3RzLmpzb24nO1xyXG4gICAgaWYgKCFGaWxlRXhpc3RzKGRhdGFfanNvbikpIHtcclxuICAgICAgICBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG9sZEZpbGUgPSBSZWFkRnJvbUZpbGUoZGF0YV9qc29uKTtcclxuICAgIGlmIChvbGRGaWxlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgICAgICBzYXZlVG9EYXRhRmlsZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uob2xkRmlsZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNsb3RGcm9tTmFtZShuYW1lKSB7XHJcbiAgICB2YXIgb3V0cHV0ID0gdW5kZWZpbmVkO1xyXG4gICAgU2xvdC5nZXRBbGxTbG90cygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB2YXIgc19uYW1lID0gcy5uYW1lO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT0gc19uYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gcztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0U2xvdHNmcm9tRmlsZSgpIHtcclxuICAgIHZhciBzbG90X2luZm8gPSBpbXBvcnRGaWxlKClbJ3Nsb3RzJ107XHJcbiAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgIHNsb3RfaW5mby5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBzWyduYW1lJ107XHJcbiAgICAgICAgaWYgKCFTbG90LmdldEFsbFNsb3ROYW1lcygpLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIG5hbWVzLnB1c2goW25hbWUsIHNbJ2Jhc2VTaXplJ10sIHNbJ3gnXSwgc1sneSddXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3X3NpemUgPSBzWydiYXNlU2l6ZSddO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBTbG90LmdldEFsbFNsb3ROYW1lcygpLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBvbGRTbG90ID0gU2xvdC5nZXRBbGxTbG90cygpW2luZGV4XTtcclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGBUaGUgb2xkIHNpemUgaXMgJHtvbGRTbG90LmJhc2VTaXplfSBhbmQgdGhlIG5ldyBzaXplIGlzICR7bmV3X3NpemV9YClcclxuICAgICAgICAgICAgb2xkU2xvdC5iYXNlU2l6ZSA9IG5ld19zaXplO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYFRoZSBuZXcgc2xvdHMgYXJlICR7bmFtZXN9YClcclxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGluZm9bMF1bMF07XHJcbiAgICAgICAgdmFyIHNpemUgPSBpbmZvWzBdWzFdO1xyXG4gICAgICAgIHZhciB4ID0gaW5mb1swXVsyXTtcclxuICAgICAgICB2YXIgeSA9IGluZm9bMF1bM107XHJcbiAgICAgICAgbmV3IFNsb3QobmFtZSwgc2l6ZSwgeCwgeSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbXBvcnRDYXRlZ29yaWVzZnJvbUZpbGUoKSB7XHJcbiAgICB2YXIgY2F0c19zbG90cyA9IGltcG9ydEZpbGUoKVsnQ2F0ZWdvcnktdG8tU2xvdHMnXTtcclxuICAgIGNhdHNfc2xvdHMuZm9yRWFjaChmdW5jdGlvbiAoY2F0X3Nsb3QpIHtcclxuICAgICAgICB2YXIgY2F0ID0gY2F0X3Nsb3RbMF07XHJcbiAgICAgICAgdmFyIHNsb3RfbmFtZSA9IGNhdF9zbG90WzFdO1xyXG4gICAgICAgIHZhciBzbG90ID0gZ2V0U2xvdEZyb21OYW1lKHNsb3RfbmFtZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUb1Nsb3RbY2F0XSA9IHNsb3Q7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RGF0YUZyb21GaWxlKCkge1xyXG4gICAgaW1wb3J0Q2F0ZWdvcmllc2Zyb21GaWxlKCk7XHJcbiAgICBpbXBvcnRTbG90c2Zyb21GaWxlKCk7XHJcbn1cclxuLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19FVkVOVFNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIG1jbSBzY3JpcHRcclxubWFpbk1jbSgpO1xyXG52YXIgZXZlbnRCbGFja2xpc3QgPSBbJ1lNX09uU2VsZWN0X3NlbGVjdFByZXNzJywgJ1lNX09uSGlnaGxpZ2h0X3NlbGVjdEhpZ2hsaWdodCddO1xyXG52YXIgaGFuZGxlO1xyXG5vbignbWVudU9wZW4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBsYXN0aXRlbU5hbWUgPSAtMjtcclxuICAgIHZhciBtZW51TmFtZSA9IGV2ZW50Lm5hbWU7XHJcbiAgICBpZiAobWVudU5hbWUgIT0gJ0ludmVudG9yeU1lbnUnICYmIG1lbnVOYW1lICE9ICdDb250YWluZXJNZW51JyAmJiBtZW51TmFtZSAhPSAnQmFydGVyTWVudScpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaXRlbSA9IDA7XHJcbiAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgIGhhbmRsZSA9IG9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKG1lbnVOYW1lID09PSAnSW52ZW50b3J5TWVudScpIHtcclxuICAgICAgICAgICAgaXRlbSA9IFVpLmdldEludChcIkludmVudG9yeU1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChtZW51TmFtZSA9PT0gJ0NvbnRhaW5lck1lbnUnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBVaS5nZXRJbnQoXCJDb250YWluZXJNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5pdGVtTGlzdC5zZWxlY3RlZEVudHJ5LmZvcm1JZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobWVudU5hbWUgPT09ICdCYXJ0ZXJNZW51Jykge1xyXG4gICAgICAgICAgICBpdGVtID0gVWkuZ2V0SW50KFwiQmFydGVyTWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpdGVtICE9IGxhc3RpdGVtTmFtZSkge1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0QWxwaGEoMSk7XHJcbiAgICAgICAgICAgIEdldEl0ZW1IaWdobGlnaHRlZChpdGVtKTtcclxuICAgICAgICAgICAgbGFzdGl0ZW1OYW1lID0gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbm9uKCdtZW51Q2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRDb2xvcihbMSwgMSwgMSwgMF0pO1xyXG4gICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ0ludmVudG9yeU1lbnUnICYmIGV2ZW50Lm5hbWUgIT0gJ0NvbnRhaW5lck1lbnUnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGhhbmRsZSkge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlKGhhbmRsZSk7XHJcbiAgICB9XHJcbiAgICBFdmFsdWF0ZUludmVudG9yeSgpO1xyXG4gICAgU2xvdC5mYWRlQWxsT3V0KCk7XHJcbn0pO1xyXG5vbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBwcmludENvbnNvbGUoT2JqZWN0LnZhbHVlcyhpbXBvcnRGaWxlKClbJ3ZvbHVtZXMnXSlbSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzXSlcclxuICAgIC8vIGltcG9ydFNsb3RzZnJvbUZpbGUoKVxyXG4gICAgLy8gc2F2ZVRvRGF0YUZpbGUoKVxyXG4gICAgaWYgKEZpbGVFeGlzdHMoJ2RhdGEvcGxhdGZvcm0vcGx1Z2lucy9JbnZlbnRvcnlTbG90cy5qcycpICYmIEZpbGVFeGlzdHMoJ2RhdGEvcGxhdGZvcm0vcGx1Z2luc2Rldi9JbnZlbnRvcnlTbG90cy5qcycpKSB7XHJcbiAgICAgICAgcHJpbnRDb25zb2xlKCdBQk9SVCBURVNUSU5HLiBUSEVSRSBBUkUgVFdPIElOU1RBTkNFUyBPRiBUSElTIFNDUklQVCcpO1xyXG4gICAgfVxyXG4gICAgaW1wb3J0RGF0YUZyb21GaWxlKCk7XHJcbiAgICBFdmFsdWF0ZUludmVudG9yeSgpO1xyXG59KTtcclxudmFyIGlnbm9yZUZsYWcgPSBmYWxzZTtcclxub24oJ2NvbnRhaW5lckNoYW5nZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBhY3Rpb24gPSAnUGlja2VkIFVwJztcclxuICAgIHZhciBuZXdJZCA9IC0xO1xyXG4gICAgdmFyIG9sZElkID0gLTE7XHJcbiAgICB2YXIgaXRlbUlkID0gZXZlbnQuYmFzZU9iai5nZXRGb3JtSUQoKTtcclxuICAgIHZhciBudW0gPSBldmVudC5udW1JdGVtcztcclxuICAgIHZhciBpbmZvID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCkpO1xyXG4gICAgdmFyIHZvbHVtZSA9IGluZm9bMF07XHJcbiAgICB2YXIgZnVsbFZvbHVtZSA9IHZvbHVtZSAqIG51bTtcclxuICAgIHZhciBzbG90ID0gaW5mb1sxXTtcclxuICAgIGlmIChldmVudC5vbGRDb250YWluZXIpIHtcclxuICAgICAgICBvbGRJZCA9IGV2ZW50Lm9sZENvbnRhaW5lci5nZXRGb3JtSUQoKTtcclxuICAgIH1cclxuICAgIGlmIChldmVudC5uZXdDb250YWluZXIpIHtcclxuICAgICAgICBuZXdJZCA9IGV2ZW50Lm5ld0NvbnRhaW5lci5nZXRGb3JtSUQoKTtcclxuICAgIH1cclxuICAgIC8vIGlmIChpZ25vcmVGbGFnKXtpZ25vcmVGbGFnID0gZmFsc2U7IHJldHVybjt9XHJcbiAgICBpZiAoaXRlbUlkID09PSAxNSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHByaW50Q29uc29sZShgb2xkY29udGFpbmVyID09ICR7IGV2ZW50Lm9sZENvbnRhaW5lci5nZXRGb3JtSUQoKSB9YClcclxuICAgIC8vIHByaW50Q29uc29sZShgbmV3Y29udGFpbmVyID09ICR7IGV2ZW50Lm5ld0NvbnRhaW5lci5nZXRGb3JtSUQoKSB9YClcclxuICAgIHByaW50Q29uc29sZShcImNvbnRhaW5lckNoYW5nZWQgUnVubmluZzo6XCIpO1xyXG4gICAgLy8gSXRlbSBhZGRlZCB0byBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIC8vIGlnbm9yZSBnb2xkIGNvbWluZyBpbiBhbmQgb3V0XHJcbiAgICBpZiAobmV3SWQgPT0gMjAgJiYgIWlnbm9yZUZsYWcgJiYgaXRlbUlkICE9IDE1KSB7XHJcbiAgICAgICAgcHJpbnRDb25zb2xlKFwibmV3SWQgPT0gMjA6OlwiKTtcclxuICAgICAgICAvLyBjaGVjayBob3cgbWFueSBhcmUgaW4gYW4gaXRlbSBzdGFjayBhbmQgaWYgYW55IGFyZSBhbGxvd2VkIHRvIGJlIHBpY2tlZCB1cFxyXG4gICAgICAgIHZhciBhbGxvd2VkQ291bnQgPSAoc2xvdC5iYXNlU2l6ZSAtIHNsb3QuY3VycmVudFNpemUpIC8gdm9sdW1lO1xyXG4gICAgICAgIGlmIChhbGxvd2VkQ291bnQgPiBudW0pIHtcclxuICAgICAgICAgICAgYWxsb3dlZENvdW50ID0gbnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm9sdW1lIDw9IDApIHtcclxuICAgICAgICAgICAgYWxsb3dlZENvdW50ID0gbnVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGlzYWxsb3dlZENvdW50ID0gbnVtIC0gYWxsb3dlZENvdW50O1xyXG4gICAgICAgIC8vIGlmIGl0IGlzIG5vdCBhIHN0YWNrIG9mIGl0ZW1zXHJcbiAgICAgICAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICAgICAgICBwcmludENvbnNvbGUoXCJudW0gPT09IDE6OlwiKTtcclxuICAgICAgICAgICAgLy8gdGhlIHNsb3QgaXMgZmlsbGVkXHJcbiAgICAgICAgICAgIGlmIChzbG90LmN1cnJlbnRTaXplICsgZnVsbFZvbHVtZSA+IHNsb3QuYmFzZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHByaW50Q29uc29sZShcIlNsb3QgbWlnaHQgYmUgZmlsbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gd2FzIHBpY2tlZCB1cCBmcm9tIHRoZSB3b3JsZFxyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5vbGRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBEcm9wSXRlbShpdGVtSWQsIG51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRDb25zb2xlKCchZXZlbnQub2xkQ29udGFpbmVyOjogJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSB3YXMgdGFrZW4gZnJvbSBhIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbnRDb25zb2xlKCdhbGxvd2VkY291bnQgPT09IDE6OiBUcnlpbmcgdG8gZGVueSBzZWxlY3Rpb24nKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoVWkuaXNNZW51T3BlbignQmFydGVyTWVudScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgbnVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZsYXQgb3V0IHByZXZlbnQgdGFraW5nIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERlbnlTZWxlY3Rpb24oaXRlbUlkLCBkaXNhbGxvd2VkQ291bnQsIGV2ZW50Lm9sZENvbnRhaW5lciwgc2xvdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKCdldmVudC5vbGRDb250YWluZXInKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWdub3JlRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoXCJudW0gPT09IDE6OiBhZGRpdGVtdG9zbG90XCIpO1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbXRvU2xvdChpdGVtSWQsIG51bSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgaXQgaXMgYSBzdGFjayBvZiBpdGVtc1xyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+IDEpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKFwibnVtID4gMTo6IGFsbG93ZWRjb3VudDo6IFwiLmNvbmNhdChhbGxvd2VkQ291bnQsIFwiXFxuZGlzYWxsb3dlZGNvdW50OjogXCIpLmNvbmNhdChkaXNhbGxvd2VkQ291bnQsIFwiXFxudm9sdW1lICogbnVtID0gXCIpLmNvbmNhdCh2b2x1bWUsIFwiICogXCIpLmNvbmNhdChhbGxvd2VkQ291bnQpKTtcclxuICAgICAgICAgICAgYWRkSXRlbXRvU2xvdChpdGVtSWQsIGFsbG93ZWRDb3VudCk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtSWQsIGRpc2FsbG93ZWRDb3VudClcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gd2FzIHBpY2tlZCB1cCBmcm9tIHRoZSB3b3JsZFxyXG4gICAgICAgICAgICBpZiAoc2xvdC5jdXJyZW50U2l6ZSArICh2b2x1bWUgKiBhbGxvd2VkQ291bnQpID4gc2xvdC5iYXNlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5vbGRDb250YWluZXIgJiYgZGlzYWxsb3dlZENvdW50ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoJyFldmVudC5vbGRDb250YWluZXI6OiBkaXNhbGxvd2VkIGNvdW50ID4gMDo6Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgaXRlbSB3YXMgdGFrZW4gZnJvbSBhIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGlzYWxsb3dlZENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgaXQncyBwb3NzaWJsZSB0byBhbGxvdyBhIGZldyB0aHJvdWdoLCBsaWtlIGFycm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZsYXQgb3V0IHByZXZlbnQgdGFraW5nIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVpLmlzTWVudU9wZW4oJ0JhcnRlck1lbnUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoJ2FsbG93ZWRDb3VudCA+IDE6OiB0cnlpbmcgdG8gZHJvcCBpdGVtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50Q29uc29sZSgnYWxsb3dlZENvdW50ID4gMTo6IFRyeWluZyB0byBkZW55IHNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZW55U2VsZWN0aW9uKGl0ZW1JZCwgZGlzYWxsb3dlZENvdW50LCBldmVudC5vbGRDb250YWluZXIsIHNsb3QubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZSgnZXZlbnQub2xkQ29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlnbm9yZUZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcHJpbnRDb25zb2xlKFwiYWxsb3dlZENvdW50ID4gMTo6IElnbm9yZUZsYWc6OiBcIi5jb25jYXQoaWdub3JlRmxhZykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSXRlbSByZW1vdmVkIGZyb20gcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBlbHNlIGlmIChvbGRJZCA9PSAyMCAmJiAhaWdub3JlRmxhZyAmJiBpdGVtSWQgIT0gMTUpIHtcclxuICAgICAgICBwcmludENvbnNvbGUoXCJSZW1vdmU6OiBJZ25vcmVGbGFnOjogXCIuY29uY2F0KGlnbm9yZUZsYWcpKTtcclxuICAgICAgICBwcmludENvbnNvbGUoXCJSZW1vdmluZyBcIi5jb25jYXQoaXRlbUlkLCBcIiB3aXRoIGNvdW50IFwiKS5jb25jYXQobnVtKSk7XHJcbiAgICAgICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW1JZCwgbnVtKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlnbm9yZUZsYWcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmIChzbG90LmN1cnJlbnRTaXplIDw9IDApIHtcclxuICAgICAgICBzbG90LmN1cnJlbnRTaXplID0gMDtcclxuICAgIH1cclxuICAgIC8vIHByaW50Q29uc29sZSggTWlzY19zbG90LmJhc2VTaXplIClcclxufSk7XHJcbnZhciBpc0ZhZGVpbiA9IGZhbHNlO1xyXG5vbignY3Jvc3NoYWlyUmVmQ2hhbmdlZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XHJcbiAgICB2YXIgaWQgPSAoX2IgPSAoX2EgPSBldmVudC5yZWZlcmVuY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRGb3JtSUQoKTtcclxuICAgIHZhciB0eXBlQmxhY2tsaXN0ID0gWzYyIC8qIENoYXJhY3RlciAqLywgMjQgLyogQWN0aXZhdG9yICovLCAyOSAvKiBEb29yICovLCAzMyAvKiBBcHBhcmF0dXMgKi8sIDI4IC8qIENvbnRhaW5lciAqLywgNDMgLyogTlBDICovLCAzOSAvKiBGbG9yYSAqLywgMzggLyogVHJlZSAqL107XHJcbiAgICBpZiAoKChfZCA9IChfYyA9IGV2ZW50LnJlZmVyZW5jZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmlzUGxheWFibGUoKSkgJiYgIXR5cGVCbGFja2xpc3QuaW5jbHVkZXMoKF9mID0gKF9lID0gZXZlbnQucmVmZXJlbmNlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuZ2V0VHlwZSgpKSkge1xyXG4gICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgICAgICBpc0ZhZGVpbiA9IHRydWU7XHJcbiAgICAgICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAgICAgU2xvdC5mYWRlQWxsSW4oKTtcclxuICAgICAgICBzbG90TG9va2F0SXRlbShpZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpc0ZhZGVpbiA9IGZhbHNlO1xyXG4gICAgICAgIHdhaXRGYWRlT3V0KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5vbignZXF1aXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgaWYgKCgoX2EgPSBldmVudC5hY3Rvci5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtSUQoKSkgIT0gKChfYyA9IChfYiA9IHBsKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtSUQoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBwcmludENvbnNvbGUoZXZlbnQuYmFzZU9iai5nZXROYW1lKCkpXHJcbiAgICBpZiAoVWkuaXNNZW51T3BlbignTWFnaWNNZW51JykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaXRlbSA9IGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGVxdWlwOjogaXNFcXVpcHBlZDo6ICR7cGwoKT8uaXNFcXVpcHBlZChldmVudC5iYXNlT2JqKX1gKVxyXG4gICAgdmFyIG9sZENhdCA9IGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKTtcclxuICAgIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtLCAxKTtcclxuICAgIGFkZEl0ZW10b1Nsb3QoaXRlbSwgMSk7XHJcbn0pO1xyXG5vbigndW5lcXVpcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICBpZiAoKChfYSA9IGV2ZW50LmFjdG9yLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1JRCgpKSAhPSAoKF9jID0gKF9iID0gcGwoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1JRCgpKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHByaW50Q29uc29sZShldmVudC5iYXNlT2JqLmdldE5hbWUoKSlcclxuICAgIGlmIChVaS5pc01lbnVPcGVuKCdNYWdpY01lbnUnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtID0gZXZlbnQuYmFzZU9iai5nZXRGb3JtSUQoKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgdW5lcXVpcDo6IGlzRXF1aXBwZWQ6OiAke3BsKCk/LmlzRXF1aXBwZWQoZXZlbnQuYmFzZU9iail9YClcclxuICAgIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtLCAxKTtcclxuICAgIGFkZEl0ZW10b1Nsb3QoaXRlbSwgMSk7XHJcbn0pO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHNreXJpbVBsYXRmb3JtOyIsIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3IgdjQuMlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5NaXNjVXRpbDtcclxuLyoqIENlbGwgc2Nhbm5pbmcgZnVuY3Rpb25zICovXHJcbi8vIFNjYW5zIHRoZSBjdXJyZW50IGNlbGwgb2YgdGhlIGdpdmVuIENlbnRlck9uIGZvciBhbiBvYmplY3Qgb2YgdGhlIGdpdmVuIGZvcm0gdHlwZSBJRCB3aXRoaW4gcmFkaXVzIGFuZCByZXR1cm5zIGFuIGFycmF5IGZvciBhbGwgdGhhdFxyXG4vLyBhbmQgKG9wdGlvbmFsbHkpIGFsc28gaGFzIHRoZSBnaXZlbiBrZXl3b3JkIGlmIGNoYW5nZWQgZnJvbSBkZWZhdWx0IG5vbmUuIFNldHRpbmcgcmFkaXVzIGhpZ2hlciB0aGFuIDAuMCB3aWxsIHJlc3RyaWN0IHRoZSBcclxuLy8gc2VhcmNoIGRpc3RhbmNlIGZyb20gYXJvdW5kIENlbnRlck9uLCAwLjAgd2lsbCBzZWFyY2ggZW50aXJlIGNlbGwgdGhlIG9iamVjdCBpcyBpbi5cclxuLy8gTk9URTogS2V5d29yZCBzZWFyY2hlcyBzZWVtIGEgbGl0dGxlIHVucHJlZGljdGFibGUgc28gYmUgc3VyZSB0byB0ZXN0IGlmIHlvdXIgdXNhZ2Ugb2YgaXQgd29ya3MgYmVmb3JlIHVzaW5nIHRoZSByZXN1bHRzLlxyXG5leHBvcnQgdmFyIFNjYW5DZWxsT2JqZWN0cyA9IGZ1bmN0aW9uIChmb3JtVHlwZSwgQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCkge1xyXG4gICAgaWYgKHJhZGl1cyA9PT0gdm9pZCAwKSB7IHJhZGl1cyA9IDAuMDsgfVxyXG4gICAgaWYgKEhhc0tleXdvcmQgPT09IHZvaWQgMCkgeyBIYXNLZXl3b3JkID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLlNjYW5DZWxsT2JqZWN0cyhmb3JtVHlwZSwgQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCk7XHJcbn07XHJcbi8vIFNjYW5zIHRoZSBjdXJyZW50IGNlbGwgb2YgdGhlIGdpdmVuIENlbnRlck9uIGZvciBhbiBhY3RvciB3aXRoaW4gdGhlIGdpdmVuIHJhZGl1cyBhbmQgcmV0dXJucyBhbiBhcnJheSBmb3IgYWxsIGFjdG9ycyB0aGF0IGFyZVxyXG4vLyBjdXJyZW50bHkgYWxpdmUgYW5kIChvcHRpb25hbGx5KSBoYXMgdGhlIGdpdmVuIGtleXdvcmQgaWYgY2hhbmdlZCBmcm9tIGRlZmF1bHQgbm9uZS4gU2V0dGluZyByYWRpdXMgaGlnaGVyIHRoYW4gMC4wIHdpbGwgcmVzdHJpY3QgdGhlIFxyXG4vLyBzZWFyY2ggZGlzdGFuY2UgZnJvbSBhcm91bmQgQ2VudGVyT24sIDAuMCB3aWxsIHNlYXJjaCBlbnRpcmUgY2VsbCB0aGUgb2JqZWN0IGlzIGluLlxyXG4vLyBOT1RFOiBLZXl3b3JkIHNlYXJjaGVzIHNlZW0gYSBsaXR0bGUgdW5wcmVkaWN0YWJsZSBzbyBiZSBzdXJlIHRvIHRlc3QgaWYgeW91ciB1c2FnZSBvZiBpdCB3b3JrcyBiZWZvcmUgdXNpbmcgdGhlIHJlc3VsdHMuXHJcbmV4cG9ydCB2YXIgU2NhbkNlbGxOUENzID0gZnVuY3Rpb24gKENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQsIElnbm9yZURlYWQpIHtcclxuICAgIGlmIChyYWRpdXMgPT09IHZvaWQgMCkgeyByYWRpdXMgPSAwLjA7IH1cclxuICAgIGlmIChIYXNLZXl3b3JkID09PSB2b2lkIDApIHsgSGFzS2V5d29yZCA9IG51bGw7IH1cclxuICAgIGlmIChJZ25vcmVEZWFkID09PSB2b2lkIDApIHsgSWdub3JlRGVhZCA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5TY2FuQ2VsbE5QQ3MoQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCwgSWdub3JlRGVhZCk7XHJcbn07XHJcbi8vIFNhbWUgYXMgU2NhbkNlbGxOUENzKCksIGhvd2V2ZXIgaXQgZmlsdGVycyB0aGUgcmV0dXJuIGJ5IGEgZ2l2ZW4gZmFjdGlvbiBhbmQgKG9wdGlvbmFsbHkpIHRoZWlyIHJhbmsgaW4gdGhhdCBmYWN0aW9uLlxyXG5leHBvcnQgdmFyIFNjYW5DZWxsTlBDc0J5RmFjdGlvbiA9IGZ1bmN0aW9uIChGaW5kRmFjdGlvbiwgQ2VudGVyT24sIHJhZGl1cywgbWluUmFuaywgbWF4UmFuaywgSWdub3JlRGVhZCkge1xyXG4gICAgaWYgKHJhZGl1cyA9PT0gdm9pZCAwKSB7IHJhZGl1cyA9IDAuMDsgfVxyXG4gICAgaWYgKG1pblJhbmsgPT09IHZvaWQgMCkgeyBtaW5SYW5rID0gMDsgfVxyXG4gICAgaWYgKG1heFJhbmsgPT09IHZvaWQgMCkgeyBtYXhSYW5rID0gMTI3OyB9XHJcbiAgICBpZiAoSWdub3JlRGVhZCA9PT0gdm9pZCAwKSB7IElnbm9yZURlYWQgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uU2NhbkNlbGxOUENzQnlGYWN0aW9uKEZpbmRGYWN0aW9uLCBDZW50ZXJPbiwgcmFkaXVzLCBtaW5SYW5rLCBtYXhSYW5rLCBJZ25vcmVEZWFkKTtcclxufTtcclxuLyoqIENhbWVyYSBmdW5jdGlvbnMgKi9cclxuLy8gVG9nZ2xlIGZyZWVmbHkgY2FtZXJhLlxyXG5leHBvcnQgdmFyIFRvZ2dsZUZyZWVDYW1lcmEgPSBmdW5jdGlvbiAoc3RvcFRpbWUpIHtcclxuICAgIGlmIChzdG9wVGltZSA9PT0gdm9pZCAwKSB7IHN0b3BUaW1lID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Ub2dnbGVGcmVlQ2FtZXJhKHN0b3BUaW1lKTtcclxufTtcclxuLy8gU2V0IGZyZWVmbHkgY2FtIHNwZWVkLlxyXG5leHBvcnQgdmFyIFNldEZyZWVDYW1lcmFTcGVlZCA9IGZ1bmN0aW9uIChzcGVlZCkgeyByZXR1cm4gc24uU2V0RnJlZUNhbWVyYVNwZWVkKHNwZWVkKTsgfTtcclxuLy8gU2V0IGN1cnJlbnQgZnJlZWZseSBjYW0gc3RhdGUgJiBzZXQgdGhlIHNwZWVkIGlmIGVuYWJsaW5nXHJcbmV4cG9ydCB2YXIgU2V0RnJlZUNhbWVyYVN0YXRlID0gZnVuY3Rpb24gKGVuYWJsZSwgc3BlZWQpIHtcclxuICAgIGlmIChzcGVlZCA9PT0gdm9pZCAwKSB7IHNwZWVkID0gMTAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlNldEZyZWVDYW1lcmFTdGF0ZShlbmFibGUsIHNwZWVkKTtcclxufTtcclxuLyoqIEZpbGUgcmVsYXRlZCBmdW5jdGlvbnMgKi9cclxuLy8gR2V0IGFuIGFycmF5IG9mIGZpbGVzIGluIGEgZ2l2ZW4gcGFyZW50IGRpcmVjdG9yeSB0aGF0IGhhdmUgdGhlIGdpdmVuIGV4dGVuc2lvbi5cclxuLy8gZGlyZWN0b3J5IGlzIHJlbGF0aXZlIHRvIHRoZSByb290IFNreXJpbSBmb2xkZXIgKHdoZXJlIHNreXJpbS5leGUgaXMpIGFuZCBpcyBub24tcmVjdXJzaXZlLlxyXG4vLyBkaXJlY3RvcnkgPSBcIi5cIiB0byBnZXQgYWxsIGZpbGVzIGluIHJvb3QgU2t5cmltIGZvbGRlclxyXG4vLyBkaXJlY3RvcnkgPSBcImRhdGEvbWVzaGVzXCIgdG8gZ2V0IGFsbCBmaWxlcyBpbiB0aGUgPHJvb3Q+L2RhdGEvbWVzaGVzIGZvbGRlclxyXG4vLyBleHRlbnNpb24gPSBcIi5uaWZcIiB0byBnZXQgYWxsIC5uaWYgbWVzaCBmaWxlcy5cclxuLy8gKGRlZmF1bHQpIGV4dGVuc2lvbj1cIipcIiB0byBnZXQgYWxsIGZpbGVzXHJcbmV4cG9ydCB2YXIgRmlsZXNJbkZvbGRlciA9IGZ1bmN0aW9uIChkaXJlY3RvcnksIGV4dGVuc2lvbikge1xyXG4gICAgaWYgKGV4dGVuc2lvbiA9PT0gdm9pZCAwKSB7IGV4dGVuc2lvbiA9IFwiKlwiOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZXNJbkZvbGRlcihkaXJlY3RvcnksIGV4dGVuc2lvbik7XHJcbn07XHJcbi8vIEdldCBhbiBhcnJheSBvZiBmb2xkZXJzIGluIGEgZ2l2ZW4gcGFyZW50IGRpcmVjdG9yeVxyXG4vLyBTYW1lIHJ1bGVzIGFuZCBleGFtcGxlcyBhcyBhYm92ZSBGaWxlc0luRm9sZGVyIGFwcGx5IHRvIHRoZSBkaXJlY3RvcnkgcnVsZSBoZXJlLlxyXG5leHBvcnQgdmFyIEZvbGRlcnNJbkZvbGRlciA9IGZ1bmN0aW9uIChkaXJlY3RvcnkpIHsgcmV0dXJuIHNuLkZvbGRlcnNJbkZvbGRlcihkaXJlY3RvcnkpOyB9O1xyXG4vLyBDaGVjayBpZiBhIGdpdmVuIGZpbGUgZXhpc3RzIHJlbGF0aXZlIHRvIHJvb3QgU2t5cmltIGRpcmVjdG9yeS4gRXhhbXBsZTogRmlsZUV4aXN0cyhcImRhdGEvbWVzaGVzL2V4YW1wbGUubmlmXCIpXHJcbmV4cG9ydCB2YXIgRmlsZUV4aXN0cyA9IGZ1bmN0aW9uIChmaWxlTmFtZSkgeyByZXR1cm4gc24uRmlsZUV4aXN0cyhmaWxlTmFtZSk7IH07XHJcbi8vIFJlYWQgc3RyaW5nIGZyb20gZmlsZS4gRG8gbm90IHJlYWQgbGFyZ2UgZmlsZXMhXHJcbmV4cG9ydCB2YXIgUmVhZEZyb21GaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lKSB7IHJldHVybiBzbi5SZWFkRnJvbUZpbGUoZmlsZU5hbWUpOyB9O1xyXG4vLyBXcml0ZSBzdHJpbmcgdG8gZmlsZS5cclxuZXhwb3J0IHZhciBXcml0ZVRvRmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgdGV4dCwgYXBwZW5kLCB0aW1lc3RhbXApIHtcclxuICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgeyBhcHBlbmQgPSB0cnVlOyB9XHJcbiAgICBpZiAodGltZXN0YW1wID09PSB2b2lkIDApIHsgdGltZXN0YW1wID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Xcml0ZVRvRmlsZShmaWxlTmFtZSwgdGV4dCwgYXBwZW5kLCB0aW1lc3RhbXApO1xyXG59O1xyXG4vKiogTWlzYyAqL1xyXG4vLyBQcmludCB0ZXh0IHRvIGNvbnNvbGUuXHJcbmV4cG9ydCB2YXIgUHJpbnRDb25zb2xlID0gZnVuY3Rpb24gKHRleHQpIHsgcmV0dXJuIHNuLlByaW50Q29uc29sZSh0ZXh0KTsgfTtcclxuLy8gR2V0IHJhY2UncyBlZGl0b3IgSUQuXHJcbmV4cG9ydCB2YXIgR2V0UmFjZUVkaXRvcklEID0gZnVuY3Rpb24gKHJhY2VGb3JtKSB7IHJldHVybiBzbi5HZXRSYWNlRWRpdG9ySUQocmFjZUZvcm0pOyB9O1xyXG4vLyBHZXQgcmFjZSdzIGVkaXRvciBJRC5cclxuZXhwb3J0IHZhciBHZXRBY3RvclJhY2VFZGl0b3JJRCA9IGZ1bmN0aW9uIChhY3RvclJlZikgeyByZXR1cm4gc24uR2V0QWN0b3JSYWNlRWRpdG9ySUQoYWN0b3JSZWYpOyB9O1xyXG4vLyBTZXQgSFVEIG9uIC8gb2ZmIC0gTk9UIENVUlJFTlQgV09SS0lORyBJTiBTS1lSSU0gU1BFQ0lBTCBFRElUSU9OXHJcbmV4cG9ydCB2YXIgU2V0TWVudXMgPSBmdW5jdGlvbiAoZW5hYmxlZCkgeyByZXR1cm4gc24uU2V0TWVudXMoZW5hYmxlZCk7IH07XHJcbi8vIEdldCBub2RlIHJvdGF0aW9uXHJcbi8vIFJFTU9WRUQgdjIuOTogVXNlbGVzcywgb25seSBkb2VzIGEgcGFydCBvZiB0aGUgam9iLlxyXG4vLyBmbG9hdCBmdW5jdGlvbiBHZXROb2RlUm90YXRpb24oT2JqZWN0UmVmZXJlbmNlIG9iaiwgc3RyaW5nIG5vZGVOYW1lLCBib29sIGZpcnN0UGVyc29uLCBpbnQgcm90YXRpb25JbmRleCkgZ2xvYmFsIG5hdGl2ZVxyXG5leHBvcnQgdmFyIEdldE5vZGVSb3RhdGlvbiA9IGZ1bmN0aW9uIChvYmosIG5vZGVOYW1lLCBmaXJzdFBlcnNvbiwgcm90YXRpb25JbmRleCkgeyByZXR1cm4gc24uR2V0Tm9kZVJvdGF0aW9uKG9iaiwgbm9kZU5hbWUsIGZpcnN0UGVyc29uLCByb3RhdGlvbkluZGV4KTsgfTtcclxuLy8gTEVHQUNZIHYzLjMgLSBBZGRlZCBJZ25vcmVkZWFkIHBhcmFtZXRlciB0byBmdW5jdGlvbiwgYWxpYXNlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGFiaWxpdHkgd2l0aCB2My4yLlxyXG5leHBvcnQgdmFyIFNjYW5DZWxsQWN0b3JzID0gZnVuY3Rpb24gKENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQpIHtcclxuICAgIGlmIChyYWRpdXMgPT09IHZvaWQgMCkgeyByYWRpdXMgPSA1MDAwLjA7IH1cclxuICAgIGlmIChIYXNLZXl3b3JkID09PSB2b2lkIDApIHsgSGFzS2V5d29yZCA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5TY2FuQ2VsbEFjdG9ycyhDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkKTtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgc3AgZnJvbSAnc2t5cmltUGxhdGZvcm0nO1xyXG5leHBvcnQgdmFyIE1vZEV2ZW50ID0gc3AuTW9kRXZlbnQ7XHJcbiIsImltcG9ydCB7IHN0b3JhZ2UsIGNyZWF0ZVRleHQsIGRlc3Ryb3lBbGxUZXh0cywgZGVzdHJveVRleHQsIGdldFRleHRDb2xvciwgZ2V0VGV4dFBvcywgZ2V0VGV4dFN0cmluZywgc2V0VGV4dENvbG9yLCBzZXRUZXh0UG9zLCBzZXRUZXh0U3RyaW5nIH0gZnJvbSAnc2t5cmltUGxhdGZvcm0nO1xyXG52YXIga2V5a25hbWUgPSAnLnNwVGV4dHMuJztcclxudmFyIGNvbGxlY3Rpb25LZXkgPSBrZXlrbmFtZSArICdjb2xsZWN0aW9uLic7XHJcbnZhciBzcFRleHRzQ29sbGVjdGlvbiA9IG5ldyBNYXAoKTtcclxuc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxudmFyIHNwVGV4dCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIHNwVGV4dCh4UG9zLCB5UG9zLCB0ZXh0LCBjb2wsIHNUeXBlLCBzTW9kTmFtZSkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBjcmVhdGVUZXh0KHhQb3MsIHlQb3MsIHRleHQsIFtjb2xbMF0sIGNvbFsxXSwgY29sWzJdLCBjb2xbM11dKTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBzVHlwZSA/IHNUeXBlIDogXCJ1bmRlZmluZWRcIjtcclxuICAgICAgICB0aGlzLm93bmluZ01vZCA9IHNNb2ROYW1lID8gc01vZE5hbWUgOiBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIHRoaXMueCA9IHhQb3M7XHJcbiAgICAgICAgdGhpcy55ID0geVBvcztcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5zZXQodGhpcy5pbmRleCwgdGhpcyk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRleHRTdHJpbmcodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duaW5nTW9kO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IGdldFRleHRQb3ModGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRUZXh0Q29sb3IodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0VGV4dCA9IGZ1bmN0aW9uICh0eHQpIHtcclxuICAgICAgICBzZXRUZXh0U3RyaW5nKHRoaXMuaW5kZXgsIHR4dCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvciA9IGZ1bmN0aW9uIChyZ2JhKSB7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIHJnYmEpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeFBvcywgeVBvcykge1xyXG4gICAgICAgIHNldFRleHRQb3ModGhpcy5pbmRleCwgeFBvcywgeVBvcyk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdGhpcy5vd25pbmdNb2QgPSBtb2Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvclIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sLCBjb2xvclsxXSwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckcgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbCwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2wsIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGFscGhhXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5kZXN0cm95VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUodGhpcy5pbmRleCk7XHJcbiAgICAgICAgZGVzdHJveVRleHQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsVGV4dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uY2xlYXIoKTtcclxuICAgICAgICBkZXN0cm95QWxsVGV4dHMoKTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmNvdW50TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIGMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIF9rZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpXHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5jb3VudFR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KVxyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveUFsbE1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lUZXh0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveUFsbFR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95VGV4dChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdG1wQ29sbC5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRpc2FibGVNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGlzYWJsZVR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBudWxsO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmdldEluZGV4KCkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBzcFRleHQuZ2V0VGV4dEJ5SW5kZXgoaSk7XHJcbiAgICAgICAgaWYgKHRtcCkge1xyXG4gICAgICAgICAgICB0bXAuZGVzdHJveVRleHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImluZGV4OiBcIi5jb25jYXQodGhpcy5nZXRJbmRleCgpLCBcIiwgdGV4dDpcXFwiXCIpLmNvbmNhdCh0aGlzLmdldFRleHQoKSwgXCJcXFwiLCB0eXBlOiBcIikuY29uY2F0KHRoaXMuZ2V0VHlwZSgpLCBcIiwgbW9kOiBcIikuY29uY2F0KHRoaXMuZ2V0T3duaW5nTW9kKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBzcFRleHQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IHNwVGV4dCB9O1xyXG4iLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjUuNVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5QTzNfU0tTRUZ1bmN0aW9ucztcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUSVZFIEVGRkVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIHdoZXRoZXIgdGhlIGFjdGl2ZUVmZmVjdCBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWN0aXZlRWZmZWN0IGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0FjdGl2ZUVmZmVjdCA9IGZ1bmN0aW9uIChha0FjdGl2ZUVmZmVjdCwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BY3RpdmVFZmZlY3QoYWtBY3RpdmVFZmZlY3QsIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FDVE9SU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXRzIGFsbCBtYWdpY2VmZmVjdHMgY3VycmVudGx5IG9uIHRoZSBhY3Rvci4gRmlsdGVycyBvdXQgaW5hY3RpdmUgYW5kIGhpZGVpbnVpIHNwZWxscy5cclxuZXhwb3J0IHZhciBHZXRBY3RpdmVFZmZlY3RzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiU2hvd0luYWN0aXZlKSB7XHJcbiAgICBpZiAoYWJTaG93SW5hY3RpdmUgPT09IHZvaWQgMCkgeyBhYlNob3dJbmFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWN0aXZlRWZmZWN0cyhha0FjdG9yLCBhYlNob3dJbmFjdGl2ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JBbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JBbHBoYShha0FjdG9yKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRBY3RvclJlZnJhY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yKTtcclxufTtcclxuLyoqIEFDVE9SIFNUQVRFXHJcbiAgICAgICAgQWxpdmUgPSAwXHJcbiAgICAgICAgRHlpbmcgPSAxXHJcbiAgICAgICAgRGVhZCA9IDJcclxuICAgICAgICBVbmNvbnNjaW91cyA9IDNcclxuICAgICAgICBSZWFuaW1hdGUgPSA0XHJcbiAgICAgICAgUmVjeWNsZSA9IDVcclxuICAgICAgICBSZXN0cmFpbmVkID0gNlxyXG4gICAgICAgIEVzc2VudGlhbERvd24gPSA3XHJcbiAgICAgICAgQmxlZWRvdXQgPSA4ICovXHJcbi8vR2V0cyBhY3RvciBzdGF0ZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yU3RhdGUgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yU3RhdGUoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhY3RvciBzb3VsIHNpemVcclxuZXhwb3J0IHZhciBHZXRBY3RvclNvdWxTaXplID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvclNvdWxTaXplKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWN0b3IgdmFsdWUgbW9kaWZpZXIuIDAgLSBwZXJtYW5lbnQsIDEgLSB0ZW1wb3JhcnksIDIgLSBkYW1hZ2VcclxuZXhwb3J0IHZhciBHZXRBY3RvclZhbHVlTW9kaWZpZXIgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKSB7IHJldHVybiBzbi5HZXRBY3RvclZhbHVlTW9kaWZpZXIoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKTsgfTtcclxuLy9HZXRzIGFjdG9yIGNyaXRpY2FsIHN0YWdlXHJcbmV4cG9ydCB2YXIgR2V0Q3JpdGljYWxTdGFnZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q3JpdGljYWxTdGFnZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBhbGxpZXMgb2YgdGhlIGFjdG9yLCBpZiBpbiBjb21iYXRcclxuZXhwb3J0IHZhciBHZXRDb21iYXRBbGxpZXMgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldENvbWJhdEFsbGllcyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCB0YXJnZXRzIG9mIHRoZSBhY3RvciwgaWYgaW4gY29tYmF0XHJcbmV4cG9ydCB2YXIgR2V0Q29tYmF0VGFyZ2V0cyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q29tYmF0VGFyZ2V0cyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBjdXJyZW50IHN1bW1vbnMgY29tbWFuZGVkIGJ5IHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBHZXRDb21tYW5kZWRBY3RvcnMgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0Q29tbWFuZGVkQWN0b3JzKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgdGhlIG93bmVyIG9mIHN1bW1vbmVkIGFjdG9yXHJcbmV4cG9ydCB2YXIgR2V0Q29tbWFuZGluZ0FjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldENvbW1hbmRpbmdBY3Rvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgaGFpciBjb2xvciBvbiBhY3Rvci4gRmFpbHMgaWYgaGFpciBoZWFkcGFydCBkb2Vzbid0IGV4aXN0XHJcbmV4cG9ydCB2YXIgR2V0SGFpckNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldEhhaXJDb2xvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIHRleHR1cmVzZXQgYmVsb25naW5nIHRvIGhlYWRwYXJ0LCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgR2V0SGVhZFBhcnRUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpVHlwZSkgeyByZXR1cm4gc24uR2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGFpVHlwZSk7IH07XHJcbi8vR2V0cyB0aGUgYWN0b3IncyBsb2NhbCBncmF2aXR5LlxyXG5leHBvcnQgdmFyIEdldExvY2FsR3Jhdml0eUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldExvY2FsR3Jhdml0eUFjdG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgb2JqZWN0IHVuZGVyIGFjdG9yJ3MgZmVldCAoZWcuIHRhYmxlKS4gRG9lcyBub3Qgd29yayBpZiB0aGUgcGxheWVyIGlzIHN0YW5kaW5nIG9uIHRoZSBncm91bmQuXHJcbmV4cG9ydCB2YXIgR2V0T2JqZWN0VW5kZXJGZWV0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldE9iamVjdFVuZGVyRmVldChha0FjdG9yKTsgfTtcclxuLy9HZXRzIGFjdHVhbCBjdXJyZW50IHBhY2thZ2Ugb24gYWN0b3IsIGluY2x1ZGluZyBpbnRlcm5hbCBwYWNrYWdlcyB1c2VkIGJ5IHRoZSBnYW1lIChzZWUgR2V0UGFja2FnZVR5cGUgYmVsb3cpXHJcbmV4cG9ydCB2YXIgR2V0UnVubmluZ1BhY2thZ2UgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0UnVubmluZ1BhY2thZ2UoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBjdXJyZW50IHNraW4gY29sb3Igb24gYWN0b3IuXHJcbmV4cG9ydCB2YXIgR2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldFNraW5Db2xvcihha0FjdG9yKTsgfTtcclxuLy9TaW1pbGFyIHRvIEdldFRpbWVEZWFkIGNvbnNvbGUgY29tbWFuZC4gUmV0dXJucyAwLjAgaWYgYWN0b3IgaXMgYWxpdmVcclxuZXhwb3J0IHZhciBHZXRUaW1lRGVhZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZURlYWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB0aW1lIG9mIGRlYXRoIGluIGdhbWUgZGF5cyBwYXNzZWRcclxuZXhwb3J0IHZhciBHZXRUaW1lT2ZEZWF0aCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZU9mRGVhdGgoYWtBY3Rvcik7XHJcbn07XHJcbi8vSGFzU3BlbGwgYnV0IGNoZWNrcyBpZiB0aGUgc3BlbGwgaXMgcHJlc2VudCBvbiB0aGUgYWN0b3IgKGkuZSBhY3RpdmUgYW5kIG5vdCBkaXNwZWxsZWQpXHJcbmV4cG9ydCB2YXIgSGFzQWN0aXZlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uSGFzQWN0aXZlU3BlbGwoYWtBY3RvciwgYWtTcGVsbCk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBkZWZlcnJlZCBraWxsIG1vZGVcclxuZXhwb3J0IHZhciBIYXNEZWZlcnJlZEtpbGwgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkhhc0RlZmVycmVkS2lsbChha0FjdG9yKTtcclxufTtcclxuLy9DaGVja3MgaWYgYWN0aXZlbWFnaWNlZmZlY3Qgd2l0aCBnaXZlbiBhcmNoZXR5cGUgaXMgcHJlc2VudCBvbiBhY3Rvci4gQXJjaGV0eXBlIE1VU1QgYmUgdHlwZWQgYXMgZ2l2ZW4gYmVsb3cuXHJcbmV4cG9ydCB2YXIgSGFzTWFnaWNFZmZlY3RXaXRoQXJjaGV0eXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzQXJjaGV0eXBlKSB7IHJldHVybiBzbi5IYXNNYWdpY0VmZmVjdFdpdGhBcmNoZXR5cGUoYWtBY3RvciwgYXNBcmNoZXR5cGUpOyB9O1xyXG4vL1JldHVybnMgaWYgdGhlIGFjdG9yIGhhcyBza2luL2FybW9yIHdpdGggc2tpbiBwcmVzZW50XHJcbmV4cG9ydCB2YXIgSGFzU2tpbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0FybW9yVG9DaGVjaykgeyByZXR1cm4gc24uSGFzU2tpbihha0FjdG9yLCBha0FybW9yVG9DaGVjayk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBjZWxsIHdhdGVyIG9yIGxhdmFcclxuZXhwb3J0IHZhciBJc0FjdG9ySW5XYXRlciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNBY3RvckluV2F0ZXIoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyB1bmRlcndhdGVyXHJcbmV4cG9ydCB2YXIgSXNBY3RvclVuZGVyd2F0ZXIgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzQWN0b3JVbmRlcndhdGVyKGFrQWN0b3IpO1xyXG59O1xyXG4vKiogTElNQlxyXG4gICAgICAgIE5vbmUgPSAtMVxyXG4gICAgICAgIFRvcnNvID0gMFxyXG4gICAgICAgIEhlYWQgPSAxICovXHJcbi8vUmV0dXJucyB3aGV0aGVyIGxpbWIgaXMgZ29uZSAoaS5lLCB0aGUgaGVhZCwgYnV0IGFkZGluZyB0aGUgd2hvbGUgZW51bSBpbiBjYXNlIHNvbWVvbmUgZXhwYW5kcyB0aGUgZGlzbWVtYmVybWVudCBzeXN0ZW0gaW4gdGhlIGZ1dHVyZSlcclxuZXhwb3J0IHZhciBJc0xpbWJHb25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpTGltYikgeyByZXR1cm4gc24uSXNMaW1iR29uZShha0FjdG9yLCBhaUxpbWIpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgYSBxdWFkcnVwZWRcclxuZXhwb3J0IHZhciBJc1F1YWRydXBlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNRdWFkcnVwZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRhcmdldCBpcyBzb3VsIHRyYXBwZWQgLyBjYXBhYmxlIG9mIGJlaW5nIHNvdWwgdHJhcHBlZCBzdWNjZXNzZnVsbHkgKGlmIHVzaW5nIG1vZHMgdGhhdCBieXBhc3MgdmFuaWxsYSBzb3VsIHRyYXAgc3lzdGVtKS5cclxuZXhwb3J0IHZhciBJc1NvdWxUcmFwcGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc1NvdWxUcmFwcGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGVxdWlwcGVkIGl0ZW1zIHRvIGFycmF5XHJcbmV4cG9ydCB2YXIgQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkoYWtBY3Rvcik7IH07XHJcbi8vQWRkcyBwZXJrcyB0byB0aGUgYWN0b3JiYXNlLCB3b3JrcyBvbiBsZXZlbGVkIGFjdG9ycy91bmlxdWUgTlBDcy4gRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5BZGRCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL0FkZHMgc3BlbGxzIHRvIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLkFkZEJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLyoqIEJMRU5EIE1PREVTXHJcbiAgICAgICAgRGFya2VuID0gMFxyXG4gICAgICAgIE11bHRpcGx5ID0gMVxyXG4gICAgICAgIENvbG9yQnVybiA9IDJcclxuICAgICAgICBMaW5lYXJCdXJuID0gM1xyXG4gICAgICAgIERhcmtlckNvbG9yID0gNFxyXG4gICAgICAgIExpZ2h0ZW4gPSA1XHJcbiAgICAgICAgU2NyZWVuID0gNlxyXG4gICAgICAgIENvbG9yRG9kZ2UgPSA3XHJcbiAgICAgICAgTGluZWFyRG9kZ2UgPSA4XHJcbiAgICAgICAgTGlnaHRlckNvbG9yID0gOVxyXG4gICAgICAgIE92ZXJsYXkgPSAxMFxyXG4gICAgICAgIFNvZnRMaWdodCA9IDExXHJcbiAgICAgICAgSGFyZExpZ2h0ID0gMTJcclxuICAgICAgICBWaXZpZExpZ2h0ID0gMTNcclxuICAgICAgICBMaW5lYXJMaWdodCA9IDE0XHJcbiAgICAgICAgUGluTGlnaHQgPSAxNVxyXG4gICAgICAgIEhhcmRNaXggPSAxNlxyXG4gICAgICAgIERpZmZlcmVuY2UgPSAxN1xyXG4gICAgICAgIEV4Y2x1c2lvbiA9IDE4XHJcbiAgICAgICAgU3VidHJhY3QgPSAxOVxyXG4gICAgICAgIERpdmlkZSA9IDIwICovXHJcbi8vQmxlbmRzIGV4aXN0aW5nIHNraW4gY29sb3Igd2l0aCBzcGVjaWZpZWQgY29sb3IsIHVzaW5nIHBob3Rvc2hvcCBibGVuZCBmb3JtdWxhcywgd2l0aCBhbHBoYSAob3BhY2l0eSkuXHJcbi8vSWYgdHJ1ZSwgYXV0b0x1bWluYW5jZSBjYWxjdWxhdGVzIHNraW4gdG9uZSByZWxhdGl2ZSBsdW1pbmFuY2UuIFRoZSBvcGFjaXR5IHZhbHVlIGlzIHRoZW4gdXNlZCBhcyBhIG11bHRpcGxpZXIgb24gdG9wIG9mIHRoYXQsIGZpbmFsIHZhbHVlIGlzIGNsYW1wZWQgdG8gMC0xXHJcbi8vSWYgZmFsc2UsIG9ubHkgb3BhY2l0eSB3aWxsIGJlIHVzZWQuIFJlY29tbWVuZCB0byB1c2UgYXV0b2x1bWluYW5jZSBiZWNhdXNlIGNvbG9ycyB3aWxsIG5vdCBibGVuZCB3ZWxsIGZvciBhbGwgc2tpbiB0b25lcyB1c2luZyBmbGF0IHZhbHVlcy5cclxuZXhwb3J0IHZhciBCbGVuZENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFpQmxlbmRNb2RlLCBhYkF1dG9MdW1pbmFuY2UsIGFmT3BhY2l0eSkge1xyXG4gICAgcmV0dXJuIHNuLkJsZW5kQ29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWlCbGVuZE1vZGUsIGFiQXV0b0x1bWluYW5jZSwgYWZPcGFjaXR5KTtcclxufTtcclxuLy9EZWNhcGl0YXRlcyBsaXZpbmcgYW5kIGRlYWQgYWN0b3JzLiBMaXZpbmcgYWN0b3JzIHdpbGwgbm90IGRpZSB3aGVuIHRoaXMgaXMgY2FsbGVkIVxyXG5leHBvcnQgdmFyIERlY2FwaXRhdGVBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRGVjYXBpdGF0ZUFjdG9yKGFrQWN0b3IpO1xyXG59O1xyXG4vLzAgLSBFbmFibGVBSSArIHRvZ2dsaW5nIHJlY29yZCBoaXRzIGZsYWdzIHNvIHRoZXkgZG9uJ3QgZ28gZmx5aW5nIDMwMCBmZWV0IHdoZW4gdW5mcm96ZW4uXHJcbi8vMSAtIFBhcmFseXplcyBhY3RvciwgZXZlbiB3aGVuIGRlYWQuXHJcbmV4cG9ydCB2YXIgRnJlZXplQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSwgYWJGcmVlemUpIHsgcmV0dXJuIHNuLkZyZWV6ZUFjdG9yKGFrQWN0b3IsIHR5cGUsIGFiRnJlZXplKTsgfTtcclxuLy9RdWljayBhbmQgZGlydHkgaGFjayB0byBpbnN0YW50bHkga2lsbCB0aGUgYWN0b3IgYW5kIHNldCBhcyBkZWFkLlxyXG5leHBvcnQgdmFyIEtpbGxOb1dhaXQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLktpbGxOb1dhaXQoYWtBY3Rvcik7XHJcbn07XHJcbi8vREVQUkVDSUFURURcclxuLy9CbGVuZHMgZXhpc3Rpbmcgc2tpbiBjb2xvciB3aXRoIHNwZWNpZmllZCBjb2xvci5cclxuLy9UcnVlIC0gaW50ZW5zaXR5IGlzIG1hbnVhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgcGVyY2VudGFnZSAwLTEuMCwgRmFsc2UgLSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgc2tpbiB0b25lIGx1bWluYW5jZVxyXG5leHBvcnQgdmFyIE1peENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFiTWFudWFsTW9kZSwgYWZQZXJjZW50YWdlKSB7XHJcbiAgICByZXR1cm4gc24uTWl4Q29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWJNYW51YWxNb2RlLCBhZlBlcmNlbnRhZ2UpO1xyXG59O1xyXG4vL0JhdGNoIGFkZGVkIHNwZWxsIHJlbW92YWwsIGZpbHRlcmVkIGJ5IG9wdGlvbmFsIG1vZCBuYW1lLCBhbmQga2V5d29yZCBhcnJheSAobWF0Y2hpbmcgYW55IGtleXdvcmQgb3IgYWxsIG9mIHRoZW0pXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQWRkZWRTcGVsbHMgPSBmdW5jdGlvbiAoYWtBY3RvciwgbW9kTmFtZSwga2V5d29yZHMsIGFiTWF0Y2hBbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUFkZGVkU3BlbGxzKGFrQWN0b3IsIG1vZE5hbWUsIGtleXdvcmRzLCBhYk1hdGNoQWxsKTsgfTtcclxuLy9SZW1vdmVzIHBlcmtzIGZyb20gdGhlIGFjdG9yYmFzZVxyXG4vL1BlcmsgZWZmZWN0cyBtYXkgbm90IGJlIHJlbW92ZWQgZnJvbSB1bmlxdWUgYWN0b3JzLCBtb3JlIHRlc3RpbmcgcmVxdWlyZWQuXHJcbi8vRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5SZW1vdmVCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL1JlbW92ZXMgc3BlbGxzIGZyb20gdGhlIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLy9SZXBsYWNlcyBzcGVjaWZpZWQgc291cmNlIHRleHR1cmVzZXQgb24gd29ybiBhcm1vciB3aXRoIHRhcmdldCB0ZXh0dXJlc2V0LiBMYXN0cyBmb3Igb25lIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZCAoZGlmZnVzZSBpcyAwLCBub3JtYWwgaXMgMS4uLilcclxuZXhwb3J0IHZhciBSZXBsYWNlQXJtb3JUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQXJtb3IsIGFrU291cmNlVFhTVCwgYWtUYXJnZXRUWFNULCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VBcm1vclRleHR1cmVTZXQoYWtBY3RvciwgYWtBcm1vciwgYWtTb3VyY2VUWFNULCBha1RhcmdldFRYU1QsIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL1JlcGxhY2VzIGZhY2UgdGV4dHVyZXNldC4gTGFzdHMgb25lIGdhbWluZyBzZXNzaW9uLiBDYW4gYmUgYXBwbGllZCB0byBub24tdW5pcXVlIGFjdG9ycy5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC4gUmVwbGFjaW5nIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBtYXkgY2F1c2UgYSB2aXNpYmxlIG5lY2tzZWFtLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VGYWNlVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZUZhY2VUZXh0dXJlU2V0KGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgc2tpbiB0ZXh0dXJlc2V0IGZvciBnaXZlbiBzbG90bWFzayAoaWUuIGJvZHkvaGFuZCkuIExhc3RzIG9uZSBnYW1pbmcgc2Vzc2lvbi4gSGFzIHRvIGJlIHJlYXBwbGllZCB3aGVuIHJlLWVxdWlwcGluZyBhcm1vci5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC5cclxuZXhwb3J0IHZhciBSZXBsYWNlU2tpblRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVNsb3RNYXNrLCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VTa2luVGV4dHVyZVNldChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpU2xvdE1hc2ssIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL0NoZWNrcyBmb3IgTmlFeHRyYURhdGEgbm9kZXMgb24gYWN0b3IgLSBQTzNfVElOVC9QTzNfQUxQSEEvUE8zX1RYU1QvUE8zX1RPR0dMRS9QTzNfU0hBREVSXHJcbi8vU3RvcHMgYWxsIGVmZmVjdCBzaGFkZXJzIGFuZFxyXG4vL1BPM19USU5UIC0gcmVzZXRzIHRpbnQsIHJlYnVpbGRzIGZhY2VnZW4gaWYgYWN0b3IgaXMgcGxheWVyXHJcbi8vUE8zX0FMUEhBIC0gcmVzZXRzIHNraW4gYWxwaGFcclxuLy9QTzNfVFhTVCAtIHJlc2V0cyB0ZXh0dXJlc2V0cyB3aXRoIHRleHR1cmVwYXRocyBjb250YWluaW5nIGZvbGRlck5hbWVcclxuLy9QTzNfVE9HR0xFIC0gdW5oaWRlcyBhbGwgY2hpbGRyZW4gb2Ygbm9kZXMgdGhhdCB3ZXJlIHdyaXR0ZW4gdG8gdGhlIGV4dHJhRGF0YVxyXG4vL1BPM19TSEFERVIgLSByZWNyZWF0ZXMgdGhlIG9yaWdpbmFsIHNoYWRlciB0eXBlIChhcyBjbG9zZSBhcyBwb3NzaWJsZSwgcHJvamVjdGVkVVYgcGFyYW1zIGFyZSBub3QgcmVzdG9yZWQpXHJcbmV4cG9ydCB2YXIgUmVzZXRBY3RvcjNEID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSkgeyByZXR1cm4gc24uUmVzZXRBY3RvcjNEKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSk7IH07XHJcbi8vMC4wIGRpc2FibGVzIHJlZnJhY3Rpb24sIDEuMCBpcyBtYXggcmVmcmFjdGlvblxyXG5leHBvcnQgdmFyIFNldEFjdG9yUmVmcmFjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlJlZnJhY3Rpb24pIHsgcmV0dXJuIHNuLlNldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yLCBhZlJlZnJhY3Rpb24pOyB9O1xyXG4vL1NldHMgaGFpciBjb2xvciBvbiBhY3Rvci4gQ2hhbmdlcyBtYXkgcGVyc2lzdCB0aHJvdWdob3V0IGdhbWluZyBzZXNzaW9uLCBldmVuIHdoZW4gcmVsb2FkaW5nIHByZXZpb3VzIHNhdmVzLlxyXG5leHBvcnQgdmFyIFNldEhhaXJDb2xvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yKSB7IHJldHVybiBzbi5TZXRIYWlyQ29sb3IoYWtBY3RvciwgYWtDb2xvcik7IH07XHJcbi8vU2V0cyBoZWFkcGFydCdzIG1lc2ggYWxwaGEuIERvZXNuJ3Qgd29yayBmb3Igc29tZSBoYWlyIHR5cGVzIGFuZCBoZXRlcm9jaHJvbWljIGV5ZXNcclxuZXhwb3J0IHZhciBTZXRIZWFkUGFydEFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpUGFydFR5cGUsIGFmQWxwaGEpIHsgcmV0dXJuIHNuLlNldEhlYWRQYXJ0QWxwaGEoYWtBY3RvciwgYWlQYXJ0VHlwZSwgYWZBbHBoYSk7IH07XHJcbi8vU2V0cyB0ZXh0dXJlc2V0IGJlbG9uZ2luZyB0byBoZWFkcGFydCwgaWYgYW55LlxyXG5leHBvcnQgdmFyIFNldEhlYWRQYXJ0VGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBoZWFkcGFydFRYU1QsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGhlYWRwYXJ0VFhTVCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIHZlbG9jaXR5IG9mIHRoZSBhY3Rvci4gTWF5IG5vdCB0YWtlIHBsYWNlIGltbWVkaWF0ZWx5LlxyXG5leHBvcnQgdmFyIFNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopIHsgcmV0dXJuIHNuLlNldExpbmVhclZlbG9jaXR5KGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopOyB9O1xyXG4vL1NldHMgbG9jYWwgZ3Jhdml0eSBvZiB0aGUgYWN0b3IuIE5lZ2F0aXZlIHZhbHVlcyB3aWxsIGNhdXNlIHRoZW0gdG8gZmx5LiBNYXkgbm90IHRha2UgcGxhY2UgaW1tZWRpYXRlbHkuXHJcbmV4cG9ydCB2YXIgU2V0TG9jYWxHcmF2aXR5QWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZWYWx1ZSwgYWJEaXNhYmxlR3Jhdml0eU9uR3JvdW5kKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHlBY3Rvcihha0FjdG9yLCBhZlZhbHVlLCBhYkRpc2FibGVHcmF2aXR5T25Hcm91bmQpOyB9O1xyXG4vL1NldHMgYWxwaGEgb24gZmFjZSwgYmFzZSBza2luIGZvcm0gYW5kIGFybW9yIG1lc2hlcyB3aXRoIHZpc2libGUgc2tpbi4gSGFzIHRvIGJlIHJlLWFwcGxpZWQgd2hlbiBhcm1vciBpcyB1bi9yZS1lcXVpcHBlZC5cclxuZXhwb3J0IHZhciBTZXRTa2luQWxwaGEgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZBbHBoYSkgeyByZXR1cm4gc24uU2V0U2tpbkFscGhhKGFrQWN0b3IsIGFmQWxwaGEpOyB9O1xyXG4vL1NldHMgc2tpbiBjb2xvciAoZmFjZSBhbmQgYm9keSkuIEhhcyB0byBiZSByZS1hcHBsaWVkIHdoZW4gYXJtb3IgaXMgdW4vcmUtZXF1aXBwZWQuXHJcbmV4cG9ydCB2YXIgU2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IpIHsgcmV0dXJuIHNuLlNldFNraW5Db2xvcihha0FjdG9yLCBha0NvbG9yKTsgfTtcclxuLy9TZXRzIHRoZSBmbGFnIHVzZWQgYnkgdGhlIGdhbWUgdG8gZGV0ZXJtaW5lIHNvdWwgdHJhcHBlZCBOUENzXHJcbmV4cG9ydCB2YXIgU2V0U291bFRyYXBwZWQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJUcmFwcGVkKSB7IHJldHVybiBzbi5TZXRTb3VsVHJhcHBlZChha0FjdG9yLCBhYlRyYXBwZWQpOyB9O1xyXG4vL1RvZ2dsZXMgYW55IGhhaXIgd2lncyAoZ2VvbWV0cnkgd2l0aCBoYWlyIHNoYWRlcikgZm91bmQgb24gc2xvdHMgSGFpci9Mb25nSGFpclxyXG5leHBvcnQgdmFyIFRvZ2dsZUhhaXJXaWdzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiRGlzYWJsZSkgeyByZXR1cm4gc24uVG9nZ2xlSGFpcldpZ3MoYWtBY3RvciwgYWJEaXNhYmxlKTsgfTtcclxuLyoqIEFSTU9SIFRZUEVcclxuICAgICAgICBMaWdodCA9IDBcclxuICAgICAgICBIZWF2eSA9IDFcclxuICAgICAgICBDbG90aGluZyA9IDIgKi9cclxuLy9VbmVxdWlwcyBhbGwgYXJtb3Igb2YgdHlwZSwgb3B0aW9uYWxseSBza2lwcGluZyBiaXBlZCBzbG90cy5cclxuZXhwb3J0IHZhciBVbmVxdWlwQWxsT2ZUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKSB7IHJldHVybiBzbi5VbmVxdWlwQWxsT2ZUeXBlKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUT1JCQVNFXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbnBjIGRlYXRoIGl0ZW1cclxuZXhwb3J0IHZhciBHZXREZWF0aEl0ZW0gPSBmdW5jdGlvbiAoYWtCYXNlKSB7IHJldHVybiBzbi5HZXREZWF0aEl0ZW0oYWtCYXNlKTsgfTtcclxuLy9HZXQgYWN0b3JiYXNlIHBlcmsgYXQgbnRoIGluZGV4XHJcbmV4cG9ydCB2YXIgR2V0TnRoUGVyayA9IGZ1bmN0aW9uIChha0Jhc2UsIGFpSW5kZXgpIHsgcmV0dXJuIHNuLkdldE50aFBlcmsoYWtCYXNlLCBhaUluZGV4KTsgfTtcclxuLy9HZXQgdG90YWwgYWN0b3JiYXNlIHBlcmsgY291bnRcclxuZXhwb3J0IHZhciBHZXRQZXJrQ291bnQgPSBmdW5jdGlvbiAoYWtCYXNlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGVya0NvdW50KGFrQmFzZSk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBucGMgZGVhdGggaXRlbS4gQ2FuIGJlIE5vbmUuXHJcbmV4cG9ydCB2YXIgU2V0RGVhdGhJdGVtID0gZnVuY3Rpb24gKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSkgeyByZXR1cm4gc24uU2V0RGVhdGhJdGVtKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FMSUFTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWxpYXMgaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvQWxpYXMgPSBmdW5jdGlvbiAoYWtBbGlhcywgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BbGlhcyhha0FsaWFzLCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUk1PUi9BRERPTlNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhcm1vciBhZGRvbidzIGZvb3RzdGVwIHNldFxyXG5leHBvcnQgdmFyIEdldEZvb3RzdGVwU2V0ID0gZnVuY3Rpb24gKGFrQXJtYSkgeyByZXR1cm4gc24uR2V0Rm9vdHN0ZXBTZXQoYWtBcm1hKTsgfTtcclxuLy9TZXRzIGFybW9yIGFkZG9uJ3MgZm9vdHN0ZXAgc2V0XHJcbmV4cG9ydCB2YXIgU2V0Rm9vdHN0ZXBTZXQgPSBmdW5jdGlvbiAoYWtBcm1hLCBha0Zvb3RzdGVwU2V0KSB7IHJldHVybiBzbi5TZXRGb290c3RlcFNldChha0FybWEsIGFrRm9vdHN0ZXBTZXQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUlJBWVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQWRkcyBhY3RvciB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkQWN0b3JUb0FycmF5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFjdG9yQXJyYXkpIHsgcmV0dXJuIHNuLkFkZEFjdG9yVG9BcnJheShha0FjdG9yLCBhY3RvckFycmF5KTsgfTtcclxuLy9BZGRzIHN0cmluZyB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkU3RyaW5nVG9BcnJheSA9IGZ1bmN0aW9uIChhc1N0cmluZywgYXNTdHJpbmdzKSB7IHJldHVybiBzbi5BZGRTdHJpbmdUb0FycmF5KGFzU3RyaW5nLCBhc1N0cmluZ3MpOyB9O1xyXG4vL0NvdW50cyBob3cgbWFueSBpbnN0YW5jZXMgb2YgYSBzdHJpbmcgYXJlIGluIGFuIGFycmF5LlxyXG5leHBvcnQgdmFyIEFycmF5U3RyaW5nQ291bnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcsIGFzU3RyaW5ncykgeyByZXR1cm4gc24uQXJyYXlTdHJpbmdDb3VudChhc1N0cmluZywgYXNTdHJpbmdzKTsgfTtcclxuLy9BbHBoYWJldGljYWxseSBzb3J0cyBhbmQgcmV0dXJucyB0cnVuY2F0ZWQgc3JpbmcgYXJyYXkuXHJcbmV4cG9ydCB2YXIgU29ydEFycmF5U3RyaW5nID0gZnVuY3Rpb24gKGFzU3RyaW5ncykge1xyXG4gICAgcmV0dXJuIHNuLlNvcnRBcnJheVN0cmluZyhhc1N0cmluZ3MpO1xyXG59O1xyXG4vL0dldHMgbmFtZSBhcnJheSBvZiBhbGwgdGhlIGFjdG9ycyBpbiB0aGUgYXJlYSwgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuIEZpbHRlciBrZXl3b3JkIG9wdGlvbmFsXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkQWN0b3JOYW1lcyA9IGZ1bmN0aW9uIChha0tleXdvcmQsIGFzUGx1cmFsLCBhYkludmVydEtleXdvcmQpIHtcclxuICAgIGlmIChhc1BsdXJhbCA9PT0gdm9pZCAwKSB7IGFzUGx1cmFsID0gXCIocylcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFNvcnRlZEFjdG9yTmFtZXMoYWtLZXl3b3JkLCBhc1BsdXJhbCwgYWJJbnZlcnRLZXl3b3JkKTtcclxufTtcclxuLy9HZXRzIG5hbWUgYXJyYXkgb2YgTlBDcywgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkTlBDTmFtZXMgPSBmdW5jdGlvbiAoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCkge1xyXG4gICAgaWYgKGFzUGx1cmFsID09PSB2b2lkIDApIHsgYXNQbHVyYWwgPSBcIihzKVwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U29ydGVkTlBDTmFtZXMoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0JPT0tcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ2xlYXJzIHJlYWQgZmxhZyAoYW5kIHdyaXRlcyBpdCB0byB0aGUgc2F2ZSkuXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWFkRmxhZyA9IGZ1bmN0aW9uIChha0Jvb2spIHtcclxuICAgIHJldHVybiBzbi5DbGVhclJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vU2V0cyByZWFkIGZsYWcgKGFuZCB3cml0ZXMgaXQgdG8gdGhlIHNhdmUpLlxyXG5leHBvcnQgdmFyIFNldFJlYWRGbGFnID0gZnVuY3Rpb24gKGFrQm9vaykge1xyXG4gICAgcmV0dXJuIHNuLlNldFJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBjZWxsIG5vcnRoIHJvdGF0aW9uL3dvcmxkc3BhY2Ugbm9ydGggcm90YXRpb24gZm9yIGV4dGVyaW9yIGNlbGxzLiBSb3RhdGlvbiBpcyBpbiBkZWdyZWVzLlxyXG5leHBvcnQgdmFyIEdldENlbGxOb3J0aFJvdGF0aW9uID0gZnVuY3Rpb24gKGFrQ2VsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldENlbGxOb3J0aFJvdGF0aW9uKGFrQ2VsbCk7XHJcbn07XHJcbi8vR2V0cyBjZWxsIGxpZ2h0aW5nIHRlbXBsYXRlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRpbmdUZW1wbGF0ZSA9IGZ1bmN0aW9uIChha0NlbGwpIHsgcmV0dXJuIHNuLkdldExpZ2h0aW5nVGVtcGxhdGUoYWtDZWxsKTsgfTtcclxuLy9TZXRzIGNlbGwgbGlnaHRpbmcgdGVtcGxhdGVcclxuZXhwb3J0IHZhciBTZXRMaWdodGluZ1RlbXBsYXRlID0gZnVuY3Rpb24gKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKSB7IHJldHVybiBzbi5TZXRMaWdodGluZ1RlbXBsYXRlKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKTsgfTtcclxuLy9TZXRzIGNlbGwgbm9ydGggcm90YXRpb24uXHJcbmV4cG9ydCB2YXIgU2V0Q2VsbE5vcnRoUm90YXRpb24gPSBmdW5jdGlvbiAoYWtDZWxsLCBhZkFuZ2xlKSB7IHJldHVybiBzbi5TZXRDZWxsTm9ydGhSb3RhdGlvbihha0NlbGwsIGFmQW5nbGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9ERUJVR1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBmdW5jdGlvbmFsIHNwZWxscyAoaWUuIHNwZWxscyB0aGF0IGNhbiBiZSBsZWFybmVkIGZyb20gc3BlbGwgYm9va3MsIGFuZCBub3QgYWxsIDIwMDArIHNwZWxscyBsaWtlIHBzYilcclxuZXhwb3J0IHZhciBHaXZlUGxheWVyU3BlbGxCb29rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2l2ZVBsYXllclNwZWxsQm9vaygpOyB9O1xyXG4vL0R1bXBzIGN1cnJlbnQgYW5pbWF0aW9uIHZhcmlhYmxlcyB0byBwbzNfcGFweXJ1c2V4dGVuZGVyNjQubG9nXHJcbmV4cG9ydCB2YXIgRHVtcEFuaW1hdGlvblZhcmlhYmxlcyA9IGZ1bmN0aW9uIChha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCkgeyByZXR1cm4gc24uRHVtcEFuaW1hdGlvblZhcmlhYmxlcyhha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0RFVEVDVElPTlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9SZXR1cm5zIHdoZXRoZXIgb3RoZXIgTlBDcyBjYW4gZGV0ZWN0IHRoaXMgYWN0b3IuXHJcbi8vMCAtICBjYW4ndCBiZSBkZXRlY3RlZCwgMSAtIG5vcm1hbCwgMiAtICB3aWxsIGFsd2F5cyBiZSBkZXRlY3RlZFxyXG5leHBvcnQgdmFyIENhbkFjdG9yQmVEZXRlY3RlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uQ2FuQWN0b3JCZURldGVjdGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGlzIGFjdG9yIGNhbiBkZXRlY3Qgb3RoZXIgTlBDcy5cclxuLy8wIC0gY2FuIG5ldmVyIGRldGVjdCwgMS0gbm9ybWFsLCAyIC0gd2lsbCBhbHdheXMgZGV0ZWN0IG90aGVyc1xyXG5leHBvcnQgdmFyIENhbkFjdG9yRGV0ZWN0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5DYW5BY3RvckRldGVjdChha0FjdG9yKTtcclxufTtcclxuLy9Gb3JjZSB0aGlzIGFjdG9yIHRvIGJlIGRldGVjdGVkIGJ5IG90aGVyIE5QQ3MgKGFjdG9yIGlzIGFsd2F5cyB2aXNpYmxlKS5cclxuZXhwb3J0IHZhciBGb3JjZUFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Gb3JjZUFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL0ZvcmNlIHRoaXMgYWN0b3IgdG8gYWx3YXlzIGRldGVjdCB0aGVpciB0YXJnZXRzXHJcbmV4cG9ydCB2YXIgRm9yY2VBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRm9yY2VBY3RvckRldGVjdGluZyhha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhpcyBhY3RvciBpcyBjdXJyZW50bHkgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDc1xyXG5leHBvcnQgdmFyIElzRGV0ZWN0ZWRCeUFueW9uZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5Jc0RldGVjdGVkQnlBbnlvbmUoYWtBY3Rvcik7IH07XHJcbi8vUHJldmVudCB0aGlzIGFjdG9yIGZyb20gYmVpbmcgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDcyAoYWN0b3IgaXMgaGlkZGVuKS5cclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpOyB9O1xyXG4vL1ByZXZlbnQgdGhpcyBhY3RvciBmcm9tIGRldGVjdGluZyBvdGhlciBOUENzIChhY3RvciBpcyBibGluZClcclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpOyB9O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpb24gc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpbmcgc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9FRkZFQ1RTSEFERVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8qKiBFRkZFQ1QgU0hBREVSIEZMQUdTXHJcbiAgICAgICAga05vTWVtYnJhbmVTaGFkZXIgPSAweDAwMDAwMDAxXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQ29sb3IgPSAweDAwMDAwMDAyXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQWxwaGEgPSAweDAwMDAwMDA0XHJcbiAgICAgICAga05vUGFydGljbGVTaGFkZXIgPSAweDAwMDAwMDA4XHJcbiAgICAgICAga0VkZ2VFZmZlY3RJbnZlcnNlID0gMHgwMDAwMDAxMFxyXG4gICAgICAgIGtBZmZlY3RTa2luT25seSA9IDB4MDAwMDAwMjBcclxuICAgICAgICBrSWdub3JlQWxwaGEgPSAweDAwMDAwMDQwXHJcbiAgICAgICAga1Byb2plY3RVViA9IDB4MDAwMDAwODBcclxuICAgICAgICBrSWdub3JlQmFzZUdlb21ldHJ5QWxwaGEgPSAweDAwMDAwMTAwXHJcbiAgICAgICAga0xpZ2h0aW5nID0gMHgwMDAwMDIwMFxyXG4gICAgICAgIGtOb1dlYXBvbnMgPSAweDAwMDAwNDAwXHJcbiAgICAgICAga1BhcnRpY2xlQW5pbWF0ZWQgPSAweDAwMDA4MDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQ29sb3IgPSAweDAwMDEwMDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQWxwaGEgPSAweDAwMDIwMDAwXHJcbiAgICAgICAga1VzZUJsb29kR2VvbWV0cnkgPSAweDAxMDAwMDAwICovXHJcbi8vR2V0cyBhZGRvbiBtb2RlbHNcclxuZXhwb3J0IHZhciBHZXRBZGRvbk1vZGVscyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBlZmZlY3Qgc2hhZGVycyBwcmVzZW50L3ByZXNlbnQgYW5kIGFjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0RWZmZWN0U2hhZGVyVG90YWxDb3VudChha0VmZmVjdFNoYWRlciwgYWJBY3RpdmUpOyB9O1xyXG4vL0lzIGVmZmVjdCBzaGFkZXIgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNFZmZlY3RTaGFkZXJGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzRWZmZWN0U2hhZGVyRmxhZ1NldChha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXQgZmlsbCB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0TWVtYnJhbmVGaWxsVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVGaWxsVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IGhvbGVzIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZUhvbGVzVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVIb2xlc1RleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBtZW1icmFuZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXRzIGZ1bGwgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVGdWxsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlRnVsbENvdW50KGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgcGFydGljbGUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldHMgcGVyc2lzdGVudCBjb3VudC5cclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0NsZWFycyBlZmZlY3Qgc2hhZGVyIGZsYWcuXHJcbmV4cG9ydCB2YXIgQ2xlYXJFZmZlY3RTaGFkZXJGbGFnID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFyRWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXRzIGFkZG9uIG1vZGVsc1xyXG5leHBvcnQgdmFyIFNldEFkZG9uTW9kZWxzID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBha0RlYnJpcykgeyByZXR1cm4gc24uU2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIsIGFrRGVicmlzKTsgfTtcclxuLy9TZXQgZWZmZWN0IHNoYWRlciBmbGFnLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckZsYWcgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0RWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgY29sb3Iga2V5XHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVDb2xvcktleURhdGEgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpIHtcclxuICAgIHJldHVybiBzbi5TZXRNZW1icmFuZUNvbG9yS2V5RGF0YShha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSk7XHJcbn07XHJcbi8vU2V0IG1lbWJyYW5lIGZpbGwgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lRmlsbFRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lRmlsbFRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBob2xlcyB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVIb2xlc1RleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lSG9sZXNUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIGNvbG9yIGtleVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlQ29sb3JLZXlEYXRhID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKSB7XHJcbiAgICByZXR1cm4gc24uU2V0UGFydGljbGVDb2xvcktleURhdGEoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpO1xyXG59O1xyXG4vL1NldHMgZnVsbCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZUZ1bGxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZUZ1bGxDb3VudChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KTsgfTtcclxuLy9TZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXRzIHBlcnNpc3RlbnQgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCkgeyByZXR1cm4gc24uU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRU5DSEFOVE1FTlQgLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8qKiBFTkNIQU5UTUVOVCBUWVBFU1xyXG4gICAgICAgIEVuY2hhbnRtZW50ID0gNixcclxuICAgICAgICBTdGFmZkVuY2hhbnRtZW50ID0gMTIgKi9cclxuLy9SZXR1cm5zIGVuY2hhbnRtZW50IHR5cGUuIC0xIGlmICBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0RW5jaGFudG1lbnRUeXBlID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQpIHsgcmV0dXJuIHNuLkdldEVuY2hhbnRtZW50VHlwZShha0VuY2hhbnRtZW50KTsgfTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gRW5jaGFudG1lbnQgdG8gdGFyZ2V0IEVuY2hhbnRtZW50LCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub0VuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gRW5jaGFudG1lbnQgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBFbmNoYW50bWVudCB0aGF0IG1hdGNoZXMgRW5jaGFudG1lbnQgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbUVuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZFQ1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GRUMgZnVuY3Rpb25cclxuLy9yZXR1cm5zIGVmZmVjdCB0eXBlLCBlZmZlY3Qgc2tpbGwgbGV2ZWwsIGFuZCBwcm9qZWN0aWxlIHR5cGUsIG9mIHRoZSBoaWdoZXN0IG1hZ25pdHVkZSBlZmZlY3QgcHJlc2VudCBvbiB0aGUgYWN0b3JcclxuLy9wZXJtYW5lbnQgLSBTVU4sIEFDSUQsIEZJUkUsIEZST1NULCBTSE9DSywgRFJBSU5cclxuLy90ZW1wb3JhcnkgLSBQT0lTT04sIEZFQVJcclxuZXhwb3J0IHZhciBHZXREZWF0aEVmZmVjdFR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSkgeyByZXR1cm4gc24uR2V0RGVhdGhFZmZlY3RUeXBlKGFrQWN0b3IsIHR5cGUpOyB9O1xyXG4vLzAgLSBjaGFycmVkL3NrZWxldG9uXHJcbi8vMSAtIGRyYWluZWRcclxuLy8yIC0gcG9pc29uZWQvZnJpZ2h0ZW5lZFxyXG4vLzMtICBhZ2VkXHJcbi8vNCAtIGNoYXJyZWQgY3JlYXR1cmVcclxuLy81IC0gZnJvemVuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0c05vdE9mVHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaUVmZmVjdFR5cGUpIHsgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdHNOb3RPZlR5cGUoYWtBY3RvciwgYWlFZmZlY3RUeXBlKTsgfTtcclxuLy8gMCAtIHBlcm1hbmVudFxyXG4vLyAxIC0gdGVtcG9yYXJ5XHJcbi8vIDIgLSBmcm96ZW5BY3RvclxyXG4vLyAzIC0gZnJvemVuQ29sXHJcbmV4cG9ydCB2YXIgU2VuZEZFQ1Jlc2V0RXZlbnQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlUeXBlLCBhYlJlc2V0M0QpIHsgcmV0dXJuIHNuLlNlbmRGRUNSZXNldEV2ZW50KGFrQWN0b3IsIGFpVHlwZSwgYWJSZXNldDNEKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRk9STVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9SZWNvcmQgZmxhZ3NcclxuLy9odHRwczovL2VuLnVlc3AubmV0L3dpa2kvU2t5cmltX01vZDpNb2RfRmlsZV9Gb3JtYXQjUmVjb3Jkc1xyXG4vL2V2YWx1YXRlcyBjb25kaXRpb24gbGlzdHMgZm9yIHNwZWxscy9wb3Rpb25zL2VuY2hhbnRtZW50cy9tZ2VmcyBhbmQgcmV0dXJucyBpZiB0aGV5IGNhbiBiZSBmdWxsZmlsbGVkXHJcbmV4cG9ydCB2YXIgRXZhbHVhdGVDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtBY3Rpb25SZWYsIGFrVGFyZ2V0UmVmKSB7IHJldHVybiBzbi5FdmFsdWF0ZUNvbmRpdGlvbkxpc3QoYWtGb3JtLCBha0FjdGlvblJlZiwgYWtUYXJnZXRSZWYpOyB9O1xyXG4vL0NsZWFyIHJlY29yZCBmbGFnXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhclJlY29yZEZsYWcoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL0J1aWxkcyBhIGxpc3Qgb2YgY29uZGl0aW9ucyBwcmVzZW50IG9uIHRoZSBmb3JtLiBJbmRleCBpcyBmb3Igc3BlbGxzL290aGVyIGZvcm1zIHRoYXQgaGF2ZSBsaXN0cyB3aXRoIGNvbmRpdGlvbnNcclxuLy9Tb21lIGNvbmRpdGlvbnMgbWF5IGJlIHNraXBwZWQgKGNvbmRpdGlvbnMgdGhhdCByZXF1aXJlIG5vbiBwbGF5ZXIgcmVmZXJlbmNlcywgb3Zlcmx5IGNvbXBsZXggY29uZGl0aW9ucyBpbnZvbHZpbmcgcGFja2FnZXMvYWxpYXNlcylcclxuZXhwb3J0IHZhciBHZXRDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlJbmRleCkge1xyXG4gICAgaWYgKGFpSW5kZXggPT09IHZvaWQgMCkgeyBhaUluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldENvbmRpdGlvbkxpc3QoYWtGb3JtLCBhaUluZGV4KTtcclxufTtcclxuLy9HZXQgZm9ybSBlZGl0b3JJRFxyXG5leHBvcnQgdmFyIEdldEZvcm1FZGl0b3JJRCA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5HZXRGb3JtRWRpdG9ySUQoYWtGb3JtKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgcGFydCBvZiB0aGUgbW9kXHJcbmV4cG9ydCB2YXIgSXNGb3JtSW5Nb2QgPSBmdW5jdGlvbiAoYWtGb3JtLCBhc01vZE5hbWUpIHsgcmV0dXJuIHNuLklzRm9ybUluTW9kKGFrRm9ybSwgYXNNb2ROYW1lKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgdGVtcG9yYXJ5IChpZS4gaGFzIGEgZm9ybUlEIGJlZ2lubmluZyB3aXRoIEZGKVxyXG5leHBvcnQgdmFyIElzR2VuZXJhdGVkRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Jc0dlbmVyYXRlZEZvcm0oYWtGb3JtKTtcclxufTtcclxuLy9JcyByZWNvcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNSZWNvcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5Jc1JlY29yZEZsYWdTZXQoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgZm9ybSBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9Gb3JtKGFrRm9ybSwgYXNTY3JpcHROYW1lKTsgfTtcclxuLy9TZXQgcmVjb3JkIGZsYWdcclxuZXhwb3J0IHZhciBTZXRSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRSZWNvcmRGbGFnKGFrRm9ybSwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGtleXdvcmQgdG8gZm9ybS4gRmFpbHMgaWYgdGhlIGZvcm0gZG9lc24ndCBhY2NlcHQga2V5d29yZHMuXHJcbmV4cG9ydCB2YXIgQWRkS2V5d29yZFRvRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvRm9ybShha0Zvcm0sIGFrS2V5d29yZCk7IH07XHJcbi8vRmF2b3JpdGVzIGl0ZW0gKG11c3QgYmUgaW4gaW52ZW50b3J5KSBvciBzcGVsbC9zaG91dFxyXG5leHBvcnQgdmFyIE1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5NYXJrSXRlbUFzRmF2b3JpdGUoYWtGb3JtKTtcclxufTtcclxuLy9SZXBsYWNlcyBnaXZlbiBrZXl3b3JkIHdpdGggbmV3IG9uZSBvbiBmb3JtLiBPbmx5IGxhc3RzIGZvciBhIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi4gW3BvcnRlZCBmcm9tIERpZW5lc1Rvb2xzXS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKSB7IHJldHVybiBzbi5SZXBsYWNlS2V5d29yZE9uRm9ybShha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKTsgfTtcclxuLy9SZW1vdmVzIGtleXdvcmQsIGlmIHByZXNlbnQsIGZyb20gZm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkT25Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkT25Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkKTsgfTtcclxuLy9VbmZhdm9yaXRlcyBpdGVtIChtdXN0IGJlIGluIGludmVudG9yeSkgb3Igc3BlbGwvc2hvdXRcclxuZXhwb3J0IHZhciBVbm1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Vbm1hcmtJdGVtQXNGYXZvcml0ZShha0Zvcm0pO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVVJOSVRVUkVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qKiBGVVJOSVRVUkUgVFlQRVNcclxuICAgICAgICBQZXJjaCA9IDBcclxuICAgICAgICBMZWFuID0gMVxyXG4gICAgICAgIFNpdCA9IDJcclxuICAgICAgICBTbGVlcCA9IDMgKi9cclxuLy9HZXRzIGZ1cm5pdHVyZSB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0RnVybml0dXJlVHlwZSA9IGZ1bmN0aW9uIChha0Z1cm5pdHVyZSkgeyByZXR1cm4gc24uR2V0RnVybml0dXJlVHlwZShha0Z1cm5pdHVyZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dBTUVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbEVuY2hhbnRtZW50cyA9IGZ1bmN0aW9uIChha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRW5jaGFudG1lbnRzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxGb3JtcyA9IGZ1bmN0aW9uIChhaUZvcm1UeXBlLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRm9ybXMoYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgcmFjZXMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsUmFjZXMgPSBmdW5jdGlvbiAoYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHNwZWxscyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuIElzUGxheWFibGUgZmlsdGVycyBvdXQgc3BlbGxzIHRoYXQgYXJlIG5vdCBmb3VuZCBpbiBzcGVsbGJvb2tzLlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxscyA9IGZ1bmN0aW9uIChha0tleXdvcmRzLCBhYklzUGxheWFibGUpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIGlmIChhYklzUGxheWFibGUgPT09IHZvaWQgMCkgeyBhYklzUGxheWFibGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFNwZWxscyhha0tleXdvcmRzLCBhYklzUGxheWFibGUpO1xyXG59O1xyXG4vKiogQUkgUFJPQ0VTUyBMRVZFTFxyXG4gICAgICAgIEhpZ2hQcm9jZXNzID0gMFxyXG4gICAgICAgIE1pZGRsZUhpZ2hQcm9jZXNzID0gMVxyXG4gICAgICAgIE1pZGRsZUxvd1Byb2Nlc3MgPSAyXHJcbiAgICAgICAgTG93UHJvY2VzcyA9IDMgKi9cclxuLy9HZXRzIGFsbCBhY3RvcnMgYnkgQUkgcHJvY2Vzc2luZyB0eXBlLiBodHRwczovL2dlY2suYmV0aHNvZnQuY29tL2luZGV4LnBocD90aXRsZT1HZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbCBmb3IgbW9yZSBpbmZvXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwgPSBmdW5jdGlvbiAoYWlMZXZlbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsKGFpTGV2ZWwpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsRm9ybXNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxGb3Jtc0luTW9kKGFzTW9kTmFtZSwgYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxFbmNoYW50bWVudHNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxFbmNoYW50bWVudHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHJhY2VzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxSYWNlc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzSW5Nb2QoYXNNb2ROYW1lLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBzcGVsbHMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxsc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICBpZiAoYWJJc1BsYXlhYmxlID09PSB2b2lkIDApIHsgYWJJc1BsYXlhYmxlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxTcGVsbHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSk7XHJcbn07XHJcbi8vR2V0cyBjdXJyZW50IGNlbGwgaWYgaW4gaW50ZXJpb3IvYXR0YWNoZWQgY2VsbHMgaW4gZXh0ZXJpb3Ivc2t5IGNlbGxzIGlmIGluIHdvcmxkc3BhY2Ugd2l0aCBubyBhdHRhY2hlZCBjZWxscz8/XHJcbmV4cG9ydCB2YXIgR2V0QXR0YWNoZWRDZWxscyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEF0dGFjaGVkQ2VsbHMoKTsgfTtcclxuLy9HZXRzIGZvcm0gdXNpbmcgaXRzIGVkaXRvcklEXHJcbmV4cG9ydCB2YXIgR2V0Rm9ybUZyb21FZGl0b3JJRCA9IGZ1bmN0aW9uIChhc0VkaXRvcklEKSB7IHJldHVybiBzbi5HZXRGb3JtRnJvbUVkaXRvcklEKGFzRWRpdG9ySUQpOyB9O1xyXG4vL0dldHMgdGhlIHZhbHVlIG9mIHRoZSBib29sZWFuIGdhbWVzZXR0aW5nLiBSZXR1cm5zIC0xIGlmIGdtc3QgaXMgTm9uZSBvciBub3QgYSBib29sLlxyXG5leHBvcnQgdmFyIEdldEdhbWVTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChhc0dhbWVTZXR0aW5nKSB7XHJcbiAgICByZXR1cm4gc24uR2V0R2FtZVNldHRpbmdCb29sKGFzR2FtZVNldHRpbmcpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBHb2QgTW9kZSBpcyBlbmFibGVkXHJcbmV4cG9ydCB2YXIgR2V0R29kTW9kZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEdvZE1vZGUoKTsgfTtcclxuLy9HZXRzIGxvY2FsIGdyYXZpdHkgb2YgdGhlIGV4dGVyaW9yIHdvcmxkc3BhY2UvaW50ZXJpb3IgY2VsbC4gRGVmYXVsdCBncmF2aXR5IGlzIFswLjAsIDAuMCwgLTkuODFdXHJcbmV4cG9ydCB2YXIgR2V0TG9jYWxHcmF2aXR5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0TG9jYWxHcmF2aXR5KCk7IH07XHJcbi8vR2V0cyBob3cgbWFueSBhY3RvcnMgYXJlIGluIGhpZ2ggcHJvY2Vzc1xyXG5leHBvcnQgdmFyIEdldE51bUFjdG9yc0luSGlnaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldE51bUFjdG9yc0luSGlnaCgpOyB9O1xyXG4vL1JldHVybnMgYWxsIGFjdG9ycyB0aGF0IGFyZSBjdXJyZW50bHkgZm9sbG93aW5nIHRoZSBwbGF5ZXJcclxuZXhwb3J0IHZhciBHZXRQbGF5ZXJGb2xsb3dlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRQbGF5ZXJGb2xsb3dlcnMoKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgcGx1Z2luIGV4aXN0c1xyXG5leHBvcnQgdmFyIElzUGx1Z2luRm91bmQgPSBmdW5jdGlvbiAoYWtOYW1lKSB7XHJcbiAgICByZXR1cm4gc24uSXNQbHVnaW5Gb3VuZChha05hbWUpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBDQyBTdXJ2aXZhbCBNb2RlIGlzIGVuYWJsZWRcclxuZXhwb3J0IHZhciBJc1N1cnZpdmFsTW9kZUFjdGl2ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLklzU3Vydml2YWxNb2RlQWN0aXZlKCk7IH07XHJcbi8vU2V0cyBsb2NhbCBncmF2aXR5IChtcy0yKSBvZiB0aGUgZXh0ZXJpb3Igd29ybGRzcGFjZS9pbnRlcmlvciBjZWxsLlxyXG5leHBvcnQgdmFyIFNldExvY2FsR3Jhdml0eSA9IGZ1bmN0aW9uIChhZlhBeGlzLCBhZllBeGlzLCBhZlpBeGlzKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHkoYWZYQXhpcywgYWZZQXhpcywgYWZaQXhpcyk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0hBWkFSRFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIEhBWkFSRCBGTEFHU1xyXG4gICAgICAgIE5vbmUgPSAwXHJcbiAgICAgICAgUENPbmx5ID0gMHgwMDAwMDAwMVxyXG4gICAgICAgIEluaGVyaXREdXJhdGlvbiA9IDB4MDAwMDAwMDJcclxuICAgICAgICBBbGlnblRvTm9ybWFsID0gMHgwMDAwMDAwNFxyXG4gICAgICAgIEluaGVyaXRSYWRpdXMgPSAweDAwMDAwMDA4XHJcbiAgICAgICAgRHJvcFRvR3JvdW5kID0gMHgwMDAwMDAxMCAqL1xyXG4vL0dldHMgaGF6YXJkIGFydCBwYXRoLCBlZy4gXCJFZmZlY3RzL015SGF6YXJkQXJ0Lm5pZlwiXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkQXJ0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGFzc29jaWF0ZWQgSU1PRFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElNT0QgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElNT0QoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgSU1PRCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRJTU9EUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGltcGFjdCBkYXRhIHNldFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElQRFMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElQRFMoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpZmV0aW1lXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGlmZXRpbWUgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZExpZmV0aW1lKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaWdodFxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpZ2h0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRMaWdodChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGltaXRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaW1pdCA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZExpbWl0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGhhemFyZCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRSYWRpdXMoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgaGF6YXJkIHNvdW5kXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkU291bmQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFNvdW5kKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBzcGVsbFxyXG5leHBvcnQgdmFyIEdldEhhemFyZFNwZWxsID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRTcGVsbChha0hhemFyZCk7IH07XHJcbi8vR2V0cyB0YXJnZXQgaW50ZXJ2YWwgKGR1cmF0aW9uIGJldHdlZW4gY2FzdHMpXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFRhcmdldEludGVydmFsKGFrSGF6YXJkKTsgfTtcclxuLy9JcyBoYXphcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNIYXphcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzSGF6YXJkRmxhZ1NldChha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9DbGVhcnMgaGF6YXJkIGZsYWdcclxuZXhwb3J0IHZhciBDbGVhckhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJIYXphcmRGbGFnKGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGFydCBwYXRoLiBEb2VzIG5vdCB3b3JrIG9uIGFjdGl2ZSBoYXphcmRzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhc1BhdGgpIHsgcmV0dXJuIHNuLlNldEhhemFyZEFydChha0hhemFyZCwgYXNQYXRoKTsgfTtcclxuLy9TZXQgZmxhZ1xyXG5leHBvcnQgdmFyIFNldEhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0SGF6YXJkRmxhZyhha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy9TZXRzIElNT0RcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJTU9EID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lNT0QpIHsgcmV0dXJuIHNuLlNldEhhemFyZElNT0QoYWtIYXphcmQsIGFrSU1PRCk7IH07XHJcbi8vU2V0cyBJTU9EIHJhZGl1c1xyXG5leHBvcnQgdmFyIFNldEhhemFyZElNT0RSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBpbXBhY3QgZGF0YSBzZXRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJUERTID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lQRFMpIHsgcmV0dXJuIHNuLlNldEhhemFyZElQRFMoYWtIYXphcmQsIGFrSVBEUyk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGlmZXRpbWVcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaWZldGltZSA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZMaWZldGltZSkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGlmZXRpbWUoYWtIYXphcmQsIGFmTGlmZXRpbWUpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpZ2h0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGlnaHQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrTGlnaHQpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpZ2h0KGFrSGF6YXJkLCBha0xpZ2h0KTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaW1pdFxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpbWl0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUxpbWl0KSB7IHJldHVybiBzbi5TZXRIYXphcmRMaW1pdChha0hhemFyZCwgYWlMaW1pdCk7IH07XHJcbi8vU2V0cyBoYXphcmQgcmFkaXVzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0SGF6YXJkUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBoYXphcmQgc291bmRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRTb3VuZCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtTb3VuZCkgeyByZXR1cm4gc24uU2V0SGF6YXJkU291bmQoYWtIYXphcmQsIGFrU291bmQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIHNwZWxsXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkU3BlbGwgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrc3BlbGwpIHsgcmV0dXJuIHNuLlNldEhhemFyZFNwZWxsKGFrSGF6YXJkLCBha3NwZWxsKTsgfTtcclxuLy9TZXRzIGhhemFyZCBpbnRlcnZhbFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFRhcmdldEludGVydmFsID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZkludGVydmFsKSB7IHJldHVybiBzbi5TZXRIYXphcmRUYXJnZXRJbnRlcnZhbChha0hhemFyZCwgYWZJbnRlcnZhbCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xJR0hUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbGlnaHQgY29sb3IuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRDb2xvciA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7IHJldHVybiBzbi5HZXRMaWdodENvbG9yKGFrTGlnaHQpOyB9O1xyXG4vL0dldHMgbGlnaHQgZmFkZSByYW5nZS5cclxuZXhwb3J0IHZhciBHZXRMaWdodEZhZGUgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0RmFkZShha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodEZPVihha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGxpZ2h0IHJhZGl1cyAocmFkaXVzIGlzIGFjdHVhbGx5IGludCBidXQgY2hhbmdpbmcgdGhhdCB3b3VsZCBicmVhayBtb2RzIHNvIGZpeGVkIHRoYXQgaW4gc291cmNlKS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJhZGl1cyA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSYWRpdXMoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBsaWdodCBjb2xvciBhcyBSR0IgYXJyYXkgWzAtMjU1XS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJHQiA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSR0IoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBkZXB0aCBiaWFzLCByZXR1cm5zIDEgaWYgbm90IHNldC5cclxuZXhwb3J0IHZhciBHZXRMaWdodFNoYWRvd0RlcHRoQmlhcyA9IGZ1bmN0aW9uIChha0xpZ2h0T2JqZWN0KSB7IHJldHVybiBzbi5HZXRMaWdodFNoYWRvd0RlcHRoQmlhcyhha0xpZ2h0T2JqZWN0KTsgfTtcclxuLyoqIExJR0hUIFRZUEVTXHJcbiAgICAgICAgSGVtaVNoYWRvdyA9IDFcclxuICAgICAgICBPbW5pID0gMlxyXG4gICAgICAgIE9tbmlTaGFkb3cgPSAzXHJcbiAgICAgICAgU3BvdCA9IDRcclxuICAgICAgICBTcG90U2hhZG93ID0gNSAqL1xyXG4vL0dldCBsaWdodCB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRUeXBlID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFR5cGUoYWtMaWdodCk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBsaWdodCBjb2xvci5cclxuZXhwb3J0IHZhciBTZXRMaWdodENvbG9yID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKSB7IHJldHVybiBzbi5TZXRMaWdodENvbG9yKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGZhZGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRGYWRlID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldExpZ2h0RmFkZShha0xpZ2h0LCBhZlJhbmdlKTsgfTtcclxuLy9zZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmRk9WKSB7IHJldHVybiBzbi5TZXRMaWdodEZPVihha0xpZ2h0LCBhZkZPVik7IH07XHJcbi8vU2V0cyBsaWdodCByYWRpdXMgKG1pbmltdW0gbGlnaHQgcmFkaXVzIGlzIDE2KSAuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRSYWRpdXMgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0UmFkaXVzKGFrTGlnaHQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGNvbG9yIHVzaW5nIFJHQiBhcnJheSBbMC0yNTVdLiBBcnJheSBtdXN0IGNvbnRhaW4gMyBlbGVtZW50cyAocixnLGIpLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0UkdCID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFpUkdCKSB7IHJldHVybiBzbi5TZXRMaWdodFJHQihha0xpZ2h0LCBhaVJHQik7IH07XHJcbi8vc2V0cyBkZXB0aCBiaWFzIG9uIGxpZ2h0IHJlZmVyZW5jZS4gQ3JlYXRlcyBuZXcgZGVwdGggYmlhcyBleHRyYWRhdGEgb24gbGlnaHRzIHRoYXQgZG9uJ3QgaGF2ZSBpdCBzZXQuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMgPSBmdW5jdGlvbiAoYWtMaWdodE9iamVjdCwgYWZEZXB0aEJpYXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0U2hhZG93RGVwdGhCaWFzKGFrTGlnaHRPYmplY3QsIGFmRGVwdGhCaWFzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IHR5cGUuIERvZXMgbm90IHBlcnNpc3QgYmV0d2VlbiBzZXNzaW9ucy5cclxuZXhwb3J0IHZhciBTZXRMaWdodFR5cGUgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWlMaWdodFR5cGUpIHsgcmV0dXJuIHNuLlNldExpZ2h0VHlwZShha0xpZ2h0LCBhaUxpZ2h0VHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xPQ0FUSU9OXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldCBwYXJlbnQgbG9jYXRpb24uXHJcbmV4cG9ydCB2YXIgR2V0UGFyZW50TG9jYXRpb24gPSBmdW5jdGlvbiAoYWtMb2MpIHsgcmV0dXJuIHNuLkdldFBhcmVudExvY2F0aW9uKGFrTG9jKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXQgcGFyZW50IGxvY2F0aW9uLlxyXG5leHBvcnQgdmFyIFNldFBhcmVudExvY2F0aW9uID0gZnVuY3Rpb24gKGFrTG9jLCBha05ld0xvYykgeyByZXR1cm4gc24uU2V0UGFyZW50TG9jYXRpb24oYWtMb2MsIGFrTmV3TG9jKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTUFHSUMgRUZGRUNUU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS0tXHJcbi8vR2V0cyBhc3NvY2lhdGVkIGZvcm0gKExpZ2h0IGZvciBMaWdodCBzcGVsbHMsIEFjdG9yIGZvciBTdW1tb24gQ3JlYXR1cmUuLi4pLCBpZiBhbnlcclxuZXhwb3J0IHZhciBHZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBc3NvY2lhdGVkRm9ybShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIEVGRkVDVCBBUkNIRVRZUEVTXHJcbiAgICAgICAgVmFsdWVNb2QgPSAwXHJcbiAgICAgICAgU2NyaXB0ID0gMVxyXG4gICAgICAgIERpc3BlbCA9IDJcclxuICAgICAgICBDdXJlRGlzZWFzZSA9IDNcclxuICAgICAgICBBYnNvcmIgPSA0XHJcbiAgICAgICAgRHVhbFZhbHVlTW9kID0gNVxyXG4gICAgICAgIENhbG0gPSA2XHJcbiAgICAgICAgRGVtb3JhbGl6ZSA9IDdcclxuICAgICAgICBGcmVuenkgPSA4XHJcbiAgICAgICAgRGlzYXJtID0gOVxyXG4gICAgICAgIENvbW1hbmRTdW1tb25lZCA9IDEwXHJcbiAgICAgICAgSW52aXNpYmlsaXR5ID0gMTFcclxuICAgICAgICBMaWdodCA9IDEyXHJcbiAgICAgICAgRGFya25lc3MgPSAxM1xyXG4gICAgICAgIE5pZ2h0RXllID0gMTRcclxuICAgICAgICBMb2NrID0gMTVcclxuICAgICAgICBPcGVuID0gMTZcclxuICAgICAgICBCb3VuZFdlYXBvbiA9IDE3XHJcbiAgICAgICAgU3VtbW9uQ3JlYXR1cmUgPSAxOFxyXG4gICAgICAgIERldGVjdExpZmUgPSAxOVxyXG4gICAgICAgIFRlbGVraW5lc2lzID0gMjBcclxuICAgICAgICBQYXJhbHlzaXMgPSAyMVxyXG4gICAgICAgIFJlYW5pbWF0ZSA9IDIyXHJcbiAgICAgICAgU291bFRyYXAgPSAyM1xyXG4gICAgICAgIFR1cm5VbmRlYWQgPSAyNFxyXG4gICAgICAgIEd1aWRlID0gMjVcclxuICAgICAgICBXZXJld29sZkZlZWQgPSAyNlxyXG4gICAgICAgIEN1cmVQYXJhbHlzaXMgPSAyN1xyXG4gICAgICAgIEN1cmVBZGRpY3Rpb24gPSAyOFxyXG4gICAgICAgIEN1cmVQb2lzb24gPSAyOVxyXG4gICAgICAgIENvbmN1c3Npb24gPSAzMFxyXG4gICAgICAgIFZhbHVlQW5kUGFydHMgPSAzMVxyXG4gICAgICAgIEFjY3VtdWxhdGVNYWduaXR1ZGUgPSAzMlxyXG4gICAgICAgIFN0YWdnZXIgPSAzM1xyXG4gICAgICAgIFBlYWtWYWx1ZU1vZCA9IDM0XHJcbiAgICAgICAgQ2xvYWsgPSAzNVxyXG4gICAgICAgIFdlcmV3b2xmID0gMzZcclxuICAgICAgICBTbG93VGltZSA9IDM3XHJcbiAgICAgICAgUmFsbHkgPSAzOFxyXG4gICAgICAgIEVuaGFuY2VXZWFwb24gPSAzOVxyXG4gICAgICAgIFNwYXduSGF6YXJkID0gNDBcclxuICAgICAgICBFdGhlcmVhbGl6ZSA9IDQxXHJcbiAgICAgICAgQmFuaXNoID0gNDJcclxuICAgICAgICBTcGF3blNjcmlwdGVkUmVmID0gNDNcclxuICAgICAgICBEaXNndWlzZSA9IDQ0XHJcbiAgICAgICAgR3JhYkFjdG9yID0gNDVcclxuICAgICAgICBWYW1waXJlTG9yZCA9IDQ2ICovXHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIGludCAoMC00NikuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIFN0cmluZy5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyhha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIHByaW1hcnkgYWN0b3IgdmFsdWUgYXMgc3RyaW5nLCBpZiBhbnkgKEZyb3N0UmVzaXN0LCBTcGVlZE11bHQpLlxyXG5leHBvcnQgdmFyIEdldFByaW1hcnlBY3RvclZhbHVlID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldFByaW1hcnlBY3RvclZhbHVlKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgc2Vjb25kYXJ5IGFjdG9yIHZhbHVlIGFzIHN0cmluZywgaWYgYW55LlxyXG5leHBvcnQgdmFyIEdldFNlY29uZGFyeUFjdG9yVmFsdWUgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0U2Vjb25kYXJ5QWN0b3JWYWx1ZShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIE1HRUYgU09VTkQgVFlQRVNcclxuICAgICAgICBEcmF3L1NoZWF0aGUgPSAwXHJcbiAgICAgICAgQ2hhcmdlID0gMVxyXG4gICAgICAgIFJlYWR5ID0gMlxyXG4gICAgICAgIFJlbGVhc2UgPSAzXHJcbiAgICAgICAgQ29uY2VudHJhdGlvbiBDYXN0IExvb3AgPSA0XHJcbiAgICAgICAgT24gSGl0ID0gNSAqL1xyXG4vL0dldHMgU291bmQgYXR0YWNoZWQgdG8gaW5kZXggb2YgU291bmQgdHlwZSBzcGVjaWZpZWQgaW4gbWFnaWMgZWZmZWN0LlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291bmQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWlUeXBlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VuZChha01hZ2ljRWZmZWN0LCBhaVR5cGUpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgYXNzb2NpYXRlZCBmb3JtIChMaWdodCBmb3IgTGlnaHQgc3BlbGxzLCBBY3RvciBmb3IgU3VtbW9uIENyZWF0dXJlLi4uKS4gQ2FuIGJlIE5vbmVcclxuZXhwb3J0IHZhciBTZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBha0Zvcm0pIHsgcmV0dXJuIHNuLlNldEFzc29jaWF0ZWRGb3JtKGFrTWFnaWNFZmZlY3QsIGFrRm9ybSk7IH07XHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIGluZGV4IG9mIFNvdW5kIHR5cGUgc3BlY2lmaWVkIGluIG1hZ2ljIGVmZmVjdC5cclxuZXhwb3J0IHZhciBTZXRNYWdpY0VmZmVjdFNvdW5kID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFrU291bmREZXNjcmlwdG9yLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldE1hZ2ljRWZmZWN0U291bmQoYWtNYWdpY0VmZmVjdCwgYWtTb3VuZERlc2NyaXB0b3IsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL09CSkVDVFJFRkVSRU5DRVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBpbnZlbnRvcnkgaXRlbXMgdG8gYXJyYXksIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEFsbEl0ZW1zVG9BcnJheSA9IGZ1bmN0aW9uIChha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0FycmF5KGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgYWxsIGludmVudG9yeSBpdGVtcyB0byBmb3JtbGlzdCwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkQWxsSXRlbXNUb0xpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0xpc3QoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGludmVudG9yeSBpdGVtcyBtYXRjaGluZyBmb3JtdHlwZSB0byBhcnJheSwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkSXRlbXNPZlR5cGVUb0FycmF5ID0gZnVuY3Rpb24gKGFrUmVmLCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRJdGVtc09mVHlwZVRvQXJyYXkoYWtSZWYsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBpbnZlbnRvcnkgaXRlbXMgbWF0Y2hpbmcgZm9ybXR5cGUgdG8gZm9ybWxpc3QsIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEl0ZW1zT2ZUeXBlVG9MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEl0ZW1zT2ZUeXBlVG9MaXN0KGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vRmluZHMgYWxsIHJlZmVyZW5jZXMgb2YgZm9ybSB0eXBlIGluIGxvYWRlZCBjZWxscywgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc09mRm9ybVR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGZvcm1UeXBlLCBhZlJhZGl1cykge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzT2ZGb3JtVHlwZShha1JlZiwgZm9ybVR5cGUsIGFmUmFkaXVzKTtcclxufTtcclxuLy9GaW5kIGFsbCByZWZlcmVuY2VzIHdpdGgga2V5d29yZCBpbiBsb2FkZWQgY2VsbHMsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNXaXRoS2V5d29yZCA9IGZ1bmN0aW9uIChha1JlZiwga2V5d29yZE9yTGlzdCwgYWZSYWRpdXMsIGFiTWF0Y2hBbGwpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc1dpdGhLZXl3b3JkKGFrUmVmLCBrZXl3b3JkT3JMaXN0LCBhZlJhZGl1cywgYWJNYXRjaEFsbCk7XHJcbn07XHJcbi8vRmluZCBhbGwgcmVmZXJlbmNlcyBtYXRjaGluZyBiYXNlIGZvcm0vaW4gZm9ybWxpc3QsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNPZlR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrRm9ybU9yTGlzdCwgYWZSYWRpdXMpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc09mVHlwZShha1JlZiwgYWtGb3JtT3JMaXN0LCBhZlJhZGl1cyk7XHJcbn07XHJcbi8vR2V0cyB0aGUgZmlyc3QgaXRlbSBpbiBpbnZlbnRvcnkgdGhhdCBleGlzdHMgaW4gZm9ybWxpc3QuXHJcbmV4cG9ydCB2YXIgRmluZEZpcnN0SXRlbUluTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0KSB7IHJldHVybiBzbi5GaW5kRmlyc3RJdGVtSW5MaXN0KGFrUmVmLCBha0xpc3QpOyB9O1xyXG4vL0dldHMgYWN0aXZhdGUgY2hpbGRyZW4gLSBzZWUgSXNBY3RpdmF0ZUNoaWxkXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0aXZhdGVDaGlsZHJlbihha1JlZik7IH07XHJcbi8vR2V0cyBjdXJyZW50IGdhbWVicnlvIGFuaW1hdGlvblxyXG5leHBvcnQgdmFyIEdldEFjdGl2ZUdhbWVicnlvQW5pbWF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RpdmVHYW1lYnJ5b0FuaW1hdGlvbihha1JlZik7IH07XHJcbi8vR2V0cyBhY3RvciByZXNwb25zaWJsZSBmb3Igb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFjdG9yQ2F1c2UgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdG9yQ2F1c2UoYWtSZWYpOyB9O1xyXG4vL0dldCBhbGwgYXJ0IG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWxsQXJ0T2JqZWN0cyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWxsQXJ0T2JqZWN0cyhha1JlZik7IH07XHJcbi8vR2V0IGFsbCBlZmZlY3Qgc2hhZGVycyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBbGxFZmZlY3RTaGFkZXJzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBbGxFZmZlY3RTaGFkZXJzKGFrUmVmKTsgfTtcclxuLy9HZXRzIGNsb3Nlc3QgYWN0b3IgdG8gcmVmICh3aXRob3V0IHJldHVybmluZyB0aGUgcmVmZXJlbmNlIGl0c2VsZikuXHJcbmV4cG9ydCB2YXIgR2V0Q2xvc2VzdEFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWJJZ25vcmVQbGF5ZXIpIHsgcmV0dXJuIHNuLkdldENsb3Nlc3RBY3RvckZyb21SZWYoYWtSZWYsIGFiSWdub3JlUGxheWVyKTsgfTtcclxuLy9HZXRzIGR1cmF0aW9uIG9mIHRoZSBlZmZlY3RzaGFkZXIgb24gdGhlIHJlZi5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJEdXJhdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIpIHsgcmV0dXJuIHNuLkdldEVmZmVjdFNoYWRlckR1cmF0aW9uKGFrUmVmLCBha1NoYWRlcik7IH07XHJcbi8vR2V0cyB0aGUgZG9vciB3aGljaCBpcyBsaW5rZWQgdG8gdGhpcyBsb2FkIGRvb3IuXHJcbmV4cG9ydCB2YXIgR2V0RG9vckRlc3RpbmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXREb29yRGVzdGluYXRpb24oYWtSZWYpOyB9O1xyXG4vL0dldHMgYWxsIHJlZnMgbGlua2VkIHRvIGFrUmVmLiBLZXl3b3JkIG9wdGlvbmFsLlxyXG5leHBvcnQgdmFyIEdldExpbmtlZENoaWxkcmVuID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLkdldExpbmtlZENoaWxkcmVuKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL0dldHMgdGhlIHNvdXJjZSBvZiB0aGUgbWFnaWMgZWZmZWN0IChzcGVsbC9lbmNoYW50bWVudC9zY3JvbGwgZXRjKSBhbmQgdGhlIGNhc3Rlci4gTWFnaWMgZWZmZWN0IG11c3QgYmUgcHJlc2VudCBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291cmNlID0gZnVuY3Rpb24gKGFrUmVmLCBha0VmZmVjdCkgeyByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VyY2UoYWtSZWYsIGFrRWZmZWN0KTsgfTtcclxuLyoqIE1BVEVSSUFMIFRZUEVTIC0gU3RyaW5nXHJcbiAgICAgICAgU3RvbmVCcm9rZW5cclxuICAgICAgICBCbG9ja0JsYWRlMUhhbmRcclxuICAgICAgICBNZWF0XHJcbiAgICAgICAgQ2FycmlhZ2VXaGVlbFxyXG4gICAgICAgIE1ldGFsTGlnaHRcclxuICAgICAgICBXb29kTGlnaHRcclxuICAgICAgICBTbm93XHJcbiAgICAgICAgR3JhdmVsXHJcbiAgICAgICAgQ2hhaW5NZXRhbFxyXG4gICAgICAgIEJvdHRsZVxyXG4gICAgICAgIFdvb2RcclxuICAgICAgICBBc2hcclxuICAgICAgICBTa2luXHJcbiAgICAgICAgQmxvY2tCbHVudFxyXG4gICAgICAgIERMQzFEZWVyU2tpblxyXG4gICAgICAgIEluc2VjdFxyXG4gICAgICAgIEJhcnJlbFxyXG4gICAgICAgIENlcmFtaWNNZWRpdW1cclxuICAgICAgICBCYXNrZXRcclxuICAgICAgICBJY2VcclxuICAgICAgICBHbGFzc1N0YWlyc1xyXG4gICAgICAgIFN0b25lU3RhaXJzXHJcbiAgICAgICAgV2F0ZXJcclxuICAgICAgICBEcmF1Z3JTa2VsZXRvblxyXG4gICAgICAgIEJsYWRlMUhhbmRcclxuICAgICAgICBCb29rXHJcbiAgICAgICAgQ2FycGV0XHJcbiAgICAgICAgTWV0YWxTb2xpZFxyXG4gICAgICAgIEF4ZTFIYW5kXHJcbiAgICAgICAgQmxvY2tCbGFkZTJIYW5kXHJcbiAgICAgICAgT3JnYW5pY0xhcmdlXHJcbiAgICAgICAgQW11bGV0XHJcbiAgICAgICAgV29vZFN0YWlyc1xyXG4gICAgICAgIE11ZFxyXG4gICAgICAgIEJvdWxkZXJTbWFsbFxyXG4gICAgICAgIFNub3dTdGFpcnNcclxuICAgICAgICBTdG9uZUhlYXZ5XHJcbiAgICAgICAgRHJhZ29uU2tlbGV0b25cclxuICAgICAgICBUcmFwXHJcbiAgICAgICAgQm93c1N0YXZlc1xyXG4gICAgICAgIEFsZHVpblxyXG4gICAgICAgIEJsb2NrQm93c1N0YXZlc1xyXG4gICAgICAgIFdvb2RBc1N0YWlyc1xyXG4gICAgICAgIFN0ZWVsR3JlYXRTd29yZFxyXG4gICAgICAgIEdyYXNzXHJcbiAgICAgICAgQm91bGRlckxhcmdlXHJcbiAgICAgICAgU3RvbmVBc1N0YWlyc1xyXG4gICAgICAgIEJsYWRlMkhhbmRcclxuICAgICAgICBCb3R0bGVTbWFsbFxyXG4gICAgICAgIEJvbmVBY3RvclxyXG4gICAgICAgIFNhbmRcclxuICAgICAgICBNZXRhbEhlYXZ5XHJcbiAgICAgICAgRExDMVNhYnJlQ2F0UGVsdFxyXG4gICAgICAgIEljZUZvcm1cclxuICAgICAgICBEcmFnb25cclxuICAgICAgICBCbGFkZTFIYW5kU21hbGxcclxuICAgICAgICBTa2luU21hbGxcclxuICAgICAgICBQb3RzUGFuc1xyXG4gICAgICAgIFNraW5Ta2VsZXRvblxyXG4gICAgICAgIEJsdW50MUhhbmRcclxuICAgICAgICBTdG9uZVN0YWlyc0Jyb2tlblxyXG4gICAgICAgIFNraW5MYXJnZVxyXG4gICAgICAgIE9yZ2FuaWNcclxuICAgICAgICBCb25lXHJcbiAgICAgICAgV29vZEhlYXZ5XHJcbiAgICAgICAgQ2hhaW5cclxuICAgICAgICBEaXJ0XHJcbiAgICAgICAgR2hvc3RcclxuICAgICAgICBTa2luTWV0YWxMYXJnZVxyXG4gICAgICAgIEJsb2NrQXhlXHJcbiAgICAgICAgQXJtb3JMaWdodFxyXG4gICAgICAgIFNoaWVsZExpZ2h0XHJcbiAgICAgICAgQ29pblxyXG4gICAgICAgIEJsb2NrQmx1bnQySGFuZFxyXG4gICAgICAgIFNoaWVsZEhlYXZ5XHJcbiAgICAgICAgQXJtb3JIZWF2eVxyXG4gICAgICAgIEFycm93XHJcbiAgICAgICAgR2xhc3NcclxuICAgICAgICBTdG9uZVxyXG4gICAgICAgIFdhdGVyUHVkZGxlXHJcbiAgICAgICAgQ2xvdGhcclxuICAgICAgICBTa2luTWV0YWxTbWFsbFxyXG4gICAgICAgIFdhcmRcclxuICAgICAgICBXZWJcclxuICAgICAgICBUcmFpbGVyU3RlZWxTd29yZFxyXG4gICAgICAgIEJsdW50MkhhbmRcclxuICAgICAgICBETEMxU3dpbmdpbmdCcmlkZ2VcclxuICAgICAgICBCb3VsZGVyTWVkaXVtICovXHJcbi8vR2V0cyB0aGUgc3BlY2lmaWVkIGNvbGxpc2lvbiBzaGFwZSdzIGhhdm9rIG1hdGVyaWFsIHR5cGVzIGFzIHN0cmluZyBhcnJheS4gUmV0dXJucyB0aGUgZmlyc3QgbWF0ZXJpYWwgdHlwZSBpZiBub2RlTmFtZSBpcyBlbXB0eVxyXG5leHBvcnQgdmFyIEdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSkge1xyXG4gICAgaWYgKGFzTm9kZU5hbWUgPT09IHZvaWQgMCkgeyBhc05vZGVOYW1lID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldE1hdGVyaWFsVHlwZShha1JlZiwgYXNOb2RlTmFtZSk7XHJcbn07XHJcbi8vR2V0cyB0aGUgbW90aW9uIHR5cGUgb2YgdGhlIG9iamVjdCAoc2VlIHZhbmlsbGEgU2V0TW90aW9uVHlwZSBmb3IgdHlwZXMpLiBSZXR1cm5zIC0xIGlmIDNkIGlzIG5vdCBsb2FkZWRcclxuZXhwb3J0IHZhciBHZXRNb3Rpb25UeXBlID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRNb3Rpb25UeXBlKGFrUmVmKTsgfTtcclxuLy9HZXRzIHJhbmRvbSBhY3RvciBuZWFyIHJlZiAod2l0aG91dCByZXR1cm5pbmcgdGhlIHJlZmVyZW5jZSBpdHNlbGYpLlxyXG5leHBvcnQgdmFyIEdldFJhbmRvbUFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWZSYWRpdXMsIGFiSWdub3JlUGxheWVyKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UmFuZG9tQWN0b3JGcm9tUmVmKGFrUmVmLCBhZlJhZGl1cywgYWJJZ25vcmVQbGF5ZXIpO1xyXG59O1xyXG4vL0dldHMgcXVlc3QgaXRlbXMgaW4gdGhpcyByZWYncyBpbnZlbnRvcnksIGlmIGFueVxyXG5leHBvcnQgdmFyIEdldFF1ZXN0SXRlbXMgPSBmdW5jdGlvbiAoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFF1ZXN0SXRlbXMoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCk7XHJcbn07XHJcbi8vR2V0IGFsbCBhbGlhc2VzIGNvbnRhaW5pbmcgdGhpcyByZWZcclxuZXhwb3J0IHZhciBHZXRSZWZBbGlhc2VzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRSZWZBbGlhc2VzKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzdG9yZWQgc291bCBpbiBhIHNvdWxnZW0gb2JqZWN0cmVmZXJlbmNlXHJcbmV4cG9ydCB2YXIgR2V0U3RvcmVkU291bFNpemUgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldFN0b3JlZFNvdWxTaXplKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgYXJ0IG9iamVjdCAoYXR0YWNoZWQgdXNpbmcgdmlzdWFsIGVmZmVjdHMpIG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgSGFzQXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FydE9iamVjdCwgYWJBY3RpdmUpIHtcclxuICAgIGlmIChhYkFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiQWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5IYXNBcnRPYmplY3QoYWtSZWYsIGFrQXJ0T2JqZWN0LCBhYkFjdGl2ZSk7XHJcbn07XHJcbi8vUmV0dXJucyB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcyBvZiB0aGUgc3BlY2lmaWVkIGVmZmVjdCBzaGFkZXIgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBIYXNFZmZlY3RTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyLCBhYkFjdGl2ZSkge1xyXG4gICAgaWYgKGFiQWN0aXZlID09PSB2b2lkIDApIHsgYWJBY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkhhc0VmZmVjdFNoYWRlcihha1JlZiwgYWtTaGFkZXIsIGFiQWN0aXZlKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBoYXMgbmlleHRyYWRhdGEgKGF0dGFjaGVkIHRvIHJvb3QgM0Qgbm9kZSkuIFBhcnRpYWwgbWF0Y2hlcyBhY2NlcHRlZC5cclxuZXhwb3J0IHZhciBIYXNOaUV4dHJhRGF0YSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOYW1lKSB7IHJldHVybiBzbi5IYXNOaUV4dHJhRGF0YShha1JlZiwgYXNOYW1lKTsgfTtcclxuLy9JcyBkb29yIGEgbG9hZCBkb29yP1xyXG5leHBvcnQgdmFyIElzTG9hZERvb3IgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLklzTG9hZERvb3IoYWtSZWYpOyB9O1xyXG4vL0lzIGEgcXVlc3Qgb2JqZWN0P1xyXG5leHBvcnQgdmFyIElzUXVlc3RJdGVtID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5Jc1F1ZXN0SXRlbShha1JlZik7IH07XHJcbi8vSXMgYSBWSVAgKGFjdG9yIHRoYXQgaXMgbmVlZGVkIGJ5IHF1ZXN0KT9cclxuZXhwb3J0IHZhciBJc1ZJUCA9IGZ1bmN0aW9uIChha1JlZikge1xyXG4gICAgcmV0dXJuIHNuLklzVklQKGFrUmVmKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BcHBsaWVzIG1hdGVyaWFsIHNoYWRlciB0byByZWZlcmVuY2UgKGRvZXNuJ3QgaGF2ZSB0byBiZSBzdGF0aWMpXHJcbmV4cG9ydCB2YXIgQXBwbHlNYXRlcmlhbFNoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWtNYXRPYmplY3QsIGRpcmVjdGlvbmFsVGhyZXNob2xkQW5nbGUpIHtcclxuICAgIHJldHVybiBzbi5BcHBseU1hdGVyaWFsU2hhZGVyKGFrUmVmLCBha01hdE9iamVjdCwgZGlyZWN0aW9uYWxUaHJlc2hvbGRBbmdsZSk7XHJcbn07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgQWRkS2V5d29yZFRvRm9ybS5cclxuZXhwb3J0IHZhciBBZGRLZXl3b3JkVG9SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvUmVmKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL1NuYXBzIHRoZSBvYmplY3QgdG8gdGhlIG5lYXJlc3QgbmF2bWVzaCBwb2ludCBjbG9zZXN0IHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjZWxsLlxyXG5leHBvcnQgdmFyIE1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLk1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24oYWtSZWYpOyB9O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIFJlbW92ZUtleXdvcmRGcm9tRm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkRnJvbVJlZihha1JlZiwgYWtLZXl3b3JkKTsgfTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBSZXBsYWNlS2V5d29yZE9uRm9ybS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSkgeyByZXR1cm4gc24uUmVwbGFjZUtleXdvcmRPblJlZihha1JlZiwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpOyB9O1xyXG4vL1BsYXlzIGRlYnVnIHNoYWRlciBvbiB0aGUgcmVmZXJlbmNlLCB3aXRoIG5vcm1hbGlzZWQgUkdCQSBjb2xvciAob3IgZnVsbHkgd2hpdGUgaWYgZW1wdHkpXHJcbmV4cG9ydCB2YXIgUGxheURlYnVnU2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBhZlJHQkEpIHsgcmV0dXJuIHNuLlBsYXlEZWJ1Z1NoYWRlcihha1JlZiwgYWZSR0JBKTsgfTtcclxuLy9TY2FsZXMgbm9kZSAmIGNvbGxpc2lvbiAoYmhrQm94U2hhcGUsIGJoa1NwaGVyZVNoYXBlKS4gRW50aXJlIG5pZiB3aWxsIGJlIHNjYWxlZCBpZiBzdHJpbmcgaXMgZW1wdHkuIENvbGxpc2lvbiBoYXMgdG8gYmUgZGlyZWN0bHkgYXR0YWNoZWQgdG8gbmFtZWQgbm9kZXMuXHJcbi8vQWRkcyBcIlBPM19TQ0FMRVwiIG5pZXh0cmFkYXRhIHRvIHJvb3Qgbm9kZS5cclxuZXhwb3J0IHZhciBTY2FsZU9iamVjdDNEID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKSB7IHJldHVybiBzbi5TY2FsZU9iamVjdDNEKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKTsgfTtcclxuLy9TZXRzIHRoZSBiYXNlIG9iamVjdCBvZiB0aGlzIHJlZmVyZW5jZSBhbmQgcmVsb2FkcyAzRFxyXG5leHBvcnQgdmFyIFNldEJhc2VPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQmFzZU9iamVjdCkgeyByZXR1cm4gc24uU2V0QmFzZU9iamVjdChha1JlZiwgYWtCYXNlT2JqZWN0KTsgfTtcclxuLyoqIENPTExJU0lPTiBMQVlFUlNcclxuICAgICAgICBrVW5pZGVudGlmaWVkID0gMCxcclxuICAgICAgICBrU3RhdGljID0gMSxcclxuICAgICAgICBrQW5pbVN0YXRpYyA9IDIsXHJcbiAgICAgICAga1RyYW5zcGFyZW50ID0gMyxcclxuICAgICAgICBrQ2x1dHRlciA9IDQsXHJcbiAgICAgICAga1dlYXBvbiA9IDUsXHJcbiAgICAgICAga1Byb2plY3RpbGUgPSA2LFxyXG4gICAgICAgIGtTcGVsbCA9IDcsXHJcbiAgICAgICAga0JpcGVkID0gOCxcclxuICAgICAgICBrVHJlZXMgPSA5LFxyXG4gICAgICAgIGtQcm9wcyA9IDEwLFxyXG4gICAgICAgIGtXYXRlciA9IDExLFxyXG4gICAgICAgIGtUcmlnZ2VyID0gMTIsXHJcbiAgICAgICAga1RlcnJhaW4gPSAxMyxcclxuICAgICAgICBrVHJhcCA9IDE0LFxyXG4gICAgICAgIGtOb25Db2xsaWRhYmxlID0gMTUsXHJcbiAgICAgICAga0Nsb3VkVHJhcCA9IDE2LFxyXG4gICAgICAgIGtHcm91bmQgPSAxNyxcclxuICAgICAgICBrUG9ydGFsID0gMTgsXHJcbiAgICAgICAga0RlYnJpc1NtYWxsID0gMTksXHJcbiAgICAgICAga0RlYnJpc0xhcmdlID0gMjAsXHJcbiAgICAgICAga0Fjb3VzdGljU3BhY2UgPSAyMSxcclxuICAgICAgICBrQWN0b3Jab25lID0gMjIsXHJcbiAgICAgICAga1Byb2plY3RpbGVab25lID0gMjMsXHJcbiAgICAgICAga0dhc1RyYXAgPSAyNCxcclxuICAgICAgICBrU2hlbGxDYXN0aW5nID0gMjUsXHJcbiAgICAgICAga1RyYW5zcGFyZW50V2FsbCA9IDI2LFxyXG4gICAgICAgIGtJbnZpc2libGVXYWxsID0gMjcsXHJcbiAgICAgICAga1RyYW5zcGFyZW50U21hbGxBbmltID0gMjgsXHJcbiAgICAgICAga0NsdXR0ZXJMYXJnZSA9IDI5LFxyXG4gICAgICAgIGtDaGFyQ29udHJvbGxlciA9IDMwLFxyXG4gICAgICAgIGtTdGFpckhlbHBlciA9IDMxLFxyXG4gICAgICAgIGtEZWFkQmlwID0gMzIsXHJcbiAgICAgICAga0JpcGVkTm9DQyA9IDMzLFxyXG4gICAgICAgIGtBdm9pZEJveCA9IDM0LFxyXG4gICAgICAgIGtDb2xsaXNpb25Cb3ggPSAzNSxcclxuICAgICAgICBrQ2FtZXJhU3BoZXJlID0gMzYsXHJcbiAgICAgICAga0Rvb3JEZXRlY3Rpb24gPSAzNyxcclxuICAgICAgICBrQ29uZVByb2plY3RpbGUgPSAzOCxcclxuICAgICAgICBrQ2FtZXJhID0gMzksXHJcbiAgICAgICAga0l0ZW1QaWNrZXIgPSA0MCxcclxuICAgICAgICBrTE9TID0gNDEsXHJcbiAgICAgICAga1BhdGhpbmdQaWNrID0gNDIsXHJcbiAgICAgICAga1VudXNlZDAgPSA0MyxcclxuICAgICAgICBrVW51c2VkMSA9IDQ0LFxyXG4gICAgICAgIGtTcGVsbEV4cGxvc2lvbiA9IDQ1LFxyXG4gICAgICAgIGtEcm9wcGluZ1BpY2sgPSA0NiAqL1xyXG4vL1NldHMgb2JqZWN0IDNEIHJvb3Qgb3Igc3BlY2lmaWVkIG5vZGUncyBjb2xsaXNpb24gbGF5ZXJcclxuZXhwb3J0IHZhciBTZXRDb2xsaXNpb25MYXllciA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSwgYWlDb2xsaXNpb25MYXllcikgeyByZXR1cm4gc24uU2V0Q29sbGlzaW9uTGF5ZXIoYWtSZWYsIGFzTm9kZU5hbWUsIGFpQ29sbGlzaW9uTGF5ZXIpOyB9O1xyXG4vL1NldHMgdGhlIGRvb3IgYXMgdGhlIG5ldyBsaW5rZWQgZG9vclxyXG5leHBvcnQgdmFyIFNldERvb3JEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtEb29yKSB7IHJldHVybiBzbi5TZXREb29yRGVzdGluYXRpb24oYWtSZWYsIGFrRG9vcik7IH07XHJcbi8vU2V0cyBlZmZlY3RzaGFkZXIgZHVyYXRpb24uIEludGVybmFsIGR1cmF0aW9uIGlzIHNldCB3aGVuIHRoZSBlZmZlY3RzaGFkZXIgYmVnaW5zIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2l0aCB0aW1lLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckR1cmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlciwgYWZUaW1lLCBhYkFic29sdXRlKSB7IHJldHVybiBzbi5TZXRFZmZlY3RTaGFkZXJEdXJhdGlvbihha1JlZiwgYWtTaGFkZXIsIGFmVGltZSwgYWJBYnNvbHV0ZSk7IH07XHJcbi8vU2V0cyBsaW5rZWQgcmVmLiBQYXNzIE5vbmUgaW50byBha1RhcmdldFJlZiB0byB1bnNldCB0aGUgbGlua2VkIHJlZi5cclxuZXhwb3J0IHZhciBTZXRMaW5rZWRSZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrVGFyZ2V0UmVmLCBha0tleXdvcmQpIHtcclxuICAgIGlmIChha0tleXdvcmQgPT09IHZvaWQgMCkgeyBha0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uU2V0TGlua2VkUmVmKGFrUmVmLCBha1RhcmdldFJlZiwgYWtLZXl3b3JkKTtcclxufTtcclxuLy9TZXRzIGhhdm9rIG1hdGVyaWFsIHR5cGUuIFVzZSBvbGRNYXRlcmlhbCBzdHJpbmcgdG8gc2VsZWN0IHdoYXQgbWF0ZXJpYWwgeW91IHdhbnQgdG8gY2hhbmdlIGZyb20gdG8gKGVnLiBmcm9tIHN0b25lIHRvIHdvb2QpLCBhbmQgbm9kZU5hbWUgdG8gYXBwbHkgaXQgdG8gdGhlIHNwZWNpZmljIG5vZGUuXHJcbi8vSWYgYm90aCBhcmUgZW1wdHksIGV2ZXJ5IGNvbGxpc2lvbiBtYXRlcmlhbCB3aWxsIGJlIHNldC5cclxuZXhwb3J0IHZhciBTZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpIHtcclxuICAgIGlmIChhc09sZE1hdGVyaWFsID09PSB2b2lkIDApIHsgYXNPbGRNYXRlcmlhbCA9IFwiXCI7IH1cclxuICAgIGlmIChhc05vZGVOYW1lID09PSB2b2lkIDApIHsgYXNOb2RlTmFtZSA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5TZXRNYXRlcmlhbFR5cGUoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpO1xyXG59O1xyXG4vL0NvcGllcyBza2luIHRpbnQgY29sb3IgZnJvbSBhY3RvcmJhc2UgdG8gYm9keXBhcnRzIG5pZlxyXG5leHBvcnQgdmFyIFNldHVwQm9keVBhcnRHZW9tZXRyeSA9IGZ1bmN0aW9uIChha1JlZiwgYWtBY3RvcikgeyByZXR1cm4gc24uU2V0dXBCb2R5UGFydEdlb21ldHJ5KGFrUmVmLCBha0FjdG9yKTsgfTtcclxuLyoqIFNIQURFUiBUWVBFU1xyXG4gICAgICAgIGtEZWZhdWx0ID0gMFxyXG4gICAgICAgIGtFbnZpcm9ubWVudE1hcCA9IDFcclxuICAgICAgICBrR2xvd01hcCA9IDJcclxuICAgICAgICBrUGFyYWxsYXggPSAzXHJcbiAgICAgICAga0ZhY2VHZW4gPSA0XHJcbiAgICAgICAga0ZhY2VHZW5SR0JUaW50ID0gNVxyXG4gICAgICAgIGtIYWlyVGludCA9IDZcclxuICAgICAgICBrUGFyYWxsYXhPY2MgPSA3XHJcbiAgICAgICAga011bHRpVGV4TGFuZCA9IDhcclxuICAgICAgICBrTE9ETGFuZCA9IDlcclxuICAgICAgICBrTXVsdGlsYXllclBhcmFsbGF4ID0gMTFcclxuICAgICAgICBrVHJlZUFuaW0gPSAxMlxyXG4gICAgICAgIGtNdWx0aUluZGV4VHJpU2hhcGVTbm93ID0gMTRcclxuICAgICAgICBrTE9ET2JqZWN0c0hEID0gMTVcclxuICAgICAgICBrRXllID0gMTZcclxuICAgICAgICBrQ2xvdWQgPSAxN1xyXG4gICAgICAgIGtMT0RMYW5kTm9pc2UgPSAxOFxyXG4gICAgICAgIGtNdWx0aVRleExhbmRMT0RCbGVuZCA9IDE5ICovXHJcbi8vc2V0cyB0aGUgcmVmJ3Mgc2hhZGVyIG1hdGVyaWFsIHR5cGUgaWUuIGRlZmF1bHQgdG8gY3ViZW1hcFxyXG4vL3RlbXBsYXRlIG5lZWRzIHRvIGJlIGxvYWRlZFxyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIHJlZmVyZW5jZSdzIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkIHVzaW5nIHRoZSB0ZW1wbGF0ZSdzIHRleHR1cmVzZXQvL1xyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAwLTkgdGhlIHRlbXBsYXRlJ3MgdGV4dHVyZXNldCBpcyBzdGlsbCBhcHBsaWVkIGJ1dCByZWZlcmVuY2UncyB0ZXh0dXJlIGF0IHRoYXQgaW5kZXggd2lsbCB0YWtlIHByaW9yaXR5LlxyXG4vL29wdGlvbmFsIGRpZmZ1c2UgcGF0aCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgc2hhcGVzIHRvIGFwcGx5IHRoZSBzaGFkZXIgdG8sIHBhcnRpYWwgbWF0Y2hlcyBhcmUgYWNjZXB0ZWQgbGlrZSBcIkRyYXVnci5kZHNcIlxyXG4vL2xpbWl0YXRpb25zIC0gY2Fubm90IGJlIHVzZWQgb24gZ2VvbWV0cnkgd2l0aCBubyBub3JtYWxzIChpZS4gYm9keSBza2luIG1lc2hlcylcclxuZXhwb3J0IHZhciBTZXRTaGFkZXJUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBha1RlbXBsYXRlLCBhc0RpZmZ1c2VQYXRoLCBhaVNoYWRlclR5cGUsIGFpVGV4dHVyZVR5cGUsIGFiTm9XZWFwb25zLCBhYk5vQWxwaGFQcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIHNuLlNldFNoYWRlclR5cGUoYWtSZWYsIGFrVGVtcGxhdGUsIGFzRGlmZnVzZVBhdGgsIGFpU2hhZGVyVHlwZSwgYWlUZXh0dXJlVHlwZSwgYWJOb1dlYXBvbnMsIGFiTm9BbHBoYVByb3BlcnR5KTtcclxufTtcclxuLy9TdG9wcyBBTEwgZWZmZWN0IHNoYWRlcnMgYW5kIGFydCBvYmplY3RzICh2aXN1YWwgZWZmZWN0cykgY3VycmVudGx5IG9uIHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBTdG9wQWxsU2hhZGVycyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uU3RvcEFsbFNoYWRlcnMoYWtSZWYpOyB9O1xyXG4vL1JlbW92ZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgYXJ0IG9iamVjdCAoaGl0IG1hZ2ljIGVmZmVjdC92aXN1YWwgZWZmZWN0KSBhdHRhY2hlZCB0byB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIFN0b3BBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0KSB7IHJldHVybiBzbi5TdG9wQXJ0T2JqZWN0KGFrUmVmLCBha0FydCk7IH07XHJcbi8vVG9nZ2xlcyBub2RlIHZpc2liaWxpdHkuXHJcbmV4cG9ydCB2YXIgVG9nZ2xlQ2hpbGROb2RlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhYkRpc2FibGUpIHsgcmV0dXJuIHNuLlRvZ2dsZUNoaWxkTm9kZShha1JlZiwgYXNOb2RlTmFtZSwgYWJEaXNhYmxlKTsgfTtcclxuLy9VcGRhdGVzIG5vZGUgZGF0YS4gTW92ZSBoaXQgZWZmZWN0IGFydCB0byBuZXcgbm9kZSAoaWUuIGZyb20gXCJNYWdpY0VmZmVjdHNOb2RlXCIgdG8gXCJOUEMgSGVhZCBbSGVhZF1cIikgb3IgdXBkYXRlIHRyYW5zbGF0ZSwgcm90YXRlLCBhbmQgc2NhbGUgdmFsdWVzLlxyXG4vL1RyYW5zbGF0ZSBhbmQgUm90YXRlIGFycmF5cyBtdXN0IGhhdmUgdGhyZWUgdmFsdWVzIGluIG9yZGVyIHRvIHdvcmsuIFJvdGF0ZSB1c2VzIGV1bGVyIGFuZ2xlcyBpbiBkZWdyZWVzIChYWVopLiBTY2FsZSBpcyByZWxhdGl2ZSwgYW5kIGlzIG11bHRpcGxpZWQgYnkgZXhpc3Rpbmcgc2NhbGUuXHJcbi8vSWYgdGhlIGhpdCBlZmZlY3QgYXJ0IGlzIHJlbW92ZWQgYW5kIHJlYXR0YWNoZWQsIGl0IHdpbGwgcmV2ZXJ0IGJhY2sgdG8gdGhlIHZhbHVlcyBpbiB0aGUgbmlmLlxyXG5leHBvcnQgdmFyIFVwZGF0ZUhpdEVmZmVjdEFydE5vZGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0LCBhc05ld05vZGUsIGFmVHJhbnNsYXRlLCBhZlJvdGF0ZSwgYWZSZWxhdGl2ZVNjYWxlKSB7XHJcbiAgICBpZiAoYWZSZWxhdGl2ZVNjYWxlID09PSB2b2lkIDApIHsgYWZSZWxhdGl2ZVNjYWxlID0gMS4wOyB9XHJcbiAgICByZXR1cm4gc24uVXBkYXRlSGl0RWZmZWN0QXJ0Tm9kZShha1JlZiwgYWtBcnQsIGFzTmV3Tm9kZSwgYWZUcmFuc2xhdGUsIGFmUm90YXRlLCBhZlJlbGF0aXZlU2NhbGUpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QQUNLQUdFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIFBBQ0tBR0UgVFlQRVNcclxuICAgICAgICBGaW5kID0gMFxyXG4gICAgICAgIEZvbGxvdyA9IDFcclxuICAgICAgICBFc2NvcnQgPSAyXHJcbiAgICAgICAgRWF0ID0gM1xyXG4gICAgICAgIFNsZWVwID0gNFxyXG4gICAgICAgIFdhbmRlciA9IDVcclxuICAgICAgICBUcmF2ZWwgPSA2XHJcbiAgICAgICAgQWNjb21wYW55ID0gN1xyXG4gICAgICAgIFVzZUl0ZW1BdCA9IDhcclxuICAgICAgICBBbWJ1c2ggPSA5XHJcbiAgICAgICAgRmxlZU5vdENvbWJhdCA9IDEwXHJcbiAgICAgICAgQ2FzdE1hZ2ljID0gMTFcclxuICAgICAgICBTYW5kYm94ID0gMTJcclxuICAgICAgICBQYXRyb2wgPSAxM1xyXG4gICAgICAgIEd1YXJkID0gMTRcclxuICAgICAgICBEaWFsb2d1ZSA9IDE1XHJcbiAgICAgICAgVXNlV2VhcG9uID0gMTZcclxuICAgICAgICBGaW5kMiA9IDE3XHJcbiAgICAgICAgUGFja2FnZSA9IDE4XHJcbiAgICAgICAgUGFja2FnZVRlbXBsYXRlID0gMTlcclxuICAgICAgICBBY3RpdmF0ZSA9IDIwXHJcbiAgICAgICAgQWxhcm0gPSAyMVxyXG4gICAgICAgIEZsZWUgPSAyMlxyXG4gICAgICAgIFRyZXNwYXNzID0gMjNcclxuICAgICAgICBTcGVjdGF0b3IgPSAyNFxyXG4gICAgICAgIFJlYWN0VG9EZWFkID0gMjVcclxuICAgICAgICBHZXRVcEZyb21DaGFpciA9IDI2XHJcbiAgICAgICAgRG9Ob3RoaW5nID0gMjdcclxuICAgICAgICBJbkdhbWVEaWFsb2d1ZSA9IDI4XHJcbiAgICAgICAgU3VyZmFjZSA9ICAyOVxyXG4gICAgICAgIFNlYXJjaEZvckF0dGFja2VyID0gMzBcclxuICAgICAgICBBdm9pZFBsYXllciA9IDMxXHJcbiAgICAgICAgUmVhY3RUb0Rlc3Ryb3llZE9iamVjdCA9IDMyXHJcbiAgICAgICAgUmVhY3RUb0dyZW5hZGVPck1pbmUgPSAzM1xyXG4gICAgICAgIFN0ZWFsV2FybmluZyA9IDM0XHJcbiAgICAgICAgUGlja1BvY2tldFdhcm5pbmcgPSAzNVxyXG4gICAgICAgIE1vdmVtZW50QmxvY2tlZCA9IDM2XHJcbiAgICAgICAgVmFtcGlyZUZlZWQgPSAzN1xyXG4gICAgICAgIENhbm5pYmFsRmVlZCA9IDM4ICovXHJcbi8vR2V0cyBwYWNrYWdlIHR5cGUuIFJldHVybnMgLTEgaWYgcGFja2FnZSBpcyBub25lXHJcbmV4cG9ydCB2YXIgR2V0UGFja2FnZVR5cGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGFja2FnZVR5cGUoYWtQYWNrYWdlKTtcclxufTtcclxuLy9HZXRzIGFsbCBpZGxlcyBvbiB0aGlzIHBhY2thZ2VcclxuZXhwb3J0IHZhciBHZXRQYWNrYWdlSWRsZXMgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7IHJldHVybiBzbi5HZXRQYWNrYWdlSWRsZXMoYWtQYWNrYWdlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGlkbGUgdG8gdGhlIGVuZCBvZiB0aGUgcGFja2FnZSBpZGxlIHN0YWNrLCBjcmVhdGluZyBpdCBpZiBuZWVkZWQuXHJcbmV4cG9ydCB2YXIgQWRkUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLkFkZFBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy9SZW1vdmVzIGlkbGUgZnJvbSBwYWNrYWdlXHJcbmV4cG9ydCB2YXIgUmVtb3ZlUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLlJlbW92ZVBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUEFQWVJVUyBFWFRFTkRFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIGN1cnJlbnQgdmVyc2lvbiBhcyBpbnQgYXJyYXkgKG1ham9yLG1pbm9yLHBhdGNoIC8gNCwzLDcpXHJcbmV4cG9ydCB2YXIgR2V0UGFweXJ1c0V4dGVuZGVyVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzbi5HZXRQYXB5cnVzRXh0ZW5kZXJWZXJzaW9uKCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QT1RJT04gLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1BvdGlvbihha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0byB0YXJnZXQgUG90aW9uLCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrUG90aW9uVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub1BvdGlvbihha1BvdGlvbiwgYWtQb3Rpb25Ub0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gUG90aW9uIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVBvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tUG90aW9uKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0aGF0IG1hdGNoZXMgUG90aW9uIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha1BvdGlvblRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21Qb3Rpb24oYWtQb3Rpb24sIGFrUG90aW9uVG9NYXRjaEZyb20sIGFpSW5kZXgpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QUk9KRUNUSUxFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0dldHMgcHJvamVjdGlsZSBncmF2aXR5ICh1c3VhbGx5IDAuMCBmb3Igbm9uIGFycm93IHByb2plY3RpbGVzKS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVHcmF2aXR5KGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIGltcGFjdCBmb3JjZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVJhbmdlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVJhbmdlKGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIHNwZWVkLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVTcGVlZCA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVTcGVlZChha1Byb2plY3RpbGUpOyB9O1xyXG4vKiogUFJPSkVDVElMRSBUWVBFU1xyXG4gICAgICAgIE1pc3NpbGUgPSAxXHJcbiAgICAgICAgTG9iYmVyID0gMlxyXG4gICAgICAgIEJlYW0gPSAzXHJcbiAgICAgICAgRmxhbWUgPSA0XHJcbiAgICAgICAgQ29uZSA9IDVcclxuICAgICAgICBCYXJyaWVyID0gNlxyXG4gICAgICAgIEFycm93ID0gNyAqL1xyXG4vL0dldCBwcm9qZWN0aWxlIHR5cGUuIDAgaWYgcHJvamVjdGlsZSBpcyBOb25lLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVUeXBlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVR5cGUoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIHByb2plY3RpbGUgZ3Jhdml0eS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmR3Jhdml0eSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUdyYXZpdHkoYWtQcm9qZWN0aWxlLCBhZkdyYXZpdHkpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBpbXBhY3QgZm9yY2UuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIHJhbmdlLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVSYW5nZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVSYW5nZShha1Byb2plY3RpbGUsIGFmUmFuZ2UpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBzcGVlZC5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlU3BlZWQgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlU3BlZWQoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NDUk9MTCAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvU2Nyb2xsKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRvIHRhcmdldCBTY3JvbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtTY3JvbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU2Nyb2xsKGFrU2Nyb2xsLCBha1Njcm9sbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBTY3JvbGwgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TY3JvbGwoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRoYXQgbWF0Y2hlcyBTY3JvbGwgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrU2Nyb2xsVG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVNjcm9sbChha1Njcm9sbCwgYWtTY3JvbGxUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TT1VORFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIHRoZSBzb3VuZC5cclxuZXhwb3J0IHZhciBTZXRTb3VuZERlc2NyaXB0b3IgPSBmdW5jdGlvbiAoYWtTb3VuZCwgYWtTb3VuZERlc2NyaXB0b3IpIHsgcmV0dXJuIHNuLlNldFNvdW5kRGVzY3JpcHRvcihha1NvdW5kLCBha1NvdW5kRGVzY3JpcHRvcik7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLyoqIFNQRUxMIFRZUEVTXHJcbiAgICAgICAgU3BlbGwgPSAwXHJcbiAgICAgICAgRGlzZWFzZSA9IDFcclxuICAgICAgICBQb3dlciA9IDJcclxuICAgICAgICBMZXNzZXJQb3dlciA9IDNcclxuICAgICAgICBBYmlsaXR5ID0gNFxyXG4gICAgICAgIFBvaXNvbiA9IDVcclxuICAgICAgICBBZGRpdGlvbiA9IDZcclxuICAgICAgICBWb2ljZSA9IDcgKi9cclxuLy9SZXR1cm5zIHNwZWxsIHR5cGUuIC0xIGlmIHNwZWxsIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRTcGVsbFR5cGUgPSBmdW5jdGlvbiAoYWtTcGVsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldFNwZWxsVHlwZShha1NwZWxsKTtcclxufTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0NvbmRpdGlvbkl0ZW1PYmplY3QgfCBGdW5jdGlvbiBJRCB8IHBhcmFtZXRlciAxIHwgcGFyYW1ldGVyIDIgfCBPUENvZGUgfCBmbG9hdCB8IEFORE9SXHJcbi8vY29uZGl0aW9ucyB3aGljaCBoYXZlIG5vIHBhcmFtZXRlcnMgKGVnLiBJc1NuZWFraW5nKSAvIHRha2UgaW4gZm9ybXMgKEdldElzUmFjZSkgd29ya1xyXG4vL2NvbmRpdGlvbnMgd2hpY2ggYWNjZXB0IGludC9mbG9hdC9zdHJpbmdzIGFyZSBza2lwcGVkXHJcbi8vU3ViamVjdFx0fCBIYXNNYWdpY0VmZmVjdEtleXdvcmRcdHwgTWFnaWNJbnZpc2liaWxpdHlcdFx0fCBOT05FIHwgPT0gfCAwLjAgfCBBTkQgLSBpbiBnYW1lXHJcbi8vU3ViamVjdCBcdHwgSGFzTWFnaWNFZmZlY3RLZXl3b3JkXHR8IDAwMDFFQTZGIH4gU2t5cmltLmVzbSB8IE5PTkUgfCA9PSB8IDAuMCB8IEFORFx0LSBpbiBwYXB5cnVzXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1NwZWxsKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBzcGVsbCB0byB0YXJnZXQgc3BlbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU3BlbGwoYWtTcGVsbCwgYWtTcGVsbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBzcGVsbCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIHNwZWxsIHRoYXQgbWF0Y2hlcyBzcGVsbCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb01hdGNoRnJvbSwgYWlJbmRleCkgeyByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21TcGVsbChha1NwZWxsLCBha1NwZWxsVG9NYXRjaEZyb20sIGFpSW5kZXgpOyB9O1xyXG4vL1NldHMgY2FzdGluZyB0eXBlIG9mIHNwZWxsIChhbmQgYWxsIGF0dGFjaGVkIG1hZ2ljIGVmZmVjdHMpXHJcbmV4cG9ydCB2YXIgU2V0U3BlbGxDYXN0aW5nVHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsQ2FzdGluZ1R5cGUoYWtTcGVsbCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIGRlbGl2ZXJ5IHR5cGUgb2Ygc3BlbGwgKGFuZCBhbGwgYXR0YWNoZWQgbWFnaWMgZWZmZWN0cylcclxuZXhwb3J0IHZhciBTZXRTcGVsbERlbGl2ZXJ5VHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsRGVsaXZlcnlUeXBlKGFrU3BlbGwsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NUUklOR1NcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ29udmVydHMgc3RyaW5nIHRvIGhleCB2YWx1ZSBpZiB2YWxpZFxyXG5leHBvcnQgdmFyIEludFRvU3RyaW5nID0gZnVuY3Rpb24gKGFpVmFsdWUsIGFiSGV4KSB7XHJcbiAgICByZXR1cm4gc24uSW50VG9TdHJpbmcoYWlWYWx1ZSwgYWJIZXgpO1xyXG59O1xyXG4vL0NvbnZlcnRzIHN0cmluZyB0byBpbnQuIFJldHVybnMgLTEgZm9yIG91dCBvZiBib3VuZCB2YWx1ZXMuXHJcbmV4cG9ydCB2YXIgU3RyaW5nVG9JbnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcpIHtcclxuICAgIHJldHVybiBzbi5TdHJpbmdUb0ludChhc1N0cmluZyk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1VJXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgdGhlIG9iamVjdHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudGx5IG9wZW5lZCBjb250YWluZXIgaW4gY29udGFpbmVyIG1lbnVcclxuZXhwb3J0IHZhciBHZXRNZW51Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHNuLkdldE1lbnVDb250YWluZXIoKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVVRJTElUWVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DYWxjdWxhdGVzIGEgcmFuZG9tIGZsb2F0IGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21GbG9hdCA9IGZ1bmN0aW9uIChhZk1pbiwgYWZNYXgpIHtcclxuICAgIHJldHVybiBzbi5HZW5lcmF0ZVJhbmRvbUZsb2F0KGFmTWluLCBhZk1heCk7XHJcbn07XHJcbi8vQ2FsY3VsYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21JbnQgPSBmdW5jdGlvbiAoYWZNaW4sIGFmTWF4KSB7XHJcbiAgICByZXR1cm4gc24uR2VuZXJhdGVSYW5kb21JbnQoYWZNaW4sIGFmTWF4KTtcclxufTtcclxuLy9HZXRzIHN5c3RlbSB0aW1lIGFuZCBkYXRlXHJcbi8vWWVhciAoMTYwMSAtIDMwODI3KVxyXG4vL01vbnRoICgxLTEyKVxyXG4vL0RheU9mV2VlayAoMTpTdW5kYXkgLSA3OlNhdHVyZGF5KVxyXG4vL0RheSAoMS0zMSlcclxuLy9Ib3VyICgwLTIzKVxyXG4vL01pbnV0ZSAoMC01OSlcclxuLy9TZWNvbmQgKDAtNTkpXHJcbi8vTWlsbGlzZWNvbmQgKDAtOTk5KVxyXG5leHBvcnQgdmFyIEdldFN5c3RlbVRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRTeXN0ZW1UaW1lKCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9WSVNVQUxFRkZFQ1RTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vR2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgR2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBcnRPYmplY3QoYWtFZmZlY3QpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBhcnQgb2JqZWN0cyBwcmVzZW50L2FjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRBcnRPYmplY3RUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0QXJ0T2JqZWN0VG90YWxDb3VudChha0VmZmVjdCwgYWJBY3RpdmUpOyB9O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vU2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgU2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBha0FydCkgeyByZXR1cm4gc24uU2V0QXJ0T2JqZWN0KGFrRWZmZWN0LCBha0FydCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9XRUFUSEVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBhcyBpbiBDSyBjb25kaXRpb25zICgwLjAtMS4wKS5cclxuZXhwb3J0IHZhciBHZXRXaW5kU3BlZWRBc0Zsb2F0ID0gZnVuY3Rpb24gKGFrV2VhdGhlcikgeyByZXR1cm4gc24uR2V0V2luZFNwZWVkQXNGbG9hdChha1dlYXRoZXIpOyB9O1xyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBpbiB0aGUgd2VhdGhlciBmb3JtICgwLTI1NSkuXHJcbmV4cG9ydCB2YXIgR2V0V2luZFNwZWVkQXNJbnQgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7IHJldHVybiBzbi5HZXRXaW5kU3BlZWRBc0ludChha1dlYXRoZXIpOyB9O1xyXG4vKiogV0VBVEhFUiBUWVBFU1xyXG4gICAgICAgIFBsZWFzYW50ID0gMFxyXG4gICAgICAgIENsb3VkeSA9IDFcclxuICAgICAgICBSYWlueSA9IDJcclxuICAgICAgICBTbm93ID0gMyAqL1xyXG4vL0dldHMgd2VhdGhlci9jdXJyZW50IHdlYXRoZXIgdHlwZSBpZiBha1dlYXRoZXIgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldFdlYXRoZXJUeXBlID0gZnVuY3Rpb24gKGFrV2VhdGhlcikge1xyXG4gICAgaWYgKGFrV2VhdGhlciA9PT0gdm9pZCAwKSB7IGFrV2VhdGhlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRXZWF0aGVyVHlwZShha1dlYXRoZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBvbmNlLCBob29rcywgcHJpbnRDb25zb2xlLCBHYW1lIH0gZnJvbSAnc2t5cmltUGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBHZXRTdHJpbmdWYWx1ZSwgU3RyaW5nTGlzdEFkZCwgU3RyaW5nTGlzdENsZWFyLCBTdHJpbmdMaXN0UmVtb3ZlLCBTdHJpbmdMaXN0VG9BcnJheSB9IGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL3BhcHlydXMtdXRpbC9TdG9yYWdlVXRpbFwiO1xyXG5pbXBvcnQgKiBhcyBtY20gZnJvbSBcIkBza3lyaW0tcGxhdGZvcm0vbWNtLWhlbHBlci9NQ01cIjtcclxuaW1wb3J0IHsgTW9kRXZlbnQgfSBmcm9tIFwiLi9tb2RldmVudFwiO1xyXG5pbXBvcnQgeyBnZXRTbG90RnJvbU5hbWUsIFNsb3QsIHNhdmVUb0RhdGFGaWxlLCBjYXRlZ29yeVRvU2xvdCwgaXRlbUNhdGVnb3J5Vm9sdW1lcywgRXZhbHVhdGVJbnZlbnRvcnkgfSBmcm9tIFwiLi9JbnZlbnRvcnlTbG90c1wiO1xyXG4vL19fX19fX19fX19fVkFSSUFCTEVTX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxudmFyIG1jbV9zZXR0aW5ncyA9IHtcclxuICAgIFNlbGVjdGVkU2xvdDogJ3NBY3RpdmVTbG90czpTbG90cycsXHJcbiAgICBpbnB1dFNsb3ROYW1lOiAnc0FkZFNsb3ROYW1lOlNsb3RzJyxcclxuICAgIGFkZFNsb3RCdXR0b246ICdiQWRkU2xvdEJ1dHRvbjpTbG90cycsXHJcbiAgICByZW1vdmVTbG90QnV0dG9uOiAnYkRlbGV0ZVNsb3RCdXR0b246U2xvdHMnLFxyXG4gICAgc2xpZGVyU2xvdE1heDogJ2ZTbG90TWF4OlNsb3RzJyxcclxuICAgIEFkZENhdGVnb3JpZXM6ICdzU2xvdENhdGVnb3JpZXNBZGQ6TGlzdHMnLFxyXG4gICAgUmVtb3ZlQ2F0ZWdvcmllczogJ3NTbG90Q2F0ZWdvcmllc1JlbW92ZTpMaXN0cycsXHJcbn07XHJcbnZhciBzdG9yYWdlS2V5cyA9IHtcclxuICAgIGNhdGVnb3JpZXM6ICdZTS5TTE9UUy5JVEVNX0NBVEVHT1JJRVMnLFxyXG4gICAgY2hhbmdlZF9zZXR0aW5nOiAnWU0uU2xvdHMuU0VUVElOR19DSEFOR0VEJyxcclxuICAgIG1lbnVXaGl0ZUxpc3Q6ICdZTS5TbG90cy5NQ00uTWVudS5DYXRlZ29yaWVzLldoaXRlTGlzdCcsXHJcbiAgICBtZW51QmxhY2tMaXN0OiAnWU0uU2xvdHMuTUNNLk1lbnUuQ2F0ZWdvcmllcy5CbGFja0xpc3QnLFxyXG59O1xyXG52YXIgbWNtU2V0dGluZ3NUb1N0b3JhZ2VLZXlzID0ge1xyXG4vLyBgWU0uU2xvdHMuJHtzLm5hbWV9LmZTbG90TWF4OlNsb3RzYFxyXG59O1xyXG52YXIgbW9kbmFtZSA9ICdJbnZlbnRvcnlTbG90cyc7XHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxuLy9fX19fX19fX19fX0ZVTkNUSU9OU19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbnZhciBSZWZyZXNoTUNNID0gZnVuY3Rpb24gKCkge1xyXG4gICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoYW5kbGUgPSBNb2RFdmVudC5DcmVhdGUoJ1lNLlNsb3RzLlJFRlJFU0gnKTtcclxuICAgICAgICBNb2RFdmVudC5QdXNoU3RyaW5nKGhhbmRsZSwgJ1JlZnJlc2gnKTtcclxuICAgICAgICBNb2RFdmVudC5TZW5kKGhhbmRsZSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIFNldE1lbnVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBoYW5kbGUgPSBNb2RFdmVudC5DcmVhdGUoJ1lNLlNsb3RzLlJFRlJFU0gnKTtcclxuICAgICAgICBNb2RFdmVudC5QdXNoU3RyaW5nKGhhbmRsZSwgJ1NldE1lbnVPcHRpb25zJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuU2VuZChoYW5kbGUpO1xyXG4gICAgfSk7XHJcbiAgICBSZWZyZXNoTUNNKCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgc2F2ZVNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU2V0SW50VmFsdWUobnVsbCwgbWNtX3NldHRpbmdzLkFkZENhdGVnb3JpZXMsIG1jbS5HZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIG1jbV9zZXR0aW5ncy5BZGRDYXRlZ29yaWVzKSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy5SZW1vdmVDYXRlZ29yaWVzLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuUmVtb3ZlQ2F0ZWdvcmllcykpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuU2VsZWN0ZWRTbG90KSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy4sIG1jbS5HZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIG1jbV9zZXR0aW5ncy5hZGRTbG90QnV0dG9uKSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy4sIG1jbS5HZXRNb2RTZXR0aW5nQm9vbChtb2RuYW1lLCBtY21fc2V0dGluZ3MuaW5wdXRTbG90TmFtZSkgPyAxOjApXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcIlwiKSlcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy4sIG1jbS5HZXRNb2RTZXR0aW5nSW50KG1vZG5hbWUsIFwiXCIpKVxyXG59O1xyXG5mdW5jdGlvbiBpbml0SXRlbUNhdGVnb3JpZXNMaXN0KCkge1xyXG4gICAgLy8gT2JqZWN0LnZhbHVlcyhJdGVtQ2F0ZWdvcmllcykuZm9yRWFjaChjID0+IHtcclxuICAgIC8vICAgICBpZiAoTnVtYmVyKGMpIHx8IGMgYXMgbnVtYmVyID09IDAgKXtyZXR1cm47fVxyXG4gICAgLy8gICAgIFN0cmluZ0xpc3RBZGQobnVsbCwgc3RvcmFnZUtleXMuY2F0ZWdvcmllcywgYyBhcyBzdHJpbmcpXHJcbiAgICAvLyB9KTtcclxufVxyXG5mdW5jdGlvbiBGaWxsTUNNT3B0aW9ucygpIHtcclxuICAgIEZpbHRlck1DTU9wdGlvbnMoJycpO1xyXG4gICAgdmFyIGE7XHJcbiAgICB2YXIgbGlzdHMgPSBbbWNtX3NldHRpbmdzLlNlbGVjdGVkU2xvdCwgc3RvcmFnZUtleXMubWVudUJsYWNrTGlzdCwgc3RvcmFnZUtleXMubWVudVdoaXRlTGlzdF07XHJcbiAgICBsaXN0cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgU3RyaW5nTGlzdENsZWFyKG51bGwsIGxpc3QpO1xyXG4gICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwgbGlzdCwgJ05vIENoYW5nZXMnKTtcclxuICAgICAgICBtY20uU2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBsaXN0LCBcIk5vIENoYW5nZXNcIik7XHJcbiAgICB9KTtcclxuICAgIFNsb3QuZ2V0QWxsU2xvdE5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBuYW1lID0gcztcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIG1jbV9zZXR0aW5ncy5TZWxlY3RlZFNsb3QsIG5hbWUpO1xyXG4gICAgfSk7XHJcbiAgICBIaWRlR3JvdXBPbmUodHJ1ZSk7XHJcbiAgICAvLyBTZXRNZW51T3B0aW9ucygpXHJcbiAgICAvLyBSZWZyZXNoTUNNKClcclxuICAgIC8vIC8vIHByaW50Q29uc29sZSgncmVmcmVzaG1lbnUgaGFzIGJlZW4gc2VudCcpXHJcbn1cclxuO1xyXG5mdW5jdGlvbiBmaWxsU2xvdENhdGVnb3J5TGlzdHMoc2VsZWN0ZWRfc2xvdCkge1xyXG4gICAgdmFyIGxpc3RzID0gW3N0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3RdO1xyXG4gICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBsaXN0KTtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGxpc3QsICdObyBDaGFuZ2VzJyk7XHJcbiAgICAgICAgbWNtLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbGlzdCwgXCJObyBDaGFuZ2VzXCIpO1xyXG4gICAgfSk7XHJcbiAgICBPYmplY3Qua2V5cyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAoYywgaSkge1xyXG4gICAgICAgIGlmIChOdW1iZXIoYykgfHwgYyA9PSAnMCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2xvdCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlUb1Nsb3QpW2ldO1xyXG4gICAgICAgIC8vIGMgPSBjLnNsaWNlKGMubGFzdEluZGV4T2YoJ18nKSArIDEpXHJcbiAgICAgICAgaWYgKHNsb3QgPT0gc2VsZWN0ZWRfc2xvdCkge1xyXG4gICAgICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIGMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0LCBjKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLyBGdW5jdGlvbiB0byBjbGVhciBhbmQgcmVmaWxsIHRoZSBtY20gbWVudSBsaXN0cyBhY2NvcmRpbmcgdG8gYSBmaWx0ZXIgY3JpdGVyaWFcclxuZnVuY3Rpb24gRmlsdGVyTUNNT3B0aW9ucyhxdWVyeSkge1xyXG4gICAgaWYgKCFxdWVyeSkge1xyXG4gICAgICAgIHF1ZXJ5ID0gJyc7XHJcbiAgICB9XHJcbiAgICA7XHJcbiAgICAvLyBGaWxsTUNNT3B0aW9ucygpXHJcbiAgICB2YXIgbWFpbktleSA9IFwiWU0uTG9yaWNhLk1DTS5FbnVtLlwiO1xyXG4gICAgLy8gYXJyID0gbWFpbktleSArIGFyclxyXG4gICAgdmFyIGtleXMgPSBbXCJVcGtlZXBcIiwgXCJCbGFja2xpc3RcIiwgXCJFeGNsdXNpb25cIl07XHJcbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgIGtleSA9IG1haW5LZXkgKyBrZXk7XHJcbiAgICAgICAgdmFyIGZpbHRlcmVkID0gRmlsdGVyT3B0aW9ucyhTdHJpbmdMaXN0VG9BcnJheShudWxsLCBrZXkpLCBxdWVyeSk7XHJcbiAgICAgICAgaWYgKCFmaWx0ZXJlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbHRlcmVkLnVuc2hpZnQoJ05vIENoYW5nZXMnKTtcclxuICAgICAgICBTdHJpbmdMaXN0Q2xlYXIobnVsbCwga2V5KTtcclxuICAgICAgICBmaWx0ZXJlZC5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwga2V5LCBmLCBmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIFNldE1lbnVPcHRpb25zKCk7XHJcbiAgICBSZWZyZXNoTUNNKCk7XHJcbn1cclxuZnVuY3Rpb24gRmlsdGVyT3B0aW9ucyhhcnIsIHF1ZXJ5KSB7XHJcbiAgICBpZiAoIWFycikge1xyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICByZXR1cm4gZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIEhpZGVHcm91cE9uZShtYWtlVmlzaWJsZSkge1xyXG4gICAgbWFrZVZpc2libGUgPSAhbWFrZVZpc2libGU7XHJcbiAgICBtY20uU2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwgJ2JIaWRkZW5Ub2dnbGUxOlNsb3RzJywgbWFrZVZpc2libGUpO1xyXG4gICAgUmVmcmVzaE1DTSgpO1xyXG59XHJcbmZ1bmN0aW9uIHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpIHtcclxuICAgIHZhciBpID0gT2JqZWN0LnZhbHVlcyhtY21fc2V0dGluZ3MpLmluZGV4T2YoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKG1jbV9zZXR0aW5ncylbaV07XHJcbn1cclxuZnVuY3Rpb24gc29sdmVTbG90U3RvcmFnZVBhdGgocykge1xyXG4gICAgcmV0dXJuIFwiWU0uU2xvdHMuXCIuY29uY2F0KHMubmFtZSwgXCIuXCIpO1xyXG59XHJcbmZ1bmN0aW9uIFNldEZsb2F0U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIC8vIFNldEZsb2F0VmFsdWUobnVsbCwgYFlNLlNsb3RzLiR7IHNsb3QubmFtZSB9LiR7a2V5fWAsIG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwga2V5KSlcclxuICAgIHNsb3QuYmFzZVNpemUgPSBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGNoYW5nZWRfc2V0dGluZyk7XHJcbn1cclxuZnVuY3Rpb24gU2V0SW50U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsICdZTS5TbG90cy4nICsga2V5LCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBrZXkpKVxyXG4gICAgLy8gc2xvdC5iYXNlU2l6ZSA9IG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwga2V5KVxyXG59XHJcbmZ1bmN0aW9uIFNldEJvb2xTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCkge1xyXG4gICAgdmFyIGtleSA9IHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgdmFyIHZhbHVlID0gbWNtLkdldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIGtleSk7XHJcbiAgICBpZiAoa2V5LmluY2x1ZGVzKCdiQWRkU2xvdCcpKSB7IH1cclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsICdZTS5TbG90cy4nICsga2V5LCBtY20uR2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwga2V5KSA/IDE6MClcclxufVxyXG5mdW5jdGlvbiBTZXRTdHJpbmdTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCkge1xyXG4gICAgdmFyIGtleSA9IHN0cmluZ1RvU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgdmFyIHZhbHVlID0gbWNtLkdldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwga2V5KTtcclxuICAgIGlmICh2YWx1ZSA9PSAnTm8gQ2hhbmdlcycpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5LmluY2x1ZGVzKCdDYXRlZ29yaWVzUmVtb3ZlJykpIHtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3QsIHZhbHVlKTtcclxuICAgICAgICBTdHJpbmdMaXN0UmVtb3ZlKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHZhbHVlKTtcclxuICAgICAgICBjYXRlZ29yeVRvU2xvdFt2YWx1ZV0gPSBTbG90LmdldEFsbFNsb3RzKClbMF07IC8vIHNldHMgdG8gdGhlIGRlZmF1bHQgc2xvdCAnTWlzY19zbG90J1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoa2V5LmluY2x1ZGVzKCdDYXRlZ29yZXNBZGQnKSkge1xyXG4gICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwgc3RvcmFnZUtleXMubWVudUJsYWNrTGlzdCwgdmFsdWUpO1xyXG4gICAgICAgIFN0cmluZ0xpc3RSZW1vdmUobnVsbCwgc3RvcmFnZUtleXMubWVudVdoaXRlTGlzdCwgdmFsdWUpO1xyXG4gICAgICAgIGNhdGVnb3J5VG9TbG90W3ZhbHVlXSA9IHNsb3Q7XHJcbiAgICB9XHJcbn1cclxuLy9fX19fX19fX19fRVZFTlRTX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuZXhwb3J0IHZhciBtYWluTWNtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgb25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcclxuICAgICAgICAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVnaXN0ZXJGb3JNb2RFdmVudCgnU2xvdHNfTUNNX1BhZ2VTZWxlY3QnLCAnT25QYWdlU2VsZWN0Jyk7XHJcbiAgICAgICAgKF9iID0gcGwoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlZ2lzdGVyRm9yTW9kRXZlbnQoJ1Nsb3RzX01lbnVfT3BlbicsICdPbk1lbnVPcGVuJyk7XHJcbiAgICAgICAgKF9jID0gcGwoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnJlZ2lzdGVyRm9yTW9kRXZlbnQoJ1lNLlNsb3RzLlNFVFRJTkdfQ0hBTkdFRCcsICdPblNldHRpbmdDaGFuZ2VkJyk7XHJcbiAgICAgICAgKF9kID0gcGwoKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnJlZ2lzdGVyRm9yTW9kRXZlbnQoJ1Nsb3RzX01lbnVfQ2xvc2VfVXBkYXRlJywgJ09uTWVudUNsb3NlJyk7XHJcbiAgICAgICAgLy8gaW5pdEl0ZW1DYXRlZ29yaWVzTGlzdCgpXHJcbiAgICB9KTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICBFdmFsdWF0ZUludmVudG9yeSgpO1xyXG4gICAgICAgICAgICBzYXZlVG9EYXRhRmlsZSgpO1xyXG4gICAgICAgICAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uTWVudUNsb3NlJyk7XHJcbiAgICBob29rcy5zZW5kUGFweXJ1c0V2ZW50LmFkZCh7XHJcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKGN0eC5wYXB5cnVzRXZlbnROYW1lKTtcclxuICAgICAgICAgICAgRmlsbE1DTU9wdGlvbnMoKTtcclxuICAgICAgICB9LFxyXG4gICAgfSwgMHgxNCwgMHgxNCwgJ09uUGFnZVNlbGVjdCcgfHwgJ09uTWVudU9wZW4nKTtcclxuICAgIGhvb2tzLnNlbmRQYXB5cnVzRXZlbnQuYWRkKHtcclxuICAgICAgICBlbnRlcjogZnVuY3Rpb24gKGN0eCkge1xyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoY3R4LnBhcHlydXNFdmVudE5hbWUpXHJcbiAgICAgICAgICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VkX3NldHRpbmcgPSBHZXRTdHJpbmdWYWx1ZShudWxsLCBzdG9yYWdlS2V5cy5jaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsb3Q7XHJcbiAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gbWNtLkdldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbWNtX3NldHRpbmdzLlNlbGVjdGVkU2xvdCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUudG9Mb3dlckNhc2UoKSA9PSAnTm8gQ2hhbmdlcycudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEhpZGVHcm91cE9uZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3QgPSBnZXRTbG90RnJvbU5hbWUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKHNsb3QubmFtZSlcclxuICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkX3NldHRpbmcuaW5jbHVkZXMoJ0FjdGl2ZVNsb3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEhpZGVHcm91cE9uZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWNtLlNldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBtY21fc2V0dGluZ3Muc2xpZGVyU2xvdE1heCwgc2xvdC5iYXNlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbFNsb3RDYXRlZ29yeUxpc3RzKHNsb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhbmdlZF9zZXR0aW5nWzBdID09ICdmJykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldEZsb2F0U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnU2xvdE1heCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3QuYmFzZVNpemUgPSBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnSXRlbVR5cGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U2l6ZSA9IG1jbS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlZF9zZXR0aW5nID0gY2hhbmdlZF9zZXR0aW5nLnNsaWNlKDEsIGNoYW5nZWRfc2V0dGluZy5sZW5ndGggLSAxMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW50Q29uc29sZShjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQ2F0ZWdvcnlWb2x1bWVzW2NoYW5nZWRfc2V0dGluZ10gPSBuZXdTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoaXRlbUNhdGVnb3J5Vm9sdW1lc1tjaGFuZ2VkX3NldHRpbmddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGNoYW5nZWRfc2V0dGluZy5pbmNsdWRlcygnZlNsb3RNYXgnKSl7c2xvdH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZ1swXSA9PSAnaScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBTZXRJbnRTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VkX3NldHRpbmdbMF0gPT0gJ2InKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0Qm9vbFNldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZ1swXSA9PSAncycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJ05vIENoYW5nZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0U3RyaW5nU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW50Q29uc29sZShtY20uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBtY21fc2V0dGluZ3MuUmVtb3ZlQ2F0ZWdvcmllcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2V0TWVudU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIDB4MTQsIDB4MTQsICdPblNldHRpbmdDaGFuZ2VkJyk7XHJcbn07XHJcbiIsIi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuVHlwZXNjcmlwdCBkZWZpbml0aW9ucyBmb3IgdjQuMlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5TdG9yYWdlVXRpbDtcclxuLyoqIE1PRCBBVVRIT1JTLCBSRUFEIVxyXG5cclxuICAgIFRoaXMgc2NyaXB0IGNvbnRhaW5zIGZ1bmN0aW9ucyBmb3Igc2F2aW5nIGFuZCBsb2FkaW5nIGFueSBhbW91bnQgb2YgaW50LCBmbG9hdCwgZm9ybSBhbmQgc3RyaW5nIHZhbHVlc1xyXG4gICAgYnkgbmFtZSBvbiBhIGZvcm0gb3IgZ2xvYmFsbHkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgYWNjZXNzZWQgYW5kIGNoYW5nZWQgZnJvbSBhbnkgbW9kIHdoaWNoIGFsbG93c1xyXG4gICAgbW9kcyB0byBiZWNvbWUgY29tcGF0aWJsZSB3aXRoIGVhY2ggb3RoZXIgd2l0aG91dCBhZGRpbmcgYW55IHJlcXVpcmVtZW50cyB0byB0aGUgb3RoZXIgbW9kIG9yIGl0cyB2ZXJzaW9uXHJcbiAgICBvdGhlciB0aGFuIHRoaXMgcGx1Z2luLlxyXG5cclxuICAgIFZhbHVlcyB3aWxsIHN0YXkgb24gZm9ybXMgb3IgZ2xvYmFsbHkgdW50aWwgdGhleSBhcmUgVW5zZXQgb3IgQ2xlYXJlZCBpbiBjYXNlIG9mIGxpc3RzLiBJZiB2YWx1ZVxyXG4gICAgaXMgc2V0IG9uIGEgZm9ybSBhbmQgdGhlIG9iamVjdCBpcyBkZWxldGVkIHRoZW4gVEhFIHZhbHVlIHdpbGwgYmUgcmVtb3ZlZCB3aGVuIHNhdmluZyBnYW1lLlxyXG4gICAgSWYgeW91IGFyZSBkb25lIHdpdGggdXNpbmcgYSBjZXJ0YWluIHZhcmlhYmxlIHlvdSBzaG91bGQgdXNlIFVuc2V0IG9yIENsZWFyIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGVtXHJcbiAgICBidXQgaXQgaXMgbm90IHJlcXVpcmVkLlxyXG5cclxuICAgIFNhdmluZyBNQ00gY29uZmlnIHZhbHVlcyBoZXJlIHdvdWxkIGFsbG93IG90aGVyIG1vZHMgdG8gY2hhbmdlIHlvdXIgbW9kIHNldHRpbmdzIHdoaWNoIG1heVxyXG4gICAgYmUgdXNlZnVsLiBJdCBzaG91bGQgYWxzbyBhbGxvdyB5b3UgdG8gY2hhbmdlIE1DTSBjb25maWcgc2NyaXB0IHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgdmVyc2lvbmluZ1xyXG4gICAgc2luY2UgdGhlcmUgYXJlIG5vIG5ldyB2YXJpYWJsZXMgaW4gdGhlIHNjcmlwdCBpdHNlbGYuXHJcblxyXG4gICAgRnVuY3Rpb25zIHRoYXQgc3RhcnQgd2l0aCBGaWxlIGluIHRoZSBuYW1lIHdpbGwgc2F2ZSB2YWx1ZXMgdG8gYSBzZXBhcmF0ZSBmaWxlLCBzbyB0aGF0IHlvdSBjYW5cclxuICAgIGFjY2VzcyB0aGUgc2FtZSB2YWx1ZXMgZnJvbSBhbGwgc2F2ZWdhbWVzLiBUaGlzIG1heSBiZSB1c2VmdWwgZm9yIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MuXHJcbiAgIChGSUxFIEZVTkNUSU9OUyBBUkUgREVQUkVDQVRFRCEgVVNFIEpTT05VVElMLlBTQyBJTlNURUFEKVxyXG5cclxuICAgIFNhdmVkIHZhbHVlcyB0YWtlIHZlcnkgbGl0dGxlIG1lbW9yeSAtIGV4cGVjdCB0byB1c2UgbGVzcyB0aGFuIDUwMCBLQiBvZiBwaHlzaWNhbCBtZW1vcnkgZXZlbiB3aGVuXHJcbiAgICBzZXR0aW5nIHRob3VzYW5kcyBvZiB2YWx1ZXMuXHJcblxyXG4gICAgVmFsdWUgbmFtZXMgYXJlIG5vdCBjYXNlIHNlbnNpdGl2ZSwgdGhhdCBtZWFucyBHZXRJbnRWYWx1ZShub25lLCBcImFiY1wiKSA9PSBHZXRJbnRWYWx1ZShub25lLCBcImFCQ1wiKS5cclxuXHJcbiAgICBBbGwgdmFsdWVzIGFyZSBzZXBhcmF0ZWQgZnJvbSBlYWNoIG90aGVyIGJ5IHR5cGUhIFRoYXQgbWVhbnMgU2V0SW50VmFsdWUobm9uZSwgXCJhYmNcIiwgMSkgYW5kXHJcbiAgICBTZXRGbG9hdFZhbHVlKG5vbmUsIFwiYWJjXCIsIDIuMCkgY3JlYXRlIHNlcGFyYXRlIGVudHJpZXMgYW5kIGFyZW4ndCBhZmZlY3RlZCBieSBlYWNoIG90aGVyLlxyXG4gICAgU3RvcmFnZVV0aWwuU2V0SW50VmFsdWUobm9uZSwgXCJteVZhbHVlXCIsIDEpXHJcbiAgICBTdG9yYWdlVXRpbC5TZXRGbG9hdFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiLCA1LjApXHJcbiAgICBpbnQgdmFsdWUgPSBTdG9yYWdlVXRpbC5HZXRJbnRWYWx1ZShub25lLCBcIm15VmFsdWVcIilcclxuICAgIHZhbHVlID09IDEgOyB0cnVlXHJcbiAgICB2YWx1ZSA9PSA1IDsgZmFsc2VcclxuXHJcbiAgICBXaGVuIGNob29zaW5nIG5hbWVzIGZvciB2YXJpYWJsZXMgdHJ5IHRvIHJlbWVtYmVyIHRoYXQgYWxsIG1vZHMgYWNjZXNzIHRoZSBzYW1lIHN0b3JhZ2UsIHNvIGlmIHlvdVxyXG4gICAgY3JlYXRlIGEgdmFyaWFibGUgd2l0aCBuYW1lIFwiTmFtZVwiIHRoZW4gbWFueSBvdGhlciBtb2RzIGNvdWxkIHVzZSB0aGUgc2FtZSB2YXJpYWJsZSBidXQgaW4gZGlmZmVyZW50XHJcbiAgICB3YXlzIHRoYXQgbGVhZCB0byB1bndhbnRlZCBiZWhhdmlvci4gSXQgaXMgcmVjb21tZW5kZWQgdG8gcHJlZml4IHRoZSB2YXJpYWJsZSB3aXRoIHlvdXIgbW9kIG5hbWUsXHJcbiAgICB0aGF0IHdheSB5b3UgY2FuIGJlIHN1cmUgbm9ib2R5IGVsc2Ugd2lsbCB0cnkgdG8gdXNlIHRoZSBzYW1lIHZhcmlhYmxlIGluIHRoZWlyIG1vZC4gRm9yIGV4YW1wbGVcclxuICAgIHJlYWxpc3RpYyBuZWVkcyBhbmQgZGlzZWFzZXMgbWlnaHQgc2V0IGh1bmdlciBhcyBcInJuZF9odW5nZXJ2YWx1ZVwiLlxyXG5cclxuICAgIFlvdSBjYW4gYWxzbyB1c2UgdGhpcyBzdG9yYWdlIHRvIG1ha2UgeW91ciBtb2QgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byBvdGhlciBtb2RzLCBmb3IgZXhhbXBsZSBpZlxyXG4gICAgeW91ciBtb2QgaGFzIGEgZnVuY3Rpb24gdGhhdCBzZXRzIGFuIEFjdG9yIHRvIGJlIGludmlzaWJsZSB5b3UgY291bGQgYWRkIGEgc2NyaXB0IHRoYXQgY2hlY2tzOlxyXG4gICAgaW50IGkgPSBTdG9yYWdlVXRpbC5Gb3JtTGlzdENvdW50KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiKVxyXG4gICAgd2hpbGUoaSA+IDApXHJcbiAgICAgICAgaS0tXHJcbiAgICAgICAgQWN0b3IgbWFrZSA9IFN0b3JhZ2VVdGlsLkZvcm1MaXN0R2V0KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBpKSBhcyBBY3RvclxyXG4gICAgICAgIGlmKG1ha2UpXHJcbiAgICAgICAgICAgIE15U2NyaXB0RnVuY3Rpb24obWFrZSlcclxuICAgICAgICBlbmRpZlxyXG4gICAgICAgIFN0b3JhZ2VVdGlsLkZvcm1MaXN0UmVtb3ZlQXQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIGkpXHJcbiAgICBlbmR3aGlsZVxyXG4gICAgQW5kIHRoZSBvdGhlciBtb2QgY291bGQgd3JpdGU6XHJcbiAgICBTdG9yYWdlVXRpbC5Gb3JtTGlzdEFkZChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgbXlBY3RvcilcclxuICAgIHRvIG1ha2Ugc29tZW9uZSBpbnZpc2libGUgdXNpbmcgeW91ciBtb2QuIEJ1dCBpZiB5b3VyIG1vZCBpc24ndCBwcmVzZW50IHRoZW4gbm90aGluZyBoYXBwZW5zLlxyXG4gICAgVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUsIEknbSBzdXJlIHlvdSBjYW4gZmluZCBiZXR0ZXIgd2F5cyB0byBpbXBsZW1lbnQgY29tcGF0aWJpbGl0eSwgaXQgd291bGRcclxuICAgIGhlbHAgdG8gaW5jbHVkZSBhIGRvY3VtZW50YXRpb24gZm9yIG90aGVyIG1vZGRlcnMgaWYgeW91IGRvLlxyXG4vKipcclxuXHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICAgIFN0b3JhZ2UgZnVuY3Rpb25zIC0gdmFsdWVzIGluIHNhdmUgZ2FtZSBmaWxlLiAqL1xyXG4vKiogU2V0IGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBnbG9iYWxseSBvciBvbiBhbnkgZm9ybSBieSBuYW1lIGFuZCByZXR1cm5cclxuICAgdGhlIHZhbHVlIHBhc3NlZCwgb3IgYXMgdW5pbml0aWFsaXplZCB2YXJpYWJsZSBpZiBpbnZhbGlkIGtleXMgZ2l2ZW4uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2F2ZSBvbi4gU2V0IG5vbmUgdG8gc2F2ZSBnbG9iYWxseS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNldCB0byB0aGUgZ2l2ZW4ga2V5cy4gSWYgemVybywgZW1wdHksIG9yIG5vbmUgYXJlIGdpdmVuLCB0aGUga2V5IHdpbGwgYmUgdW5zZXQuICovXHJcbmV4cG9ydCB2YXIgU2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0SW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldFN0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBSZW1vdmUgYSBwcmV2aW91c2x5IHNldCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gYW4gZm9ybSBvciBnbG9iYWxseSBhbmRcclxuaWYgc3VjY2Vzc2Z1bC4gVGhpcyB3aWxsIHJldHVybiBmYWxzZSBpZiB2YWx1ZSBkaWRuJ3QgZXhpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcmVtb3ZlIGZyb20uIFNldCBub25lIHRvIHJlbW92ZSBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgVW5zZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0SW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFVuc2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIENoZWNrIGlmIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBoYXMgYmVlbiBzZXQgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBjaGVjayBvbi4gU2V0IG5vbmUgdG8gY2hlY2sgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEhhc0ludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzSW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEhhc1N0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzU3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5IYXNGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEdldCBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIHZhbHVlIGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uR2V0SW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uR2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFN0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEZvcm1WYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG4vKiogUGx1Y2tzIGEgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgUmV0dXJuaW5nIHRoZSB2YWx1ZSBzdG9yZWQsIHRoZW4gcmVtb3ZpbmcgaXQgZnJvbSBzdG9yYWdlLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHBsdWNrIGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIFtvcHRpb25hbF0gbWlzc2luZzogaWYgdmFsdWUgaGFzIG5vdCBiZWVuIHNldCwgcmV0dXJuIHRoaXMgdmFsdWUgaW5zdGVhZC4gKi9cclxuZXhwb3J0IHZhciBQbHVja0ludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLlBsdWNrSW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBQbHVja0Zsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0Zsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBQbHVja1N0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLlBsdWNrU3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBQbHVja0Zvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0Zvcm1WYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG4vKiogR2V0IHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIGFtb3VudDogKy8tIHRoZSBhbW91bnQgdG8gYWRqdXN0IHRoZSBjdXJyZW50IHZhbHVlIGJ5XHJcblxyXG4gICBnaXZlbiBrZXlzIHdpbGwgYmUgaW5pdGlhbGl6ZWQgdG8gZ2l2ZW4gYW1vdW50IGlmIGl0IGRvZXMgbm90IGV4aXN0ICovXHJcbmV4cG9ydCB2YXIgQWRqdXN0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkFkanVzdEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBBZGp1c3RGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuLyoqIEFkZCBhbiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdG8gYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkgYW5kIHJldHVyblxyXG4gICB0aGUgdmFsdWUncyBuZXcgaW5kZXguIEluZGV4IGNhbiBiZSAtMSBpZiB3ZSB3ZXJlIHVuYWJsZSB0byBhZGRcclxuICAgdGhlIHZhbHVlLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGFkZCB0by4gU2V0IG5vbmUgdG8gYWRkIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgdmFsdWU6IHZhbHVlIHRvIGFkZC5cclxuICAgW29wdGlvbmFsXSBhbGxvd0R1cGxpY2F0ZTogYWxsb3cgYWRkaW5nIHZhbHVlIHRvIGxpc3QgaWYgdGhpcyB2YWx1ZSBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0QWRkKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0QWRkKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuLyoqIEdldCBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGlzIHdpbGwgcmV0dXJuIDAgYXMgdmFsdWUgaWYgdGhlcmUgd2FzIGEgcHJvYmxlbS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgdmFsdWUgb24uIFNldCBub25lIHRvIGdldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBpbmRleDogaW5kZXggb2YgdmFsdWUgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5JbnRMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GbG9hdExpc3RHZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0R2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZvcm1MaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG4vKiogU2V0IGEgdmFsdWUgaW4gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGlzIHdpbGwgcmV0dXJuIHRoZSBwcmV2aW91cyB2YWx1ZSBvciAwIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBzZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2V0IHRvLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RTZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTZXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG4vKiogUGx1Y2tzIGEgdmFsdWUgZnJvbSBsaXN0IGJ5IGluZGV4IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFRoZSBpbmRleCBpcyByZW1vdmVkIGZyb20gdGhlIGxpc3QncyBzdG9yYWdlIGFmdGVyIHJldHVybmluZyBpdCdzIHZhbHVlLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHBsdWNrIHZhbHVlIGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBpbmRleDogaW5kZXggb2YgdmFsdWUgaW4gdGhlIGxpc3QuXHJcbiAgIFtvcHRpb25hbF0gbWlzc2luZzogaWYgaW5kZXggaGFzIG5vdCBiZWVuIHNldCwgcmV0dXJuIHRoaXMgdmFsdWUgaW5zdGVhZC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uSW50TGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UGx1Y2soT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZyk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5Gb3JtTGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG4vKiogR2V0cyB0aGUgdmFsdWUgb2YgdGhlIHZlcnkgZmlyc3QgZWxlbWVudCBpbiBhIGxpc3QsIGFuZCBzdWJzZXF1ZW50bHkgcmVtb3ZlcyB0aGUgaW5kZXggYWZ0ZXJ3YXJkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNoaWZ0IHZhbHVlIGZyb20uIFNldCBub25lIHRvIGdldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0IHRvIHNoaWZ0IGl0J3MgZmlyc3QgdmFsdWUgZnJvbS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0U2hpZnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2hpZnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ5IGxhc3QgZWxlbWVudCBpbiBhIGxpc3QsIGFuZCBzdWJzZXF1ZW50bHkgcmVtb3ZlcyB0aGUgaW5kZXggYWZ0ZXJ3YXJkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHBvcCB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdCB0byBwb3Agb2ZmIGl0J3MgbGFzdCB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UG9wKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogQWRqdXN0IHRoZSBleGlzdGluZyB2YWx1ZSBvZiBhIGxpc3QgYnkgdGhlIGdpdmVuIGFtb3VudC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzZXQgdmFsdWUgb24uIFNldCBub25lIHRvIHNldCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBpbmRleDogaW5kZXggb2YgdmFsdWUgaW4gdGhlIGxpc3QuXHJcbiAgIGFtb3VudDogKy8tIHRoZSBhbW91bnQgdG8gYWRqdXN0IHRoZSBsaXN0cyBjdXJyZW50IGluZGV4IHZhbHVlIGJ5LlxyXG5cclxucyAwIGlmIGluZGV4IGRvZXMgbm90IGV4aXN0cyAqL1xyXG5leHBvcnQgdmFyIEludExpc3RBZGp1c3QgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5JbnRMaXN0QWRqdXN0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uRmxvYXRMaXN0QWRqdXN0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbi8qKiBJbnNlcnQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHRvIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm5cclxuICAgaWYgc3VjY2Vzc2Z1bC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBhZGQgdG8uIFNldCBub25lIHRvIGFkZCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIGluZGV4OiBwb3NpdGlvbiBpbiBsaXN0IHRvIHB1dCB0aGUgdmFsdWUuIDAgaXMgZmlyc3QgZW50cnkgaW4gbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIGFkZC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0SW5zZXJ0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0SW5zZXJ0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuLyoqIFJlbW92ZSBhIHByZXZpb3VzbHkgYWRkZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIGZyb20gYSBsaXN0IG9uIGZvcm1cclxuICAgb3IgZ2xvYmFsbHkgYW5kIHJldHVybiBob3cgbWFueSBpbnN0YW5jZXMgb2YgdGhpcyB2YWx1ZSB3ZXJlIHJlbW92ZWQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcmVtb3ZlIGZyb20uIFNldCBub25lIHRvIHJlbW92ZSBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byByZW1vdmUuXHJcbiAgIFtvcHRpb25hbF0gYWxsb3dJbnN0YW5jZXM6IHJlbW92ZSBhbGwgaW5zdGFuY2VzIG9mIHRoaXMgdmFsdWUgaW4gYSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RSZW1vdmUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbi8qKiBDbGVhciBhIGxpc3Qgb2YgdmFsdWVzICh1bnNldCkgb24gYW4gZm9ybSBvciBnbG9iYWxseSBhbmRcclxudGhlIHByZXZpb3VzIHNpemUgb2YgbGlzdC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBjbGVhciBvbi4gU2V0IG5vbmUgdG8gY2xlYXIgZ2xvYmFsIGxpc3QuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0Q2xlYXIoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q2xlYXIoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIFJlbW92ZSBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZFxyXG5pZiB3ZSB3ZXJlIHN1Y2Nlc3NmdWwgaW4gZG9pbmcgc28uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcmVtb3ZlIGZyb20uIFNldCBub25lIHRvIHJlbW92ZSBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5JbnRMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RSZW1vdmVBdChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZvcm1MaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbi8qKiBHZXQgc2l6ZSBvZiBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBjaGVjayBvbi4gU2V0IG5vbmUgdG8gY2hlY2sgZ2xvYmFsIGxpc3QuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0Q291bnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q291bnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEdldCB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIG9mIGEgc3BlY2lmaWMgdmFsdWUgd2l0aGluIGEgbGlzdC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBjaGVjayBvbi4gU2V0IG5vbmUgdG8gY2hlY2sgZ2xvYmFsIGxpc3QuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIGxvb2sgZm9yLlxyXG4gICBbb3B0aW9uYWxdIGV4Y2x1ZGU6IGlmIHRydWUsIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIG51bWJlciBvZiBlbGVtZW50cyBOT1QgZXF1YWwgdG8gdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5JbnRMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuLyoqIEZpbmQgYSB2YWx1ZSBpbiBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkgYW5kIHJldHVybiBpdHNcclxuICAgaW5kZXggb3IgLTEgaWYgdmFsdWUgd2FzIG5vdCBmb3VuZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZWFyY2guICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEZpbmQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEZpbmQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBGaW5kIGlmIGEgdmFsdWUgaW4gbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGV4aXN0cywgdHJ1ZSBpZiBpdCBleGlzdHMsXHJcbiAgIGZhbHNlIGlmIGl0IGRvZXNuJ3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2VhcmNoLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0SGFzKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEhhcyA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuLyoqIFNvcnQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIGxpc3QgYnkgdmFsdWVzIGluIGFzY2VuZGluZyBvcmRlci5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzb3J0IG9uLiBTZXQgbm9uZSBmb3IgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0U29ydChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNvcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEZpbGxzIHRoZSBnaXZlbiBpbnB1dCBhcnJheSB3aXRoIHRoZSB2YWx1ZXMgb2YgdGhlIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSxcclxuICAgd2lsbCBmaWxsIHRoZSBhcnJheSB1bnRpbCBlaXRoZXIgdGhlIGFycmF5IG9yIGxpc3QgcnVucyBvdXQgb2YgdmFsaWQgaW5kZXhlc1xyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgc2xpY2VbXTogYW4gaW5pdGlhbGl6ZWQgYXJyYXkgc2V0IHRvIHRoZSBzbGljZSBzaXplIHlvdSB3YW50LCBpLmUuIGludFtdIHNsaWNlID0gbmV3IGludFsxMF1cclxuICAgW29wdGlvbmFsXSBzdGFydEluZGV4OiB0aGUgc3RhcnRpbmcgbGlzdCBpbmRleCB5b3Ugd2FudCB0byBzdGFydCBmaWxsaW5nIHlvdXIgc2xpY2UgYXJyYXkgd2l0aCAqL1xyXG5leHBvcnQgdmFyIEludExpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFNsaWNlKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFNsaWNlKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG4vKiogU2l6ZXMgdGhlIGdpdmVuIGxpc3QgdG8gYSBzZXQgbnVtYmVyIG9mIGVsZW1lbnRzLiBJZiB0aGUgbGlzdCBleGlzdHMgYWxyZWFkeSBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gICB3aGVuIGdpdmVuIGZld2VyIGVsZW1lbnRzLCBvciByZXNpemVkIHRvIHRoZSBhcHByb3ByaWF0ZSBsZW5ndGggd2l0aCB0aGUgZmlsbGVyIGFyZ3VtZW50IGJlaW5nIHVzZWQgYXNcclxuICAgdGhlIGRlZmF1bHQgdmFsdWVzXHJcblxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgdHJ1bmNhdGVkIChzaWduZWQpIG9yIGFkZGVkICh1bnNpZ25lZCkgb250byB0aGUgbGlzdC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHRvTGVuZ3RoOiBUaGUgc2l6ZSB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIGxpc3QgdG8uIE1heCBsZW5ndGggd2hlbiB1c2luZyB0aGlzIGZ1bmN0aW9uIGlzIDUwMC5cclxuICAgW29wdGlvbmFsXSBmaWxsZXI6IFdoZW4gYWRkaW5nIGVtcHR5IGVsZW1lbnRzIHRvIHRoZSBsaXN0IHRoaXMgd2lsbCBiZSB1c2VkIGFzIHRoZSBkZWZhdWx0IHZhbHVlICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbi8qKiBDcmVhdGVzIGEgY29weSBvZiBhcnJheSBvbiB0aGUgZ2l2ZW4gc3RvcmFnZSBsaXN0IGF0IHRoZSBnaXZlbiBvYmplY3Qra2V5LFxyXG4gICBvdmVyd3JpdGluZyBhbnkgbGlzdCB0aGF0IG1pZ2h0IGFscmVhZHkgZXhpc3RzLlxyXG5cclxuICAgUmV0dXJucyB0cnVlIG9uIHN1Y2Nlc3MuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICBjb3B5W106IFRoZSBwYXB5cnVzIGFycmF5IHdpdGggdGhlIGNvbnRlbnQgeW91IHdpc2ggdG8gY29weSBvdmVyIGludG8gU3RvcmFnZVV0aWxcclxuICAgW29wdGlvbmFsXSBmaWxsZXI6IFdoZW4gYWRkaW5nIGVtcHR5IGVsZW1lbnRzIHRvIHRoZSBsaXN0IHRoaXMgd2lsbCBiZSB1c2VkIGFzIHRoZSBkZWZhdWx0IHZhbHVlICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5JbnRMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3B5KE9iaktleSwgS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZvcm1MaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG4vKiogT3V0cHV0cyB0aGUgdmFsdWVzIGN1cnJlbnRseSBzdG9yZWQgYnkgdGhlIGdpdmVuIG9iamVjdCtrZXkuXHJcblxyXG4gICBSZXR1cm5zIGEgbmV3IGFycmF5IGNvbnRhaW5pbmcgdGhlIHZhbHVlcy5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5JbnRMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RUb0FycmF5KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0VG9BcnJheSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG4vKiogUmV0dXJucyBhcnJheSBvZiBmb3JtcyBmcm9tIGxpc3QgdGhhdCBoYXZlIChvciBvcHRpb25hbGx5IGRvbid0IGhhdmUpIHRoZSBzcGVjaWZpZWQgZm9ybSB0eXBlcy5cclxuICAgRm9yIHZhbGlkIGxpc3Qgb2YgZm9ybSB0eXBlcywgc2VlIEZvcm1UeXBlLnBzYyBvciBodHRwOi8vd3d3LmNyZWF0aW9ua2l0LmNvbS9HZXRUeXBlXy1fRm9ybVxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgRm9ybVR5cGVJRHNbXTogVGhlIGludCBwYXB5cnVzIGFycmF5IHdpdGggYWxsIHRoZSBmb3JtIHR5cGVzIHlvdSB3aXNoIHRvIGZpbHRlciBmb3JcclxuICAgW29wdGlvbmFsXSBSZXR1cm5NYXRjaGluZzogQnkgZGVmYXVsdCwgVFJVRSwgdGhlIG91dHB1dCBGb3JtW10gYXJyYXkgd2lsbCBjb250YWluIGZvcm1zIGZyb20gbGlzdCB0aGF0IG1hdGNoIHRoZSBmb3JtIHR5cGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHNldCB0byBGQUxTRSwgaW52ZXJ0cyB0aGUgcmVzdWx0aW5nIGFycmF5IHdpdGggZm9ybXMgdGhhdCBoYXZlIGEgdHlwZSB0aGF0IERPIE5PVCBtYXRjaC4gKi9cclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbHRlckJ5VHlwZXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlEcywgUmV0dXJuTWF0Y2hpbmcpIHtcclxuICAgIGlmIChSZXR1cm5NYXRjaGluZyA9PT0gdm9pZCAwKSB7IFJldHVybk1hdGNoaW5nID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0RmlsdGVyQnlUeXBlcyhPYmpLZXksIEtleU5hbWUsIEZvcm1UeXBlSURzLCBSZXR1cm5NYXRjaGluZyk7XHJcbn07XHJcbi8vIENvbnZlbmllbmNlIHZlcnNpb24gb2YgRm9ybUxpc3RGaWx0ZXJCeVR5cGVzKCkgZm9yIHdoZW4gb25seSBnZXR0aW5nIGEgc2luZ2xlIHR5cGUuXHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaWx0ZXJCeVR5cGUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlELCBSZXR1cm5NYXRjaGluZykge1xyXG4gICAgaWYgKFJldHVybk1hdGNoaW5nID09PSB2b2lkIDApIHsgUmV0dXJuTWF0Y2hpbmcgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RGaWx0ZXJCeVR5cGUoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlELCBSZXR1cm5NYXRjaGluZyk7XHJcbn07XHJcbi8qKiBDb3VudHMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG5cclxuICAgUHJlZml4S2V5OiBUaGUgc3RyaW5nIGEgS2V5TmFtZSBtdXN0IHN0YXJ0IHdpdGggdG8gYmUgY291bnRlZC4gQ2Fubm90IGJlIGVtcHR5LiAqL1xyXG5leHBvcnQgdmFyIENvdW50SW50VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEludFZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdFZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRTdHJpbmdWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50U3RyaW5nVmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1WYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50Rm9ybVZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGbG9hdExpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZsb2F0TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50U3RyaW5nTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50Rm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1MaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbi8vIFBlcmZvcm1zIGFsbCBvZiB0aGUgYWJvdmUgcHJlZml4IGNvdW50cyBpbiBvbmUgZ28uXHJcbmV4cG9ydCB2YXIgQ291bnRBbGxQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEFsbFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vKiogQ291bnRzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwZXJmb3JtIHRoZSBwcmVmaXggY291bnQgb24uXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNvdW50ZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDb3VudE9iakludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakludFZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9iakZsb2F0VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRmxvYXRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpTdHJpbmdWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpTdHJpbmdWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRm9ybVZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9iakludExpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqSW50TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGbG9hdExpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRmxvYXRMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudE9ialN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqU3RyaW5nTGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGb3JtTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpGb3JtTGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8vIFBlcmZvcm1zIGFsbCBvZiB0aGUgYWJvdmUgcHJlZml4IGNvdW50cyBpbiBvbmUgZ28uXHJcbmV4cG9ydCB2YXIgQ291bnRBbGxPYmpQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50QWxsT2JqUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuLyoqIENsZWFycyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcbiAgIFJldHVybnMgdGhlIG51bWJlciBvZiB2YWx1ZXMvbGlzdHMgdGhhdCB3ZXJlIHVuc2V0LlxyXG5cclxuICAgUHJlZml4S2V5OiBUaGUgc3RyaW5nIGEgS2V5TmFtZSBtdXN0IHN0YXJ0IHdpdGggdG8gYmUgY2xlYXJlZC4gQ2Fubm90IGJlIGVtcHR5LiAqL1xyXG5leHBvcnQgdmFyIENsZWFySW50VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckludFZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGbG9hdFZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJTdHJpbmdWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyU3RyaW5nVmFsdWVQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZvcm1WYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRm9ybVZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJJbnRMaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGbG9hdExpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZsb2F0TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyU3RyaW5nTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyU3RyaW5nTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZvcm1MaXN0UHJlZml4KFByZWZpeEtleSk7IH07XHJcbi8vIFBlcmZvcm1zIGFsbCBvZiB0aGUgYWJvdmUgcHJlZml4IGNsZWFycyBpbiBvbmUgZ28uXHJcbmV4cG9ydCB2YXIgQ2xlYXJBbGxQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckFsbFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vKiogQ2xlYXJzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBzcGVjaWZpYyBvYmplY3RzLlxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdmFsdWVzL2xpc3RzIHRoYXQgd2VyZSB1bnNldC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwZXJmb3JtIHRoZSBwcmVmaXggY2xlYXIgb24uXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNsZWFyZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDbGVhck9iakludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakludFZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9iakZsb2F0VmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRmxvYXRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpTdHJpbmdWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpTdHJpbmdWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRm9ybVZhbHVlUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9iakludExpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqSW50TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGbG9hdExpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRmxvYXRMaXN0UHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhck9ialN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqU3RyaW5nTGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGb3JtTGlzdFByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpGb3JtTGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8vIFBlcmZvcm1zIGFsbCBvZiB0aGUgYWJvdmUgcHJlZml4IGNsZWFycyBpbiBvbmUgZ28uXHJcbmV4cG9ydCB2YXIgQ2xlYXJBbGxPYmpQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyQWxsT2JqUHJlZml4KE9iaktleSwgUHJlZml4S2V5KTsgfTtcclxuLyoqIERlYnVnIGZ1bmN0aW9ucyAtIGNhbiBiZSBoZWxwZnVsIHRvIGZpbmQgcHJvYmxlbXMgb3IgZm9yIGRldmVsb3BtZW50LiAqL1xyXG5leHBvcnQgdmFyIGRlYnVnX0RlbGV0ZVZhbHVlcyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0RlbGV0ZVZhbHVlcyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0RlbGV0ZUFsbFZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0RlbGV0ZUFsbFZhbHVlcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0NsZWFudXAgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19DbGVhbnVwKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsSW50T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEludE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGbG9hdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGbG9hdE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxTdHJpbmdPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsU3RyaW5nT2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZvcm1PYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRm9ybU9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxJbnRMaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEludExpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRmxvYXRMaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZsb2F0TGlzdE9ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxTdHJpbmdMaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbFN0cmluZ0xpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRm9ybUxpc3RPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRm9ybUxpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqSW50S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakludEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGbG9hdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGbG9hdEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpTdHJpbmdLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqU3RyaW5nS2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZvcm1LZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRm9ybUtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpJbnRMaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakludExpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRmxvYXRMaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZsb2F0TGlzdEtleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpTdHJpbmdMaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9ialN0cmluZ0xpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRm9ybUxpc3RLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRm9ybUxpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nT2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1PYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1PYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0TGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ09iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nT2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtT2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtT2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nS2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nS2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1LZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdMaXN0S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nS2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0tleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtS2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1LZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0TGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG4vKiogU3RvcmFnZSBmdW5jdGlvbnMgLSBzZXBhcmF0ZSBmaWxlLiBUaGVzZSBhcmUgc2hhcmVkIGluIGFsbCBzYXZlIGdhbWVzLiBWYWx1ZXMgYXJlIGxvYWRlZCBhbmQgc2F2ZWRcclxuICAgd2hlbiBzYXZlZ2FtZSBpcyBsb2FkZWQgb3Igc2F2ZWQuXHJcblxyXG4gICBERVBSRUNBVEVEIHYyLjk6IFJlcGxhY2VkIGJ5IEpzb25VdGlsIGZ1bmN0aW9ucy4gRXhpc3RpbmcgZnVuY3Rpb25zIGhlcmUgaGF2ZSBiZWVuIHByb3hpZWQgdG8gYSBzaGFyZWRcclxuICAganNvbiBmaWxlIHRvIG1haW50YWluIGNvbXBhdGliaWxpdHkuICovXHJcbmV4cG9ydCB2YXIgRmlsZVNldEludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0SW50VmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0RmxvYXRWYWx1ZShLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0U3RyaW5nVmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTZXRGb3JtVmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVBZGp1c3RJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVBZGp1c3RJbnRWYWx1ZShLZXlOYW1lLCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVBZGp1c3RGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uRmlsZUFkanVzdEZsb2F0VmFsdWUoS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlVW5zZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRJbnRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlVW5zZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldEZsb2F0VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0U3RyaW5nVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldEZvcm1WYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzSW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0ludFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNGbG9hdFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzU3RyaW5nVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0Zvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzRm9ybVZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVHZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUdldEludFZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVHZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRGbG9hdFZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUdldFN0cmluZ1ZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVHZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRGb3JtVmFsdWUoS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlSW50TGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0QWRkKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEFkZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0QWRqdXN0KEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RBZGp1c3QgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEFkanVzdChLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlSW50TGlzdFJlbW92ZShLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlbW92ZShLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUludExpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEdldChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFNldChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RTZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDbGVhcihLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUludExpc3RSZW1vdmVBdChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZW1vdmVBdChLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0SW5zZXJ0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEluc2VydCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdENvdW50KEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RDb3VudCA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RGaW5kKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0RmluZCA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RIYXMoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFNsaWNlKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0U2xpY2UgPSBmdW5jdGlvbiAoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZXNpemUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IDA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlSW50TGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q29weShLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfU2F2ZUZpbGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19TYXZlRmlsZSgpOyB9O1xyXG4vKiogQ3VycmVudGx5IG5vIGxvbmdlciBpbXBsZW1lbnRlZCwgdW5rbm93biBpZi93aGVuIHRoZXkgd2lsbCByZXR1cm4uICovXHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0RmxvYXRLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nS2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldFN0cmluZ0tleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludExpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0RmxvYXRMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleXNDb3VudCgpOyB9O1xyXG4wO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0RmxvYXRLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0tleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldFN0cmluZ0tleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludExpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0RmxvYXRMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVEZWxldGVBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlRGVsZXRlQWxsVmFsdWVzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfU2V0RGVidWdNb2RlID0gZnVuY3Rpb24gKGVuYWJsZWQpIHsgcmV0dXJuIHNuLmRlYnVnX1NldERlYnVnTW9kZShlbmFibGVkKTsgfTtcclxuZXhwb3J0IHZhciBJbXBvcnRGaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lLCByZXN0cmljdEtleSwgcmVzdHJpY3RUeXBlLCByZXN0cmljdEZvcm0sIHJlc3RyaWN0R2xvYmFsLCBrZXlDb250YWlucykge1xyXG4gICAgaWYgKHJlc3RyaWN0S2V5ID09PSB2b2lkIDApIHsgcmVzdHJpY3RLZXkgPSBcIlwiOyB9XHJcbiAgICBpZiAocmVzdHJpY3RUeXBlID09PSB2b2lkIDApIHsgcmVzdHJpY3RUeXBlID0gLTE7IH1cclxuICAgIGlmIChyZXN0cmljdEZvcm0gPT09IHZvaWQgMCkgeyByZXN0cmljdEZvcm0gPSBudWxsOyB9XHJcbiAgICBpZiAocmVzdHJpY3RHbG9iYWwgPT09IHZvaWQgMCkgeyByZXN0cmljdEdsb2JhbCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoa2V5Q29udGFpbnMgPT09IHZvaWQgMCkgeyBrZXlDb250YWlucyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW1wb3J0RmlsZShmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMpO1xyXG59O1xyXG5mYWxzZTtcclxuZXhwb3J0IHZhciBFeHBvcnRGaWxlID0gZnVuY3Rpb24gKGZpbGVOYW1lLCByZXN0cmljdEtleSwgcmVzdHJpY3RUeXBlLCByZXN0cmljdEZvcm0sIHJlc3RyaWN0R2xvYmFsLCBrZXlDb250YWlucywgYXBwZW5kKSB7XHJcbiAgICBpZiAocmVzdHJpY3RLZXkgPT09IHZvaWQgMCkgeyByZXN0cmljdEtleSA9IFwiXCI7IH1cclxuICAgIGlmIChyZXN0cmljdFR5cGUgPT09IHZvaWQgMCkgeyByZXN0cmljdFR5cGUgPSAtMTsgfVxyXG4gICAgaWYgKHJlc3RyaWN0Rm9ybSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0Rm9ybSA9IG51bGw7IH1cclxuICAgIGlmIChyZXN0cmljdEdsb2JhbCA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0R2xvYmFsID0gZmFsc2U7IH1cclxuICAgIGlmIChrZXlDb250YWlucyA9PT0gdm9pZCAwKSB7IGtleUNvbnRhaW5zID0gZmFsc2U7IH1cclxuICAgIGlmIChhcHBlbmQgPT09IHZvaWQgMCkgeyBhcHBlbmQgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRXhwb3J0RmlsZShmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMsIGFwcGVuZCk7XHJcbn07XHJcbmZhbHNlO1xyXG4iLCJcclxuaW1wb3J0ICogYXMgc3AgZnJvbSBcInNreXJpbVBsYXRmb3JtXCJcclxuY29uc3QgTUNNID0gc3AuTUNNXHJcblxyXG5leHBvcnQgdmFyIEdldE1vZFNldHRpbmdCb29sID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSkge3JldHVybiBNQ00uR2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwgc2V0dGluZ19uYW1lKX1cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nSW50ID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSkge3JldHVybiBNQ00uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBzZXR0aW5nX25hbWUpfVxyXG5leHBvcnQgdmFyIEdldE1vZFNldHRpbmdGbG9hdCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUpIHtyZXR1cm4gTUNNLkdldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBzZXR0aW5nX25hbWUpfVxyXG5leHBvcnQgdmFyIEdldE1vZFNldHRpbmdTdHJpbmcgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lKSB7cmV0dXJuIE1DTS5HZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsIHNldHRpbmdfbmFtZSl9XHJcblxyXG5leHBvcnQgdmFyIFNldE1vZFNldHRpbmdCb29sID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpfVxyXG5leHBvcnQgdmFyIFNldE1vZFNldHRpbmdJbnQgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSkge3JldHVybiBNQ00uU2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX1cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nRmxvYXQgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSkge3JldHVybiBNQ00uU2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpfVxyXG5leHBvcnQgdmFyIFNldE1vZFNldHRpbmdTdHJpbmcgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSkge3JldHVybiBNQ00uU2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9