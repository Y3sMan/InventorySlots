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
        this.getAllSlots().forEach(function (s) {
            s.widget.setAlpha(0.0);
        });
        this.updateWidgets();
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
    // printConsole(`determineItemCategory:: category number == ${category}`)
    var key = Object.keys(categoryToSlot)[category];
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
    inventoryCurrentHighlighted.setAlpha(1);
    inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
    // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slotMax}`)
    slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat(slotCurrent + vol, ") /").concat(slot.baseSize.toFixed(2)));
    slot.widget.setColor([0, 1, 0, 1]);
}
var GetItemHighlighted = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var count, tuple, vol, slot, slotMax, slotCurrent, isInventory, isContainer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.001)];
            case 1:
                _a.sent();
                inventoryCurrentHighlighted.setAlpha(1);
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
                // slot.grayIn()
                Slot.updateWidgets();
                isInventory = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('InventoryMenu');
                isContainer = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('ContainerMenu');
                // printConsole(`Volume: ${vol}\nSlot: ${slot.name}`)
                inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
                vol *= count;
                if (isInventory) {
                }
                else if (isContainer) {
                    slot.widget.setColor([0, 1, 0, 1]);
                    // slot.widget.setColorR(0)
                    // slot.widget.setColorG(1)
                    // slot.widget.setColorB(0)
                    if (isViewingContainer()) {
                        // slot.widget.setColor([1,0.1,.1,1])
                        if (slotCurrent + vol > slotMax) {
                            slot.widget.setColor([1, 0, 0, 1]);
                        }
                        // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slot.baseSize}`)
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat(slotCurrent + vol, ") /").concat(slotMax));
                    }
                    else if (!isViewingContainer()) {
                        if (slotCurrent + vol > slotMax) {
                            slot.widget.setColor([1, 0, 0, 1]);
                        }
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (").concat(slotCurrent - vol, ") /").concat(slotMax));
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
function DenySelection(itemId, oldContainer, slotName) {
    var _a;
    if (slotName === void 0) { slotName = 'Its slot'; }
    var count = getHighlightedItemCount();
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
                inventoryCurrentHighlighted.setAlpha(0);
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
    if (menuName != 'ContainerMenu' && menuName != 'InventoryMenu') {
        return;
    }
    var item = 0;
    // if (!item){return;}
    inventoryCurrentHighlighted.setAlpha(1);
    Slot.updateWidgets();
    // on('mouseMove', () => {
    //     printConsole(Game.getFormEx( Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") )?.getName())
    // });
    handle = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
        if (menuName === 'InventoryMenu') {
            item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
        }
        else if (menuName === 'ContainerMenu') {
            item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
        }
        if (item != lastitemName) {
            GetItemHighlighted(item);
            lastitemName = item;
        }
    });
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function (event) {
    if (event.name == 'InventoryMenu' || event.name == 'ContainerMenu') {
        inventoryCurrentHighlighted.setAlpha(0);
        Slot.fadeAllOut();
        if (handle) {
            (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.unsubscribe)(handle);
        }
        EvaluateInventory();
    }
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    // printConsole(Object.values(importFile()['volumes'])[ItemCategories.RABInv_ItemType_ArmorGauntlets])
    // importSlotsfromFile()
    // saveToDataFile()
    importDataFromFile();
    if ((0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/plugins/InventorySlots.js') && (0,_skyrim_platform_papyrus_util_MiscUtil__WEBPACK_IMPORTED_MODULE_1__.FileExists)('data/platform/pluginsdev/InventorySlots.js')) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('ABORT TESTING. THERE ARE TWO INSTANCES OF THIS SCRIPT');
    }
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
    var volume = info[0] * getHighlightedItemCount();
    var slot = info[1];
    if (event.oldContainer) {
        oldId = event.oldContainer.getFormID();
    }
    if (event.newContainer) {
        newId = event.newContainer.getFormID();
    }
    // if (ignoreFlag){ignoreFlag = false; return;}
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("oldcontainer == ".concat(event.oldContainer.getFormID()));
    (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)("newcontainer == ".concat(event.newContainer.getFormID()));
    // Item added to player's inventory
    if (newId == 20 && !ignoreFlag) {
        // the slot is filled
        if (slot.currentSize + volume > slot.baseSize) {
            // if the item was picked up from the world
            if (!event.oldContainer) {
                DropItem(itemId, num);
                // printConsole('!event.oldContainer')
            }
            // if the item was taken from a container
            else {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)('Trying to deny selection');
                DenySelection(itemId, event.oldContainer, slot.name);
                // printConsole('event.oldContainer')
            }
            ignoreFlag = true;
        }
        else {
            addItemtoSlot(itemId, num);
        }
    }
    // Item removed from player's inventory
    else if (oldId == 20 && !ignoreFlag) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5U2xvdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixTQUFJLElBQUksU0FBSTtBQUMvQixjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQzRJO0FBQzdDO0FBQ3pEO0FBQ3NCO0FBQ047QUFDdUM7QUFDdkQ7QUFDdEM7QUFDQSxvREFBSTtBQUNKO0FBQ0EsWUFBWSxrRkFBVSwyQ0FBMkMsa0ZBQVU7QUFDM0UsWUFBWSw0REFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw4REFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsK0RBQWU7QUFDZixzQ0FBc0Msb0VBQVM7QUFDL0M7QUFDTyxnQkFBZ0IsT0FBTywwREFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUMxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3Q0FBd0M7QUFDbEM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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REFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TGxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FDO0FBQ3JDLFNBQVMsNkRBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ08sK0VBQStFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ08sMkVBQTJFO0FBQ2xGO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFD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Q2xDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDTztBQUNQLGtDQUFrQztBQUNsQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLHFDQUFxQztBQUNyQyxrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNodUJBO0FBQ29DO0FBQ3BDLFlBQVksK0NBQU07QUFDbEI7QUFDTywwREFBMEQ7QUFDMUQseURBQXlEO0FBQ3pELDJEQUEyRDtBQUMzRCw0REFBNEQ7QUFDbkU7QUFDTyxpRUFBaUU7QUFDakUsZ0VBQWdFO0FBQ2hFLGtFQUFrRTtBQUNsRSxtRUFBbUU7Ozs7O1VDWjFFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9zcmMvSW52ZW50b3J5U2xvdHMudHMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvZXh0ZXJuYWwgdmFyIFtcInNreXJpbVBsYXRmb3JtXCJdIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcGFweXJ1cy11dGlsL01pc2NVdGlsLmpzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vc3JjL21vZGV2ZW50LnRzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4uL21vZHVsZXMvU1BUZXh0VXRpbHMvc3BUZXh0VXRpbHMudHMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9wbzMtcGFweXJ1cy1leHRlbmRlci9QTzNfU0tTRUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL3NyYy9TbG90c19NY20udHMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi9ub2RlX21vZHVsZXMvQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWwuanMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvLi4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vbWNtLWhlbHBlci9NQ00uanMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IG9uY2UsIG9uLCBGb3JtLCBHYW1lLCBVdGlsaXR5LCBwcmludENvbnNvbGUsIE9iamVjdFJlZmVyZW5jZSwgYnJvd3NlciwgZGVzdHJveUFsbFRleHRzLCBEZWJ1ZywgdW5zdWJzY3JpYmUgfSBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbmltcG9ydCB7IFdyaXRlVG9GaWxlLCBSZWFkRnJvbUZpbGUsIEZpbGVFeGlzdHMgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvTWlzY1V0aWxcIjtcclxuaW1wb3J0IHsgTW9kRXZlbnQgfSBmcm9tICcuL21vZGV2ZW50JztcclxuaW1wb3J0ICogYXMgd3QgZnJvbSAnLi4vLi4vbW9kdWxlcy9TUFRleHRVdGlscy9zcFRleHRVdGlscyc7XHJcbmltcG9ydCB7IFVpIH0gZnJvbSAnQHNreXJpbS1wbGF0Zm9ybS9za3lyaW0tcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBBZGRBbGxJdGVtc1RvQXJyYXkgfSBmcm9tICdAc2t5cmltLXBsYXRmb3JtL3BvMy1wYXB5cnVzLWV4dGVuZGVyL1BPM19TS1NFRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgbWFpbk1jbSB9IGZyb20gXCIuL1Nsb3RzX01jbVwiO1xyXG4vLyBzY3JpcHQgY2hlY2tcclxub25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoZWNrU2NyaXB0TnVtYmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgaWYgKEZpbGVFeGlzdHMoXCJkYXRhL3BsYXRmb3JtL3BsdWdpbnMvXCIuY29uY2F0KG5hbWUpKSAmJiBGaWxlRXhpc3RzKFwiZGF0YS9wbGF0Zm9ybS9wbHVnaW5zZGV2L1wiLmNvbmNhdChuYW1lKSkpIHtcclxuICAgICAgICAgICAgcHJpbnRDb25zb2xlKCdBQk9SVCBURVNUSU5HLiBUSEVSRSBBUkUgVFdPIElOU1RBTkNFUyBPRiBUSElTIFNDUklQVCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGVja1NjcmlwdE51bWJlcnMoJ0ludmVudG9yeVNsb3RzLmpzJyk7XHJcbn0pO1xyXG4vL19fX19fX19fX19fX19fX19fX19fX19fX19fIFZhcmlhYmxlIFNldHVwX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5icm93c2VyLnNldFZpc2libGUodHJ1ZSk7XHJcbnZhciB4ID0gMjUwMDtcclxudmFyIHkgPSAxMDAwO1xyXG52YXIgd2hpdGUgPSBbMSwgMSwgMSwgMV07XHJcbmRlc3Ryb3lBbGxUZXh0cygpO1xyXG52YXIgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkID0gbmV3IHd0LnNwVGV4dCgxNTAwLCB5LCAnY3VycmVudEl0ZW0nLCBbMSwgMSwgMSwgMF0sIHVuZGVmaW5lZCwgJ0ludmVudG9yeVNsb3RzJyk7XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fRlVOQ1RJT05TX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5leHBvcnQgZnVuY3Rpb24gcGwoKSB7IHJldHVybiBHYW1lLmdldFBsYXllcigpOyB9XHJcbnZhciB3ZWFwS3dkSWRzO1xyXG4oZnVuY3Rpb24gKHdlYXBLd2RJZHMpIHtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQmF0dGxlYXhlXCJdID0gNDQ4ODE4XSA9IFwiV2VhcFR5cGVCYXR0bGVheGVcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQm91bmRBcnJvd1wiXSA9IDExMDMxMDVdID0gXCJXZWFwVHlwZUJvdW5kQXJyb3dcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQm91bmRXZWFwb25cIl0gPSAyMjc4MTddID0gXCJXZWFwVHlwZUJvdW5kV2VhcG9uXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZUJvd1wiXSA9IDEyNDY5M10gPSBcIldlYXBUeXBlQm93XCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZURhZ2dlclwiXSA9IDEyNDY5MV0gPSBcIldlYXBUeXBlRGFnZ2VyXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZUdyZWF0c3dvcmRcIl0gPSA0NDg4MTddID0gXCJXZWFwVHlwZUdyZWF0c3dvcmRcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlTWFjZVwiXSA9IDEyNDY5Ml0gPSBcIldlYXBUeXBlTWFjZVwiO1xyXG4gICAgLy8gV2VhcFR5cGVNZWxlZSA9IDQyMjUyMyxcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlU3RhZmZcIl0gPSAxMjQ2OTRdID0gXCJXZWFwVHlwZVN0YWZmXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVN3b3JkXCJdID0gMTI0Njg5XSA9IFwiV2VhcFR5cGVTd29yZFwiO1xyXG4gICAgLy8gV2VhcFR5cGVVbmlxdWUgPSAxMzYzNjEwLFxyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVXYXJBeGVcIl0gPSAxMjQ2OTBdID0gXCJXZWFwVHlwZVdhckF4ZVwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVXYXJoYW1tZXJcIl0gPSA0NDg4MTZdID0gXCJXZWFwVHlwZVdhcmhhbW1lclwiO1xyXG59KSh3ZWFwS3dkSWRzIHx8ICh3ZWFwS3dkSWRzID0ge30pKTtcclxudmFyIGFybW9yS3dkSWRzO1xyXG4oZnVuY3Rpb24gKGFybW9yS3dkSWRzKSB7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yQm9vdHNcIl0gPSA0NDI2MDVdID0gXCJBcm1vckJvb3RzXCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yQ2xvdGhpbmdcIl0gPSA0NDEzMjBdID0gXCJBcm1vckNsb3RoaW5nXCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yQ3VpcmFzc1wiXSA9IDQ0MjYwNF0gPSBcIkFybW9yQ3VpcmFzc1wiO1xyXG4gICAgYXJtb3JLd2RJZHNbYXJtb3JLd2RJZHNbXCJBcm1vckdhdW50bGV0c1wiXSA9IDQ0MjYwN10gPSBcIkFybW9yR2F1bnRsZXRzXCI7XHJcbiAgICAvLyBBcm1vckhlYXZ5ID0gNDQxMjk4LFxyXG4gICAgYXJtb3JLd2RJZHNbYXJtb3JLd2RJZHNbXCJBcm1vckhlbG1ldFwiXSA9IDQ0MjYwNl0gPSBcIkFybW9ySGVsbWV0XCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9ySmV3ZWxyeVwiXSA9IDQ0MTMyMV0gPSBcIkFybW9ySmV3ZWxyeVwiO1xyXG4gICAgLy8gQXJtb3JMaWdodCA9IDQ0MTI5OSxcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JTaGllbGRcIl0gPSA2MTU4NThdID0gXCJBcm1vclNoaWVsZFwiO1xyXG59KShhcm1vckt3ZElkcyB8fCAoYXJtb3JLd2RJZHMgPSB7fSkpO1xyXG52YXIgbWlzY0t3ZElkcztcclxuKGZ1bmN0aW9uIChtaXNjS3dkSWRzKSB7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQW5pbWFsSGlkZVwiXSA9IDU5NTE3OF0gPSBcIlZlbmRvckl0ZW1BbmltYWxIaWRlXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQW5pbWFsUGFydFwiXSA9IDU5NTE3OV0gPSBcIlZlbmRvckl0ZW1BbmltYWxQYXJ0XCI7XHJcbiAgICAvLyBWZW5kb3JJdGVtQXJtb3IgPSA1ODgxMjEsXHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQXJyb3dcIl0gPSA1OTU5NDNdID0gXCJWZW5kb3JJdGVtQXJyb3dcIjtcclxuICAgIC8vIFZlbmRvckl0ZW1DbG90aGluZyA9IDU4ODEyMyxcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1DbHV0dGVyXCJdID0gNTk1MTc3XSA9IFwiVmVuZG9ySXRlbUNsdXR0ZXJcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1EYWVkcmljQXJ0aWZhY3RcIl0gPSA1OTU5NDRdID0gXCJWZW5kb3JJdGVtRGFlZHJpY0FydGlmYWN0XCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtRmlyZXdvcmRcIl0gPSA3ODE1MjddID0gXCJWZW5kb3JJdGVtRmlyZXdvcmRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Gb29kXCJdID0gNTc3MDAyXSA9IFwiVmVuZG9ySXRlbUZvb2RcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Gb29kUmF3XCJdID0gNjU5MDMwXSA9IFwiVmVuZG9ySXRlbUZvb2RSYXdcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1HZW1cIl0gPSA1OTUxODFdID0gXCJWZW5kb3JJdGVtR2VtXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtSW5ncmVkaWVudFwiXSA9IDU3NzAwM10gPSBcIlZlbmRvckl0ZW1JbmdyZWRpZW50XCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtSmV3ZWxyeVwiXSA9IDU4ODEyMl0gPSBcIlZlbmRvckl0ZW1KZXdlbHJ5XCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtS2V5XCJdID0gNTk1MTgzXSA9IFwiVmVuZG9ySXRlbUtleVwiO1xyXG4gICAgLy8gVmVuZG9ySXRlbU9yZGVyUm9iZXMgPSAyOTQzMzYsXHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtT3JlSW5nb3RcIl0gPSA1OTUxODBdID0gXCJWZW5kb3JJdGVtT3JlSW5nb3RcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1QZWFjZXdlZWRcIl0gPSAyOTU5OTldID0gXCJWZW5kb3JJdGVtUGVhY2V3ZWVkXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtUG9pc29uXCJdID0gNTc3MDA1XSA9IFwiVmVuZG9ySXRlbVBvaXNvblwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVBvdGlvblwiXSA9IDU3NzAwNF0gPSBcIlZlbmRvckl0ZW1Qb3Rpb25cIjtcclxuICAgIC8vIFZlbmRvckl0ZW1Qcm9wZXJ0eUFya01hcmtldCA9IDEzMTYxODMsXHJcbiAgICAvLyBWZW5kb3JJdGVtUHJvcGVydHlBcmtVcHBlckNpdHkgPSAyOTAxMDYsXHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtUmVjaXBlXCJdID0gMTAwNjc2OF0gPSBcIlZlbmRvckl0ZW1SZWNpcGVcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1TY3JvbGxcIl0gPSA2NTkwMzFdID0gXCJWZW5kb3JJdGVtU2Nyb2xsXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtU291bEdlbVwiXSA9IDYwNDA2N10gPSBcIlZlbmRvckl0ZW1Tb3VsR2VtXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtU3BlbGxUb21lXCJdID0gNjA0MDY5XSA9IFwiVmVuZG9ySXRlbVNwZWxsVG9tZVwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUJvb2tcIl0gPSA2MDQwNjZdID0gXCJWZW5kb3JJdGVtQm9va1wiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVN0YWZmXCJdID0gNjA0MDY4XSA9IFwiVmVuZG9ySXRlbVN0YWZmXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtVG9vbFwiXSA9IDU5NTE4Ml0gPSBcIlZlbmRvckl0ZW1Ub29sXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtV2VhcG9uXCJdID0gNTg4MTIwXSA9IFwiVmVuZG9ySXRlbVdlYXBvblwiO1xyXG59KShtaXNjS3dkSWRzIHx8IChtaXNjS3dkSWRzID0ge30pKTtcclxuZXhwb3J0IHZhciBJdGVtQ2F0ZWdvcmllcztcclxuKGZ1bmN0aW9uIChJdGVtQ2F0ZWdvcmllcykge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dcIl0gPSAwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZFwiXSA9IDFdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRcIl0gPSAyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWRcIl0gPSAzXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIXCJdID0gNF0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb24xSFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhfRXF1aXBwZWRcIl0gPSA1XSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySFwiXSA9IDZdID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkhcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkXCJdID0gN10gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb24ySF9FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyXCJdID0gOF0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcl9FcXVpcHBlZFwiXSA9IDldID0gXCJSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Dcm9zc0Jvd1wiXSA9IDEwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Dcm9zc0Jvd19FcXVpcHBlZFwiXSA9IDExXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dcIl0gPSAxMl0gPSBcIlJBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd19FcXVpcHBlZFwiXSA9IDEzXSA9IFwiUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd19FcXVpcHBlZFwiO1xyXG4gICAgLy8gYXJtb3JzXHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZFwiXSA9IDE0XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZF9FcXVpcHBlZFwiXSA9IDE1XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3NcIl0gPSAxNl0gPSBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3NcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc19FcXVpcHBlZFwiXSA9IDE3XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzc19FcXVpcHBlZFwiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c1wiXSA9IDE4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHNfRXF1aXBwZWRcIl0gPSAxOV0gPSBcIlJBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldFwiXSA9IDIwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZFwiXSA9IDIxXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0X0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c1wiXSA9IDIyXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZFwiXSA9IDIzXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzX0VxdWlwcGVkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9DbG90aGVzXCJdID0gMjRdID0gXCJSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc1wiO1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZFwiXSA9IDI1XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNfRXF1aXBwZWRcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0pld2VscnlcIl0gPSAyNl0gPSBcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkXCJdID0gMjddID0gXCJSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeV9FcXVpcHBlZFwiO1xyXG4gICAgLy8gbWlzY1xyXG4gICAgSXRlbUNhdGVnb3JpZXNbSXRlbUNhdGVnb3JpZXNbXCJSQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbFwiXSA9IDI4XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGxcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0Zvb2RcIl0gPSAyOV0gPSBcIlJBQkludl9JdGVtVHlwZV9Gb29kXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Qb3Rpb25cIl0gPSAzMF0gPSBcIlJBQkludl9JdGVtVHlwZV9Qb3Rpb25cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0RyaW5rXCJdID0gMzFdID0gXCJSQUJJbnZfSXRlbVR5cGVfRHJpbmtcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnRcIl0gPSAzMl0gPSBcIlJBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9HZW1cIl0gPSAzM10gPSBcIlJBQkludl9JdGVtVHlwZV9HZW1cIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX1NvdWxnZW1cIl0gPSAzNF0gPSBcIlJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9Mb2NrcGlja1wiXSA9IDM1XSA9IFwiUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2VcIl0gPSAzNl0gPSBcIlJBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2VcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW1cIl0gPSAzN10gPSBcIlJBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9NaXNjU21hbGxcIl0gPSAzOF0gPSBcIlJBQkludl9JdGVtVHlwZV9NaXNjU21hbGxcIjtcclxuICAgIEl0ZW1DYXRlZ29yaWVzW0l0ZW1DYXRlZ29yaWVzW1wiUkFCSW52X0l0ZW1UeXBlX0dvbGRcIl0gPSAzOV0gPSBcIlJBQkludl9JdGVtVHlwZV9Hb2xkXCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9PcmVJbmdvdFwiXSA9IDQwXSA9IFwiUkFCSW52X0l0ZW1UeXBlX09yZUluZ290XCI7XHJcbiAgICBJdGVtQ2F0ZWdvcmllc1tJdGVtQ2F0ZWdvcmllc1tcIlJBQkludl9JdGVtVHlwZV9IaWRlUGVsdFwiXSA9IDQxXSA9IFwiUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0XCI7XHJcbn0pKEl0ZW1DYXRlZ29yaWVzIHx8IChJdGVtQ2F0ZWdvcmllcyA9IHt9KSk7XHJcbmV4cG9ydCB2YXIgaXRlbUNhdGVnb3J5Vm9sdW1lcyA9IHtcclxuICAgIC8vIHdlYXBvbnNcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3cnOiAxLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZCc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHQnOiAwLjUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWQnOiAwLjUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIJzogNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUhfRXF1aXBwZWQnOiA1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24ySCc6IDEwLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24ySF9FcXVpcHBlZCc6IDEwLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXInOiAyLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXJfRXF1aXBwZWQnOiAyLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Dcm9zc0Jvdyc6IDgsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkJzogOCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93JzogOCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkJzogOCxcclxuICAgIC8vYXJtb3JzXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkJzogOSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWQnOiA5LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3MnOiAxNSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkJzogMTUsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHMnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzX0VxdWlwcGVkJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXQnOiA2LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZCc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzJzogNCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWQnOiA0LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9DbG90aGVzJzogNixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZCc6IDYsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0pld2VscnknOiAzLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkJzogMyxcclxuICAgIC8vbWlzY1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsJzogMixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfRm9vZCc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1BvdGlvbic6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0RyaW5rJzogMixcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSW5ncmVkaWVudCc6IDAuMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfR2VtJzogMSxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfU291bGdlbSc6IDEsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0xvY2twaWNrJzogMC41LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2UnOiA1LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtJzogMyxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsJzogMC4xLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Hb2xkJzogMC4wLFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9PcmVJbmdvdCc6IDIsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0JzogMVxyXG59O1xyXG52YXIga2V5d29yZFRvQ2F0ZWdvcnkgPSB7XHJcbiAgICAvLyB3ZWFwb25zXHJcbiAgICA0NDg4MTg6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24ySCxcclxuICAgIDEyNDY5MzogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvdyxcclxuICAgIDEyNDY5MTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgNDQ4ODE3OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgsXHJcbiAgICAxMjQ2OTI6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIDEyNDY5NDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFILFxyXG4gICAgMTI0Njg5OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgsXHJcbiAgICAxMjQ2OTA6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9XZWFwb24xSCxcclxuICAgIDQ0ODgxNjogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJILFxyXG4gICAgNTk1OTQzOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3csXHJcbiAgICAvLyBhcm1vcnNcclxuICAgIDQ0MjYwNTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0FybW9yQm9vdHMsXHJcbiAgICA0NDEzMjA6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9DbG90aGVzLFxyXG4gICAgNDQyNjA0OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzLFxyXG4gICAgNDQyNjA3OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHMsXHJcbiAgICA0NDI2MDY6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldCxcclxuICAgIDQ0MTMyMTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0pld2VscnksXHJcbiAgICA2MTU4NTg6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZCxcclxuICAgIC8vIE1pc2NzXHJcbiAgICA1OTUxNzg6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9IaWRlUGVsdCxcclxuICAgIDU5NTE3OTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Zvb2QsXHJcbiAgICA1OTUxNzc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9NaXNjU21hbGwsXHJcbiAgICA3ODE1Mjc6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtLFxyXG4gICAgNTc3MDAyOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfRm9vZCxcclxuICAgIDY1OTAzMDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Zvb2QsXHJcbiAgICA1OTUxODE6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9HZW0sXHJcbiAgICA1NzcwMDM6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50LFxyXG4gICAgNTg4MTIyOiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSxcclxuICAgIDU5NTE4MDogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX09yZUluZ290LFxyXG4gICAgNTc3MDA1OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfUG90aW9uLFxyXG4gICAgNTc3MDA0OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfUG90aW9uLFxyXG4gICAgMTAwNjc2ODogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICA2NTkwMzE6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsLFxyXG4gICAgNjA0MDY3OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfU291bGdlbSxcclxuICAgIDYwNDA2OTogSXRlbUNhdGVnb3JpZXMuUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwsXHJcbiAgICA2MDQwNjY6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsLFxyXG4gICAgNjA0MDY4OiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUgsXHJcbiAgICA1OTUxODI6IEl0ZW1DYXRlZ29yaWVzLlJBQkludl9JdGVtVHlwZV9NaXNjU21hbGwsXHJcbn07XHJcbmZ1bmN0aW9uIGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICB2YXIgZiA9IEdhbWUuZ2V0Rm9ybUV4KGl0ZW0pO1xyXG4gICAgdmFyIGlzRXF1aXBwZWQgPSAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNFcXVpcHBlZChmKTtcclxuICAgIGlmICghZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHByaW50Q29uc29sZShgaXNFcXVpcHBlZDo6ICR7cGwoKT8uaXNFcXVpcHBlZChmKX1gKVxyXG4gICAgdmFyIGt5ZHMgPSBmLmdldEtleXdvcmRzKCk7XHJcbiAgICB2YXIga2V5ID0gLTE7XHJcbiAgICBpZiAoaXRlbSA9PSAxNSkge1xyXG4gICAgICAgIHJldHVybiBJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfR29sZDtcclxuICAgIH0gLy8gZ29sZCBkb2Vzbid0IGhhdmUgYSBrZXl3b3JkIGFuZCBuZWVkcyB0byBiZSB0cmVhdGVkIGRpZmZlcmVudFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAoa3lkcyA9PT0gbnVsbCB8fCBreWRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBreWRzLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgIHZhciBrID0ga3lkc1tpXTtcclxuICAgICAgICB2YXIgZl8xID0gRm9ybS5mcm9tKGspLmdldEZvcm1JRCgpO1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhrZXl3b3JkVG9DYXRlZ29yeSkuaW5jbHVkZXMoXCJcIi5jb25jYXQoZl8xKSkpIHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBrZXkgPSBrZXl3b3JkVG9DYXRlZ29yeVtmXzFdO1xyXG4gICAgICAgICAgICBpZiAoaXNFcXVpcHBlZCkge1xyXG4gICAgICAgICAgICAgICAga2V5ICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID4gMjcpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgZGV0ZXJtaW5lSXRlbUNhdGVnb3J5OjogdGhlIGtleSBpcyAke2tleX1gKVxyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoYGRldGVybWluZUl0ZW1DYXRlZ29yeTo6IHRoZSBrZXl3b3JkIGlkIGlzICR7Zn1gKVxyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGtleSA9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRldGVybWluZUl0ZW1Wb2x1bWUoaXRlbSkge1xyXG4gICAgdmFyIGNhdGVnb3J5ID0gZGV0ZXJtaW5lSXRlbUNhdGVnb3J5KGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9IE9iamVjdC52YWx1ZXMoaXRlbUNhdGVnb3J5Vm9sdW1lcylbY2F0ZWdvcnldO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKGBkZXRlcm1pbmVJdGVtVm9sdW1lOjogdGhlIHZvbCBpcyAke3ZvbH1gKVxyXG4gICAgaWYgKCF2b2wpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB2b2w7XHJcbn1cclxudmFyIEJhc2VTbG90cyA9IFtdO1xyXG52YXIgU2xvdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNsb3QobmFtZSwgbWF4U2l6ZSwgeCwgeSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5iYXNlU2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy53aWRnZXQgPSBuZXcgd3Quc3BUZXh0KHgsIHksIHRoaXMubmFtZSwgd2hpdGUsIHVuZGVmaW5lZCwgJ0ludmVudG9yeVNsb3RzJyk7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIEJhc2VTbG90cy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgU2xvdC5wcm90b3R5cGUuZ2V0RmlsbGVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTaXplLnRvRml4ZWQoMik7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5wcm90b3R5cGUuZ2V0RmlsbGVkUHJvcG9ydGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5uYW1lLCBcIjogICBcIikuY29uY2F0KHRoaXMuY3VycmVudFNpemUudG9GaXhlZCgyKSwgXCIgLyBcIikuY29uY2F0KHRoaXMuYmFzZVNpemUudG9GaXhlZCgyKSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5wcm90b3R5cGUuZ3JheUluID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMud2lkZ2V0LnNldEFscGhhKDEpO1xyXG4gICAgfTtcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBpZiAocy5jdXJyZW50U2l6ZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzLmN1cnJlbnRTaXplID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgxKTtcclxuICAgICAgICAgICAgcy53aWRnZXQuc2V0Q29sb3Iod2hpdGUpO1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRUZXh0KHMuZ2V0RmlsbGVkUHJvcG9ydGlvbigpKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmZhZGVBbGxPdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQmFzZVNsb3RzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgcy53aWRnZXQuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5mYWRlQWxsSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgQmFzZVNsb3RzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgcy53aWRnZXQuc2V0QWxwaGEoMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5nZXRBbGxTbG90TmFtZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG5hbWVzID0gW107XHJcbiAgICAgICAgQmFzZVNsb3RzLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAgICAgbmFtZXMucHVzaChzLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuYW1lcztcclxuICAgIH07XHJcbiAgICBTbG90LmdldEFsbFNsb3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBCYXNlU2xvdHM7XHJcbiAgICB9O1xyXG4gICAgU2xvdC5yZXNldFNsb3RDYXBhY2l0aWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsU2xvdHMoKS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIHMuY3VycmVudFNpemUgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZ3JheU91dEFsbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmdldEFsbFNsb3RzKCkuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgwLjApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTbG90O1xyXG59KCkpO1xyXG5leHBvcnQgeyBTbG90IH07XHJcbnZhciBNaXNjX3Nsb3QgPSBuZXcgU2xvdCgnTWlzYycsIDIwMCwgeCwgeSk7XHJcbnZhciBXZWFwb25TaGVhdGhzX3Nsb3QgPSBuZXcgU2xvdCgnV2VhcG9ucycsIDIwLCB4LCB5ICsgMjApO1xyXG52YXIgQW1tb19zbG90ID0gbmV3IFNsb3QoJ1F1aXZlcicsIDYwLCB4LCB5ICsgNDApO1xyXG52YXIgVmFsdWFibGVzX3Nsb3QgPSBuZXcgU2xvdCgnVmFsdWFibGVzJywgNTAsIHgsIHkgKyA2MCk7XHJcbnZhciBCb3R0bGVzX3Nsb3QgPSBuZXcgU2xvdCgnQm90dGxlcycsIDEwLCB4LCB5ICsgODApO1xyXG4vLyBsZXQgRXF1aXBwZWRfc2xvdCA9IG5ldyBTbG90KCdFcXVpcHBlZCBMb2FkJyw1MCwgeCwgeSArIDEwMClcclxuZnVuY3Rpb24gZGV0ZXJtaW5lSXRlbXNTbG90KGl0ZW0pIHtcclxuICAgIHZhciBjYXRlZ29yeSA9IGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgZGV0ZXJtaW5lSXRlbUNhdGVnb3J5OjogY2F0ZWdvcnkgbnVtYmVyID09ICR7Y2F0ZWdvcnl9YClcclxuICAgIHZhciBrZXkgPSBPYmplY3Qua2V5cyhjYXRlZ29yeVRvU2xvdClbY2F0ZWdvcnldO1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlUb1Nsb3QpW2NhdGVnb3J5XTtcclxufVxyXG5leHBvcnQgdmFyIGNhdGVnb3J5VG9TbG90ID0ge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkgnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25EYWdnZXInOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcl9FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3cnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3cnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvd19FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgIC8vIGFybW9yc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JTaGllbGRfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzcyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckJvb3RzX0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXRfRXF1aXBwZWQnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZCc6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlcyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQ2xvdGhlc19FcXVpcHBlZCc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5X0VxdWlwcGVkJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgLy8gbWlzY1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Gb29kJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Qb3Rpb24nOiBCb3R0bGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0RyaW5rJzogQm90dGxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50JzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9HZW0nOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfU291bGdlbSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Mb2NrcGljayc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTWlzY0xhcmdlJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjU21hbGwnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0dvbGQnOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3QnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0JzogTWlzY19zbG90XHJcbn07XHJcbmZ1bmN0aW9uIHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKSB7XHJcbiAgICByZXR1cm4gW2RldGVybWluZUl0ZW1Wb2x1bWUoaXRlbSksIGRldGVybWluZUl0ZW1zU2xvdChpdGVtKV07XHJcbn1cclxuZnVuY3Rpb24gYWRkSXRlbXRvU2xvdChpdGVtLCBudW0sIG5ld1Nsb3QpIHtcclxuICAgIGlmIChudW0gPT09IHZvaWQgMCkgeyBudW0gPSAxOyB9XHJcbiAgICBpZiAobmV3U2xvdCA9PT0gdm9pZCAwKSB7IG5ld1Nsb3QgPSB1bmRlZmluZWQ7IH1cclxuICAgIHZhciBzbG90O1xyXG4gICAgdmFyIHR1cGxlID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9IHR1cGxlWzBdICogbnVtO1xyXG4gICAgaWYgKCFuZXdTbG90KSB7XHJcbiAgICAgICAgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2xvdCA9IG5ld1Nsb3Q7XHJcbiAgICB9XHJcbiAgICBzbG90Lml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoc2xvdC5pdGVtcylcclxuICAgIHNsb3QuY3VycmVudFNpemUgKz0gdm9sO1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIG51bSwgb2xkU2xvdCkge1xyXG4gICAgaWYgKG51bSA9PT0gdm9pZCAwKSB7IG51bSA9IDE7IH1cclxuICAgIGlmIChvbGRTbG90ID09PSB2b2lkIDApIHsgb2xkU2xvdCA9IHVuZGVmaW5lZDsgfVxyXG4gICAgdmFyIHNsb3Q7XHJcbiAgICB2YXIgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICB2YXIgdm9sID0gdHVwbGVbMF0gKiBudW07XHJcbiAgICB2YXIgc3RvcEZsYWcgPSBmYWxzZTtcclxuICAgIC8vIGlmICghb2xkU2xvdCl7XHJcbiAgICAvLyAgICAgc2xvdCA9IHR1cGxlWzFdXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIEJhc2VTbG90cy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgaWYgKHMuaXRlbXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHM7XHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShzbG90Lm5hbWUpOyBcclxuICAgICAgICAgICAgc3RvcEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGkgPSBzbG90Lml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgIHNsb3QuaXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICBzbG90LmN1cnJlbnRTaXplIC09IHZvbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHN0b3BGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIGlmIChzdG9wRmxhZyl7cmV0dXJufVxyXG4gICAgLy8gZWxzZSB7c2xvdC5jdXJyZW50U2l6ZSAtPSB2b2x9XHJcbiAgICAvLyBvbGRTbG90LmN1cnJlbnRTaXplIC09IHZvbFxyXG4gICAgLy8gfVxyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbn1cclxuLy8gY29uc3QgR2V0SXRlbVNlbGVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4vLyBcdGF3YWl0IFV0aWxpdHkud2FpdCgwLjAxKTtcclxuLy8gXHRjb25zdCByZWNpZXZlZDogRm9ybSA9IHN1LkdldEZvcm1WYWx1ZShudWxsLCBcIllNLlJBQi5TZWxlY3QuXCIpXHJcbi8vIFx0aWYgKCFyZWNpZXZlZCkge3JldHVybjt9XHJcbi8vICAgICAvLyBhZGRJdGVtdG9TbG90KHJlY2lldmVkKVxyXG4vLyB9XHJcbmZ1bmN0aW9uIHNsb3RMb29rYXRJdGVtKGl0ZW0sIG51bSkge1xyXG4gICAgaWYgKG51bSA9PT0gdm9pZCAwKSB7IG51bSA9IDE7IH1cclxuICAgIHZhciB0dXBsZSA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKTtcclxuICAgIHZhciB2b2wgPSArKHR1cGxlWzBdKS50b0ZpeGVkKDIpICogbnVtO1xyXG4gICAgdmFyIHNsb3QgPSB0dXBsZVsxXTtcclxuICAgIHZhciBzbG90TWF4ID0gc2xvdC5iYXNlU2l6ZS50b0ZpeGVkKDIpO1xyXG4gICAgdmFyIHNsb3RDdXJyZW50ID0gKyhzbG90LmN1cnJlbnRTaXplKS50b0ZpeGVkKDIpO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKGBsb3RBdEl0ZW06OiBzbG90LmJhc2VTaXplID0gJHtzbG90LmJhc2VTaXplfWApXHJcbiAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRUZXh0KFwiVm9sdW1lOiBcIi5jb25jYXQodm9sLCBcIlxcblNsb3Q6IFwiKS5jb25jYXQoc2xvdC5uYW1lKSk7XHJcbiAgICAvLyBzbG90LndpZGdldC5zZXRUZXh0KGAke3Nsb3QubmFtZX06ICAke3Nsb3RDdXJyZW50fSAoKyR7dm9sfSkgLyR7c2xvdE1heH1gKVxyXG4gICAgc2xvdC53aWRnZXQuc2V0VGV4dChcIlwiLmNvbmNhdChzbG90Lm5hbWUsIFwiOiAgXCIpLmNvbmNhdChzbG90Q3VycmVudCwgXCIgKFwiKS5jb25jYXQoc2xvdEN1cnJlbnQgKyB2b2wsIFwiKSAvXCIpLmNvbmNhdChzbG90LmJhc2VTaXplLnRvRml4ZWQoMikpKTtcclxuICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yKFswLCAxLCAwLCAxXSk7XHJcbn1cclxudmFyIEdldEl0ZW1IaWdobGlnaHRlZCA9IGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNvdW50LCB0dXBsZSwgdm9sLCBzbG90LCBzbG90TWF4LCBzbG90Q3VycmVudCwgaXNJbnZlbnRvcnksIGlzQ29udGFpbmVyO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4wMDEpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpO1xyXG4gICAgICAgICAgICAgICAgY291bnQgPSBnZXRIaWdobGlnaHRlZEl0ZW1Db3VudCgpO1xyXG4gICAgICAgICAgICAgICAgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2b2wgPSArKHR1cGxlWzBdKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2b2wgfHwgIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90TWF4ID0gc2xvdC5iYXNlU2l6ZS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvdEN1cnJlbnQgPSArKHNsb3QuY3VycmVudFNpemUpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoYEdldEl0ZW1IaWdobGlnaHRlZDo6IHNsb3QuYmFzZVNpemUgPSAke3Nsb3QuYmFzZVNpemV9YClcclxuICAgICAgICAgICAgICAgIC8vIHNsb3QuZ3JheUluKClcclxuICAgICAgICAgICAgICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgICAgICAgICAgaXNJbnZlbnRvcnkgPSBVaS5pc01lbnVPcGVuKCdJbnZlbnRvcnlNZW51Jyk7XHJcbiAgICAgICAgICAgICAgICBpc0NvbnRhaW5lciA9IFVpLmlzTWVudU9wZW4oJ0NvbnRhaW5lck1lbnUnKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShgVm9sdW1lOiAke3ZvbH1cXG5TbG90OiAke3Nsb3QubmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFRleHQoXCJWb2x1bWU6IFwiLmNvbmNhdCh2b2wsIFwiXFxuU2xvdDogXCIpLmNvbmNhdChzbG90Lm5hbWUpKTtcclxuICAgICAgICAgICAgICAgIHZvbCAqPSBjb3VudDtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ludmVudG9yeSkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvcihbMCwgMSwgMCwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldENvbG9yUigwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldENvbG9yRygxKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNsb3Qud2lkZ2V0LnNldENvbG9yQigwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ZpZXdpbmdDb250YWluZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbG90LndpZGdldC5zZXRDb2xvcihbMSwwLjEsLjEsMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbG90Q3VycmVudCArIHZvbCA+IHNsb3RNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yKFsxLCAwLCAwLCAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2xvdC53aWRnZXQuc2V0VGV4dChgJHtzbG90Lm5hbWV9OiAgJHtzbG90Q3VycmVudH0gKCske3ZvbH0pIC8ke3Nsb3QuYmFzZVNpemV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0VGV4dChcIlwiLmNvbmNhdChzbG90Lm5hbWUsIFwiOiAgXCIpLmNvbmNhdChzbG90Q3VycmVudCwgXCIgKFwiKS5jb25jYXQoc2xvdEN1cnJlbnQgKyB2b2wsIFwiKSAvXCIpLmNvbmNhdChzbG90TWF4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1ZpZXdpbmdDb250YWluZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdEN1cnJlbnQgKyB2b2wgPiBzbG90TWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LndpZGdldC5zZXRDb2xvcihbMSwgMCwgMCwgMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQsIFwiIChcIikuY29uY2F0KHNsb3RDdXJyZW50IC0gdm9sLCBcIikgL1wiKS5jb25jYXQoc2xvdE1heCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmZ1bmN0aW9uIERyb3BJdGVtKGl0ZW1JZCwgbnVtKSB7XHJcbiAgICB2YXIgaGFuZGxlID0gTW9kRXZlbnQuQ3JlYXRlKCdZTV9SQUJfU0xPVFNfRHJvcFJlcXVlc3QnKTtcclxuICAgIE1vZEV2ZW50LlB1c2hJbnQoaGFuZGxlLCBpdGVtSWQpO1xyXG4gICAgTW9kRXZlbnQuUHVzaEludChoYW5kbGUsIG51bSk7XHJcbiAgICBNb2RFdmVudC5TZW5kKGhhbmRsZSk7XHJcbn1cclxudmFyIHdhaXRSZW1vdmVJdGVtID0gZnVuY3Rpb24gKGl0ZW0sIGNvbnRhaW5lcikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfYTtcclxuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcclxuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgVXRpbGl0eS53YWl0KDAuMSldO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlSXRlbShHYW1lLmdldEZvcm1FeChpdGVtKSwgMSwgZmFsc2UsIE9iamVjdFJlZmVyZW5jZS5mcm9tKEdhbWUuZ2V0Rm9ybUV4KGNvbnRhaW5lcikpKTtcclxuICAgICAgICAgICAgICAgIFVpLmludm9rZUJvb2woXCJIVUQgTWVudVwiLCBcIl9nbG9iYWwuc2t5dWkuY29tcG9uZW50cy5saXN0Lkxpc3RMYXlvdXQuUmVmcmVzaFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmZ1bmN0aW9uIERlbnlTZWxlY3Rpb24oaXRlbUlkLCBvbGRDb250YWluZXIsIHNsb3ROYW1lKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAoc2xvdE5hbWUgPT09IHZvaWQgMCkgeyBzbG90TmFtZSA9ICdJdHMgc2xvdCc7IH1cclxuICAgIHZhciBjb3VudCA9IGdldEhpZ2hsaWdodGVkSXRlbUNvdW50KCk7XHJcbiAgICAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlSXRlbShHYW1lLmdldEZvcm1FeChpdGVtSWQpLCBjb3VudCwgdHJ1ZSwgb2xkQ29udGFpbmVyKTtcclxuICAgIFVpLmludm9rZUJvb2woXCJIVUQgTWVudVwiLCBcIl9nbG9iYWwuc2t5dWkuY29tcG9uZW50cy5saXN0Lkxpc3RMYXlvdXQuUmVmcmVzaFwiLCB0cnVlKTtcclxuICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIllvdSBjYW4gbm90IHBpY2sgdGhpcyBpdGVtIHVwLiBcIi5jb25jYXQoc2xvdE5hbWUsIFwiIGlzIGZ1bGxcIikpO1xyXG59XHJcbnZhciB3YWl0RmFkZU91dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgxLjUpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmFkZWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2xvdC5mYWRlQWxsT3V0KCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5mdW5jdGlvbiBpc1ZpZXdpbmdDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gVWkuZ2V0SW50KFwiQ29udGFpbmVyTWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuY2F0ZWdvcnlMaXN0LmFjdGl2ZVNlZ21lbnRcIikgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIEV2YWx1YXRlSW52ZW50b3J5KCkge1xyXG4gICAgLy8gUmUtZXZhbHVhdGUgcGxheWVyIGludmVudG9yeSBhbmQgZmlsbCBzbG90cyBhY2NvcmRpbmdseVxyXG4gICAgU2xvdC5yZXNldFNsb3RDYXBhY2l0aWVzKCk7XHJcbiAgICB2YXIgYWxsSXRlbXMgPSBBZGRBbGxJdGVtc1RvQXJyYXkocGwoKSwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcclxuICAgIGFsbEl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgYWRkSXRlbXRvU2xvdChmLmdldEZvcm1JRCgpLCAoX2EgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SXRlbUNvdW50KGYpKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhpZ2hsaWdodGVkSXRlbUNvdW50KCkge1xyXG4gICAgaWYgKFVpLmlzTWVudU9wZW4oJ0NvbnRhaW5lck1lbnUnKSkge1xyXG4gICAgICAgIHJldHVybiBVaS5nZXRJbnQoXCJDb250YWluZXJNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5pdGVtTGlzdC5zZWxlY3RlZEVudHJ5LmNvdW50XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoVWkuaXNNZW51T3BlbignSW52ZW50b3J5TWVudScpKSB7XHJcbiAgICAgICAgcmV0dXJuIFVpLmdldEludChcIkludmVudG9yeU1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuY291bnRcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMTtcclxufVxyXG4vLyBKU09OIGZpbGUgZnVuY3Rpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlVG9EYXRhRmlsZSgpIHtcclxuICAgIHZhciBkYXRhX2pzb24gPSAnZGF0YS9za3NlL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMvU2xvdHMuanNvbic7XHJcbiAgICAvLyBDaGVjayBpZiBqc29uIGZpbGUgZXhpc3RzLCBhbmQgY3JlYXRlIG9uZSBpZiBvdGhlcndpc2VcclxuICAgIGlmICghRmlsZUV4aXN0cyhkYXRhX2pzb24pKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHZhciBvbGRGaWxlID0gUmVhZEZyb21GaWxlKGRhdGFfanNvbik7XHJcbiAgICAvLyBJZiB0aGUgZmlsZSBpcyBlbXB0eSwgbGlrZSBhZnRlciBqdXN0IGJlaW5nIGNyZWF0ZWQgb3Igc29tZXRoaW5nLCBnaXZlIGl0IHRoZSBpbml0aWFsIHt9ICdzcXVhY2tldCcgdGhpbmdzXHJcbiAgICBpZiAob2xkRmlsZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkoe30pLCBmYWxzZSk7XHJcbiAgICAgICAgc2F2ZVRvRGF0YUZpbGUoKTtcclxuICAgIH1cclxuICAgIHZhciBpbm5lckRpY3QgPSBKU09OLnBhcnNlKG9sZEZpbGUpO1xyXG4gICAgaW5uZXJEaWN0Wyd2b2x1bWVzJ10gPSBpdGVtQ2F0ZWdvcnlWb2x1bWVzO1xyXG4gICAgaW5uZXJEaWN0WydzbG90cyddID0gU2xvdC5nZXRBbGxTbG90cygpO1xyXG4gICAgdmFyIHNsb3ROYW1lcyA9IFtdO1xyXG4gICAgdmFyIGNhdE5hbWVzID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpO1xyXG4gICAgT2JqZWN0LnZhbHVlcyhjYXRlZ29yeVRvU2xvdCkuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xyXG4gICAgICAgIHZhciBuYW1lID0gcy5uYW1lO1xyXG4gICAgICAgIHZhciBjYXQgPSBjYXROYW1lc1tpXTtcclxuICAgICAgICBzbG90TmFtZXMucHVzaChbY2F0LCBuYW1lXSk7XHJcbiAgICB9KTtcclxuICAgIGlubmVyRGljdFsnQ2F0ZWdvcnktdG8tU2xvdHMnXSA9IHNsb3ROYW1lcztcclxuICAgIFdyaXRlVG9GaWxlKGRhdGFfanNvbiwgSlNPTi5zdHJpbmdpZnkoaW5uZXJEaWN0KSwgZmFsc2UpO1xyXG59XHJcbmZ1bmN0aW9uIGltcG9ydEZpbGUoKSB7XHJcbiAgICB2YXIgZGF0YV9qc29uID0gJ2RhdGEvc2tzZS9wbHVnaW5zL0ludmVudG9yeVNsb3RzL1Nsb3RzLmpzb24nO1xyXG4gICAgaWYgKCFGaWxlRXhpc3RzKGRhdGFfanNvbikpIHtcclxuICAgICAgICBXcml0ZVRvRmlsZShkYXRhX2pzb24sIEpTT04uc3RyaW5naWZ5KHt9KSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgdmFyIG9sZEZpbGUgPSBSZWFkRnJvbUZpbGUoZGF0YV9qc29uKTtcclxuICAgIGlmIChvbGRGaWxlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgV3JpdGVUb0ZpbGUoZGF0YV9qc29uLCBKU09OLnN0cmluZ2lmeSh7fSksIGZhbHNlKTtcclxuICAgICAgICBzYXZlVG9EYXRhRmlsZSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uob2xkRmlsZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNsb3RGcm9tTmFtZShuYW1lKSB7XHJcbiAgICB2YXIgb3V0cHV0ID0gdW5kZWZpbmVkO1xyXG4gICAgU2xvdC5nZXRBbGxTbG90cygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB2YXIgc19uYW1lID0gcy5uYW1lO1xyXG4gICAgICAgIGlmIChuYW1lLnRvTG93ZXJDYXNlKCkgPT0gc19uYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgb3V0cHV0ID0gcztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbn1cclxuZnVuY3Rpb24gaW1wb3J0U2xvdHNmcm9tRmlsZSgpIHtcclxuICAgIHZhciBzbG90X2luZm8gPSBpbXBvcnRGaWxlKClbJ3Nsb3RzJ107XHJcbiAgICB2YXIgbmFtZXMgPSBbXTtcclxuICAgIHNsb3RfaW5mby5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBzWyduYW1lJ107XHJcbiAgICAgICAgaWYgKCFTbG90LmdldEFsbFNsb3ROYW1lcygpLmluY2x1ZGVzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIG5hbWVzLnB1c2goW25hbWUsIHNbJ2Jhc2VTaXplJ10sIHNbJ3gnXSwgc1sneSddXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3X3NpemUgPSBzWydiYXNlU2l6ZSddO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBTbG90LmdldEFsbFNsb3ROYW1lcygpLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgICAgIHZhciBvbGRTbG90ID0gU2xvdC5nZXRBbGxTbG90cygpW2luZGV4XTtcclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGBUaGUgb2xkIHNpemUgaXMgJHtvbGRTbG90LmJhc2VTaXplfSBhbmQgdGhlIG5ldyBzaXplIGlzICR7bmV3X3NpemV9YClcclxuICAgICAgICAgICAgb2xkU2xvdC5iYXNlU2l6ZSA9IG5ld19zaXplO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYFRoZSBuZXcgc2xvdHMgYXJlICR7bmFtZXN9YClcclxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGluZm8pIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGluZm9bMF1bMF07XHJcbiAgICAgICAgdmFyIHNpemUgPSBpbmZvWzBdWzFdO1xyXG4gICAgICAgIHZhciB4ID0gaW5mb1swXVsyXTtcclxuICAgICAgICB2YXIgeSA9IGluZm9bMF1bM107XHJcbiAgICAgICAgbmV3IFNsb3QobmFtZSwgc2l6ZSwgeCwgeSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpbXBvcnRDYXRlZ29yaWVzZnJvbUZpbGUoKSB7XHJcbiAgICB2YXIgY2F0c19zbG90cyA9IGltcG9ydEZpbGUoKVsnQ2F0ZWdvcnktdG8tU2xvdHMnXTtcclxuICAgIGNhdHNfc2xvdHMuZm9yRWFjaChmdW5jdGlvbiAoY2F0X3Nsb3QpIHtcclxuICAgICAgICB2YXIgY2F0ID0gY2F0X3Nsb3RbMF07XHJcbiAgICAgICAgdmFyIHNsb3RfbmFtZSA9IGNhdF9zbG90WzFdO1xyXG4gICAgICAgIHZhciBzbG90ID0gZ2V0U2xvdEZyb21OYW1lKHNsb3RfbmFtZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUb1Nsb3RbY2F0XSA9IHNsb3Q7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0RGF0YUZyb21GaWxlKCkge1xyXG4gICAgaW1wb3J0Q2F0ZWdvcmllc2Zyb21GaWxlKCk7XHJcbiAgICBpbXBvcnRTbG90c2Zyb21GaWxlKCk7XHJcbn1cclxuLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19FVkVOVFNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbi8vIG1jbSBzY3JpcHRcclxubWFpbk1jbSgpO1xyXG52YXIgZXZlbnRCbGFja2xpc3QgPSBbJ1lNX09uU2VsZWN0X3NlbGVjdFByZXNzJywgJ1lNX09uSGlnaGxpZ2h0X3NlbGVjdEhpZ2hsaWdodCddO1xyXG52YXIgaGFuZGxlO1xyXG5vbignbWVudU9wZW4nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBsYXN0aXRlbU5hbWUgPSAtMjtcclxuICAgIHZhciBtZW51TmFtZSA9IGV2ZW50Lm5hbWU7XHJcbiAgICBpZiAobWVudU5hbWUgIT0gJ0NvbnRhaW5lck1lbnUnICYmIG1lbnVOYW1lICE9ICdJbnZlbnRvcnlNZW51Jykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtID0gMDtcclxuICAgIC8vIGlmICghaXRlbSl7cmV0dXJuO31cclxuICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgLy8gb24oJ21vdXNlTW92ZScsICgpID0+IHtcclxuICAgIC8vICAgICBwcmludENvbnNvbGUoR2FtZS5nZXRGb3JtRXgoIFVpLmdldEludChcIkludmVudG9yeU1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpICk/LmdldE5hbWUoKSlcclxuICAgIC8vIH0pO1xyXG4gICAgaGFuZGxlID0gb24oJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAobWVudU5hbWUgPT09ICdJbnZlbnRvcnlNZW51Jykge1xyXG4gICAgICAgICAgICBpdGVtID0gVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG1lbnVOYW1lID09PSAnQ29udGFpbmVyTWVudScpIHtcclxuICAgICAgICAgICAgaXRlbSA9IFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXRlbSAhPSBsYXN0aXRlbU5hbWUpIHtcclxuICAgICAgICAgICAgR2V0SXRlbUhpZ2hsaWdodGVkKGl0ZW0pO1xyXG4gICAgICAgICAgICBsYXN0aXRlbU5hbWUgPSBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxub24oJ21lbnVDbG9zZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50Lm5hbWUgPT0gJ0ludmVudG9yeU1lbnUnIHx8IGV2ZW50Lm5hbWUgPT0gJ0NvbnRhaW5lck1lbnUnKSB7XHJcbiAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDApO1xyXG4gICAgICAgIFNsb3QuZmFkZUFsbE91dCgpO1xyXG4gICAgICAgIGlmIChoYW5kbGUpIHtcclxuICAgICAgICAgICAgdW5zdWJzY3JpYmUoaGFuZGxlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgRXZhbHVhdGVJbnZlbnRvcnkoKTtcclxuICAgIH1cclxufSk7XHJcbm9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIHByaW50Q29uc29sZShPYmplY3QudmFsdWVzKGltcG9ydEZpbGUoKVsndm9sdW1lcyddKVtJdGVtQ2F0ZWdvcmllcy5SQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNdKVxyXG4gICAgLy8gaW1wb3J0U2xvdHNmcm9tRmlsZSgpXHJcbiAgICAvLyBzYXZlVG9EYXRhRmlsZSgpXHJcbiAgICBpbXBvcnREYXRhRnJvbUZpbGUoKTtcclxuICAgIGlmIChGaWxlRXhpc3RzKCdkYXRhL3BsYXRmb3JtL3BsdWdpbnMvSW52ZW50b3J5U2xvdHMuanMnKSAmJiBGaWxlRXhpc3RzKCdkYXRhL3BsYXRmb3JtL3BsdWdpbnNkZXYvSW52ZW50b3J5U2xvdHMuanMnKSkge1xyXG4gICAgICAgIHByaW50Q29uc29sZSgnQUJPUlQgVEVTVElORy4gVEhFUkUgQVJFIFRXTyBJTlNUQU5DRVMgT0YgVEhJUyBTQ1JJUFQnKTtcclxuICAgIH1cclxuICAgIEV2YWx1YXRlSW52ZW50b3J5KCk7XHJcbn0pO1xyXG52YXIgaWdub3JlRmxhZyA9IGZhbHNlO1xyXG5vbignY29udGFpbmVyQ2hhbmdlZCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGFjdGlvbiA9ICdQaWNrZWQgVXAnO1xyXG4gICAgdmFyIG5ld0lkID0gLTE7XHJcbiAgICB2YXIgb2xkSWQgPSAtMTtcclxuICAgIHZhciBpdGVtSWQgPSBldmVudC5iYXNlT2JqLmdldEZvcm1JRCgpO1xyXG4gICAgdmFyIG51bSA9IGV2ZW50Lm51bUl0ZW1zO1xyXG4gICAgdmFyIGluZm8gPSBzb2x2ZUluY29taW5nSXRlbUluZm8oZXZlbnQuYmFzZU9iai5nZXRGb3JtSUQoKSk7XHJcbiAgICB2YXIgdm9sdW1lID0gaW5mb1swXSAqIGdldEhpZ2hsaWdodGVkSXRlbUNvdW50KCk7XHJcbiAgICB2YXIgc2xvdCA9IGluZm9bMV07XHJcbiAgICBpZiAoZXZlbnQub2xkQ29udGFpbmVyKSB7XHJcbiAgICAgICAgb2xkSWQgPSBldmVudC5vbGRDb250YWluZXIuZ2V0Rm9ybUlEKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQubmV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbmV3SWQgPSBldmVudC5uZXdDb250YWluZXIuZ2V0Rm9ybUlEKCk7XHJcbiAgICB9XHJcbiAgICAvLyBpZiAoaWdub3JlRmxhZyl7aWdub3JlRmxhZyA9IGZhbHNlOyByZXR1cm47fVxyXG4gICAgcHJpbnRDb25zb2xlKFwib2xkY29udGFpbmVyID09IFwiLmNvbmNhdChldmVudC5vbGRDb250YWluZXIuZ2V0Rm9ybUlEKCkpKTtcclxuICAgIHByaW50Q29uc29sZShcIm5ld2NvbnRhaW5lciA9PSBcIi5jb25jYXQoZXZlbnQubmV3Q29udGFpbmVyLmdldEZvcm1JRCgpKSk7XHJcbiAgICAvLyBJdGVtIGFkZGVkIHRvIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgaWYgKG5ld0lkID09IDIwICYmICFpZ25vcmVGbGFnKSB7XHJcbiAgICAgICAgLy8gdGhlIHNsb3QgaXMgZmlsbGVkXHJcbiAgICAgICAgaWYgKHNsb3QuY3VycmVudFNpemUgKyB2b2x1bWUgPiBzbG90LmJhc2VTaXplKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIHdhcyBwaWNrZWQgdXAgZnJvbSB0aGUgd29ybGRcclxuICAgICAgICAgICAgaWYgKCFldmVudC5vbGRDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIERyb3BJdGVtKGl0ZW1JZCwgbnVtKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZSgnIWV2ZW50Lm9sZENvbnRhaW5lcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gd2FzIHRha2VuIGZyb20gYSBjb250YWluZXJcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoJ1RyeWluZyB0byBkZW55IHNlbGVjdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgRGVueVNlbGVjdGlvbihpdGVtSWQsIGV2ZW50Lm9sZENvbnRhaW5lciwgc2xvdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZSgnZXZlbnQub2xkQ29udGFpbmVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZ25vcmVGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZEl0ZW10b1Nsb3QoaXRlbUlkLCBudW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEl0ZW0gcmVtb3ZlZCBmcm9tIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZWxzZSBpZiAob2xkSWQgPT0gMjAgJiYgIWlnbm9yZUZsYWcpIHtcclxuICAgICAgICByZW1vdmVJdGVtZnJvbVNsb3QoaXRlbUlkLCBudW0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWdub3JlRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsb3QuY3VycmVudFNpemUgPD0gMCkge1xyXG4gICAgICAgIHNsb3QuY3VycmVudFNpemUgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpbnRDb25zb2xlKCBNaXNjX3Nsb3QuYmFzZVNpemUgKVxyXG59KTtcclxudmFyIGlzRmFkZWluID0gZmFsc2U7XHJcbm9uKCdjcm9zc2hhaXJSZWZDaGFuZ2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgIHZhciBpZCA9IChfYiA9IChfYSA9IGV2ZW50LnJlZmVyZW5jZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1JRCgpO1xyXG4gICAgdmFyIHR5cGVCbGFja2xpc3QgPSBbNjIgLyogQ2hhcmFjdGVyICovLCAyNCAvKiBBY3RpdmF0b3IgKi8sIDI5IC8qIERvb3IgKi8sIDMzIC8qIEFwcGFyYXR1cyAqLywgMjggLyogQ29udGFpbmVyICovLCA0MyAvKiBOUEMgKi8sIDM5IC8qIEZsb3JhICovLCAzOCAvKiBUcmVlICovXTtcclxuICAgIGlmICgoKF9kID0gKF9jID0gZXZlbnQucmVmZXJlbmNlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuaXNQbGF5YWJsZSgpKSAmJiAhdHlwZUJsYWNrbGlzdC5pbmNsdWRlcygoX2YgPSAoX2UgPSBldmVudC5yZWZlcmVuY2UpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5nZXRUeXBlKCkpKSB7XHJcbiAgICAgICAgaXNGYWRlaW4gPSB0cnVlO1xyXG4gICAgICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgIFNsb3QuZmFkZUFsbEluKCk7XHJcbiAgICAgICAgc2xvdExvb2thdEl0ZW0oaWQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaXNGYWRlaW4gPSBmYWxzZTtcclxuICAgICAgICB3YWl0RmFkZU91dCgpO1xyXG4gICAgfVxyXG59KTtcclxub24oJ2VxdWlwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYztcclxuICAgIGlmICgoKF9hID0gZXZlbnQuYWN0b3IuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0Rm9ybUlEKCkpICE9ICgoX2MgPSAoX2IgPSBwbCgpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0QmFzZU9iamVjdCgpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybUlEKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpbnRDb25zb2xlKGV2ZW50LmJhc2VPYmouZ2V0TmFtZSgpKVxyXG4gICAgaWYgKFVpLmlzTWVudU9wZW4oJ01hZ2ljTWVudScpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGl0ZW0gPSBldmVudC5iYXNlT2JqLmdldEZvcm1JRCgpO1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKGBlcXVpcDo6IGlzRXF1aXBwZWQ6OiAke3BsKCk/LmlzRXF1aXBwZWQoZXZlbnQuYmFzZU9iail9YClcclxuICAgIHZhciBvbGRDYXQgPSBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICByZW1vdmVJdGVtZnJvbVNsb3QoaXRlbSwgMSk7XHJcbiAgICBhZGRJdGVtdG9TbG90KGl0ZW0sIDEpO1xyXG59KTtcclxub24oJ3VuZXF1aXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgaWYgKCgoX2EgPSBldmVudC5hY3Rvci5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtSUQoKSkgIT0gKChfYyA9IChfYiA9IHBsKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtSUQoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBwcmludENvbnNvbGUoZXZlbnQuYmFzZU9iai5nZXROYW1lKCkpXHJcbiAgICBpZiAoVWkuaXNNZW51T3BlbignTWFnaWNNZW51JykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaXRlbSA9IGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYHVuZXF1aXA6OiBpc0VxdWlwcGVkOjogJHtwbCgpPy5pc0VxdWlwcGVkKGV2ZW50LmJhc2VPYmopfWApXHJcbiAgICByZW1vdmVJdGVtZnJvbVNsb3QoaXRlbSwgMSk7XHJcbiAgICBhZGRJdGVtdG9TbG90KGl0ZW0sIDEpO1xyXG59KTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuTWlzY1V0aWw7XHJcbi8qKiBDZWxsIHNjYW5uaW5nIGZ1bmN0aW9ucyAqL1xyXG4vLyBTY2FucyB0aGUgY3VycmVudCBjZWxsIG9mIHRoZSBnaXZlbiBDZW50ZXJPbiBmb3IgYW4gb2JqZWN0IG9mIHRoZSBnaXZlbiBmb3JtIHR5cGUgSUQgd2l0aGluIHJhZGl1cyBhbmQgcmV0dXJucyBhbiBhcnJheSBmb3IgYWxsIHRoYXRcclxuLy8gYW5kIChvcHRpb25hbGx5KSBhbHNvIGhhcyB0aGUgZ2l2ZW4ga2V5d29yZCBpZiBjaGFuZ2VkIGZyb20gZGVmYXVsdCBub25lLiBTZXR0aW5nIHJhZGl1cyBoaWdoZXIgdGhhbiAwLjAgd2lsbCByZXN0cmljdCB0aGUgXHJcbi8vIHNlYXJjaCBkaXN0YW5jZSBmcm9tIGFyb3VuZCBDZW50ZXJPbiwgMC4wIHdpbGwgc2VhcmNoIGVudGlyZSBjZWxsIHRoZSBvYmplY3QgaXMgaW4uXHJcbi8vIE5PVEU6IEtleXdvcmQgc2VhcmNoZXMgc2VlbSBhIGxpdHRsZSB1bnByZWRpY3RhYmxlIHNvIGJlIHN1cmUgdG8gdGVzdCBpZiB5b3VyIHVzYWdlIG9mIGl0IHdvcmtzIGJlZm9yZSB1c2luZyB0aGUgcmVzdWx0cy5cclxuZXhwb3J0IHZhciBTY2FuQ2VsbE9iamVjdHMgPSBmdW5jdGlvbiAoZm9ybVR5cGUsIENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQpIHtcclxuICAgIGlmIChyYWRpdXMgPT09IHZvaWQgMCkgeyByYWRpdXMgPSAwLjA7IH1cclxuICAgIGlmIChIYXNLZXl3b3JkID09PSB2b2lkIDApIHsgSGFzS2V5d29yZCA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5TY2FuQ2VsbE9iamVjdHMoZm9ybVR5cGUsIENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQpO1xyXG59O1xyXG4vLyBTY2FucyB0aGUgY3VycmVudCBjZWxsIG9mIHRoZSBnaXZlbiBDZW50ZXJPbiBmb3IgYW4gYWN0b3Igd2l0aGluIHRoZSBnaXZlbiByYWRpdXMgYW5kIHJldHVybnMgYW4gYXJyYXkgZm9yIGFsbCBhY3RvcnMgdGhhdCBhcmVcclxuLy8gY3VycmVudGx5IGFsaXZlIGFuZCAob3B0aW9uYWxseSkgaGFzIHRoZSBnaXZlbiBrZXl3b3JkIGlmIGNoYW5nZWQgZnJvbSBkZWZhdWx0IG5vbmUuIFNldHRpbmcgcmFkaXVzIGhpZ2hlciB0aGFuIDAuMCB3aWxsIHJlc3RyaWN0IHRoZSBcclxuLy8gc2VhcmNoIGRpc3RhbmNlIGZyb20gYXJvdW5kIENlbnRlck9uLCAwLjAgd2lsbCBzZWFyY2ggZW50aXJlIGNlbGwgdGhlIG9iamVjdCBpcyBpbi5cclxuLy8gTk9URTogS2V5d29yZCBzZWFyY2hlcyBzZWVtIGEgbGl0dGxlIHVucHJlZGljdGFibGUgc28gYmUgc3VyZSB0byB0ZXN0IGlmIHlvdXIgdXNhZ2Ugb2YgaXQgd29ya3MgYmVmb3JlIHVzaW5nIHRoZSByZXN1bHRzLlxyXG5leHBvcnQgdmFyIFNjYW5DZWxsTlBDcyA9IGZ1bmN0aW9uIChDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkLCBJZ25vcmVEZWFkKSB7XHJcbiAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsgcmFkaXVzID0gMC4wOyB9XHJcbiAgICBpZiAoSGFzS2V5d29yZCA9PT0gdm9pZCAwKSB7IEhhc0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICBpZiAoSWdub3JlRGVhZCA9PT0gdm9pZCAwKSB7IElnbm9yZURlYWQgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uU2NhbkNlbGxOUENzKENlbnRlck9uLCByYWRpdXMsIEhhc0tleXdvcmQsIElnbm9yZURlYWQpO1xyXG59O1xyXG4vLyBTYW1lIGFzIFNjYW5DZWxsTlBDcygpLCBob3dldmVyIGl0IGZpbHRlcnMgdGhlIHJldHVybiBieSBhIGdpdmVuIGZhY3Rpb24gYW5kIChvcHRpb25hbGx5KSB0aGVpciByYW5rIGluIHRoYXQgZmFjdGlvbi5cclxuZXhwb3J0IHZhciBTY2FuQ2VsbE5QQ3NCeUZhY3Rpb24gPSBmdW5jdGlvbiAoRmluZEZhY3Rpb24sIENlbnRlck9uLCByYWRpdXMsIG1pblJhbmssIG1heFJhbmssIElnbm9yZURlYWQpIHtcclxuICAgIGlmIChyYWRpdXMgPT09IHZvaWQgMCkgeyByYWRpdXMgPSAwLjA7IH1cclxuICAgIGlmIChtaW5SYW5rID09PSB2b2lkIDApIHsgbWluUmFuayA9IDA7IH1cclxuICAgIGlmIChtYXhSYW5rID09PSB2b2lkIDApIHsgbWF4UmFuayA9IDEyNzsgfVxyXG4gICAgaWYgKElnbm9yZURlYWQgPT09IHZvaWQgMCkgeyBJZ25vcmVEZWFkID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlNjYW5DZWxsTlBDc0J5RmFjdGlvbihGaW5kRmFjdGlvbiwgQ2VudGVyT24sIHJhZGl1cywgbWluUmFuaywgbWF4UmFuaywgSWdub3JlRGVhZCk7XHJcbn07XHJcbi8qKiBDYW1lcmEgZnVuY3Rpb25zICovXHJcbi8vIFRvZ2dsZSBmcmVlZmx5IGNhbWVyYS5cclxuZXhwb3J0IHZhciBUb2dnbGVGcmVlQ2FtZXJhID0gZnVuY3Rpb24gKHN0b3BUaW1lKSB7XHJcbiAgICBpZiAoc3RvcFRpbWUgPT09IHZvaWQgMCkgeyBzdG9wVGltZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uVG9nZ2xlRnJlZUNhbWVyYShzdG9wVGltZSk7XHJcbn07XHJcbi8vIFNldCBmcmVlZmx5IGNhbSBzcGVlZC5cclxuZXhwb3J0IHZhciBTZXRGcmVlQ2FtZXJhU3BlZWQgPSBmdW5jdGlvbiAoc3BlZWQpIHsgcmV0dXJuIHNuLlNldEZyZWVDYW1lcmFTcGVlZChzcGVlZCk7IH07XHJcbi8vIFNldCBjdXJyZW50IGZyZWVmbHkgY2FtIHN0YXRlICYgc2V0IHRoZSBzcGVlZCBpZiBlbmFibGluZ1xyXG5leHBvcnQgdmFyIFNldEZyZWVDYW1lcmFTdGF0ZSA9IGZ1bmN0aW9uIChlbmFibGUsIHNwZWVkKSB7XHJcbiAgICBpZiAoc3BlZWQgPT09IHZvaWQgMCkgeyBzcGVlZCA9IDEwLjA7IH1cclxuICAgIHJldHVybiBzbi5TZXRGcmVlQ2FtZXJhU3RhdGUoZW5hYmxlLCBzcGVlZCk7XHJcbn07XHJcbi8qKiBGaWxlIHJlbGF0ZWQgZnVuY3Rpb25zICovXHJcbi8vIEdldCBhbiBhcnJheSBvZiBmaWxlcyBpbiBhIGdpdmVuIHBhcmVudCBkaXJlY3RvcnkgdGhhdCBoYXZlIHRoZSBnaXZlbiBleHRlbnNpb24uXHJcbi8vIGRpcmVjdG9yeSBpcyByZWxhdGl2ZSB0byB0aGUgcm9vdCBTa3lyaW0gZm9sZGVyICh3aGVyZSBza3lyaW0uZXhlIGlzKSBhbmQgaXMgbm9uLXJlY3Vyc2l2ZS5cclxuLy8gZGlyZWN0b3J5ID0gXCIuXCIgdG8gZ2V0IGFsbCBmaWxlcyBpbiByb290IFNreXJpbSBmb2xkZXJcclxuLy8gZGlyZWN0b3J5ID0gXCJkYXRhL21lc2hlc1wiIHRvIGdldCBhbGwgZmlsZXMgaW4gdGhlIDxyb290Pi9kYXRhL21lc2hlcyBmb2xkZXJcclxuLy8gZXh0ZW5zaW9uID0gXCIubmlmXCIgdG8gZ2V0IGFsbCAubmlmIG1lc2ggZmlsZXMuXHJcbi8vIChkZWZhdWx0KSBleHRlbnNpb249XCIqXCIgdG8gZ2V0IGFsbCBmaWxlc1xyXG5leHBvcnQgdmFyIEZpbGVzSW5Gb2xkZXIgPSBmdW5jdGlvbiAoZGlyZWN0b3J5LCBleHRlbnNpb24pIHtcclxuICAgIGlmIChleHRlbnNpb24gPT09IHZvaWQgMCkgeyBleHRlbnNpb24gPSBcIipcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVzSW5Gb2xkZXIoZGlyZWN0b3J5LCBleHRlbnNpb24pO1xyXG59O1xyXG4vLyBHZXQgYW4gYXJyYXkgb2YgZm9sZGVycyBpbiBhIGdpdmVuIHBhcmVudCBkaXJlY3RvcnlcclxuLy8gU2FtZSBydWxlcyBhbmQgZXhhbXBsZXMgYXMgYWJvdmUgRmlsZXNJbkZvbGRlciBhcHBseSB0byB0aGUgZGlyZWN0b3J5IHJ1bGUgaGVyZS5cclxuZXhwb3J0IHZhciBGb2xkZXJzSW5Gb2xkZXIgPSBmdW5jdGlvbiAoZGlyZWN0b3J5KSB7IHJldHVybiBzbi5Gb2xkZXJzSW5Gb2xkZXIoZGlyZWN0b3J5KTsgfTtcclxuLy8gQ2hlY2sgaWYgYSBnaXZlbiBmaWxlIGV4aXN0cyByZWxhdGl2ZSB0byByb290IFNreXJpbSBkaXJlY3RvcnkuIEV4YW1wbGU6IEZpbGVFeGlzdHMoXCJkYXRhL21lc2hlcy9leGFtcGxlLm5pZlwiKVxyXG5leHBvcnQgdmFyIEZpbGVFeGlzdHMgPSBmdW5jdGlvbiAoZmlsZU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVFeGlzdHMoZmlsZU5hbWUpOyB9O1xyXG4vLyBSZWFkIHN0cmluZyBmcm9tIGZpbGUuIERvIG5vdCByZWFkIGxhcmdlIGZpbGVzIVxyXG5leHBvcnQgdmFyIFJlYWRGcm9tRmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSkgeyByZXR1cm4gc24uUmVhZEZyb21GaWxlKGZpbGVOYW1lKTsgfTtcclxuLy8gV3JpdGUgc3RyaW5nIHRvIGZpbGUuXHJcbmV4cG9ydCB2YXIgV3JpdGVUb0ZpbGUgPSBmdW5jdGlvbiAoZmlsZU5hbWUsIHRleHQsIGFwcGVuZCwgdGltZXN0YW1wKSB7XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gdHJ1ZTsgfVxyXG4gICAgaWYgKHRpbWVzdGFtcCA9PT0gdm9pZCAwKSB7IHRpbWVzdGFtcCA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uV3JpdGVUb0ZpbGUoZmlsZU5hbWUsIHRleHQsIGFwcGVuZCwgdGltZXN0YW1wKTtcclxufTtcclxuLyoqIE1pc2MgKi9cclxuLy8gUHJpbnQgdGV4dCB0byBjb25zb2xlLlxyXG5leHBvcnQgdmFyIFByaW50Q29uc29sZSA9IGZ1bmN0aW9uICh0ZXh0KSB7IHJldHVybiBzbi5QcmludENvbnNvbGUodGV4dCk7IH07XHJcbi8vIEdldCByYWNlJ3MgZWRpdG9yIElELlxyXG5leHBvcnQgdmFyIEdldFJhY2VFZGl0b3JJRCA9IGZ1bmN0aW9uIChyYWNlRm9ybSkgeyByZXR1cm4gc24uR2V0UmFjZUVkaXRvcklEKHJhY2VGb3JtKTsgfTtcclxuLy8gR2V0IHJhY2UncyBlZGl0b3IgSUQuXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JSYWNlRWRpdG9ySUQgPSBmdW5jdGlvbiAoYWN0b3JSZWYpIHsgcmV0dXJuIHNuLkdldEFjdG9yUmFjZUVkaXRvcklEKGFjdG9yUmVmKTsgfTtcclxuLy8gU2V0IEhVRCBvbiAvIG9mZiAtIE5PVCBDVVJSRU5UIFdPUktJTkcgSU4gU0tZUklNIFNQRUNJQUwgRURJVElPTlxyXG5leHBvcnQgdmFyIFNldE1lbnVzID0gZnVuY3Rpb24gKGVuYWJsZWQpIHsgcmV0dXJuIHNuLlNldE1lbnVzKGVuYWJsZWQpOyB9O1xyXG4vLyBHZXQgbm9kZSByb3RhdGlvblxyXG4vLyBSRU1PVkVEIHYyLjk6IFVzZWxlc3MsIG9ubHkgZG9lcyBhIHBhcnQgb2YgdGhlIGpvYi5cclxuLy8gZmxvYXQgZnVuY3Rpb24gR2V0Tm9kZVJvdGF0aW9uKE9iamVjdFJlZmVyZW5jZSBvYmosIHN0cmluZyBub2RlTmFtZSwgYm9vbCBmaXJzdFBlcnNvbiwgaW50IHJvdGF0aW9uSW5kZXgpIGdsb2JhbCBuYXRpdmVcclxuZXhwb3J0IHZhciBHZXROb2RlUm90YXRpb24gPSBmdW5jdGlvbiAob2JqLCBub2RlTmFtZSwgZmlyc3RQZXJzb24sIHJvdGF0aW9uSW5kZXgpIHsgcmV0dXJuIHNuLkdldE5vZGVSb3RhdGlvbihvYmosIG5vZGVOYW1lLCBmaXJzdFBlcnNvbiwgcm90YXRpb25JbmRleCk7IH07XHJcbi8vIExFR0FDWSB2My4zIC0gQWRkZWQgSWdub3JlZGVhZCBwYXJhbWV0ZXIgdG8gZnVuY3Rpb24sIGFsaWFzZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRhYmlsaXR5IHdpdGggdjMuMi5cclxuZXhwb3J0IHZhciBTY2FuQ2VsbEFjdG9ycyA9IGZ1bmN0aW9uIChDZW50ZXJPbiwgcmFkaXVzLCBIYXNLZXl3b3JkKSB7XHJcbiAgICBpZiAocmFkaXVzID09PSB2b2lkIDApIHsgcmFkaXVzID0gNTAwMC4wOyB9XHJcbiAgICBpZiAoSGFzS2V5d29yZCA9PT0gdm9pZCAwKSB7IEhhc0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uU2NhbkNlbGxBY3RvcnMoQ2VudGVyT24sIHJhZGl1cywgSGFzS2V5d29yZCk7XHJcbn07XHJcbiIsImltcG9ydCAqIGFzIHNwIGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxuZXhwb3J0IHZhciBNb2RFdmVudCA9IHNwLk1vZEV2ZW50O1xyXG4iLCJpbXBvcnQgeyBzdG9yYWdlLCBjcmVhdGVUZXh0LCBkZXN0cm95QWxsVGV4dHMsIGRlc3Ryb3lUZXh0LCBnZXRUZXh0Q29sb3IsIGdldFRleHRQb3MsIGdldFRleHRTdHJpbmcsIHNldFRleHRDb2xvciwgc2V0VGV4dFBvcywgc2V0VGV4dFN0cmluZyB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxudmFyIGtleWtuYW1lID0gJy5zcFRleHRzLic7XHJcbnZhciBjb2xsZWN0aW9uS2V5ID0ga2V5a25hbWUgKyAnY29sbGVjdGlvbi4nO1xyXG52YXIgc3BUZXh0c0NvbGxlY3Rpb24gPSBuZXcgTWFwKCk7XHJcbnN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbnZhciBzcFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzcFRleHQoeFBvcywgeVBvcywgdGV4dCwgY29sLCBzVHlwZSwgc01vZE5hbWUpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gY3JlYXRlVGV4dCh4UG9zLCB5UG9zLCB0ZXh0LCBbY29sWzBdLCBjb2xbMV0sIGNvbFsyXSwgY29sWzNdXSk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gc1R5cGUgPyBzVHlwZSA6IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgdGhpcy5vd25pbmdNb2QgPSBzTW9kTmFtZSA/IHNNb2ROYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuICAgICAgICB0aGlzLnggPSB4UG9zO1xyXG4gICAgICAgIHRoaXMueSA9IHlQb3M7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uc2V0KHRoaXMuaW5kZXgsIHRoaXMpO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH1cclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0SW5kZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5kZXg7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRUZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRUZXh0U3RyaW5nKHRoaXMuaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0T3duaW5nTW9kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm93bmluZ01vZDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBudW0gPSBnZXRUZXh0UG9zKHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHJldHVybiBudW07XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRDb2xvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGV4dENvbG9yKHRoaXMuaW5kZXgpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0VHlwZSA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldFRleHQgPSBmdW5jdGlvbiAodHh0KSB7XHJcbiAgICAgICAgc2V0VGV4dFN0cmluZyh0aGlzLmluZGV4LCB0eHQpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0Q29sb3IgPSBmdW5jdGlvbiAocmdiYSkge1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCByZ2JhKTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24gKHhQb3MsIHlQb3MpIHtcclxuICAgICAgICBzZXRUZXh0UG9zKHRoaXMuaW5kZXgsIHhQb3MsIHlQb3MpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0T3duaW5nTW9kID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHRoaXMub3duaW5nTW9kID0gbW9kO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0Q29sb3JSID0gZnVuY3Rpb24gKGNvbCkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbCwgY29sb3JbMV0sIGNvbG9yWzJdLCBjb2xvclszXV0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0Q29sb3JHID0gZnVuY3Rpb24gKGNvbCkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbG9yWzBdLCBjb2wsIGNvbG9yWzJdLCBjb2xvclszXV0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0Q29sb3JCID0gZnVuY3Rpb24gKGNvbCkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sLCBjb2xvclszXV0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0QWxwaGEgPSBmdW5jdGlvbiAoYWxwaGEpIHtcclxuICAgICAgICB2YXIgY29sb3IgPSB0aGlzLmdldENvbG9yKCk7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIFtjb2xvclswXSwgY29sb3JbMV0sIGNvbG9yWzJdLCBhbHBoYV0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZGVzdHJveVRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZGVsZXRlKHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIGRlc3Ryb3lUZXh0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveUFsbFRleHRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICAgICAgZGVzdHJveUFsbFRleHRzKCk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5jb3VudE1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIHZhciBjID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICBjLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBfa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKVxyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuY291bnRUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdClcclxuICAgICAgICAgICAgICAgIGNudCsrO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95VGV4dChrZXkpO1xyXG4gICAgICAgICAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVRleHQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHRtcENvbGwuZGVsZXRlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kaXNhYmxlTW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgdG1wLnNldEFscGhhKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRpc2FibGVUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgdG1wLnNldEFscGhhKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmdldFR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh0bXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmdldE1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0QWxsVGV4dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmdldFRleHRCeUluZGV4ID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICB2YXIgdG1wID0gbnVsbDtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRJbmRleCgpID09IGkpIHtcclxuICAgICAgICAgICAgICAgIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRtcDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveVRleHRCeUluZGV4ID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICB2YXIgdG1wID0gc3BUZXh0LmdldFRleHRCeUluZGV4KGkpO1xyXG4gICAgICAgIGlmICh0bXApIHtcclxuICAgICAgICAgICAgdG1wLmRlc3Ryb3lUZXh0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJpbmRleDogXCIuY29uY2F0KHRoaXMuZ2V0SW5kZXgoKSwgXCIsIHRleHQ6XFxcIlwiKS5jb25jYXQodGhpcy5nZXRUZXh0KCksIFwiXFxcIiwgdHlwZTogXCIpLmNvbmNhdCh0aGlzLmdldFR5cGUoKSwgXCIsIG1vZDogXCIpLmNvbmNhdCh0aGlzLmdldE93bmluZ01vZCgpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gc3BUZXh0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBzcFRleHQgfTtcclxuIiwiLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5UeXBlc2NyaXB0IGRlZmluaXRpb25zIGZvciB2NC41LjVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuUE8zX1NLU0VGdW5jdGlvbnM7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FDVElWRSBFRkZFQ1RcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vcmV0dXJucyB3aGV0aGVyIHRoZSBhY3RpdmVFZmZlY3QgaGFzIHNjcmlwdCBhdHRhY2hlZC4gSWYgc2NyaXB0TmFtZSBpcyBlbXB0eSwgaXQgd2lsbCByZXR1cm4gaWYgdGhlIGFjdGl2ZUVmZmVjdCBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9BY3RpdmVFZmZlY3QgPSBmdW5jdGlvbiAoYWtBY3RpdmVFZmZlY3QsIGFzU2NyaXB0TmFtZSkgeyByZXR1cm4gc24uSXNTY3JpcHRBdHRhY2hlZFRvQWN0aXZlRWZmZWN0KGFrQWN0aXZlRWZmZWN0LCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BQ1RPUlNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vR2V0cyBhbGwgbWFnaWNlZmZlY3RzIGN1cnJlbnRseSBvbiB0aGUgYWN0b3IuIEZpbHRlcnMgb3V0IGluYWN0aXZlIGFuZCBoaWRlaW51aSBzcGVsbHMuXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZlRWZmZWN0cyA9IGZ1bmN0aW9uIChha0FjdG9yLCBhYlNob3dJbmFjdGl2ZSkge1xyXG4gICAgaWYgKGFiU2hvd0luYWN0aXZlID09PSB2b2lkIDApIHsgYWJTaG93SW5hY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFjdGl2ZUVmZmVjdHMoYWtBY3RvciwgYWJTaG93SW5hY3RpdmUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEFjdG9yQWxwaGEgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yQWxwaGEoYWtBY3Rvcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JSZWZyYWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvclJlZnJhY3Rpb24oYWtBY3Rvcik7XHJcbn07XHJcbi8qKiBBQ1RPUiBTVEFURVxyXG4gICAgICAgIEFsaXZlID0gMFxyXG4gICAgICAgIER5aW5nID0gMVxyXG4gICAgICAgIERlYWQgPSAyXHJcbiAgICAgICAgVW5jb25zY2lvdXMgPSAzXHJcbiAgICAgICAgUmVhbmltYXRlID0gNFxyXG4gICAgICAgIFJlY3ljbGUgPSA1XHJcbiAgICAgICAgUmVzdHJhaW5lZCA9IDZcclxuICAgICAgICBFc3NlbnRpYWxEb3duID0gN1xyXG4gICAgICAgIEJsZWVkb3V0ID0gOCAqL1xyXG4vL0dldHMgYWN0b3Igc3RhdGVcclxuZXhwb3J0IHZhciBHZXRBY3RvclN0YXRlID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvclN0YXRlKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWN0b3Igc291bCBzaXplXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JTb3VsU2l6ZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JTb3VsU2l6ZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFjdG9yIHZhbHVlIG1vZGlmaWVyLiAwIC0gcGVybWFuZW50LCAxIC0gdGVtcG9yYXJ5LCAyIC0gZGFtYWdlXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JWYWx1ZU1vZGlmaWVyID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpTW9kaWZpZXIsIGFzQWN0b3JWYWx1ZSkgeyByZXR1cm4gc24uR2V0QWN0b3JWYWx1ZU1vZGlmaWVyKGFrQWN0b3IsIGFpTW9kaWZpZXIsIGFzQWN0b3JWYWx1ZSk7IH07XHJcbi8vR2V0cyBhY3RvciBjcml0aWNhbCBzdGFnZVxyXG5leHBvcnQgdmFyIEdldENyaXRpY2FsU3RhZ2UgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldENyaXRpY2FsU3RhZ2UoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhbGwgYWxsaWVzIG9mIHRoZSBhY3RvciwgaWYgaW4gY29tYmF0XHJcbmV4cG9ydCB2YXIgR2V0Q29tYmF0QWxsaWVzID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRDb21iYXRBbGxpZXMoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhbGwgdGFyZ2V0cyBvZiB0aGUgYWN0b3IsIGlmIGluIGNvbWJhdFxyXG5leHBvcnQgdmFyIEdldENvbWJhdFRhcmdldHMgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldENvbWJhdFRhcmdldHMoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhbGwgY3VycmVudCBzdW1tb25zIGNvbW1hbmRlZCBieSB0aGlzIGFjdG9yXHJcbmV4cG9ydCB2YXIgR2V0Q29tbWFuZGVkQWN0b3JzID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldENvbW1hbmRlZEFjdG9ycyhha0FjdG9yKTsgfTtcclxuLy9HZXRzIHRoZSBvd25lciBvZiBzdW1tb25lZCBhY3RvclxyXG5leHBvcnQgdmFyIEdldENvbW1hbmRpbmdBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRDb21tYW5kaW5nQWN0b3IoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBjdXJyZW50IGhhaXIgY29sb3Igb24gYWN0b3IuIEZhaWxzIGlmIGhhaXIgaGVhZHBhcnQgZG9lc24ndCBleGlzdFxyXG5leHBvcnQgdmFyIEdldEhhaXJDb2xvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRIYWlyQ29sb3IoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyB0ZXh0dXJlc2V0IGJlbG9uZ2luZyB0byBoZWFkcGFydCwgaWYgYW55LlxyXG5leHBvcnQgdmFyIEdldEhlYWRQYXJ0VGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaVR5cGUpIHsgcmV0dXJuIHNuLkdldEhlYWRQYXJ0VGV4dHVyZVNldChha0FjdG9yLCBhaVR5cGUpOyB9O1xyXG4vL0dldHMgdGhlIGFjdG9yJ3MgbG9jYWwgZ3Jhdml0eS5cclxuZXhwb3J0IHZhciBHZXRMb2NhbEdyYXZpdHlBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRMb2NhbEdyYXZpdHlBY3Rvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIG9iamVjdCB1bmRlciBhY3RvcidzIGZlZXQgKGVnLiB0YWJsZSkuIERvZXMgbm90IHdvcmsgaWYgdGhlIHBsYXllciBpcyBzdGFuZGluZyBvbiB0aGUgZ3JvdW5kLlxyXG5leHBvcnQgdmFyIEdldE9iamVjdFVuZGVyRmVldCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRPYmplY3RVbmRlckZlZXQoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBhY3R1YWwgY3VycmVudCBwYWNrYWdlIG9uIGFjdG9yLCBpbmNsdWRpbmcgaW50ZXJuYWwgcGFja2FnZXMgdXNlZCBieSB0aGUgZ2FtZSAoc2VlIEdldFBhY2thZ2VUeXBlIGJlbG93KVxyXG5leHBvcnQgdmFyIEdldFJ1bm5pbmdQYWNrYWdlID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldFJ1bm5pbmdQYWNrYWdlKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgY3VycmVudCBza2luIGNvbG9yIG9uIGFjdG9yLlxyXG5leHBvcnQgdmFyIEdldFNraW5Db2xvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5HZXRTa2luQ29sb3IoYWtBY3Rvcik7IH07XHJcbi8vU2ltaWxhciB0byBHZXRUaW1lRGVhZCBjb25zb2xlIGNvbW1hbmQuIFJldHVybnMgMC4wIGlmIGFjdG9yIGlzIGFsaXZlXHJcbmV4cG9ydCB2YXIgR2V0VGltZURlYWQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldFRpbWVEZWFkKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgdGltZSBvZiBkZWF0aCBpbiBnYW1lIGRheXMgcGFzc2VkXHJcbmV4cG9ydCB2YXIgR2V0VGltZU9mRGVhdGggPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldFRpbWVPZkRlYXRoKGFrQWN0b3IpO1xyXG59O1xyXG4vL0hhc1NwZWxsIGJ1dCBjaGVja3MgaWYgdGhlIHNwZWxsIGlzIHByZXNlbnQgb24gdGhlIGFjdG9yIChpLmUgYWN0aXZlIGFuZCBub3QgZGlzcGVsbGVkKVxyXG5leHBvcnQgdmFyIEhhc0FjdGl2ZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLkhhc0FjdGl2ZVNwZWxsKGFrQWN0b3IsIGFrU3BlbGwpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgaW4gZGVmZXJyZWQga2lsbCBtb2RlXHJcbmV4cG9ydCB2YXIgSGFzRGVmZXJyZWRLaWxsID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5IYXNEZWZlcnJlZEtpbGwoYWtBY3Rvcik7XHJcbn07XHJcbi8vQ2hlY2tzIGlmIGFjdGl2ZW1hZ2ljZWZmZWN0IHdpdGggZ2l2ZW4gYXJjaGV0eXBlIGlzIHByZXNlbnQgb24gYWN0b3IuIEFyY2hldHlwZSBNVVNUIGJlIHR5cGVkIGFzIGdpdmVuIGJlbG93LlxyXG5leHBvcnQgdmFyIEhhc01hZ2ljRWZmZWN0V2l0aEFyY2hldHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhc0FyY2hldHlwZSkgeyByZXR1cm4gc24uSGFzTWFnaWNFZmZlY3RXaXRoQXJjaGV0eXBlKGFrQWN0b3IsIGFzQXJjaGV0eXBlKTsgfTtcclxuLy9SZXR1cm5zIGlmIHRoZSBhY3RvciBoYXMgc2tpbi9hcm1vciB3aXRoIHNraW4gcHJlc2VudFxyXG5leHBvcnQgdmFyIEhhc1NraW4gPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtBcm1vclRvQ2hlY2spIHsgcmV0dXJuIHNuLkhhc1NraW4oYWtBY3RvciwgYWtBcm1vclRvQ2hlY2spOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgaW4gY2VsbCB3YXRlciBvciBsYXZhXHJcbmV4cG9ydCB2YXIgSXNBY3RvckluV2F0ZXIgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzQWN0b3JJbldhdGVyKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgdW5kZXJ3YXRlclxyXG5leHBvcnQgdmFyIElzQWN0b3JVbmRlcndhdGVyID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc0FjdG9yVW5kZXJ3YXRlcihha0FjdG9yKTtcclxufTtcclxuLyoqIExJTUJcclxuICAgICAgICBOb25lID0gLTFcclxuICAgICAgICBUb3JzbyA9IDBcclxuICAgICAgICBIZWFkID0gMSAqL1xyXG4vL1JldHVybnMgd2hldGhlciBsaW1iIGlzIGdvbmUgKGkuZSwgdGhlIGhlYWQsIGJ1dCBhZGRpbmcgdGhlIHdob2xlIGVudW0gaW4gY2FzZSBzb21lb25lIGV4cGFuZHMgdGhlIGRpc21lbWJlcm1lbnQgc3lzdGVtIGluIHRoZSBmdXR1cmUpXHJcbmV4cG9ydCB2YXIgSXNMaW1iR29uZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaUxpbWIpIHsgcmV0dXJuIHNuLklzTGltYkdvbmUoYWtBY3RvciwgYWlMaW1iKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGFjdG9yIGlzIGEgcXVhZHJ1cGVkXHJcbmV4cG9ydCB2YXIgSXNRdWFkcnVwZWQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzUXVhZHJ1cGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0YXJnZXQgaXMgc291bCB0cmFwcGVkIC8gY2FwYWJsZSBvZiBiZWluZyBzb3VsIHRyYXBwZWQgc3VjY2Vzc2Z1bGx5IChpZiB1c2luZyBtb2RzIHRoYXQgYnlwYXNzIHZhbmlsbGEgc291bCB0cmFwIHN5c3RlbSkuXHJcbmV4cG9ydCB2YXIgSXNTb3VsVHJhcHBlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNTb3VsVHJhcHBlZChha0FjdG9yKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGFsbCBlcXVpcHBlZCBpdGVtcyB0byBhcnJheVxyXG5leHBvcnQgdmFyIEFkZEFsbEVxdWlwcGVkSXRlbXNUb0FycmF5ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkFkZEFsbEVxdWlwcGVkSXRlbXNUb0FycmF5KGFrQWN0b3IpOyB9O1xyXG4vL0FkZHMgcGVya3MgdG8gdGhlIGFjdG9yYmFzZSwgd29ya3Mgb24gbGV2ZWxlZCBhY3RvcnMvdW5pcXVlIE5QQ3MuIEZ1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gcGVya3MgYXJlIGFwcGxpZWQgY29ycmVjdGx5IG9uIGxvYWRpbmcvcmVsb2FkaW5nIHNhdmVzLlxyXG5leHBvcnQgdmFyIEFkZEJhc2VQZXJrID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrUGVyaykgeyByZXR1cm4gc24uQWRkQmFzZVBlcmsoYWtBY3RvciwgYWtQZXJrKTsgfTtcclxuLy9BZGRzIHNwZWxscyB0byBhY3RvcmJhc2UsIHdvcmtzIG9uIHBsYXllci9sZXZlbGVkIGFjdG9ycy91bmlxdWUgTlBDcy4gRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBzcGVsbHMgYXJlIGFwcGxpZWQgY29ycmVjdGx5IG9uIGxvYWRpbmcvcmVsb2FkaW5nIHNhdmVzLlxyXG5leHBvcnQgdmFyIEFkZEJhc2VTcGVsbCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1NwZWxsKSB7IHJldHVybiBzbi5BZGRCYXNlU3BlbGwoYWtBY3RvciwgYWtTcGVsbCk7IH07XHJcbi8qKiBCTEVORCBNT0RFU1xyXG4gICAgICAgIERhcmtlbiA9IDBcclxuICAgICAgICBNdWx0aXBseSA9IDFcclxuICAgICAgICBDb2xvckJ1cm4gPSAyXHJcbiAgICAgICAgTGluZWFyQnVybiA9IDNcclxuICAgICAgICBEYXJrZXJDb2xvciA9IDRcclxuICAgICAgICBMaWdodGVuID0gNVxyXG4gICAgICAgIFNjcmVlbiA9IDZcclxuICAgICAgICBDb2xvckRvZGdlID0gN1xyXG4gICAgICAgIExpbmVhckRvZGdlID0gOFxyXG4gICAgICAgIExpZ2h0ZXJDb2xvciA9IDlcclxuICAgICAgICBPdmVybGF5ID0gMTBcclxuICAgICAgICBTb2Z0TGlnaHQgPSAxMVxyXG4gICAgICAgIEhhcmRMaWdodCA9IDEyXHJcbiAgICAgICAgVml2aWRMaWdodCA9IDEzXHJcbiAgICAgICAgTGluZWFyTGlnaHQgPSAxNFxyXG4gICAgICAgIFBpbkxpZ2h0ID0gMTVcclxuICAgICAgICBIYXJkTWl4ID0gMTZcclxuICAgICAgICBEaWZmZXJlbmNlID0gMTdcclxuICAgICAgICBFeGNsdXNpb24gPSAxOFxyXG4gICAgICAgIFN1YnRyYWN0ID0gMTlcclxuICAgICAgICBEaXZpZGUgPSAyMCAqL1xyXG4vL0JsZW5kcyBleGlzdGluZyBza2luIGNvbG9yIHdpdGggc3BlY2lmaWVkIGNvbG9yLCB1c2luZyBwaG90b3Nob3AgYmxlbmQgZm9ybXVsYXMsIHdpdGggYWxwaGEgKG9wYWNpdHkpLlxyXG4vL0lmIHRydWUsIGF1dG9MdW1pbmFuY2UgY2FsY3VsYXRlcyBza2luIHRvbmUgcmVsYXRpdmUgbHVtaW5hbmNlLiBUaGUgb3BhY2l0eSB2YWx1ZSBpcyB0aGVuIHVzZWQgYXMgYSBtdWx0aXBsaWVyIG9uIHRvcCBvZiB0aGF0LCBmaW5hbCB2YWx1ZSBpcyBjbGFtcGVkIHRvIDAtMVxyXG4vL0lmIGZhbHNlLCBvbmx5IG9wYWNpdHkgd2lsbCBiZSB1c2VkLiBSZWNvbW1lbmQgdG8gdXNlIGF1dG9sdW1pbmFuY2UgYmVjYXVzZSBjb2xvcnMgd2lsbCBub3QgYmxlbmQgd2VsbCBmb3IgYWxsIHNraW4gdG9uZXMgdXNpbmcgZmxhdCB2YWx1ZXMuXHJcbmV4cG9ydCB2YXIgQmxlbmRDb2xvcldpdGhTa2luVG9uZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yLCBhaUJsZW5kTW9kZSwgYWJBdXRvTHVtaW5hbmNlLCBhZk9wYWNpdHkpIHtcclxuICAgIHJldHVybiBzbi5CbGVuZENvbG9yV2l0aFNraW5Ub25lKGFrQWN0b3IsIGFrQ29sb3IsIGFpQmxlbmRNb2RlLCBhYkF1dG9MdW1pbmFuY2UsIGFmT3BhY2l0eSk7XHJcbn07XHJcbi8vRGVjYXBpdGF0ZXMgbGl2aW5nIGFuZCBkZWFkIGFjdG9ycy4gTGl2aW5nIGFjdG9ycyB3aWxsIG5vdCBkaWUgd2hlbiB0aGlzIGlzIGNhbGxlZCFcclxuZXhwb3J0IHZhciBEZWNhcGl0YXRlQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkRlY2FwaXRhdGVBY3Rvcihha0FjdG9yKTtcclxufTtcclxuLy8wIC0gRW5hYmxlQUkgKyB0b2dnbGluZyByZWNvcmQgaGl0cyBmbGFncyBzbyB0aGV5IGRvbid0IGdvIGZseWluZyAzMDAgZmVldCB3aGVuIHVuZnJvemVuLlxyXG4vLzEgLSBQYXJhbHl6ZXMgYWN0b3IsIGV2ZW4gd2hlbiBkZWFkLlxyXG5leHBvcnQgdmFyIEZyZWV6ZUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIHR5cGUsIGFiRnJlZXplKSB7IHJldHVybiBzbi5GcmVlemVBY3Rvcihha0FjdG9yLCB0eXBlLCBhYkZyZWV6ZSk7IH07XHJcbi8vUXVpY2sgYW5kIGRpcnR5IGhhY2sgdG8gaW5zdGFudGx5IGtpbGwgdGhlIGFjdG9yIGFuZCBzZXQgYXMgZGVhZC5cclxuZXhwb3J0IHZhciBLaWxsTm9XYWl0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5LaWxsTm9XYWl0KGFrQWN0b3IpO1xyXG59O1xyXG4vL0RFUFJFQ0lBVEVEXHJcbi8vQmxlbmRzIGV4aXN0aW5nIHNraW4gY29sb3Igd2l0aCBzcGVjaWZpZWQgY29sb3IuXHJcbi8vVHJ1ZSAtIGludGVuc2l0eSBpcyBtYW51YWxseSBjYWxjdWxhdGVkIHVzaW5nIHBlcmNlbnRhZ2UgMC0xLjAsIEZhbHNlIC0gYXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHVzaW5nIHNraW4gdG9uZSBsdW1pbmFuY2VcclxuZXhwb3J0IHZhciBNaXhDb2xvcldpdGhTa2luVG9uZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yLCBhYk1hbnVhbE1vZGUsIGFmUGVyY2VudGFnZSkge1xyXG4gICAgcmV0dXJuIHNuLk1peENvbG9yV2l0aFNraW5Ub25lKGFrQWN0b3IsIGFrQ29sb3IsIGFiTWFudWFsTW9kZSwgYWZQZXJjZW50YWdlKTtcclxufTtcclxuLy9CYXRjaCBhZGRlZCBzcGVsbCByZW1vdmFsLCBmaWx0ZXJlZCBieSBvcHRpb25hbCBtb2QgbmFtZSwgYW5kIGtleXdvcmQgYXJyYXkgKG1hdGNoaW5nIGFueSBrZXl3b3JkIG9yIGFsbCBvZiB0aGVtKVxyXG5leHBvcnQgdmFyIFJlbW92ZUFkZGVkU3BlbGxzID0gZnVuY3Rpb24gKGFrQWN0b3IsIG1vZE5hbWUsIGtleXdvcmRzLCBhYk1hdGNoQWxsKSB7IHJldHVybiBzbi5SZW1vdmVBZGRlZFNwZWxscyhha0FjdG9yLCBtb2ROYW1lLCBrZXl3b3JkcywgYWJNYXRjaEFsbCk7IH07XHJcbi8vUmVtb3ZlcyBwZXJrcyBmcm9tIHRoZSBhY3RvcmJhc2VcclxuLy9QZXJrIGVmZmVjdHMgbWF5IG5vdCBiZSByZW1vdmVkIGZyb20gdW5pcXVlIGFjdG9ycywgbW9yZSB0ZXN0aW5nIHJlcXVpcmVkLlxyXG4vL0Z1bmN0aW9uIHNlcmlhbGl6ZXMgZGF0YSB0byBza3NlIGNvc2F2ZSwgc28gcGVya3MgYXJlIGFwcGxpZWQgY29ycmVjdGx5IG9uIGxvYWRpbmcvcmVsb2FkaW5nIHNhdmVzLlxyXG5leHBvcnQgdmFyIFJlbW92ZUJhc2VQZXJrID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrUGVyaykgeyByZXR1cm4gc24uUmVtb3ZlQmFzZVBlcmsoYWtBY3RvciwgYWtQZXJrKTsgfTtcclxuLy9SZW1vdmVzIHNwZWxscyBmcm9tIHRoZSBhY3RvcmJhc2UsIHdvcmtzIG9uIHBsYXllci9sZXZlbGVkIGFjdG9ycy91bmlxdWUgTlBDcy4gRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBzcGVsbHMgYXJlIGFwcGxpZWQgY29ycmVjdGx5IG9uIGxvYWRpbmcvcmVsb2FkaW5nIHNhdmVzLlxyXG5leHBvcnQgdmFyIFJlbW92ZUJhc2VTcGVsbCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha1NwZWxsKSB7IHJldHVybiBzbi5SZW1vdmVCYXNlU3BlbGwoYWtBY3RvciwgYWtTcGVsbCk7IH07XHJcbi8vUmVwbGFjZXMgc3BlY2lmaWVkIHNvdXJjZSB0ZXh0dXJlc2V0IG9uIHdvcm4gYXJtb3Igd2l0aCB0YXJnZXQgdGV4dHVyZXNldC4gTGFzdHMgZm9yIG9uZSBzaW5nbGUgZ2FtaW5nIHNlc3Npb24uXHJcbi8vSWYgdGV4dHVyZSB0eXBlIGlzIC0xLCB0aGUgZW50aXJlIHRleHR1cmVzZXQgaXMgcmVwbGFjZWQsIG90aGVyd2lzZSB0aGUgdGV4dHVyZSBtYXAgc3BlY2lmaWVkIGF0IFt0ZXh0dXJlVHlwZV0gaW5kZXggaXMgcmVwbGFjZWQgKGRpZmZ1c2UgaXMgMCwgbm9ybWFsIGlzIDEuLi4pXHJcbmV4cG9ydCB2YXIgUmVwbGFjZUFybW9yVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0FybW9yLCBha1NvdXJjZVRYU1QsIGFrVGFyZ2V0VFhTVCwgYWlUZXh0dXJlVHlwZSkge1xyXG4gICAgaWYgKGFpVGV4dHVyZVR5cGUgPT09IHZvaWQgMCkgeyBhaVRleHR1cmVUeXBlID0gLTE7IH1cclxuICAgIHJldHVybiBzbi5SZXBsYWNlQXJtb3JUZXh0dXJlU2V0KGFrQWN0b3IsIGFrQXJtb3IsIGFrU291cmNlVFhTVCwgYWtUYXJnZXRUWFNULCBhaVRleHR1cmVUeXBlKTtcclxufTtcclxuLy9SZXBsYWNlcyBmYWNlIHRleHR1cmVzZXQuIExhc3RzIG9uZSBnYW1pbmcgc2Vzc2lvbi4gQ2FuIGJlIGFwcGxpZWQgdG8gbm9uLXVuaXF1ZSBhY3RvcnMuXHJcbi8vSWYgdGV4dHVyZSB0eXBlIGlzIC0xLCB0aGUgZW50aXJlIHRleHR1cmVzZXQgaXMgcmVwbGFjZWQsIG90aGVyd2lzZSB0aGUgdGV4dHVyZSBtYXAgc3BlY2lmaWVkIGF0IFt0ZXh0dXJlVHlwZV0gaW5kZXggaXMgcmVwbGFjZWQuIFJlcGxhY2luZyB0aGUgZW50aXJlIHRleHR1cmVzZXQgbWF5IGNhdXNlIGEgdmlzaWJsZSBuZWNrc2VhbS5cclxuZXhwb3J0IHZhciBSZXBsYWNlRmFjZVRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VGYWNlVGV4dHVyZVNldChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL1JlcGxhY2VzIHNraW4gdGV4dHVyZXNldCBmb3IgZ2l2ZW4gc2xvdG1hc2sgKGllLiBib2R5L2hhbmQpLiBMYXN0cyBvbmUgZ2FtaW5nIHNlc3Npb24uIEhhcyB0byBiZSByZWFwcGxpZWQgd2hlbiByZS1lcXVpcHBpbmcgYXJtb3IuXHJcbi8vSWYgdGV4dHVyZSB0eXBlIGlzIC0xLCB0aGUgZW50aXJlIHRleHR1cmVzZXQgaXMgcmVwbGFjZWQsIG90aGVyd2lzZSB0aGUgdGV4dHVyZSBtYXAgc3BlY2lmaWVkIGF0IFt0ZXh0dXJlVHlwZV0gaW5kZXggaXMgcmVwbGFjZWQuXHJcbmV4cG9ydCB2YXIgUmVwbGFjZVNraW5UZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlTbG90TWFzaywgYWlUZXh0dXJlVHlwZSkge1xyXG4gICAgaWYgKGFpVGV4dHVyZVR5cGUgPT09IHZvaWQgMCkgeyBhaVRleHR1cmVUeXBlID0gLTE7IH1cclxuICAgIHJldHVybiBzbi5SZXBsYWNlU2tpblRleHR1cmVTZXQoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVNsb3RNYXNrLCBhaVRleHR1cmVUeXBlKTtcclxufTtcclxuLy9DaGVja3MgZm9yIE5pRXh0cmFEYXRhIG5vZGVzIG9uIGFjdG9yIC0gUE8zX1RJTlQvUE8zX0FMUEhBL1BPM19UWFNUL1BPM19UT0dHTEUvUE8zX1NIQURFUlxyXG4vL1N0b3BzIGFsbCBlZmZlY3Qgc2hhZGVycyBhbmRcclxuLy9QTzNfVElOVCAtIHJlc2V0cyB0aW50LCByZWJ1aWxkcyBmYWNlZ2VuIGlmIGFjdG9yIGlzIHBsYXllclxyXG4vL1BPM19BTFBIQSAtIHJlc2V0cyBza2luIGFscGhhXHJcbi8vUE8zX1RYU1QgLSByZXNldHMgdGV4dHVyZXNldHMgd2l0aCB0ZXh0dXJlcGF0aHMgY29udGFpbmluZyBmb2xkZXJOYW1lXHJcbi8vUE8zX1RPR0dMRSAtIHVuaGlkZXMgYWxsIGNoaWxkcmVuIG9mIG5vZGVzIHRoYXQgd2VyZSB3cml0dGVuIHRvIHRoZSBleHRyYURhdGFcclxuLy9QTzNfU0hBREVSIC0gcmVjcmVhdGVzIHRoZSBvcmlnaW5hbCBzaGFkZXIgdHlwZSAoYXMgY2xvc2UgYXMgcG9zc2libGUsIHByb2plY3RlZFVWIHBhcmFtcyBhcmUgbm90IHJlc3RvcmVkKVxyXG5leHBvcnQgdmFyIFJlc2V0QWN0b3IzRCA9IGZ1bmN0aW9uIChha0FjdG9yLCBhc0ZvbGRlck5hbWUpIHsgcmV0dXJuIHNuLlJlc2V0QWN0b3IzRChha0FjdG9yLCBhc0ZvbGRlck5hbWUpOyB9O1xyXG4vLzAuMCBkaXNhYmxlcyByZWZyYWN0aW9uLCAxLjAgaXMgbWF4IHJlZnJhY3Rpb25cclxuZXhwb3J0IHZhciBTZXRBY3RvclJlZnJhY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZSZWZyYWN0aW9uKSB7IHJldHVybiBzbi5TZXRBY3RvclJlZnJhY3Rpb24oYWtBY3RvciwgYWZSZWZyYWN0aW9uKTsgfTtcclxuLy9TZXRzIGhhaXIgY29sb3Igb24gYWN0b3IuIENoYW5nZXMgbWF5IHBlcnNpc3QgdGhyb3VnaG91dCBnYW1pbmcgc2Vzc2lvbiwgZXZlbiB3aGVuIHJlbG9hZGluZyBwcmV2aW91cyBzYXZlcy5cclxuZXhwb3J0IHZhciBTZXRIYWlyQ29sb3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtDb2xvcikgeyByZXR1cm4gc24uU2V0SGFpckNvbG9yKGFrQWN0b3IsIGFrQ29sb3IpOyB9O1xyXG4vL1NldHMgaGVhZHBhcnQncyBtZXNoIGFscGhhLiBEb2Vzbid0IHdvcmsgZm9yIHNvbWUgaGFpciB0eXBlcyBhbmQgaGV0ZXJvY2hyb21pYyBleWVzXHJcbmV4cG9ydCB2YXIgU2V0SGVhZFBhcnRBbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaVBhcnRUeXBlLCBhZkFscGhhKSB7IHJldHVybiBzbi5TZXRIZWFkUGFydEFscGhhKGFrQWN0b3IsIGFpUGFydFR5cGUsIGFmQWxwaGEpOyB9O1xyXG4vL1NldHMgdGV4dHVyZXNldCBiZWxvbmdpbmcgdG8gaGVhZHBhcnQsIGlmIGFueS5cclxuZXhwb3J0IHZhciBTZXRIZWFkUGFydFRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgaGVhZHBhcnRUWFNULCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldEhlYWRQYXJ0VGV4dHVyZVNldChha0FjdG9yLCBoZWFkcGFydFRYU1QsIGFpVHlwZSk7IH07XHJcbi8vU2V0cyB2ZWxvY2l0eSBvZiB0aGUgYWN0b3IuIE1heSBub3QgdGFrZSBwbGFjZSBpbW1lZGlhdGVseS5cclxuZXhwb3J0IHZhciBTZXRMaW5lYXJWZWxvY2l0eSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlgsIGFmWSwgYWZaKSB7IHJldHVybiBzbi5TZXRMaW5lYXJWZWxvY2l0eShha0FjdG9yLCBhZlgsIGFmWSwgYWZaKTsgfTtcclxuLy9TZXRzIGxvY2FsIGdyYXZpdHkgb2YgdGhlIGFjdG9yLiBOZWdhdGl2ZSB2YWx1ZXMgd2lsbCBjYXVzZSB0aGVtIHRvIGZseS4gTWF5IG5vdCB0YWtlIHBsYWNlIGltbWVkaWF0ZWx5LlxyXG5leHBvcnQgdmFyIFNldExvY2FsR3Jhdml0eUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmVmFsdWUsIGFiRGlzYWJsZUdyYXZpdHlPbkdyb3VuZCkgeyByZXR1cm4gc24uU2V0TG9jYWxHcmF2aXR5QWN0b3IoYWtBY3RvciwgYWZWYWx1ZSwgYWJEaXNhYmxlR3Jhdml0eU9uR3JvdW5kKTsgfTtcclxuLy9TZXRzIGFscGhhIG9uIGZhY2UsIGJhc2Ugc2tpbiBmb3JtIGFuZCBhcm1vciBtZXNoZXMgd2l0aCB2aXNpYmxlIHNraW4uIEhhcyB0byBiZSByZS1hcHBsaWVkIHdoZW4gYXJtb3IgaXMgdW4vcmUtZXF1aXBwZWQuXHJcbmV4cG9ydCB2YXIgU2V0U2tpbkFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmQWxwaGEpIHsgcmV0dXJuIHNuLlNldFNraW5BbHBoYShha0FjdG9yLCBhZkFscGhhKTsgfTtcclxuLy9TZXRzIHNraW4gY29sb3IgKGZhY2UgYW5kIGJvZHkpLiBIYXMgdG8gYmUgcmUtYXBwbGllZCB3aGVuIGFybW9yIGlzIHVuL3JlLWVxdWlwcGVkLlxyXG5leHBvcnQgdmFyIFNldFNraW5Db2xvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yKSB7IHJldHVybiBzbi5TZXRTa2luQ29sb3IoYWtBY3RvciwgYWtDb2xvcik7IH07XHJcbi8vU2V0cyB0aGUgZmxhZyB1c2VkIGJ5IHRoZSBnYW1lIHRvIGRldGVybWluZSBzb3VsIHRyYXBwZWQgTlBDc1xyXG5leHBvcnQgdmFyIFNldFNvdWxUcmFwcGVkID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiVHJhcHBlZCkgeyByZXR1cm4gc24uU2V0U291bFRyYXBwZWQoYWtBY3RvciwgYWJUcmFwcGVkKTsgfTtcclxuLy9Ub2dnbGVzIGFueSBoYWlyIHdpZ3MgKGdlb21ldHJ5IHdpdGggaGFpciBzaGFkZXIpIGZvdW5kIG9uIHNsb3RzIEhhaXIvTG9uZ0hhaXJcclxuZXhwb3J0IHZhciBUb2dnbGVIYWlyV2lncyA9IGZ1bmN0aW9uIChha0FjdG9yLCBhYkRpc2FibGUpIHsgcmV0dXJuIHNuLlRvZ2dsZUhhaXJXaWdzKGFrQWN0b3IsIGFiRGlzYWJsZSk7IH07XHJcbi8qKiBBUk1PUiBUWVBFXHJcbiAgICAgICAgTGlnaHQgPSAwXHJcbiAgICAgICAgSGVhdnkgPSAxXHJcbiAgICAgICAgQ2xvdGhpbmcgPSAyICovXHJcbi8vVW5lcXVpcHMgYWxsIGFybW9yIG9mIHR5cGUsIG9wdGlvbmFsbHkgc2tpcHBpbmcgYmlwZWQgc2xvdHMuXHJcbmV4cG9ydCB2YXIgVW5lcXVpcEFsbE9mVHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZkFybW9yVHlwZSwgYWlTbG90c1RvU2tpcCkgeyByZXR1cm4gc24uVW5lcXVpcEFsbE9mVHlwZShha0FjdG9yLCBhZkFybW9yVHlwZSwgYWlTbG90c1RvU2tpcCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FDVE9SQkFTRVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXRzIG5wYyBkZWF0aCBpdGVtXHJcbmV4cG9ydCB2YXIgR2V0RGVhdGhJdGVtID0gZnVuY3Rpb24gKGFrQmFzZSkgeyByZXR1cm4gc24uR2V0RGVhdGhJdGVtKGFrQmFzZSk7IH07XHJcbi8vR2V0IGFjdG9yYmFzZSBwZXJrIGF0IG50aCBpbmRleFxyXG5leHBvcnQgdmFyIEdldE50aFBlcmsgPSBmdW5jdGlvbiAoYWtCYXNlLCBhaUluZGV4KSB7IHJldHVybiBzbi5HZXROdGhQZXJrKGFrQmFzZSwgYWlJbmRleCk7IH07XHJcbi8vR2V0IHRvdGFsIGFjdG9yYmFzZSBwZXJrIGNvdW50XHJcbmV4cG9ydCB2YXIgR2V0UGVya0NvdW50ID0gZnVuY3Rpb24gKGFrQmFzZSkge1xyXG4gICAgcmV0dXJuIHNuLkdldFBlcmtDb3VudChha0Jhc2UpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgbnBjIGRlYXRoIGl0ZW0uIENhbiBiZSBOb25lLlxyXG5leHBvcnQgdmFyIFNldERlYXRoSXRlbSA9IGZ1bmN0aW9uIChha0Jhc2UsIGFrTGV2ZWxlZEl0ZW0pIHsgcmV0dXJuIHNuLlNldERlYXRoSXRlbShha0Jhc2UsIGFrTGV2ZWxlZEl0ZW0pOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BTElBU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaGFzIHNjcmlwdCBhdHRhY2hlZC4gSWYgc2NyaXB0TmFtZSBpcyBlbXB0eSwgaXQgd2lsbCByZXR1cm4gaWYgdGhlIGFsaWFzIGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0FsaWFzID0gZnVuY3Rpb24gKGFrQWxpYXMsIGFzU2NyaXB0TmFtZSkgeyByZXR1cm4gc24uSXNTY3JpcHRBdHRhY2hlZFRvQWxpYXMoYWtBbGlhcywgYXNTY3JpcHROYW1lKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQVJNT1IvQURET05TXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgYXJtb3IgYWRkb24ncyBmb290c3RlcCBzZXRcclxuZXhwb3J0IHZhciBHZXRGb290c3RlcFNldCA9IGZ1bmN0aW9uIChha0FybWEpIHsgcmV0dXJuIHNuLkdldEZvb3RzdGVwU2V0KGFrQXJtYSk7IH07XHJcbi8vU2V0cyBhcm1vciBhZGRvbidzIGZvb3RzdGVwIHNldFxyXG5leHBvcnQgdmFyIFNldEZvb3RzdGVwU2V0ID0gZnVuY3Rpb24gKGFrQXJtYSwgYWtGb290c3RlcFNldCkgeyByZXR1cm4gc24uU2V0Rm9vdHN0ZXBTZXQoYWtBcm1hLCBha0Zvb3RzdGVwU2V0KTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQVJSQVlTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FkZHMgYWN0b3IgdG8gYXJyYXkuIE1vZGlmaWVzIGFycmF5IGRpcmVjdGx5LCBpdCBtdXN0IGJlIGluaXRpYWxpemVkIVxyXG5leHBvcnQgdmFyIEFkZEFjdG9yVG9BcnJheSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhY3RvckFycmF5KSB7IHJldHVybiBzbi5BZGRBY3RvclRvQXJyYXkoYWtBY3RvciwgYWN0b3JBcnJheSk7IH07XHJcbi8vQWRkcyBzdHJpbmcgdG8gYXJyYXkuIE1vZGlmaWVzIGFycmF5IGRpcmVjdGx5LCBpdCBtdXN0IGJlIGluaXRpYWxpemVkIVxyXG5leHBvcnQgdmFyIEFkZFN0cmluZ1RvQXJyYXkgPSBmdW5jdGlvbiAoYXNTdHJpbmcsIGFzU3RyaW5ncykgeyByZXR1cm4gc24uQWRkU3RyaW5nVG9BcnJheShhc1N0cmluZywgYXNTdHJpbmdzKTsgfTtcclxuLy9Db3VudHMgaG93IG1hbnkgaW5zdGFuY2VzIG9mIGEgc3RyaW5nIGFyZSBpbiBhbiBhcnJheS5cclxuZXhwb3J0IHZhciBBcnJheVN0cmluZ0NvdW50ID0gZnVuY3Rpb24gKGFzU3RyaW5nLCBhc1N0cmluZ3MpIHsgcmV0dXJuIHNuLkFycmF5U3RyaW5nQ291bnQoYXNTdHJpbmcsIGFzU3RyaW5ncyk7IH07XHJcbi8vQWxwaGFiZXRpY2FsbHkgc29ydHMgYW5kIHJldHVybnMgdHJ1bmNhdGVkIHNyaW5nIGFycmF5LlxyXG5leHBvcnQgdmFyIFNvcnRBcnJheVN0cmluZyA9IGZ1bmN0aW9uIChhc1N0cmluZ3MpIHtcclxuICAgIHJldHVybiBzbi5Tb3J0QXJyYXlTdHJpbmcoYXNTdHJpbmdzKTtcclxufTtcclxuLy9HZXRzIG5hbWUgYXJyYXkgb2YgYWxsIHRoZSBhY3RvcnMgaW4gdGhlIGFyZWEsIHNvcnRlZCBhbHBoYWJldGljYWxseS4gR2VuZXJpYyBhY3RvcnMgYXJlIG1lcmdlZCAoaWUuIDMgV2hpdGVydW4gR3VhcmQocykpLiBGaWx0ZXIga2V5d29yZCBvcHRpb25hbFxyXG5leHBvcnQgdmFyIEdldFNvcnRlZEFjdG9yTmFtZXMgPSBmdW5jdGlvbiAoYWtLZXl3b3JkLCBhc1BsdXJhbCwgYWJJbnZlcnRLZXl3b3JkKSB7XHJcbiAgICBpZiAoYXNQbHVyYWwgPT09IHZvaWQgMCkgeyBhc1BsdXJhbCA9IFwiKHMpXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTb3J0ZWRBY3Rvck5hbWVzKGFrS2V5d29yZCwgYXNQbHVyYWwsIGFiSW52ZXJ0S2V5d29yZCk7XHJcbn07XHJcbi8vR2V0cyBuYW1lIGFycmF5IG9mIE5QQ3MsIHNvcnRlZCBhbHBoYWJldGljYWxseS4gR2VuZXJpYyBhY3RvcnMgYXJlIG1lcmdlZCAoaWUuIDMgV2hpdGVydW4gR3VhcmQocykpLlxyXG5leHBvcnQgdmFyIEdldFNvcnRlZE5QQ05hbWVzID0gZnVuY3Rpb24gKGFpQWN0b3JCYXNlcywgYXNQbHVyYWwpIHtcclxuICAgIGlmIChhc1BsdXJhbCA9PT0gdm9pZCAwKSB7IGFzUGx1cmFsID0gXCIocylcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFNvcnRlZE5QQ05hbWVzKGFpQWN0b3JCYXNlcywgYXNQbHVyYWwpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9CT09LXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NsZWFycyByZWFkIGZsYWcgKGFuZCB3cml0ZXMgaXQgdG8gdGhlIHNhdmUpLlxyXG5leHBvcnQgdmFyIENsZWFyUmVhZEZsYWcgPSBmdW5jdGlvbiAoYWtCb29rKSB7XHJcbiAgICByZXR1cm4gc24uQ2xlYXJSZWFkRmxhZyhha0Jvb2spO1xyXG59O1xyXG4vL1NldHMgcmVhZCBmbGFnIChhbmQgd3JpdGVzIGl0IHRvIHRoZSBzYXZlKS5cclxuZXhwb3J0IHZhciBTZXRSZWFkRmxhZyA9IGZ1bmN0aW9uIChha0Jvb2spIHtcclxuICAgIHJldHVybiBzbi5TZXRSZWFkRmxhZyhha0Jvb2spO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgY2VsbCBub3J0aCByb3RhdGlvbi93b3JsZHNwYWNlIG5vcnRoIHJvdGF0aW9uIGZvciBleHRlcmlvciBjZWxscy4gUm90YXRpb24gaXMgaW4gZGVncmVlcy5cclxuZXhwb3J0IHZhciBHZXRDZWxsTm9ydGhSb3RhdGlvbiA9IGZ1bmN0aW9uIChha0NlbGwpIHtcclxuICAgIHJldHVybiBzbi5HZXRDZWxsTm9ydGhSb3RhdGlvbihha0NlbGwpO1xyXG59O1xyXG4vL0dldHMgY2VsbCBsaWdodGluZyB0ZW1wbGF0ZVxyXG5leHBvcnQgdmFyIEdldExpZ2h0aW5nVGVtcGxhdGUgPSBmdW5jdGlvbiAoYWtDZWxsKSB7IHJldHVybiBzbi5HZXRMaWdodGluZ1RlbXBsYXRlKGFrQ2VsbCk7IH07XHJcbi8vU2V0cyBjZWxsIGxpZ2h0aW5nIHRlbXBsYXRlXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRpbmdUZW1wbGF0ZSA9IGZ1bmN0aW9uIChha0NlbGwsIGFrTGlnaHRpbmdUZW1wbGF0ZSkgeyByZXR1cm4gc24uU2V0TGlnaHRpbmdUZW1wbGF0ZShha0NlbGwsIGFrTGlnaHRpbmdUZW1wbGF0ZSk7IH07XHJcbi8vU2V0cyBjZWxsIG5vcnRoIHJvdGF0aW9uLlxyXG5leHBvcnQgdmFyIFNldENlbGxOb3J0aFJvdGF0aW9uID0gZnVuY3Rpb24gKGFrQ2VsbCwgYWZBbmdsZSkgeyByZXR1cm4gc24uU2V0Q2VsbE5vcnRoUm90YXRpb24oYWtDZWxsLCBhZkFuZ2xlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vREVCVUdcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQWRkcyBhbGwgZnVuY3Rpb25hbCBzcGVsbHMgKGllLiBzcGVsbHMgdGhhdCBjYW4gYmUgbGVhcm5lZCBmcm9tIHNwZWxsIGJvb2tzLCBhbmQgbm90IGFsbCAyMDAwKyBzcGVsbHMgbGlrZSBwc2IpXHJcbmV4cG9ydCB2YXIgR2l2ZVBsYXllclNwZWxsQm9vayA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdpdmVQbGF5ZXJTcGVsbEJvb2soKTsgfTtcclxuLy9EdW1wcyBjdXJyZW50IGFuaW1hdGlvbiB2YXJpYWJsZXMgdG8gcG8zX3BhcHlydXNleHRlbmRlcjY0LmxvZ1xyXG5leHBvcnQgdmFyIER1bXBBbmltYXRpb25WYXJpYWJsZXMgPSBmdW5jdGlvbiAoYWtBY3RvciwgYXNBbmltYXRpb25WYXJQcmVmaXgpIHsgcmV0dXJuIHNuLkR1bXBBbmltYXRpb25WYXJpYWJsZXMoYWtBY3RvciwgYXNBbmltYXRpb25WYXJQcmVmaXgpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9ERVRFQ1RJT05cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUmV0dXJucyB3aGV0aGVyIG90aGVyIE5QQ3MgY2FuIGRldGVjdCB0aGlzIGFjdG9yLlxyXG4vLzAgLSAgY2FuJ3QgYmUgZGV0ZWN0ZWQsIDEgLSBub3JtYWwsIDIgLSAgd2lsbCBhbHdheXMgYmUgZGV0ZWN0ZWRcclxuZXhwb3J0IHZhciBDYW5BY3RvckJlRGV0ZWN0ZWQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkNhbkFjdG9yQmVEZXRlY3RlZChha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhpcyBhY3RvciBjYW4gZGV0ZWN0IG90aGVyIE5QQ3MuXHJcbi8vMCAtIGNhbiBuZXZlciBkZXRlY3QsIDEtIG5vcm1hbCwgMiAtIHdpbGwgYWx3YXlzIGRldGVjdCBvdGhlcnNcclxuZXhwb3J0IHZhciBDYW5BY3RvckRldGVjdCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uQ2FuQWN0b3JEZXRlY3QoYWtBY3Rvcik7XHJcbn07XHJcbi8vRm9yY2UgdGhpcyBhY3RvciB0byBiZSBkZXRlY3RlZCBieSBvdGhlciBOUENzIChhY3RvciBpcyBhbHdheXMgdmlzaWJsZSkuXHJcbmV4cG9ydCB2YXIgRm9yY2VBY3RvckRldGVjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRm9yY2VBY3RvckRldGVjdGlvbihha0FjdG9yKTtcclxufTtcclxuLy9Gb3JjZSB0aGlzIGFjdG9yIHRvIGFsd2F5cyBkZXRlY3QgdGhlaXIgdGFyZ2V0c1xyXG5leHBvcnQgdmFyIEZvcmNlQWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkZvcmNlQWN0b3JEZXRlY3RpbmcoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoaXMgYWN0b3IgaXMgY3VycmVudGx5IGRldGVjdGVkIGJ5IG90aGVyIE5QQ3NcclxuZXhwb3J0IHZhciBJc0RldGVjdGVkQnlBbnlvbmUgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uSXNEZXRlY3RlZEJ5QW55b25lKGFrQWN0b3IpOyB9O1xyXG4vL1ByZXZlbnQgdGhpcyBhY3RvciBmcm9tIGJlaW5nIGRldGVjdGVkIGJ5IG90aGVyIE5QQ3MgKGFjdG9yIGlzIGhpZGRlbikuXHJcbmV4cG9ydCB2YXIgUHJldmVudEFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLlByZXZlbnRBY3RvckRldGVjdGlvbihha0FjdG9yKTsgfTtcclxuLy9QcmV2ZW50IHRoaXMgYWN0b3IgZnJvbSBkZXRlY3Rpbmcgb3RoZXIgTlBDcyAoYWN0b3IgaXMgYmxpbmQpXHJcbmV4cG9ydCB2YXIgUHJldmVudEFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLlByZXZlbnRBY3RvckRldGVjdGluZyhha0FjdG9yKTsgfTtcclxuLy9SZXNldHMgZGV0ZWN0aW9uIHN0YXRlXHJcbmV4cG9ydCB2YXIgUmVzZXRBY3RvckRldGVjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uUmVzZXRBY3RvckRldGVjdGlvbihha0FjdG9yKTtcclxufTtcclxuLy9SZXNldHMgZGV0ZWN0aW5nIHN0YXRlXHJcbmV4cG9ydCB2YXIgUmVzZXRBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uUmVzZXRBY3RvckRldGVjdGluZyhha0FjdG9yKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRUZGRUNUU0hBREVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vKiogRUZGRUNUIFNIQURFUiBGTEFHU1xyXG4gICAgICAgIGtOb01lbWJyYW5lU2hhZGVyID0gMHgwMDAwMDAwMVxyXG4gICAgICAgIGtNZW1icmFuZUdyZXlzY2FsZUNvbG9yID0gMHgwMDAwMDAwMlxyXG4gICAgICAgIGtNZW1icmFuZUdyZXlzY2FsZUFscGhhID0gMHgwMDAwMDAwNFxyXG4gICAgICAgIGtOb1BhcnRpY2xlU2hhZGVyID0gMHgwMDAwMDAwOFxyXG4gICAgICAgIGtFZGdlRWZmZWN0SW52ZXJzZSA9IDB4MDAwMDAwMTBcclxuICAgICAgICBrQWZmZWN0U2tpbk9ubHkgPSAweDAwMDAwMDIwXHJcbiAgICAgICAga0lnbm9yZUFscGhhID0gMHgwMDAwMDA0MFxyXG4gICAgICAgIGtQcm9qZWN0VVYgPSAweDAwMDAwMDgwXHJcbiAgICAgICAga0lnbm9yZUJhc2VHZW9tZXRyeUFscGhhID0gMHgwMDAwMDEwMFxyXG4gICAgICAgIGtMaWdodGluZyA9IDB4MDAwMDAyMDBcclxuICAgICAgICBrTm9XZWFwb25zID0gMHgwMDAwMDQwMFxyXG4gICAgICAgIGtQYXJ0aWNsZUFuaW1hdGVkID0gMHgwMDAwODAwMFxyXG4gICAgICAgIGtQYXJ0aWNsZUdyZXlzY2FsZUNvbG9yID0gMHgwMDAxMDAwMFxyXG4gICAgICAgIGtQYXJ0aWNsZUdyZXlzY2FsZUFscGhhID0gMHgwMDAyMDAwMFxyXG4gICAgICAgIGtVc2VCbG9vZEdlb21ldHJ5ID0gMHgwMTAwMDAwMCAqL1xyXG4vL0dldHMgYWRkb24gbW9kZWxzXHJcbmV4cG9ydCB2YXIgR2V0QWRkb25Nb2RlbHMgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldEFkZG9uTW9kZWxzKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9SZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgZWZmZWN0IHNoYWRlcnMgcHJlc2VudC9wcmVzZW50IGFuZCBhY3RpdmUgKG9uIG9iamVjdHMpIHdpdGhpbiB0aGUgbG9hZGVkIGFyZWEuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0U2hhZGVyVG90YWxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWJBY3RpdmUpIHsgcmV0dXJuIHNuLkdldEVmZmVjdFNoYWRlclRvdGFsQ291bnQoYWtFZmZlY3RTaGFkZXIsIGFiQWN0aXZlKTsgfTtcclxuLy9JcyBlZmZlY3Qgc2hhZGVyIGZsYWcgc2V0P1xyXG5leHBvcnQgdmFyIElzRWZmZWN0U2hhZGVyRmxhZ1NldCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlGbGFnKSB7IHJldHVybiBzbi5Jc0VmZmVjdFNoYWRlckZsYWdTZXQoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZyk7IH07XHJcbi8vR2V0IGZpbGwgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldE1lbWJyYW5lRmlsbFRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldE1lbWJyYW5lRmlsbFRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBob2xlcyB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0TWVtYnJhbmVIb2xlc1RleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldE1lbWJyYW5lSG9sZXNUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgbWVtYnJhbmUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0cyBmdWxsIHBhcnRpY2xlIGNvdW50LlxyXG5leHBvcnQgdmFyIEdldFBhcnRpY2xlRnVsbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZUZ1bGxDb3VudChha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IHBhcnRpY2xlIHBhbGV0dGUgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBwYXJ0aWNsZSBzaGFkZXIgdGV4dHVyZVxyXG5leHBvcnQgdmFyIEdldFBhcnRpY2xlU2hhZGVyVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVTaGFkZXJUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXRzIHBlcnNpc3RlbnQgY291bnQuXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlUGVyc2lzdGVudENvdW50KGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9DbGVhcnMgZWZmZWN0IHNoYWRlciBmbGFnLlxyXG5leHBvcnQgdmFyIENsZWFyRWZmZWN0U2hhZGVyRmxhZyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhckVmZmVjdFNoYWRlckZsYWcoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZyk7IH07XHJcbi8vR2V0cyBhZGRvbiBtb2RlbHNcclxuZXhwb3J0IHZhciBTZXRBZGRvbk1vZGVscyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWtEZWJyaXMpIHsgcmV0dXJuIHNuLlNldEFkZG9uTW9kZWxzKGFrRWZmZWN0U2hhZGVyLCBha0RlYnJpcyk7IH07XHJcbi8vU2V0IGVmZmVjdCBzaGFkZXIgZmxhZy5cclxuZXhwb3J0IHZhciBTZXRFZmZlY3RTaGFkZXJGbGFnID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLlNldEVmZmVjdFNoYWRlckZsYWcoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZyk7IH07XHJcbi8vU2V0IG1lbWJyYW5lIGNvbG9yIGtleVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lQ29sb3JLZXlEYXRhID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKSB7XHJcbiAgICByZXR1cm4gc24uU2V0TWVtYnJhbmVDb2xvcktleURhdGEoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpO1xyXG59O1xyXG4vL1NldCBtZW1icmFuZSBmaWxsIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRNZW1icmFuZUZpbGxUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRNZW1icmFuZUZpbGxUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgaG9sZXMgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lSG9sZXNUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRNZW1icmFuZUhvbGVzVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IG1lbWJyYW5lIHBhbGV0dGUgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lUGFsZXR0ZVRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBwYXJ0aWNsZSBjb2xvciBrZXlcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZUNvbG9yS2V5RGF0YSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSkge1xyXG4gICAgcmV0dXJuIHNuLlNldFBhcnRpY2xlQ29sb3JLZXlEYXRhKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKTtcclxufTtcclxuLy9TZXRzIGZ1bGwgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVGdWxsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCkgeyByZXR1cm4gc24uU2V0UGFydGljbGVGdWxsQ291bnQoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0UGFydGljbGVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0cyBwZXJzaXN0ZW50IHBhcnRpY2xlIGNvdW50LlxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlUGVyc2lzdGVudENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpIHsgcmV0dXJuIHNuLlNldFBhcnRpY2xlUGVyc2lzdGVudENvdW50KGFrRWZmZWN0U2hhZGVyLCBhZlBhcnRpY2xlQ291bnQpOyB9O1xyXG4vL1NldCBwYXJ0aWNsZSBzaGFkZXIgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlU2hhZGVyVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0UGFydGljbGVTaGFkZXJUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0VOQ0hBTlRNRU5UIC0gc2VlIFNQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vKiogRU5DSEFOVE1FTlQgVFlQRVNcclxuICAgICAgICBFbmNoYW50bWVudCA9IDYsXHJcbiAgICAgICAgU3RhZmZFbmNoYW50bWVudCA9IDEyICovXHJcbi8vUmV0dXJucyBlbmNoYW50bWVudCB0eXBlLiAtMSBpZiAgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldEVuY2hhbnRtZW50VHlwZSA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50KSB7IHJldHVybiBzbi5HZXRFbmNoYW50bWVudFR5cGUoYWtFbmNoYW50bWVudCk7IH07XHJcbi8vLS0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIEVuY2hhbnRtZW50IHRvIHRhcmdldCBFbmNoYW50bWVudCwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuIE9wdGlvbmFsIGNvc3QgYXJndW1lbnQuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIEVuY2hhbnRtZW50IHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbUVuY2hhbnRtZW50ID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbUVuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gRW5jaGFudG1lbnQgdGhhdCBtYXRjaGVzIEVuY2hhbnRtZW50IGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtFbmNoYW50bWVudFRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9NYXRjaEZyb20sIGFpSW5kZXgpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GRUNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRkVDIGZ1bmN0aW9uXHJcbi8vcmV0dXJucyBlZmZlY3QgdHlwZSwgZWZmZWN0IHNraWxsIGxldmVsLCBhbmQgcHJvamVjdGlsZSB0eXBlLCBvZiB0aGUgaGlnaGVzdCBtYWduaXR1ZGUgZWZmZWN0IHByZXNlbnQgb24gdGhlIGFjdG9yXHJcbi8vcGVybWFuZW50IC0gU1VOLCBBQ0lELCBGSVJFLCBGUk9TVCwgU0hPQ0ssIERSQUlOXHJcbi8vdGVtcG9yYXJ5IC0gUE9JU09OLCBGRUFSXHJcbmV4cG9ydCB2YXIgR2V0RGVhdGhFZmZlY3RUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIHR5cGUpIHsgcmV0dXJuIHNuLkdldERlYXRoRWZmZWN0VHlwZShha0FjdG9yLCB0eXBlKTsgfTtcclxuLy8wIC0gY2hhcnJlZC9za2VsZXRvblxyXG4vLzEgLSBkcmFpbmVkXHJcbi8vMiAtIHBvaXNvbmVkL2ZyaWdodGVuZWRcclxuLy8zLSAgYWdlZFxyXG4vLzQgLSBjaGFycmVkIGNyZWF0dXJlXHJcbi8vNSAtIGZyb3plblxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdHNOb3RPZlR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlFZmZlY3RUeXBlKSB7IHJldHVybiBzbi5SZW1vdmVFZmZlY3RzTm90T2ZUeXBlKGFrQWN0b3IsIGFpRWZmZWN0VHlwZSk7IH07XHJcbi8vIDAgLSBwZXJtYW5lbnRcclxuLy8gMSAtIHRlbXBvcmFyeVxyXG4vLyAyIC0gZnJvemVuQWN0b3JcclxuLy8gMyAtIGZyb3plbkNvbFxyXG5leHBvcnQgdmFyIFNlbmRGRUNSZXNldEV2ZW50ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpVHlwZSwgYWJSZXNldDNEKSB7IHJldHVybiBzbi5TZW5kRkVDUmVzZXRFdmVudChha0FjdG9yLCBhaVR5cGUsIGFiUmVzZXQzRCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZPUk1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vUmVjb3JkIGZsYWdzXHJcbi8vaHR0cHM6Ly9lbi51ZXNwLm5ldC93aWtpL1NreXJpbV9Nb2Q6TW9kX0ZpbGVfRm9ybWF0I1JlY29yZHNcclxuLy9ldmFsdWF0ZXMgY29uZGl0aW9uIGxpc3RzIGZvciBzcGVsbHMvcG90aW9ucy9lbmNoYW50bWVudHMvbWdlZnMgYW5kIHJldHVybnMgaWYgdGhleSBjYW4gYmUgZnVsbGZpbGxlZFxyXG5leHBvcnQgdmFyIEV2YWx1YXRlQ29uZGl0aW9uTGlzdCA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrQWN0aW9uUmVmLCBha1RhcmdldFJlZikgeyByZXR1cm4gc24uRXZhbHVhdGVDb25kaXRpb25MaXN0KGFrRm9ybSwgYWtBY3Rpb25SZWYsIGFrVGFyZ2V0UmVmKTsgfTtcclxuLy9DbGVhciByZWNvcmQgZmxhZ1xyXG5leHBvcnQgdmFyIENsZWFyUmVjb3JkRmxhZyA9IGZ1bmN0aW9uIChha0Zvcm0sIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJSZWNvcmRGbGFnKGFrRm9ybSwgYWlGbGFnKTsgfTtcclxuLy9CdWlsZHMgYSBsaXN0IG9mIGNvbmRpdGlvbnMgcHJlc2VudCBvbiB0aGUgZm9ybS4gSW5kZXggaXMgZm9yIHNwZWxscy9vdGhlciBmb3JtcyB0aGF0IGhhdmUgbGlzdHMgd2l0aCBjb25kaXRpb25zXHJcbi8vU29tZSBjb25kaXRpb25zIG1heSBiZSBza2lwcGVkIChjb25kaXRpb25zIHRoYXQgcmVxdWlyZSBub24gcGxheWVyIHJlZmVyZW5jZXMsIG92ZXJseSBjb21wbGV4IGNvbmRpdGlvbnMgaW52b2x2aW5nIHBhY2thZ2VzL2FsaWFzZXMpXHJcbmV4cG9ydCB2YXIgR2V0Q29uZGl0aW9uTGlzdCA9IGZ1bmN0aW9uIChha0Zvcm0sIGFpSW5kZXgpIHtcclxuICAgIGlmIChhaUluZGV4ID09PSB2b2lkIDApIHsgYWlJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5HZXRDb25kaXRpb25MaXN0KGFrRm9ybSwgYWlJbmRleCk7XHJcbn07XHJcbi8vR2V0IGZvcm0gZWRpdG9ySURcclxuZXhwb3J0IHZhciBHZXRGb3JtRWRpdG9ySUQgPSBmdW5jdGlvbiAoYWtGb3JtKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Rm9ybUVkaXRvcklEKGFrRm9ybSk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGlzIHBhcnQgb2YgdGhlIG1vZFxyXG5leHBvcnQgdmFyIElzRm9ybUluTW9kID0gZnVuY3Rpb24gKGFrRm9ybSwgYXNNb2ROYW1lKSB7IHJldHVybiBzbi5Jc0Zvcm1Jbk1vZChha0Zvcm0sIGFzTW9kTmFtZSk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBmb3JtIGlzIHRlbXBvcmFyeSAoaWUuIGhhcyBhIGZvcm1JRCBiZWdpbm5pbmcgd2l0aCBGRilcclxuZXhwb3J0IHZhciBJc0dlbmVyYXRlZEZvcm0gPSBmdW5jdGlvbiAoYWtGb3JtKSB7XHJcbiAgICByZXR1cm4gc24uSXNHZW5lcmF0ZWRGb3JtKGFrRm9ybSk7XHJcbn07XHJcbi8vSXMgcmVjb3JkIGZsYWcgc2V0P1xyXG5leHBvcnQgdmFyIElzUmVjb3JkRmxhZ1NldCA9IGZ1bmN0aW9uIChha0Zvcm0sIGFpRmxhZykgeyByZXR1cm4gc24uSXNSZWNvcmRGbGFnU2V0KGFrRm9ybSwgYWlGbGFnKTsgfTtcclxuLy9yZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaGFzIHNjcmlwdCBhdHRhY2hlZC4gSWYgc2NyaXB0TmFtZSBpcyBlbXB0eSwgaXQgd2lsbCByZXR1cm4gaWYgdGhlIGZvcm0gaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFzU2NyaXB0TmFtZSkgeyByZXR1cm4gc24uSXNTY3JpcHRBdHRhY2hlZFRvRm9ybShha0Zvcm0sIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vU2V0IHJlY29yZCBmbGFnXHJcbmV4cG9ydCB2YXIgU2V0UmVjb3JkRmxhZyA9IGZ1bmN0aW9uIChha0Zvcm0sIGFpRmxhZykgeyByZXR1cm4gc24uU2V0UmVjb3JkRmxhZyhha0Zvcm0sIGFpRmxhZyk7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQWRkcyBrZXl3b3JkIHRvIGZvcm0uIEZhaWxzIGlmIHRoZSBmb3JtIGRvZXNuJ3QgYWNjZXB0IGtleXdvcmRzLlxyXG5leHBvcnQgdmFyIEFkZEtleXdvcmRUb0Zvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLkFkZEtleXdvcmRUb0Zvcm0oYWtGb3JtLCBha0tleXdvcmQpOyB9O1xyXG4vL0Zhdm9yaXRlcyBpdGVtIChtdXN0IGJlIGluIGludmVudG9yeSkgb3Igc3BlbGwvc2hvdXRcclxuZXhwb3J0IHZhciBNYXJrSXRlbUFzRmF2b3JpdGUgPSBmdW5jdGlvbiAoYWtGb3JtKSB7XHJcbiAgICByZXR1cm4gc24uTWFya0l0ZW1Bc0Zhdm9yaXRlKGFrRm9ybSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgZ2l2ZW4ga2V5d29yZCB3aXRoIG5ldyBvbmUgb24gZm9ybS4gT25seSBsYXN0cyBmb3IgYSBzaW5nbGUgZ2FtaW5nIHNlc3Npb24uIFtwb3J0ZWQgZnJvbSBEaWVuZXNUb29sc10uXHJcbmV4cG9ydCB2YXIgUmVwbGFjZUtleXdvcmRPbkZvcm0gPSBmdW5jdGlvbiAoYWtGb3JtLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSkgeyByZXR1cm4gc24uUmVwbGFjZUtleXdvcmRPbkZvcm0oYWtGb3JtLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSk7IH07XHJcbi8vUmVtb3ZlcyBrZXl3b3JkLCBpZiBwcmVzZW50LCBmcm9tIGZvcm0uXHJcbmV4cG9ydCB2YXIgUmVtb3ZlS2V5d29yZE9uRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZCkgeyByZXR1cm4gc24uUmVtb3ZlS2V5d29yZE9uRm9ybShha0Zvcm0sIGFrS2V5d29yZCk7IH07XHJcbi8vVW5mYXZvcml0ZXMgaXRlbSAobXVzdCBiZSBpbiBpbnZlbnRvcnkpIG9yIHNwZWxsL3Nob3V0XHJcbmV4cG9ydCB2YXIgVW5tYXJrSXRlbUFzRmF2b3JpdGUgPSBmdW5jdGlvbiAoYWtGb3JtKSB7XHJcbiAgICByZXR1cm4gc24uVW5tYXJrSXRlbUFzRmF2b3JpdGUoYWtGb3JtKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRlVSTklUVVJFXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKiogRlVSTklUVVJFIFRZUEVTXHJcbiAgICAgICAgUGVyY2ggPSAwXHJcbiAgICAgICAgTGVhbiA9IDFcclxuICAgICAgICBTaXQgPSAyXHJcbiAgICAgICAgU2xlZXAgPSAzICovXHJcbi8vR2V0cyBmdXJuaXR1cmUgdHlwZVxyXG5leHBvcnQgdmFyIEdldEZ1cm5pdHVyZVR5cGUgPSBmdW5jdGlvbiAoYWtGdXJuaXR1cmUpIHsgcmV0dXJuIHNuLkdldEZ1cm5pdHVyZVR5cGUoYWtGdXJuaXR1cmUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HQU1FXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgYWxsIGVuY2hhbnRtZW50cyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxFbmNoYW50bWVudHMgPSBmdW5jdGlvbiAoYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEVuY2hhbnRtZW50cyhha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBmb3JtcyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIGZvcm10eXBlIGFuZCBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsRm9ybXMgPSBmdW5jdGlvbiAoYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbEZvcm1zKGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHJhY2VzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbFJhY2VzID0gZnVuY3Rpb24gKGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxSYWNlcyhha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBzcGVsbHMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LiBJc1BsYXlhYmxlIGZpbHRlcnMgb3V0IHNwZWxscyB0aGF0IGFyZSBub3QgZm91bmQgaW4gc3BlbGxib29rcy5cclxuZXhwb3J0IHZhciBHZXRBbGxTcGVsbHMgPSBmdW5jdGlvbiAoYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICBpZiAoYWJJc1BsYXlhYmxlID09PSB2b2lkIDApIHsgYWJJc1BsYXlhYmxlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxTcGVsbHMoYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKTtcclxufTtcclxuLyoqIEFJIFBST0NFU1MgTEVWRUxcclxuICAgICAgICBIaWdoUHJvY2VzcyA9IDBcclxuICAgICAgICBNaWRkbGVIaWdoUHJvY2VzcyA9IDFcclxuICAgICAgICBNaWRkbGVMb3dQcm9jZXNzID0gMlxyXG4gICAgICAgIExvd1Byb2Nlc3MgPSAzICovXHJcbi8vR2V0cyBhbGwgYWN0b3JzIGJ5IEFJIHByb2Nlc3NpbmcgdHlwZS4gaHR0cHM6Ly9nZWNrLmJldGhzb2Z0LmNvbS9pbmRleC5waHA/dGl0bGU9R2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwgZm9yIG1vcmUgaW5mb1xyXG5leHBvcnQgdmFyIEdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsID0gZnVuY3Rpb24gKGFpTGV2ZWwpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbChhaUxldmVsKTtcclxufTtcclxuLy9HZXRzIGFsbCBmb3JtcyBhZGRlZCBieSBhIHNwZWNpZmllZCBtb2QvZ2FtZSBlc20sIGZpbHRlcmVkIHVzaW5nIGZvcm10eXBlIGFuZCBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbEZvcm1zSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBhaUZvcm1UeXBlLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRm9ybXNJbk1vZChhc01vZE5hbWUsIGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIGVuY2hhbnRtZW50cyBhZGRlZCBieSBhIHNwZWNpZmllZCBtb2QvZ2FtZSBlc20sIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsRW5jaGFudG1lbnRzSW5Nb2QgPSBmdW5jdGlvbiAoYXNNb2ROYW1lLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRW5jaGFudG1lbnRzSW5Nb2QoYXNNb2ROYW1lLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCByYWNlcyBhZGRlZCBieSBhIHNwZWNpZmllZCBtb2QvZ2FtZSBlc20sIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsUmFjZXNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxSYWNlc0luTW9kKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgc3BlbGxzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxTcGVsbHNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSkge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgaWYgKGFiSXNQbGF5YWJsZSA9PT0gdm9pZCAwKSB7IGFiSXNQbGF5YWJsZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsU3BlbGxzSW5Nb2QoYXNNb2ROYW1lLCBha0tleXdvcmRzLCBhYklzUGxheWFibGUpO1xyXG59O1xyXG4vL0dldHMgY3VycmVudCBjZWxsIGlmIGluIGludGVyaW9yL2F0dGFjaGVkIGNlbGxzIGluIGV4dGVyaW9yL3NreSBjZWxscyBpZiBpbiB3b3JsZHNwYWNlIHdpdGggbm8gYXR0YWNoZWQgY2VsbHM/P1xyXG5leHBvcnQgdmFyIEdldEF0dGFjaGVkQ2VsbHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRBdHRhY2hlZENlbGxzKCk7IH07XHJcbi8vR2V0cyBmb3JtIHVzaW5nIGl0cyBlZGl0b3JJRFxyXG5leHBvcnQgdmFyIEdldEZvcm1Gcm9tRWRpdG9ySUQgPSBmdW5jdGlvbiAoYXNFZGl0b3JJRCkgeyByZXR1cm4gc24uR2V0Rm9ybUZyb21FZGl0b3JJRChhc0VkaXRvcklEKTsgfTtcclxuLy9HZXRzIHRoZSB2YWx1ZSBvZiB0aGUgYm9vbGVhbiBnYW1lc2V0dGluZy4gUmV0dXJucyAtMSBpZiBnbXN0IGlzIE5vbmUgb3Igbm90IGEgYm9vbC5cclxuZXhwb3J0IHZhciBHZXRHYW1lU2V0dGluZ0Jvb2wgPSBmdW5jdGlvbiAoYXNHYW1lU2V0dGluZykge1xyXG4gICAgcmV0dXJuIHNuLkdldEdhbWVTZXR0aW5nQm9vbChhc0dhbWVTZXR0aW5nKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgR29kIE1vZGUgaXMgZW5hYmxlZFxyXG5leHBvcnQgdmFyIEdldEdvZE1vZGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRHb2RNb2RlKCk7IH07XHJcbi8vR2V0cyBsb2NhbCBncmF2aXR5IG9mIHRoZSBleHRlcmlvciB3b3JsZHNwYWNlL2ludGVyaW9yIGNlbGwuIERlZmF1bHQgZ3Jhdml0eSBpcyBbMC4wLCAwLjAsIC05LjgxXVxyXG5leHBvcnQgdmFyIEdldExvY2FsR3Jhdml0eSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldExvY2FsR3Jhdml0eSgpOyB9O1xyXG4vL0dldHMgaG93IG1hbnkgYWN0b3JzIGFyZSBpbiBoaWdoIHByb2Nlc3NcclxuZXhwb3J0IHZhciBHZXROdW1BY3RvcnNJbkhpZ2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXROdW1BY3RvcnNJbkhpZ2goKTsgfTtcclxuLy9SZXR1cm5zIGFsbCBhY3RvcnMgdGhhdCBhcmUgY3VycmVudGx5IGZvbGxvd2luZyB0aGUgcGxheWVyXHJcbmV4cG9ydCB2YXIgR2V0UGxheWVyRm9sbG93ZXJzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0UGxheWVyRm9sbG93ZXJzKCk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHBsdWdpbiBleGlzdHNcclxuZXhwb3J0IHZhciBJc1BsdWdpbkZvdW5kID0gZnVuY3Rpb24gKGFrTmFtZSkge1xyXG4gICAgcmV0dXJuIHNuLklzUGx1Z2luRm91bmQoYWtOYW1lKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgQ0MgU3Vydml2YWwgTW9kZSBpcyBlbmFibGVkXHJcbmV4cG9ydCB2YXIgSXNTdXJ2aXZhbE1vZGVBY3RpdmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5Jc1N1cnZpdmFsTW9kZUFjdGl2ZSgpOyB9O1xyXG4vL1NldHMgbG9jYWwgZ3Jhdml0eSAobXMtMikgb2YgdGhlIGV4dGVyaW9yIHdvcmxkc3BhY2UvaW50ZXJpb3IgY2VsbC5cclxuZXhwb3J0IHZhciBTZXRMb2NhbEdyYXZpdHkgPSBmdW5jdGlvbiAoYWZYQXhpcywgYWZZQXhpcywgYWZaQXhpcykgeyByZXR1cm4gc24uU2V0TG9jYWxHcmF2aXR5KGFmWEF4aXMsIGFmWUF4aXMsIGFmWkF4aXMpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9IQVpBUkRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8qKiBIQVpBUkQgRkxBR1NcclxuICAgICAgICBOb25lID0gMFxyXG4gICAgICAgIFBDT25seSA9IDB4MDAwMDAwMDFcclxuICAgICAgICBJbmhlcml0RHVyYXRpb24gPSAweDAwMDAwMDAyXHJcbiAgICAgICAgQWxpZ25Ub05vcm1hbCA9IDB4MDAwMDAwMDRcclxuICAgICAgICBJbmhlcml0UmFkaXVzID0gMHgwMDAwMDAwOFxyXG4gICAgICAgIERyb3BUb0dyb3VuZCA9IDB4MDAwMDAwMTAgKi9cclxuLy9HZXRzIGhhemFyZCBhcnQgcGF0aCwgZWcuIFwiRWZmZWN0cy9NeUhhemFyZEFydC5uaWZcIlxyXG5leHBvcnQgdmFyIEdldEhhemFyZEFydCA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZEFydChha0hhemFyZCk7XHJcbn07XHJcbi8vR2V0cyBhc3NvY2lhdGVkIElNT0RcclxuZXhwb3J0IHZhciBHZXRIYXphcmRJTU9EID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRJTU9EKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIElNT0QgcmFkaXVzXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkSU1PRFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkSU1PRFJhZGl1cyhha0hhemFyZCk7IH07XHJcbi8vR2V0cyBpbXBhY3QgZGF0YSBzZXRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRJUERTID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRJUERTKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaWZldGltZVxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpZmV0aW1lID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRMaWZldGltZShha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGlnaHRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaWdodCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkTGlnaHQoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpbWl0XHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGltaXQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRMaW1pdChha0hhemFyZCk7XHJcbn07XHJcbi8vR2V0cyBoYXphcmQgcmFkaXVzXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkUmFkaXVzKGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGhhemFyZCBzb3VuZFxyXG5leHBvcnQgdmFyIEdldEhhemFyZFNvdW5kID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRTb3VuZChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgc3BlbGxcclxuZXhwb3J0IHZhciBHZXRIYXphcmRTcGVsbCA9IGZ1bmN0aW9uIChha0hhemFyZCkgeyByZXR1cm4gc24uR2V0SGF6YXJkU3BlbGwoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgdGFyZ2V0IGludGVydmFsIChkdXJhdGlvbiBiZXR3ZWVuIGNhc3RzKVxyXG5leHBvcnQgdmFyIEdldEhhemFyZFRhcmdldEludGVydmFsID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRUYXJnZXRJbnRlcnZhbChha0hhemFyZCk7IH07XHJcbi8vSXMgaGF6YXJkIGZsYWcgc2V0P1xyXG5leHBvcnQgdmFyIElzSGF6YXJkRmxhZ1NldCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlGbGFnKSB7IHJldHVybiBzbi5Jc0hhemFyZEZsYWdTZXQoYWtIYXphcmQsIGFpRmxhZyk7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQ2xlYXJzIGhhemFyZCBmbGFnXHJcbmV4cG9ydCB2YXIgQ2xlYXJIYXphcmRGbGFnID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFySGF6YXJkRmxhZyhha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy9TZXRzIGhhemFyZCBhcnQgcGF0aC4gRG9lcyBub3Qgd29yayBvbiBhY3RpdmUgaGF6YXJkc1xyXG5leHBvcnQgdmFyIFNldEhhemFyZEFydCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYXNQYXRoKSB7IHJldHVybiBzbi5TZXRIYXphcmRBcnQoYWtIYXphcmQsIGFzUGF0aCk7IH07XHJcbi8vU2V0IGZsYWdcclxuZXhwb3J0IHZhciBTZXRIYXphcmRGbGFnID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUZsYWcpIHsgcmV0dXJuIHNuLlNldEhhemFyZEZsYWcoYWtIYXphcmQsIGFpRmxhZyk7IH07XHJcbi8vU2V0cyBJTU9EXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkSU1PRCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtJTU9EKSB7IHJldHVybiBzbi5TZXRIYXphcmRJTU9EKGFrSGF6YXJkLCBha0lNT0QpOyB9O1xyXG4vL1NldHMgSU1PRCByYWRpdXNcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJTU9EUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0SGF6YXJkSU1PRFJhZGl1cyhha0hhemFyZCwgYWZSYWRpdXMpOyB9O1xyXG4vL1NldHMgaW1wYWN0IGRhdGEgc2V0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkSVBEUyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtJUERTKSB7IHJldHVybiBzbi5TZXRIYXphcmRJUERTKGFrSGF6YXJkLCBha0lQRFMpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpZmV0aW1lXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGlmZXRpbWUgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmTGlmZXRpbWUpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpZmV0aW1lKGFrSGF6YXJkLCBhZkxpZmV0aW1lKTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaWdodFxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpZ2h0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0xpZ2h0KSB7IHJldHVybiBzbi5TZXRIYXphcmRMaWdodChha0hhemFyZCwgYWtMaWdodCk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGltaXRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaW1pdCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWlMaW1pdCkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGltaXQoYWtIYXphcmQsIGFpTGltaXQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIHJhZGl1c1xyXG5leHBvcnQgdmFyIFNldEhhemFyZFJhZGl1cyA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldEhhemFyZFJhZGl1cyhha0hhemFyZCwgYWZSYWRpdXMpOyB9O1xyXG4vL1NldHMgaGF6YXJkIHNvdW5kXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkU291bmQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrU291bmQpIHsgcmV0dXJuIHNuLlNldEhhemFyZFNvdW5kKGFrSGF6YXJkLCBha1NvdW5kKTsgfTtcclxuLy9TZXRzIGhhemFyZCBzcGVsbFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFNwZWxsID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha3NwZWxsKSB7IHJldHVybiBzbi5TZXRIYXphcmRTcGVsbChha0hhemFyZCwgYWtzcGVsbCk7IH07XHJcbi8vU2V0cyBoYXphcmQgaW50ZXJ2YWxcclxuZXhwb3J0IHZhciBTZXRIYXphcmRUYXJnZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZJbnRlcnZhbCkgeyByZXR1cm4gc24uU2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwoYWtIYXphcmQsIGFmSW50ZXJ2YWwpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9MSUdIVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXRzIGxpZ2h0IGNvbG9yLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0Q29sb3IgPSBmdW5jdGlvbiAoYWtMaWdodCkgeyByZXR1cm4gc24uR2V0TGlnaHRDb2xvcihha0xpZ2h0KTsgfTtcclxuLy9HZXRzIGxpZ2h0IGZhZGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRGYWRlID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodEZhZGUoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBiYXNlIGxpZ2h0IEZPVi5cclxuZXhwb3J0IHZhciBHZXRMaWdodEZPViA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRGT1YoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBsaWdodCByYWRpdXMgKHJhZGl1cyBpcyBhY3R1YWxseSBpbnQgYnV0IGNoYW5naW5nIHRoYXQgd291bGQgYnJlYWsgbW9kcyBzbyBmaXhlZCB0aGF0IGluIHNvdXJjZSkuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRSYWRpdXMgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0UmFkaXVzKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgbGlnaHQgY29sb3IgYXMgUkdCIGFycmF5IFswLTI1NV0uXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRSR0IgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0UkdCKGFrTGlnaHQpO1xyXG59O1xyXG4vL0dldHMgZGVwdGggYmlhcywgcmV0dXJucyAxIGlmIG5vdCBzZXQuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMgPSBmdW5jdGlvbiAoYWtMaWdodE9iamVjdCkgeyByZXR1cm4gc24uR2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMoYWtMaWdodE9iamVjdCk7IH07XHJcbi8qKiBMSUdIVCBUWVBFU1xyXG4gICAgICAgIEhlbWlTaGFkb3cgPSAxXHJcbiAgICAgICAgT21uaSA9IDJcclxuICAgICAgICBPbW5pU2hhZG93ID0gM1xyXG4gICAgICAgIFNwb3QgPSA0XHJcbiAgICAgICAgU3BvdFNoYWRvdyA9IDUgKi9cclxuLy9HZXQgbGlnaHQgdHlwZVxyXG5leHBvcnQgdmFyIEdldExpZ2h0VHlwZSA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRUeXBlKGFrTGlnaHQpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgbGlnaHQgY29sb3IuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRDb2xvciA9IGZ1bmN0aW9uIChha0xpZ2h0LCBha0NvbG9yZm9ybSkgeyByZXR1cm4gc24uU2V0TGlnaHRDb2xvcihha0xpZ2h0LCBha0NvbG9yZm9ybSk7IH07XHJcbi8vU2V0cyBsaWdodCBmYWRlIHJhbmdlLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0RmFkZSA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhZlJhbmdlKSB7IHJldHVybiBzbi5TZXRMaWdodEZhZGUoYWtMaWdodCwgYWZSYW5nZSk7IH07XHJcbi8vc2V0cyBiYXNlIGxpZ2h0IEZPVi5cclxuZXhwb3J0IHZhciBTZXRMaWdodEZPViA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhZkZPVikgeyByZXR1cm4gc24uU2V0TGlnaHRGT1YoYWtMaWdodCwgYWZGT1YpOyB9O1xyXG4vL1NldHMgbGlnaHQgcmFkaXVzIChtaW5pbXVtIGxpZ2h0IHJhZGl1cyBpcyAxNikgLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0UmFkaXVzID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRMaWdodFJhZGl1cyhha0xpZ2h0LCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBsaWdodCBjb2xvciB1c2luZyBSR0IgYXJyYXkgWzAtMjU1XS4gQXJyYXkgbXVzdCBjb250YWluIDMgZWxlbWVudHMgKHIsZyxiKS5cclxuZXhwb3J0IHZhciBTZXRMaWdodFJHQiA9IGZ1bmN0aW9uIChha0xpZ2h0LCBhaVJHQikgeyByZXR1cm4gc24uU2V0TGlnaHRSR0IoYWtMaWdodCwgYWlSR0IpOyB9O1xyXG4vL3NldHMgZGVwdGggYmlhcyBvbiBsaWdodCByZWZlcmVuY2UuIENyZWF0ZXMgbmV3IGRlcHRoIGJpYXMgZXh0cmFkYXRhIG9uIGxpZ2h0cyB0aGF0IGRvbid0IGhhdmUgaXQgc2V0LlxyXG5leHBvcnQgdmFyIFNldExpZ2h0U2hhZG93RGVwdGhCaWFzID0gZnVuY3Rpb24gKGFrTGlnaHRPYmplY3QsIGFmRGVwdGhCaWFzKSB7IHJldHVybiBzbi5TZXRMaWdodFNoYWRvd0RlcHRoQmlhcyhha0xpZ2h0T2JqZWN0LCBhZkRlcHRoQmlhcyk7IH07XHJcbi8vU2V0cyBsaWdodCB0eXBlLiBEb2VzIG5vdCBwZXJzaXN0IGJldHdlZW4gc2Vzc2lvbnMuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRUeXBlID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFpTGlnaHRUeXBlKSB7IHJldHVybiBzbi5TZXRMaWdodFR5cGUoYWtMaWdodCwgYWlMaWdodFR5cGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9MT0NBVElPTlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXQgcGFyZW50IGxvY2F0aW9uLlxyXG5leHBvcnQgdmFyIEdldFBhcmVudExvY2F0aW9uID0gZnVuY3Rpb24gKGFrTG9jKSB7IHJldHVybiBzbi5HZXRQYXJlbnRMb2NhdGlvbihha0xvYyk7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0IHBhcmVudCBsb2NhdGlvbi5cclxuZXhwb3J0IHZhciBTZXRQYXJlbnRMb2NhdGlvbiA9IGZ1bmN0aW9uIChha0xvYywgYWtOZXdMb2MpIHsgcmV0dXJuIHNuLlNldFBhcmVudExvY2F0aW9uKGFrTG9jLCBha05ld0xvYyk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL01BR0lDIEVGRkVDVFNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tLVxyXG4vL0dldHMgYXNzb2NpYXRlZCBmb3JtIChMaWdodCBmb3IgTGlnaHQgc3BlbGxzLCBBY3RvciBmb3IgU3VtbW9uIENyZWF0dXJlLi4uKSwgaWYgYW55XHJcbmV4cG9ydCB2YXIgR2V0QXNzb2NpYXRlZEZvcm0gPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0QXNzb2NpYXRlZEZvcm0oYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8qKiBFRkZFQ1QgQVJDSEVUWVBFU1xyXG4gICAgICAgIFZhbHVlTW9kID0gMFxyXG4gICAgICAgIFNjcmlwdCA9IDFcclxuICAgICAgICBEaXNwZWwgPSAyXHJcbiAgICAgICAgQ3VyZURpc2Vhc2UgPSAzXHJcbiAgICAgICAgQWJzb3JiID0gNFxyXG4gICAgICAgIER1YWxWYWx1ZU1vZCA9IDVcclxuICAgICAgICBDYWxtID0gNlxyXG4gICAgICAgIERlbW9yYWxpemUgPSA3XHJcbiAgICAgICAgRnJlbnp5ID0gOFxyXG4gICAgICAgIERpc2FybSA9IDlcclxuICAgICAgICBDb21tYW5kU3VtbW9uZWQgPSAxMFxyXG4gICAgICAgIEludmlzaWJpbGl0eSA9IDExXHJcbiAgICAgICAgTGlnaHQgPSAxMlxyXG4gICAgICAgIERhcmtuZXNzID0gMTNcclxuICAgICAgICBOaWdodEV5ZSA9IDE0XHJcbiAgICAgICAgTG9jayA9IDE1XHJcbiAgICAgICAgT3BlbiA9IDE2XHJcbiAgICAgICAgQm91bmRXZWFwb24gPSAxN1xyXG4gICAgICAgIFN1bW1vbkNyZWF0dXJlID0gMThcclxuICAgICAgICBEZXRlY3RMaWZlID0gMTlcclxuICAgICAgICBUZWxla2luZXNpcyA9IDIwXHJcbiAgICAgICAgUGFyYWx5c2lzID0gMjFcclxuICAgICAgICBSZWFuaW1hdGUgPSAyMlxyXG4gICAgICAgIFNvdWxUcmFwID0gMjNcclxuICAgICAgICBUdXJuVW5kZWFkID0gMjRcclxuICAgICAgICBHdWlkZSA9IDI1XHJcbiAgICAgICAgV2VyZXdvbGZGZWVkID0gMjZcclxuICAgICAgICBDdXJlUGFyYWx5c2lzID0gMjdcclxuICAgICAgICBDdXJlQWRkaWN0aW9uID0gMjhcclxuICAgICAgICBDdXJlUG9pc29uID0gMjlcclxuICAgICAgICBDb25jdXNzaW9uID0gMzBcclxuICAgICAgICBWYWx1ZUFuZFBhcnRzID0gMzFcclxuICAgICAgICBBY2N1bXVsYXRlTWFnbml0dWRlID0gMzJcclxuICAgICAgICBTdGFnZ2VyID0gMzNcclxuICAgICAgICBQZWFrVmFsdWVNb2QgPSAzNFxyXG4gICAgICAgIENsb2FrID0gMzVcclxuICAgICAgICBXZXJld29sZiA9IDM2XHJcbiAgICAgICAgU2xvd1RpbWUgPSAzN1xyXG4gICAgICAgIFJhbGx5ID0gMzhcclxuICAgICAgICBFbmhhbmNlV2VhcG9uID0gMzlcclxuICAgICAgICBTcGF3bkhhemFyZCA9IDQwXHJcbiAgICAgICAgRXRoZXJlYWxpemUgPSA0MVxyXG4gICAgICAgIEJhbmlzaCA9IDQyXHJcbiAgICAgICAgU3Bhd25TY3JpcHRlZFJlZiA9IDQzXHJcbiAgICAgICAgRGlzZ3Vpc2UgPSA0NFxyXG4gICAgICAgIEdyYWJBY3RvciA9IDQ1XHJcbiAgICAgICAgVmFtcGlyZUxvcmQgPSA0NiAqL1xyXG4vL0dldHMgZWZmZWN0IGFyY2hldHlwZSBvZiBtYWdpY2VmZmVjdCBhbmQgcmV0dXJucyBhcyBpbnQgKDAtNDYpLlxyXG5leHBvcnQgdmFyIEdldEVmZmVjdEFyY2hldHlwZUFzSW50ID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldEVmZmVjdEFyY2hldHlwZUFzSW50KGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgZWZmZWN0IGFyY2hldHlwZSBvZiBtYWdpY2VmZmVjdCBhbmQgcmV0dXJucyBhcyBTdHJpbmcuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0QXJjaGV0eXBlQXNTdHJpbmcgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0RWZmZWN0QXJjaGV0eXBlQXNTdHJpbmcoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBwcmltYXJ5IGFjdG9yIHZhbHVlIGFzIHN0cmluZywgaWYgYW55IChGcm9zdFJlc2lzdCwgU3BlZWRNdWx0KS5cclxuZXhwb3J0IHZhciBHZXRQcmltYXJ5QWN0b3JWYWx1ZSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRQcmltYXJ5QWN0b3JWYWx1ZShha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIHNlY29uZGFyeSBhY3RvciB2YWx1ZSBhcyBzdHJpbmcsIGlmIGFueS5cclxuZXhwb3J0IHZhciBHZXRTZWNvbmRhcnlBY3RvclZhbHVlID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldFNlY29uZGFyeUFjdG9yVmFsdWUoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8qKiBNR0VGIFNPVU5EIFRZUEVTXHJcbiAgICAgICAgRHJhdy9TaGVhdGhlID0gMFxyXG4gICAgICAgIENoYXJnZSA9IDFcclxuICAgICAgICBSZWFkeSA9IDJcclxuICAgICAgICBSZWxlYXNlID0gM1xyXG4gICAgICAgIENvbmNlbnRyYXRpb24gQ2FzdCBMb29wID0gNFxyXG4gICAgICAgIE9uIEhpdCA9IDUgKi9cclxuLy9HZXRzIFNvdW5kIGF0dGFjaGVkIHRvIGluZGV4IG9mIFNvdW5kIHR5cGUgc3BlY2lmaWVkIGluIG1hZ2ljIGVmZmVjdC5cclxuZXhwb3J0IHZhciBHZXRNYWdpY0VmZmVjdFNvdW5kID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFpVHlwZSkge1xyXG4gICAgcmV0dXJuIHNuLkdldE1hZ2ljRWZmZWN0U291bmQoYWtNYWdpY0VmZmVjdCwgYWlUeXBlKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIGFzc29jaWF0ZWQgZm9ybSAoTGlnaHQgZm9yIExpZ2h0IHNwZWxscywgQWN0b3IgZm9yIFN1bW1vbiBDcmVhdHVyZS4uLikuIENhbiBiZSBOb25lXHJcbmV4cG9ydCB2YXIgU2V0QXNzb2NpYXRlZEZvcm0gPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWtGb3JtKSB7IHJldHVybiBzbi5TZXRBc3NvY2lhdGVkRm9ybShha01hZ2ljRWZmZWN0LCBha0Zvcm0pOyB9O1xyXG4vL1NldHMgc291bmQgZGVzY3JpcHRvciBhdHRhY2hlZCB0byBpbmRleCBvZiBTb3VuZCB0eXBlIHNwZWNpZmllZCBpbiBtYWdpYyBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgU2V0TWFnaWNFZmZlY3RTb3VuZCA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBha1NvdW5kRGVzY3JpcHRvciwgYWlUeXBlKSB7IHJldHVybiBzbi5TZXRNYWdpY0VmZmVjdFNvdW5kKGFrTWFnaWNFZmZlY3QsIGFrU291bmREZXNjcmlwdG9yLCBhaVR5cGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9PQkpFQ1RSRUZFUkVOQ0VTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vQWRkcyBhbGwgaW52ZW50b3J5IGl0ZW1zIHRvIGFycmF5LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRBbGxJdGVtc1RvQXJyYXkgPSBmdW5jdGlvbiAoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEFsbEl0ZW1zVG9BcnJheShha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGFsbCBpbnZlbnRvcnkgaXRlbXMgdG8gZm9ybWxpc3QsIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEFsbEl0ZW1zVG9MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEFsbEl0ZW1zVG9MaXN0KGFrUmVmLCBha0xpc3QsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBpbnZlbnRvcnkgaXRlbXMgbWF0Y2hpbmcgZm9ybXR5cGUgdG8gYXJyYXksIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEl0ZW1zT2ZUeXBlVG9BcnJheSA9IGZ1bmN0aW9uIChha1JlZiwgYWlGb3JtVHlwZSwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkSXRlbXNPZlR5cGVUb0FycmF5KGFrUmVmLCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgaW52ZW50b3J5IGl0ZW1zIG1hdGNoaW5nIGZvcm10eXBlIHRvIGZvcm1saXN0LCBmaWx0ZXJpbmcgb3V0IGVxdWlwcGVkLCBmYXZvdXJpdGVkIGFuZCBxdWVzdCBpdGVtcy5cclxuZXhwb3J0IHZhciBBZGRJdGVtc09mVHlwZVRvTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0LCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRJdGVtc09mVHlwZVRvTGlzdChha1JlZiwgYWtMaXN0LCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0ZpbmRzIGFsbCByZWZlcmVuY2VzIG9mIGZvcm0gdHlwZSBpbiBsb2FkZWQgY2VsbHMsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNPZkZvcm1UeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBmb3JtVHlwZSwgYWZSYWRpdXMpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc09mRm9ybVR5cGUoYWtSZWYsIGZvcm1UeXBlLCBhZlJhZGl1cyk7XHJcbn07XHJcbi8vRmluZCBhbGwgcmVmZXJlbmNlcyB3aXRoIGtleXdvcmQgaW4gbG9hZGVkIGNlbGxzLCB3aXRoaW4gcmFkaXVzIGZyb20gcmVmLiBJZiBhZlJhZGl1cyBpcyAwLCBpdCB3aWxsIGdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIGFsbCBhdHRhY2hlZCBjZWxsc1xyXG5leHBvcnQgdmFyIEZpbmRBbGxSZWZlcmVuY2VzV2l0aEtleXdvcmQgPSBmdW5jdGlvbiAoYWtSZWYsIGtleXdvcmRPckxpc3QsIGFmUmFkaXVzLCBhYk1hdGNoQWxsKSB7XHJcbiAgICByZXR1cm4gc24uRmluZEFsbFJlZmVyZW5jZXNXaXRoS2V5d29yZChha1JlZiwga2V5d29yZE9yTGlzdCwgYWZSYWRpdXMsIGFiTWF0Y2hBbGwpO1xyXG59O1xyXG4vL0ZpbmQgYWxsIHJlZmVyZW5jZXMgbWF0Y2hpbmcgYmFzZSBmb3JtL2luIGZvcm1saXN0LCB3aXRoaW4gcmFkaXVzIGZyb20gcmVmLiBJZiBhZlJhZGl1cyBpcyAwLCBpdCB3aWxsIGdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIGFsbCBhdHRhY2hlZCBjZWxsc1xyXG5leHBvcnQgdmFyIEZpbmRBbGxSZWZlcmVuY2VzT2ZUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBha0Zvcm1Pckxpc3QsIGFmUmFkaXVzKSB7XHJcbiAgICByZXR1cm4gc24uRmluZEFsbFJlZmVyZW5jZXNPZlR5cGUoYWtSZWYsIGFrRm9ybU9yTGlzdCwgYWZSYWRpdXMpO1xyXG59O1xyXG4vL0dldHMgdGhlIGZpcnN0IGl0ZW0gaW4gaW52ZW50b3J5IHRoYXQgZXhpc3RzIGluIGZvcm1saXN0LlxyXG5leHBvcnQgdmFyIEZpbmRGaXJzdEl0ZW1Jbkxpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCkgeyByZXR1cm4gc24uRmluZEZpcnN0SXRlbUluTGlzdChha1JlZiwgYWtMaXN0KTsgfTtcclxuLy9HZXRzIGFjdGl2YXRlIGNoaWxkcmVuIC0gc2VlIElzQWN0aXZhdGVDaGlsZFxyXG5leHBvcnQgdmFyIEdldEFjdGl2YXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdGl2YXRlQ2hpbGRyZW4oYWtSZWYpOyB9O1xyXG4vL0dldHMgY3VycmVudCBnYW1lYnJ5byBhbmltYXRpb25cclxuZXhwb3J0IHZhciBHZXRBY3RpdmVHYW1lYnJ5b0FuaW1hdGlvbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0aXZlR2FtZWJyeW9BbmltYXRpb24oYWtSZWYpOyB9O1xyXG4vL0dldHMgYWN0b3IgcmVzcG9uc2libGUgZm9yIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBY3RvckNhdXNlID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RvckNhdXNlKGFrUmVmKTsgfTtcclxuLy9HZXQgYWxsIGFydCBvYmplY3RzIGF0dGFjaGVkIHRvIHRoaXMgb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFsbEFydE9iamVjdHMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFsbEFydE9iamVjdHMoYWtSZWYpOyB9O1xyXG4vL0dldCBhbGwgZWZmZWN0IHNoYWRlcnMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWxsRWZmZWN0U2hhZGVycyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWxsRWZmZWN0U2hhZGVycyhha1JlZik7IH07XHJcbi8vR2V0cyBjbG9zZXN0IGFjdG9yIHRvIHJlZiAod2l0aG91dCByZXR1cm5pbmcgdGhlIHJlZmVyZW5jZSBpdHNlbGYpLlxyXG5leHBvcnQgdmFyIEdldENsb3Nlc3RBY3RvckZyb21SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFiSWdub3JlUGxheWVyKSB7IHJldHVybiBzbi5HZXRDbG9zZXN0QWN0b3JGcm9tUmVmKGFrUmVmLCBhYklnbm9yZVBsYXllcik7IH07XHJcbi8vR2V0cyBkdXJhdGlvbiBvZiB0aGUgZWZmZWN0c2hhZGVyIG9uIHRoZSByZWYuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0U2hhZGVyRHVyYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyKSB7IHJldHVybiBzbi5HZXRFZmZlY3RTaGFkZXJEdXJhdGlvbihha1JlZiwgYWtTaGFkZXIpOyB9O1xyXG4vL0dldHMgdGhlIGRvb3Igd2hpY2ggaXMgbGlua2VkIHRvIHRoaXMgbG9hZCBkb29yLlxyXG5leHBvcnQgdmFyIEdldERvb3JEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0RG9vckRlc3RpbmF0aW9uKGFrUmVmKTsgfTtcclxuLy9HZXRzIGFsbCByZWZzIGxpbmtlZCB0byBha1JlZi4gS2V5d29yZCBvcHRpb25hbC5cclxuZXhwb3J0IHZhciBHZXRMaW5rZWRDaGlsZHJlbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5HZXRMaW5rZWRDaGlsZHJlbihha1JlZiwgYWtLZXl3b3JkKTsgfTtcclxuLy9HZXRzIHRoZSBzb3VyY2Ugb2YgdGhlIG1hZ2ljIGVmZmVjdCAoc3BlbGwvZW5jaGFudG1lbnQvc2Nyb2xsIGV0YykgYW5kIHRoZSBjYXN0ZXIuIE1hZ2ljIGVmZmVjdCBtdXN0IGJlIHByZXNlbnQgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBHZXRNYWdpY0VmZmVjdFNvdXJjZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtFZmZlY3QpIHsgcmV0dXJuIHNuLkdldE1hZ2ljRWZmZWN0U291cmNlKGFrUmVmLCBha0VmZmVjdCk7IH07XHJcbi8qKiBNQVRFUklBTCBUWVBFUyAtIFN0cmluZ1xyXG4gICAgICAgIFN0b25lQnJva2VuXHJcbiAgICAgICAgQmxvY2tCbGFkZTFIYW5kXHJcbiAgICAgICAgTWVhdFxyXG4gICAgICAgIENhcnJpYWdlV2hlZWxcclxuICAgICAgICBNZXRhbExpZ2h0XHJcbiAgICAgICAgV29vZExpZ2h0XHJcbiAgICAgICAgU25vd1xyXG4gICAgICAgIEdyYXZlbFxyXG4gICAgICAgIENoYWluTWV0YWxcclxuICAgICAgICBCb3R0bGVcclxuICAgICAgICBXb29kXHJcbiAgICAgICAgQXNoXHJcbiAgICAgICAgU2tpblxyXG4gICAgICAgIEJsb2NrQmx1bnRcclxuICAgICAgICBETEMxRGVlclNraW5cclxuICAgICAgICBJbnNlY3RcclxuICAgICAgICBCYXJyZWxcclxuICAgICAgICBDZXJhbWljTWVkaXVtXHJcbiAgICAgICAgQmFza2V0XHJcbiAgICAgICAgSWNlXHJcbiAgICAgICAgR2xhc3NTdGFpcnNcclxuICAgICAgICBTdG9uZVN0YWlyc1xyXG4gICAgICAgIFdhdGVyXHJcbiAgICAgICAgRHJhdWdyU2tlbGV0b25cclxuICAgICAgICBCbGFkZTFIYW5kXHJcbiAgICAgICAgQm9va1xyXG4gICAgICAgIENhcnBldFxyXG4gICAgICAgIE1ldGFsU29saWRcclxuICAgICAgICBBeGUxSGFuZFxyXG4gICAgICAgIEJsb2NrQmxhZGUySGFuZFxyXG4gICAgICAgIE9yZ2FuaWNMYXJnZVxyXG4gICAgICAgIEFtdWxldFxyXG4gICAgICAgIFdvb2RTdGFpcnNcclxuICAgICAgICBNdWRcclxuICAgICAgICBCb3VsZGVyU21hbGxcclxuICAgICAgICBTbm93U3RhaXJzXHJcbiAgICAgICAgU3RvbmVIZWF2eVxyXG4gICAgICAgIERyYWdvblNrZWxldG9uXHJcbiAgICAgICAgVHJhcFxyXG4gICAgICAgIEJvd3NTdGF2ZXNcclxuICAgICAgICBBbGR1aW5cclxuICAgICAgICBCbG9ja0Jvd3NTdGF2ZXNcclxuICAgICAgICBXb29kQXNTdGFpcnNcclxuICAgICAgICBTdGVlbEdyZWF0U3dvcmRcclxuICAgICAgICBHcmFzc1xyXG4gICAgICAgIEJvdWxkZXJMYXJnZVxyXG4gICAgICAgIFN0b25lQXNTdGFpcnNcclxuICAgICAgICBCbGFkZTJIYW5kXHJcbiAgICAgICAgQm90dGxlU21hbGxcclxuICAgICAgICBCb25lQWN0b3JcclxuICAgICAgICBTYW5kXHJcbiAgICAgICAgTWV0YWxIZWF2eVxyXG4gICAgICAgIERMQzFTYWJyZUNhdFBlbHRcclxuICAgICAgICBJY2VGb3JtXHJcbiAgICAgICAgRHJhZ29uXHJcbiAgICAgICAgQmxhZGUxSGFuZFNtYWxsXHJcbiAgICAgICAgU2tpblNtYWxsXHJcbiAgICAgICAgUG90c1BhbnNcclxuICAgICAgICBTa2luU2tlbGV0b25cclxuICAgICAgICBCbHVudDFIYW5kXHJcbiAgICAgICAgU3RvbmVTdGFpcnNCcm9rZW5cclxuICAgICAgICBTa2luTGFyZ2VcclxuICAgICAgICBPcmdhbmljXHJcbiAgICAgICAgQm9uZVxyXG4gICAgICAgIFdvb2RIZWF2eVxyXG4gICAgICAgIENoYWluXHJcbiAgICAgICAgRGlydFxyXG4gICAgICAgIEdob3N0XHJcbiAgICAgICAgU2tpbk1ldGFsTGFyZ2VcclxuICAgICAgICBCbG9ja0F4ZVxyXG4gICAgICAgIEFybW9yTGlnaHRcclxuICAgICAgICBTaGllbGRMaWdodFxyXG4gICAgICAgIENvaW5cclxuICAgICAgICBCbG9ja0JsdW50MkhhbmRcclxuICAgICAgICBTaGllbGRIZWF2eVxyXG4gICAgICAgIEFybW9ySGVhdnlcclxuICAgICAgICBBcnJvd1xyXG4gICAgICAgIEdsYXNzXHJcbiAgICAgICAgU3RvbmVcclxuICAgICAgICBXYXRlclB1ZGRsZVxyXG4gICAgICAgIENsb3RoXHJcbiAgICAgICAgU2tpbk1ldGFsU21hbGxcclxuICAgICAgICBXYXJkXHJcbiAgICAgICAgV2ViXHJcbiAgICAgICAgVHJhaWxlclN0ZWVsU3dvcmRcclxuICAgICAgICBCbHVudDJIYW5kXHJcbiAgICAgICAgRExDMVN3aW5naW5nQnJpZGdlXHJcbiAgICAgICAgQm91bGRlck1lZGl1bSAqL1xyXG4vL0dldHMgdGhlIHNwZWNpZmllZCBjb2xsaXNpb24gc2hhcGUncyBoYXZvayBtYXRlcmlhbCB0eXBlcyBhcyBzdHJpbmcgYXJyYXkuIFJldHVybnMgdGhlIGZpcnN0IG1hdGVyaWFsIHR5cGUgaWYgbm9kZU5hbWUgaXMgZW1wdHlcclxuZXhwb3J0IHZhciBHZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUpIHtcclxuICAgIGlmIChhc05vZGVOYW1lID09PSB2b2lkIDApIHsgYXNOb2RlTmFtZSA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRNYXRlcmlhbFR5cGUoYWtSZWYsIGFzTm9kZU5hbWUpO1xyXG59O1xyXG4vL0dldHMgdGhlIG1vdGlvbiB0eXBlIG9mIHRoZSBvYmplY3QgKHNlZSB2YW5pbGxhIFNldE1vdGlvblR5cGUgZm9yIHR5cGVzKS4gUmV0dXJucyAtMSBpZiAzZCBpcyBub3QgbG9hZGVkXHJcbmV4cG9ydCB2YXIgR2V0TW90aW9uVHlwZSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0TW90aW9uVHlwZShha1JlZik7IH07XHJcbi8vR2V0cyByYW5kb20gYWN0b3IgbmVhciByZWYgKHdpdGhvdXQgcmV0dXJuaW5nIHRoZSByZWZlcmVuY2UgaXRzZWxmKS5cclxuZXhwb3J0IHZhciBHZXRSYW5kb21BY3RvckZyb21SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFmUmFkaXVzLCBhYklnbm9yZVBsYXllcikge1xyXG4gICAgcmV0dXJuIHNuLkdldFJhbmRvbUFjdG9yRnJvbVJlZihha1JlZiwgYWZSYWRpdXMsIGFiSWdub3JlUGxheWVyKTtcclxufTtcclxuLy9HZXRzIHF1ZXN0IGl0ZW1zIGluIHRoaXMgcmVmJ3MgaW52ZW50b3J5LCBpZiBhbnlcclxuZXhwb3J0IHZhciBHZXRRdWVzdEl0ZW1zID0gZnVuY3Rpb24gKGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQpIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRRdWVzdEl0ZW1zKGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQpO1xyXG59O1xyXG4vL0dldCBhbGwgYWxpYXNlcyBjb250YWluaW5nIHRoaXMgcmVmXHJcbmV4cG9ydCB2YXIgR2V0UmVmQWxpYXNlcyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0UmVmQWxpYXNlcyhha1JlZik7IH07XHJcbi8vUmV0dXJucyB0aGUgc2l6ZSBvZiB0aGUgc3RvcmVkIHNvdWwgaW4gYSBzb3VsZ2VtIG9iamVjdHJlZmVyZW5jZVxyXG5leHBvcnQgdmFyIEdldFN0b3JlZFNvdWxTaXplID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRTdG9yZWRTb3VsU2l6ZShha1JlZik7IH07XHJcbi8vUmV0dXJucyB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcyBvZiB0aGUgc3BlY2lmaWVkIGFydCBvYmplY3QgKGF0dGFjaGVkIHVzaW5nIHZpc3VhbCBlZmZlY3RzKSBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEhhc0FydE9iamVjdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtBcnRPYmplY3QsIGFiQWN0aXZlKSB7XHJcbiAgICBpZiAoYWJBY3RpdmUgPT09IHZvaWQgMCkgeyBhYkFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSGFzQXJ0T2JqZWN0KGFrUmVmLCBha0FydE9iamVjdCwgYWJBY3RpdmUpO1xyXG59O1xyXG4vL1JldHVybnMgdGhlIG51bWJlciBvZiBpbnN0YW5jZXMgb2YgdGhlIHNwZWNpZmllZCBlZmZlY3Qgc2hhZGVyIG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgSGFzRWZmZWN0U2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlciwgYWJBY3RpdmUpIHtcclxuICAgIGlmIChhYkFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiQWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5IYXNFZmZlY3RTaGFkZXIoYWtSZWYsIGFrU2hhZGVyLCBhYkFjdGl2ZSk7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSByZWZlcmVuY2UgaGFzIG5pZXh0cmFkYXRhIChhdHRhY2hlZCB0byByb290IDNEIG5vZGUpLiBQYXJ0aWFsIG1hdGNoZXMgYWNjZXB0ZWQuXHJcbmV4cG9ydCB2YXIgSGFzTmlFeHRyYURhdGEgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTmFtZSkgeyByZXR1cm4gc24uSGFzTmlFeHRyYURhdGEoYWtSZWYsIGFzTmFtZSk7IH07XHJcbi8vSXMgZG9vciBhIGxvYWQgZG9vcj9cclxuZXhwb3J0IHZhciBJc0xvYWREb29yID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5Jc0xvYWREb29yKGFrUmVmKTsgfTtcclxuLy9JcyBhIHF1ZXN0IG9iamVjdD9cclxuZXhwb3J0IHZhciBJc1F1ZXN0SXRlbSA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uSXNRdWVzdEl0ZW0oYWtSZWYpOyB9O1xyXG4vL0lzIGEgVklQIChhY3RvciB0aGF0IGlzIG5lZWRlZCBieSBxdWVzdCk/XHJcbmV4cG9ydCB2YXIgSXNWSVAgPSBmdW5jdGlvbiAoYWtSZWYpIHtcclxuICAgIHJldHVybiBzbi5Jc1ZJUChha1JlZik7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQXBwbGllcyBtYXRlcmlhbCBzaGFkZXIgdG8gcmVmZXJlbmNlIChkb2Vzbid0IGhhdmUgdG8gYmUgc3RhdGljKVxyXG5leHBvcnQgdmFyIEFwcGx5TWF0ZXJpYWxTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTWF0T2JqZWN0LCBkaXJlY3Rpb25hbFRocmVzaG9sZEFuZ2xlKSB7XHJcbiAgICByZXR1cm4gc24uQXBwbHlNYXRlcmlhbFNoYWRlcihha1JlZiwgYWtNYXRPYmplY3QsIGRpcmVjdGlvbmFsVGhyZXNob2xkQW5nbGUpO1xyXG59O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIEFkZEtleXdvcmRUb0Zvcm0uXHJcbmV4cG9ydCB2YXIgQWRkS2V5d29yZFRvUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLkFkZEtleXdvcmRUb1JlZihha1JlZiwgYWtLZXl3b3JkKTsgfTtcclxuLy9TbmFwcyB0aGUgb2JqZWN0IHRvIHRoZSBuZWFyZXN0IG5hdm1lc2ggcG9pbnQgY2xvc2VzdCB0byBpdHMgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgY2VsbC5cclxuZXhwb3J0IHZhciBNb3ZlVG9OZWFyZXN0TmF2bWVzaExvY2F0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5Nb3ZlVG9OZWFyZXN0TmF2bWVzaExvY2F0aW9uKGFrUmVmKTsgfTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBSZW1vdmVLZXl3b3JkRnJvbUZvcm0uXHJcbmV4cG9ydCB2YXIgUmVtb3ZlS2V5d29yZEZyb21SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uUmVtb3ZlS2V5d29yZEZyb21SZWYoYWtSZWYsIGFrS2V5d29yZCk7IH07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgUmVwbGFjZUtleXdvcmRPbkZvcm0uXHJcbmV4cG9ydCB2YXIgUmVwbGFjZUtleXdvcmRPblJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpIHsgcmV0dXJuIHNuLlJlcGxhY2VLZXl3b3JkT25SZWYoYWtSZWYsIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKTsgfTtcclxuLy9QbGF5cyBkZWJ1ZyBzaGFkZXIgb24gdGhlIHJlZmVyZW5jZSwgd2l0aCBub3JtYWxpc2VkIFJHQkEgY29sb3IgKG9yIGZ1bGx5IHdoaXRlIGlmIGVtcHR5KVxyXG5leHBvcnQgdmFyIFBsYXlEZWJ1Z1NoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWZSR0JBKSB7IHJldHVybiBzbi5QbGF5RGVidWdTaGFkZXIoYWtSZWYsIGFmUkdCQSk7IH07XHJcbi8vU2NhbGVzIG5vZGUgJiBjb2xsaXNpb24gKGJoa0JveFNoYXBlLCBiaGtTcGhlcmVTaGFwZSkuIEVudGlyZSBuaWYgd2lsbCBiZSBzY2FsZWQgaWYgc3RyaW5nIGlzIGVtcHR5LiBDb2xsaXNpb24gaGFzIHRvIGJlIGRpcmVjdGx5IGF0dGFjaGVkIHRvIG5hbWVkIG5vZGVzLlxyXG4vL0FkZHMgXCJQTzNfU0NBTEVcIiBuaWV4dHJhZGF0YSB0byByb290IG5vZGUuXHJcbmV4cG9ydCB2YXIgU2NhbGVPYmplY3QzRCA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSwgYWZTY2FsZSkgeyByZXR1cm4gc24uU2NhbGVPYmplY3QzRChha1JlZiwgYXNOb2RlTmFtZSwgYWZTY2FsZSk7IH07XHJcbi8vU2V0cyB0aGUgYmFzZSBvYmplY3Qgb2YgdGhpcyByZWZlcmVuY2UgYW5kIHJlbG9hZHMgM0RcclxuZXhwb3J0IHZhciBTZXRCYXNlT2JqZWN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0Jhc2VPYmplY3QpIHsgcmV0dXJuIHNuLlNldEJhc2VPYmplY3QoYWtSZWYsIGFrQmFzZU9iamVjdCk7IH07XHJcbi8qKiBDT0xMSVNJT04gTEFZRVJTXHJcbiAgICAgICAga1VuaWRlbnRpZmllZCA9IDAsXHJcbiAgICAgICAga1N0YXRpYyA9IDEsXHJcbiAgICAgICAga0FuaW1TdGF0aWMgPSAyLFxyXG4gICAgICAgIGtUcmFuc3BhcmVudCA9IDMsXHJcbiAgICAgICAga0NsdXR0ZXIgPSA0LFxyXG4gICAgICAgIGtXZWFwb24gPSA1LFxyXG4gICAgICAgIGtQcm9qZWN0aWxlID0gNixcclxuICAgICAgICBrU3BlbGwgPSA3LFxyXG4gICAgICAgIGtCaXBlZCA9IDgsXHJcbiAgICAgICAga1RyZWVzID0gOSxcclxuICAgICAgICBrUHJvcHMgPSAxMCxcclxuICAgICAgICBrV2F0ZXIgPSAxMSxcclxuICAgICAgICBrVHJpZ2dlciA9IDEyLFxyXG4gICAgICAgIGtUZXJyYWluID0gMTMsXHJcbiAgICAgICAga1RyYXAgPSAxNCxcclxuICAgICAgICBrTm9uQ29sbGlkYWJsZSA9IDE1LFxyXG4gICAgICAgIGtDbG91ZFRyYXAgPSAxNixcclxuICAgICAgICBrR3JvdW5kID0gMTcsXHJcbiAgICAgICAga1BvcnRhbCA9IDE4LFxyXG4gICAgICAgIGtEZWJyaXNTbWFsbCA9IDE5LFxyXG4gICAgICAgIGtEZWJyaXNMYXJnZSA9IDIwLFxyXG4gICAgICAgIGtBY291c3RpY1NwYWNlID0gMjEsXHJcbiAgICAgICAga0FjdG9yWm9uZSA9IDIyLFxyXG4gICAgICAgIGtQcm9qZWN0aWxlWm9uZSA9IDIzLFxyXG4gICAgICAgIGtHYXNUcmFwID0gMjQsXHJcbiAgICAgICAga1NoZWxsQ2FzdGluZyA9IDI1LFxyXG4gICAgICAgIGtUcmFuc3BhcmVudFdhbGwgPSAyNixcclxuICAgICAgICBrSW52aXNpYmxlV2FsbCA9IDI3LFxyXG4gICAgICAgIGtUcmFuc3BhcmVudFNtYWxsQW5pbSA9IDI4LFxyXG4gICAgICAgIGtDbHV0dGVyTGFyZ2UgPSAyOSxcclxuICAgICAgICBrQ2hhckNvbnRyb2xsZXIgPSAzMCxcclxuICAgICAgICBrU3RhaXJIZWxwZXIgPSAzMSxcclxuICAgICAgICBrRGVhZEJpcCA9IDMyLFxyXG4gICAgICAgIGtCaXBlZE5vQ0MgPSAzMyxcclxuICAgICAgICBrQXZvaWRCb3ggPSAzNCxcclxuICAgICAgICBrQ29sbGlzaW9uQm94ID0gMzUsXHJcbiAgICAgICAga0NhbWVyYVNwaGVyZSA9IDM2LFxyXG4gICAgICAgIGtEb29yRGV0ZWN0aW9uID0gMzcsXHJcbiAgICAgICAga0NvbmVQcm9qZWN0aWxlID0gMzgsXHJcbiAgICAgICAga0NhbWVyYSA9IDM5LFxyXG4gICAgICAgIGtJdGVtUGlja2VyID0gNDAsXHJcbiAgICAgICAga0xPUyA9IDQxLFxyXG4gICAgICAgIGtQYXRoaW5nUGljayA9IDQyLFxyXG4gICAgICAgIGtVbnVzZWQwID0gNDMsXHJcbiAgICAgICAga1VudXNlZDEgPSA0NCxcclxuICAgICAgICBrU3BlbGxFeHBsb3Npb24gPSA0NSxcclxuICAgICAgICBrRHJvcHBpbmdQaWNrID0gNDYgKi9cclxuLy9TZXRzIG9iamVjdCAzRCByb290IG9yIHNwZWNpZmllZCBub2RlJ3MgY29sbGlzaW9uIGxheWVyXHJcbmV4cG9ydCB2YXIgU2V0Q29sbGlzaW9uTGF5ZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTm9kZU5hbWUsIGFpQ29sbGlzaW9uTGF5ZXIpIHsgcmV0dXJuIHNuLlNldENvbGxpc2lvbkxheWVyKGFrUmVmLCBhc05vZGVOYW1lLCBhaUNvbGxpc2lvbkxheWVyKTsgfTtcclxuLy9TZXRzIHRoZSBkb29yIGFzIHRoZSBuZXcgbGlua2VkIGRvb3JcclxuZXhwb3J0IHZhciBTZXREb29yRGVzdGluYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYsIGFrRG9vcikgeyByZXR1cm4gc24uU2V0RG9vckRlc3RpbmF0aW9uKGFrUmVmLCBha0Rvb3IpOyB9O1xyXG4vL1NldHMgZWZmZWN0c2hhZGVyIGR1cmF0aW9uLiBJbnRlcm5hbCBkdXJhdGlvbiBpcyBzZXQgd2hlbiB0aGUgZWZmZWN0c2hhZGVyIGJlZ2lucyBhbmQgZG9lcyBub3QgY2hhbmdlIHdpdGggdGltZS5cclxuZXhwb3J0IHZhciBTZXRFZmZlY3RTaGFkZXJEdXJhdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIsIGFmVGltZSwgYWJBYnNvbHV0ZSkgeyByZXR1cm4gc24uU2V0RWZmZWN0U2hhZGVyRHVyYXRpb24oYWtSZWYsIGFrU2hhZGVyLCBhZlRpbWUsIGFiQWJzb2x1dGUpOyB9O1xyXG4vL1NldHMgbGlua2VkIHJlZi4gUGFzcyBOb25lIGludG8gYWtUYXJnZXRSZWYgdG8gdW5zZXQgdGhlIGxpbmtlZCByZWYuXHJcbmV4cG9ydCB2YXIgU2V0TGlua2VkUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha1RhcmdldFJlZiwgYWtLZXl3b3JkKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkID09PSB2b2lkIDApIHsgYWtLZXl3b3JkID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLlNldExpbmtlZFJlZihha1JlZiwgYWtUYXJnZXRSZWYsIGFrS2V5d29yZCk7XHJcbn07XHJcbi8vU2V0cyBoYXZvayBtYXRlcmlhbCB0eXBlLiBVc2Ugb2xkTWF0ZXJpYWwgc3RyaW5nIHRvIHNlbGVjdCB3aGF0IG1hdGVyaWFsIHlvdSB3YW50IHRvIGNoYW5nZSBmcm9tIHRvIChlZy4gZnJvbSBzdG9uZSB0byB3b29kKSwgYW5kIG5vZGVOYW1lIHRvIGFwcGx5IGl0IHRvIHRoZSBzcGVjaWZpYyBub2RlLlxyXG4vL0lmIGJvdGggYXJlIGVtcHR5LCBldmVyeSBjb2xsaXNpb24gbWF0ZXJpYWwgd2lsbCBiZSBzZXQuXHJcbmV4cG9ydCB2YXIgU2V0TWF0ZXJpYWxUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05ld01hdGVyaWFsLCBhc09sZE1hdGVyaWFsLCBhc05vZGVOYW1lKSB7XHJcbiAgICBpZiAoYXNPbGRNYXRlcmlhbCA9PT0gdm9pZCAwKSB7IGFzT2xkTWF0ZXJpYWwgPSBcIlwiOyB9XHJcbiAgICBpZiAoYXNOb2RlTmFtZSA9PT0gdm9pZCAwKSB7IGFzTm9kZU5hbWUgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU2V0TWF0ZXJpYWxUeXBlKGFrUmVmLCBhc05ld01hdGVyaWFsLCBhc09sZE1hdGVyaWFsLCBhc05vZGVOYW1lKTtcclxufTtcclxuLy9Db3BpZXMgc2tpbiB0aW50IGNvbG9yIGZyb20gYWN0b3JiYXNlIHRvIGJvZHlwYXJ0cyBuaWZcclxuZXhwb3J0IHZhciBTZXR1cEJvZHlQYXJ0R2VvbWV0cnkgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQWN0b3IpIHsgcmV0dXJuIHNuLlNldHVwQm9keVBhcnRHZW9tZXRyeShha1JlZiwgYWtBY3Rvcik7IH07XHJcbi8qKiBTSEFERVIgVFlQRVNcclxuICAgICAgICBrRGVmYXVsdCA9IDBcclxuICAgICAgICBrRW52aXJvbm1lbnRNYXAgPSAxXHJcbiAgICAgICAga0dsb3dNYXAgPSAyXHJcbiAgICAgICAga1BhcmFsbGF4ID0gM1xyXG4gICAgICAgIGtGYWNlR2VuID0gNFxyXG4gICAgICAgIGtGYWNlR2VuUkdCVGludCA9IDVcclxuICAgICAgICBrSGFpclRpbnQgPSA2XHJcbiAgICAgICAga1BhcmFsbGF4T2NjID0gN1xyXG4gICAgICAgIGtNdWx0aVRleExhbmQgPSA4XHJcbiAgICAgICAga0xPRExhbmQgPSA5XHJcbiAgICAgICAga011bHRpbGF5ZXJQYXJhbGxheCA9IDExXHJcbiAgICAgICAga1RyZWVBbmltID0gMTJcclxuICAgICAgICBrTXVsdGlJbmRleFRyaVNoYXBlU25vdyA9IDE0XHJcbiAgICAgICAga0xPRE9iamVjdHNIRCA9IDE1XHJcbiAgICAgICAga0V5ZSA9IDE2XHJcbiAgICAgICAga0Nsb3VkID0gMTdcclxuICAgICAgICBrTE9ETGFuZE5vaXNlID0gMThcclxuICAgICAgICBrTXVsdGlUZXhMYW5kTE9EQmxlbmQgPSAxOSAqL1xyXG4vL3NldHMgdGhlIHJlZidzIHNoYWRlciBtYXRlcmlhbCB0eXBlIGllLiBkZWZhdWx0IHRvIGN1YmVtYXBcclxuLy90ZW1wbGF0ZSBuZWVkcyB0byBiZSBsb2FkZWRcclxuLy9pZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSByZWZlcmVuY2UncyBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCB1c2luZyB0aGUgdGVtcGxhdGUncyB0ZXh0dXJlc2V0Ly9cclxuLy9pZiB0ZXh0dXJlIHR5cGUgaXMgMC05IHRoZSB0ZW1wbGF0ZSdzIHRleHR1cmVzZXQgaXMgc3RpbGwgYXBwbGllZCBidXQgcmVmZXJlbmNlJ3MgdGV4dHVyZSBhdCB0aGF0IGluZGV4IHdpbGwgdGFrZSBwcmlvcml0eS5cclxuLy9vcHRpb25hbCBkaWZmdXNlIHBhdGggY2FuIGJlIHVzZWQgdG8gZmlsdGVyIHNoYXBlcyB0byBhcHBseSB0aGUgc2hhZGVyIHRvLCBwYXJ0aWFsIG1hdGNoZXMgYXJlIGFjY2VwdGVkIGxpa2UgXCJEcmF1Z3IuZGRzXCJcclxuLy9saW1pdGF0aW9ucyAtIGNhbm5vdCBiZSB1c2VkIG9uIGdlb21ldHJ5IHdpdGggbm8gbm9ybWFscyAoaWUuIGJvZHkgc2tpbiBtZXNoZXMpXHJcbmV4cG9ydCB2YXIgU2V0U2hhZGVyVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYWtUZW1wbGF0ZSwgYXNEaWZmdXNlUGF0aCwgYWlTaGFkZXJUeXBlLCBhaVRleHR1cmVUeXBlLCBhYk5vV2VhcG9ucywgYWJOb0FscGhhUHJvcGVydHkpIHtcclxuICAgIHJldHVybiBzbi5TZXRTaGFkZXJUeXBlKGFrUmVmLCBha1RlbXBsYXRlLCBhc0RpZmZ1c2VQYXRoLCBhaVNoYWRlclR5cGUsIGFpVGV4dHVyZVR5cGUsIGFiTm9XZWFwb25zLCBhYk5vQWxwaGFQcm9wZXJ0eSk7XHJcbn07XHJcbi8vU3RvcHMgQUxMIGVmZmVjdCBzaGFkZXJzIGFuZCBhcnQgb2JqZWN0cyAodmlzdWFsIGVmZmVjdHMpIGN1cnJlbnRseSBvbiB0aGlzIGFjdG9yXHJcbmV4cG9ydCB2YXIgU3RvcEFsbFNoYWRlcnMgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLlN0b3BBbGxTaGFkZXJzKGFrUmVmKTsgfTtcclxuLy9SZW1vdmVzIGFsbCBpbnN0YW5jZXMgb2YgdGhlIGFydCBvYmplY3QgKGhpdCBtYWdpYyBlZmZlY3QvdmlzdWFsIGVmZmVjdCkgYXR0YWNoZWQgdG8gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBTdG9wQXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FydCkgeyByZXR1cm4gc24uU3RvcEFydE9iamVjdChha1JlZiwgYWtBcnQpOyB9O1xyXG4vL1RvZ2dsZXMgbm9kZSB2aXNpYmlsaXR5LlxyXG5leHBvcnQgdmFyIFRvZ2dsZUNoaWxkTm9kZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSwgYWJEaXNhYmxlKSB7IHJldHVybiBzbi5Ub2dnbGVDaGlsZE5vZGUoYWtSZWYsIGFzTm9kZU5hbWUsIGFiRGlzYWJsZSk7IH07XHJcbi8vVXBkYXRlcyBub2RlIGRhdGEuIE1vdmUgaGl0IGVmZmVjdCBhcnQgdG8gbmV3IG5vZGUgKGllLiBmcm9tIFwiTWFnaWNFZmZlY3RzTm9kZVwiIHRvIFwiTlBDIEhlYWQgW0hlYWRdXCIpIG9yIHVwZGF0ZSB0cmFuc2xhdGUsIHJvdGF0ZSwgYW5kIHNjYWxlIHZhbHVlcy5cclxuLy9UcmFuc2xhdGUgYW5kIFJvdGF0ZSBhcnJheXMgbXVzdCBoYXZlIHRocmVlIHZhbHVlcyBpbiBvcmRlciB0byB3b3JrLiBSb3RhdGUgdXNlcyBldWxlciBhbmdsZXMgaW4gZGVncmVlcyAoWFlaKS4gU2NhbGUgaXMgcmVsYXRpdmUsIGFuZCBpcyBtdWx0aXBsaWVkIGJ5IGV4aXN0aW5nIHNjYWxlLlxyXG4vL0lmIHRoZSBoaXQgZWZmZWN0IGFydCBpcyByZW1vdmVkIGFuZCByZWF0dGFjaGVkLCBpdCB3aWxsIHJldmVydCBiYWNrIHRvIHRoZSB2YWx1ZXMgaW4gdGhlIG5pZi5cclxuZXhwb3J0IHZhciBVcGRhdGVIaXRFZmZlY3RBcnROb2RlID0gZnVuY3Rpb24gKGFrUmVmLCBha0FydCwgYXNOZXdOb2RlLCBhZlRyYW5zbGF0ZSwgYWZSb3RhdGUsIGFmUmVsYXRpdmVTY2FsZSkge1xyXG4gICAgaWYgKGFmUmVsYXRpdmVTY2FsZSA9PT0gdm9pZCAwKSB7IGFmUmVsYXRpdmVTY2FsZSA9IDEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlVwZGF0ZUhpdEVmZmVjdEFydE5vZGUoYWtSZWYsIGFrQXJ0LCBhc05ld05vZGUsIGFmVHJhbnNsYXRlLCBhZlJvdGF0ZSwgYWZSZWxhdGl2ZVNjYWxlKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUEFDS0FHRVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8qKiBQQUNLQUdFIFRZUEVTXHJcbiAgICAgICAgRmluZCA9IDBcclxuICAgICAgICBGb2xsb3cgPSAxXHJcbiAgICAgICAgRXNjb3J0ID0gMlxyXG4gICAgICAgIEVhdCA9IDNcclxuICAgICAgICBTbGVlcCA9IDRcclxuICAgICAgICBXYW5kZXIgPSA1XHJcbiAgICAgICAgVHJhdmVsID0gNlxyXG4gICAgICAgIEFjY29tcGFueSA9IDdcclxuICAgICAgICBVc2VJdGVtQXQgPSA4XHJcbiAgICAgICAgQW1idXNoID0gOVxyXG4gICAgICAgIEZsZWVOb3RDb21iYXQgPSAxMFxyXG4gICAgICAgIENhc3RNYWdpYyA9IDExXHJcbiAgICAgICAgU2FuZGJveCA9IDEyXHJcbiAgICAgICAgUGF0cm9sID0gMTNcclxuICAgICAgICBHdWFyZCA9IDE0XHJcbiAgICAgICAgRGlhbG9ndWUgPSAxNVxyXG4gICAgICAgIFVzZVdlYXBvbiA9IDE2XHJcbiAgICAgICAgRmluZDIgPSAxN1xyXG4gICAgICAgIFBhY2thZ2UgPSAxOFxyXG4gICAgICAgIFBhY2thZ2VUZW1wbGF0ZSA9IDE5XHJcbiAgICAgICAgQWN0aXZhdGUgPSAyMFxyXG4gICAgICAgIEFsYXJtID0gMjFcclxuICAgICAgICBGbGVlID0gMjJcclxuICAgICAgICBUcmVzcGFzcyA9IDIzXHJcbiAgICAgICAgU3BlY3RhdG9yID0gMjRcclxuICAgICAgICBSZWFjdFRvRGVhZCA9IDI1XHJcbiAgICAgICAgR2V0VXBGcm9tQ2hhaXIgPSAyNlxyXG4gICAgICAgIERvTm90aGluZyA9IDI3XHJcbiAgICAgICAgSW5HYW1lRGlhbG9ndWUgPSAyOFxyXG4gICAgICAgIFN1cmZhY2UgPSAgMjlcclxuICAgICAgICBTZWFyY2hGb3JBdHRhY2tlciA9IDMwXHJcbiAgICAgICAgQXZvaWRQbGF5ZXIgPSAzMVxyXG4gICAgICAgIFJlYWN0VG9EZXN0cm95ZWRPYmplY3QgPSAzMlxyXG4gICAgICAgIFJlYWN0VG9HcmVuYWRlT3JNaW5lID0gMzNcclxuICAgICAgICBTdGVhbFdhcm5pbmcgPSAzNFxyXG4gICAgICAgIFBpY2tQb2NrZXRXYXJuaW5nID0gMzVcclxuICAgICAgICBNb3ZlbWVudEJsb2NrZWQgPSAzNlxyXG4gICAgICAgIFZhbXBpcmVGZWVkID0gMzdcclxuICAgICAgICBDYW5uaWJhbEZlZWQgPSAzOCAqL1xyXG4vL0dldHMgcGFja2FnZSB0eXBlLiBSZXR1cm5zIC0xIGlmIHBhY2thZ2UgaXMgbm9uZVxyXG5leHBvcnQgdmFyIEdldFBhY2thZ2VUeXBlID0gZnVuY3Rpb24gKGFrUGFja2FnZSkge1xyXG4gICAgcmV0dXJuIHNuLkdldFBhY2thZ2VUeXBlKGFrUGFja2FnZSk7XHJcbn07XHJcbi8vR2V0cyBhbGwgaWRsZXMgb24gdGhpcyBwYWNrYWdlXHJcbmV4cG9ydCB2YXIgR2V0UGFja2FnZUlkbGVzID0gZnVuY3Rpb24gKGFrUGFja2FnZSkgeyByZXR1cm4gc24uR2V0UGFja2FnZUlkbGVzKGFrUGFja2FnZSk7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vQWRkcyBpZGxlIHRvIHRoZSBlbmQgb2YgdGhlIHBhY2thZ2UgaWRsZSBzdGFjaywgY3JlYXRpbmcgaXQgaWYgbmVlZGVkLlxyXG5leHBvcnQgdmFyIEFkZFBhY2thZ2VJZGxlID0gZnVuY3Rpb24gKGFrUGFja2FnZSwgYWtJZGxlKSB7IHJldHVybiBzbi5BZGRQYWNrYWdlSWRsZShha1BhY2thZ2UsIGFrSWRsZSk7IH07XHJcbi8vUmVtb3ZlcyBpZGxlIGZyb20gcGFja2FnZVxyXG5leHBvcnQgdmFyIFJlbW92ZVBhY2thZ2VJZGxlID0gZnVuY3Rpb24gKGFrUGFja2FnZSwgYWtJZGxlKSB7IHJldHVybiBzbi5SZW1vdmVQYWNrYWdlSWRsZShha1BhY2thZ2UsIGFrSWRsZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1BBUFlSVVMgRVhURU5ERVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vcmV0dXJucyBjdXJyZW50IHZlcnNpb24gYXMgaW50IGFycmF5IChtYWpvcixtaW5vcixwYXRjaCAvIDQsMyw3KVxyXG5leHBvcnQgdmFyIEdldFBhcHlydXNFeHRlbmRlclZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGFweXJ1c0V4dGVuZGVyVmVyc2lvbigpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUE9USU9OIC0gc2VlIFNQRUxMXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuZXhwb3J0IHZhciBBZGRNYWdpY0VmZmVjdFRvUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9Qb3Rpb24oYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBQb3Rpb24gdG8gdGFyZ2V0IFBvdGlvbiwgYXQgZ2l2ZW4gaW5kZXguIFNhbWUgYXMgYWJvdmUgZnVuY3Rpb24sIGJ1dCBsZXNzIHZlcmJvc2UsIGFuZCBwcmVzZXJ2ZXMgYWxsIGNvbmRpdGlvbnMuIE9wdGlvbmFsIGNvc3QgYXJndW1lbnQuXHJcbmV4cG9ydCB2YXIgQWRkRWZmZWN0SXRlbVRvUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha1BvdGlvblRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IC0xLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRFZmZlY3RJdGVtVG9Qb3Rpb24oYWtQb3Rpb24sIGFrUG90aW9uVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIG1hZ2ljIGVmZmVjdCBmcm9tIFBvdGlvbiB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLlJlbW92ZU1hZ2ljRWZmZWN0RnJvbVBvdGlvbihha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBQb3Rpb24gdGhhdCBtYXRjaGVzIFBvdGlvbiBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVBvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtQb3Rpb25Ub01hdGNoRnJvbSwgYWlJbmRleCkge1xyXG4gICAgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tUG90aW9uKGFrUG90aW9uLCBha1BvdGlvblRvTWF0Y2hGcm9tLCBhaUluZGV4KTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUFJPSkVDVElMRVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9HZXRzIHByb2plY3RpbGUgZ3Jhdml0eSAodXN1YWxseSAwLjAgZm9yIG5vbiBhcnJvdyBwcm9qZWN0aWxlcykuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZUdyYXZpdHkgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlR3Jhdml0eShha1Byb2plY3RpbGUpOyB9O1xyXG4vL0dldHMgcHJvamVjdGlsZSBpbXBhY3QgZm9yY2UuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZUltcGFjdEZvcmNlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZUltcGFjdEZvcmNlKGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIHJhbmdlLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVSYW5nZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVSYW5nZShha1Byb2plY3RpbGUpOyB9O1xyXG4vL0dldHMgcHJvamVjdGlsZSBzcGVlZC5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlU3BlZWQgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlU3BlZWQoYWtQcm9qZWN0aWxlKTsgfTtcclxuLyoqIFBST0pFQ1RJTEUgVFlQRVNcclxuICAgICAgICBNaXNzaWxlID0gMVxyXG4gICAgICAgIExvYmJlciA9IDJcclxuICAgICAgICBCZWFtID0gM1xyXG4gICAgICAgIEZsYW1lID0gNFxyXG4gICAgICAgIENvbmUgPSA1XHJcbiAgICAgICAgQmFycmllciA9IDZcclxuICAgICAgICBBcnJvdyA9IDcgKi9cclxuLy9HZXQgcHJvamVjdGlsZSB0eXBlLiAwIGlmIHByb2plY3RpbGUgaXMgTm9uZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlVHlwZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVUeXBlKGFrUHJvamVjdGlsZSk7IH07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBwcm9qZWN0aWxlIGdyYXZpdHkuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZUdyYXZpdHkgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZkdyYXZpdHkpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVHcmF2aXR5KGFrUHJvamVjdGlsZSwgYWZHcmF2aXR5KTsgfTtcclxuLy9TZXRzIHByb2plY3RpbGUgaW1wYWN0IGZvcmNlLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVJbXBhY3RGb3JjZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmSW1wYWN0Rm9yY2UpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVJbXBhY3RGb3JjZShha1Byb2plY3RpbGUsIGFmSW1wYWN0Rm9yY2UpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSByYW5nZS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlUmFuZ2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZlJhbmdlKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlUmFuZ2UoYWtQcm9qZWN0aWxlLCBhZlJhbmdlKTsgfTtcclxuLy9TZXRzIHByb2plY3RpbGUgc3BlZWQuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZVNwZWVkID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZTcGVlZCkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZVNwZWVkKGFrUHJvamVjdGlsZSwgYWZTcGVlZCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TQ1JPTEwgLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1Njcm9sbChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIFNjcm9sbCB0byB0YXJnZXQgU2Nyb2xsLCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrU2Nyb2xsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub1Njcm9sbChha1Njcm9sbCwgYWtTY3JvbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gU2Nyb2xsIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVNjcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU2Nyb2xsKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIFNjcm9sbCB0aGF0IG1hdGNoZXMgU2Nyb2xsIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha1Njcm9sbFRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21TY3JvbGwoYWtTY3JvbGwsIGFrU2Nyb2xsVG9NYXRjaEZyb20sIGFpSW5kZXgpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU09VTkRcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NldHMgc291bmQgZGVzY3JpcHRvciBhdHRhY2hlZCB0byB0aGUgc291bmQuXHJcbmV4cG9ydCB2YXIgU2V0U291bmREZXNjcmlwdG9yID0gZnVuY3Rpb24gKGFrU291bmQsIGFrU291bmREZXNjcmlwdG9yKSB7IHJldHVybiBzbi5TZXRTb3VuZERlc2NyaXB0b3IoYWtTb3VuZCwgYWtTb3VuZERlc2NyaXB0b3IpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8qKiBTUEVMTCBUWVBFU1xyXG4gICAgICAgIFNwZWxsID0gMFxyXG4gICAgICAgIERpc2Vhc2UgPSAxXHJcbiAgICAgICAgUG93ZXIgPSAyXHJcbiAgICAgICAgTGVzc2VyUG93ZXIgPSAzXHJcbiAgICAgICAgQWJpbGl0eSA9IDRcclxuICAgICAgICBQb2lzb24gPSA1XHJcbiAgICAgICAgQWRkaXRpb24gPSA2XHJcbiAgICAgICAgVm9pY2UgPSA3ICovXHJcbi8vUmV0dXJucyBzcGVsbCB0eXBlLiAtMSBpZiBzcGVsbCBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0U3BlbGxUeXBlID0gZnVuY3Rpb24gKGFrU3BlbGwpIHtcclxuICAgIHJldHVybiBzbi5HZXRTcGVsbFR5cGUoYWtTcGVsbCk7XHJcbn07XHJcbi8vLS0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9Db25kaXRpb25JdGVtT2JqZWN0IHwgRnVuY3Rpb24gSUQgfCBwYXJhbWV0ZXIgMSB8IHBhcmFtZXRlciAyIHwgT1BDb2RlIHwgZmxvYXQgfCBBTkRPUlxyXG4vL2NvbmRpdGlvbnMgd2hpY2ggaGF2ZSBubyBwYXJhbWV0ZXJzIChlZy4gSXNTbmVha2luZykgLyB0YWtlIGluIGZvcm1zIChHZXRJc1JhY2UpIHdvcmtcclxuLy9jb25kaXRpb25zIHdoaWNoIGFjY2VwdCBpbnQvZmxvYXQvc3RyaW5ncyBhcmUgc2tpcHBlZFxyXG4vL1N1YmplY3RcdHwgSGFzTWFnaWNFZmZlY3RLZXl3b3JkXHR8IE1hZ2ljSW52aXNpYmlsaXR5XHRcdHwgTk9ORSB8ID09IHwgMC4wIHwgQU5EIC0gaW4gZ2FtZVxyXG4vL1N1YmplY3QgXHR8IEhhc01hZ2ljRWZmZWN0S2V5d29yZFx0fCAwMDAxRUE2RiB+IFNreXJpbS5lc20gfCBOT05FIHwgPT0gfCAwLjAgfCBBTkRcdC0gaW4gcGFweXJ1c1xyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9TcGVsbChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gc3BlbGwgdG8gdGFyZ2V0IHNwZWxsLCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha1NwZWxsVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub1NwZWxsKGFrU3BlbGwsIGFrU3BlbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gc3BlbGwgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU3BlbGwgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU3BlbGwoYWtTcGVsbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBzcGVsbCB0aGF0IG1hdGNoZXMgc3BlbGwgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha1NwZWxsVG9NYXRjaEZyb20sIGFpSW5kZXgpIHsgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdEl0ZW1Gcm9tU3BlbGwoYWtTcGVsbCwgYWtTcGVsbFRvTWF0Y2hGcm9tLCBhaUluZGV4KTsgfTtcclxuLy9TZXRzIGNhc3RpbmcgdHlwZSBvZiBzcGVsbCAoYW5kIGFsbCBhdHRhY2hlZCBtYWdpYyBlZmZlY3RzKVxyXG5leHBvcnQgdmFyIFNldFNwZWxsQ2FzdGluZ1R5cGUgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWlUeXBlKSB7IHJldHVybiBzbi5TZXRTcGVsbENhc3RpbmdUeXBlKGFrU3BlbGwsIGFpVHlwZSk7IH07XHJcbi8vU2V0cyBkZWxpdmVyeSB0eXBlIG9mIHNwZWxsIChhbmQgYWxsIGF0dGFjaGVkIG1hZ2ljIGVmZmVjdHMpXHJcbmV4cG9ydCB2YXIgU2V0U3BlbGxEZWxpdmVyeVR5cGUgPSBmdW5jdGlvbiAoYWtTcGVsbCwgYWlUeXBlKSB7IHJldHVybiBzbi5TZXRTcGVsbERlbGl2ZXJ5VHlwZShha1NwZWxsLCBhaVR5cGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TVFJJTkdTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NvbnZlcnRzIHN0cmluZyB0byBoZXggdmFsdWUgaWYgdmFsaWRcclxuZXhwb3J0IHZhciBJbnRUb1N0cmluZyA9IGZ1bmN0aW9uIChhaVZhbHVlLCBhYkhleCkge1xyXG4gICAgcmV0dXJuIHNuLkludFRvU3RyaW5nKGFpVmFsdWUsIGFiSGV4KTtcclxufTtcclxuLy9Db252ZXJ0cyBzdHJpbmcgdG8gaW50LiBSZXR1cm5zIC0xIGZvciBvdXQgb2YgYm91bmQgdmFsdWVzLlxyXG5leHBvcnQgdmFyIFN0cmluZ1RvSW50ID0gZnVuY3Rpb24gKGFzU3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc24uU3RyaW5nVG9JbnQoYXNTdHJpbmcpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9VSVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIHRoZSBvYmplY3RyZWZlcmVuY2Ugb2YgdGhlIGN1cnJlbnRseSBvcGVuZWQgY29udGFpbmVyIGluIGNvbnRhaW5lciBtZW51XHJcbmV4cG9ydCB2YXIgR2V0TWVudUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzbi5HZXRNZW51Q29udGFpbmVyKCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1VUSUxJVFlcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ2FsY3VsYXRlcyBhIHJhbmRvbSBmbG9hdCBiZXR3ZWVuIGFmTWluIGFuZCBhZk1heCwgYmFzZWQgb24gTWVyc2VubmUgVHdpc3RlclxyXG5leHBvcnQgdmFyIEdlbmVyYXRlUmFuZG9tRmxvYXQgPSBmdW5jdGlvbiAoYWZNaW4sIGFmTWF4KSB7XHJcbiAgICByZXR1cm4gc24uR2VuZXJhdGVSYW5kb21GbG9hdChhZk1pbiwgYWZNYXgpO1xyXG59O1xyXG4vL0NhbGN1bGF0ZXMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIGFmTWluIGFuZCBhZk1heCwgYmFzZWQgb24gTWVyc2VubmUgVHdpc3RlclxyXG5leHBvcnQgdmFyIEdlbmVyYXRlUmFuZG9tSW50ID0gZnVuY3Rpb24gKGFmTWluLCBhZk1heCkge1xyXG4gICAgcmV0dXJuIHNuLkdlbmVyYXRlUmFuZG9tSW50KGFmTWluLCBhZk1heCk7XHJcbn07XHJcbi8vR2V0cyBzeXN0ZW0gdGltZSBhbmQgZGF0ZVxyXG4vL1llYXIgKDE2MDEgLSAzMDgyNylcclxuLy9Nb250aCAoMS0xMilcclxuLy9EYXlPZldlZWsgKDE6U3VuZGF5IC0gNzpTYXR1cmRheSlcclxuLy9EYXkgKDEtMzEpXHJcbi8vSG91ciAoMC0yMylcclxuLy9NaW51dGUgKDAtNTkpXHJcbi8vU2Vjb25kICgwLTU5KVxyXG4vL01pbGxpc2Vjb25kICgwLTk5OSlcclxuZXhwb3J0IHZhciBHZXRTeXN0ZW1UaW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0U3lzdGVtVGltZSgpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVklTVUFMRUZGRUNUU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0dldHMgdGhlIGFydCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aXN1YWwgZWZmZWN0LlxyXG5leHBvcnQgdmFyIEdldEFydE9iamVjdCA9IGZ1bmN0aW9uIChha0VmZmVjdCkgeyByZXR1cm4gc24uR2V0QXJ0T2JqZWN0KGFrRWZmZWN0KTsgfTtcclxuLy9SZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgYXJ0IG9iamVjdHMgcHJlc2VudC9hY3RpdmUgKG9uIG9iamVjdHMpIHdpdGhpbiB0aGUgbG9hZGVkIGFyZWEuXHJcbmV4cG9ydCB2YXIgR2V0QXJ0T2JqZWN0VG90YWxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdCwgYWJBY3RpdmUpIHsgcmV0dXJuIHNuLkdldEFydE9iamVjdFRvdGFsQ291bnQoYWtFZmZlY3QsIGFiQWN0aXZlKTsgfTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL1NldHMgdGhlIGFydCBvYmplY3QgYXNzb2NpYXRlZCB3aXRoIHRoZSB2aXN1YWwgZWZmZWN0LlxyXG5leHBvcnQgdmFyIFNldEFydE9iamVjdCA9IGZ1bmN0aW9uIChha0VmZmVjdCwgYWtBcnQpIHsgcmV0dXJuIHNuLlNldEFydE9iamVjdChha0VmZmVjdCwgYWtBcnQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vV0VBVEhFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9HZXRzIHdpbmQgc3BlZWQgYXMgc2hvd24gYXMgaW4gQ0sgY29uZGl0aW9ucyAoMC4wLTEuMCkuXHJcbmV4cG9ydCB2YXIgR2V0V2luZFNwZWVkQXNGbG9hdCA9IGZ1bmN0aW9uIChha1dlYXRoZXIpIHsgcmV0dXJuIHNuLkdldFdpbmRTcGVlZEFzRmxvYXQoYWtXZWF0aGVyKTsgfTtcclxuLy9HZXRzIHdpbmQgc3BlZWQgYXMgc2hvd24gaW4gdGhlIHdlYXRoZXIgZm9ybSAoMC0yNTUpLlxyXG5leHBvcnQgdmFyIEdldFdpbmRTcGVlZEFzSW50ID0gZnVuY3Rpb24gKGFrV2VhdGhlcikgeyByZXR1cm4gc24uR2V0V2luZFNwZWVkQXNJbnQoYWtXZWF0aGVyKTsgfTtcclxuLyoqIFdFQVRIRVIgVFlQRVNcclxuICAgICAgICBQbGVhc2FudCA9IDBcclxuICAgICAgICBDbG91ZHkgPSAxXHJcbiAgICAgICAgUmFpbnkgPSAyXHJcbiAgICAgICAgU25vdyA9IDMgKi9cclxuLy9HZXRzIHdlYXRoZXIvY3VycmVudCB3ZWF0aGVyIHR5cGUgaWYgYWtXZWF0aGVyIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRXZWF0aGVyVHlwZSA9IGZ1bmN0aW9uIChha1dlYXRoZXIpIHtcclxuICAgIGlmIChha1dlYXRoZXIgPT09IHZvaWQgMCkgeyBha1dlYXRoZXIgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0V2VhdGhlclR5cGUoYWtXZWF0aGVyKTtcclxufTtcclxuIiwiaW1wb3J0IHsgb25jZSwgaG9va3MsIHByaW50Q29uc29sZSwgR2FtZSB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxuaW1wb3J0IHsgR2V0U3RyaW5nVmFsdWUsIFN0cmluZ0xpc3RBZGQsIFN0cmluZ0xpc3RDbGVhciwgU3RyaW5nTGlzdFJlbW92ZSwgU3RyaW5nTGlzdFRvQXJyYXkgfSBmcm9tIFwiQHNreXJpbS1wbGF0Zm9ybS9wYXB5cnVzLXV0aWwvU3RvcmFnZVV0aWxcIjtcclxuaW1wb3J0ICogYXMgbWNtIGZyb20gXCJAc2t5cmltLXBsYXRmb3JtL21jbS1oZWxwZXIvTUNNXCI7XHJcbmltcG9ydCB7IE1vZEV2ZW50IH0gZnJvbSBcIi4vbW9kZXZlbnRcIjtcclxuaW1wb3J0IHsgZ2V0U2xvdEZyb21OYW1lLCBTbG90LCBzYXZlVG9EYXRhRmlsZSwgY2F0ZWdvcnlUb1Nsb3QsIGl0ZW1DYXRlZ29yeVZvbHVtZXMsIEV2YWx1YXRlSW52ZW50b3J5IH0gZnJvbSBcIi4vSW52ZW50b3J5U2xvdHNcIjtcclxuLy9fX19fX19fX19fX1ZBUklBQkxFU19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbnZhciBtY21fc2V0dGluZ3MgPSB7XHJcbiAgICBTZWxlY3RlZFNsb3Q6ICdzQWN0aXZlU2xvdHM6U2xvdHMnLFxyXG4gICAgaW5wdXRTbG90TmFtZTogJ3NBZGRTbG90TmFtZTpTbG90cycsXHJcbiAgICBhZGRTbG90QnV0dG9uOiAnYkFkZFNsb3RCdXR0b246U2xvdHMnLFxyXG4gICAgcmVtb3ZlU2xvdEJ1dHRvbjogJ2JEZWxldGVTbG90QnV0dG9uOlNsb3RzJyxcclxuICAgIHNsaWRlclNsb3RNYXg6ICdmU2xvdE1heDpTbG90cycsXHJcbiAgICBBZGRDYXRlZ29yaWVzOiAnc1Nsb3RDYXRlZ29yaWVzQWRkOkxpc3RzJyxcclxuICAgIFJlbW92ZUNhdGVnb3JpZXM6ICdzU2xvdENhdGVnb3JpZXNSZW1vdmU6TGlzdHMnLFxyXG59O1xyXG52YXIgc3RvcmFnZUtleXMgPSB7XHJcbiAgICBjYXRlZ29yaWVzOiAnWU0uU0xPVFMuSVRFTV9DQVRFR09SSUVTJyxcclxuICAgIGNoYW5nZWRfc2V0dGluZzogJ1lNLlNsb3RzLlNFVFRJTkdfQ0hBTkdFRCcsXHJcbiAgICBtZW51V2hpdGVMaXN0OiAnWU0uU2xvdHMuTUNNLk1lbnUuQ2F0ZWdvcmllcy5XaGl0ZUxpc3QnLFxyXG4gICAgbWVudUJsYWNrTGlzdDogJ1lNLlNsb3RzLk1DTS5NZW51LkNhdGVnb3JpZXMuQmxhY2tMaXN0JyxcclxufTtcclxudmFyIG1jbVNldHRpbmdzVG9TdG9yYWdlS2V5cyA9IHtcclxuLy8gYFlNLlNsb3RzLiR7cy5uYW1lfS5mU2xvdE1heDpTbG90c2BcclxufTtcclxudmFyIG1vZG5hbWUgPSAnSW52ZW50b3J5U2xvdHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gcGwoKSB7IHJldHVybiBHYW1lLmdldFBsYXllcigpOyB9XHJcbi8vX19fX19fX19fX19GVU5DVElPTlNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG52YXIgUmVmcmVzaE1DTSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gTW9kRXZlbnQuQ3JlYXRlKCdZTS5TbG90cy5SRUZSRVNIJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuUHVzaFN0cmluZyhoYW5kbGUsICdSZWZyZXNoJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuU2VuZChoYW5kbGUpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBTZXRNZW51T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gTW9kRXZlbnQuQ3JlYXRlKCdZTS5TbG90cy5SRUZSRVNIJyk7XHJcbiAgICAgICAgTW9kRXZlbnQuUHVzaFN0cmluZyhoYW5kbGUsICdTZXRNZW51T3B0aW9ucycpO1xyXG4gICAgICAgIE1vZEV2ZW50LlNlbmQoaGFuZGxlKTtcclxuICAgIH0pO1xyXG4gICAgUmVmcmVzaE1DTSgpO1xyXG59O1xyXG5leHBvcnQgdmFyIHNhdmVTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFNldEludFZhbHVlKG51bGwsIG1jbV9zZXR0aW5ncy5BZGRDYXRlZ29yaWVzLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuQWRkQ2F0ZWdvcmllcykpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuUmVtb3ZlQ2F0ZWdvcmllcywgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgbWNtX3NldHRpbmdzLlJlbW92ZUNhdGVnb3JpZXMpKVxyXG4gICAgLy8gU2V0SW50VmFsdWUobnVsbCwgbWNtX3NldHRpbmdzLiwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgbWNtX3NldHRpbmdzLlNlbGVjdGVkU2xvdCkpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBtY21fc2V0dGluZ3MuYWRkU2xvdEJ1dHRvbikpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0Jvb2wobW9kbmFtZSwgbWNtX3NldHRpbmdzLmlucHV0U2xvdE5hbWUpID8gMTowKVxyXG4gICAgLy8gU2V0SW50VmFsdWUobnVsbCwgbWNtX3NldHRpbmdzLiwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgXCJcIikpXHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCBtY21fc2V0dGluZ3MuLCBtY20uR2V0TW9kU2V0dGluZ0ludChtb2RuYW1lLCBcIlwiKSlcclxufTtcclxuZnVuY3Rpb24gaW5pdEl0ZW1DYXRlZ29yaWVzTGlzdCgpIHtcclxuICAgIC8vIE9iamVjdC52YWx1ZXMoSXRlbUNhdGVnb3JpZXMpLmZvckVhY2goYyA9PiB7XHJcbiAgICAvLyAgICAgaWYgKE51bWJlcihjKSB8fCBjIGFzIG51bWJlciA9PSAwICl7cmV0dXJuO31cclxuICAgIC8vICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLmNhdGVnb3JpZXMsIGMgYXMgc3RyaW5nKVxyXG4gICAgLy8gfSk7XHJcbn1cclxuZnVuY3Rpb24gRmlsbE1DTU9wdGlvbnMoKSB7XHJcbiAgICBGaWx0ZXJNQ01PcHRpb25zKCcnKTtcclxuICAgIHZhciBhO1xyXG4gICAgdmFyIGxpc3RzID0gW21jbV9zZXR0aW5ncy5TZWxlY3RlZFNsb3QsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3RdO1xyXG4gICAgbGlzdHMuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIFN0cmluZ0xpc3RDbGVhcihudWxsLCBsaXN0KTtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGxpc3QsICdObyBDaGFuZ2VzJyk7XHJcbiAgICAgICAgbWNtLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbGlzdCwgXCJObyBDaGFuZ2VzXCIpO1xyXG4gICAgfSk7XHJcbiAgICBTbG90LmdldEFsbFNsb3ROYW1lcygpLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHM7XHJcbiAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBtY21fc2V0dGluZ3MuU2VsZWN0ZWRTbG90LCBuYW1lKTtcclxuICAgIH0pO1xyXG4gICAgSGlkZUdyb3VwT25lKHRydWUpO1xyXG4gICAgLy8gU2V0TWVudU9wdGlvbnMoKVxyXG4gICAgLy8gUmVmcmVzaE1DTSgpXHJcbiAgICAvLyAvLyBwcmludENvbnNvbGUoJ3JlZnJlc2htZW51IGhhcyBiZWVuIHNlbnQnKVxyXG59XHJcbjtcclxuZnVuY3Rpb24gZmlsbFNsb3RDYXRlZ29yeUxpc3RzKHNlbGVjdGVkX3Nsb3QpIHtcclxuICAgIHZhciBsaXN0cyA9IFtzdG9yYWdlS2V5cy5tZW51QmxhY2tMaXN0LCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0XTtcclxuICAgIGxpc3RzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICBTdHJpbmdMaXN0Q2xlYXIobnVsbCwgbGlzdCk7XHJcbiAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBsaXN0LCAnTm8gQ2hhbmdlcycpO1xyXG4gICAgICAgIG1jbS5TZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsIGxpc3QsIFwiTm8gQ2hhbmdlc1wiKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpLmZvckVhY2goZnVuY3Rpb24gKGMsIGkpIHtcclxuICAgICAgICBpZiAoTnVtYmVyKGMpIHx8IGMgPT0gJzAnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNsb3QgPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5VG9TbG90KVtpXTtcclxuICAgICAgICAvLyBjID0gYy5zbGljZShjLmxhc3RJbmRleE9mKCdfJykgKyAxKVxyXG4gICAgICAgIGlmIChzbG90ID09IHNlbGVjdGVkX3Nsb3QpIHtcclxuICAgICAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBzdG9yYWdlS2V5cy5tZW51QmxhY2tMaXN0LCBjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFN0cmluZ0xpc3RBZGQobnVsbCwgc3RvcmFnZUtleXMubWVudVdoaXRlTGlzdCwgYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLy8gRnVuY3Rpb24gdG8gY2xlYXIgYW5kIHJlZmlsbCB0aGUgbWNtIG1lbnUgbGlzdHMgYWNjb3JkaW5nIHRvIGEgZmlsdGVyIGNyaXRlcmlhXHJcbmZ1bmN0aW9uIEZpbHRlck1DTU9wdGlvbnMocXVlcnkpIHtcclxuICAgIGlmICghcXVlcnkpIHtcclxuICAgICAgICBxdWVyeSA9ICcnO1xyXG4gICAgfVxyXG4gICAgO1xyXG4gICAgLy8gRmlsbE1DTU9wdGlvbnMoKVxyXG4gICAgdmFyIG1haW5LZXkgPSBcIllNLkxvcmljYS5NQ00uRW51bS5cIjtcclxuICAgIC8vIGFyciA9IG1haW5LZXkgKyBhcnJcclxuICAgIHZhciBrZXlzID0gW1wiVXBrZWVwXCIsIFwiQmxhY2tsaXN0XCIsIFwiRXhjbHVzaW9uXCJdO1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBrZXkgPSBtYWluS2V5ICsga2V5O1xyXG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IEZpbHRlck9wdGlvbnMoU3RyaW5nTGlzdFRvQXJyYXkobnVsbCwga2V5KSwgcXVlcnkpO1xyXG4gICAgICAgIGlmICghZmlsdGVyZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWx0ZXJlZC51bnNoaWZ0KCdObyBDaGFuZ2VzJyk7XHJcbiAgICAgICAgU3RyaW5nTGlzdENsZWFyKG51bGwsIGtleSk7XHJcbiAgICAgICAgZmlsdGVyZWQuZm9yRWFjaChmdW5jdGlvbiAoZikge1xyXG4gICAgICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIGtleSwgZiwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBTZXRNZW51T3B0aW9ucygpO1xyXG4gICAgUmVmcmVzaE1DTSgpO1xyXG59XHJcbmZ1bmN0aW9uIEZpbHRlck9wdGlvbnMoYXJyLCBxdWVyeSkge1xyXG4gICAgaWYgKCFhcnIpIHtcclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBIaWRlR3JvdXBPbmUobWFrZVZpc2libGUpIHtcclxuICAgIG1ha2VWaXNpYmxlID0gIW1ha2VWaXNpYmxlO1xyXG4gICAgbWNtLlNldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsICdiSGlkZGVuVG9nZ2xlMTpTbG90cycsIG1ha2VWaXNpYmxlKTtcclxuICAgIFJlZnJlc2hNQ00oKTtcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKSB7XHJcbiAgICB2YXIgaSA9IE9iamVjdC52YWx1ZXMobWNtX3NldHRpbmdzKS5pbmRleE9mKGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtY21fc2V0dGluZ3MpW2ldO1xyXG59XHJcbmZ1bmN0aW9uIHNvbHZlU2xvdFN0b3JhZ2VQYXRoKHMpIHtcclxuICAgIHJldHVybiBcIllNLlNsb3RzLlwiLmNvbmNhdChzLm5hbWUsIFwiLlwiKTtcclxufVxyXG5mdW5jdGlvbiBTZXRGbG9hdFNldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KSB7XHJcbiAgICB2YXIga2V5ID0gc3RyaW5nVG9TZXR0aW5nKGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICAvLyBTZXRGbG9hdFZhbHVlKG51bGwsIGBZTS5TbG90cy4keyBzbG90Lm5hbWUgfS4ke2tleX1gLCBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGtleSkpXHJcbiAgICBzbG90LmJhc2VTaXplID0gbWNtLkdldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBjaGFuZ2VkX3NldHRpbmcpO1xyXG59XHJcbmZ1bmN0aW9uIFNldEludFNldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KSB7XHJcbiAgICB2YXIga2V5ID0gc3RyaW5nVG9TZXR0aW5nKGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCAnWU0uU2xvdHMuJyArIGtleSwgbWNtLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwga2V5KSlcclxuICAgIC8vIHNsb3QuYmFzZVNpemUgPSBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGtleSlcclxufVxyXG5mdW5jdGlvbiBTZXRCb29sU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIHZhciB2YWx1ZSA9IG1jbS5HZXRNb2RTZXR0aW5nQm9vbChtb2RuYW1lLCBrZXkpO1xyXG4gICAgaWYgKGtleS5pbmNsdWRlcygnYkFkZFNsb3QnKSkgeyB9XHJcbiAgICAvLyBTZXRJbnRWYWx1ZShudWxsLCAnWU0uU2xvdHMuJyArIGtleSwgbWNtLkdldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIGtleSkgPyAxOjApXHJcbn1cclxuZnVuY3Rpb24gU2V0U3RyaW5nU2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpIHtcclxuICAgIHZhciBrZXkgPSBzdHJpbmdUb1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgIHZhciB2YWx1ZSA9IG1jbS5HZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsIGtleSk7XHJcbiAgICBpZiAodmFsdWUgPT0gJ05vIENoYW5nZXMnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGtleS5pbmNsdWRlcygnQ2F0ZWdvcmllc1JlbW92ZScpKSB7XHJcbiAgICAgICAgU3RyaW5nTGlzdEFkZChudWxsLCBzdG9yYWdlS2V5cy5tZW51V2hpdGVMaXN0LCB2YWx1ZSk7XHJcbiAgICAgICAgU3RyaW5nTGlzdFJlbW92ZShudWxsLCBzdG9yYWdlS2V5cy5tZW51QmxhY2tMaXN0LCB2YWx1ZSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUb1Nsb3RbdmFsdWVdID0gU2xvdC5nZXRBbGxTbG90cygpWzBdOyAvLyBzZXRzIHRvIHRoZSBkZWZhdWx0IHNsb3QgJ01pc2Nfc2xvdCdcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGtleS5pbmNsdWRlcygnQ2F0ZWdvcmVzQWRkJykpIHtcclxuICAgICAgICBTdHJpbmdMaXN0QWRkKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVCbGFja0xpc3QsIHZhbHVlKTtcclxuICAgICAgICBTdHJpbmdMaXN0UmVtb3ZlKG51bGwsIHN0b3JhZ2VLZXlzLm1lbnVXaGl0ZUxpc3QsIHZhbHVlKTtcclxuICAgICAgICBjYXRlZ29yeVRvU2xvdFt2YWx1ZV0gPSBzbG90O1xyXG4gICAgfVxyXG59XHJcbi8vX19fX19fX19fX0VWRU5UU19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmV4cG9ydCB2YXIgbWFpbk1jbSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIG9uY2UoJ3VwZGF0ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XHJcbiAgICAgICAgKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlZ2lzdGVyRm9yTW9kRXZlbnQoJ1Nsb3RzX01DTV9QYWdlU2VsZWN0JywgJ09uUGFnZVNlbGVjdCcpO1xyXG4gICAgICAgIChfYiA9IHBsKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5yZWdpc3RlckZvck1vZEV2ZW50KCdTbG90c19NZW51X09wZW4nLCAnT25NZW51T3BlbicpO1xyXG4gICAgICAgIChfYyA9IHBsKCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZWdpc3RlckZvck1vZEV2ZW50KCdZTS5TbG90cy5TRVRUSU5HX0NIQU5HRUQnLCAnT25TZXR0aW5nQ2hhbmdlZCcpO1xyXG4gICAgICAgIChfZCA9IHBsKCkpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5yZWdpc3RlckZvck1vZEV2ZW50KCdTbG90c19NZW51X0Nsb3NlX1VwZGF0ZScsICdPbk1lbnVDbG9zZScpO1xyXG4gICAgICAgIC8vIGluaXRJdGVtQ2F0ZWdvcmllc0xpc3QoKVxyXG4gICAgfSk7XHJcbiAgICBob29rcy5zZW5kUGFweXJ1c0V2ZW50LmFkZCh7XHJcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgRXZhbHVhdGVJbnZlbnRvcnkoKTtcclxuICAgICAgICAgICAgc2F2ZVRvRGF0YUZpbGUoKTtcclxuICAgICAgICAgICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIDB4MTQsIDB4MTQsICdPbk1lbnVDbG9zZScpO1xyXG4gICAgaG9va3Muc2VuZFBhcHlydXNFdmVudC5hZGQoe1xyXG4gICAgICAgIGVudGVyOiBmdW5jdGlvbiAoY3R4KSB7XHJcbiAgICAgICAgICAgIHByaW50Q29uc29sZShjdHgucGFweXJ1c0V2ZW50TmFtZSk7XHJcbiAgICAgICAgICAgIEZpbGxNQ01PcHRpb25zKCk7XHJcbiAgICAgICAgfSxcclxuICAgIH0sIDB4MTQsIDB4MTQsICdPblBhZ2VTZWxlY3QnIHx8ICdPbk1lbnVPcGVuJyk7XHJcbiAgICBob29rcy5zZW5kUGFweXJ1c0V2ZW50LmFkZCh7XHJcbiAgICAgICAgZW50ZXI6IGZ1bmN0aW9uIChjdHgpIHtcclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGN0eC5wYXB5cnVzRXZlbnROYW1lKVxyXG4gICAgICAgICAgICBvbmNlKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlZF9zZXR0aW5nID0gR2V0U3RyaW5nVmFsdWUobnVsbCwgc3RvcmFnZUtleXMuY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciBzbG90O1xyXG4gICAgICAgICAgICAgICAgcHJpbnRDb25zb2xlKGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG1jbS5HZXRNb2RTZXR0aW5nU3RyaW5nKG1vZG5hbWUsIG1jbV9zZXR0aW5ncy5TZWxlY3RlZFNsb3QpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnRvTG93ZXJDYXNlKCkgPT0gJ05vIENoYW5nZXMnLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBIaWRlR3JvdXBPbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90ID0gZ2V0U2xvdEZyb21OYW1lKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShzbG90Lm5hbWUpXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlZF9zZXR0aW5nLmluY2x1ZGVzKCdBY3RpdmVTbG90JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBIaWRlR3JvdXBPbmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1jbS5TZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgbWNtX3NldHRpbmdzLnNsaWRlclNsb3RNYXgsIHNsb3QuYmFzZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGxTbG90Q2F0ZWdvcnlMaXN0cyhzbG90KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYW5nZWRfc2V0dGluZ1swXSA9PSAnZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXRGbG9hdFNldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VkX3NldHRpbmcuaW5jbHVkZXMoJ1Nsb3RNYXgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbG90LmJhc2VTaXplID0gbWNtLkdldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBjaGFuZ2VkX3NldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VkX3NldHRpbmcuaW5jbHVkZXMoJ0l0ZW1UeXBlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1NpemUgPSBtY20uR2V0TW9kU2V0dGluZ0Zsb2F0KG1vZG5hbWUsIGNoYW5nZWRfc2V0dGluZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRfc2V0dGluZyA9IGNoYW5nZWRfc2V0dGluZy5zbGljZSgxLCBjaGFuZ2VkX3NldHRpbmcubGVuZ3RoIC0gMTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoY2hhbmdlZF9zZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUNhdGVnb3J5Vm9sdW1lc1tjaGFuZ2VkX3NldHRpbmddID0gbmV3U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRDb25zb2xlKGl0ZW1DYXRlZ29yeVZvbHVtZXNbY2hhbmdlZF9zZXR0aW5nXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjaGFuZ2VkX3NldHRpbmcuaW5jbHVkZXMoJ2ZTbG90TWF4Jykpe3Nsb3R9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VkX3NldHRpbmdbMF0gPT0gJ2knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU2V0SW50U2V0dGluZyhjaGFuZ2VkX3NldHRpbmcsIHNsb3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhbmdlZF9zZXR0aW5nWzBdID09ICdiJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFNldEJvb2xTZXR0aW5nKGNoYW5nZWRfc2V0dGluZywgc2xvdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFuZ2VkX3NldHRpbmdbMF0gPT0gJ3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzbG90KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICdObyBDaGFuZ2VzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFNldFN0cmluZ1NldHRpbmcoY2hhbmdlZF9zZXR0aW5nLCBzbG90KTtcclxuICAgICAgICAgICAgICAgICAgICBwcmludENvbnNvbGUobWNtLkdldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgbWNtX3NldHRpbmdzLlJlbW92ZUNhdGVnb3JpZXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFNldE1lbnVPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICB9LCAweDE0LCAweDE0LCAnT25TZXR0aW5nQ2hhbmdlZCcpO1xyXG59O1xyXG4iLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjJcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuVGhpcyBmaWxlIHdhcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBQYXB5cnVzLTItVHlwZXNjcmlwdC5leGVcclxuaHR0cHM6Ly9naXRodWIuY29tL0Nhcmxvc0xleXZhQXlhbGEvUGFweXJ1cy0yLVR5cGVzY3JpcHRcclxuXHJcblRoZSBwcm9ncmFtIGhhcyBubyB3YXkgdG8ga25vdyB0aGUgaW50ZW50aW9uIG9mIHRoZSBodW1hbnMgdGhhdCBtYWRlXHJcbnRoZSBzY3JpcHRzLCBzbyBpdCdzIGFsd2F5cyBhZHZpc2FibGUgdG8gbWFudWFsbHkgY2hlY2sgYWxsIGdlbmVyYXRlZFxyXG5maWxlcyB0byBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBkZWNsYXJlZCBhcyBpdCBzaG91bGQuXHJcblxyXG5UYWtlIG5vdGUgdGhlIHByb2dyYW0gYXNzdW1lcyB0aGlzIHNjcmlwdCBleGlzdHMgaW4gc29tZSBzdWJmb2xkZXJcclxudG8gdGhlIGZvbGRlciB3aGVyZSBgc2t5cmltUGxhdGZvcm0udHNgIGlzIGZvdW5kLCBvdGhlcndpc2UgeW91J2xsIGdldFxyXG5cIkNhbm5vdCBmaW5kIG1vZHVsZS4uLlwiIHR5cGUgb2YgZXJyb3JzLlxyXG5cclxuSWYgeW91IHdhbnQgdG8gaGF2ZSB0aGlzIHNjcmlwdCBpbiBzb21lIG90aGVyIHBsYWNlLCBqdXN0IGNoYW5nZSB0aGVcclxucmVsYXRpdmUgcGF0aCBvZiBlYWNoIGBpbXBvcnRgLlxyXG4qL1xyXG5pbXBvcnQgKiBhcyBzcCBmcm9tIFwic2t5cmltUGxhdGZvcm1cIjtcclxudmFyIHNuID0gc3AuU3RvcmFnZVV0aWw7XHJcbi8qKiBNT0QgQVVUSE9SUywgUkVBRCFcclxuXHJcbiAgICBUaGlzIHNjcmlwdCBjb250YWlucyBmdW5jdGlvbnMgZm9yIHNhdmluZyBhbmQgbG9hZGluZyBhbnkgYW1vdW50IG9mIGludCwgZmxvYXQsIGZvcm0gYW5kIHN0cmluZyB2YWx1ZXNcclxuICAgIGJ5IG5hbWUgb24gYSBmb3JtIG9yIGdsb2JhbGx5LiBUaGVzZSB2YWx1ZXMgY2FuIGJlIGFjY2Vzc2VkIGFuZCBjaGFuZ2VkIGZyb20gYW55IG1vZCB3aGljaCBhbGxvd3NcclxuICAgIG1vZHMgdG8gYmVjb21lIGNvbXBhdGlibGUgd2l0aCBlYWNoIG90aGVyIHdpdGhvdXQgYWRkaW5nIGFueSByZXF1aXJlbWVudHMgdG8gdGhlIG90aGVyIG1vZCBvciBpdHMgdmVyc2lvblxyXG4gICAgb3RoZXIgdGhhbiB0aGlzIHBsdWdpbi5cclxuXHJcbiAgICBWYWx1ZXMgd2lsbCBzdGF5IG9uIGZvcm1zIG9yIGdsb2JhbGx5IHVudGlsIHRoZXkgYXJlIFVuc2V0IG9yIENsZWFyZWQgaW4gY2FzZSBvZiBsaXN0cy4gSWYgdmFsdWVcclxuICAgIGlzIHNldCBvbiBhIGZvcm0gYW5kIHRoZSBvYmplY3QgaXMgZGVsZXRlZCB0aGVuIFRIRSB2YWx1ZSB3aWxsIGJlIHJlbW92ZWQgd2hlbiBzYXZpbmcgZ2FtZS5cclxuICAgIElmIHlvdSBhcmUgZG9uZSB3aXRoIHVzaW5nIGEgY2VydGFpbiB2YXJpYWJsZSB5b3Ugc2hvdWxkIHVzZSBVbnNldCBvciBDbGVhciBmdW5jdGlvbiB0byByZW1vdmUgdGhlbVxyXG4gICAgYnV0IGl0IGlzIG5vdCByZXF1aXJlZC5cclxuXHJcbiAgICBTYXZpbmcgTUNNIGNvbmZpZyB2YWx1ZXMgaGVyZSB3b3VsZCBhbGxvdyBvdGhlciBtb2RzIHRvIGNoYW5nZSB5b3VyIG1vZCBzZXR0aW5ncyB3aGljaCBtYXlcclxuICAgIGJlIHVzZWZ1bC4gSXQgc2hvdWxkIGFsc28gYWxsb3cgeW91IHRvIGNoYW5nZSBNQ00gY29uZmlnIHNjcmlwdCB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHZlcnNpb25pbmdcclxuICAgIHNpbmNlIHRoZXJlIGFyZSBubyBuZXcgdmFyaWFibGVzIGluIHRoZSBzY3JpcHQgaXRzZWxmLlxyXG5cclxuICAgIEZ1bmN0aW9ucyB0aGF0IHN0YXJ0IHdpdGggRmlsZSBpbiB0aGUgbmFtZSB3aWxsIHNhdmUgdmFsdWVzIHRvIGEgc2VwYXJhdGUgZmlsZSwgc28gdGhhdCB5b3UgY2FuXHJcbiAgICBhY2Nlc3MgdGhlIHNhbWUgdmFsdWVzIGZyb20gYWxsIHNhdmVnYW1lcy4gVGhpcyBtYXkgYmUgdXNlZnVsIGZvciBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxyXG4gICAoRklMRSBGVU5DVElPTlMgQVJFIERFUFJFQ0FURUQhIFVTRSBKU09OVVRJTC5QU0MgSU5TVEVBRClcclxuXHJcbiAgICBTYXZlZCB2YWx1ZXMgdGFrZSB2ZXJ5IGxpdHRsZSBtZW1vcnkgLSBleHBlY3QgdG8gdXNlIGxlc3MgdGhhbiA1MDAgS0Igb2YgcGh5c2ljYWwgbWVtb3J5IGV2ZW4gd2hlblxyXG4gICAgc2V0dGluZyB0aG91c2FuZHMgb2YgdmFsdWVzLlxyXG5cclxuICAgIFZhbHVlIG5hbWVzIGFyZSBub3QgY2FzZSBzZW5zaXRpdmUsIHRoYXQgbWVhbnMgR2V0SW50VmFsdWUobm9uZSwgXCJhYmNcIikgPT0gR2V0SW50VmFsdWUobm9uZSwgXCJhQkNcIikuXHJcblxyXG4gICAgQWxsIHZhbHVlcyBhcmUgc2VwYXJhdGVkIGZyb20gZWFjaCBvdGhlciBieSB0eXBlISBUaGF0IG1lYW5zIFNldEludFZhbHVlKG5vbmUsIFwiYWJjXCIsIDEpIGFuZFxyXG4gICAgU2V0RmxvYXRWYWx1ZShub25lLCBcImFiY1wiLCAyLjApIGNyZWF0ZSBzZXBhcmF0ZSBlbnRyaWVzIGFuZCBhcmVuJ3QgYWZmZWN0ZWQgYnkgZWFjaCBvdGhlci5cclxuICAgIFN0b3JhZ2VVdGlsLlNldEludFZhbHVlKG5vbmUsIFwibXlWYWx1ZVwiLCAxKVxyXG4gICAgU3RvcmFnZVV0aWwuU2V0RmxvYXRWYWx1ZShub25lLCBcIm15VmFsdWVcIiwgNS4wKVxyXG4gICAgaW50IHZhbHVlID0gU3RvcmFnZVV0aWwuR2V0SW50VmFsdWUobm9uZSwgXCJteVZhbHVlXCIpXHJcbiAgICB2YWx1ZSA9PSAxIDsgdHJ1ZVxyXG4gICAgdmFsdWUgPT0gNSA7IGZhbHNlXHJcblxyXG4gICAgV2hlbiBjaG9vc2luZyBuYW1lcyBmb3IgdmFyaWFibGVzIHRyeSB0byByZW1lbWJlciB0aGF0IGFsbCBtb2RzIGFjY2VzcyB0aGUgc2FtZSBzdG9yYWdlLCBzbyBpZiB5b3VcclxuICAgIGNyZWF0ZSBhIHZhcmlhYmxlIHdpdGggbmFtZSBcIk5hbWVcIiB0aGVuIG1hbnkgb3RoZXIgbW9kcyBjb3VsZCB1c2UgdGhlIHNhbWUgdmFyaWFibGUgYnV0IGluIGRpZmZlcmVudFxyXG4gICAgd2F5cyB0aGF0IGxlYWQgdG8gdW53YW50ZWQgYmVoYXZpb3IuIEl0IGlzIHJlY29tbWVuZGVkIHRvIHByZWZpeCB0aGUgdmFyaWFibGUgd2l0aCB5b3VyIG1vZCBuYW1lLFxyXG4gICAgdGhhdCB3YXkgeW91IGNhbiBiZSBzdXJlIG5vYm9keSBlbHNlIHdpbGwgdHJ5IHRvIHVzZSB0aGUgc2FtZSB2YXJpYWJsZSBpbiB0aGVpciBtb2QuIEZvciBleGFtcGxlXHJcbiAgICByZWFsaXN0aWMgbmVlZHMgYW5kIGRpc2Vhc2VzIG1pZ2h0IHNldCBodW5nZXIgYXMgXCJybmRfaHVuZ2VydmFsdWVcIi5cclxuXHJcbiAgICBZb3UgY2FuIGFsc28gdXNlIHRoaXMgc3RvcmFnZSB0byBtYWtlIHlvdXIgbW9kIGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gb3RoZXIgbW9kcywgZm9yIGV4YW1wbGUgaWZcclxuICAgIHlvdXIgbW9kIGhhcyBhIGZ1bmN0aW9uIHRoYXQgc2V0cyBhbiBBY3RvciB0byBiZSBpbnZpc2libGUgeW91IGNvdWxkIGFkZCBhIHNjcmlwdCB0aGF0IGNoZWNrczpcclxuICAgIGludCBpID0gU3RvcmFnZVV0aWwuRm9ybUxpc3RDb3VudChub25lLCBcIk1ha2VJbnZpc2libGVcIilcclxuICAgIHdoaWxlKGkgPiAwKVxyXG4gICAgICAgIGktLVxyXG4gICAgICAgIEFjdG9yIG1ha2UgPSBTdG9yYWdlVXRpbC5Gb3JtTGlzdEdldChub25lLCBcIk1ha2VJbnZpc2libGVcIiwgaSkgYXMgQWN0b3JcclxuICAgICAgICBpZihtYWtlKVxyXG4gICAgICAgICAgICBNeVNjcmlwdEZ1bmN0aW9uKG1ha2UpXHJcbiAgICAgICAgZW5kaWZcclxuICAgICAgICBTdG9yYWdlVXRpbC5Gb3JtTGlzdFJlbW92ZUF0KG5vbmUsIFwiTWFrZUludmlzaWJsZVwiLCBpKVxyXG4gICAgZW5kd2hpbGVcclxuICAgIEFuZCB0aGUgb3RoZXIgbW9kIGNvdWxkIHdyaXRlOlxyXG4gICAgU3RvcmFnZVV0aWwuRm9ybUxpc3RBZGQobm9uZSwgXCJNYWtlSW52aXNpYmxlXCIsIG15QWN0b3IpXHJcbiAgICB0byBtYWtlIHNvbWVvbmUgaW52aXNpYmxlIHVzaW5nIHlvdXIgbW9kLiBCdXQgaWYgeW91ciBtb2QgaXNuJ3QgcHJlc2VudCB0aGVuIG5vdGhpbmcgaGFwcGVucy5cclxuICAgIFRoaXMgaXMganVzdCBhbiBleGFtcGxlLCBJJ20gc3VyZSB5b3UgY2FuIGZpbmQgYmV0dGVyIHdheXMgdG8gaW1wbGVtZW50IGNvbXBhdGliaWxpdHksIGl0IHdvdWxkXHJcbiAgICBoZWxwIHRvIGluY2x1ZGUgYSBkb2N1bWVudGF0aW9uIGZvciBvdGhlciBtb2RkZXJzIGlmIHlvdSBkby5cclxuLyoqXHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqXHJcbiAgICBTdG9yYWdlIGZ1bmN0aW9ucyAtIHZhbHVlcyBpbiBzYXZlIGdhbWUgZmlsZS4gKi9cclxuLyoqIFNldCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgZ2xvYmFsbHkgb3Igb24gYW55IGZvcm0gYnkgbmFtZSBhbmQgcmV0dXJuXHJcbiAgIHRoZSB2YWx1ZSBwYXNzZWQsIG9yIGFzIHVuaW5pdGlhbGl6ZWQgdmFyaWFibGUgaWYgaW52YWxpZCBrZXlzIGdpdmVuLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNhdmUgb24uIFNldCBub25lIHRvIHNhdmUgZ2xvYmFsbHkuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBzZXQgdG8gdGhlIGdpdmVuIGtleXMuIElmIHplcm8sIGVtcHR5LCBvciBub25lIGFyZSBnaXZlbiwgdGhlIGtleSB3aWxsIGJlIHVuc2V0LiAqL1xyXG5leHBvcnQgdmFyIFNldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFNldEZsb2F0VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTZXRGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uU2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogUmVtb3ZlIGEgcHJldmlvdXNseSBzZXQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbmlmIHN1Y2Nlc3NmdWwuIFRoaXMgd2lsbCByZXR1cm4gZmFsc2UgaWYgdmFsdWUgZGlkbid0IGV4aXN0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIFVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5VbnNldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uVW5zZXRGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgVW5zZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0U3RyaW5nVmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlVuc2V0Rm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBDaGVjayBpZiBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgaGFzIGJlZW4gc2V0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBIYXNJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc0Zsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBIYXNTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkhhc1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgSGFzRm9ybVZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSGFzRm9ybVZhbHVlKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgcHJldmlvdXNseSBzYXZlZCBpbnQvZmxvYXQvc3RyaW5nL0Zvcm0gdmFsdWUgb24gZm9ybSBvciBnbG9iYWxseS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBnZXQgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS5cclxuICAgW29wdGlvbmFsXSBtaXNzaW5nOiBpZiB2YWx1ZSBoYXMgbm90IGJlZW4gc2V0LCByZXR1cm4gdGhpcyB2YWx1ZSBpbnN0ZWFkLiAqL1xyXG5leHBvcnQgdmFyIEdldEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEZsb2F0VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5HZXRTdHJpbmdWYWx1ZShPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEdldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIFBsdWNrcyBhIHByZXZpb3VzbHkgc2F2ZWQgaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHZhbHVlIG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcbiAgIFJldHVybmluZyB0aGUgdmFsdWUgc3RvcmVkLCB0aGVuIHJlbW92aW5nIGl0IGZyb20gc3RvcmFnZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIHZhbHVlIGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgUGx1Y2tJbnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IDA7IH1cclxuICAgIHJldHVybiBzbi5QbHVja0ludFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGbG9hdFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGbG9hdFZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5QbHVja1N0cmluZ1ZhbHVlKE9iaktleSwgS2V5TmFtZSwgbWlzc2luZyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgUGx1Y2tGb3JtVmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uUGx1Y2tGb3JtVmFsdWUoT2JqS2V5LCBLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuLyoqIEdldCBwcmV2aW91c2x5IHNhdmVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGdldCBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgY3VycmVudCB2YWx1ZSBieVxyXG5cclxuICAgZ2l2ZW4ga2V5cyB3aWxsIGJlIGluaXRpYWxpemVkIHRvIGdpdmVuIGFtb3VudCBpZiBpdCBkb2VzIG5vdCBleGlzdCAqL1xyXG5leHBvcnQgdmFyIEFkanVzdEludFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5BZGp1c3RJbnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGFtb3VudCkgeyByZXR1cm4gc24uQWRqdXN0RmxvYXRWYWx1ZShPYmpLZXksIEtleU5hbWUsIGFtb3VudCk7IH07XHJcbi8qKiBBZGQgYW4gaW50L2Zsb2F0L3N0cmluZy9Gb3JtIHRvIGEgbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm5cclxuICAgdGhlIHZhbHVlJ3MgbmV3IGluZGV4LiBJbmRleCBjYW4gYmUgLTEgaWYgd2Ugd2VyZSB1bmFibGUgdG8gYWRkXHJcbiAgIHRoZSB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBhZGQgdG8uIFNldCBub25lIHRvIGFkZCBnbG9iYWwgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgdmFsdWUuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuXHJcbiAgIFtvcHRpb25hbF0gYWxsb3dEdXBsaWNhdGU6IGFsbG93IGFkZGluZyB2YWx1ZSB0byBsaXN0IGlmIHRoaXMgdmFsdWUgYWxyZWFkeSBleGlzdHMgaW4gdGhlIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEFkZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GbG9hdExpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RBZGQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpIHtcclxuICAgIGlmIChhbGxvd0R1cGxpY2F0ZSA9PT0gdm9pZCAwKSB7IGFsbG93RHVwbGljYXRlID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLlN0cmluZ0xpc3RBZGQoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0QWRkID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEFkZChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSk7XHJcbn07XHJcbi8qKiBHZXQgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiAwIGFzIHZhbHVlIGlmIHRoZXJlIHdhcyBhIHByb2JsZW0uXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZ2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmxvYXRMaXN0R2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RHZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uU3RyaW5nTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdEdldChPYmpLZXksIEtleU5hbWUsIGluZGV4KTsgfTtcclxuLyoqIFNldCBhIHZhbHVlIGluIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseS5cclxuICAgVGhpcyB3aWxsIHJldHVybiB0aGUgcHJldmlvdXMgdmFsdWUgb3IgMCBpZiB0aGVyZSB3YXMgYSBwcm9ibGVtLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHNldCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gc2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNldCB0by4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2V0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5JbnRMaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFNldChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTZXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZvcm1MaXN0U2V0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuLyoqIFBsdWNrcyBhIHZhbHVlIGZyb20gbGlzdCBieSBpbmRleCBvbiBmb3JtIG9yIGdsb2JhbGx5LlxyXG4gICBUaGUgaW5kZXggaXMgcmVtb3ZlZCBmcm9tIHRoZSBsaXN0J3Mgc3RvcmFnZSBhZnRlciByZXR1cm5pbmcgaXQncyB2YWx1ZS5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwbHVjayB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBbb3B0aW9uYWxdIG1pc3Npbmc6IGlmIGluZGV4IGhhcyBub3QgYmVlbiBzZXQsIHJldHVybiB0aGlzIHZhbHVlIGluc3RlYWQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBsdWNrID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpIHsgcmV0dXJuIHNuLkludExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQbHVjayA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKSB7IHJldHVybiBzbi5GbG9hdExpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBsdWNrKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIG1pc3NpbmcpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UGx1Y2sgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgbWlzc2luZykgeyByZXR1cm4gc24uRm9ybUxpc3RQbHVjayhPYmpLZXksIEtleU5hbWUsIGluZGV4LCBtaXNzaW5nKTsgfTtcclxuLyoqIEdldHMgdGhlIHZhbHVlIG9mIHRoZSB2ZXJ5IGZpcnN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBzaGlmdCB2YWx1ZSBmcm9tLiBTZXQgbm9uZSB0byBnZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdCB0byBzaGlmdCBpdCdzIGZpcnN0IHZhbHVlIGZyb20uICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFNoaWZ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RTaGlmdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTaGlmdChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0U2hpZnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFNoaWZ0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXRzIHRoZSB2YWx1ZSBvZiB0aGUgdmVyeSBsYXN0IGVsZW1lbnQgaW4gYSBsaXN0LCBhbmQgc3Vic2VxdWVudGx5IHJlbW92ZXMgdGhlIGluZGV4IGFmdGVyd2FyZC5cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBwb3AgdmFsdWUgZnJvbS4gU2V0IG5vbmUgdG8gZ2V0IGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QgdG8gcG9wIG9mZiBpdCdzIGxhc3QgdmFsdWUuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdFBvcCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RQb3AgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFBvcChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UG9wID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RQb3AoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIEFkanVzdCB0aGUgZXhpc3RpbmcgdmFsdWUgb2YgYSBsaXN0IGJ5IHRoZSBnaXZlbiBhbW91bnQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc2V0IHZhbHVlIG9uLiBTZXQgbm9uZSB0byBzZXQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgaW5kZXg6IGluZGV4IG9mIHZhbHVlIGluIHRoZSBsaXN0LlxyXG4gICBhbW91bnQ6ICsvLSB0aGUgYW1vdW50IHRvIGFkanVzdCB0aGUgbGlzdHMgY3VycmVudCBpbmRleCB2YWx1ZSBieS5cclxuXHJcbnMgMCBpZiBpbmRleCBkb2VzIG5vdCBleGlzdHMgKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIGFtb3VudCkgeyByZXR1cm4gc24uSW50TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEFkanVzdChPYmpLZXksIEtleU5hbWUsIGluZGV4LCBhbW91bnQpOyB9O1xyXG4vKiogSW5zZXJ0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSB0byBhIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBhbmQgcmV0dXJuXHJcbiAgIGlmIHN1Y2Nlc3NmdWwuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gYWRkIHRvLiBTZXQgbm9uZSB0byBhZGQgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICBpbmRleDogcG9zaXRpb24gaW4gbGlzdCB0byBwdXQgdGhlIHZhbHVlLiAwIGlzIGZpcnN0IGVudHJ5IGluIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBhZGQuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdEluc2VydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uSW50TGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GbG9hdExpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RJbnNlcnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RJbnNlcnQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5Gb3JtTGlzdEluc2VydChPYmpLZXksIEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbi8qKiBSZW1vdmUgYSBwcmV2aW91c2x5IGFkZGVkIGludC9mbG9hdC9zdHJpbmcvRm9ybSB2YWx1ZSBmcm9tIGEgbGlzdCBvbiBmb3JtXHJcbiAgIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoaXMgdmFsdWUgd2VyZSByZW1vdmVkLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIHZhbHVlLlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gcmVtb3ZlLlxyXG4gICBbb3B0aW9uYWxdIGFsbG93SW5zdGFuY2VzOiByZW1vdmUgYWxsIGluc3RhbmNlcyBvZiB0aGlzIHZhbHVlIGluIGEgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG4vKiogQ2xlYXIgYSBsaXN0IG9mIHZhbHVlcyAodW5zZXQpIG9uIGFuIGZvcm0gb3IgZ2xvYmFsbHkgYW5kXHJcbnRoZSBwcmV2aW91cyBzaXplIG9mIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2xlYXIgb24uIFNldCBub25lIHRvIGNsZWFyIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENsZWFyID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDbGVhcihPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q2xlYXIgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENsZWFyKE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBSZW1vdmUgYSB2YWx1ZSBmcm9tIGxpc3QgYnkgaW5kZXggb24gZm9ybSBvciBnbG9iYWxseSBhbmRcclxuaWYgd2Ugd2VyZSBzdWNjZXNzZnVsIGluIGRvaW5nIHNvLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIHJlbW92ZSBmcm9tLiBTZXQgbm9uZSB0byByZW1vdmUgZ2xvYmFsIHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIGluZGV4OiBpbmRleCBvZiB2YWx1ZSBpbiB0aGUgbGlzdC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uSW50TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5TdHJpbmdMaXN0UmVtb3ZlQXQoT2JqS2V5LCBLZXlOYW1lLCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5Gb3JtTGlzdFJlbW92ZUF0KE9iaktleSwgS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG4vKiogR2V0IHNpemUgb2YgYSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHkuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuICovXHJcbmV4cG9ydCB2YXIgSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5GbG9hdExpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RDb3VudChPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdENvdW50KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBHZXQgdGhlIG51bWJlciBvZiBvY2N1cnJlbmNlcyBvZiBhIHNwZWNpZmljIHZhbHVlIHdpdGhpbiBhIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gY2hlY2sgb24uIFNldCBub25lIHRvIGNoZWNrIGdsb2JhbCBsaXN0LlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHZhbHVlOiB2YWx1ZSB0byBsb29rIGZvci5cclxuICAgW29wdGlvbmFsXSBleGNsdWRlOiBpZiB0cnVlLCBmdW5jdGlvbiB3aWxsIHJldHVybiBudW1iZXIgb2YgZWxlbWVudHMgTk9UIGVxdWFsIHRvIHZhbHVlLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3VudFZhbHVlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUsIGV4Y2x1ZGUpIHtcclxuICAgIGlmIChleGNsdWRlID09PSB2b2lkIDApIHsgZXhjbHVkZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uSW50TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0Q291bnRWYWx1ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKSB7XHJcbiAgICBpZiAoZXhjbHVkZSA9PT0gdm9pZCAwKSB7IGV4Y2x1ZGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZsb2F0TGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0Q291bnRWYWx1ZShPYmpLZXksIEtleU5hbWUsIHZhbHVlLCBleGNsdWRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvdW50VmFsdWUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSkge1xyXG4gICAgaWYgKGV4Y2x1ZGUgPT09IHZvaWQgMCkgeyBleGNsdWRlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdENvdW50VmFsdWUoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSwgZXhjbHVkZSk7XHJcbn07XHJcbi8qKiBGaW5kIGEgdmFsdWUgaW4gbGlzdCBvbiBmb3JtIG9yIGdsb2JhbGx5IGFuZCByZXR1cm4gaXRzXHJcbiAgIGluZGV4IG9yIC0xIGlmIHZhbHVlIHdhcyBub3QgZm91bmQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB2YWx1ZTogdmFsdWUgdG8gc2VhcmNoLiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RGaW5kID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZsb2F0TGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0RmluZCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5TdHJpbmdMaXN0RmluZChPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RGaW5kKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG4vKiogRmluZCBpZiBhIHZhbHVlIGluIGxpc3Qgb24gZm9ybSBvciBnbG9iYWxseSBleGlzdHMsIHRydWUgaWYgaXQgZXhpc3RzLFxyXG4gICBmYWxzZSBpZiBpdCBkb2Vzbid0LlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgdmFsdWU6IHZhbHVlIHRvIHNlYXJjaC4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkludExpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdEhhcyhPYmpLZXksIEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0SGFzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRm9ybUxpc3RIYXMoT2JqS2V5LCBLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbi8qKiBTb3J0IGFuIGludC9mbG9hdC9zdHJpbmcvRm9ybSBsaXN0IGJ5IHZhbHVlcyBpbiBhc2NlbmRpbmcgb3JkZXIuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gc29ydCBvbi4gU2V0IG5vbmUgZm9yIGdsb2JhbCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiB2YWx1ZS4gKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkludExpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmxvYXRMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLkZsb2F0TGlzdFNvcnQoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBTdHJpbmdMaXN0U29ydCA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUpIHsgcmV0dXJuIHNuLlN0cmluZ0xpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTb3J0ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRm9ybUxpc3RTb3J0KE9iaktleSwgS2V5TmFtZSk7IH07XHJcbi8qKiBGaWxscyB0aGUgZ2l2ZW4gaW5wdXQgYXJyYXkgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBsaXN0IG9uIGZvcm0gb3IgZ2xvYmFsbHksXHJcbiAgIHdpbGwgZmlsbCB0aGUgYXJyYXkgdW50aWwgZWl0aGVyIHRoZSBhcnJheSBvciBsaXN0IHJ1bnMgb3V0IG9mIHZhbGlkIGluZGV4ZXNcclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIHNsaWNlW106IGFuIGluaXRpYWxpemVkIGFycmF5IHNldCB0byB0aGUgc2xpY2Ugc2l6ZSB5b3Ugd2FudCwgaS5lLiBpbnRbXSBzbGljZSA9IG5ldyBpbnRbMTBdXHJcbiAgIFtvcHRpb25hbF0gc3RhcnRJbmRleDogdGhlIHN0YXJ0aW5nIGxpc3QgaW5kZXggeW91IHdhbnQgdG8gc3RhcnQgZmlsbGluZyB5b3VyIHNsaWNlIGFycmF5IHdpdGggKi9cclxuZXhwb3J0IHZhciBJbnRMaXN0U2xpY2UgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFNsaWNlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpIHtcclxuICAgIGlmIChzdGFydEluZGV4ID09PSB2b2lkIDApIHsgc3RhcnRJbmRleCA9IDA7IH1cclxuICAgIHJldHVybiBzbi5TdHJpbmdMaXN0U2xpY2UoT2JqS2V5LCBLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RTbGljZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRm9ybUxpc3RTbGljZShPYmpLZXksIEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KTtcclxufTtcclxuLyoqIFNpemVzIHRoZSBnaXZlbiBsaXN0IHRvIGEgc2V0IG51bWJlciBvZiBlbGVtZW50cy4gSWYgdGhlIGxpc3QgZXhpc3RzIGFscmVhZHkgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICAgd2hlbiBnaXZlbiBmZXdlciBlbGVtZW50cywgb3IgcmVzaXplZCB0byB0aGUgYXBwcm9wcmlhdGUgbGVuZ3RoIHdpdGggdGhlIGZpbGxlciBhcmd1bWVudCBiZWluZyB1c2VkIGFzXHJcbiAgIHRoZSBkZWZhdWx0IHZhbHVlc1xyXG5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRydW5jYXRlZCAoc2lnbmVkKSBvciBhZGRlZCAodW5zaWduZWQpIG9udG8gdGhlIGxpc3QuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LlxyXG4gICB0b0xlbmd0aDogVGhlIHNpemUgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBsaXN0IHRvLiBNYXggbGVuZ3RoIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpcyA1MDAuXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkludExpc3RSZXNpemUoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RSZXNpemUgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmxvYXRMaXN0UmVzaXplKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSBcIlwiOyB9XHJcbiAgICByZXR1cm4gc24uU3RyaW5nTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZvcm1MaXN0UmVzaXplID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcikge1xyXG4gICAgaWYgKGZpbGxlciA9PT0gdm9pZCAwKSB7IGZpbGxlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdFJlc2l6ZShPYmpLZXksIEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG4vKiogQ3JlYXRlcyBhIGNvcHkgb2YgYXJyYXkgb24gdGhlIGdpdmVuIHN0b3JhZ2UgbGlzdCBhdCB0aGUgZ2l2ZW4gb2JqZWN0K2tleSxcclxuICAgb3ZlcndyaXRpbmcgYW55IGxpc3QgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0cy5cclxuXHJcbiAgIFJldHVybnMgdHJ1ZSBvbiBzdWNjZXNzLlxyXG5cclxuICAgT2JqS2V5OiBmb3JtIHRvIGZpbmQgdmFsdWUgb24uIFNldCBub25lIHRvIGZpbmQgZ2xvYmFsIGxpc3QgdmFsdWUuXHJcbiAgIEtleU5hbWU6IG5hbWUgb2YgbGlzdC5cclxuICAgY29weVtdOiBUaGUgcGFweXJ1cyBhcnJheSB3aXRoIHRoZSBjb250ZW50IHlvdSB3aXNoIHRvIGNvcHkgb3ZlciBpbnRvIFN0b3JhZ2VVdGlsXHJcbiAgIFtvcHRpb25hbF0gZmlsbGVyOiBXaGVuIGFkZGluZyBlbXB0eSBlbGVtZW50cyB0byB0aGUgbGlzdCB0aGlzIHdpbGwgYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCB2YWx1ZSAqL1xyXG5leHBvcnQgdmFyIEludExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uSW50TGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmxvYXRMaXN0Q29weShPYmpLZXksIEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RDb3B5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdENvcHkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5Gb3JtTGlzdENvcHkoT2JqS2V5LCBLZXlOYW1lLCBjb3B5KTsgfTtcclxuLyoqIE91dHB1dHMgdGhlIHZhbHVlcyBjdXJyZW50bHkgc3RvcmVkIGJ5IHRoZSBnaXZlbiBvYmplY3Qra2V5LlxyXG5cclxuICAgUmV0dXJucyBhIG5ldyBhcnJheSBjb250YWluaW5nIHRoZSB2YWx1ZXMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gZmluZCB2YWx1ZSBvbi4gU2V0IG5vbmUgdG8gZmluZCBnbG9iYWwgbGlzdCB2YWx1ZS5cclxuICAgS2V5TmFtZTogbmFtZSBvZiBsaXN0LiAqL1xyXG5leHBvcnQgdmFyIEludExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uSW50TGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGbG9hdExpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uRmxvYXRMaXN0VG9BcnJheShPYmpLZXksIEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIFN0cmluZ0xpc3RUb0FycmF5ID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSkgeyByZXR1cm4gc24uU3RyaW5nTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGb3JtTGlzdFRvQXJyYXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBLZXlOYW1lKSB7IHJldHVybiBzbi5Gb3JtTGlzdFRvQXJyYXkoT2JqS2V5LCBLZXlOYW1lKTsgfTtcclxuLyoqIFJldHVybnMgYXJyYXkgb2YgZm9ybXMgZnJvbSBsaXN0IHRoYXQgaGF2ZSAob3Igb3B0aW9uYWxseSBkb24ndCBoYXZlKSB0aGUgc3BlY2lmaWVkIGZvcm0gdHlwZXMuXHJcbiAgIEZvciB2YWxpZCBsaXN0IG9mIGZvcm0gdHlwZXMsIHNlZSBGb3JtVHlwZS5wc2Mgb3IgaHR0cDovL3d3dy5jcmVhdGlvbmtpdC5jb20vR2V0VHlwZV8tX0Zvcm1cclxuXHJcbiAgIE9iaktleTogZm9ybSB0byBmaW5kIHZhbHVlIG9uLiBTZXQgbm9uZSB0byBmaW5kIGdsb2JhbCBsaXN0IHZhbHVlLlxyXG4gICBLZXlOYW1lOiBuYW1lIG9mIGxpc3QuXHJcbiAgIEZvcm1UeXBlSURzW106IFRoZSBpbnQgcGFweXJ1cyBhcnJheSB3aXRoIGFsbCB0aGUgZm9ybSB0eXBlcyB5b3Ugd2lzaCB0byBmaWx0ZXIgZm9yXHJcbiAgIFtvcHRpb25hbF0gUmV0dXJuTWF0Y2hpbmc6IEJ5IGRlZmF1bHQsIFRSVUUsIHRoZSBvdXRwdXQgRm9ybVtdIGFycmF5IHdpbGwgY29udGFpbiBmb3JtcyBmcm9tIGxpc3QgdGhhdCBtYXRjaCB0aGUgZm9ybSB0eXBlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gRkFMU0UsIGludmVydHMgdGhlIHJlc3VsdGluZyBhcnJheSB3aXRoIGZvcm1zIHRoYXQgaGF2ZSBhIHR5cGUgdGhhdCBETyBOT1QgbWF0Y2guICovXHJcbmV4cG9ydCB2YXIgRm9ybUxpc3RGaWx0ZXJCeVR5cGVzID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRHMsIFJldHVybk1hdGNoaW5nKSB7XHJcbiAgICBpZiAoUmV0dXJuTWF0Y2hpbmcgPT09IHZvaWQgMCkgeyBSZXR1cm5NYXRjaGluZyA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5Gb3JtTGlzdEZpbHRlckJ5VHlwZXMoT2JqS2V5LCBLZXlOYW1lLCBGb3JtVHlwZUlEcywgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vLyBDb252ZW5pZW5jZSB2ZXJzaW9uIG9mIEZvcm1MaXN0RmlsdGVyQnlUeXBlcygpIGZvciB3aGVuIG9ubHkgZ2V0dGluZyBhIHNpbmdsZSB0eXBlLlxyXG5leHBvcnQgdmFyIEZvcm1MaXN0RmlsdGVyQnlUeXBlID0gZnVuY3Rpb24gKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpIHtcclxuICAgIGlmIChSZXR1cm5NYXRjaGluZyA9PT0gdm9pZCAwKSB7IFJldHVybk1hdGNoaW5nID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZvcm1MaXN0RmlsdGVyQnlUeXBlKE9iaktleSwgS2V5TmFtZSwgRm9ybVR5cGVJRCwgUmV0dXJuTWF0Y2hpbmcpO1xyXG59O1xyXG4vKiogQ291bnRzIGVhY2ggdHlwZSBvZiBvZiBhbnkgS2V5TmFtZSB0aGF0IHN0YXJ0cyB3aXRoIGEgZ2l2ZW4gc3RyaW5nIHByZWZpeCBvbiBhbGwgb2JqZWN0cy5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNvdW50ZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDb3VudEludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50RmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50U3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50SW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50SW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50RmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudFN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudFN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDb3VudEZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENvdW50cyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gYWxsIG9iamVjdHMuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNvdW50IG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjb3VudGVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ291bnRPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ291bnRPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudE9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENvdW50T2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNvdW50T2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjb3VudHMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENvdW50QWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5Db3VudEFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBDbGVhcnMgZWFjaCB0eXBlIG9mIG9mIGFueSBLZXlOYW1lIHRoYXQgc3RhcnRzIHdpdGggYSBnaXZlbiBzdHJpbmcgcHJlZml4IG9uIGFsbCBvYmplY3RzLlxyXG4gICBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdmFsdWVzL2xpc3RzIHRoYXQgd2VyZSB1bnNldC5cclxuXHJcbiAgIFByZWZpeEtleTogVGhlIHN0cmluZyBhIEtleU5hbWUgbXVzdCBzdGFydCB3aXRoIHRvIGJlIGNsZWFyZWQuIENhbm5vdCBiZSBlbXB0eS4gKi9cclxuZXhwb3J0IHZhciBDbGVhckludFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJJbnRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyRmxvYXRWYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ1ZhbHVlUHJlZml4KFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJGb3JtVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckZvcm1WYWx1ZVByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFySW50TGlzdFByZWZpeCA9IGZ1bmN0aW9uIChQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFySW50TGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGbG9hdExpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhclN0cmluZ0xpc3RQcmVmaXggPSBmdW5jdGlvbiAoUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhclN0cmluZ0xpc3RQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuZXhwb3J0IHZhciBDbGVhckZvcm1MaXN0UHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJGb3JtTGlzdFByZWZpeChQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsUHJlZml4ID0gZnVuY3Rpb24gKFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJBbGxQcmVmaXgoUHJlZml4S2V5KTsgfTtcclxuLyoqIENsZWFycyBlYWNoIHR5cGUgb2Ygb2YgYW55IEtleU5hbWUgdGhhdCBzdGFydHMgd2l0aCBhIGdpdmVuIHN0cmluZyBwcmVmaXggb24gc3BlY2lmaWMgb2JqZWN0cy5cclxuICAgUmV0dXJucyB0aGUgbnVtYmVyIG9mIHZhbHVlcy9saXN0cyB0aGF0IHdlcmUgdW5zZXQuXHJcblxyXG4gICBPYmpLZXk6IGZvcm0gdG8gcGVyZm9ybSB0aGUgcHJlZml4IGNsZWFyIG9uLlxyXG4gICBQcmVmaXhLZXk6IFRoZSBzdHJpbmcgYSBLZXlOYW1lIG11c3Qgc3RhcnQgd2l0aCB0byBiZSBjbGVhcmVkLiBDYW5ub3QgYmUgZW1wdHkuICovXHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeCA9IGZ1bmN0aW9uIChPYmpLZXksIFByZWZpeEtleSkgeyByZXR1cm4gc24uQ2xlYXJPYmpJbnRWYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpGbG9hdFZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0VmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqU3RyaW5nVmFsdWVQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybVZhbHVlUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZvcm1WYWx1ZVByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpJbnRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakludExpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRmxvYXRMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9iakZsb2F0TGlzdFByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbmV4cG9ydCB2YXIgQ2xlYXJPYmpTdHJpbmdMaXN0UHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhck9ialN0cmluZ0xpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG5leHBvcnQgdmFyIENsZWFyT2JqRm9ybUxpc3RQcmVmaXggPSBmdW5jdGlvbiAoT2JqS2V5LCBQcmVmaXhLZXkpIHsgcmV0dXJuIHNuLkNsZWFyT2JqRm9ybUxpc3RQcmVmaXgoT2JqS2V5LCBQcmVmaXhLZXkpOyB9O1xyXG4vLyBQZXJmb3JtcyBhbGwgb2YgdGhlIGFib3ZlIHByZWZpeCBjbGVhcnMgaW4gb25lIGdvLlxyXG5leHBvcnQgdmFyIENsZWFyQWxsT2JqUHJlZml4ID0gZnVuY3Rpb24gKE9iaktleSwgUHJlZml4S2V5KSB7IHJldHVybiBzbi5DbGVhckFsbE9ialByZWZpeChPYmpLZXksIFByZWZpeEtleSk7IH07XHJcbi8qKiBEZWJ1ZyBmdW5jdGlvbnMgLSBjYW4gYmUgaGVscGZ1bCB0byBmaW5kIHByb2JsZW1zIG9yIGZvciBkZXZlbG9wbWVudC4gKi9cclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVWYWx1ZXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVWYWx1ZXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19EZWxldGVBbGxWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19EZWxldGVBbGxWYWx1ZXMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19DbGVhbnVwID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQ2xlYW51cCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEludE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsRmxvYXRPYmpzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfQWxsRmxvYXRPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbFN0cmluZ09ianMoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxGb3JtT2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1PYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsSW50TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxJbnRMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZsb2F0TGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxGbG9hdExpc3RPYmpzKCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsU3RyaW5nTGlzdE9ianMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19BbGxTdHJpbmdMaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbEZvcm1MaXN0T2JqcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbEZvcm1MaXN0T2JqcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakludEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqRmxvYXRLZXlzID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfQWxsT2JqRmxvYXRLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9ialN0cmluZ0tleXMoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19BbGxPYmpGb3JtS2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1LZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqSW50TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpJbnRMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZsb2F0TGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpGbG9hdExpc3RLZXlzKE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfQWxsT2JqU3RyaW5nTGlzdEtleXMgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19BbGxPYmpTdHJpbmdMaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0FsbE9iakZvcm1MaXN0S2V5cyhPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRPYmplY3RDb3VudCgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ09iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtT2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19HZXRJbnRMaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0TGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdE9iamVjdENvdW50KCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUxpc3RPYmplY3RDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZvcm1MaXN0T2JqZWN0Q291bnQoKTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0T2JqZWN0KGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ09iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybU9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybU9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdE9iamVjdCA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRMaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0xpc3RPYmplY3QoaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0T2JqZWN0ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdE9iamVjdChpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0RmxvYXRLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldFN0cmluZ0tleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1LZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5c0NvdW50KE9iaktleSk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uIChPYmpLZXkpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEludExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQgPSBmdW5jdGlvbiAoT2JqS2V5KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGbG9hdExpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRTdHJpbmdMaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleXNDb3VudChPYmpLZXkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZvcm1MaXN0S2V5c0NvdW50ID0gZnVuY3Rpb24gKE9iaktleSkgeyByZXR1cm4gc24uZGVidWdfR2V0Rm9ybUxpc3RLZXlzQ291bnQoT2JqS2V5KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRJbnRLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEZsb2F0S2V5ID0gZnVuY3Rpb24gKE9iaktleSwgaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0dldEZsb2F0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0tleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRTdHJpbmdLZXkoT2JqS2V5LCBpbmRleCk7IH07XHJcbmV4cG9ydCB2YXIgZGVidWdfR2V0Rm9ybUtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtS2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldEludExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0SW50TGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGbG9hdExpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0RmxvYXRMaXN0S2V5KE9iaktleSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX0dldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoT2JqS2V5LCBpbmRleCkgeyByZXR1cm4gc24uZGVidWdfR2V0U3RyaW5nTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBkZWJ1Z19HZXRGb3JtTGlzdEtleSA9IGZ1bmN0aW9uIChPYmpLZXksIGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19HZXRGb3JtTGlzdEtleShPYmpLZXksIGluZGV4KTsgfTtcclxuLyoqIFN0b3JhZ2UgZnVuY3Rpb25zIC0gc2VwYXJhdGUgZmlsZS4gVGhlc2UgYXJlIHNoYXJlZCBpbiBhbGwgc2F2ZSBnYW1lcy4gVmFsdWVzIGFyZSBsb2FkZWQgYW5kIHNhdmVkXHJcbiAgIHdoZW4gc2F2ZWdhbWUgaXMgbG9hZGVkIG9yIHNhdmVkLlxyXG5cclxuICAgREVQUkVDQVRFRCB2Mi45OiBSZXBsYWNlZCBieSBKc29uVXRpbCBmdW5jdGlvbnMuIEV4aXN0aW5nIGZ1bmN0aW9ucyBoZXJlIGhhdmUgYmVlbiBwcm94aWVkIHRvIGEgc2hhcmVkXHJcbiAgIGpzb24gZmlsZSB0byBtYWludGFpbiBjb21wYXRpYmlsaXR5LiAqL1xyXG5leHBvcnQgdmFyIEZpbGVTZXRJbnRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEludFZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldEZsb2F0VmFsdWUoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTZXRTdHJpbmdWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVNldFN0cmluZ1ZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU2V0Rm9ybVZhbHVlKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlQWRqdXN0SW50VmFsdWUoS2V5TmFtZSwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlQWRqdXN0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVBZGp1c3RGbG9hdFZhbHVlKEtleU5hbWUsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZVVuc2V0SW50VmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVVuc2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGbG9hdFZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldFN0cmluZ1ZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVVbnNldFN0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVVbnNldEZvcm1WYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlVW5zZXRGb3JtVmFsdWUoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUhhc0ludFZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVIYXNJbnRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzRmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSGFzRmxvYXRWYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSGFzU3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc1N0cmluZ1ZhbHVlKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVIYXNGb3JtVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUhhc0Zvcm1WYWx1ZShLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlR2V0SW50VmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRJbnRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0RmxvYXRWYWx1ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBtaXNzaW5nKSB7XHJcbiAgICBpZiAobWlzc2luZyA9PT0gdm9pZCAwKSB7IG1pc3NpbmcgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0RmxvYXRWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0U3RyaW5nVmFsdWUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgbWlzc2luZykge1xyXG4gICAgaWYgKG1pc3NpbmcgPT09IHZvaWQgMCkgeyBtaXNzaW5nID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVHZXRTdHJpbmdWYWx1ZShLZXlOYW1lLCBtaXNzaW5nKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlR2V0Rm9ybVZhbHVlID0gZnVuY3Rpb24gKEtleU5hbWUsIG1pc3NpbmcpIHtcclxuICAgIGlmIChtaXNzaW5nID09PSB2b2lkIDApIHsgbWlzc2luZyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5GaWxlR2V0Rm9ybVZhbHVlKEtleU5hbWUsIG1pc3NpbmcpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEFkZChLZXlOYW1lLCB2YWx1ZSwgYWxsb3dEdXBsaWNhdGUpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0QWRkID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxvd0R1cGxpY2F0ZSkge1xyXG4gICAgaWYgKGFsbG93RHVwbGljYXRlID09PSB2b2lkIDApIHsgYWxsb3dEdXBsaWNhdGUgPSB0cnVlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RBZGQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKSB7XHJcbiAgICBpZiAoYWxsb3dEdXBsaWNhdGUgPT09IHZvaWQgMCkgeyBhbGxvd0R1cGxpY2F0ZSA9IHRydWU7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RBZGQoS2V5TmFtZSwgdmFsdWUsIGFsbG93RHVwbGljYXRlKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdEFkanVzdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgYW1vdW50KSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEFkanVzdChLZXlOYW1lLCBpbmRleCwgYW1vdW50KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0QWRqdXN0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCBhbW91bnQpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RBZGp1c3QoS2V5TmFtZSwgaW5kZXgsIGFtb3VudCk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RSZW1vdmUgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcykge1xyXG4gICAgaWYgKGFsbEluc3RhbmNlcyA9PT0gdm9pZCAwKSB7IGFsbEluc3RhbmNlcyA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRmxvYXRMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0UmVtb3ZlID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpIHtcclxuICAgIGlmIChhbGxJbnN0YW5jZXMgPT09IHZvaWQgMCkgeyBhbGxJbnN0YW5jZXMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVtb3ZlKEtleU5hbWUsIHZhbHVlLCBhbGxJbnN0YW5jZXMpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlbW92ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSwgYWxsSW5zdGFuY2VzKSB7XHJcbiAgICBpZiAoYWxsSW5zdGFuY2VzID09PSB2b2lkIDApIHsgYWxsSW5zdGFuY2VzID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5GaWxlRm9ybUxpc3RSZW1vdmUoS2V5TmFtZSwgdmFsdWUsIGFsbEluc3RhbmNlcyk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RHZXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0R2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RHZXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEdldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0R2V0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTZXQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFNldCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0U2V0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2V0KEtleU5hbWUsIGluZGV4LCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0Q2xlYXIoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RDbGVhciA9IGZ1bmN0aW9uIChLZXlOYW1lKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdENsZWFyID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdENsZWFyKEtleU5hbWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVtb3ZlQXQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlbW92ZUF0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdFJlbW92ZUF0KEtleU5hbWUsIGluZGV4KTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RSZW1vdmVBdCA9IGZ1bmN0aW9uIChLZXlOYW1lLCBpbmRleCkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0UmVtb3ZlQXQoS2V5TmFtZSwgaW5kZXgpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUludExpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRmxvYXRMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEluc2VydChLZXlOYW1lLCBpbmRleCwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0SW5zZXJ0ID0gZnVuY3Rpb24gKEtleU5hbWUsIGluZGV4LCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZVN0cmluZ0xpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RJbnNlcnQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RJbnNlcnQoS2V5TmFtZSwgaW5kZXgsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVJbnRMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3VudChLZXlOYW1lKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdENvdW50ID0gZnVuY3Rpb24gKEtleU5hbWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q291bnQgPSBmdW5jdGlvbiAoS2V5TmFtZSkgeyByZXR1cm4gc24uRmlsZUZvcm1MaXN0Q291bnQoS2V5TmFtZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlRmxvYXRMaXN0RmluZChLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RGaW5kID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdEZpbmQgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEZpbmQoS2V5TmFtZSwgdmFsdWUpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0SGFzID0gZnVuY3Rpb24gKEtleU5hbWUsIHZhbHVlKSB7IHJldHVybiBzbi5GaWxlSW50TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdEhhcyA9IGZ1bmN0aW9uIChLZXlOYW1lLCB2YWx1ZSkgeyByZXR1cm4gc24uRmlsZUZsb2F0TGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0SGFzKEtleU5hbWUsIHZhbHVlKTsgfTtcclxuZXhwb3J0IHZhciBGaWxlRm9ybUxpc3RIYXMgPSBmdW5jdGlvbiAoS2V5TmFtZSwgdmFsdWUpIHsgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdEhhcyhLZXlOYW1lLCB2YWx1ZSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUludExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVJbnRMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RTbGljZShLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCk7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZVN0cmluZ0xpc3RTbGljZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBzbGljZSwgc3RhcnRJbmRleCkge1xyXG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFNsaWNlID0gZnVuY3Rpb24gKEtleU5hbWUsIHNsaWNlLCBzdGFydEluZGV4KSB7XHJcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZvcm1MaXN0U2xpY2UoS2V5TmFtZSwgc2xpY2UsIHN0YXJ0SW5kZXgpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVJbnRMaXN0UmVzaXplID0gZnVuY3Rpb24gKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpIHtcclxuICAgIGlmIChmaWxsZXIgPT09IHZvaWQgMCkgeyBmaWxsZXIgPSAwOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUludExpc3RSZXNpemUoS2V5TmFtZSwgdG9MZW5ndGgsIGZpbGxlcik7XHJcbn07XHJcbmV4cG9ydCB2YXIgRmlsZUZsb2F0TGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uRmlsZUZsb2F0TGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlU3RyaW5nTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVTdHJpbmdMaXN0UmVzaXplKEtleU5hbWUsIHRvTGVuZ3RoLCBmaWxsZXIpO1xyXG59O1xyXG5leHBvcnQgdmFyIEZpbGVGb3JtTGlzdFJlc2l6ZSA9IGZ1bmN0aW9uIChLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKSB7XHJcbiAgICBpZiAoZmlsbGVyID09PSB2b2lkIDApIHsgZmlsbGVyID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkZpbGVGb3JtTGlzdFJlc2l6ZShLZXlOYW1lLCB0b0xlbmd0aCwgZmlsbGVyKTtcclxufTtcclxuZXhwb3J0IHZhciBGaWxlSW50TGlzdENvcHkgPSBmdW5jdGlvbiAoS2V5TmFtZSwgY29weSkgeyByZXR1cm4gc24uRmlsZUludExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVGbG9hdExpc3RDb3B5ID0gZnVuY3Rpb24gKEtleU5hbWUsIGNvcHkpIHsgcmV0dXJuIHNuLkZpbGVGbG9hdExpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIEZpbGVTdHJpbmdMaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlU3RyaW5nTGlzdENvcHkoS2V5TmFtZSwgY29weSk7IH07XHJcbmV4cG9ydCB2YXIgRmlsZUZvcm1MaXN0Q29weSA9IGZ1bmN0aW9uIChLZXlOYW1lLCBjb3B5KSB7IHJldHVybiBzbi5GaWxlRm9ybUxpc3RDb3B5KEtleU5hbWUsIGNvcHkpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NhdmVGaWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfU2F2ZUZpbGUoKTsgfTtcclxuLyoqIEN1cnJlbnRseSBubyBsb25nZXIgaW1wbGVtZW50ZWQsIHVua25vd24gaWYvd2hlbiB0aGV5IHdpbGwgcmV0dXJuLiAqL1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRLZXlzQ291bnQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0tleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0SW50TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRGbG9hdExpc3RLZXlzQ291bnQoKTsgfTtcclxuMDtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlR2V0U3RyaW5nTGlzdEtleXNDb3VudCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5c0NvdW50KCk7IH07XHJcbjA7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEludEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEludEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0RmxvYXRLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdLZXkoaW5kZXgpOyB9O1xyXG5cIlwiO1xyXG5leHBvcnQgdmFyIGRlYnVnX0ZpbGVHZXRJbnRMaXN0S2V5ID0gZnVuY3Rpb24gKGluZGV4KSB7IHJldHVybiBzbi5kZWJ1Z19GaWxlR2V0SW50TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleSA9IGZ1bmN0aW9uIChpbmRleCkgeyByZXR1cm4gc24uZGVidWdfRmlsZUdldEZsb2F0TGlzdEtleShpbmRleCk7IH07XHJcblwiXCI7XHJcbmV4cG9ydCB2YXIgZGVidWdfRmlsZUdldFN0cmluZ0xpc3RLZXkgPSBmdW5jdGlvbiAoaW5kZXgpIHsgcmV0dXJuIHNuLmRlYnVnX0ZpbGVHZXRTdHJpbmdMaXN0S2V5KGluZGV4KTsgfTtcclxuXCJcIjtcclxuZXhwb3J0IHZhciBkZWJ1Z19GaWxlRGVsZXRlQWxsVmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uZGVidWdfRmlsZURlbGV0ZUFsbFZhbHVlcygpOyB9O1xyXG5leHBvcnQgdmFyIGRlYnVnX1NldERlYnVnTW9kZSA9IGZ1bmN0aW9uIChlbmFibGVkKSB7IHJldHVybiBzbi5kZWJ1Z19TZXREZWJ1Z01vZGUoZW5hYmxlZCk7IH07XHJcbmV4cG9ydCB2YXIgSW1wb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMpIHtcclxuICAgIGlmIChyZXN0cmljdEtleSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0S2V5ID0gXCJcIjsgfVxyXG4gICAgaWYgKHJlc3RyaWN0VHlwZSA9PT0gdm9pZCAwKSB7IHJlc3RyaWN0VHlwZSA9IC0xOyB9XHJcbiAgICBpZiAocmVzdHJpY3RGb3JtID09PSB2b2lkIDApIHsgcmVzdHJpY3RGb3JtID0gbnVsbDsgfVxyXG4gICAgaWYgKHJlc3RyaWN0R2xvYmFsID09PSB2b2lkIDApIHsgcmVzdHJpY3RHbG9iYWwgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGtleUNvbnRhaW5zID09PSB2b2lkIDApIHsga2V5Q29udGFpbnMgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkltcG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zKTtcclxufTtcclxuZmFsc2U7XHJcbmV4cG9ydCB2YXIgRXhwb3J0RmlsZSA9IGZ1bmN0aW9uIChmaWxlTmFtZSwgcmVzdHJpY3RLZXksIHJlc3RyaWN0VHlwZSwgcmVzdHJpY3RGb3JtLCByZXN0cmljdEdsb2JhbCwga2V5Q29udGFpbnMsIGFwcGVuZCkge1xyXG4gICAgaWYgKHJlc3RyaWN0S2V5ID09PSB2b2lkIDApIHsgcmVzdHJpY3RLZXkgPSBcIlwiOyB9XHJcbiAgICBpZiAocmVzdHJpY3RUeXBlID09PSB2b2lkIDApIHsgcmVzdHJpY3RUeXBlID0gLTE7IH1cclxuICAgIGlmIChyZXN0cmljdEZvcm0gPT09IHZvaWQgMCkgeyByZXN0cmljdEZvcm0gPSBudWxsOyB9XHJcbiAgICBpZiAocmVzdHJpY3RHbG9iYWwgPT09IHZvaWQgMCkgeyByZXN0cmljdEdsb2JhbCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoa2V5Q29udGFpbnMgPT09IHZvaWQgMCkgeyBrZXlDb250YWlucyA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYXBwZW5kID09PSB2b2lkIDApIHsgYXBwZW5kID0gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHNuLkV4cG9ydEZpbGUoZmlsZU5hbWUsIHJlc3RyaWN0S2V5LCByZXN0cmljdFR5cGUsIHJlc3RyaWN0Rm9ybSwgcmVzdHJpY3RHbG9iYWwsIGtleUNvbnRhaW5zLCBhcHBlbmQpO1xyXG59O1xyXG5mYWxzZTtcclxuIiwiXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiXHJcbmNvbnN0IE1DTSA9IHNwLk1DTVxyXG5cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUpIHtyZXR1cm4gTUNNLkdldE1vZFNldHRpbmdCb29sKG1vZG5hbWUsIHNldHRpbmdfbmFtZSl9XHJcbmV4cG9ydCB2YXIgR2V0TW9kU2V0dGluZ0ludCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUpIHtyZXR1cm4gTUNNLkdldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgc2V0dGluZ19uYW1lKX1cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nRmxvYXQgPSBmdW5jdGlvbiAobW9kbmFtZSwgc2V0dGluZ19uYW1lKSB7cmV0dXJuIE1DTS5HZXRNb2RTZXR0aW5nRmxvYXQobW9kbmFtZSwgc2V0dGluZ19uYW1lKX1cclxuZXhwb3J0IHZhciBHZXRNb2RTZXR0aW5nU3RyaW5nID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSkge3JldHVybiBNQ00uR2V0TW9kU2V0dGluZ1N0cmluZyhtb2RuYW1lLCBzZXR0aW5nX25hbWUpfVxyXG5cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKSB7cmV0dXJuIE1DTS5TZXRNb2RTZXR0aW5nQm9vbChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX1cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nSW50ID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdJbnQobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSl9XHJcbmV4cG9ydCB2YXIgU2V0TW9kU2V0dGluZ0Zsb2F0ID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdGbG9hdChtb2RuYW1lLCBzZXR0aW5nX25hbWUsIHZhbHVlKX1cclxuZXhwb3J0IHZhciBTZXRNb2RTZXR0aW5nU3RyaW5nID0gZnVuY3Rpb24gKG1vZG5hbWUsIHNldHRpbmdfbmFtZSwgdmFsdWUpIHtyZXR1cm4gTUNNLlNldE1vZFNldHRpbmdTdHJpbmcobW9kbmFtZSwgc2V0dGluZ19uYW1lLCB2YWx1ZSl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==