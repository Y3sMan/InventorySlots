/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModEvent": () => (/* binding */ ModEvent)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var ModEvent = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.ModEvent;


/***/ }),
/* 3 */
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
/* 4 */
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modevent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
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





//__________________________ Variable Setup______________________________________________
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
var x = 2500;
var y = 1000;
var white = [1, 1, 1, 1];
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
var inventoryCurrentHighlighted = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText(1500, y, 'currentItem', [1, 1, 1, 0], undefined, 'InventorySlots');
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
var itemCategoryVolumes = {
    // weapons
    '    RABInv_ItemType_WeaponArrow ': 1,
    '    RABInv_ItemType_WeaponArrow_Equipped ': 1,
    '    RABInv_ItemType_WeaponBolt ': 0.5,
    '    RABInv_ItemType_WeaponBolt_Equipped ': 0.5,
    '    RABInv_ItemType_Weapon1H ': 5,
    '    RABInv_ItemType_Weapon1H_Equipped ': 5,
    '    RABInv_ItemType_Weapon2H ': 10,
    '    RABInv_ItemType_Weapon2H_Equipped ': 10,
    '    RABInv_ItemType_WeaponDagger ': 2,
    '    RABInv_ItemType_WeaponDagger_Equipped ': 2,
    '    RABInv_ItemType_WeaponCrossBow ': 8,
    '    RABInv_ItemType_WeaponCrossBow_Equipped ': 8,
    '    RABInv_ItemType_WeaponBow ': 8,
    '    RABInv_ItemType_WeaponBow_Equipped ': 8,
    // armors
    '    RABInv_ItemType_ArmorShield ': 9,
    '    RABInv_ItemType_ArmorShield_Equipped ': 9,
    '    RABInv_ItemType_ArmorCuirass ': 15,
    '    RABInv_ItemType_ArmorCuirass_Equipped ': 15,
    '    RABInv_ItemType_ArmorBoots ': 6,
    '    RABInv_ItemType_ArmorBoots_Equipped ': 6,
    '    RABInv_ItemType_ArmorHelmet ': 6,
    '    RABInv_ItemType_ArmorHelmet_Equipped ': 6,
    '    RABInv_ItemType_ArmorGauntlets ': 4,
    '    RABInv_ItemType_ArmorGauntlets_Equipped ': 4,
    '    RABInv_ItemType_Clothes ': 6,
    '    RABInv_ItemType_Clothes_Equipped ': 6,
    '    RABInv_ItemType_Jewelry ': 3,
    '    RABInv_ItemType_Jewelry_Equipped ': 3,
    // misc
    '    RABInv_ItemType_BookScroll ': 2,
    '    RABInv_ItemType_Food ': 1,
    '    RABInv_ItemType_Potion ': 1,
    '    RABInv_ItemType_Drink ': 2,
    '    RABInv_ItemType_Ingredient ': 0.1,
    '    RABInv_ItemType_Gem ': 1,
    '    RABInv_ItemType_Soulgem ': 1,
    '    RABInv_ItemType_Lockpick ': 0.5,
    '    RABInv_ItemType_MiscLarge ': 5,
    '    RABInv_ItemType_MiscMedium ': 3,
    '    RABInv_ItemType_MiscSmall ': 0.1,
    '    RABInv_ItemType_Gold ': 0.0,
    '    RABInv_ItemType_OreIngot ': 2,
    '    RABInv_ItemType_HidePelt ': 1
};
var keywordToCategory = {
    // weapons
    448818: 6 /* RABInv_ItemType_Weapon2H */,
    124693: 12 /* RABInv_ItemType_WeaponBow */,
    124691: 4 /* RABInv_ItemType_Weapon1H */,
    448817: 6 /* RABInv_ItemType_Weapon2H */,
    124692: 4 /* RABInv_ItemType_Weapon1H */,
    124694: 4 /* RABInv_ItemType_Weapon1H */,
    124689: 4 /* RABInv_ItemType_Weapon1H */,
    124690: 4 /* RABInv_ItemType_Weapon1H */,
    448816: 6 /* RABInv_ItemType_Weapon2H */,
    595943: 0 /* RABInv_ItemType_WeaponArrow */,
    // armors
    442605: 18 /* RABInv_ItemType_ArmorBoots */,
    441320: 24 /* RABInv_ItemType_Clothes */,
    442604: 16 /* RABInv_ItemType_ArmorCuirass */,
    442607: 22 /* RABInv_ItemType_ArmorGauntlets */,
    442606: 20 /* RABInv_ItemType_ArmorHelmet */,
    441321: 26 /* RABInv_ItemType_Jewelry */,
    615858: 14 /* RABInv_ItemType_ArmorShield */,
    // Miscs
    595178: 41 /* RABInv_ItemType_HidePelt */,
    595179: 29 /* RABInv_ItemType_Food */,
    595177: 38 /* RABInv_ItemType_MiscSmall */,
    781527: 37 /* RABInv_ItemType_MiscMedium */,
    577002: 29 /* RABInv_ItemType_Food */,
    659030: 29 /* RABInv_ItemType_Food */,
    595181: 33 /* RABInv_ItemType_Gem */,
    577003: 32 /* RABInv_ItemType_Ingredient */,
    588122: 26 /* RABInv_ItemType_Jewelry */,
    595180: 40 /* RABInv_ItemType_OreIngot */,
    577005: 30 /* RABInv_ItemType_Potion */,
    577004: 30 /* RABInv_ItemType_Potion */,
    1006768: 28 /* RABInv_ItemType_BookScroll */,
    659031: 28 /* RABInv_ItemType_BookScroll */,
    604067: 34 /* RABInv_ItemType_Soulgem */,
    604069: 28 /* RABInv_ItemType_BookScroll */,
    604066: 28 /* RABInv_ItemType_BookScroll */,
    604068: 4 /* RABInv_ItemType_Weapon1H */,
    595182: 38 /* RABInv_ItemType_MiscSmall */,
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
        return 39 /* RABInv_ItemType_Gold */;
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
        this.widget = new _modules_SPTextUtils_spTextUtils__WEBPACK_IMPORTED_MODULE_2__.spText(x, y, this.name, white, undefined, 'InventorySlots');
        this.items = [];
        BaseSlots.push(this);
    }
    Slot.prototype.getFilled = function () {
        return this.currentSize;
    };
    Slot.prototype.getFilledProportion = function () {
        return "".concat(this.name, ":   ").concat(this.currentSize.toFixed(2), " / ").concat(this.baseSize);
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
    return Slot;
}());
var Misc_slot = new Slot('Misc', 200, x, y);
var WeaponSheaths_slot = new Slot('Weapons', 20, x, y + 20);
var Ammo_slot = new Slot('Quiver', 60, x, y + 40);
var Valuables_slot = new Slot('Valuables', 50, x, y + 60);
var Bottles_slot = new Slot('Bottles', 10, x, y + 80);
var Equipped_slot = new Slot('Equipped Load', 50, x, y + 100);
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
    'RABInv_ItemType_Weapon1H_Equipped': Equipped_slot,
    'RABInv_ItemType_Weapon2H': WeaponSheaths_slot,
    'RABInv_ItemType_Weapon2H_Equipped': Equipped_slot,
    'RABInv_ItemType_WeaponDagger': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponDagger_Equipped': Equipped_slot,
    'RABInv_ItemType_WeaponCrossBow': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponCrossBow_Equipped': Equipped_slot,
    'RABInv_ItemType_WeaponBow': WeaponSheaths_slot,
    'RABInv_ItemType_WeaponBow_Equipped': Equipped_slot,
    // armors
    'RABInv_ItemType_ArmorShield': Misc_slot,
    'RABInv_ItemType_ArmorShield_Equipped': Equipped_slot,
    'RABInv_ItemType_ArmorCuirass': Misc_slot,
    'RABInv_ItemType_ArmorCuirass_Equipped': Equipped_slot,
    'RABInv_ItemType_ArmorBoots': Misc_slot,
    'RABInv_ItemType_ArmorBoots_Equipped': Equipped_slot,
    'RABInv_ItemType_ArmorHelmet': Misc_slot,
    'RABInv_ItemType_ArmorHelmet_Equipped': Equipped_slot,
    'RABInv_ItemType_ArmorGauntlets': Misc_slot,
    'RABInv_ItemType_ArmorGauntlets_Equipped': Equipped_slot,
    'RABInv_ItemType_Clothes': Misc_slot,
    'RABInv_ItemType_Clothes_Equipped': Equipped_slot,
    'RABInv_ItemType_Jewelry': Valuables_slot,
    'RABInv_ItemType_Jewelry_Equipped': Equipped_slot,
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
        }
        else {
            stopFlag = true;
        }
    });
    // if (stopFlag){return}
    // else {slot.currentSize -= vol}
    // oldSlot.currentSize -= vol
    slot.currentSize -= vol;
    // }
    Slot.updateWidgets();
}
function swapBetweenSlots(oldSlot, newSlot, option, item, num) {
    if (option == 'unequip') {
        removeItemfromSlot(item, num);
        var oldCat = determineItemCategory(item);
        var newCat = oldCat - 1;
        var vol = Object.values(itemCategoryVolumes)[newCat];
    }
    removeItemfromSlot(item, num, Equipped_slot);
    addItemtoSlot(item, num);
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
    var slotMax = slot.baseSize;
    var slotCurrent = +(slot.currentSize).toFixed(2);
    Slot.updateWidgets();
    inventoryCurrentHighlighted.setAlpha(1);
    inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
    slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (+").concat(vol, ") /").concat(slotMax));
    slot.widget.setColor([0, 1, 0, 1]);
}
var GetItemHighlighted = function (item) { return __awaiter(void 0, void 0, void 0, function () {
    var tuple, vol, slot, slotMax, slotCurrent, isInventory, isContainer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Utility.wait(0.001)];
            case 1:
                _a.sent();
                inventoryCurrentHighlighted.setAlpha(1);
                tuple = solveIncomingItemInfo(item);
                vol = +(tuple[0]).toFixed(2);
                slot = tuple[1];
                if (!vol || !slot) {
                    return [2 /*return*/];
                }
                slotMax = slot.baseSize;
                slotCurrent = +(slot.currentSize).toFixed(2);
                Slot.updateWidgets();
                isInventory = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('InventoryMenu');
                isContainer = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.isMenuOpen('ContainerMenu');
                inventoryCurrentHighlighted.setText("Volume: ".concat(vol, "\nSlot: ").concat(slot.name));
                // if (isInventory){
                //     // slot.widget.setText(`${slotCurrent} (+${vol}) /${slotMax}`)
                //     inventoryCurrentHighlighted.setText(`Volume: ${vol}\nSlot: ${slot.name}`)
                // }
                // else if (isContainer) {
                slot.widget.setColor([0, 1, 0, 1]);
                if (isViewingContainer()) {
                    // slot.widget.setColor([1,0.1,.1,1])
                    // slot.widget.setText(`${slot.name}:  ${slotCurrent} (+${vol}) /${slotMax}`)
                    if (isInventory) {
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent + vol, " (").concat(slotCurrent + vol, ") /").concat(slotMax));
                    }
                    else if (isContainer) {
                        slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent + vol, " (").concat(slotCurrent + vol, ") /").concat(slotMax));
                    }
                }
                else if (!isViewingContainer()) {
                    if (slotCurrent + vol > slotMax) {
                        slot.widget.setColor([1, 0, 0, 1]);
                    }
                    slot.widget.setText("".concat(slot.name, ":  ").concat(slotCurrent, " (-").concat(vol, ") /").concat(slotMax));
                }
                // }
                skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.invokeBool("HUD Menu", "_global.skyui.components.list.ListLayout.Refresh", true);
                return [2 /*return*/];
        }
    });
}); };
function DropItem(itemId, num, ref) {
    var handle = _modevent__WEBPACK_IMPORTED_MODULE_1__.ModEvent.Create('YM_RAB_SLOTS_DropRequest');
    _modevent__WEBPACK_IMPORTED_MODULE_1__.ModEvent.PushInt(handle, itemId);
    _modevent__WEBPACK_IMPORTED_MODULE_1__.ModEvent.PushInt(handle, num);
    _modevent__WEBPACK_IMPORTED_MODULE_1__.ModEvent.Send(handle);
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
    (_a = pl()) === null || _a === void 0 ? void 0 : _a.removeItem(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(itemId), 1, true, oldContainer);
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
//____________________________________EVENTS______________________________________________
var eventBlacklist = ['YM_OnSelect_selectPress', 'YM_OnHighlight_selectHighlight'];
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('modEvent', function (event) {
    if (!eventBlacklist.includes(event.eventName)) {
        return;
    }
    // if (event.eventName == 'YM_OnSelect_selectPress' && !Ui.isMenuOpen('InventoryMenu')) {	GetItemSelected()}
    // if (event.eventName.includes( 'selectHighlight' )) { GetItemHighlighted()}
    // printConsole(Game.getFormEx( Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") )?.getName())
    // Ui.invokeBool("HUD Menu", "_global.onItemHighlightChange", true)
    // let path: string = '_global.'
    // let endPath: string = 'containerMenu.isViewingContainer'
    // printConsole(Ui.getInt('ContainerMenu', `${path + endPath}`) )
    // printConsole(Ui.getInt('ContainerMenu', `${path}BaseInstance.${endPath}`) )
    // printConsole(Ui.getInt('ContainerMenu', `_root.HUDMovieBaseInstance.isViewingContainer`) )
    // printConsole(Ui.invokeBool('HUD Menu', `_global.skyui.components.list.ListLayout.Refresh`, true) )
    // Ui.invokeBool("ContainerMenu", "_global.ItemMenus.InventoryLists.showPanel", true)
    // Ui.invokeFloat("HUD Menu", "_root.HUDMovieBaseInstance.SetExhaustionPenaltyMeter", )
});
var handle;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuOpen', function (event) {
    var lastitemName = -2;
    if (event.name == 'InventoryMenu') {
        inventoryCurrentHighlighted.setAlpha(1);
        Slot.updateWidgets();
        // on('mouseMove', () => {
        //     printConsole(Game.getFormEx( Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") )?.getName())
        // });
        handle = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
            var _a;
            var item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
            if (!item) {
                return;
            }
            if (item != lastitemName) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)((_a = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getFormEx(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("InventoryMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId"))) === null || _a === void 0 ? void 0 : _a.getName());
                GetItemHighlighted(item);
                lastitemName = item;
            }
        });
    }
    else if (event.name == 'ContainerMenu') {
        // printConsole(Game.getFormEx(Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId"))?.getName())
        inventoryCurrentHighlighted.setAlpha(1);
        Slot.updateWidgets();
        handle = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('update', function () {
            var item = skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId");
            if (!item) {
                return;
            }
            if (item != lastitemName) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.printConsole)(isViewingContainer());
                // printConsole(Game.getFormEx( Ui.getInt("ContainerMenu", "_root.Menu_mc.inventoryLists.itemList.selectedEntry.formId") )?.getName())
                GetItemHighlighted(item);
                lastitemName = item;
            }
        });
    }
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('menuClose', function (event) {
    if (event.name == 'InventoryMenu' || event.name == 'ContainerMenu') {
        inventoryCurrentHighlighted.setAlpha(0);
        Slot.fadeAllOut();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.unsubscribe)(handle);
    }
});
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.once)('update', function () {
    var allItems = (0,_skyrim_platform_po3_papyrus_extender_PO3_SKSEFunctions__WEBPACK_IMPORTED_MODULE_3__.AddAllItemsToArray)(pl(), false, false, true);
    allItems.forEach(function (f) {
        var _a;
        addItemtoSlot(f.getFormID(), (_a = pl()) === null || _a === void 0 ? void 0 : _a.getItemCount(f));
    });
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
    var slot = info[1];
    if (event.oldContainer) {
        oldId = event.oldContainer.getFormID();
    }
    if (event.newContainer) {
        newId = event.newContainer.getFormID();
    }
    // if (ignoreFlag){ignoreFlag = false; return;}
    // Item added to player's inventory
    if (newId == 20 && !ignoreFlag) {
        // the slot is filled
        if (slot.currentSize + volume > slot.baseSize) {
            // if the item was picked up from the world
            if (!event.oldContainer) {
                DropItem(itemId, num, event.oldContainer);
                // printConsole('!event.oldContainer')
            }
            // if the item was taken from a container
            else {
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
});
var isFadein = false;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('crosshairRefChanged', function (event) {
    var _a, _b, _c, _d, _e, _f;
    var id = (_b = (_a = event.reference) === null || _a === void 0 ? void 0 : _a.getBaseObject()) === null || _b === void 0 ? void 0 : _b.getFormID();
    var typeBlacklist = [62 /* Character */, 24 /* Activator */, 29 /* Door */, 33 /* Apparatus */, 28 /* Container */, 43 /* NPC */];
    if (((_d = (_c = event.reference) === null || _c === void 0 ? void 0 : _c.getBaseObject()) === null || _d === void 0 ? void 0 : _d.isPlayable()) && !typeBlacklist.includes((_f = (_e = event.reference) === null || _e === void 0 ? void 0 : _e.getBaseObject()) === null || _f === void 0 ? void 0 : _f.getType())) {
        isFadein = true;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBZ0IsNERBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Qsa0RBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFXO0FBQ25CO0FBQ0EsQ0FBQztBQUNELG9EQUFJO0FBQ0osbUJBQW1CLDJHQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0Esa0RBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9CQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxrREFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxrREFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQ0FBZ0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELGtEQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGdDQUFnQztBQUM5RTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ludmVudG9yeVNsb3RzL2V4dGVybmFsIHZhciBbXCJza3lyaW1QbGF0Zm9ybVwiXSIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL3NyYy9tb2RldmVudC50cyIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uLi9tb2R1bGVzL1NQVGV4dFV0aWxzL3NwVGV4dFV0aWxzLnRzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzLy4vbm9kZV9tb2R1bGVzL0Bza3lyaW0tcGxhdGZvcm0vcG8zLXBhcHlydXMtZXh0ZW5kZXIvUE8zX1NLU0VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ludmVudG9yeVNsb3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vSW52ZW50b3J5U2xvdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9JbnZlbnRvcnlTbG90cy8uL3NyYy9JbnZlbnRvcnlTbG90cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHNreXJpbVBsYXRmb3JtOyIsImltcG9ydCAqIGFzIHNwIGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxuZXhwb3J0IHZhciBNb2RFdmVudCA9IHNwLk1vZEV2ZW50O1xyXG4iLCJpbXBvcnQgeyBzdG9yYWdlLCBjcmVhdGVUZXh0LCBkZXN0cm95QWxsVGV4dHMsIGRlc3Ryb3lUZXh0LCBnZXRUZXh0Q29sb3IsIGdldFRleHRQb3MsIGdldFRleHRTdHJpbmcsIHNldFRleHRDb2xvciwgc2V0VGV4dFBvcywgc2V0VGV4dFN0cmluZyB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxudmFyIGtleWtuYW1lID0gJy5zcFRleHRzLic7XHJcbnZhciBjb2xsZWN0aW9uS2V5ID0ga2V5a25hbWUgKyAnY29sbGVjdGlvbi4nO1xyXG52YXIgc3BUZXh0c0NvbGxlY3Rpb24gPSBuZXcgTWFwKCk7XHJcbnN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbnZhciBzcFRleHQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBzcFRleHQoeFBvcywgeVBvcywgdGV4dCwgY29sLCBzVHlwZSwgc01vZE5hbWUpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gY3JlYXRlVGV4dCh4UG9zLCB5UG9zLCB0ZXh0LCBbY29sWzBdLCBjb2xbMV0sIGNvbFsyXSwgY29sWzNdXSk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gc1R5cGUgPyBzVHlwZSA6IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgdGhpcy5vd25pbmdNb2QgPSBzTW9kTmFtZSA/IHNNb2ROYW1lIDogXCJ1bmRlZmluZWRcIjtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5zZXQodGhpcy5pbmRleCwgdGhpcyk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRleHRTdHJpbmcodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duaW5nTW9kO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IGdldFRleHRQb3ModGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRUZXh0Q29sb3IodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0VGV4dCA9IGZ1bmN0aW9uICh0eHQpIHtcclxuICAgICAgICBzZXRUZXh0U3RyaW5nKHRoaXMuaW5kZXgsIHR4dCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvciA9IGZ1bmN0aW9uIChyZ2JhKSB7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIHJnYmEpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeFBvcywgeVBvcykge1xyXG4gICAgICAgIHNldFRleHRQb3ModGhpcy5pbmRleCwgeFBvcywgeVBvcyk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdGhpcy5vd25pbmdNb2QgPSBtb2Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvclIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sLCBjb2xvclsxXSwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckcgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbCwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2wsIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGFscGhhXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5kZXN0cm95VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUodGhpcy5pbmRleCk7XHJcbiAgICAgICAgZGVzdHJveVRleHQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgc3RvcmFnZVtjb2xsZWN0aW9uS2V5XSA9IHNwVGV4dHNDb2xsZWN0aW9uO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsVGV4dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uY2xlYXIoKTtcclxuICAgICAgICBkZXN0cm95QWxsVGV4dHMoKTtcclxuICAgICAgICBzdG9yYWdlW2NvbGxlY3Rpb25LZXldID0gc3BUZXh0c0NvbGxlY3Rpb247XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmNvdW50TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgdmFyIGMgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIGMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIF9rZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpXHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5jb3VudFR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIGNudCA9IDA7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KVxyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveUFsbE1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLm93bmluZ01vZCA9PSBtb2QpIHtcclxuICAgICAgICAgICAgICAgIGRlc3Ryb3lUZXh0KGtleSk7XHJcbiAgICAgICAgICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2VbY29sbGVjdGlvbktleV0gPSBzcFRleHRzQ29sbGVjdGlvbjtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGVzdHJveUFsbFR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICBkZXN0cm95VGV4dChrZXkpO1xyXG4gICAgICAgICAgICAgICAgdG1wQ29sbC5kZWxldGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRpc2FibGVNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZGlzYWJsZVR5cGVUZXh0cyA9IGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgdmFyIHRtcENvbGwgPSBzdG9yYWdlW2NvbGxlY3Rpb25LZXldO1xyXG4gICAgICAgIHRtcENvbGwuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAudHlwZSA9PSB0KSB7XHJcbiAgICAgICAgICAgICAgICB0bXAuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VHlwZVRleHRzID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICB2YXIgdG1wQ29sbCA9IHN0b3JhZ2VbY29sbGVjdGlvbktleV07XHJcbiAgICAgICAgdG1wQ29sbC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2godG1wKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBudWxsO1xyXG4gICAgICAgIHZhciB0bXBDb2xsID0gc3RvcmFnZVtjb2xsZWN0aW9uS2V5XTtcclxuICAgICAgICB0bXBDb2xsLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmdldEluZGV4KCkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBzcFRleHQuZ2V0VGV4dEJ5SW5kZXgoaSk7XHJcbiAgICAgICAgaWYgKHRtcCkge1xyXG4gICAgICAgICAgICB0bXAuZGVzdHJveVRleHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImluZGV4OiBcIi5jb25jYXQodGhpcy5nZXRJbmRleCgpLCBcIiwgdGV4dDpcXFwiXCIpLmNvbmNhdCh0aGlzLmdldFRleHQoKSwgXCJcXFwiLCB0eXBlOiBcIikuY29uY2F0KHRoaXMuZ2V0VHlwZSgpLCBcIiwgbW9kOiBcIikuY29uY2F0KHRoaXMuZ2V0T3duaW5nTW9kKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBzcFRleHQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IHNwVGV4dCB9O1xyXG4iLCIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblR5cGVzY3JpcHQgZGVmaW5pdGlvbnMgZm9yIHY0LjUuNVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5UaGlzIGZpbGUgd2FzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IFBhcHlydXMtMi1UeXBlc2NyaXB0LmV4ZVxyXG5odHRwczovL2dpdGh1Yi5jb20vQ2FybG9zTGV5dmFBeWFsYS9QYXB5cnVzLTItVHlwZXNjcmlwdFxyXG5cclxuVGhlIHByb2dyYW0gaGFzIG5vIHdheSB0byBrbm93IHRoZSBpbnRlbnRpb24gb2YgdGhlIGh1bWFucyB0aGF0IG1hZGVcclxudGhlIHNjcmlwdHMsIHNvIGl0J3MgYWx3YXlzIGFkdmlzYWJsZSB0byBtYW51YWxseSBjaGVjayBhbGwgZ2VuZXJhdGVkXHJcbmZpbGVzIHRvIG1ha2Ugc3VyZSBldmVyeXRoaW5nIGlzIGRlY2xhcmVkIGFzIGl0IHNob3VsZC5cclxuXHJcblRha2Ugbm90ZSB0aGUgcHJvZ3JhbSBhc3N1bWVzIHRoaXMgc2NyaXB0IGV4aXN0cyBpbiBzb21lIHN1YmZvbGRlclxyXG50byB0aGUgZm9sZGVyIHdoZXJlIGBza3lyaW1QbGF0Zm9ybS50c2AgaXMgZm91bmQsIG90aGVyd2lzZSB5b3UnbGwgZ2V0XHJcblwiQ2Fubm90IGZpbmQgbW9kdWxlLi4uXCIgdHlwZSBvZiBlcnJvcnMuXHJcblxyXG5JZiB5b3Ugd2FudCB0byBoYXZlIHRoaXMgc2NyaXB0IGluIHNvbWUgb3RoZXIgcGxhY2UsIGp1c3QgY2hhbmdlIHRoZVxyXG5yZWxhdGl2ZSBwYXRoIG9mIGVhY2ggYGltcG9ydGAuXHJcbiovXHJcbmltcG9ydCAqIGFzIHNwIGZyb20gXCJza3lyaW1QbGF0Zm9ybVwiO1xyXG52YXIgc24gPSBzcC5QTzNfU0tTRUZ1bmN0aW9ucztcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUSVZFIEVGRkVDVFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIHdoZXRoZXIgdGhlIGFjdGl2ZUVmZmVjdCBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWN0aXZlRWZmZWN0IGhhcyBhbnkgbm9uLWJhc2Ugc2NyaXB0cyBhdHRhY2hlZFxyXG5leHBvcnQgdmFyIElzU2NyaXB0QXR0YWNoZWRUb0FjdGl2ZUVmZmVjdCA9IGZ1bmN0aW9uIChha0FjdGl2ZUVmZmVjdCwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BY3RpdmVFZmZlY3QoYWtBY3RpdmVFZmZlY3QsIGFzU2NyaXB0TmFtZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FDVE9SU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9HZXRzIGFsbCBtYWdpY2VmZmVjdHMgY3VycmVudGx5IG9uIHRoZSBhY3Rvci4gRmlsdGVycyBvdXQgaW5hY3RpdmUgYW5kIGhpZGVpbnVpIHNwZWxscy5cclxuZXhwb3J0IHZhciBHZXRBY3RpdmVFZmZlY3RzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiU2hvd0luYWN0aXZlKSB7XHJcbiAgICBpZiAoYWJTaG93SW5hY3RpdmUgPT09IHZvaWQgMCkgeyBhYlNob3dJbmFjdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWN0aXZlRWZmZWN0cyhha0FjdG9yLCBhYlNob3dJbmFjdGl2ZSk7XHJcbn07XHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JBbHBoYSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0QWN0b3JBbHBoYShha0FjdG9yKTtcclxufTtcclxuZXhwb3J0IHZhciBHZXRBY3RvclJlZnJhY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yKTtcclxufTtcclxuLyoqIEFDVE9SIFNUQVRFXHJcbiAgICAgICAgQWxpdmUgPSAwXHJcbiAgICAgICAgRHlpbmcgPSAxXHJcbiAgICAgICAgRGVhZCA9IDJcclxuICAgICAgICBVbmNvbnNjaW91cyA9IDNcclxuICAgICAgICBSZWFuaW1hdGUgPSA0XHJcbiAgICAgICAgUmVjeWNsZSA9IDVcclxuICAgICAgICBSZXN0cmFpbmVkID0gNlxyXG4gICAgICAgIEVzc2VudGlhbERvd24gPSA3XHJcbiAgICAgICAgQmxlZWRvdXQgPSA4ICovXHJcbi8vR2V0cyBhY3RvciBzdGF0ZVxyXG5leHBvcnQgdmFyIEdldEFjdG9yU3RhdGUgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yU3RhdGUoYWtBY3Rvcik7XHJcbn07XHJcbi8vR2V0cyBhY3RvciBzb3VsIHNpemVcclxuZXhwb3J0IHZhciBHZXRBY3RvclNvdWxTaXplID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5HZXRBY3RvclNvdWxTaXplKGFrQWN0b3IpO1xyXG59O1xyXG4vL0dldHMgYWN0b3IgdmFsdWUgbW9kaWZpZXIuIDAgLSBwZXJtYW5lbnQsIDEgLSB0ZW1wb3JhcnksIDIgLSBkYW1hZ2VcclxuZXhwb3J0IHZhciBHZXRBY3RvclZhbHVlTW9kaWZpZXIgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKSB7IHJldHVybiBzbi5HZXRBY3RvclZhbHVlTW9kaWZpZXIoYWtBY3RvciwgYWlNb2RpZmllciwgYXNBY3RvclZhbHVlKTsgfTtcclxuLy9HZXRzIGFjdG9yIGNyaXRpY2FsIHN0YWdlXHJcbmV4cG9ydCB2YXIgR2V0Q3JpdGljYWxTdGFnZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q3JpdGljYWxTdGFnZShha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBhbGxpZXMgb2YgdGhlIGFjdG9yLCBpZiBpbiBjb21iYXRcclxuZXhwb3J0IHZhciBHZXRDb21iYXRBbGxpZXMgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkdldENvbWJhdEFsbGllcyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCB0YXJnZXRzIG9mIHRoZSBhY3RvciwgaWYgaW4gY29tYmF0XHJcbmV4cG9ydCB2YXIgR2V0Q29tYmF0VGFyZ2V0cyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0Q29tYmF0VGFyZ2V0cyhha0FjdG9yKTtcclxufTtcclxuLy9HZXRzIGFsbCBjdXJyZW50IHN1bW1vbnMgY29tbWFuZGVkIGJ5IHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBHZXRDb21tYW5kZWRBY3RvcnMgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0Q29tbWFuZGVkQWN0b3JzKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgdGhlIG93bmVyIG9mIHN1bW1vbmVkIGFjdG9yXHJcbmV4cG9ydCB2YXIgR2V0Q29tbWFuZGluZ0FjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldENvbW1hbmRpbmdBY3Rvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIGN1cnJlbnQgaGFpciBjb2xvciBvbiBhY3Rvci4gRmFpbHMgaWYgaGFpciBoZWFkcGFydCBkb2Vzbid0IGV4aXN0XHJcbmV4cG9ydCB2YXIgR2V0SGFpckNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldEhhaXJDb2xvcihha0FjdG9yKTsgfTtcclxuLy9HZXRzIHRleHR1cmVzZXQgYmVsb25naW5nIHRvIGhlYWRwYXJ0LCBpZiBhbnkuXHJcbmV4cG9ydCB2YXIgR2V0SGVhZFBhcnRUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpVHlwZSkgeyByZXR1cm4gc24uR2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGFpVHlwZSk7IH07XHJcbi8vR2V0cyB0aGUgYWN0b3IncyBsb2NhbCBncmF2aXR5LlxyXG5leHBvcnQgdmFyIEdldExvY2FsR3Jhdml0eUFjdG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldExvY2FsR3Jhdml0eUFjdG9yKGFrQWN0b3IpOyB9O1xyXG4vL0dldHMgb2JqZWN0IHVuZGVyIGFjdG9yJ3MgZmVldCAoZWcuIHRhYmxlKS4gRG9lcyBub3Qgd29yayBpZiB0aGUgcGxheWVyIGlzIHN0YW5kaW5nIG9uIHRoZSBncm91bmQuXHJcbmV4cG9ydCB2YXIgR2V0T2JqZWN0VW5kZXJGZWV0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldE9iamVjdFVuZGVyRmVldChha0FjdG9yKTsgfTtcclxuLy9HZXRzIGFjdHVhbCBjdXJyZW50IHBhY2thZ2Ugb24gYWN0b3IsIGluY2x1ZGluZyBpbnRlcm5hbCBwYWNrYWdlcyB1c2VkIGJ5IHRoZSBnYW1lIChzZWUgR2V0UGFja2FnZVR5cGUgYmVsb3cpXHJcbmV4cG9ydCB2YXIgR2V0UnVubmluZ1BhY2thZ2UgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uR2V0UnVubmluZ1BhY2thZ2UoYWtBY3Rvcik7IH07XHJcbi8vR2V0cyBjdXJyZW50IHNraW4gY29sb3Igb24gYWN0b3IuXHJcbmV4cG9ydCB2YXIgR2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IpIHsgcmV0dXJuIHNuLkdldFNraW5Db2xvcihha0FjdG9yKTsgfTtcclxuLy9TaW1pbGFyIHRvIEdldFRpbWVEZWFkIGNvbnNvbGUgY29tbWFuZC4gUmV0dXJucyAwLjAgaWYgYWN0b3IgaXMgYWxpdmVcclxuZXhwb3J0IHZhciBHZXRUaW1lRGVhZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZURlYWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB0aW1lIG9mIGRlYXRoIGluIGdhbWUgZGF5cyBwYXNzZWRcclxuZXhwb3J0IHZhciBHZXRUaW1lT2ZEZWF0aCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uR2V0VGltZU9mRGVhdGgoYWtBY3Rvcik7XHJcbn07XHJcbi8vSGFzU3BlbGwgYnV0IGNoZWNrcyBpZiB0aGUgc3BlbGwgaXMgcHJlc2VudCBvbiB0aGUgYWN0b3IgKGkuZSBhY3RpdmUgYW5kIG5vdCBkaXNwZWxsZWQpXHJcbmV4cG9ydCB2YXIgSGFzQWN0aXZlU3BlbGwgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtTcGVsbCkgeyByZXR1cm4gc24uSGFzQWN0aXZlU3BlbGwoYWtBY3RvciwgYWtTcGVsbCk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBkZWZlcnJlZCBraWxsIG1vZGVcclxuZXhwb3J0IHZhciBIYXNEZWZlcnJlZEtpbGwgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLkhhc0RlZmVycmVkS2lsbChha0FjdG9yKTtcclxufTtcclxuLy9DaGVja3MgaWYgYWN0aXZlbWFnaWNlZmZlY3Qgd2l0aCBnaXZlbiBhcmNoZXR5cGUgaXMgcHJlc2VudCBvbiBhY3Rvci4gQXJjaGV0eXBlIE1VU1QgYmUgdHlwZWQgYXMgZ2l2ZW4gYmVsb3cuXHJcbmV4cG9ydCB2YXIgSGFzTWFnaWNFZmZlY3RXaXRoQXJjaGV0eXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzQXJjaGV0eXBlKSB7IHJldHVybiBzbi5IYXNNYWdpY0VmZmVjdFdpdGhBcmNoZXR5cGUoYWtBY3RvciwgYXNBcmNoZXR5cGUpOyB9O1xyXG4vL1JldHVybnMgaWYgdGhlIGFjdG9yIGhhcyBza2luL2FybW9yIHdpdGggc2tpbiBwcmVzZW50XHJcbmV4cG9ydCB2YXIgSGFzU2tpbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0FybW9yVG9DaGVjaykgeyByZXR1cm4gc24uSGFzU2tpbihha0FjdG9yLCBha0FybW9yVG9DaGVjayk7IH07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyBpbiBjZWxsIHdhdGVyIG9yIGxhdmFcclxuZXhwb3J0IHZhciBJc0FjdG9ySW5XYXRlciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNBY3RvckluV2F0ZXIoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRoZSBhY3RvciBpcyB1bmRlcndhdGVyXHJcbmV4cG9ydCB2YXIgSXNBY3RvclVuZGVyd2F0ZXIgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLklzQWN0b3JVbmRlcndhdGVyKGFrQWN0b3IpO1xyXG59O1xyXG4vKiogTElNQlxyXG4gICAgICAgIE5vbmUgPSAtMVxyXG4gICAgICAgIFRvcnNvID0gMFxyXG4gICAgICAgIEhlYWQgPSAxICovXHJcbi8vUmV0dXJucyB3aGV0aGVyIGxpbWIgaXMgZ29uZSAoaS5lLCB0aGUgaGVhZCwgYnV0IGFkZGluZyB0aGUgd2hvbGUgZW51bSBpbiBjYXNlIHNvbWVvbmUgZXhwYW5kcyB0aGUgZGlzbWVtYmVybWVudCBzeXN0ZW0gaW4gdGhlIGZ1dHVyZSlcclxuZXhwb3J0IHZhciBJc0xpbWJHb25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpTGltYikgeyByZXR1cm4gc24uSXNMaW1iR29uZShha0FjdG9yLCBhaUxpbWIpOyB9O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGUgYWN0b3IgaXMgYSBxdWFkcnVwZWRcclxuZXhwb3J0IHZhciBJc1F1YWRydXBlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uSXNRdWFkcnVwZWQoYWtBY3Rvcik7XHJcbn07XHJcbi8vUmV0dXJucyB3aGV0aGVyIHRhcmdldCBpcyBzb3VsIHRyYXBwZWQgLyBjYXBhYmxlIG9mIGJlaW5nIHNvdWwgdHJhcHBlZCBzdWNjZXNzZnVsbHkgKGlmIHVzaW5nIG1vZHMgdGhhdCBieXBhc3MgdmFuaWxsYSBzb3VsIHRyYXAgc3lzdGVtKS5cclxuZXhwb3J0IHZhciBJc1NvdWxUcmFwcGVkID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Jc1NvdWxUcmFwcGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0FkZHMgYWxsIGVxdWlwcGVkIGl0ZW1zIHRvIGFycmF5XHJcbmV4cG9ydCB2YXIgQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uQWRkQWxsRXF1aXBwZWRJdGVtc1RvQXJyYXkoYWtBY3Rvcik7IH07XHJcbi8vQWRkcyBwZXJrcyB0byB0aGUgYWN0b3JiYXNlLCB3b3JrcyBvbiBsZXZlbGVkIGFjdG9ycy91bmlxdWUgTlBDcy4gRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5BZGRCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL0FkZHMgc3BlbGxzIHRvIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgQWRkQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLkFkZEJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLyoqIEJMRU5EIE1PREVTXHJcbiAgICAgICAgRGFya2VuID0gMFxyXG4gICAgICAgIE11bHRpcGx5ID0gMVxyXG4gICAgICAgIENvbG9yQnVybiA9IDJcclxuICAgICAgICBMaW5lYXJCdXJuID0gM1xyXG4gICAgICAgIERhcmtlckNvbG9yID0gNFxyXG4gICAgICAgIExpZ2h0ZW4gPSA1XHJcbiAgICAgICAgU2NyZWVuID0gNlxyXG4gICAgICAgIENvbG9yRG9kZ2UgPSA3XHJcbiAgICAgICAgTGluZWFyRG9kZ2UgPSA4XHJcbiAgICAgICAgTGlnaHRlckNvbG9yID0gOVxyXG4gICAgICAgIE92ZXJsYXkgPSAxMFxyXG4gICAgICAgIFNvZnRMaWdodCA9IDExXHJcbiAgICAgICAgSGFyZExpZ2h0ID0gMTJcclxuICAgICAgICBWaXZpZExpZ2h0ID0gMTNcclxuICAgICAgICBMaW5lYXJMaWdodCA9IDE0XHJcbiAgICAgICAgUGluTGlnaHQgPSAxNVxyXG4gICAgICAgIEhhcmRNaXggPSAxNlxyXG4gICAgICAgIERpZmZlcmVuY2UgPSAxN1xyXG4gICAgICAgIEV4Y2x1c2lvbiA9IDE4XHJcbiAgICAgICAgU3VidHJhY3QgPSAxOVxyXG4gICAgICAgIERpdmlkZSA9IDIwICovXHJcbi8vQmxlbmRzIGV4aXN0aW5nIHNraW4gY29sb3Igd2l0aCBzcGVjaWZpZWQgY29sb3IsIHVzaW5nIHBob3Rvc2hvcCBibGVuZCBmb3JtdWxhcywgd2l0aCBhbHBoYSAob3BhY2l0eSkuXHJcbi8vSWYgdHJ1ZSwgYXV0b0x1bWluYW5jZSBjYWxjdWxhdGVzIHNraW4gdG9uZSByZWxhdGl2ZSBsdW1pbmFuY2UuIFRoZSBvcGFjaXR5IHZhbHVlIGlzIHRoZW4gdXNlZCBhcyBhIG11bHRpcGxpZXIgb24gdG9wIG9mIHRoYXQsIGZpbmFsIHZhbHVlIGlzIGNsYW1wZWQgdG8gMC0xXHJcbi8vSWYgZmFsc2UsIG9ubHkgb3BhY2l0eSB3aWxsIGJlIHVzZWQuIFJlY29tbWVuZCB0byB1c2UgYXV0b2x1bWluYW5jZSBiZWNhdXNlIGNvbG9ycyB3aWxsIG5vdCBibGVuZCB3ZWxsIGZvciBhbGwgc2tpbiB0b25lcyB1c2luZyBmbGF0IHZhbHVlcy5cclxuZXhwb3J0IHZhciBCbGVuZENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFpQmxlbmRNb2RlLCBhYkF1dG9MdW1pbmFuY2UsIGFmT3BhY2l0eSkge1xyXG4gICAgcmV0dXJuIHNuLkJsZW5kQ29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWlCbGVuZE1vZGUsIGFiQXV0b0x1bWluYW5jZSwgYWZPcGFjaXR5KTtcclxufTtcclxuLy9EZWNhcGl0YXRlcyBsaXZpbmcgYW5kIGRlYWQgYWN0b3JzLiBMaXZpbmcgYWN0b3JzIHdpbGwgbm90IGRpZSB3aGVuIHRoaXMgaXMgY2FsbGVkIVxyXG5leHBvcnQgdmFyIERlY2FwaXRhdGVBY3RvciA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRGVjYXBpdGF0ZUFjdG9yKGFrQWN0b3IpO1xyXG59O1xyXG4vLzAgLSBFbmFibGVBSSArIHRvZ2dsaW5nIHJlY29yZCBoaXRzIGZsYWdzIHNvIHRoZXkgZG9uJ3QgZ28gZmx5aW5nIDMwMCBmZWV0IHdoZW4gdW5mcm96ZW4uXHJcbi8vMSAtIFBhcmFseXplcyBhY3RvciwgZXZlbiB3aGVuIGRlYWQuXHJcbmV4cG9ydCB2YXIgRnJlZXplQWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSwgYWJGcmVlemUpIHsgcmV0dXJuIHNuLkZyZWV6ZUFjdG9yKGFrQWN0b3IsIHR5cGUsIGFiRnJlZXplKTsgfTtcclxuLy9RdWljayBhbmQgZGlydHkgaGFjayB0byBpbnN0YW50bHkga2lsbCB0aGUgYWN0b3IgYW5kIHNldCBhcyBkZWFkLlxyXG5leHBvcnQgdmFyIEtpbGxOb1dhaXQgPSBmdW5jdGlvbiAoYWtBY3Rvcikge1xyXG4gICAgcmV0dXJuIHNuLktpbGxOb1dhaXQoYWtBY3Rvcik7XHJcbn07XHJcbi8vREVQUkVDSUFURURcclxuLy9CbGVuZHMgZXhpc3Rpbmcgc2tpbiBjb2xvciB3aXRoIHNwZWNpZmllZCBjb2xvci5cclxuLy9UcnVlIC0gaW50ZW5zaXR5IGlzIG1hbnVhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgcGVyY2VudGFnZSAwLTEuMCwgRmFsc2UgLSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgdXNpbmcgc2tpbiB0b25lIGx1bWluYW5jZVxyXG5leHBvcnQgdmFyIE1peENvbG9yV2l0aFNraW5Ub25lID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IsIGFiTWFudWFsTW9kZSwgYWZQZXJjZW50YWdlKSB7XHJcbiAgICByZXR1cm4gc24uTWl4Q29sb3JXaXRoU2tpblRvbmUoYWtBY3RvciwgYWtDb2xvciwgYWJNYW51YWxNb2RlLCBhZlBlcmNlbnRhZ2UpO1xyXG59O1xyXG4vL0JhdGNoIGFkZGVkIHNwZWxsIHJlbW92YWwsIGZpbHRlcmVkIGJ5IG9wdGlvbmFsIG1vZCBuYW1lLCBhbmQga2V5d29yZCBhcnJheSAobWF0Y2hpbmcgYW55IGtleXdvcmQgb3IgYWxsIG9mIHRoZW0pXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQWRkZWRTcGVsbHMgPSBmdW5jdGlvbiAoYWtBY3RvciwgbW9kTmFtZSwga2V5d29yZHMsIGFiTWF0Y2hBbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUFkZGVkU3BlbGxzKGFrQWN0b3IsIG1vZE5hbWUsIGtleXdvcmRzLCBhYk1hdGNoQWxsKTsgfTtcclxuLy9SZW1vdmVzIHBlcmtzIGZyb20gdGhlIGFjdG9yYmFzZVxyXG4vL1BlcmsgZWZmZWN0cyBtYXkgbm90IGJlIHJlbW92ZWQgZnJvbSB1bmlxdWUgYWN0b3JzLCBtb3JlIHRlc3RpbmcgcmVxdWlyZWQuXHJcbi8vRnVuY3Rpb24gc2VyaWFsaXplcyBkYXRhIHRvIHNrc2UgY29zYXZlLCBzbyBwZXJrcyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVBlcmsgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtQZXJrKSB7IHJldHVybiBzbi5SZW1vdmVCYXNlUGVyayhha0FjdG9yLCBha1BlcmspOyB9O1xyXG4vL1JlbW92ZXMgc3BlbGxzIGZyb20gdGhlIGFjdG9yYmFzZSwgd29ya3Mgb24gcGxheWVyL2xldmVsZWQgYWN0b3JzL3VuaXF1ZSBOUENzLiBGdW5jdGlvbiBzZXJpYWxpemVzIGRhdGEgdG8gc2tzZSBjb3NhdmUsIHNvIHNwZWxscyBhcmUgYXBwbGllZCBjb3JyZWN0bHkgb24gbG9hZGluZy9yZWxvYWRpbmcgc2F2ZXMuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlQmFzZVNwZWxsID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrU3BlbGwpIHsgcmV0dXJuIHNuLlJlbW92ZUJhc2VTcGVsbChha0FjdG9yLCBha1NwZWxsKTsgfTtcclxuLy9SZXBsYWNlcyBzcGVjaWZpZWQgc291cmNlIHRleHR1cmVzZXQgb24gd29ybiBhcm1vciB3aXRoIHRhcmdldCB0ZXh0dXJlc2V0LiBMYXN0cyBmb3Igb25lIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZCAoZGlmZnVzZSBpcyAwLCBub3JtYWwgaXMgMS4uLilcclxuZXhwb3J0IHZhciBSZXBsYWNlQXJtb3JUZXh0dXJlU2V0ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQXJtb3IsIGFrU291cmNlVFhTVCwgYWtUYXJnZXRUWFNULCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VBcm1vclRleHR1cmVTZXQoYWtBY3RvciwgYWtBcm1vciwgYWtTb3VyY2VUWFNULCBha1RhcmdldFRYU1QsIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL1JlcGxhY2VzIGZhY2UgdGV4dHVyZXNldC4gTGFzdHMgb25lIGdhbWluZyBzZXNzaW9uLiBDYW4gYmUgYXBwbGllZCB0byBub24tdW5pcXVlIGFjdG9ycy5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC4gUmVwbGFjaW5nIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBtYXkgY2F1c2UgYSB2aXNpYmxlIG5lY2tzZWFtLlxyXG5leHBvcnQgdmFyIFJlcGxhY2VGYWNlVGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpVGV4dHVyZVR5cGUpIHtcclxuICAgIGlmIChhaVRleHR1cmVUeXBlID09PSB2b2lkIDApIHsgYWlUZXh0dXJlVHlwZSA9IC0xOyB9XHJcbiAgICByZXR1cm4gc24uUmVwbGFjZUZhY2VUZXh0dXJlU2V0KGFrQWN0b3IsIGFrTWFsZVRYU1QsIGFrRmVtYWxlVFhTVCwgYWlUZXh0dXJlVHlwZSk7XHJcbn07XHJcbi8vUmVwbGFjZXMgc2tpbiB0ZXh0dXJlc2V0IGZvciBnaXZlbiBzbG90bWFzayAoaWUuIGJvZHkvaGFuZCkuIExhc3RzIG9uZSBnYW1pbmcgc2Vzc2lvbi4gSGFzIHRvIGJlIHJlYXBwbGllZCB3aGVuIHJlLWVxdWlwcGluZyBhcm1vci5cclxuLy9JZiB0ZXh0dXJlIHR5cGUgaXMgLTEsIHRoZSBlbnRpcmUgdGV4dHVyZXNldCBpcyByZXBsYWNlZCwgb3RoZXJ3aXNlIHRoZSB0ZXh0dXJlIG1hcCBzcGVjaWZpZWQgYXQgW3RleHR1cmVUeXBlXSBpbmRleCBpcyByZXBsYWNlZC5cclxuZXhwb3J0IHZhciBSZXBsYWNlU2tpblRleHR1cmVTZXQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWtNYWxlVFhTVCwgYWtGZW1hbGVUWFNULCBhaVNsb3RNYXNrLCBhaVRleHR1cmVUeXBlKSB7XHJcbiAgICBpZiAoYWlUZXh0dXJlVHlwZSA9PT0gdm9pZCAwKSB7IGFpVGV4dHVyZVR5cGUgPSAtMTsgfVxyXG4gICAgcmV0dXJuIHNuLlJlcGxhY2VTa2luVGV4dHVyZVNldChha0FjdG9yLCBha01hbGVUWFNULCBha0ZlbWFsZVRYU1QsIGFpU2xvdE1hc2ssIGFpVGV4dHVyZVR5cGUpO1xyXG59O1xyXG4vL0NoZWNrcyBmb3IgTmlFeHRyYURhdGEgbm9kZXMgb24gYWN0b3IgLSBQTzNfVElOVC9QTzNfQUxQSEEvUE8zX1RYU1QvUE8zX1RPR0dMRS9QTzNfU0hBREVSXHJcbi8vU3RvcHMgYWxsIGVmZmVjdCBzaGFkZXJzIGFuZFxyXG4vL1BPM19USU5UIC0gcmVzZXRzIHRpbnQsIHJlYnVpbGRzIGZhY2VnZW4gaWYgYWN0b3IgaXMgcGxheWVyXHJcbi8vUE8zX0FMUEhBIC0gcmVzZXRzIHNraW4gYWxwaGFcclxuLy9QTzNfVFhTVCAtIHJlc2V0cyB0ZXh0dXJlc2V0cyB3aXRoIHRleHR1cmVwYXRocyBjb250YWluaW5nIGZvbGRlck5hbWVcclxuLy9QTzNfVE9HR0xFIC0gdW5oaWRlcyBhbGwgY2hpbGRyZW4gb2Ygbm9kZXMgdGhhdCB3ZXJlIHdyaXR0ZW4gdG8gdGhlIGV4dHJhRGF0YVxyXG4vL1BPM19TSEFERVIgLSByZWNyZWF0ZXMgdGhlIG9yaWdpbmFsIHNoYWRlciB0eXBlIChhcyBjbG9zZSBhcyBwb3NzaWJsZSwgcHJvamVjdGVkVVYgcGFyYW1zIGFyZSBub3QgcmVzdG9yZWQpXHJcbmV4cG9ydCB2YXIgUmVzZXRBY3RvcjNEID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSkgeyByZXR1cm4gc24uUmVzZXRBY3RvcjNEKGFrQWN0b3IsIGFzRm9sZGVyTmFtZSk7IH07XHJcbi8vMC4wIGRpc2FibGVzIHJlZnJhY3Rpb24sIDEuMCBpcyBtYXggcmVmcmFjdGlvblxyXG5leHBvcnQgdmFyIFNldEFjdG9yUmVmcmFjdGlvbiA9IGZ1bmN0aW9uIChha0FjdG9yLCBhZlJlZnJhY3Rpb24pIHsgcmV0dXJuIHNuLlNldEFjdG9yUmVmcmFjdGlvbihha0FjdG9yLCBhZlJlZnJhY3Rpb24pOyB9O1xyXG4vL1NldHMgaGFpciBjb2xvciBvbiBhY3Rvci4gQ2hhbmdlcyBtYXkgcGVyc2lzdCB0aHJvdWdob3V0IGdhbWluZyBzZXNzaW9uLCBldmVuIHdoZW4gcmVsb2FkaW5nIHByZXZpb3VzIHNhdmVzLlxyXG5leHBvcnQgdmFyIFNldEhhaXJDb2xvciA9IGZ1bmN0aW9uIChha0FjdG9yLCBha0NvbG9yKSB7IHJldHVybiBzbi5TZXRIYWlyQ29sb3IoYWtBY3RvciwgYWtDb2xvcik7IH07XHJcbi8vU2V0cyBoZWFkcGFydCdzIG1lc2ggYWxwaGEuIERvZXNuJ3Qgd29yayBmb3Igc29tZSBoYWlyIHR5cGVzIGFuZCBoZXRlcm9jaHJvbWljIGV5ZXNcclxuZXhwb3J0IHZhciBTZXRIZWFkUGFydEFscGhhID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFpUGFydFR5cGUsIGFmQWxwaGEpIHsgcmV0dXJuIHNuLlNldEhlYWRQYXJ0QWxwaGEoYWtBY3RvciwgYWlQYXJ0VHlwZSwgYWZBbHBoYSk7IH07XHJcbi8vU2V0cyB0ZXh0dXJlc2V0IGJlbG9uZ2luZyB0byBoZWFkcGFydCwgaWYgYW55LlxyXG5leHBvcnQgdmFyIFNldEhlYWRQYXJ0VGV4dHVyZVNldCA9IGZ1bmN0aW9uIChha0FjdG9yLCBoZWFkcGFydFRYU1QsIGFpVHlwZSkgeyByZXR1cm4gc24uU2V0SGVhZFBhcnRUZXh0dXJlU2V0KGFrQWN0b3IsIGhlYWRwYXJ0VFhTVCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIHZlbG9jaXR5IG9mIHRoZSBhY3Rvci4gTWF5IG5vdCB0YWtlIHBsYWNlIGltbWVkaWF0ZWx5LlxyXG5leHBvcnQgdmFyIFNldExpbmVhclZlbG9jaXR5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopIHsgcmV0dXJuIHNuLlNldExpbmVhclZlbG9jaXR5KGFrQWN0b3IsIGFmWCwgYWZZLCBhZlopOyB9O1xyXG4vL1NldHMgbG9jYWwgZ3Jhdml0eSBvZiB0aGUgYWN0b3IuIE5lZ2F0aXZlIHZhbHVlcyB3aWxsIGNhdXNlIHRoZW0gdG8gZmx5LiBNYXkgbm90IHRha2UgcGxhY2UgaW1tZWRpYXRlbHkuXHJcbmV4cG9ydCB2YXIgU2V0TG9jYWxHcmF2aXR5QWN0b3IgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZWYWx1ZSwgYWJEaXNhYmxlR3Jhdml0eU9uR3JvdW5kKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHlBY3Rvcihha0FjdG9yLCBhZlZhbHVlLCBhYkRpc2FibGVHcmF2aXR5T25Hcm91bmQpOyB9O1xyXG4vL1NldHMgYWxwaGEgb24gZmFjZSwgYmFzZSBza2luIGZvcm0gYW5kIGFybW9yIG1lc2hlcyB3aXRoIHZpc2libGUgc2tpbi4gSGFzIHRvIGJlIHJlLWFwcGxpZWQgd2hlbiBhcm1vciBpcyB1bi9yZS1lcXVpcHBlZC5cclxuZXhwb3J0IHZhciBTZXRTa2luQWxwaGEgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWZBbHBoYSkgeyByZXR1cm4gc24uU2V0U2tpbkFscGhhKGFrQWN0b3IsIGFmQWxwaGEpOyB9O1xyXG4vL1NldHMgc2tpbiBjb2xvciAoZmFjZSBhbmQgYm9keSkuIEhhcyB0byBiZSByZS1hcHBsaWVkIHdoZW4gYXJtb3IgaXMgdW4vcmUtZXF1aXBwZWQuXHJcbmV4cG9ydCB2YXIgU2V0U2tpbkNvbG9yID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFrQ29sb3IpIHsgcmV0dXJuIHNuLlNldFNraW5Db2xvcihha0FjdG9yLCBha0NvbG9yKTsgfTtcclxuLy9TZXRzIHRoZSBmbGFnIHVzZWQgYnkgdGhlIGdhbWUgdG8gZGV0ZXJtaW5lIHNvdWwgdHJhcHBlZCBOUENzXHJcbmV4cG9ydCB2YXIgU2V0U291bFRyYXBwZWQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWJUcmFwcGVkKSB7IHJldHVybiBzbi5TZXRTb3VsVHJhcHBlZChha0FjdG9yLCBhYlRyYXBwZWQpOyB9O1xyXG4vL1RvZ2dsZXMgYW55IGhhaXIgd2lncyAoZ2VvbWV0cnkgd2l0aCBoYWlyIHNoYWRlcikgZm91bmQgb24gc2xvdHMgSGFpci9Mb25nSGFpclxyXG5leHBvcnQgdmFyIFRvZ2dsZUhhaXJXaWdzID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFiRGlzYWJsZSkgeyByZXR1cm4gc24uVG9nZ2xlSGFpcldpZ3MoYWtBY3RvciwgYWJEaXNhYmxlKTsgfTtcclxuLyoqIEFSTU9SIFRZUEVcclxuICAgICAgICBMaWdodCA9IDBcclxuICAgICAgICBIZWF2eSA9IDFcclxuICAgICAgICBDbG90aGluZyA9IDIgKi9cclxuLy9VbmVxdWlwcyBhbGwgYXJtb3Igb2YgdHlwZSwgb3B0aW9uYWxseSBza2lwcGluZyBiaXBlZCBzbG90cy5cclxuZXhwb3J0IHZhciBVbmVxdWlwQWxsT2ZUeXBlID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKSB7IHJldHVybiBzbi5VbmVxdWlwQWxsT2ZUeXBlKGFrQWN0b3IsIGFmQXJtb3JUeXBlLCBhaVNsb3RzVG9Ta2lwKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQUNUT1JCQVNFXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbnBjIGRlYXRoIGl0ZW1cclxuZXhwb3J0IHZhciBHZXREZWF0aEl0ZW0gPSBmdW5jdGlvbiAoYWtCYXNlKSB7IHJldHVybiBzbi5HZXREZWF0aEl0ZW0oYWtCYXNlKTsgfTtcclxuLy9HZXQgYWN0b3JiYXNlIHBlcmsgYXQgbnRoIGluZGV4XHJcbmV4cG9ydCB2YXIgR2V0TnRoUGVyayA9IGZ1bmN0aW9uIChha0Jhc2UsIGFpSW5kZXgpIHsgcmV0dXJuIHNuLkdldE50aFBlcmsoYWtCYXNlLCBhaUluZGV4KTsgfTtcclxuLy9HZXQgdG90YWwgYWN0b3JiYXNlIHBlcmsgY291bnRcclxuZXhwb3J0IHZhciBHZXRQZXJrQ291bnQgPSBmdW5jdGlvbiAoYWtCYXNlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGVya0NvdW50KGFrQmFzZSk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBucGMgZGVhdGggaXRlbS4gQ2FuIGJlIE5vbmUuXHJcbmV4cG9ydCB2YXIgU2V0RGVhdGhJdGVtID0gZnVuY3Rpb24gKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSkgeyByZXR1cm4gc24uU2V0RGVhdGhJdGVtKGFrQmFzZSwgYWtMZXZlbGVkSXRlbSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0FMSUFTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgYWxpYXMgaGFzIGFueSBub24tYmFzZSBzY3JpcHRzIGF0dGFjaGVkXHJcbmV4cG9ydCB2YXIgSXNTY3JpcHRBdHRhY2hlZFRvQWxpYXMgPSBmdW5jdGlvbiAoYWtBbGlhcywgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9BbGlhcyhha0FsaWFzLCBhc1NjcmlwdE5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUk1PUi9BRERPTlNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhcm1vciBhZGRvbidzIGZvb3RzdGVwIHNldFxyXG5leHBvcnQgdmFyIEdldEZvb3RzdGVwU2V0ID0gZnVuY3Rpb24gKGFrQXJtYSkgeyByZXR1cm4gc24uR2V0Rm9vdHN0ZXBTZXQoYWtBcm1hKTsgfTtcclxuLy9TZXRzIGFybW9yIGFkZG9uJ3MgZm9vdHN0ZXAgc2V0XHJcbmV4cG9ydCB2YXIgU2V0Rm9vdHN0ZXBTZXQgPSBmdW5jdGlvbiAoYWtBcm1hLCBha0Zvb3RzdGVwU2V0KSB7IHJldHVybiBzbi5TZXRGb290c3RlcFNldChha0FybWEsIGFrRm9vdHN0ZXBTZXQpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BUlJBWVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQWRkcyBhY3RvciB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkQWN0b3JUb0FycmF5ID0gZnVuY3Rpb24gKGFrQWN0b3IsIGFjdG9yQXJyYXkpIHsgcmV0dXJuIHNuLkFkZEFjdG9yVG9BcnJheShha0FjdG9yLCBhY3RvckFycmF5KTsgfTtcclxuLy9BZGRzIHN0cmluZyB0byBhcnJheS4gTW9kaWZpZXMgYXJyYXkgZGlyZWN0bHksIGl0IG11c3QgYmUgaW5pdGlhbGl6ZWQhXHJcbmV4cG9ydCB2YXIgQWRkU3RyaW5nVG9BcnJheSA9IGZ1bmN0aW9uIChhc1N0cmluZywgYXNTdHJpbmdzKSB7IHJldHVybiBzbi5BZGRTdHJpbmdUb0FycmF5KGFzU3RyaW5nLCBhc1N0cmluZ3MpOyB9O1xyXG4vL0NvdW50cyBob3cgbWFueSBpbnN0YW5jZXMgb2YgYSBzdHJpbmcgYXJlIGluIGFuIGFycmF5LlxyXG5leHBvcnQgdmFyIEFycmF5U3RyaW5nQ291bnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcsIGFzU3RyaW5ncykgeyByZXR1cm4gc24uQXJyYXlTdHJpbmdDb3VudChhc1N0cmluZywgYXNTdHJpbmdzKTsgfTtcclxuLy9BbHBoYWJldGljYWxseSBzb3J0cyBhbmQgcmV0dXJucyB0cnVuY2F0ZWQgc3JpbmcgYXJyYXkuXHJcbmV4cG9ydCB2YXIgU29ydEFycmF5U3RyaW5nID0gZnVuY3Rpb24gKGFzU3RyaW5ncykge1xyXG4gICAgcmV0dXJuIHNuLlNvcnRBcnJheVN0cmluZyhhc1N0cmluZ3MpO1xyXG59O1xyXG4vL0dldHMgbmFtZSBhcnJheSBvZiBhbGwgdGhlIGFjdG9ycyBpbiB0aGUgYXJlYSwgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuIEZpbHRlciBrZXl3b3JkIG9wdGlvbmFsXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkQWN0b3JOYW1lcyA9IGZ1bmN0aW9uIChha0tleXdvcmQsIGFzUGx1cmFsLCBhYkludmVydEtleXdvcmQpIHtcclxuICAgIGlmIChhc1BsdXJhbCA9PT0gdm9pZCAwKSB7IGFzUGx1cmFsID0gXCIocylcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFNvcnRlZEFjdG9yTmFtZXMoYWtLZXl3b3JkLCBhc1BsdXJhbCwgYWJJbnZlcnRLZXl3b3JkKTtcclxufTtcclxuLy9HZXRzIG5hbWUgYXJyYXkgb2YgTlBDcywgc29ydGVkIGFscGhhYmV0aWNhbGx5LiBHZW5lcmljIGFjdG9ycyBhcmUgbWVyZ2VkIChpZS4gMyBXaGl0ZXJ1biBHdWFyZChzKSkuXHJcbmV4cG9ydCB2YXIgR2V0U29ydGVkTlBDTmFtZXMgPSBmdW5jdGlvbiAoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCkge1xyXG4gICAgaWYgKGFzUGx1cmFsID09PSB2b2lkIDApIHsgYXNQbHVyYWwgPSBcIihzKVwiOyB9XHJcbiAgICByZXR1cm4gc24uR2V0U29ydGVkTlBDTmFtZXMoYWlBY3RvckJhc2VzLCBhc1BsdXJhbCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0JPT0tcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ2xlYXJzIHJlYWQgZmxhZyAoYW5kIHdyaXRlcyBpdCB0byB0aGUgc2F2ZSkuXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWFkRmxhZyA9IGZ1bmN0aW9uIChha0Jvb2spIHtcclxuICAgIHJldHVybiBzbi5DbGVhclJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vU2V0cyByZWFkIGZsYWcgKGFuZCB3cml0ZXMgaXQgdG8gdGhlIHNhdmUpLlxyXG5leHBvcnQgdmFyIFNldFJlYWRGbGFnID0gZnVuY3Rpb24gKGFrQm9vaykge1xyXG4gICAgcmV0dXJuIHNuLlNldFJlYWRGbGFnKGFrQm9vayk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0NFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBjZWxsIG5vcnRoIHJvdGF0aW9uL3dvcmxkc3BhY2Ugbm9ydGggcm90YXRpb24gZm9yIGV4dGVyaW9yIGNlbGxzLiBSb3RhdGlvbiBpcyBpbiBkZWdyZWVzLlxyXG5leHBvcnQgdmFyIEdldENlbGxOb3J0aFJvdGF0aW9uID0gZnVuY3Rpb24gKGFrQ2VsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldENlbGxOb3J0aFJvdGF0aW9uKGFrQ2VsbCk7XHJcbn07XHJcbi8vR2V0cyBjZWxsIGxpZ2h0aW5nIHRlbXBsYXRlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRpbmdUZW1wbGF0ZSA9IGZ1bmN0aW9uIChha0NlbGwpIHsgcmV0dXJuIHNuLkdldExpZ2h0aW5nVGVtcGxhdGUoYWtDZWxsKTsgfTtcclxuLy9TZXRzIGNlbGwgbGlnaHRpbmcgdGVtcGxhdGVcclxuZXhwb3J0IHZhciBTZXRMaWdodGluZ1RlbXBsYXRlID0gZnVuY3Rpb24gKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKSB7IHJldHVybiBzbi5TZXRMaWdodGluZ1RlbXBsYXRlKGFrQ2VsbCwgYWtMaWdodGluZ1RlbXBsYXRlKTsgfTtcclxuLy9TZXRzIGNlbGwgbm9ydGggcm90YXRpb24uXHJcbmV4cG9ydCB2YXIgU2V0Q2VsbE5vcnRoUm90YXRpb24gPSBmdW5jdGlvbiAoYWtDZWxsLCBhZkFuZ2xlKSB7IHJldHVybiBzbi5TZXRDZWxsTm9ydGhSb3RhdGlvbihha0NlbGwsIGFmQW5nbGUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9ERUJVR1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBmdW5jdGlvbmFsIHNwZWxscyAoaWUuIHNwZWxscyB0aGF0IGNhbiBiZSBsZWFybmVkIGZyb20gc3BlbGwgYm9va3MsIGFuZCBub3QgYWxsIDIwMDArIHNwZWxscyBsaWtlIHBzYilcclxuZXhwb3J0IHZhciBHaXZlUGxheWVyU3BlbGxCb29rID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2l2ZVBsYXllclNwZWxsQm9vaygpOyB9O1xyXG4vL0R1bXBzIGN1cnJlbnQgYW5pbWF0aW9uIHZhcmlhYmxlcyB0byBwbzNfcGFweXJ1c2V4dGVuZGVyNjQubG9nXHJcbmV4cG9ydCB2YXIgRHVtcEFuaW1hdGlvblZhcmlhYmxlcyA9IGZ1bmN0aW9uIChha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCkgeyByZXR1cm4gc24uRHVtcEFuaW1hdGlvblZhcmlhYmxlcyhha0FjdG9yLCBhc0FuaW1hdGlvblZhclByZWZpeCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0RFVEVDVElPTlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9SZXR1cm5zIHdoZXRoZXIgb3RoZXIgTlBDcyBjYW4gZGV0ZWN0IHRoaXMgYWN0b3IuXHJcbi8vMCAtICBjYW4ndCBiZSBkZXRlY3RlZCwgMSAtIG5vcm1hbCwgMiAtICB3aWxsIGFsd2F5cyBiZSBkZXRlY3RlZFxyXG5leHBvcnQgdmFyIENhbkFjdG9yQmVEZXRlY3RlZCA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uQ2FuQWN0b3JCZURldGVjdGVkKGFrQWN0b3IpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciB0aGlzIGFjdG9yIGNhbiBkZXRlY3Qgb3RoZXIgTlBDcy5cclxuLy8wIC0gY2FuIG5ldmVyIGRldGVjdCwgMS0gbm9ybWFsLCAyIC0gd2lsbCBhbHdheXMgZGV0ZWN0IG90aGVyc1xyXG5leHBvcnQgdmFyIENhbkFjdG9yRGV0ZWN0ID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5DYW5BY3RvckRldGVjdChha0FjdG9yKTtcclxufTtcclxuLy9Gb3JjZSB0aGlzIGFjdG9yIHRvIGJlIGRldGVjdGVkIGJ5IG90aGVyIE5QQ3MgKGFjdG9yIGlzIGFsd2F5cyB2aXNpYmxlKS5cclxuZXhwb3J0IHZhciBGb3JjZUFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5Gb3JjZUFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL0ZvcmNlIHRoaXMgYWN0b3IgdG8gYWx3YXlzIGRldGVjdCB0aGVpciB0YXJnZXRzXHJcbmV4cG9ydCB2YXIgRm9yY2VBY3RvckRldGVjdGluZyA9IGZ1bmN0aW9uIChha0FjdG9yKSB7XHJcbiAgICByZXR1cm4gc24uRm9yY2VBY3RvckRldGVjdGluZyhha0FjdG9yKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhpcyBhY3RvciBpcyBjdXJyZW50bHkgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDc1xyXG5leHBvcnQgdmFyIElzRGV0ZWN0ZWRCeUFueW9uZSA9IGZ1bmN0aW9uIChha0FjdG9yKSB7IHJldHVybiBzbi5Jc0RldGVjdGVkQnlBbnlvbmUoYWtBY3Rvcik7IH07XHJcbi8vUHJldmVudCB0aGlzIGFjdG9yIGZyb20gYmVpbmcgZGV0ZWN0ZWQgYnkgb3RoZXIgTlBDcyAoYWN0b3IgaXMgaGlkZGVuKS5cclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3Rpb24gPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpOyB9O1xyXG4vL1ByZXZlbnQgdGhpcyBhY3RvciBmcm9tIGRldGVjdGluZyBvdGhlciBOUENzIChhY3RvciBpcyBibGluZClcclxuZXhwb3J0IHZhciBQcmV2ZW50QWN0b3JEZXRlY3RpbmcgPSBmdW5jdGlvbiAoYWtBY3RvcikgeyByZXR1cm4gc24uUHJldmVudEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpOyB9O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpb24gc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW9uID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW9uKGFrQWN0b3IpO1xyXG59O1xyXG4vL1Jlc2V0cyBkZXRlY3Rpbmcgc3RhdGVcclxuZXhwb3J0IHZhciBSZXNldEFjdG9yRGV0ZWN0aW5nID0gZnVuY3Rpb24gKGFrQWN0b3IpIHtcclxuICAgIHJldHVybiBzbi5SZXNldEFjdG9yRGV0ZWN0aW5nKGFrQWN0b3IpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9FRkZFQ1RTSEFERVJcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8qKiBFRkZFQ1QgU0hBREVSIEZMQUdTXHJcbiAgICAgICAga05vTWVtYnJhbmVTaGFkZXIgPSAweDAwMDAwMDAxXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQ29sb3IgPSAweDAwMDAwMDAyXHJcbiAgICAgICAga01lbWJyYW5lR3JleXNjYWxlQWxwaGEgPSAweDAwMDAwMDA0XHJcbiAgICAgICAga05vUGFydGljbGVTaGFkZXIgPSAweDAwMDAwMDA4XHJcbiAgICAgICAga0VkZ2VFZmZlY3RJbnZlcnNlID0gMHgwMDAwMDAxMFxyXG4gICAgICAgIGtBZmZlY3RTa2luT25seSA9IDB4MDAwMDAwMjBcclxuICAgICAgICBrSWdub3JlQWxwaGEgPSAweDAwMDAwMDQwXHJcbiAgICAgICAga1Byb2plY3RVViA9IDB4MDAwMDAwODBcclxuICAgICAgICBrSWdub3JlQmFzZUdlb21ldHJ5QWxwaGEgPSAweDAwMDAwMTAwXHJcbiAgICAgICAga0xpZ2h0aW5nID0gMHgwMDAwMDIwMFxyXG4gICAgICAgIGtOb1dlYXBvbnMgPSAweDAwMDAwNDAwXHJcbiAgICAgICAga1BhcnRpY2xlQW5pbWF0ZWQgPSAweDAwMDA4MDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQ29sb3IgPSAweDAwMDEwMDAwXHJcbiAgICAgICAga1BhcnRpY2xlR3JleXNjYWxlQWxwaGEgPSAweDAwMDIwMDAwXHJcbiAgICAgICAga1VzZUJsb29kR2VvbWV0cnkgPSAweDAxMDAwMDAwICovXHJcbi8vR2V0cyBhZGRvbiBtb2RlbHNcclxuZXhwb3J0IHZhciBHZXRBZGRvbk1vZGVscyA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBlZmZlY3Qgc2hhZGVycyBwcmVzZW50L3ByZXNlbnQgYW5kIGFjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0RWZmZWN0U2hhZGVyVG90YWxDb3VudChha0VmZmVjdFNoYWRlciwgYWJBY3RpdmUpOyB9O1xyXG4vL0lzIGVmZmVjdCBzaGFkZXIgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNFZmZlY3RTaGFkZXJGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzRWZmZWN0U2hhZGVyRmxhZ1NldChha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXQgZmlsbCB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0TWVtYnJhbmVGaWxsVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVGaWxsVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IGhvbGVzIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZUhvbGVzVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0TWVtYnJhbmVIb2xlc1RleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldCBtZW1icmFuZSBwYWxldHRlIHRleHR1cmVcclxuZXhwb3J0IHZhciBHZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRNZW1icmFuZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXRzIGZ1bGwgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVGdWxsQ291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIpIHsgcmV0dXJuIHNuLkdldFBhcnRpY2xlRnVsbENvdW50KGFrRWZmZWN0U2hhZGVyKTsgfTtcclxuLy9HZXQgcGFydGljbGUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlcik7IH07XHJcbi8vR2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgR2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyKSB7IHJldHVybiBzbi5HZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vL0dldHMgcGVyc2lzdGVudCBjb3VudC5cclxuZXhwb3J0IHZhciBHZXRQYXJ0aWNsZVBlcnNpc3RlbnRDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlcikgeyByZXR1cm4gc24uR2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIpOyB9O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0NsZWFycyBlZmZlY3Qgc2hhZGVyIGZsYWcuXHJcbmV4cG9ydCB2YXIgQ2xlYXJFZmZlY3RTaGFkZXJGbGFnID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUZsYWcpIHsgcmV0dXJuIHNuLkNsZWFyRWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9HZXRzIGFkZG9uIG1vZGVsc1xyXG5leHBvcnQgdmFyIFNldEFkZG9uTW9kZWxzID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBha0RlYnJpcykgeyByZXR1cm4gc24uU2V0QWRkb25Nb2RlbHMoYWtFZmZlY3RTaGFkZXIsIGFrRGVicmlzKTsgfTtcclxuLy9TZXQgZWZmZWN0IHNoYWRlciBmbGFnLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckZsYWcgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0RWZmZWN0U2hhZGVyRmxhZyhha0VmZmVjdFNoYWRlciwgYWlGbGFnKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgY29sb3Iga2V5XHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVDb2xvcktleURhdGEgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpIHtcclxuICAgIHJldHVybiBzbi5TZXRNZW1icmFuZUNvbG9yS2V5RGF0YShha0VmZmVjdFNoYWRlciwgYWlDb2xvcktleSwgYWlSR0IsIGFmQWxwaGEsIGFmVGltZSk7XHJcbn07XHJcbi8vU2V0IG1lbWJyYW5lIGZpbGwgdGV4dHVyZVxyXG5leHBvcnQgdmFyIFNldE1lbWJyYW5lRmlsbFRleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lRmlsbFRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vL1NldCBtZW1icmFuZSBob2xlcyB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVIb2xlc1RleHR1cmUgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpIHsgcmV0dXJuIHNuLlNldE1lbWJyYW5lSG9sZXNUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXQgbWVtYnJhbmUgcGFsZXR0ZSB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZSA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSkgeyByZXR1cm4gc24uU2V0TWVtYnJhbmVQYWxldHRlVGV4dHVyZShha0VmZmVjdFNoYWRlciwgYXNUZXh0dXJlTmFtZSk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIGNvbG9yIGtleVxyXG5leHBvcnQgdmFyIFNldFBhcnRpY2xlQ29sb3JLZXlEYXRhID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhaUNvbG9yS2V5LCBhaVJHQiwgYWZBbHBoYSwgYWZUaW1lKSB7XHJcbiAgICByZXR1cm4gc24uU2V0UGFydGljbGVDb2xvcktleURhdGEoYWtFZmZlY3RTaGFkZXIsIGFpQ29sb3JLZXksIGFpUkdCLCBhZkFscGhhLCBhZlRpbWUpO1xyXG59O1xyXG4vL1NldHMgZnVsbCBwYXJ0aWNsZSBjb3VudC5cclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZUZ1bGxDb3VudCA9IGZ1bmN0aW9uIChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZUZ1bGxDb3VudChha0VmZmVjdFNoYWRlciwgYWZQYXJ0aWNsZUNvdW50KTsgfTtcclxuLy9TZXQgcGFydGljbGUgc2hhZGVyIHRleHR1cmVcclxuZXhwb3J0IHZhciBTZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVBhbGV0dGVUZXh0dXJlKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKTsgfTtcclxuLy9TZXRzIHBlcnNpc3RlbnQgcGFydGljbGUgY291bnQuXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQgPSBmdW5jdGlvbiAoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCkgeyByZXR1cm4gc24uU2V0UGFydGljbGVQZXJzaXN0ZW50Q291bnQoYWtFZmZlY3RTaGFkZXIsIGFmUGFydGljbGVDb3VudCk7IH07XHJcbi8vU2V0IHBhcnRpY2xlIHNoYWRlciB0ZXh0dXJlXHJcbmV4cG9ydCB2YXIgU2V0UGFydGljbGVTaGFkZXJUZXh0dXJlID0gZnVuY3Rpb24gKGFrRWZmZWN0U2hhZGVyLCBhc1RleHR1cmVOYW1lKSB7IHJldHVybiBzbi5TZXRQYXJ0aWNsZVNoYWRlclRleHR1cmUoYWtFZmZlY3RTaGFkZXIsIGFzVGV4dHVyZU5hbWUpOyB9O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRU5DSEFOVE1FTlQgLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8qKiBFTkNIQU5UTUVOVCBUWVBFU1xyXG4gICAgICAgIEVuY2hhbnRtZW50ID0gNixcclxuICAgICAgICBTdGFmZkVuY2hhbnRtZW50ID0gMTIgKi9cclxuLy9SZXR1cm5zIGVuY2hhbnRtZW50IHR5cGUuIC0xIGlmICBpcyBOb25lXHJcbmV4cG9ydCB2YXIgR2V0RW5jaGFudG1lbnRUeXBlID0gZnVuY3Rpb24gKGFrRW5jaGFudG1lbnQpIHsgcmV0dXJuIHNuLkdldEVuY2hhbnRtZW50VHlwZShha0VuY2hhbnRtZW50KTsgfTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCkge1xyXG4gICAgaWYgKGFmQ29zdCA9PT0gdm9pZCAwKSB7IGFmQ29zdCA9IDAuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZE1hZ2ljRWZmZWN0VG9FbmNoYW50bWVudChha0VuY2hhbnRtZW50LCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gRW5jaGFudG1lbnQgdG8gdGFyZ2V0IEVuY2hhbnRtZW50LCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub0VuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gRW5jaGFudG1lbnQgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQgPSBmdW5jdGlvbiAoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tRW5jaGFudG1lbnQoYWtFbmNoYW50bWVudCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KTtcclxufTtcclxuLy9SZW1vdmVzIGVmZmVjdGl0ZW0gZnJvbSBFbmNoYW50bWVudCB0aGF0IG1hdGNoZXMgRW5jaGFudG1lbnQgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21FbmNoYW50bWVudCA9IGZ1bmN0aW9uIChha0VuY2hhbnRtZW50LCBha0VuY2hhbnRtZW50VG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbUVuY2hhbnRtZW50KGFrRW5jaGFudG1lbnQsIGFrRW5jaGFudG1lbnRUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0ZFQ1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GRUMgZnVuY3Rpb25cclxuLy9yZXR1cm5zIGVmZmVjdCB0eXBlLCBlZmZlY3Qgc2tpbGwgbGV2ZWwsIGFuZCBwcm9qZWN0aWxlIHR5cGUsIG9mIHRoZSBoaWdoZXN0IG1hZ25pdHVkZSBlZmZlY3QgcHJlc2VudCBvbiB0aGUgYWN0b3JcclxuLy9wZXJtYW5lbnQgLSBTVU4sIEFDSUQsIEZJUkUsIEZST1NULCBTSE9DSywgRFJBSU5cclxuLy90ZW1wb3JhcnkgLSBQT0lTT04sIEZFQVJcclxuZXhwb3J0IHZhciBHZXREZWF0aEVmZmVjdFR5cGUgPSBmdW5jdGlvbiAoYWtBY3RvciwgdHlwZSkgeyByZXR1cm4gc24uR2V0RGVhdGhFZmZlY3RUeXBlKGFrQWN0b3IsIHR5cGUpOyB9O1xyXG4vLzAgLSBjaGFycmVkL3NrZWxldG9uXHJcbi8vMSAtIGRyYWluZWRcclxuLy8yIC0gcG9pc29uZWQvZnJpZ2h0ZW5lZFxyXG4vLzMtICBhZ2VkXHJcbi8vNCAtIGNoYXJyZWQgY3JlYXR1cmVcclxuLy81IC0gZnJvemVuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0c05vdE9mVHlwZSA9IGZ1bmN0aW9uIChha0FjdG9yLCBhaUVmZmVjdFR5cGUpIHsgcmV0dXJuIHNuLlJlbW92ZUVmZmVjdHNOb3RPZlR5cGUoYWtBY3RvciwgYWlFZmZlY3RUeXBlKTsgfTtcclxuLy8gMCAtIHBlcm1hbmVudFxyXG4vLyAxIC0gdGVtcG9yYXJ5XHJcbi8vIDIgLSBmcm96ZW5BY3RvclxyXG4vLyAzIC0gZnJvemVuQ29sXHJcbmV4cG9ydCB2YXIgU2VuZEZFQ1Jlc2V0RXZlbnQgPSBmdW5jdGlvbiAoYWtBY3RvciwgYWlUeXBlLCBhYlJlc2V0M0QpIHsgcmV0dXJuIHNuLlNlbmRGRUNSZXNldEV2ZW50KGFrQWN0b3IsIGFpVHlwZSwgYWJSZXNldDNEKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vRk9STVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9SZWNvcmQgZmxhZ3NcclxuLy9odHRwczovL2VuLnVlc3AubmV0L3dpa2kvU2t5cmltX01vZDpNb2RfRmlsZV9Gb3JtYXQjUmVjb3Jkc1xyXG4vL2V2YWx1YXRlcyBjb25kaXRpb24gbGlzdHMgZm9yIHNwZWxscy9wb3Rpb25zL2VuY2hhbnRtZW50cy9tZ2VmcyBhbmQgcmV0dXJucyBpZiB0aGV5IGNhbiBiZSBmdWxsZmlsbGVkXHJcbmV4cG9ydCB2YXIgRXZhbHVhdGVDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtBY3Rpb25SZWYsIGFrVGFyZ2V0UmVmKSB7IHJldHVybiBzbi5FdmFsdWF0ZUNvbmRpdGlvbkxpc3QoYWtGb3JtLCBha0FjdGlvblJlZiwgYWtUYXJnZXRSZWYpOyB9O1xyXG4vL0NsZWFyIHJlY29yZCBmbGFnXHJcbmV4cG9ydCB2YXIgQ2xlYXJSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5DbGVhclJlY29yZEZsYWcoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL0J1aWxkcyBhIGxpc3Qgb2YgY29uZGl0aW9ucyBwcmVzZW50IG9uIHRoZSBmb3JtLiBJbmRleCBpcyBmb3Igc3BlbGxzL290aGVyIGZvcm1zIHRoYXQgaGF2ZSBsaXN0cyB3aXRoIGNvbmRpdGlvbnNcclxuLy9Tb21lIGNvbmRpdGlvbnMgbWF5IGJlIHNraXBwZWQgKGNvbmRpdGlvbnMgdGhhdCByZXF1aXJlIG5vbiBwbGF5ZXIgcmVmZXJlbmNlcywgb3Zlcmx5IGNvbXBsZXggY29uZGl0aW9ucyBpbnZvbHZpbmcgcGFja2FnZXMvYWxpYXNlcylcclxuZXhwb3J0IHZhciBHZXRDb25kaXRpb25MaXN0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlJbmRleCkge1xyXG4gICAgaWYgKGFpSW5kZXggPT09IHZvaWQgMCkgeyBhaUluZGV4ID0gMDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldENvbmRpdGlvbkxpc3QoYWtGb3JtLCBhaUluZGV4KTtcclxufTtcclxuLy9HZXQgZm9ybSBlZGl0b3JJRFxyXG5leHBvcnQgdmFyIEdldEZvcm1FZGl0b3JJRCA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5HZXRGb3JtRWRpdG9ySUQoYWtGb3JtKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgcGFydCBvZiB0aGUgbW9kXHJcbmV4cG9ydCB2YXIgSXNGb3JtSW5Nb2QgPSBmdW5jdGlvbiAoYWtGb3JtLCBhc01vZE5hbWUpIHsgcmV0dXJuIHNuLklzRm9ybUluTW9kKGFrRm9ybSwgYXNNb2ROYW1lKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIGZvcm0gaXMgdGVtcG9yYXJ5IChpZS4gaGFzIGEgZm9ybUlEIGJlZ2lubmluZyB3aXRoIEZGKVxyXG5leHBvcnQgdmFyIElzR2VuZXJhdGVkRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Jc0dlbmVyYXRlZEZvcm0oYWtGb3JtKTtcclxufTtcclxuLy9JcyByZWNvcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNSZWNvcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5Jc1JlY29yZEZsYWdTZXQoYWtGb3JtLCBhaUZsYWcpOyB9O1xyXG4vL3JldHVybnMgd2hldGhlciB0aGUgZm9ybSBoYXMgc2NyaXB0IGF0dGFjaGVkLiBJZiBzY3JpcHROYW1lIGlzIGVtcHR5LCBpdCB3aWxsIHJldHVybiBpZiB0aGUgZm9ybSBoYXMgYW55IG5vbi1iYXNlIHNjcmlwdHMgYXR0YWNoZWRcclxuZXhwb3J0IHZhciBJc1NjcmlwdEF0dGFjaGVkVG9Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYXNTY3JpcHROYW1lKSB7IHJldHVybiBzbi5Jc1NjcmlwdEF0dGFjaGVkVG9Gb3JtKGFrRm9ybSwgYXNTY3JpcHROYW1lKTsgfTtcclxuLy9TZXQgcmVjb3JkIGZsYWdcclxuZXhwb3J0IHZhciBTZXRSZWNvcmRGbGFnID0gZnVuY3Rpb24gKGFrRm9ybSwgYWlGbGFnKSB7IHJldHVybiBzbi5TZXRSZWNvcmRGbGFnKGFrRm9ybSwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGtleXdvcmQgdG8gZm9ybS4gRmFpbHMgaWYgdGhlIGZvcm0gZG9lc24ndCBhY2NlcHQga2V5d29yZHMuXHJcbmV4cG9ydCB2YXIgQWRkS2V5d29yZFRvRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvRm9ybShha0Zvcm0sIGFrS2V5d29yZCk7IH07XHJcbi8vRmF2b3JpdGVzIGl0ZW0gKG11c3QgYmUgaW4gaW52ZW50b3J5KSBvciBzcGVsbC9zaG91dFxyXG5leHBvcnQgdmFyIE1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5NYXJrSXRlbUFzRmF2b3JpdGUoYWtGb3JtKTtcclxufTtcclxuLy9SZXBsYWNlcyBnaXZlbiBrZXl3b3JkIHdpdGggbmV3IG9uZSBvbiBmb3JtLiBPbmx5IGxhc3RzIGZvciBhIHNpbmdsZSBnYW1pbmcgc2Vzc2lvbi4gW3BvcnRlZCBmcm9tIERpZW5lc1Rvb2xzXS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uRm9ybSA9IGZ1bmN0aW9uIChha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKSB7IHJldHVybiBzbi5SZXBsYWNlS2V5d29yZE9uRm9ybShha0Zvcm0sIGFrS2V5d29yZEFkZCwgYWtLZXl3b3JkUmVtb3ZlKTsgfTtcclxuLy9SZW1vdmVzIGtleXdvcmQsIGlmIHByZXNlbnQsIGZyb20gZm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkT25Gb3JtID0gZnVuY3Rpb24gKGFrRm9ybSwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkT25Gb3JtKGFrRm9ybSwgYWtLZXl3b3JkKTsgfTtcclxuLy9VbmZhdm9yaXRlcyBpdGVtIChtdXN0IGJlIGluIGludmVudG9yeSkgb3Igc3BlbGwvc2hvdXRcclxuZXhwb3J0IHZhciBVbm1hcmtJdGVtQXNGYXZvcml0ZSA9IGZ1bmN0aW9uIChha0Zvcm0pIHtcclxuICAgIHJldHVybiBzbi5Vbm1hcmtJdGVtQXNGYXZvcml0ZShha0Zvcm0pO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9GVVJOSVRVUkVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qKiBGVVJOSVRVUkUgVFlQRVNcclxuICAgICAgICBQZXJjaCA9IDBcclxuICAgICAgICBMZWFuID0gMVxyXG4gICAgICAgIFNpdCA9IDJcclxuICAgICAgICBTbGVlcCA9IDMgKi9cclxuLy9HZXRzIGZ1cm5pdHVyZSB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0RnVybml0dXJlVHlwZSA9IGZ1bmN0aW9uIChha0Z1cm5pdHVyZSkgeyByZXR1cm4gc24uR2V0RnVybml0dXJlVHlwZShha0Z1cm5pdHVyZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dBTUVcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheVxyXG5leHBvcnQgdmFyIEdldEFsbEVuY2hhbnRtZW50cyA9IGZ1bmN0aW9uIChha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRW5jaGFudG1lbnRzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGZyb20gYmFzZSBnYW1lICsgbW9kcywgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXlcclxuZXhwb3J0IHZhciBHZXRBbGxGb3JtcyA9IGZ1bmN0aW9uIChhaUZvcm1UeXBlLCBha0tleXdvcmRzKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uR2V0QWxsRm9ybXMoYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgcmFjZXMgZnJvbSBiYXNlIGdhbWUgKyBtb2RzLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5XHJcbmV4cG9ydCB2YXIgR2V0QWxsUmFjZXMgPSBmdW5jdGlvbiAoYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzKGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHNwZWxscyBmcm9tIGJhc2UgZ2FtZSArIG1vZHMsIGZpbHRlcmVkIHVzaW5nIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuIElzUGxheWFibGUgZmlsdGVycyBvdXQgc3BlbGxzIHRoYXQgYXJlIG5vdCBmb3VuZCBpbiBzcGVsbGJvb2tzLlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxscyA9IGZ1bmN0aW9uIChha0tleXdvcmRzLCBhYklzUGxheWFibGUpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIGlmIChhYklzUGxheWFibGUgPT09IHZvaWQgMCkgeyBhYklzUGxheWFibGUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFNwZWxscyhha0tleXdvcmRzLCBhYklzUGxheWFibGUpO1xyXG59O1xyXG4vKiogQUkgUFJPQ0VTUyBMRVZFTFxyXG4gICAgICAgIEhpZ2hQcm9jZXNzID0gMFxyXG4gICAgICAgIE1pZGRsZUhpZ2hQcm9jZXNzID0gMVxyXG4gICAgICAgIE1pZGRsZUxvd1Byb2Nlc3MgPSAyXHJcbiAgICAgICAgTG93UHJvY2VzcyA9IDMgKi9cclxuLy9HZXRzIGFsbCBhY3RvcnMgYnkgQUkgcHJvY2Vzc2luZyB0eXBlLiBodHRwczovL2dlY2suYmV0aHNvZnQuY29tL2luZGV4LnBocD90aXRsZT1HZXRBY3RvcnNCeVByb2Nlc3NpbmdMZXZlbCBmb3IgbW9yZSBpbmZvXHJcbmV4cG9ydCB2YXIgR2V0QWN0b3JzQnlQcm9jZXNzaW5nTGV2ZWwgPSBmdW5jdGlvbiAoYWlMZXZlbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEFjdG9yc0J5UHJvY2Vzc2luZ0xldmVsKGFpTGV2ZWwpO1xyXG59O1xyXG4vL0dldHMgYWxsIGZvcm1zIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgZm9ybXR5cGUgYW5kIG9wdGlvbmFsIGtleXdvcmQgYXJyYXkuXHJcbmV4cG9ydCB2YXIgR2V0QWxsRm9ybXNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFpRm9ybVR5cGUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxGb3Jtc0luTW9kKGFzTW9kTmFtZSwgYWlGb3JtVHlwZSwgYWtLZXl3b3Jkcyk7XHJcbn07XHJcbi8vR2V0cyBhbGwgZW5jaGFudG1lbnRzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxFbmNoYW50bWVudHNJbk1vZCA9IGZ1bmN0aW9uIChhc01vZE5hbWUsIGFrS2V5d29yZHMpIHtcclxuICAgIGlmIChha0tleXdvcmRzID09PSB2b2lkIDApIHsgYWtLZXl3b3JkcyA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxFbmNoYW50bWVudHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMpO1xyXG59O1xyXG4vL0dldHMgYWxsIHJhY2VzIGFkZGVkIGJ5IGEgc3BlY2lmaWVkIG1vZC9nYW1lIGVzbSwgZmlsdGVyZWQgdXNpbmcgb3B0aW9uYWwga2V5d29yZCBhcnJheS5cclxuZXhwb3J0IHZhciBHZXRBbGxSYWNlc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3Jkcykge1xyXG4gICAgaWYgKGFrS2V5d29yZHMgPT09IHZvaWQgMCkgeyBha0tleXdvcmRzID0gbnVsbDsgfVxyXG4gICAgcmV0dXJuIHNuLkdldEFsbFJhY2VzSW5Nb2QoYXNNb2ROYW1lLCBha0tleXdvcmRzKTtcclxufTtcclxuLy9HZXRzIGFsbCBzcGVsbHMgYWRkZWQgYnkgYSBzcGVjaWZpZWQgbW9kL2dhbWUgZXNtLCBmaWx0ZXJlZCB1c2luZyBvcHRpb25hbCBrZXl3b3JkIGFycmF5LlxyXG5leHBvcnQgdmFyIEdldEFsbFNwZWxsc0luTW9kID0gZnVuY3Rpb24gKGFzTW9kTmFtZSwgYWtLZXl3b3JkcywgYWJJc1BsYXlhYmxlKSB7XHJcbiAgICBpZiAoYWtLZXl3b3JkcyA9PT0gdm9pZCAwKSB7IGFrS2V5d29yZHMgPSBudWxsOyB9XHJcbiAgICBpZiAoYWJJc1BsYXlhYmxlID09PSB2b2lkIDApIHsgYWJJc1BsYXlhYmxlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5HZXRBbGxTcGVsbHNJbk1vZChhc01vZE5hbWUsIGFrS2V5d29yZHMsIGFiSXNQbGF5YWJsZSk7XHJcbn07XHJcbi8vR2V0cyBjdXJyZW50IGNlbGwgaWYgaW4gaW50ZXJpb3IvYXR0YWNoZWQgY2VsbHMgaW4gZXh0ZXJpb3Ivc2t5IGNlbGxzIGlmIGluIHdvcmxkc3BhY2Ugd2l0aCBubyBhdHRhY2hlZCBjZWxscz8/XHJcbmV4cG9ydCB2YXIgR2V0QXR0YWNoZWRDZWxscyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEF0dGFjaGVkQ2VsbHMoKTsgfTtcclxuLy9HZXRzIGZvcm0gdXNpbmcgaXRzIGVkaXRvcklEXHJcbmV4cG9ydCB2YXIgR2V0Rm9ybUZyb21FZGl0b3JJRCA9IGZ1bmN0aW9uIChhc0VkaXRvcklEKSB7IHJldHVybiBzbi5HZXRGb3JtRnJvbUVkaXRvcklEKGFzRWRpdG9ySUQpOyB9O1xyXG4vL0dldHMgdGhlIHZhbHVlIG9mIHRoZSBib29sZWFuIGdhbWVzZXR0aW5nLiBSZXR1cm5zIC0xIGlmIGdtc3QgaXMgTm9uZSBvciBub3QgYSBib29sLlxyXG5leHBvcnQgdmFyIEdldEdhbWVTZXR0aW5nQm9vbCA9IGZ1bmN0aW9uIChhc0dhbWVTZXR0aW5nKSB7XHJcbiAgICByZXR1cm4gc24uR2V0R2FtZVNldHRpbmdCb29sKGFzR2FtZVNldHRpbmcpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBHb2QgTW9kZSBpcyBlbmFibGVkXHJcbmV4cG9ydCB2YXIgR2V0R29kTW9kZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldEdvZE1vZGUoKTsgfTtcclxuLy9HZXRzIGxvY2FsIGdyYXZpdHkgb2YgdGhlIGV4dGVyaW9yIHdvcmxkc3BhY2UvaW50ZXJpb3IgY2VsbC4gRGVmYXVsdCBncmF2aXR5IGlzIFswLjAsIDAuMCwgLTkuODFdXHJcbmV4cG9ydCB2YXIgR2V0TG9jYWxHcmF2aXR5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc24uR2V0TG9jYWxHcmF2aXR5KCk7IH07XHJcbi8vR2V0cyBob3cgbWFueSBhY3RvcnMgYXJlIGluIGhpZ2ggcHJvY2Vzc1xyXG5leHBvcnQgdmFyIEdldE51bUFjdG9yc0luSGlnaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLkdldE51bUFjdG9yc0luSGlnaCgpOyB9O1xyXG4vL1JldHVybnMgYWxsIGFjdG9ycyB0aGF0IGFyZSBjdXJyZW50bHkgZm9sbG93aW5nIHRoZSBwbGF5ZXJcclxuZXhwb3J0IHZhciBHZXRQbGF5ZXJGb2xsb3dlcnMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRQbGF5ZXJGb2xsb3dlcnMoKTsgfTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgcGx1Z2luIGV4aXN0c1xyXG5leHBvcnQgdmFyIElzUGx1Z2luRm91bmQgPSBmdW5jdGlvbiAoYWtOYW1lKSB7XHJcbiAgICByZXR1cm4gc24uSXNQbHVnaW5Gb3VuZChha05hbWUpO1xyXG59O1xyXG4vL1JldHVybnMgd2hldGhlciBDQyBTdXJ2aXZhbCBNb2RlIGlzIGVuYWJsZWRcclxuZXhwb3J0IHZhciBJc1N1cnZpdmFsTW9kZUFjdGl2ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNuLklzU3Vydml2YWxNb2RlQWN0aXZlKCk7IH07XHJcbi8vU2V0cyBsb2NhbCBncmF2aXR5IChtcy0yKSBvZiB0aGUgZXh0ZXJpb3Igd29ybGRzcGFjZS9pbnRlcmlvciBjZWxsLlxyXG5leHBvcnQgdmFyIFNldExvY2FsR3Jhdml0eSA9IGZ1bmN0aW9uIChhZlhBeGlzLCBhZllBeGlzLCBhZlpBeGlzKSB7IHJldHVybiBzbi5TZXRMb2NhbEdyYXZpdHkoYWZYQXhpcywgYWZZQXhpcywgYWZaQXhpcyk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0hBWkFSRFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIEhBWkFSRCBGTEFHU1xyXG4gICAgICAgIE5vbmUgPSAwXHJcbiAgICAgICAgUENPbmx5ID0gMHgwMDAwMDAwMVxyXG4gICAgICAgIEluaGVyaXREdXJhdGlvbiA9IDB4MDAwMDAwMDJcclxuICAgICAgICBBbGlnblRvTm9ybWFsID0gMHgwMDAwMDAwNFxyXG4gICAgICAgIEluaGVyaXRSYWRpdXMgPSAweDAwMDAwMDA4XHJcbiAgICAgICAgRHJvcFRvR3JvdW5kID0gMHgwMDAwMDAxMCAqL1xyXG4vL0dldHMgaGF6YXJkIGFydCBwYXRoLCBlZy4gXCJFZmZlY3RzL015SGF6YXJkQXJ0Lm5pZlwiXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7XHJcbiAgICByZXR1cm4gc24uR2V0SGF6YXJkQXJ0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGFzc29jaWF0ZWQgSU1PRFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElNT0QgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElNT0QoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgSU1PRCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRJTU9EUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGltcGFjdCBkYXRhIHNldFxyXG5leHBvcnQgdmFyIEdldEhhemFyZElQRFMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZElQRFMoYWtIYXphcmQpOyB9O1xyXG4vL0dldHMgaGF6YXJkIGxpZmV0aW1lXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkTGlmZXRpbWUgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZExpZmV0aW1lKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBsaWdodFxyXG5leHBvcnQgdmFyIEdldEhhemFyZExpZ2h0ID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRMaWdodChha0hhemFyZCk7IH07XHJcbi8vR2V0cyBoYXphcmQgbGltaXRcclxuZXhwb3J0IHZhciBHZXRIYXphcmRMaW1pdCA9IGZ1bmN0aW9uIChha0hhemFyZCkge1xyXG4gICAgcmV0dXJuIHNuLkdldEhhemFyZExpbWl0KGFrSGF6YXJkKTtcclxufTtcclxuLy9HZXRzIGhhemFyZCByYWRpdXNcclxuZXhwb3J0IHZhciBHZXRIYXphcmRSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHtcclxuICAgIHJldHVybiBzbi5HZXRIYXphcmRSYWRpdXMoYWtIYXphcmQpO1xyXG59O1xyXG4vL0dldHMgaGF6YXJkIHNvdW5kXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkU291bmQgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFNvdW5kKGFrSGF6YXJkKTsgfTtcclxuLy9HZXRzIGhhemFyZCBzcGVsbFxyXG5leHBvcnQgdmFyIEdldEhhemFyZFNwZWxsID0gZnVuY3Rpb24gKGFrSGF6YXJkKSB7IHJldHVybiBzbi5HZXRIYXphcmRTcGVsbChha0hhemFyZCk7IH07XHJcbi8vR2V0cyB0YXJnZXQgaW50ZXJ2YWwgKGR1cmF0aW9uIGJldHdlZW4gY2FzdHMpXHJcbmV4cG9ydCB2YXIgR2V0SGF6YXJkVGFyZ2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoYWtIYXphcmQpIHsgcmV0dXJuIHNuLkdldEhhemFyZFRhcmdldEludGVydmFsKGFrSGF6YXJkKTsgfTtcclxuLy9JcyBoYXphcmQgZmxhZyBzZXQ/XHJcbmV4cG9ydCB2YXIgSXNIYXphcmRGbGFnU2V0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUZsYWcpIHsgcmV0dXJuIHNuLklzSGF6YXJkRmxhZ1NldChha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9DbGVhcnMgaGF6YXJkIGZsYWdcclxuZXhwb3J0IHZhciBDbGVhckhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uQ2xlYXJIYXphcmRGbGFnKGFrSGF6YXJkLCBhaUZsYWcpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGFydCBwYXRoLiBEb2VzIG5vdCB3b3JrIG9uIGFjdGl2ZSBoYXphcmRzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkQXJ0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhc1BhdGgpIHsgcmV0dXJuIHNuLlNldEhhemFyZEFydChha0hhemFyZCwgYXNQYXRoKTsgfTtcclxuLy9TZXQgZmxhZ1xyXG5leHBvcnQgdmFyIFNldEhhemFyZEZsYWcgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFpRmxhZykgeyByZXR1cm4gc24uU2V0SGF6YXJkRmxhZyhha0hhemFyZCwgYWlGbGFnKTsgfTtcclxuLy9TZXRzIElNT0RcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJTU9EID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lNT0QpIHsgcmV0dXJuIHNuLlNldEhhemFyZElNT0QoYWtIYXphcmQsIGFrSU1PRCk7IH07XHJcbi8vU2V0cyBJTU9EIHJhZGl1c1xyXG5leHBvcnQgdmFyIFNldEhhemFyZElNT0RSYWRpdXMgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFmUmFkaXVzKSB7IHJldHVybiBzbi5TZXRIYXphcmRJTU9EUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBpbXBhY3QgZGF0YSBzZXRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRJUERTID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBha0lQRFMpIHsgcmV0dXJuIHNuLlNldEhhemFyZElQRFMoYWtIYXphcmQsIGFrSVBEUyk7IH07XHJcbi8vU2V0cyBoYXphcmQgbGlmZXRpbWVcclxuZXhwb3J0IHZhciBTZXRIYXphcmRMaWZldGltZSA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWZMaWZldGltZSkgeyByZXR1cm4gc24uU2V0SGF6YXJkTGlmZXRpbWUoYWtIYXphcmQsIGFmTGlmZXRpbWUpOyB9O1xyXG4vL1NldHMgaGF6YXJkIGxpZ2h0XHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkTGlnaHQgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrTGlnaHQpIHsgcmV0dXJuIHNuLlNldEhhemFyZExpZ2h0KGFrSGF6YXJkLCBha0xpZ2h0KTsgfTtcclxuLy9TZXRzIGhhemFyZCBsaW1pdFxyXG5leHBvcnQgdmFyIFNldEhhemFyZExpbWl0ID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhaUxpbWl0KSB7IHJldHVybiBzbi5TZXRIYXphcmRMaW1pdChha0hhemFyZCwgYWlMaW1pdCk7IH07XHJcbi8vU2V0cyBoYXphcmQgcmFkaXVzXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkUmFkaXVzID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZlJhZGl1cykgeyByZXR1cm4gc24uU2V0SGF6YXJkUmFkaXVzKGFrSGF6YXJkLCBhZlJhZGl1cyk7IH07XHJcbi8vU2V0cyBoYXphcmQgc291bmRcclxuZXhwb3J0IHZhciBTZXRIYXphcmRTb3VuZCA9IGZ1bmN0aW9uIChha0hhemFyZCwgYWtTb3VuZCkgeyByZXR1cm4gc24uU2V0SGF6YXJkU291bmQoYWtIYXphcmQsIGFrU291bmQpOyB9O1xyXG4vL1NldHMgaGF6YXJkIHNwZWxsXHJcbmV4cG9ydCB2YXIgU2V0SGF6YXJkU3BlbGwgPSBmdW5jdGlvbiAoYWtIYXphcmQsIGFrc3BlbGwpIHsgcmV0dXJuIHNuLlNldEhhemFyZFNwZWxsKGFrSGF6YXJkLCBha3NwZWxsKTsgfTtcclxuLy9TZXRzIGhhemFyZCBpbnRlcnZhbFxyXG5leHBvcnQgdmFyIFNldEhhemFyZFRhcmdldEludGVydmFsID0gZnVuY3Rpb24gKGFrSGF6YXJkLCBhZkludGVydmFsKSB7IHJldHVybiBzbi5TZXRIYXphcmRUYXJnZXRJbnRlcnZhbChha0hhemFyZCwgYWZJbnRlcnZhbCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xJR0hUXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldHMgbGlnaHQgY29sb3IuXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRDb2xvciA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7IHJldHVybiBzbi5HZXRMaWdodENvbG9yKGFrTGlnaHQpOyB9O1xyXG4vL0dldHMgbGlnaHQgZmFkZSByYW5nZS5cclxuZXhwb3J0IHZhciBHZXRMaWdodEZhZGUgPSBmdW5jdGlvbiAoYWtMaWdodCkge1xyXG4gICAgcmV0dXJuIHNuLkdldExpZ2h0RmFkZShha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIEdldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodEZPVihha0xpZ2h0KTtcclxufTtcclxuLy9HZXRzIGxpZ2h0IHJhZGl1cyAocmFkaXVzIGlzIGFjdHVhbGx5IGludCBidXQgY2hhbmdpbmcgdGhhdCB3b3VsZCBicmVhayBtb2RzIHNvIGZpeGVkIHRoYXQgaW4gc291cmNlKS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJhZGl1cyA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSYWRpdXMoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBsaWdodCBjb2xvciBhcyBSR0IgYXJyYXkgWzAtMjU1XS5cclxuZXhwb3J0IHZhciBHZXRMaWdodFJHQiA9IGZ1bmN0aW9uIChha0xpZ2h0KSB7XHJcbiAgICByZXR1cm4gc24uR2V0TGlnaHRSR0IoYWtMaWdodCk7XHJcbn07XHJcbi8vR2V0cyBkZXB0aCBiaWFzLCByZXR1cm5zIDEgaWYgbm90IHNldC5cclxuZXhwb3J0IHZhciBHZXRMaWdodFNoYWRvd0RlcHRoQmlhcyA9IGZ1bmN0aW9uIChha0xpZ2h0T2JqZWN0KSB7IHJldHVybiBzbi5HZXRMaWdodFNoYWRvd0RlcHRoQmlhcyhha0xpZ2h0T2JqZWN0KTsgfTtcclxuLyoqIExJR0hUIFRZUEVTXHJcbiAgICAgICAgSGVtaVNoYWRvdyA9IDFcclxuICAgICAgICBPbW5pID0gMlxyXG4gICAgICAgIE9tbmlTaGFkb3cgPSAzXHJcbiAgICAgICAgU3BvdCA9IDRcclxuICAgICAgICBTcG90U2hhZG93ID0gNSAqL1xyXG4vL0dldCBsaWdodCB0eXBlXHJcbmV4cG9ydCB2YXIgR2V0TGlnaHRUeXBlID0gZnVuY3Rpb24gKGFrTGlnaHQpIHtcclxuICAgIHJldHVybiBzbi5HZXRMaWdodFR5cGUoYWtMaWdodCk7XHJcbn07XHJcbi8vLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tXHJcbi8vU2V0cyBsaWdodCBjb2xvci5cclxuZXhwb3J0IHZhciBTZXRMaWdodENvbG9yID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKSB7IHJldHVybiBzbi5TZXRMaWdodENvbG9yKGFrTGlnaHQsIGFrQ29sb3Jmb3JtKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGZhZGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRGYWRlID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldExpZ2h0RmFkZShha0xpZ2h0LCBhZlJhbmdlKTsgfTtcclxuLy9zZXRzIGJhc2UgbGlnaHQgRk9WLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0Rk9WID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFmRk9WKSB7IHJldHVybiBzbi5TZXRMaWdodEZPVihha0xpZ2h0LCBhZkZPVik7IH07XHJcbi8vU2V0cyBsaWdodCByYWRpdXMgKG1pbmltdW0gbGlnaHQgcmFkaXVzIGlzIDE2KSAuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRSYWRpdXMgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWZSYWRpdXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0UmFkaXVzKGFrTGlnaHQsIGFmUmFkaXVzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IGNvbG9yIHVzaW5nIFJHQiBhcnJheSBbMC0yNTVdLiBBcnJheSBtdXN0IGNvbnRhaW4gMyBlbGVtZW50cyAocixnLGIpLlxyXG5leHBvcnQgdmFyIFNldExpZ2h0UkdCID0gZnVuY3Rpb24gKGFrTGlnaHQsIGFpUkdCKSB7IHJldHVybiBzbi5TZXRMaWdodFJHQihha0xpZ2h0LCBhaVJHQik7IH07XHJcbi8vc2V0cyBkZXB0aCBiaWFzIG9uIGxpZ2h0IHJlZmVyZW5jZS4gQ3JlYXRlcyBuZXcgZGVwdGggYmlhcyBleHRyYWRhdGEgb24gbGlnaHRzIHRoYXQgZG9uJ3QgaGF2ZSBpdCBzZXQuXHJcbmV4cG9ydCB2YXIgU2V0TGlnaHRTaGFkb3dEZXB0aEJpYXMgPSBmdW5jdGlvbiAoYWtMaWdodE9iamVjdCwgYWZEZXB0aEJpYXMpIHsgcmV0dXJuIHNuLlNldExpZ2h0U2hhZG93RGVwdGhCaWFzKGFrTGlnaHRPYmplY3QsIGFmRGVwdGhCaWFzKTsgfTtcclxuLy9TZXRzIGxpZ2h0IHR5cGUuIERvZXMgbm90IHBlcnNpc3QgYmV0d2VlbiBzZXNzaW9ucy5cclxuZXhwb3J0IHZhciBTZXRMaWdodFR5cGUgPSBmdW5jdGlvbiAoYWtMaWdodCwgYWlMaWdodFR5cGUpIHsgcmV0dXJuIHNuLlNldExpZ2h0VHlwZShha0xpZ2h0LCBhaUxpZ2h0VHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0xPQ0FUSU9OXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL0dldCBwYXJlbnQgbG9jYXRpb24uXHJcbmV4cG9ydCB2YXIgR2V0UGFyZW50TG9jYXRpb24gPSBmdW5jdGlvbiAoYWtMb2MpIHsgcmV0dXJuIHNuLkdldFBhcmVudExvY2F0aW9uKGFrTG9jKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXQgcGFyZW50IGxvY2F0aW9uLlxyXG5leHBvcnQgdmFyIFNldFBhcmVudExvY2F0aW9uID0gZnVuY3Rpb24gKGFrTG9jLCBha05ld0xvYykgeyByZXR1cm4gc24uU2V0UGFyZW50TG9jYXRpb24oYWtMb2MsIGFrTmV3TG9jKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTUFHSUMgRUZGRUNUU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS0tXHJcbi8vR2V0cyBhc3NvY2lhdGVkIGZvcm0gKExpZ2h0IGZvciBMaWdodCBzcGVsbHMsIEFjdG9yIGZvciBTdW1tb24gQ3JlYXR1cmUuLi4pLCBpZiBhbnlcclxuZXhwb3J0IHZhciBHZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBc3NvY2lhdGVkRm9ybShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIEVGRkVDVCBBUkNIRVRZUEVTXHJcbiAgICAgICAgVmFsdWVNb2QgPSAwXHJcbiAgICAgICAgU2NyaXB0ID0gMVxyXG4gICAgICAgIERpc3BlbCA9IDJcclxuICAgICAgICBDdXJlRGlzZWFzZSA9IDNcclxuICAgICAgICBBYnNvcmIgPSA0XHJcbiAgICAgICAgRHVhbFZhbHVlTW9kID0gNVxyXG4gICAgICAgIENhbG0gPSA2XHJcbiAgICAgICAgRGVtb3JhbGl6ZSA9IDdcclxuICAgICAgICBGcmVuenkgPSA4XHJcbiAgICAgICAgRGlzYXJtID0gOVxyXG4gICAgICAgIENvbW1hbmRTdW1tb25lZCA9IDEwXHJcbiAgICAgICAgSW52aXNpYmlsaXR5ID0gMTFcclxuICAgICAgICBMaWdodCA9IDEyXHJcbiAgICAgICAgRGFya25lc3MgPSAxM1xyXG4gICAgICAgIE5pZ2h0RXllID0gMTRcclxuICAgICAgICBMb2NrID0gMTVcclxuICAgICAgICBPcGVuID0gMTZcclxuICAgICAgICBCb3VuZFdlYXBvbiA9IDE3XHJcbiAgICAgICAgU3VtbW9uQ3JlYXR1cmUgPSAxOFxyXG4gICAgICAgIERldGVjdExpZmUgPSAxOVxyXG4gICAgICAgIFRlbGVraW5lc2lzID0gMjBcclxuICAgICAgICBQYXJhbHlzaXMgPSAyMVxyXG4gICAgICAgIFJlYW5pbWF0ZSA9IDIyXHJcbiAgICAgICAgU291bFRyYXAgPSAyM1xyXG4gICAgICAgIFR1cm5VbmRlYWQgPSAyNFxyXG4gICAgICAgIEd1aWRlID0gMjVcclxuICAgICAgICBXZXJld29sZkZlZWQgPSAyNlxyXG4gICAgICAgIEN1cmVQYXJhbHlzaXMgPSAyN1xyXG4gICAgICAgIEN1cmVBZGRpY3Rpb24gPSAyOFxyXG4gICAgICAgIEN1cmVQb2lzb24gPSAyOVxyXG4gICAgICAgIENvbmN1c3Npb24gPSAzMFxyXG4gICAgICAgIFZhbHVlQW5kUGFydHMgPSAzMVxyXG4gICAgICAgIEFjY3VtdWxhdGVNYWduaXR1ZGUgPSAzMlxyXG4gICAgICAgIFN0YWdnZXIgPSAzM1xyXG4gICAgICAgIFBlYWtWYWx1ZU1vZCA9IDM0XHJcbiAgICAgICAgQ2xvYWsgPSAzNVxyXG4gICAgICAgIFdlcmV3b2xmID0gMzZcclxuICAgICAgICBTbG93VGltZSA9IDM3XHJcbiAgICAgICAgUmFsbHkgPSAzOFxyXG4gICAgICAgIEVuaGFuY2VXZWFwb24gPSAzOVxyXG4gICAgICAgIFNwYXduSGF6YXJkID0gNDBcclxuICAgICAgICBFdGhlcmVhbGl6ZSA9IDQxXHJcbiAgICAgICAgQmFuaXNoID0gNDJcclxuICAgICAgICBTcGF3blNjcmlwdGVkUmVmID0gNDNcclxuICAgICAgICBEaXNndWlzZSA9IDQ0XHJcbiAgICAgICAgR3JhYkFjdG9yID0gNDVcclxuICAgICAgICBWYW1waXJlTG9yZCA9IDQ2ICovXHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIGludCAoMC00NikuXHJcbmV4cG9ydCB2YXIgR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0RWZmZWN0QXJjaGV0eXBlQXNJbnQoYWtNYWdpY0VmZmVjdCk7IH07XHJcbi8vR2V0cyBlZmZlY3QgYXJjaGV0eXBlIG9mIG1hZ2ljZWZmZWN0IGFuZCByZXR1cm5zIGFzIFN0cmluZy5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0KSB7IHJldHVybiBzbi5HZXRFZmZlY3RBcmNoZXR5cGVBc1N0cmluZyhha01hZ2ljRWZmZWN0KTsgfTtcclxuLy9HZXRzIHByaW1hcnkgYWN0b3IgdmFsdWUgYXMgc3RyaW5nLCBpZiBhbnkgKEZyb3N0UmVzaXN0LCBTcGVlZE11bHQpLlxyXG5leHBvcnQgdmFyIEdldFByaW1hcnlBY3RvclZhbHVlID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QpIHsgcmV0dXJuIHNuLkdldFByaW1hcnlBY3RvclZhbHVlKGFrTWFnaWNFZmZlY3QpOyB9O1xyXG4vL0dldHMgc2Vjb25kYXJ5IGFjdG9yIHZhbHVlIGFzIHN0cmluZywgaWYgYW55LlxyXG5leHBvcnQgdmFyIEdldFNlY29uZGFyeUFjdG9yVmFsdWUgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCkgeyByZXR1cm4gc24uR2V0U2Vjb25kYXJ5QWN0b3JWYWx1ZShha01hZ2ljRWZmZWN0KTsgfTtcclxuLyoqIE1HRUYgU09VTkQgVFlQRVNcclxuICAgICAgICBEcmF3L1NoZWF0aGUgPSAwXHJcbiAgICAgICAgQ2hhcmdlID0gMVxyXG4gICAgICAgIFJlYWR5ID0gMlxyXG4gICAgICAgIFJlbGVhc2UgPSAzXHJcbiAgICAgICAgQ29uY2VudHJhdGlvbiBDYXN0IExvb3AgPSA0XHJcbiAgICAgICAgT24gSGl0ID0gNSAqL1xyXG4vL0dldHMgU291bmQgYXR0YWNoZWQgdG8gaW5kZXggb2YgU291bmQgdHlwZSBzcGVjaWZpZWQgaW4gbWFnaWMgZWZmZWN0LlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291bmQgPSBmdW5jdGlvbiAoYWtNYWdpY0VmZmVjdCwgYWlUeXBlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VuZChha01hZ2ljRWZmZWN0LCBhaVR5cGUpO1xyXG59O1xyXG4vLy0tLS0tLS1cclxuLy9TRVRURVJTXHJcbi8vLS0tLS0tLVxyXG4vL1NldHMgYXNzb2NpYXRlZCBmb3JtIChMaWdodCBmb3IgTGlnaHQgc3BlbGxzLCBBY3RvciBmb3IgU3VtbW9uIENyZWF0dXJlLi4uKS4gQ2FuIGJlIE5vbmVcclxuZXhwb3J0IHZhciBTZXRBc3NvY2lhdGVkRm9ybSA9IGZ1bmN0aW9uIChha01hZ2ljRWZmZWN0LCBha0Zvcm0pIHsgcmV0dXJuIHNuLlNldEFzc29jaWF0ZWRGb3JtKGFrTWFnaWNFZmZlY3QsIGFrRm9ybSk7IH07XHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIGluZGV4IG9mIFNvdW5kIHR5cGUgc3BlY2lmaWVkIGluIG1hZ2ljIGVmZmVjdC5cclxuZXhwb3J0IHZhciBTZXRNYWdpY0VmZmVjdFNvdW5kID0gZnVuY3Rpb24gKGFrTWFnaWNFZmZlY3QsIGFrU291bmREZXNjcmlwdG9yLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldE1hZ2ljRWZmZWN0U291bmQoYWtNYWdpY0VmZmVjdCwgYWtTb3VuZERlc2NyaXB0b3IsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL09CSkVDVFJFRkVSRU5DRVNcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLy9BZGRzIGFsbCBpbnZlbnRvcnkgaXRlbXMgdG8gYXJyYXksIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEFsbEl0ZW1zVG9BcnJheSA9IGZ1bmN0aW9uIChha1JlZiwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0FycmF5KGFrUmVmLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pO1xyXG59O1xyXG4vL0FkZHMgYWxsIGludmVudG9yeSBpdGVtcyB0byBmb3JtbGlzdCwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkQWxsSXRlbXNUb0xpc3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKSB7XHJcbiAgICBpZiAoYWJOb0VxdWlwcGVkID09PSB2b2lkIDApIHsgYWJOb0VxdWlwcGVkID0gdHJ1ZTsgfVxyXG4gICAgaWYgKGFiTm9GYXZvcml0ZWQgPT09IHZvaWQgMCkgeyBhYk5vRmF2b3JpdGVkID0gZmFsc2U7IH1cclxuICAgIGlmIChhYk5vUXVlc3RJdGVtID09PSB2b2lkIDApIHsgYWJOb1F1ZXN0SXRlbSA9IGZhbHNlOyB9XHJcbiAgICByZXR1cm4gc24uQWRkQWxsSXRlbXNUb0xpc3QoYWtSZWYsIGFrTGlzdCwgYWJOb0VxdWlwcGVkLCBhYk5vRmF2b3JpdGVkLCBhYk5vUXVlc3RJdGVtKTtcclxufTtcclxuLy9BZGRzIGludmVudG9yeSBpdGVtcyBtYXRjaGluZyBmb3JtdHlwZSB0byBhcnJheSwgZmlsdGVyaW5nIG91dCBlcXVpcHBlZCwgZmF2b3VyaXRlZCBhbmQgcXVlc3QgaXRlbXMuXHJcbmV4cG9ydCB2YXIgQWRkSXRlbXNPZlR5cGVUb0FycmF5ID0gZnVuY3Rpb24gKGFrUmVmLCBhaUZvcm1UeXBlLCBhYk5vRXF1aXBwZWQsIGFiTm9GYXZvcml0ZWQsIGFiTm9RdWVzdEl0ZW0pIHtcclxuICAgIGlmIChhYk5vRXF1aXBwZWQgPT09IHZvaWQgMCkgeyBhYk5vRXF1aXBwZWQgPSB0cnVlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgaWYgKGFiTm9RdWVzdEl0ZW0gPT09IHZvaWQgMCkgeyBhYk5vUXVlc3RJdGVtID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5BZGRJdGVtc09mVHlwZVRvQXJyYXkoYWtSZWYsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vQWRkcyBpbnZlbnRvcnkgaXRlbXMgbWF0Y2hpbmcgZm9ybXR5cGUgdG8gZm9ybWxpc3QsIGZpbHRlcmluZyBvdXQgZXF1aXBwZWQsIGZhdm91cml0ZWQgYW5kIHF1ZXN0IGl0ZW1zLlxyXG5leHBvcnQgdmFyIEFkZEl0ZW1zT2ZUeXBlVG9MaXN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IHRydWU7IH1cclxuICAgIGlmIChhYk5vRmF2b3JpdGVkID09PSB2b2lkIDApIHsgYWJOb0Zhdm9yaXRlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb1F1ZXN0SXRlbSA9PT0gdm9pZCAwKSB7IGFiTm9RdWVzdEl0ZW0gPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEl0ZW1zT2ZUeXBlVG9MaXN0KGFrUmVmLCBha0xpc3QsIGFpRm9ybVR5cGUsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCwgYWJOb1F1ZXN0SXRlbSk7XHJcbn07XHJcbi8vRmluZHMgYWxsIHJlZmVyZW5jZXMgb2YgZm9ybSB0eXBlIGluIGxvYWRlZCBjZWxscywgd2l0aGluIHJhZGl1cyBmcm9tIHJlZi4gSWYgYWZSYWRpdXMgaXMgMCwgaXQgd2lsbCBnZXQgYWxsIHJlZmVyZW5jZXMgZnJvbSBhbGwgYXR0YWNoZWQgY2VsbHNcclxuZXhwb3J0IHZhciBGaW5kQWxsUmVmZXJlbmNlc09mRm9ybVR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGZvcm1UeXBlLCBhZlJhZGl1cykge1xyXG4gICAgcmV0dXJuIHNuLkZpbmRBbGxSZWZlcmVuY2VzT2ZGb3JtVHlwZShha1JlZiwgZm9ybVR5cGUsIGFmUmFkaXVzKTtcclxufTtcclxuLy9GaW5kIGFsbCByZWZlcmVuY2VzIHdpdGgga2V5d29yZCBpbiBsb2FkZWQgY2VsbHMsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNXaXRoS2V5d29yZCA9IGZ1bmN0aW9uIChha1JlZiwga2V5d29yZE9yTGlzdCwgYWZSYWRpdXMsIGFiTWF0Y2hBbGwpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc1dpdGhLZXl3b3JkKGFrUmVmLCBrZXl3b3JkT3JMaXN0LCBhZlJhZGl1cywgYWJNYXRjaEFsbCk7XHJcbn07XHJcbi8vRmluZCBhbGwgcmVmZXJlbmNlcyBtYXRjaGluZyBiYXNlIGZvcm0vaW4gZm9ybWxpc3QsIHdpdGhpbiByYWRpdXMgZnJvbSByZWYuIElmIGFmUmFkaXVzIGlzIDAsIGl0IHdpbGwgZ2V0IGFsbCByZWZlcmVuY2VzIGZyb20gYWxsIGF0dGFjaGVkIGNlbGxzXHJcbmV4cG9ydCB2YXIgRmluZEFsbFJlZmVyZW5jZXNPZlR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrRm9ybU9yTGlzdCwgYWZSYWRpdXMpIHtcclxuICAgIHJldHVybiBzbi5GaW5kQWxsUmVmZXJlbmNlc09mVHlwZShha1JlZiwgYWtGb3JtT3JMaXN0LCBhZlJhZGl1cyk7XHJcbn07XHJcbi8vR2V0cyB0aGUgZmlyc3QgaXRlbSBpbiBpbnZlbnRvcnkgdGhhdCBleGlzdHMgaW4gZm9ybWxpc3QuXHJcbmV4cG9ydCB2YXIgRmluZEZpcnN0SXRlbUluTGlzdCA9IGZ1bmN0aW9uIChha1JlZiwgYWtMaXN0KSB7IHJldHVybiBzbi5GaW5kRmlyc3RJdGVtSW5MaXN0KGFrUmVmLCBha0xpc3QpOyB9O1xyXG4vL0dldHMgYWN0aXZhdGUgY2hpbGRyZW4gLSBzZWUgSXNBY3RpdmF0ZUNoaWxkXHJcbmV4cG9ydCB2YXIgR2V0QWN0aXZhdGVDaGlsZHJlbiA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWN0aXZhdGVDaGlsZHJlbihha1JlZik7IH07XHJcbi8vR2V0cyBjdXJyZW50IGdhbWVicnlvIGFuaW1hdGlvblxyXG5leHBvcnQgdmFyIEdldEFjdGl2ZUdhbWVicnlvQW5pbWF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBY3RpdmVHYW1lYnJ5b0FuaW1hdGlvbihha1JlZik7IH07XHJcbi8vR2V0cyBhY3RvciByZXNwb25zaWJsZSBmb3Igb2JqZWN0LlxyXG5leHBvcnQgdmFyIEdldEFjdG9yQ2F1c2UgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldEFjdG9yQ2F1c2UoYWtSZWYpOyB9O1xyXG4vL0dldCBhbGwgYXJ0IG9iamVjdHMgYXR0YWNoZWQgdG8gdGhpcyBvYmplY3QuXHJcbmV4cG9ydCB2YXIgR2V0QWxsQXJ0T2JqZWN0cyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uR2V0QWxsQXJ0T2JqZWN0cyhha1JlZik7IH07XHJcbi8vR2V0IGFsbCBlZmZlY3Qgc2hhZGVycyBhdHRhY2hlZCB0byB0aGlzIG9iamVjdC5cclxuZXhwb3J0IHZhciBHZXRBbGxFZmZlY3RTaGFkZXJzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRBbGxFZmZlY3RTaGFkZXJzKGFrUmVmKTsgfTtcclxuLy9HZXRzIGNsb3Nlc3QgYWN0b3IgdG8gcmVmICh3aXRob3V0IHJldHVybmluZyB0aGUgcmVmZXJlbmNlIGl0c2VsZikuXHJcbmV4cG9ydCB2YXIgR2V0Q2xvc2VzdEFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWJJZ25vcmVQbGF5ZXIpIHsgcmV0dXJuIHNuLkdldENsb3Nlc3RBY3RvckZyb21SZWYoYWtSZWYsIGFiSWdub3JlUGxheWVyKTsgfTtcclxuLy9HZXRzIGR1cmF0aW9uIG9mIHRoZSBlZmZlY3RzaGFkZXIgb24gdGhlIHJlZi5cclxuZXhwb3J0IHZhciBHZXRFZmZlY3RTaGFkZXJEdXJhdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtTaGFkZXIpIHsgcmV0dXJuIHNuLkdldEVmZmVjdFNoYWRlckR1cmF0aW9uKGFrUmVmLCBha1NoYWRlcik7IH07XHJcbi8vR2V0cyB0aGUgZG9vciB3aGljaCBpcyBsaW5rZWQgdG8gdGhpcyBsb2FkIGRvb3IuXHJcbmV4cG9ydCB2YXIgR2V0RG9vckRlc3RpbmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXREb29yRGVzdGluYXRpb24oYWtSZWYpOyB9O1xyXG4vL0dldHMgYWxsIHJlZnMgbGlua2VkIHRvIGFrUmVmLiBLZXl3b3JkIG9wdGlvbmFsLlxyXG5leHBvcnQgdmFyIEdldExpbmtlZENoaWxkcmVuID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmQpIHsgcmV0dXJuIHNuLkdldExpbmtlZENoaWxkcmVuKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL0dldHMgdGhlIHNvdXJjZSBvZiB0aGUgbWFnaWMgZWZmZWN0IChzcGVsbC9lbmNoYW50bWVudC9zY3JvbGwgZXRjKSBhbmQgdGhlIGNhc3Rlci4gTWFnaWMgZWZmZWN0IG11c3QgYmUgcHJlc2VudCBvbiB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIEdldE1hZ2ljRWZmZWN0U291cmNlID0gZnVuY3Rpb24gKGFrUmVmLCBha0VmZmVjdCkgeyByZXR1cm4gc24uR2V0TWFnaWNFZmZlY3RTb3VyY2UoYWtSZWYsIGFrRWZmZWN0KTsgfTtcclxuLyoqIE1BVEVSSUFMIFRZUEVTIC0gU3RyaW5nXHJcbiAgICAgICAgU3RvbmVCcm9rZW5cclxuICAgICAgICBCbG9ja0JsYWRlMUhhbmRcclxuICAgICAgICBNZWF0XHJcbiAgICAgICAgQ2FycmlhZ2VXaGVlbFxyXG4gICAgICAgIE1ldGFsTGlnaHRcclxuICAgICAgICBXb29kTGlnaHRcclxuICAgICAgICBTbm93XHJcbiAgICAgICAgR3JhdmVsXHJcbiAgICAgICAgQ2hhaW5NZXRhbFxyXG4gICAgICAgIEJvdHRsZVxyXG4gICAgICAgIFdvb2RcclxuICAgICAgICBBc2hcclxuICAgICAgICBTa2luXHJcbiAgICAgICAgQmxvY2tCbHVudFxyXG4gICAgICAgIERMQzFEZWVyU2tpblxyXG4gICAgICAgIEluc2VjdFxyXG4gICAgICAgIEJhcnJlbFxyXG4gICAgICAgIENlcmFtaWNNZWRpdW1cclxuICAgICAgICBCYXNrZXRcclxuICAgICAgICBJY2VcclxuICAgICAgICBHbGFzc1N0YWlyc1xyXG4gICAgICAgIFN0b25lU3RhaXJzXHJcbiAgICAgICAgV2F0ZXJcclxuICAgICAgICBEcmF1Z3JTa2VsZXRvblxyXG4gICAgICAgIEJsYWRlMUhhbmRcclxuICAgICAgICBCb29rXHJcbiAgICAgICAgQ2FycGV0XHJcbiAgICAgICAgTWV0YWxTb2xpZFxyXG4gICAgICAgIEF4ZTFIYW5kXHJcbiAgICAgICAgQmxvY2tCbGFkZTJIYW5kXHJcbiAgICAgICAgT3JnYW5pY0xhcmdlXHJcbiAgICAgICAgQW11bGV0XHJcbiAgICAgICAgV29vZFN0YWlyc1xyXG4gICAgICAgIE11ZFxyXG4gICAgICAgIEJvdWxkZXJTbWFsbFxyXG4gICAgICAgIFNub3dTdGFpcnNcclxuICAgICAgICBTdG9uZUhlYXZ5XHJcbiAgICAgICAgRHJhZ29uU2tlbGV0b25cclxuICAgICAgICBUcmFwXHJcbiAgICAgICAgQm93c1N0YXZlc1xyXG4gICAgICAgIEFsZHVpblxyXG4gICAgICAgIEJsb2NrQm93c1N0YXZlc1xyXG4gICAgICAgIFdvb2RBc1N0YWlyc1xyXG4gICAgICAgIFN0ZWVsR3JlYXRTd29yZFxyXG4gICAgICAgIEdyYXNzXHJcbiAgICAgICAgQm91bGRlckxhcmdlXHJcbiAgICAgICAgU3RvbmVBc1N0YWlyc1xyXG4gICAgICAgIEJsYWRlMkhhbmRcclxuICAgICAgICBCb3R0bGVTbWFsbFxyXG4gICAgICAgIEJvbmVBY3RvclxyXG4gICAgICAgIFNhbmRcclxuICAgICAgICBNZXRhbEhlYXZ5XHJcbiAgICAgICAgRExDMVNhYnJlQ2F0UGVsdFxyXG4gICAgICAgIEljZUZvcm1cclxuICAgICAgICBEcmFnb25cclxuICAgICAgICBCbGFkZTFIYW5kU21hbGxcclxuICAgICAgICBTa2luU21hbGxcclxuICAgICAgICBQb3RzUGFuc1xyXG4gICAgICAgIFNraW5Ta2VsZXRvblxyXG4gICAgICAgIEJsdW50MUhhbmRcclxuICAgICAgICBTdG9uZVN0YWlyc0Jyb2tlblxyXG4gICAgICAgIFNraW5MYXJnZVxyXG4gICAgICAgIE9yZ2FuaWNcclxuICAgICAgICBCb25lXHJcbiAgICAgICAgV29vZEhlYXZ5XHJcbiAgICAgICAgQ2hhaW5cclxuICAgICAgICBEaXJ0XHJcbiAgICAgICAgR2hvc3RcclxuICAgICAgICBTa2luTWV0YWxMYXJnZVxyXG4gICAgICAgIEJsb2NrQXhlXHJcbiAgICAgICAgQXJtb3JMaWdodFxyXG4gICAgICAgIFNoaWVsZExpZ2h0XHJcbiAgICAgICAgQ29pblxyXG4gICAgICAgIEJsb2NrQmx1bnQySGFuZFxyXG4gICAgICAgIFNoaWVsZEhlYXZ5XHJcbiAgICAgICAgQXJtb3JIZWF2eVxyXG4gICAgICAgIEFycm93XHJcbiAgICAgICAgR2xhc3NcclxuICAgICAgICBTdG9uZVxyXG4gICAgICAgIFdhdGVyUHVkZGxlXHJcbiAgICAgICAgQ2xvdGhcclxuICAgICAgICBTa2luTWV0YWxTbWFsbFxyXG4gICAgICAgIFdhcmRcclxuICAgICAgICBXZWJcclxuICAgICAgICBUcmFpbGVyU3RlZWxTd29yZFxyXG4gICAgICAgIEJsdW50MkhhbmRcclxuICAgICAgICBETEMxU3dpbmdpbmdCcmlkZ2VcclxuICAgICAgICBCb3VsZGVyTWVkaXVtICovXHJcbi8vR2V0cyB0aGUgc3BlY2lmaWVkIGNvbGxpc2lvbiBzaGFwZSdzIGhhdm9rIG1hdGVyaWFsIHR5cGVzIGFzIHN0cmluZyBhcnJheS4gUmV0dXJucyB0aGUgZmlyc3QgbWF0ZXJpYWwgdHlwZSBpZiBub2RlTmFtZSBpcyBlbXB0eVxyXG5leHBvcnQgdmFyIEdldE1hdGVyaWFsVHlwZSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSkge1xyXG4gICAgaWYgKGFzTm9kZU5hbWUgPT09IHZvaWQgMCkgeyBhc05vZGVOYW1lID0gXCJcIjsgfVxyXG4gICAgcmV0dXJuIHNuLkdldE1hdGVyaWFsVHlwZShha1JlZiwgYXNOb2RlTmFtZSk7XHJcbn07XHJcbi8vR2V0cyB0aGUgbW90aW9uIHR5cGUgb2YgdGhlIG9iamVjdCAoc2VlIHZhbmlsbGEgU2V0TW90aW9uVHlwZSBmb3IgdHlwZXMpLiBSZXR1cm5zIC0xIGlmIDNkIGlzIG5vdCBsb2FkZWRcclxuZXhwb3J0IHZhciBHZXRNb3Rpb25UeXBlID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRNb3Rpb25UeXBlKGFrUmVmKTsgfTtcclxuLy9HZXRzIHJhbmRvbSBhY3RvciBuZWFyIHJlZiAod2l0aG91dCByZXR1cm5pbmcgdGhlIHJlZmVyZW5jZSBpdHNlbGYpLlxyXG5leHBvcnQgdmFyIEdldFJhbmRvbUFjdG9yRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWZSYWRpdXMsIGFiSWdub3JlUGxheWVyKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UmFuZG9tQWN0b3JGcm9tUmVmKGFrUmVmLCBhZlJhZGl1cywgYWJJZ25vcmVQbGF5ZXIpO1xyXG59O1xyXG4vL0dldHMgcXVlc3QgaXRlbXMgaW4gdGhpcyByZWYncyBpbnZlbnRvcnksIGlmIGFueVxyXG5leHBvcnQgdmFyIEdldFF1ZXN0SXRlbXMgPSBmdW5jdGlvbiAoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCkge1xyXG4gICAgaWYgKGFiTm9FcXVpcHBlZCA9PT0gdm9pZCAwKSB7IGFiTm9FcXVpcHBlZCA9IGZhbHNlOyB9XHJcbiAgICBpZiAoYWJOb0Zhdm9yaXRlZCA9PT0gdm9pZCAwKSB7IGFiTm9GYXZvcml0ZWQgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkdldFF1ZXN0SXRlbXMoYWtSZWYsIGFiTm9FcXVpcHBlZCwgYWJOb0Zhdm9yaXRlZCk7XHJcbn07XHJcbi8vR2V0IGFsbCBhbGlhc2VzIGNvbnRhaW5pbmcgdGhpcyByZWZcclxuZXhwb3J0IHZhciBHZXRSZWZBbGlhc2VzID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5HZXRSZWZBbGlhc2VzKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBzaXplIG9mIHRoZSBzdG9yZWQgc291bCBpbiBhIHNvdWxnZW0gb2JqZWN0cmVmZXJlbmNlXHJcbmV4cG9ydCB2YXIgR2V0U3RvcmVkU291bFNpemUgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLkdldFN0b3JlZFNvdWxTaXplKGFrUmVmKTsgfTtcclxuLy9SZXR1cm5zIHRoZSBudW1iZXIgb2YgaW5zdGFuY2VzIG9mIHRoZSBzcGVjaWZpZWQgYXJ0IG9iamVjdCAoYXR0YWNoZWQgdXNpbmcgdmlzdWFsIGVmZmVjdHMpIG9uIHRoZSByZWZlcmVuY2UuXHJcbmV4cG9ydCB2YXIgSGFzQXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrUmVmLCBha0FydE9iamVjdCwgYWJBY3RpdmUpIHtcclxuICAgIGlmIChhYkFjdGl2ZSA9PT0gdm9pZCAwKSB7IGFiQWN0aXZlID0gZmFsc2U7IH1cclxuICAgIHJldHVybiBzbi5IYXNBcnRPYmplY3QoYWtSZWYsIGFrQXJ0T2JqZWN0LCBhYkFjdGl2ZSk7XHJcbn07XHJcbi8vUmV0dXJucyB0aGUgbnVtYmVyIG9mIGluc3RhbmNlcyBvZiB0aGUgc3BlY2lmaWVkIGVmZmVjdCBzaGFkZXIgb24gdGhlIHJlZmVyZW5jZS5cclxuZXhwb3J0IHZhciBIYXNFZmZlY3RTaGFkZXIgPSBmdW5jdGlvbiAoYWtSZWYsIGFrU2hhZGVyLCBhYkFjdGl2ZSkge1xyXG4gICAgaWYgKGFiQWN0aXZlID09PSB2b2lkIDApIHsgYWJBY3RpdmUgPSBmYWxzZTsgfVxyXG4gICAgcmV0dXJuIHNuLkhhc0VmZmVjdFNoYWRlcihha1JlZiwgYWtTaGFkZXIsIGFiQWN0aXZlKTtcclxufTtcclxuLy9SZXR1cm5zIHdoZXRoZXIgdGhlIHJlZmVyZW5jZSBoYXMgbmlleHRyYWRhdGEgKGF0dGFjaGVkIHRvIHJvb3QgM0Qgbm9kZSkuIFBhcnRpYWwgbWF0Y2hlcyBhY2NlcHRlZC5cclxuZXhwb3J0IHZhciBIYXNOaUV4dHJhRGF0YSA9IGZ1bmN0aW9uIChha1JlZiwgYXNOYW1lKSB7IHJldHVybiBzbi5IYXNOaUV4dHJhRGF0YShha1JlZiwgYXNOYW1lKTsgfTtcclxuLy9JcyBkb29yIGEgbG9hZCBkb29yP1xyXG5leHBvcnQgdmFyIElzTG9hZERvb3IgPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLklzTG9hZERvb3IoYWtSZWYpOyB9O1xyXG4vL0lzIGEgcXVlc3Qgb2JqZWN0P1xyXG5leHBvcnQgdmFyIElzUXVlc3RJdGVtID0gZnVuY3Rpb24gKGFrUmVmKSB7IHJldHVybiBzbi5Jc1F1ZXN0SXRlbShha1JlZik7IH07XHJcbi8vSXMgYSBWSVAgKGFjdG9yIHRoYXQgaXMgbmVlZGVkIGJ5IHF1ZXN0KT9cclxuZXhwb3J0IHZhciBJc1ZJUCA9IGZ1bmN0aW9uIChha1JlZikge1xyXG4gICAgcmV0dXJuIHNuLklzVklQKGFrUmVmKTtcclxufTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BcHBsaWVzIG1hdGVyaWFsIHNoYWRlciB0byByZWZlcmVuY2UgKGRvZXNuJ3QgaGF2ZSB0byBiZSBzdGF0aWMpXHJcbmV4cG9ydCB2YXIgQXBwbHlNYXRlcmlhbFNoYWRlciA9IGZ1bmN0aW9uIChha1JlZiwgYWtNYXRPYmplY3QsIGRpcmVjdGlvbmFsVGhyZXNob2xkQW5nbGUpIHtcclxuICAgIHJldHVybiBzbi5BcHBseU1hdGVyaWFsU2hhZGVyKGFrUmVmLCBha01hdE9iamVjdCwgZGlyZWN0aW9uYWxUaHJlc2hvbGRBbmdsZSk7XHJcbn07XHJcbi8vV3JhcHBlciBmdW5jdGlvbiBmb3IgQWRkS2V5d29yZFRvRm9ybS5cclxuZXhwb3J0IHZhciBBZGRLZXl3b3JkVG9SZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrS2V5d29yZCkgeyByZXR1cm4gc24uQWRkS2V5d29yZFRvUmVmKGFrUmVmLCBha0tleXdvcmQpOyB9O1xyXG4vL1NuYXBzIHRoZSBvYmplY3QgdG8gdGhlIG5lYXJlc3QgbmF2bWVzaCBwb2ludCBjbG9zZXN0IHRvIGl0cyBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBjZWxsLlxyXG5leHBvcnQgdmFyIE1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24gPSBmdW5jdGlvbiAoYWtSZWYpIHsgcmV0dXJuIHNuLk1vdmVUb05lYXJlc3ROYXZtZXNoTG9jYXRpb24oYWtSZWYpOyB9O1xyXG4vL1dyYXBwZXIgZnVuY3Rpb24gZm9yIFJlbW92ZUtleXdvcmRGcm9tRm9ybS5cclxuZXhwb3J0IHZhciBSZW1vdmVLZXl3b3JkRnJvbVJlZiA9IGZ1bmN0aW9uIChha1JlZiwgYWtLZXl3b3JkKSB7IHJldHVybiBzbi5SZW1vdmVLZXl3b3JkRnJvbVJlZihha1JlZiwgYWtLZXl3b3JkKTsgfTtcclxuLy9XcmFwcGVyIGZ1bmN0aW9uIGZvciBSZXBsYWNlS2V5d29yZE9uRm9ybS5cclxuZXhwb3J0IHZhciBSZXBsYWNlS2V5d29yZE9uUmVmID0gZnVuY3Rpb24gKGFrUmVmLCBha0tleXdvcmRBZGQsIGFrS2V5d29yZFJlbW92ZSkgeyByZXR1cm4gc24uUmVwbGFjZUtleXdvcmRPblJlZihha1JlZiwgYWtLZXl3b3JkQWRkLCBha0tleXdvcmRSZW1vdmUpOyB9O1xyXG4vL1BsYXlzIGRlYnVnIHNoYWRlciBvbiB0aGUgcmVmZXJlbmNlLCB3aXRoIG5vcm1hbGlzZWQgUkdCQSBjb2xvciAob3IgZnVsbHkgd2hpdGUgaWYgZW1wdHkpXHJcbmV4cG9ydCB2YXIgUGxheURlYnVnU2hhZGVyID0gZnVuY3Rpb24gKGFrUmVmLCBhZlJHQkEpIHsgcmV0dXJuIHNuLlBsYXlEZWJ1Z1NoYWRlcihha1JlZiwgYWZSR0JBKTsgfTtcclxuLy9TY2FsZXMgbm9kZSAmIGNvbGxpc2lvbiAoYmhrQm94U2hhcGUsIGJoa1NwaGVyZVNoYXBlKS4gRW50aXJlIG5pZiB3aWxsIGJlIHNjYWxlZCBpZiBzdHJpbmcgaXMgZW1wdHkuIENvbGxpc2lvbiBoYXMgdG8gYmUgZGlyZWN0bHkgYXR0YWNoZWQgdG8gbmFtZWQgbm9kZXMuXHJcbi8vQWRkcyBcIlBPM19TQ0FMRVwiIG5pZXh0cmFkYXRhIHRvIHJvb3Qgbm9kZS5cclxuZXhwb3J0IHZhciBTY2FsZU9iamVjdDNEID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKSB7IHJldHVybiBzbi5TY2FsZU9iamVjdDNEKGFrUmVmLCBhc05vZGVOYW1lLCBhZlNjYWxlKTsgfTtcclxuLy9TZXRzIHRoZSBiYXNlIG9iamVjdCBvZiB0aGlzIHJlZmVyZW5jZSBhbmQgcmVsb2FkcyAzRFxyXG5leHBvcnQgdmFyIFNldEJhc2VPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQmFzZU9iamVjdCkgeyByZXR1cm4gc24uU2V0QmFzZU9iamVjdChha1JlZiwgYWtCYXNlT2JqZWN0KTsgfTtcclxuLyoqIENPTExJU0lPTiBMQVlFUlNcclxuICAgICAgICBrVW5pZGVudGlmaWVkID0gMCxcclxuICAgICAgICBrU3RhdGljID0gMSxcclxuICAgICAgICBrQW5pbVN0YXRpYyA9IDIsXHJcbiAgICAgICAga1RyYW5zcGFyZW50ID0gMyxcclxuICAgICAgICBrQ2x1dHRlciA9IDQsXHJcbiAgICAgICAga1dlYXBvbiA9IDUsXHJcbiAgICAgICAga1Byb2plY3RpbGUgPSA2LFxyXG4gICAgICAgIGtTcGVsbCA9IDcsXHJcbiAgICAgICAga0JpcGVkID0gOCxcclxuICAgICAgICBrVHJlZXMgPSA5LFxyXG4gICAgICAgIGtQcm9wcyA9IDEwLFxyXG4gICAgICAgIGtXYXRlciA9IDExLFxyXG4gICAgICAgIGtUcmlnZ2VyID0gMTIsXHJcbiAgICAgICAga1RlcnJhaW4gPSAxMyxcclxuICAgICAgICBrVHJhcCA9IDE0LFxyXG4gICAgICAgIGtOb25Db2xsaWRhYmxlID0gMTUsXHJcbiAgICAgICAga0Nsb3VkVHJhcCA9IDE2LFxyXG4gICAgICAgIGtHcm91bmQgPSAxNyxcclxuICAgICAgICBrUG9ydGFsID0gMTgsXHJcbiAgICAgICAga0RlYnJpc1NtYWxsID0gMTksXHJcbiAgICAgICAga0RlYnJpc0xhcmdlID0gMjAsXHJcbiAgICAgICAga0Fjb3VzdGljU3BhY2UgPSAyMSxcclxuICAgICAgICBrQWN0b3Jab25lID0gMjIsXHJcbiAgICAgICAga1Byb2plY3RpbGVab25lID0gMjMsXHJcbiAgICAgICAga0dhc1RyYXAgPSAyNCxcclxuICAgICAgICBrU2hlbGxDYXN0aW5nID0gMjUsXHJcbiAgICAgICAga1RyYW5zcGFyZW50V2FsbCA9IDI2LFxyXG4gICAgICAgIGtJbnZpc2libGVXYWxsID0gMjcsXHJcbiAgICAgICAga1RyYW5zcGFyZW50U21hbGxBbmltID0gMjgsXHJcbiAgICAgICAga0NsdXR0ZXJMYXJnZSA9IDI5LFxyXG4gICAgICAgIGtDaGFyQ29udHJvbGxlciA9IDMwLFxyXG4gICAgICAgIGtTdGFpckhlbHBlciA9IDMxLFxyXG4gICAgICAgIGtEZWFkQmlwID0gMzIsXHJcbiAgICAgICAga0JpcGVkTm9DQyA9IDMzLFxyXG4gICAgICAgIGtBdm9pZEJveCA9IDM0LFxyXG4gICAgICAgIGtDb2xsaXNpb25Cb3ggPSAzNSxcclxuICAgICAgICBrQ2FtZXJhU3BoZXJlID0gMzYsXHJcbiAgICAgICAga0Rvb3JEZXRlY3Rpb24gPSAzNyxcclxuICAgICAgICBrQ29uZVByb2plY3RpbGUgPSAzOCxcclxuICAgICAgICBrQ2FtZXJhID0gMzksXHJcbiAgICAgICAga0l0ZW1QaWNrZXIgPSA0MCxcclxuICAgICAgICBrTE9TID0gNDEsXHJcbiAgICAgICAga1BhdGhpbmdQaWNrID0gNDIsXHJcbiAgICAgICAga1VudXNlZDAgPSA0MyxcclxuICAgICAgICBrVW51c2VkMSA9IDQ0LFxyXG4gICAgICAgIGtTcGVsbEV4cGxvc2lvbiA9IDQ1LFxyXG4gICAgICAgIGtEcm9wcGluZ1BpY2sgPSA0NiAqL1xyXG4vL1NldHMgb2JqZWN0IDNEIHJvb3Qgb3Igc3BlY2lmaWVkIG5vZGUncyBjb2xsaXNpb24gbGF5ZXJcclxuZXhwb3J0IHZhciBTZXRDb2xsaXNpb25MYXllciA9IGZ1bmN0aW9uIChha1JlZiwgYXNOb2RlTmFtZSwgYWlDb2xsaXNpb25MYXllcikgeyByZXR1cm4gc24uU2V0Q29sbGlzaW9uTGF5ZXIoYWtSZWYsIGFzTm9kZU5hbWUsIGFpQ29sbGlzaW9uTGF5ZXIpOyB9O1xyXG4vL1NldHMgdGhlIGRvb3IgYXMgdGhlIG5ldyBsaW5rZWQgZG9vclxyXG5leHBvcnQgdmFyIFNldERvb3JEZXN0aW5hdGlvbiA9IGZ1bmN0aW9uIChha1JlZiwgYWtEb29yKSB7IHJldHVybiBzbi5TZXREb29yRGVzdGluYXRpb24oYWtSZWYsIGFrRG9vcik7IH07XHJcbi8vU2V0cyBlZmZlY3RzaGFkZXIgZHVyYXRpb24uIEludGVybmFsIGR1cmF0aW9uIGlzIHNldCB3aGVuIHRoZSBlZmZlY3RzaGFkZXIgYmVnaW5zIGFuZCBkb2VzIG5vdCBjaGFuZ2Ugd2l0aCB0aW1lLlxyXG5leHBvcnQgdmFyIFNldEVmZmVjdFNoYWRlckR1cmF0aW9uID0gZnVuY3Rpb24gKGFrUmVmLCBha1NoYWRlciwgYWZUaW1lLCBhYkFic29sdXRlKSB7IHJldHVybiBzbi5TZXRFZmZlY3RTaGFkZXJEdXJhdGlvbihha1JlZiwgYWtTaGFkZXIsIGFmVGltZSwgYWJBYnNvbHV0ZSk7IH07XHJcbi8vU2V0cyBsaW5rZWQgcmVmLiBQYXNzIE5vbmUgaW50byBha1RhcmdldFJlZiB0byB1bnNldCB0aGUgbGlua2VkIHJlZi5cclxuZXhwb3J0IHZhciBTZXRMaW5rZWRSZWYgPSBmdW5jdGlvbiAoYWtSZWYsIGFrVGFyZ2V0UmVmLCBha0tleXdvcmQpIHtcclxuICAgIGlmIChha0tleXdvcmQgPT09IHZvaWQgMCkgeyBha0tleXdvcmQgPSBudWxsOyB9XHJcbiAgICByZXR1cm4gc24uU2V0TGlua2VkUmVmKGFrUmVmLCBha1RhcmdldFJlZiwgYWtLZXl3b3JkKTtcclxufTtcclxuLy9TZXRzIGhhdm9rIG1hdGVyaWFsIHR5cGUuIFVzZSBvbGRNYXRlcmlhbCBzdHJpbmcgdG8gc2VsZWN0IHdoYXQgbWF0ZXJpYWwgeW91IHdhbnQgdG8gY2hhbmdlIGZyb20gdG8gKGVnLiBmcm9tIHN0b25lIHRvIHdvb2QpLCBhbmQgbm9kZU5hbWUgdG8gYXBwbHkgaXQgdG8gdGhlIHNwZWNpZmljIG5vZGUuXHJcbi8vSWYgYm90aCBhcmUgZW1wdHksIGV2ZXJ5IGNvbGxpc2lvbiBtYXRlcmlhbCB3aWxsIGJlIHNldC5cclxuZXhwb3J0IHZhciBTZXRNYXRlcmlhbFR5cGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpIHtcclxuICAgIGlmIChhc09sZE1hdGVyaWFsID09PSB2b2lkIDApIHsgYXNPbGRNYXRlcmlhbCA9IFwiXCI7IH1cclxuICAgIGlmIChhc05vZGVOYW1lID09PSB2b2lkIDApIHsgYXNOb2RlTmFtZSA9IFwiXCI7IH1cclxuICAgIHJldHVybiBzbi5TZXRNYXRlcmlhbFR5cGUoYWtSZWYsIGFzTmV3TWF0ZXJpYWwsIGFzT2xkTWF0ZXJpYWwsIGFzTm9kZU5hbWUpO1xyXG59O1xyXG4vL0NvcGllcyBza2luIHRpbnQgY29sb3IgZnJvbSBhY3RvcmJhc2UgdG8gYm9keXBhcnRzIG5pZlxyXG5leHBvcnQgdmFyIFNldHVwQm9keVBhcnRHZW9tZXRyeSA9IGZ1bmN0aW9uIChha1JlZiwgYWtBY3RvcikgeyByZXR1cm4gc24uU2V0dXBCb2R5UGFydEdlb21ldHJ5KGFrUmVmLCBha0FjdG9yKTsgfTtcclxuLyoqIFNIQURFUiBUWVBFU1xyXG4gICAgICAgIGtEZWZhdWx0ID0gMFxyXG4gICAgICAgIGtFbnZpcm9ubWVudE1hcCA9IDFcclxuICAgICAgICBrR2xvd01hcCA9IDJcclxuICAgICAgICBrUGFyYWxsYXggPSAzXHJcbiAgICAgICAga0ZhY2VHZW4gPSA0XHJcbiAgICAgICAga0ZhY2VHZW5SR0JUaW50ID0gNVxyXG4gICAgICAgIGtIYWlyVGludCA9IDZcclxuICAgICAgICBrUGFyYWxsYXhPY2MgPSA3XHJcbiAgICAgICAga011bHRpVGV4TGFuZCA9IDhcclxuICAgICAgICBrTE9ETGFuZCA9IDlcclxuICAgICAgICBrTXVsdGlsYXllclBhcmFsbGF4ID0gMTFcclxuICAgICAgICBrVHJlZUFuaW0gPSAxMlxyXG4gICAgICAgIGtNdWx0aUluZGV4VHJpU2hhcGVTbm93ID0gMTRcclxuICAgICAgICBrTE9ET2JqZWN0c0hEID0gMTVcclxuICAgICAgICBrRXllID0gMTZcclxuICAgICAgICBrQ2xvdWQgPSAxN1xyXG4gICAgICAgIGtMT0RMYW5kTm9pc2UgPSAxOFxyXG4gICAgICAgIGtNdWx0aVRleExhbmRMT0RCbGVuZCA9IDE5ICovXHJcbi8vc2V0cyB0aGUgcmVmJ3Mgc2hhZGVyIG1hdGVyaWFsIHR5cGUgaWUuIGRlZmF1bHQgdG8gY3ViZW1hcFxyXG4vL3RlbXBsYXRlIG5lZWRzIHRvIGJlIGxvYWRlZFxyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAtMSwgdGhlIHJlZmVyZW5jZSdzIGVudGlyZSB0ZXh0dXJlc2V0IGlzIHJlcGxhY2VkIHVzaW5nIHRoZSB0ZW1wbGF0ZSdzIHRleHR1cmVzZXQvL1xyXG4vL2lmIHRleHR1cmUgdHlwZSBpcyAwLTkgdGhlIHRlbXBsYXRlJ3MgdGV4dHVyZXNldCBpcyBzdGlsbCBhcHBsaWVkIGJ1dCByZWZlcmVuY2UncyB0ZXh0dXJlIGF0IHRoYXQgaW5kZXggd2lsbCB0YWtlIHByaW9yaXR5LlxyXG4vL29wdGlvbmFsIGRpZmZ1c2UgcGF0aCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgc2hhcGVzIHRvIGFwcGx5IHRoZSBzaGFkZXIgdG8sIHBhcnRpYWwgbWF0Y2hlcyBhcmUgYWNjZXB0ZWQgbGlrZSBcIkRyYXVnci5kZHNcIlxyXG4vL2xpbWl0YXRpb25zIC0gY2Fubm90IGJlIHVzZWQgb24gZ2VvbWV0cnkgd2l0aCBubyBub3JtYWxzIChpZS4gYm9keSBza2luIG1lc2hlcylcclxuZXhwb3J0IHZhciBTZXRTaGFkZXJUeXBlID0gZnVuY3Rpb24gKGFrUmVmLCBha1RlbXBsYXRlLCBhc0RpZmZ1c2VQYXRoLCBhaVNoYWRlclR5cGUsIGFpVGV4dHVyZVR5cGUsIGFiTm9XZWFwb25zLCBhYk5vQWxwaGFQcm9wZXJ0eSkge1xyXG4gICAgcmV0dXJuIHNuLlNldFNoYWRlclR5cGUoYWtSZWYsIGFrVGVtcGxhdGUsIGFzRGlmZnVzZVBhdGgsIGFpU2hhZGVyVHlwZSwgYWlUZXh0dXJlVHlwZSwgYWJOb1dlYXBvbnMsIGFiTm9BbHBoYVByb3BlcnR5KTtcclxufTtcclxuLy9TdG9wcyBBTEwgZWZmZWN0IHNoYWRlcnMgYW5kIGFydCBvYmplY3RzICh2aXN1YWwgZWZmZWN0cykgY3VycmVudGx5IG9uIHRoaXMgYWN0b3JcclxuZXhwb3J0IHZhciBTdG9wQWxsU2hhZGVycyA9IGZ1bmN0aW9uIChha1JlZikgeyByZXR1cm4gc24uU3RvcEFsbFNoYWRlcnMoYWtSZWYpOyB9O1xyXG4vL1JlbW92ZXMgYWxsIGluc3RhbmNlcyBvZiB0aGUgYXJ0IG9iamVjdCAoaGl0IG1hZ2ljIGVmZmVjdC92aXN1YWwgZWZmZWN0KSBhdHRhY2hlZCB0byB0aGUgcmVmZXJlbmNlLlxyXG5leHBvcnQgdmFyIFN0b3BBcnRPYmplY3QgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0KSB7IHJldHVybiBzbi5TdG9wQXJ0T2JqZWN0KGFrUmVmLCBha0FydCk7IH07XHJcbi8vVG9nZ2xlcyBub2RlIHZpc2liaWxpdHkuXHJcbmV4cG9ydCB2YXIgVG9nZ2xlQ2hpbGROb2RlID0gZnVuY3Rpb24gKGFrUmVmLCBhc05vZGVOYW1lLCBhYkRpc2FibGUpIHsgcmV0dXJuIHNuLlRvZ2dsZUNoaWxkTm9kZShha1JlZiwgYXNOb2RlTmFtZSwgYWJEaXNhYmxlKTsgfTtcclxuLy9VcGRhdGVzIG5vZGUgZGF0YS4gTW92ZSBoaXQgZWZmZWN0IGFydCB0byBuZXcgbm9kZSAoaWUuIGZyb20gXCJNYWdpY0VmZmVjdHNOb2RlXCIgdG8gXCJOUEMgSGVhZCBbSGVhZF1cIikgb3IgdXBkYXRlIHRyYW5zbGF0ZSwgcm90YXRlLCBhbmQgc2NhbGUgdmFsdWVzLlxyXG4vL1RyYW5zbGF0ZSBhbmQgUm90YXRlIGFycmF5cyBtdXN0IGhhdmUgdGhyZWUgdmFsdWVzIGluIG9yZGVyIHRvIHdvcmsuIFJvdGF0ZSB1c2VzIGV1bGVyIGFuZ2xlcyBpbiBkZWdyZWVzIChYWVopLiBTY2FsZSBpcyByZWxhdGl2ZSwgYW5kIGlzIG11bHRpcGxpZWQgYnkgZXhpc3Rpbmcgc2NhbGUuXHJcbi8vSWYgdGhlIGhpdCBlZmZlY3QgYXJ0IGlzIHJlbW92ZWQgYW5kIHJlYXR0YWNoZWQsIGl0IHdpbGwgcmV2ZXJ0IGJhY2sgdG8gdGhlIHZhbHVlcyBpbiB0aGUgbmlmLlxyXG5leHBvcnQgdmFyIFVwZGF0ZUhpdEVmZmVjdEFydE5vZGUgPSBmdW5jdGlvbiAoYWtSZWYsIGFrQXJ0LCBhc05ld05vZGUsIGFmVHJhbnNsYXRlLCBhZlJvdGF0ZSwgYWZSZWxhdGl2ZVNjYWxlKSB7XHJcbiAgICBpZiAoYWZSZWxhdGl2ZVNjYWxlID09PSB2b2lkIDApIHsgYWZSZWxhdGl2ZVNjYWxlID0gMS4wOyB9XHJcbiAgICByZXR1cm4gc24uVXBkYXRlSGl0RWZmZWN0QXJ0Tm9kZShha1JlZiwgYWtBcnQsIGFzTmV3Tm9kZSwgYWZUcmFuc2xhdGUsIGFmUm90YXRlLCBhZlJlbGF0aXZlU2NhbGUpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QQUNLQUdFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLyoqIFBBQ0tBR0UgVFlQRVNcclxuICAgICAgICBGaW5kID0gMFxyXG4gICAgICAgIEZvbGxvdyA9IDFcclxuICAgICAgICBFc2NvcnQgPSAyXHJcbiAgICAgICAgRWF0ID0gM1xyXG4gICAgICAgIFNsZWVwID0gNFxyXG4gICAgICAgIFdhbmRlciA9IDVcclxuICAgICAgICBUcmF2ZWwgPSA2XHJcbiAgICAgICAgQWNjb21wYW55ID0gN1xyXG4gICAgICAgIFVzZUl0ZW1BdCA9IDhcclxuICAgICAgICBBbWJ1c2ggPSA5XHJcbiAgICAgICAgRmxlZU5vdENvbWJhdCA9IDEwXHJcbiAgICAgICAgQ2FzdE1hZ2ljID0gMTFcclxuICAgICAgICBTYW5kYm94ID0gMTJcclxuICAgICAgICBQYXRyb2wgPSAxM1xyXG4gICAgICAgIEd1YXJkID0gMTRcclxuICAgICAgICBEaWFsb2d1ZSA9IDE1XHJcbiAgICAgICAgVXNlV2VhcG9uID0gMTZcclxuICAgICAgICBGaW5kMiA9IDE3XHJcbiAgICAgICAgUGFja2FnZSA9IDE4XHJcbiAgICAgICAgUGFja2FnZVRlbXBsYXRlID0gMTlcclxuICAgICAgICBBY3RpdmF0ZSA9IDIwXHJcbiAgICAgICAgQWxhcm0gPSAyMVxyXG4gICAgICAgIEZsZWUgPSAyMlxyXG4gICAgICAgIFRyZXNwYXNzID0gMjNcclxuICAgICAgICBTcGVjdGF0b3IgPSAyNFxyXG4gICAgICAgIFJlYWN0VG9EZWFkID0gMjVcclxuICAgICAgICBHZXRVcEZyb21DaGFpciA9IDI2XHJcbiAgICAgICAgRG9Ob3RoaW5nID0gMjdcclxuICAgICAgICBJbkdhbWVEaWFsb2d1ZSA9IDI4XHJcbiAgICAgICAgU3VyZmFjZSA9ICAyOVxyXG4gICAgICAgIFNlYXJjaEZvckF0dGFja2VyID0gMzBcclxuICAgICAgICBBdm9pZFBsYXllciA9IDMxXHJcbiAgICAgICAgUmVhY3RUb0Rlc3Ryb3llZE9iamVjdCA9IDMyXHJcbiAgICAgICAgUmVhY3RUb0dyZW5hZGVPck1pbmUgPSAzM1xyXG4gICAgICAgIFN0ZWFsV2FybmluZyA9IDM0XHJcbiAgICAgICAgUGlja1BvY2tldFdhcm5pbmcgPSAzNVxyXG4gICAgICAgIE1vdmVtZW50QmxvY2tlZCA9IDM2XHJcbiAgICAgICAgVmFtcGlyZUZlZWQgPSAzN1xyXG4gICAgICAgIENhbm5pYmFsRmVlZCA9IDM4ICovXHJcbi8vR2V0cyBwYWNrYWdlIHR5cGUuIFJldHVybnMgLTEgaWYgcGFja2FnZSBpcyBub25lXHJcbmV4cG9ydCB2YXIgR2V0UGFja2FnZVR5cGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7XHJcbiAgICByZXR1cm4gc24uR2V0UGFja2FnZVR5cGUoYWtQYWNrYWdlKTtcclxufTtcclxuLy9HZXRzIGFsbCBpZGxlcyBvbiB0aGlzIHBhY2thZ2VcclxuZXhwb3J0IHZhciBHZXRQYWNrYWdlSWRsZXMgPSBmdW5jdGlvbiAoYWtQYWNrYWdlKSB7IHJldHVybiBzbi5HZXRQYWNrYWdlSWRsZXMoYWtQYWNrYWdlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9BZGRzIGlkbGUgdG8gdGhlIGVuZCBvZiB0aGUgcGFja2FnZSBpZGxlIHN0YWNrLCBjcmVhdGluZyBpdCBpZiBuZWVkZWQuXHJcbmV4cG9ydCB2YXIgQWRkUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLkFkZFBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy9SZW1vdmVzIGlkbGUgZnJvbSBwYWNrYWdlXHJcbmV4cG9ydCB2YXIgUmVtb3ZlUGFja2FnZUlkbGUgPSBmdW5jdGlvbiAoYWtQYWNrYWdlLCBha0lkbGUpIHsgcmV0dXJuIHNuLlJlbW92ZVBhY2thZ2VJZGxlKGFrUGFja2FnZSwgYWtJZGxlKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vUEFQWVJVUyBFWFRFTkRFUlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9yZXR1cm5zIGN1cnJlbnQgdmVyc2lvbiBhcyBpbnQgYXJyYXkgKG1ham9yLG1pbm9yLHBhdGNoIC8gNCwzLDcpXHJcbmV4cG9ydCB2YXIgR2V0UGFweXJ1c0V4dGVuZGVyVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzbi5HZXRQYXB5cnVzRXh0ZW5kZXJWZXJzaW9uKCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QT1RJT04gLSBzZWUgU1BFTExcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5leHBvcnQgdmFyIEFkZE1hZ2ljRWZmZWN0VG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1BvdGlvbihha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpO1xyXG59O1xyXG4vL0FkZHMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0byB0YXJnZXQgUG90aW9uLCBhdCBnaXZlbiBpbmRleC4gU2FtZSBhcyBhYm92ZSBmdW5jdGlvbiwgYnV0IGxlc3MgdmVyYm9zZSwgYW5kIHByZXNlcnZlcyBhbGwgY29uZGl0aW9ucy4gT3B0aW9uYWwgY29zdCBhcmd1bWVudC5cclxuZXhwb3J0IHZhciBBZGRFZmZlY3RJdGVtVG9Qb3Rpb24gPSBmdW5jdGlvbiAoYWtQb3Rpb24sIGFrUG90aW9uVG9Db3B5RnJvbSwgYWlJbmRleCwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gLTEuMDsgfVxyXG4gICAgcmV0dXJuIHNuLkFkZEVmZmVjdEl0ZW1Ub1BvdGlvbihha1BvdGlvbiwgYWtQb3Rpb25Ub0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgbWFnaWMgZWZmZWN0IGZyb20gUG90aW9uIHRoYXQgbWF0Y2hlcyBtYWduaXR1ZGUvYXJlYS9kdXJhdGlvbi9jb3N0LlxyXG5leHBvcnQgdmFyIFJlbW92ZU1hZ2ljRWZmZWN0RnJvbVBvdGlvbiA9IGZ1bmN0aW9uIChha1BvdGlvbiwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlTWFnaWNFZmZlY3RGcm9tUG90aW9uKGFrUG90aW9uLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIFBvdGlvbiB0aGF0IG1hdGNoZXMgUG90aW9uIGF0IGluZGV4LlxyXG5leHBvcnQgdmFyIFJlbW92ZUVmZmVjdEl0ZW1Gcm9tUG90aW9uID0gZnVuY3Rpb24gKGFrUG90aW9uLCBha1BvdGlvblRvTWF0Y2hGcm9tLCBhaUluZGV4KSB7XHJcbiAgICByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21Qb3Rpb24oYWtQb3Rpb24sIGFrUG90aW9uVG9NYXRjaEZyb20sIGFpSW5kZXgpO1xyXG59O1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9QUk9KRUNUSUxFU1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8tLS0tLS0tLVxyXG4vL0dFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0dldHMgcHJvamVjdGlsZSBncmF2aXR5ICh1c3VhbGx5IDAuMCBmb3Igbm9uIGFycm93IHByb2plY3RpbGVzKS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVHcmF2aXR5KGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIGltcGFjdCBmb3JjZS5cclxuZXhwb3J0IHZhciBHZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlKSB7IHJldHVybiBzbi5HZXRQcm9qZWN0aWxlSW1wYWN0Rm9yY2UoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy9HZXRzIHByb2plY3RpbGUgcmFuZ2UuXHJcbmV4cG9ydCB2YXIgR2V0UHJvamVjdGlsZVJhbmdlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVJhbmdlKGFrUHJvamVjdGlsZSk7IH07XHJcbi8vR2V0cyBwcm9qZWN0aWxlIHNwZWVkLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVTcGVlZCA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUpIHsgcmV0dXJuIHNuLkdldFByb2plY3RpbGVTcGVlZChha1Byb2plY3RpbGUpOyB9O1xyXG4vKiogUFJPSkVDVElMRSBUWVBFU1xyXG4gICAgICAgIE1pc3NpbGUgPSAxXHJcbiAgICAgICAgTG9iYmVyID0gMlxyXG4gICAgICAgIEJlYW0gPSAzXHJcbiAgICAgICAgRmxhbWUgPSA0XHJcbiAgICAgICAgQ29uZSA9IDVcclxuICAgICAgICBCYXJyaWVyID0gNlxyXG4gICAgICAgIEFycm93ID0gNyAqL1xyXG4vL0dldCBwcm9qZWN0aWxlIHR5cGUuIDAgaWYgcHJvamVjdGlsZSBpcyBOb25lLlxyXG5leHBvcnQgdmFyIEdldFByb2plY3RpbGVUeXBlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSkgeyByZXR1cm4gc24uR2V0UHJvamVjdGlsZVR5cGUoYWtQcm9qZWN0aWxlKTsgfTtcclxuLy8tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS1cclxuLy9TZXRzIHByb2plY3RpbGUgZ3Jhdml0eS5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlR3Jhdml0eSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmR3Jhdml0eSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUdyYXZpdHkoYWtQcm9qZWN0aWxlLCBhZkdyYXZpdHkpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBpbXBhY3QgZm9yY2UuXHJcbmV4cG9ydCB2YXIgU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlID0gZnVuY3Rpb24gKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSkgeyByZXR1cm4gc24uU2V0UHJvamVjdGlsZUltcGFjdEZvcmNlKGFrUHJvamVjdGlsZSwgYWZJbXBhY3RGb3JjZSk7IH07XHJcbi8vU2V0cyBwcm9qZWN0aWxlIHJhbmdlLlxyXG5leHBvcnQgdmFyIFNldFByb2plY3RpbGVSYW5nZSA9IGZ1bmN0aW9uIChha1Byb2plY3RpbGUsIGFmUmFuZ2UpIHsgcmV0dXJuIHNuLlNldFByb2plY3RpbGVSYW5nZShha1Byb2plY3RpbGUsIGFmUmFuZ2UpOyB9O1xyXG4vL1NldHMgcHJvamVjdGlsZSBzcGVlZC5cclxuZXhwb3J0IHZhciBTZXRQcm9qZWN0aWxlU3BlZWQgPSBmdW5jdGlvbiAoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKSB7IHJldHVybiBzbi5TZXRQcm9qZWN0aWxlU3BlZWQoYWtQcm9qZWN0aWxlLCBhZlNwZWVkKTsgfTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NDUk9MTCAtIHNlZSBTUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtNYWdpY0VmZmVjdCwgYWZNYWduaXR1ZGUsIGFpQXJlYSwgYWlEdXJhdGlvbiwgYWZDb3N0LCBhc0NvbmRpdGlvbkxpc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5BZGRNYWdpY0VmZmVjdFRvU2Nyb2xsKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QsIGFzQ29uZGl0aW9uTGlzdCk7XHJcbn07XHJcbi8vQWRkcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRvIHRhcmdldCBTY3JvbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLiBPcHRpb25hbCBjb3N0IGFyZ3VtZW50LlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1Njcm9sbCA9IGZ1bmN0aW9uIChha1Njcm9sbCwgYWtTY3JvbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU2Nyb2xsKGFrU2Nyb2xsLCBha1Njcm9sbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBTY3JvbGwgdGhhdCBtYXRjaGVzIG1hZ25pdHVkZS9hcmVhL2R1cmF0aW9uL2Nvc3QuXHJcbmV4cG9ydCB2YXIgUmVtb3ZlTWFnaWNFZmZlY3RGcm9tU2Nyb2xsID0gZnVuY3Rpb24gKGFrU2Nyb2xsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TY3JvbGwoYWtTY3JvbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBlZmZlY3RpdGVtIGZyb20gU2Nyb2xsIHRoYXQgbWF0Y2hlcyBTY3JvbGwgYXQgaW5kZXguXHJcbmV4cG9ydCB2YXIgUmVtb3ZlRWZmZWN0SXRlbUZyb21TY3JvbGwgPSBmdW5jdGlvbiAoYWtTY3JvbGwsIGFrU2Nyb2xsVG9NYXRjaEZyb20sIGFpSW5kZXgpIHtcclxuICAgIHJldHVybiBzbi5SZW1vdmVFZmZlY3RJdGVtRnJvbVNjcm9sbChha1Njcm9sbCwgYWtTY3JvbGxUb01hdGNoRnJvbSwgYWlJbmRleCk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TT1VORFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vU2V0cyBzb3VuZCBkZXNjcmlwdG9yIGF0dGFjaGVkIHRvIHRoZSBzb3VuZC5cclxuZXhwb3J0IHZhciBTZXRTb3VuZERlc2NyaXB0b3IgPSBmdW5jdGlvbiAoYWtTb3VuZCwgYWtTb3VuZERlc2NyaXB0b3IpIHsgcmV0dXJuIHNuLlNldFNvdW5kRGVzY3JpcHRvcihha1NvdW5kLCBha1NvdW5kRGVzY3JpcHRvcik7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9TUEVMTFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS1cclxuLy9HRVRURVJTXHJcbi8vLS0tLS0tLS1cclxuLyoqIFNQRUxMIFRZUEVTXHJcbiAgICAgICAgU3BlbGwgPSAwXHJcbiAgICAgICAgRGlzZWFzZSA9IDFcclxuICAgICAgICBQb3dlciA9IDJcclxuICAgICAgICBMZXNzZXJQb3dlciA9IDNcclxuICAgICAgICBBYmlsaXR5ID0gNFxyXG4gICAgICAgIFBvaXNvbiA9IDVcclxuICAgICAgICBBZGRpdGlvbiA9IDZcclxuICAgICAgICBWb2ljZSA9IDcgKi9cclxuLy9SZXR1cm5zIHNwZWxsIHR5cGUuIC0xIGlmIHNwZWxsIGlzIE5vbmVcclxuZXhwb3J0IHZhciBHZXRTcGVsbFR5cGUgPSBmdW5jdGlvbiAoYWtTcGVsbCkge1xyXG4gICAgcmV0dXJuIHNuLkdldFNwZWxsVHlwZShha1NwZWxsKTtcclxufTtcclxuLy8tLS0tLS0tLVxyXG4vL1NFVFRFUlNcclxuLy8tLS0tLS0tLVxyXG4vL0NvbmRpdGlvbkl0ZW1PYmplY3QgfCBGdW5jdGlvbiBJRCB8IHBhcmFtZXRlciAxIHwgcGFyYW1ldGVyIDIgfCBPUENvZGUgfCBmbG9hdCB8IEFORE9SXHJcbi8vY29uZGl0aW9ucyB3aGljaCBoYXZlIG5vIHBhcmFtZXRlcnMgKGVnLiBJc1NuZWFraW5nKSAvIHRha2UgaW4gZm9ybXMgKEdldElzUmFjZSkgd29ya1xyXG4vL2NvbmRpdGlvbnMgd2hpY2ggYWNjZXB0IGludC9mbG9hdC9zdHJpbmdzIGFyZSBza2lwcGVkXHJcbi8vU3ViamVjdFx0fCBIYXNNYWdpY0VmZmVjdEtleXdvcmRcdHwgTWFnaWNJbnZpc2liaWxpdHlcdFx0fCBOT05FIHwgPT0gfCAwLjAgfCBBTkQgLSBpbiBnYW1lXHJcbi8vU3ViamVjdCBcdHwgSGFzTWFnaWNFZmZlY3RLZXl3b3JkXHR8IDAwMDFFQTZGIH4gU2t5cmltLmVzbSB8IE5PTkUgfCA9PSB8IDAuMCB8IEFORFx0LSBpbiBwYXB5cnVzXHJcbmV4cG9ydCB2YXIgQWRkTWFnaWNFZmZlY3RUb1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KSB7XHJcbiAgICBpZiAoYWZDb3N0ID09PSB2b2lkIDApIHsgYWZDb3N0ID0gMC4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkTWFnaWNFZmZlY3RUb1NwZWxsKGFrU3BlbGwsIGFrTWFnaWNFZmZlY3QsIGFmTWFnbml0dWRlLCBhaUFyZWEsIGFpRHVyYXRpb24sIGFmQ29zdCwgYXNDb25kaXRpb25MaXN0KTtcclxufTtcclxuLy9BZGRzIGVmZmVjdGl0ZW0gZnJvbSBzcGVsbCB0byB0YXJnZXQgc3BlbGwsIGF0IGdpdmVuIGluZGV4LiBTYW1lIGFzIGFib3ZlIGZ1bmN0aW9uLCBidXQgbGVzcyB2ZXJib3NlLCBhbmQgcHJlc2VydmVzIGFsbCBjb25kaXRpb25zLlxyXG5leHBvcnQgdmFyIEFkZEVmZmVjdEl0ZW1Ub1NwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb0NvcHlGcm9tLCBhaUluZGV4LCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAtMS4wOyB9XHJcbiAgICByZXR1cm4gc24uQWRkRWZmZWN0SXRlbVRvU3BlbGwoYWtTcGVsbCwgYWtTcGVsbFRvQ29weUZyb20sIGFpSW5kZXgsIGFmQ29zdCk7XHJcbn07XHJcbi8vUmVtb3ZlcyBtYWdpYyBlZmZlY3QgZnJvbSBzcGVsbCB0aGF0IG1hdGNoZXMgbWFnbml0dWRlL2FyZWEvZHVyYXRpb24vY29zdC5cclxuZXhwb3J0IHZhciBSZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbCA9IGZ1bmN0aW9uIChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpIHtcclxuICAgIGlmIChhZkNvc3QgPT09IHZvaWQgMCkgeyBhZkNvc3QgPSAwLjA7IH1cclxuICAgIHJldHVybiBzbi5SZW1vdmVNYWdpY0VmZmVjdEZyb21TcGVsbChha1NwZWxsLCBha01hZ2ljRWZmZWN0LCBhZk1hZ25pdHVkZSwgYWlBcmVhLCBhaUR1cmF0aW9uLCBhZkNvc3QpO1xyXG59O1xyXG4vL1JlbW92ZXMgZWZmZWN0aXRlbSBmcm9tIHNwZWxsIHRoYXQgbWF0Y2hlcyBzcGVsbCBhdCBpbmRleC5cclxuZXhwb3J0IHZhciBSZW1vdmVFZmZlY3RJdGVtRnJvbVNwZWxsID0gZnVuY3Rpb24gKGFrU3BlbGwsIGFrU3BlbGxUb01hdGNoRnJvbSwgYWlJbmRleCkgeyByZXR1cm4gc24uUmVtb3ZlRWZmZWN0SXRlbUZyb21TcGVsbChha1NwZWxsLCBha1NwZWxsVG9NYXRjaEZyb20sIGFpSW5kZXgpOyB9O1xyXG4vL1NldHMgY2FzdGluZyB0eXBlIG9mIHNwZWxsIChhbmQgYWxsIGF0dGFjaGVkIG1hZ2ljIGVmZmVjdHMpXHJcbmV4cG9ydCB2YXIgU2V0U3BlbGxDYXN0aW5nVHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsQ2FzdGluZ1R5cGUoYWtTcGVsbCwgYWlUeXBlKTsgfTtcclxuLy9TZXRzIGRlbGl2ZXJ5IHR5cGUgb2Ygc3BlbGwgKGFuZCBhbGwgYXR0YWNoZWQgbWFnaWMgZWZmZWN0cylcclxuZXhwb3J0IHZhciBTZXRTcGVsbERlbGl2ZXJ5VHlwZSA9IGZ1bmN0aW9uIChha1NwZWxsLCBhaVR5cGUpIHsgcmV0dXJuIHNuLlNldFNwZWxsRGVsaXZlcnlUeXBlKGFrU3BlbGwsIGFpVHlwZSk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1NUUklOR1NcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vQ29udmVydHMgc3RyaW5nIHRvIGhleCB2YWx1ZSBpZiB2YWxpZFxyXG5leHBvcnQgdmFyIEludFRvU3RyaW5nID0gZnVuY3Rpb24gKGFpVmFsdWUsIGFiSGV4KSB7XHJcbiAgICByZXR1cm4gc24uSW50VG9TdHJpbmcoYWlWYWx1ZSwgYWJIZXgpO1xyXG59O1xyXG4vL0NvbnZlcnRzIHN0cmluZyB0byBpbnQuIFJldHVybnMgLTEgZm9yIG91dCBvZiBib3VuZCB2YWx1ZXMuXHJcbmV4cG9ydCB2YXIgU3RyaW5nVG9JbnQgPSBmdW5jdGlvbiAoYXNTdHJpbmcpIHtcclxuICAgIHJldHVybiBzbi5TdHJpbmdUb0ludChhc1N0cmluZyk7XHJcbn07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL1VJXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgdGhlIG9iamVjdHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudGx5IG9wZW5lZCBjb250YWluZXIgaW4gY29udGFpbmVyIG1lbnVcclxuZXhwb3J0IHZhciBHZXRNZW51Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHNuLkdldE1lbnVDb250YWluZXIoKTtcclxufTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vVVRJTElUWVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9DYWxjdWxhdGVzIGEgcmFuZG9tIGZsb2F0IGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21GbG9hdCA9IGZ1bmN0aW9uIChhZk1pbiwgYWZNYXgpIHtcclxuICAgIHJldHVybiBzbi5HZW5lcmF0ZVJhbmRvbUZsb2F0KGFmTWluLCBhZk1heCk7XHJcbn07XHJcbi8vQ2FsY3VsYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gYWZNaW4gYW5kIGFmTWF4LCBiYXNlZCBvbiBNZXJzZW5uZSBUd2lzdGVyXHJcbmV4cG9ydCB2YXIgR2VuZXJhdGVSYW5kb21JbnQgPSBmdW5jdGlvbiAoYWZNaW4sIGFmTWF4KSB7XHJcbiAgICByZXR1cm4gc24uR2VuZXJhdGVSYW5kb21JbnQoYWZNaW4sIGFmTWF4KTtcclxufTtcclxuLy9HZXRzIHN5c3RlbSB0aW1lIGFuZCBkYXRlXHJcbi8vWWVhciAoMTYwMSAtIDMwODI3KVxyXG4vL01vbnRoICgxLTEyKVxyXG4vL0RheU9mV2VlayAoMTpTdW5kYXkgLSA3OlNhdHVyZGF5KVxyXG4vL0RheSAoMS0zMSlcclxuLy9Ib3VyICgwLTIzKVxyXG4vL01pbnV0ZSAoMC01OSlcclxuLy9TZWNvbmQgKDAtNTkpXHJcbi8vTWlsbGlzZWNvbmQgKDAtOTk5KVxyXG5leHBvcnQgdmFyIEdldFN5c3RlbVRpbWUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzbi5HZXRTeXN0ZW1UaW1lKCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9WSVNVQUxFRkZFQ1RTXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy0tLS0tLS0tXHJcbi8vR0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vR2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgR2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0KSB7IHJldHVybiBzbi5HZXRBcnRPYmplY3QoYWtFZmZlY3QpOyB9O1xyXG4vL1JldHVybnMgdGhlIHRvdGFsIG51bWJlciBvZiBhcnQgb2JqZWN0cyBwcmVzZW50L2FjdGl2ZSAob24gb2JqZWN0cykgd2l0aGluIHRoZSBsb2FkZWQgYXJlYS5cclxuZXhwb3J0IHZhciBHZXRBcnRPYmplY3RUb3RhbENvdW50ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBhYkFjdGl2ZSkgeyByZXR1cm4gc24uR2V0QXJ0T2JqZWN0VG90YWxDb3VudChha0VmZmVjdCwgYWJBY3RpdmUpOyB9O1xyXG4vLy0tLS0tLS0tXHJcbi8vU0VUVEVSU1xyXG4vLy0tLS0tLS0tXHJcbi8vU2V0cyB0aGUgYXJ0IG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhlIHZpc3VhbCBlZmZlY3QuXHJcbmV4cG9ydCB2YXIgU2V0QXJ0T2JqZWN0ID0gZnVuY3Rpb24gKGFrRWZmZWN0LCBha0FydCkgeyByZXR1cm4gc24uU2V0QXJ0T2JqZWN0KGFrRWZmZWN0LCBha0FydCk7IH07XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9XRUFUSEVSXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBhcyBpbiBDSyBjb25kaXRpb25zICgwLjAtMS4wKS5cclxuZXhwb3J0IHZhciBHZXRXaW5kU3BlZWRBc0Zsb2F0ID0gZnVuY3Rpb24gKGFrV2VhdGhlcikgeyByZXR1cm4gc24uR2V0V2luZFNwZWVkQXNGbG9hdChha1dlYXRoZXIpOyB9O1xyXG4vL0dldHMgd2luZCBzcGVlZCBhcyBzaG93biBpbiB0aGUgd2VhdGhlciBmb3JtICgwLTI1NSkuXHJcbmV4cG9ydCB2YXIgR2V0V2luZFNwZWVkQXNJbnQgPSBmdW5jdGlvbiAoYWtXZWF0aGVyKSB7IHJldHVybiBzbi5HZXRXaW5kU3BlZWRBc0ludChha1dlYXRoZXIpOyB9O1xyXG4vKiogV0VBVEhFUiBUWVBFU1xyXG4gICAgICAgIFBsZWFzYW50ID0gMFxyXG4gICAgICAgIENsb3VkeSA9IDFcclxuICAgICAgICBSYWlueSA9IDJcclxuICAgICAgICBTbm93ID0gMyAqL1xyXG4vL0dldHMgd2VhdGhlci9jdXJyZW50IHdlYXRoZXIgdHlwZSBpZiBha1dlYXRoZXIgaXMgTm9uZVxyXG5leHBvcnQgdmFyIEdldFdlYXRoZXJUeXBlID0gZnVuY3Rpb24gKGFrV2VhdGhlcikge1xyXG4gICAgaWYgKGFrV2VhdGhlciA9PT0gdm9pZCAwKSB7IGFrV2VhdGhlciA9IG51bGw7IH1cclxuICAgIHJldHVybiBzbi5HZXRXZWF0aGVyVHlwZShha1dlYXRoZXIpO1xyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbmltcG9ydCB7IG9uY2UsIG9uLCBGb3JtLCBHYW1lLCBVdGlsaXR5LCBwcmludENvbnNvbGUsIE9iamVjdFJlZmVyZW5jZSwgYnJvd3NlciwgZGVzdHJveUFsbFRleHRzLCBEZWJ1ZywgdW5zdWJzY3JpYmUgfSBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbmltcG9ydCB7IE1vZEV2ZW50IH0gZnJvbSAnLi9tb2RldmVudCc7XHJcbmltcG9ydCAqIGFzIHd0IGZyb20gJy4uLy4uL21vZHVsZXMvU1BUZXh0VXRpbHMvc3BUZXh0VXRpbHMnO1xyXG5pbXBvcnQgeyBVaSB9IGZyb20gJ0Bza3lyaW0tcGxhdGZvcm0vc2t5cmltLXBsYXRmb3JtJztcclxuaW1wb3J0IHsgQWRkQWxsSXRlbXNUb0FycmF5IH0gZnJvbSAnQHNreXJpbS1wbGF0Zm9ybS9wbzMtcGFweXJ1cy1leHRlbmRlci9QTzNfU0tTRUZ1bmN0aW9ucyc7XHJcbi8vX19fX19fX19fX19fX19fX19fX19fX19fX18gVmFyaWFibGUgU2V0dXBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmJyb3dzZXIuc2V0VmlzaWJsZSh0cnVlKTtcclxudmFyIHggPSAyNTAwO1xyXG52YXIgeSA9IDEwMDA7XHJcbnZhciB3aGl0ZSA9IFsxLCAxLCAxLCAxXTtcclxuZGVzdHJveUFsbFRleHRzKCk7XHJcbnZhciBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQgPSBuZXcgd3Quc3BUZXh0KDE1MDAsIHksICdjdXJyZW50SXRlbScsIFsxLCAxLCAxLCAwXSwgdW5kZWZpbmVkLCAnSW52ZW50b3J5U2xvdHMnKTtcclxuLy8gX19fX19fX19fX19fX19fX19fX19GVU5DVElPTlNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxudmFyIHdlYXBLd2RJZHM7XHJcbihmdW5jdGlvbiAod2VhcEt3ZElkcykge1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCYXR0bGVheGVcIl0gPSA0NDg4MThdID0gXCJXZWFwVHlwZUJhdHRsZWF4ZVwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZEFycm93XCJdID0gMTEwMzEwNV0gPSBcIldlYXBUeXBlQm91bmRBcnJvd1wiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVCb3VuZFdlYXBvblwiXSA9IDIyNzgxN10gPSBcIldlYXBUeXBlQm91bmRXZWFwb25cIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlQm93XCJdID0gMTI0NjkzXSA9IFwiV2VhcFR5cGVCb3dcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlRGFnZ2VyXCJdID0gMTI0NjkxXSA9IFwiV2VhcFR5cGVEYWdnZXJcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlR3JlYXRzd29yZFwiXSA9IDQ0ODgxN10gPSBcIldlYXBUeXBlR3JlYXRzd29yZFwiO1xyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVNYWNlXCJdID0gMTI0NjkyXSA9IFwiV2VhcFR5cGVNYWNlXCI7XHJcbiAgICAvLyBXZWFwVHlwZU1lbGVlID0gNDIyNTIzLFxyXG4gICAgd2VhcEt3ZElkc1t3ZWFwS3dkSWRzW1wiV2VhcFR5cGVTdGFmZlwiXSA9IDEyNDY5NF0gPSBcIldlYXBUeXBlU3RhZmZcIjtcclxuICAgIHdlYXBLd2RJZHNbd2VhcEt3ZElkc1tcIldlYXBUeXBlU3dvcmRcIl0gPSAxMjQ2ODldID0gXCJXZWFwVHlwZVN3b3JkXCI7XHJcbiAgICAvLyBXZWFwVHlwZVVuaXF1ZSA9IDEzNjM2MTAsXHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhckF4ZVwiXSA9IDEyNDY5MF0gPSBcIldlYXBUeXBlV2FyQXhlXCI7XHJcbiAgICB3ZWFwS3dkSWRzW3dlYXBLd2RJZHNbXCJXZWFwVHlwZVdhcmhhbW1lclwiXSA9IDQ0ODgxNl0gPSBcIldlYXBUeXBlV2FyaGFtbWVyXCI7XHJcbn0pKHdlYXBLd2RJZHMgfHwgKHdlYXBLd2RJZHMgPSB7fSkpO1xyXG52YXIgYXJtb3JLd2RJZHM7XHJcbihmdW5jdGlvbiAoYXJtb3JLd2RJZHMpIHtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JCb290c1wiXSA9IDQ0MjYwNV0gPSBcIkFybW9yQm9vdHNcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDbG90aGluZ1wiXSA9IDQ0MTMyMF0gPSBcIkFybW9yQ2xvdGhpbmdcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JDdWlyYXNzXCJdID0gNDQyNjA0XSA9IFwiQXJtb3JDdWlyYXNzXCI7XHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9yR2F1bnRsZXRzXCJdID0gNDQyNjA3XSA9IFwiQXJtb3JHYXVudGxldHNcIjtcclxuICAgIC8vIEFybW9ySGVhdnkgPSA0NDEyOTgsXHJcbiAgICBhcm1vckt3ZElkc1thcm1vckt3ZElkc1tcIkFybW9ySGVsbWV0XCJdID0gNDQyNjA2XSA9IFwiQXJtb3JIZWxtZXRcIjtcclxuICAgIGFybW9yS3dkSWRzW2FybW9yS3dkSWRzW1wiQXJtb3JKZXdlbHJ5XCJdID0gNDQxMzIxXSA9IFwiQXJtb3JKZXdlbHJ5XCI7XHJcbiAgICAvLyBBcm1vckxpZ2h0ID0gNDQxMjk5LFxyXG4gICAgYXJtb3JLd2RJZHNbYXJtb3JLd2RJZHNbXCJBcm1vclNoaWVsZFwiXSA9IDYxNTg1OF0gPSBcIkFybW9yU2hpZWxkXCI7XHJcbn0pKGFybW9yS3dkSWRzIHx8IChhcm1vckt3ZElkcyA9IHt9KSk7XHJcbnZhciBtaXNjS3dkSWRzO1xyXG4oZnVuY3Rpb24gKG1pc2NLd2RJZHMpIHtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxIaWRlXCJdID0gNTk1MTc4XSA9IFwiVmVuZG9ySXRlbUFuaW1hbEhpZGVcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BbmltYWxQYXJ0XCJdID0gNTk1MTc5XSA9IFwiVmVuZG9ySXRlbUFuaW1hbFBhcnRcIjtcclxuICAgIC8vIFZlbmRvckl0ZW1Bcm1vciA9IDU4ODEyMSxcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1BcnJvd1wiXSA9IDU5NTk0M10gPSBcIlZlbmRvckl0ZW1BcnJvd1wiO1xyXG4gICAgLy8gVmVuZG9ySXRlbUNsb3RoaW5nID0gNTg4MTIzLFxyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUNsdXR0ZXJcIl0gPSA1OTUxNzddID0gXCJWZW5kb3JJdGVtQ2x1dHRlclwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbURhZWRyaWNBcnRpZmFjdFwiXSA9IDU5NTk0NF0gPSBcIlZlbmRvckl0ZW1EYWVkcmljQXJ0aWZhY3RcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1GaXJld29yZFwiXSA9IDc4MTUyN10gPSBcIlZlbmRvckl0ZW1GaXJld29yZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RcIl0gPSA1NzcwMDJdID0gXCJWZW5kb3JJdGVtRm9vZFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUZvb2RSYXdcIl0gPSA2NTkwMzBdID0gXCJWZW5kb3JJdGVtRm9vZFJhd1wiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbUdlbVwiXSA9IDU5NTE4MV0gPSBcIlZlbmRvckl0ZW1HZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1JbmdyZWRpZW50XCJdID0gNTc3MDAzXSA9IFwiVmVuZG9ySXRlbUluZ3JlZGllbnRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1KZXdlbHJ5XCJdID0gNTg4MTIyXSA9IFwiVmVuZG9ySXRlbUpld2VscnlcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1LZXlcIl0gPSA1OTUxODNdID0gXCJWZW5kb3JJdGVtS2V5XCI7XHJcbiAgICAvLyBWZW5kb3JJdGVtT3JkZXJSb2JlcyA9IDI5NDMzNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1PcmVJbmdvdFwiXSA9IDU5NTE4MF0gPSBcIlZlbmRvckl0ZW1PcmVJbmdvdFwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVBlYWNld2VlZFwiXSA9IDI5NTk5OV0gPSBcIlZlbmRvckl0ZW1QZWFjZXdlZWRcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Qb2lzb25cIl0gPSA1NzcwMDVdID0gXCJWZW5kb3JJdGVtUG9pc29uXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtUG90aW9uXCJdID0gNTc3MDA0XSA9IFwiVmVuZG9ySXRlbVBvdGlvblwiO1xyXG4gICAgLy8gVmVuZG9ySXRlbVByb3BlcnR5QXJrTWFya2V0ID0gMTMxNjE4MyxcclxuICAgIC8vIFZlbmRvckl0ZW1Qcm9wZXJ0eUFya1VwcGVyQ2l0eSA9IDI5MDEwNixcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1SZWNpcGVcIl0gPSAxMDA2NzY4XSA9IFwiVmVuZG9ySXRlbVJlY2lwZVwiO1xyXG4gICAgbWlzY0t3ZElkc1ttaXNjS3dkSWRzW1wiVmVuZG9ySXRlbVNjcm9sbFwiXSA9IDY1OTAzMV0gPSBcIlZlbmRvckl0ZW1TY3JvbGxcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Tb3VsR2VtXCJdID0gNjA0MDY3XSA9IFwiVmVuZG9ySXRlbVNvdWxHZW1cIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1TcGVsbFRvbWVcIl0gPSA2MDQwNjldID0gXCJWZW5kb3JJdGVtU3BlbGxUb21lXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtQm9va1wiXSA9IDYwNDA2Nl0gPSBcIlZlbmRvckl0ZW1Cb29rXCI7XHJcbiAgICBtaXNjS3dkSWRzW21pc2NLd2RJZHNbXCJWZW5kb3JJdGVtU3RhZmZcIl0gPSA2MDQwNjhdID0gXCJWZW5kb3JJdGVtU3RhZmZcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1Ub29sXCJdID0gNTk1MTgyXSA9IFwiVmVuZG9ySXRlbVRvb2xcIjtcclxuICAgIG1pc2NLd2RJZHNbbWlzY0t3ZElkc1tcIlZlbmRvckl0ZW1XZWFwb25cIl0gPSA1ODgxMjBdID0gXCJWZW5kb3JJdGVtV2VhcG9uXCI7XHJcbn0pKG1pc2NLd2RJZHMgfHwgKG1pc2NLd2RJZHMgPSB7fSkpO1xyXG52YXIgaXRlbUNhdGVnb3J5Vm9sdW1lcyA9IHtcclxuICAgIC8vIHdlYXBvbnNcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkFycm93ICc6IDEsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvd19FcXVpcHBlZCAnOiAxLFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm9sdCAnOiAwLjUsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9XZWFwb25Cb2x0X0VxdWlwcGVkICc6IDAuNSxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIICc6IDUsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCAnOiA1LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkggJzogMTAsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9XZWFwb24ySF9FcXVpcHBlZCAnOiAxMCxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlciAnOiAyLFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkICc6IDIsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9XZWFwb25Dcm9zc0JvdyAnOiA4LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3dfRXF1aXBwZWQgJzogOCxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvdyAnOiA4LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93X0VxdWlwcGVkICc6IDgsXHJcbiAgICAvLyBhcm1vcnNcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkICc6IDksXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZF9FcXVpcHBlZCAnOiA5LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzICc6IDE1LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkICc6IDE1LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290cyAnOiA2LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c19FcXVpcHBlZCAnOiA2LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JIZWxtZXQgJzogNixcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0X0VxdWlwcGVkICc6IDYsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0cyAnOiA0LFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfQXJtb3JHYXVudGxldHNfRXF1aXBwZWQgJzogNCxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXMgJzogNixcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNfRXF1aXBwZWQgJzogNixcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0pld2VscnkgJzogMyxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWQgJzogMyxcclxuICAgIC8vIG1pc2NcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwgJzogMixcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0Zvb2QgJzogMSxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX1BvdGlvbiAnOiAxLFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfRHJpbmsgJzogMixcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnQgJzogMC4xLFxyXG4gICAgJyAgICBSQUJJbnZfSXRlbVR5cGVfR2VtICc6IDEsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtICc6IDEsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9Mb2NrcGljayAnOiAwLjUsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9NaXNjTGFyZ2UgJzogNSxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW0gJzogMyxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbCAnOiAwLjEsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9Hb2xkICc6IDAuMCxcclxuICAgICcgICAgUkFCSW52X0l0ZW1UeXBlX09yZUluZ290ICc6IDIsXHJcbiAgICAnICAgIFJBQkludl9JdGVtVHlwZV9IaWRlUGVsdCAnOiAxXHJcbn07XHJcbnZhciBrZXl3b3JkVG9DYXRlZ29yeSA9IHtcclxuICAgIC8vIHdlYXBvbnNcclxuICAgIDQ0ODgxODogNiAvKiBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMkggKi8sXHJcbiAgICAxMjQ2OTM6IDEyIC8qIFJBQkludl9JdGVtVHlwZV9XZWFwb25Cb3cgKi8sXHJcbiAgICAxMjQ2OTE6IDQgLyogUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIICovLFxyXG4gICAgNDQ4ODE3OiA2IC8qIFJBQkludl9JdGVtVHlwZV9XZWFwb24ySCAqLyxcclxuICAgIDEyNDY5MjogNCAvKiBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUggKi8sXHJcbiAgICAxMjQ2OTQ6IDQgLyogUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIICovLFxyXG4gICAgMTI0Njg5OiA0IC8qIFJBQkludl9JdGVtVHlwZV9XZWFwb24xSCAqLyxcclxuICAgIDEyNDY5MDogNCAvKiBSQUJJbnZfSXRlbVR5cGVfV2VhcG9uMUggKi8sXHJcbiAgICA0NDg4MTY6IDYgLyogUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIICovLFxyXG4gICAgNTk1OTQzOiAwIC8qIFJBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyAqLyxcclxuICAgIC8vIGFybW9yc1xyXG4gICAgNDQyNjA1OiAxOCAvKiBSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290cyAqLyxcclxuICAgIDQ0MTMyMDogMjQgLyogUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXMgKi8sXHJcbiAgICA0NDI2MDQ6IDE2IC8qIFJBQkludl9JdGVtVHlwZV9Bcm1vckN1aXJhc3MgKi8sXHJcbiAgICA0NDI2MDc6IDIyIC8qIFJBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0cyAqLyxcclxuICAgIDQ0MjYwNjogMjAgLyogUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0ICovLFxyXG4gICAgNDQxMzIxOiAyNiAvKiBSQUJJbnZfSXRlbVR5cGVfSmV3ZWxyeSAqLyxcclxuICAgIDYxNTg1ODogMTQgLyogUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkICovLFxyXG4gICAgLy8gTWlzY3NcclxuICAgIDU5NTE3ODogNDEgLyogUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0ICovLFxyXG4gICAgNTk1MTc5OiAyOSAvKiBSQUJJbnZfSXRlbVR5cGVfRm9vZCAqLyxcclxuICAgIDU5NTE3NzogMzggLyogUkFCSW52X0l0ZW1UeXBlX01pc2NTbWFsbCAqLyxcclxuICAgIDc4MTUyNzogMzcgLyogUkFCSW52X0l0ZW1UeXBlX01pc2NNZWRpdW0gKi8sXHJcbiAgICA1NzcwMDI6IDI5IC8qIFJBQkludl9JdGVtVHlwZV9Gb29kICovLFxyXG4gICAgNjU5MDMwOiAyOSAvKiBSQUJJbnZfSXRlbVR5cGVfRm9vZCAqLyxcclxuICAgIDU5NTE4MTogMzMgLyogUkFCSW52X0l0ZW1UeXBlX0dlbSAqLyxcclxuICAgIDU3NzAwMzogMzIgLyogUkFCSW52X0l0ZW1UeXBlX0luZ3JlZGllbnQgKi8sXHJcbiAgICA1ODgxMjI6IDI2IC8qIFJBQkludl9JdGVtVHlwZV9KZXdlbHJ5ICovLFxyXG4gICAgNTk1MTgwOiA0MCAvKiBSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3QgKi8sXHJcbiAgICA1NzcwMDU6IDMwIC8qIFJBQkludl9JdGVtVHlwZV9Qb3Rpb24gKi8sXHJcbiAgICA1NzcwMDQ6IDMwIC8qIFJBQkludl9JdGVtVHlwZV9Qb3Rpb24gKi8sXHJcbiAgICAxMDA2NzY4OiAyOCAvKiBSQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbCAqLyxcclxuICAgIDY1OTAzMTogMjggLyogUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwgKi8sXHJcbiAgICA2MDQwNjc6IDM0IC8qIFJBQkludl9JdGVtVHlwZV9Tb3VsZ2VtICovLFxyXG4gICAgNjA0MDY5OiAyOCAvKiBSQUJJbnZfSXRlbVR5cGVfQm9va1Njcm9sbCAqLyxcclxuICAgIDYwNDA2NjogMjggLyogUkFCSW52X0l0ZW1UeXBlX0Jvb2tTY3JvbGwgKi8sXHJcbiAgICA2MDQwNjg6IDQgLyogUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIICovLFxyXG4gICAgNTk1MTgyOiAzOCAvKiBSQUJJbnZfSXRlbVR5cGVfTWlzY1NtYWxsICovLFxyXG59O1xyXG5mdW5jdGlvbiBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgdmFyIGYgPSBHYW1lLmdldEZvcm1FeChpdGVtKTtcclxuICAgIHZhciBpc0VxdWlwcGVkID0gKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmlzRXF1aXBwZWQoZik7XHJcbiAgICBpZiAoIWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGlzRXF1aXBwZWQ6OiAke3BsKCk/LmlzRXF1aXBwZWQoZil9YClcclxuICAgIHZhciBreWRzID0gZi5nZXRLZXl3b3JkcygpO1xyXG4gICAgdmFyIGtleSA9IC0xO1xyXG4gICAgaWYgKGl0ZW0gPT0gMTUpIHtcclxuICAgICAgICByZXR1cm4gMzkgLyogUkFCSW52X0l0ZW1UeXBlX0dvbGQgKi87XHJcbiAgICB9IC8vIGdvbGQgZG9lc24ndCBoYXZlIGEga2V5d29yZCBhbmQgbmVlZHMgdG8gYmUgdHJlYXRlZCBkaWZmZXJlbnRcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgKGt5ZHMgPT09IG51bGwgfHwga3lkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDoga3lkcy5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICB2YXIgayA9IGt5ZHNbaV07XHJcbiAgICAgICAgdmFyIGZfMSA9IEZvcm0uZnJvbShrKS5nZXRGb3JtSUQoKTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoa2V5d29yZFRvQ2F0ZWdvcnkpLmluY2x1ZGVzKFwiXCIuY29uY2F0KGZfMSkpKSB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAga2V5ID0ga2V5d29yZFRvQ2F0ZWdvcnlbZl8xXTtcclxuICAgICAgICAgICAgaWYgKGlzRXF1aXBwZWQpIHtcclxuICAgICAgICAgICAgICAgIGtleSArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDI3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBwcmludENvbnNvbGUoYGRldGVybWluZUl0ZW1DYXRlZ29yeTo6IHRoZSBrZXkgaXMgJHtrZXl9YClcclxuICAgICAgICAgICAgLy8gcHJpbnRDb25zb2xlKGBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnk6OiB0aGUga2V5d29yZCBpZCBpcyAke2Z9YClcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChrZXkgPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBkZXRlcm1pbmVJdGVtVm9sdW1lKGl0ZW0pIHtcclxuICAgIHZhciBjYXRlZ29yeSA9IGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKTtcclxuICAgIHZhciB2b2wgPSBPYmplY3QudmFsdWVzKGl0ZW1DYXRlZ29yeVZvbHVtZXMpW2NhdGVnb3J5XTtcclxuICAgIC8vIHByaW50Q29uc29sZShgZGV0ZXJtaW5lSXRlbVZvbHVtZTo6IHRoZSB2b2wgaXMgJHt2b2x9YClcclxuICAgIGlmICghdm9sKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdm9sO1xyXG59XHJcbnZhciBCYXNlU2xvdHMgPSBbXTtcclxudmFyIFNsb3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTbG90KG5hbWUsIG1heFNpemUsIHgsIHkpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYmFzZVNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMud2lkZ2V0ID0gbmV3IHd0LnNwVGV4dCh4LCB5LCB0aGlzLm5hbWUsIHdoaXRlLCB1bmRlZmluZWQsICdJbnZlbnRvcnlTbG90cycpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICBCYXNlU2xvdHMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICAgIFNsb3QucHJvdG90eXBlLmdldEZpbGxlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U2l6ZTtcclxuICAgIH07XHJcbiAgICBTbG90LnByb3RvdHlwZS5nZXRGaWxsZWRQcm9wb3J0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiOiAgIFwiKS5jb25jYXQodGhpcy5jdXJyZW50U2l6ZS50b0ZpeGVkKDIpLCBcIiAvIFwiKS5jb25jYXQodGhpcy5iYXNlU2l6ZSk7XHJcbiAgICB9O1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIEJhc2VTbG90cy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgICAgIGlmIChzLmN1cnJlbnRTaXplIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHMuY3VycmVudFNpemUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldEFscGhhKDEpO1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRDb2xvcih3aGl0ZSk7XHJcbiAgICAgICAgICAgIHMud2lkZ2V0LnNldFRleHQocy5nZXRGaWxsZWRQcm9wb3J0aW9uKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFNsb3QuZmFkZUFsbE91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgwKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBTbG90LmZhZGVBbGxJbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBCYXNlU2xvdHMuZm9yRWFjaChmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICBzLndpZGdldC5zZXRBbHBoYSgxKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2xvdDtcclxufSgpKTtcclxudmFyIE1pc2Nfc2xvdCA9IG5ldyBTbG90KCdNaXNjJywgMjAwLCB4LCB5KTtcclxudmFyIFdlYXBvblNoZWF0aHNfc2xvdCA9IG5ldyBTbG90KCdXZWFwb25zJywgMjAsIHgsIHkgKyAyMCk7XHJcbnZhciBBbW1vX3Nsb3QgPSBuZXcgU2xvdCgnUXVpdmVyJywgNjAsIHgsIHkgKyA0MCk7XHJcbnZhciBWYWx1YWJsZXNfc2xvdCA9IG5ldyBTbG90KCdWYWx1YWJsZXMnLCA1MCwgeCwgeSArIDYwKTtcclxudmFyIEJvdHRsZXNfc2xvdCA9IG5ldyBTbG90KCdCb3R0bGVzJywgMTAsIHgsIHkgKyA4MCk7XHJcbnZhciBFcXVpcHBlZF9zbG90ID0gbmV3IFNsb3QoJ0VxdWlwcGVkIExvYWQnLCA1MCwgeCwgeSArIDEwMCk7XHJcbmZ1bmN0aW9uIGRldGVybWluZUl0ZW1zU2xvdChpdGVtKSB7XHJcbiAgICB2YXIgY2F0ZWdvcnkgPSBkZXRlcm1pbmVJdGVtQ2F0ZWdvcnkoaXRlbSk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGRldGVybWluZUl0ZW1DYXRlZ29yeTo6IGNhdGVnb3J5IG51bWJlciA9PSAke2NhdGVnb3J5fWApXHJcbiAgICB2YXIga2V5ID0gT2JqZWN0LmtleXMoY2F0ZWdvcnlUb1Nsb3QpW2NhdGVnb3J5XTtcclxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGNhdGVnb3J5VG9TbG90KVtjYXRlZ29yeV07XHJcbn1cclxudmFyIGNhdGVnb3J5VG9TbG90ID0ge1xyXG4gICAgLy8gd2VhcG9uc1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25BcnJvdyc6IEFtbW9fc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQXJyb3dfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkJvbHRfRXF1aXBwZWQnOiBBbW1vX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjFIJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24xSF9FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbjJIJzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb24ySF9FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkRhZ2dlcic6IFdlYXBvblNoZWF0aHNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uRGFnZ2VyX0VxdWlwcGVkJzogRXF1aXBwZWRfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQ3Jvc3NCb3cnOiBXZWFwb25TaGVhdGhzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX1dlYXBvbkNyb3NzQm93X0VxdWlwcGVkJzogRXF1aXBwZWRfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfV2VhcG9uQm93JzogV2VhcG9uU2hlYXRoc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9XZWFwb25Cb3dfRXF1aXBwZWQnOiBFcXVpcHBlZF9zbG90LFxyXG4gICAgLy8gYXJtb3JzXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yU2hpZWxkJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vclNoaWVsZF9FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yQ3VpcmFzcyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JDdWlyYXNzX0VxdWlwcGVkJzogRXF1aXBwZWRfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290cyc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfQXJtb3JCb290c19FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9ySGVsbWV0JzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckhlbG1ldF9FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0FybW9yR2F1bnRsZXRzJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Bcm1vckdhdW50bGV0c19FcXVpcHBlZCc6IEVxdWlwcGVkX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXMnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0Nsb3RoZXNfRXF1aXBwZWQnOiBFcXVpcHBlZF9zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9KZXdlbHJ5JzogVmFsdWFibGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0pld2VscnlfRXF1aXBwZWQnOiBFcXVpcHBlZF9zbG90LFxyXG4gICAgLy8gbWlzY1xyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Cb29rU2Nyb2xsJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Gb29kJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Qb3Rpb24nOiBCb3R0bGVzX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0RyaW5rJzogQm90dGxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9JbmdyZWRpZW50JzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9HZW0nOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfU291bGdlbSc6IFZhbHVhYmxlc19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9Mb2NrcGljayc6IE1pc2Nfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfTWlzY0xhcmdlJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjTWVkaXVtJzogTWlzY19zbG90LFxyXG4gICAgJ1JBQkludl9JdGVtVHlwZV9NaXNjU21hbGwnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0dvbGQnOiBWYWx1YWJsZXNfc2xvdCxcclxuICAgICdSQUJJbnZfSXRlbVR5cGVfT3JlSW5nb3QnOiBNaXNjX3Nsb3QsXHJcbiAgICAnUkFCSW52X0l0ZW1UeXBlX0hpZGVQZWx0JzogTWlzY19zbG90XHJcbn07XHJcbmZ1bmN0aW9uIHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKSB7XHJcbiAgICByZXR1cm4gW2RldGVybWluZUl0ZW1Wb2x1bWUoaXRlbSksIGRldGVybWluZUl0ZW1zU2xvdChpdGVtKV07XHJcbn1cclxuZnVuY3Rpb24gYWRkSXRlbXRvU2xvdChpdGVtLCBudW0sIG5ld1Nsb3QpIHtcclxuICAgIGlmIChudW0gPT09IHZvaWQgMCkgeyBudW0gPSAxOyB9XHJcbiAgICBpZiAobmV3U2xvdCA9PT0gdm9pZCAwKSB7IG5ld1Nsb3QgPSB1bmRlZmluZWQ7IH1cclxuICAgIHZhciBzbG90O1xyXG4gICAgdmFyIHR1cGxlID0gc29sdmVJbmNvbWluZ0l0ZW1JbmZvKGl0ZW0pO1xyXG4gICAgdmFyIHZvbCA9IHR1cGxlWzBdICogbnVtO1xyXG4gICAgaWYgKCFuZXdTbG90KSB7XHJcbiAgICAgICAgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc2xvdCA9IG5ld1Nsb3Q7XHJcbiAgICB9XHJcbiAgICBzbG90Lml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoc2xvdC5pdGVtcylcclxuICAgIHNsb3QuY3VycmVudFNpemUgKz0gdm9sO1xyXG4gICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIG51bSwgb2xkU2xvdCkge1xyXG4gICAgaWYgKG51bSA9PT0gdm9pZCAwKSB7IG51bSA9IDE7IH1cclxuICAgIGlmIChvbGRTbG90ID09PSB2b2lkIDApIHsgb2xkU2xvdCA9IHVuZGVmaW5lZDsgfVxyXG4gICAgdmFyIHNsb3Q7XHJcbiAgICB2YXIgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICB2YXIgdm9sID0gdHVwbGVbMF0gKiBudW07XHJcbiAgICB2YXIgc3RvcEZsYWcgPSBmYWxzZTtcclxuICAgIC8vIGlmICghb2xkU2xvdCl7XHJcbiAgICAvLyAgICAgc2xvdCA9IHR1cGxlWzFdXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIEJhc2VTbG90cy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgaWYgKHMuaXRlbXMuaW5jbHVkZXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgc2xvdCA9IHM7XHJcbiAgICAgICAgICAgIC8vIHByaW50Q29uc29sZShzbG90Lm5hbWUpOyBcclxuICAgICAgICAgICAgc3RvcEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGkgPSBzbG90Lml0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgIHNsb3QuaXRlbXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc3RvcEZsYWcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8gaWYgKHN0b3BGbGFnKXtyZXR1cm59XHJcbiAgICAvLyBlbHNlIHtzbG90LmN1cnJlbnRTaXplIC09IHZvbH1cclxuICAgIC8vIG9sZFNsb3QuY3VycmVudFNpemUgLT0gdm9sXHJcbiAgICBzbG90LmN1cnJlbnRTaXplIC09IHZvbDtcclxuICAgIC8vIH1cclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG59XHJcbmZ1bmN0aW9uIHN3YXBCZXR3ZWVuU2xvdHMob2xkU2xvdCwgbmV3U2xvdCwgb3B0aW9uLCBpdGVtLCBudW0pIHtcclxuICAgIGlmIChvcHRpb24gPT0gJ3VuZXF1aXAnKSB7XHJcbiAgICAgICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIG51bSk7XHJcbiAgICAgICAgdmFyIG9sZENhdCA9IGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKTtcclxuICAgICAgICB2YXIgbmV3Q2F0ID0gb2xkQ2F0IC0gMTtcclxuICAgICAgICB2YXIgdm9sID0gT2JqZWN0LnZhbHVlcyhpdGVtQ2F0ZWdvcnlWb2x1bWVzKVtuZXdDYXRdO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlSXRlbWZyb21TbG90KGl0ZW0sIG51bSwgRXF1aXBwZWRfc2xvdCk7XHJcbiAgICBhZGRJdGVtdG9TbG90KGl0ZW0sIG51bSk7XHJcbn1cclxuLy8gY29uc3QgR2V0SXRlbVNlbGVjdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4vLyBcdGF3YWl0IFV0aWxpdHkud2FpdCgwLjAxKTtcclxuLy8gXHRjb25zdCByZWNpZXZlZDogRm9ybSA9IHN1LkdldEZvcm1WYWx1ZShudWxsLCBcIllNLlJBQi5TZWxlY3QuXCIpXHJcbi8vIFx0aWYgKCFyZWNpZXZlZCkge3JldHVybjt9XHJcbi8vICAgICAvLyBhZGRJdGVtdG9TbG90KHJlY2lldmVkKVxyXG4vLyB9XHJcbmZ1bmN0aW9uIHNsb3RMb29rYXRJdGVtKGl0ZW0sIG51bSkge1xyXG4gICAgaWYgKG51bSA9PT0gdm9pZCAwKSB7IG51bSA9IDE7IH1cclxuICAgIHZhciB0dXBsZSA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhpdGVtKTtcclxuICAgIHZhciB2b2wgPSArKHR1cGxlWzBdKS50b0ZpeGVkKDIpICogbnVtO1xyXG4gICAgdmFyIHNsb3QgPSB0dXBsZVsxXTtcclxuICAgIHZhciBzbG90TWF4ID0gc2xvdC5iYXNlU2l6ZTtcclxuICAgIHZhciBzbG90Q3VycmVudCA9ICsoc2xvdC5jdXJyZW50U2l6ZSkudG9GaXhlZCgyKTtcclxuICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpO1xyXG4gICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFRleHQoXCJWb2x1bWU6IFwiLmNvbmNhdCh2b2wsIFwiXFxuU2xvdDogXCIpLmNvbmNhdChzbG90Lm5hbWUpKTtcclxuICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQsIFwiICgrXCIpLmNvbmNhdCh2b2wsIFwiKSAvXCIpLmNvbmNhdChzbG90TWF4KSk7XHJcbiAgICBzbG90LndpZGdldC5zZXRDb2xvcihbMCwgMSwgMCwgMV0pO1xyXG59XHJcbnZhciBHZXRJdGVtSGlnaGxpZ2h0ZWQgPSBmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0dXBsZSwgdm9sLCBzbG90LCBzbG90TWF4LCBzbG90Q3VycmVudCwgaXNJbnZlbnRvcnksIGlzQ29udGFpbmVyO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4wMDEpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpO1xyXG4gICAgICAgICAgICAgICAgdHVwbGUgPSBzb2x2ZUluY29taW5nSXRlbUluZm8oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB2b2wgPSArKHR1cGxlWzBdKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgc2xvdCA9IHR1cGxlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF2b2wgfHwgIXNsb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzbG90TWF4ID0gc2xvdC5iYXNlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHNsb3RDdXJyZW50ID0gKyhzbG90LmN1cnJlbnRTaXplKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgU2xvdC51cGRhdGVXaWRnZXRzKCk7XHJcbiAgICAgICAgICAgICAgICBpc0ludmVudG9yeSA9IFVpLmlzTWVudU9wZW4oJ0ludmVudG9yeU1lbnUnKTtcclxuICAgICAgICAgICAgICAgIGlzQ29udGFpbmVyID0gVWkuaXNNZW51T3BlbignQ29udGFpbmVyTWVudScpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldFRleHQoXCJWb2x1bWU6IFwiLmNvbmNhdCh2b2wsIFwiXFxuU2xvdDogXCIpLmNvbmNhdChzbG90Lm5hbWUpKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmIChpc0ludmVudG9yeSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gc2xvdC53aWRnZXQuc2V0VGV4dChgJHtzbG90Q3VycmVudH0gKCske3ZvbH0pIC8ke3Nsb3RNYXh9YClcclxuICAgICAgICAgICAgICAgIC8vICAgICBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0VGV4dChgVm9sdW1lOiAke3ZvbH1cXG5TbG90OiAke3Nsb3QubmFtZX1gKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiAoaXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldENvbG9yKFswLCAxLCAwLCAxXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaWV3aW5nQ29udGFpbmVyKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzbG90LndpZGdldC5zZXRDb2xvcihbMSwwLjEsLjEsMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2xvdC53aWRnZXQuc2V0VGV4dChgJHtzbG90Lm5hbWV9OiAgJHtzbG90Q3VycmVudH0gKCske3ZvbH0pIC8ke3Nsb3RNYXh9YClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnZlbnRvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0VGV4dChcIlwiLmNvbmNhdChzbG90Lm5hbWUsIFwiOiAgXCIpLmNvbmNhdChzbG90Q3VycmVudCArIHZvbCwgXCIgKFwiKS5jb25jYXQoc2xvdEN1cnJlbnQgKyB2b2wsIFwiKSAvXCIpLmNvbmNhdChzbG90TWF4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qud2lkZ2V0LnNldFRleHQoXCJcIi5jb25jYXQoc2xvdC5uYW1lLCBcIjogIFwiKS5jb25jYXQoc2xvdEN1cnJlbnQgKyB2b2wsIFwiIChcIikuY29uY2F0KHNsb3RDdXJyZW50ICsgdm9sLCBcIikgL1wiKS5jb25jYXQoc2xvdE1heCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc1ZpZXdpbmdDb250YWluZXIoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzbG90Q3VycmVudCArIHZvbCA+IHNsb3RNYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0Q29sb3IoWzEsIDAsIDAsIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2xvdC53aWRnZXQuc2V0VGV4dChcIlwiLmNvbmNhdChzbG90Lm5hbWUsIFwiOiAgXCIpLmNvbmNhdChzbG90Q3VycmVudCwgXCIgKC1cIikuY29uY2F0KHZvbCwgXCIpIC9cIikuY29uY2F0KHNsb3RNYXgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIFVpLmludm9rZUJvb2woXCJIVUQgTWVudVwiLCBcIl9nbG9iYWwuc2t5dWkuY29tcG9uZW50cy5saXN0Lkxpc3RMYXlvdXQuUmVmcmVzaFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IH07XHJcbmZ1bmN0aW9uIERyb3BJdGVtKGl0ZW1JZCwgbnVtLCByZWYpIHtcclxuICAgIHZhciBoYW5kbGUgPSBNb2RFdmVudC5DcmVhdGUoJ1lNX1JBQl9TTE9UU19Ecm9wUmVxdWVzdCcpO1xyXG4gICAgTW9kRXZlbnQuUHVzaEludChoYW5kbGUsIGl0ZW1JZCk7XHJcbiAgICBNb2RFdmVudC5QdXNoSW50KGhhbmRsZSwgbnVtKTtcclxuICAgIE1vZEV2ZW50LlNlbmQoaGFuZGxlKTtcclxufVxyXG52YXIgd2FpdFJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaXRlbSwgY29udGFpbmVyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xyXG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBVdGlsaXR5LndhaXQoMC4xKV07XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgIChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVJdGVtKEdhbWUuZ2V0Rm9ybUV4KGl0ZW0pLCAxLCBmYWxzZSwgT2JqZWN0UmVmZXJlbmNlLmZyb20oR2FtZS5nZXRGb3JtRXgoY29udGFpbmVyKSkpO1xyXG4gICAgICAgICAgICAgICAgVWkuaW52b2tlQm9vbChcIkhVRCBNZW51XCIsIFwiX2dsb2JhbC5za3l1aS5jb21wb25lbnRzLmxpc3QuTGlzdExheW91dC5SZWZyZXNoXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTsgfTtcclxuZnVuY3Rpb24gRGVueVNlbGVjdGlvbihpdGVtSWQsIG9sZENvbnRhaW5lciwgc2xvdE5hbWUpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGlmIChzbG90TmFtZSA9PT0gdm9pZCAwKSB7IHNsb3ROYW1lID0gJ0l0cyBzbG90JzsgfVxyXG4gICAgKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUl0ZW0oR2FtZS5nZXRGb3JtRXgoaXRlbUlkKSwgMSwgdHJ1ZSwgb2xkQ29udGFpbmVyKTtcclxuICAgIFVpLmludm9rZUJvb2woXCJIVUQgTWVudVwiLCBcIl9nbG9iYWwuc2t5dWkuY29tcG9uZW50cy5saXN0Lkxpc3RMYXlvdXQuUmVmcmVzaFwiLCB0cnVlKTtcclxuICAgIERlYnVnLm5vdGlmaWNhdGlvbihcIllvdSBjYW4gbm90IHBpY2sgdGhpcyBpdGVtIHVwLiBcIi5jb25jYXQoc2xvdE5hbWUsIFwiIGlzIGZ1bGxcIikpO1xyXG59XHJcbnZhciB3YWl0RmFkZU91dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIFV0aWxpdHkud2FpdCgxLjUpXTtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRmFkZWluKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgU2xvdC5mYWRlQWxsT3V0KCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlDdXJyZW50SGlnaGxpZ2h0ZWQuc2V0QWxwaGEoMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyB9O1xyXG5mdW5jdGlvbiBpc1ZpZXdpbmdDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gVWkuZ2V0SW50KFwiQ29udGFpbmVyTWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuY2F0ZWdvcnlMaXN0LmFjdGl2ZVNlZ21lbnRcIikgPyBmYWxzZSA6IHRydWU7XHJcbn1cclxuLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19FVkVOVFNfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXHJcbnZhciBldmVudEJsYWNrbGlzdCA9IFsnWU1fT25TZWxlY3Rfc2VsZWN0UHJlc3MnLCAnWU1fT25IaWdobGlnaHRfc2VsZWN0SGlnaGxpZ2h0J107XHJcbm9uKCdtb2RFdmVudCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgaWYgKCFldmVudEJsYWNrbGlzdC5pbmNsdWRlcyhldmVudC5ldmVudE5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKGV2ZW50LmV2ZW50TmFtZSA9PSAnWU1fT25TZWxlY3Rfc2VsZWN0UHJlc3MnICYmICFVaS5pc01lbnVPcGVuKCdJbnZlbnRvcnlNZW51JykpIHtcdEdldEl0ZW1TZWxlY3RlZCgpfVxyXG4gICAgLy8gaWYgKGV2ZW50LmV2ZW50TmFtZS5pbmNsdWRlcyggJ3NlbGVjdEhpZ2hsaWdodCcgKSkgeyBHZXRJdGVtSGlnaGxpZ2h0ZWQoKX1cclxuICAgIC8vIHByaW50Q29uc29sZShHYW1lLmdldEZvcm1FeCggVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIikgKT8uZ2V0TmFtZSgpKVxyXG4gICAgLy8gVWkuaW52b2tlQm9vbChcIkhVRCBNZW51XCIsIFwiX2dsb2JhbC5vbkl0ZW1IaWdobGlnaHRDaGFuZ2VcIiwgdHJ1ZSlcclxuICAgIC8vIGxldCBwYXRoOiBzdHJpbmcgPSAnX2dsb2JhbC4nXHJcbiAgICAvLyBsZXQgZW5kUGF0aDogc3RyaW5nID0gJ2NvbnRhaW5lck1lbnUuaXNWaWV3aW5nQ29udGFpbmVyJ1xyXG4gICAgLy8gcHJpbnRDb25zb2xlKFVpLmdldEludCgnQ29udGFpbmVyTWVudScsIGAke3BhdGggKyBlbmRQYXRofWApIClcclxuICAgIC8vIHByaW50Q29uc29sZShVaS5nZXRJbnQoJ0NvbnRhaW5lck1lbnUnLCBgJHtwYXRofUJhc2VJbnN0YW5jZS4ke2VuZFBhdGh9YCkgKVxyXG4gICAgLy8gcHJpbnRDb25zb2xlKFVpLmdldEludCgnQ29udGFpbmVyTWVudScsIGBfcm9vdC5IVURNb3ZpZUJhc2VJbnN0YW5jZS5pc1ZpZXdpbmdDb250YWluZXJgKSApXHJcbiAgICAvLyBwcmludENvbnNvbGUoVWkuaW52b2tlQm9vbCgnSFVEIE1lbnUnLCBgX2dsb2JhbC5za3l1aS5jb21wb25lbnRzLmxpc3QuTGlzdExheW91dC5SZWZyZXNoYCwgdHJ1ZSkgKVxyXG4gICAgLy8gVWkuaW52b2tlQm9vbChcIkNvbnRhaW5lck1lbnVcIiwgXCJfZ2xvYmFsLkl0ZW1NZW51cy5JbnZlbnRvcnlMaXN0cy5zaG93UGFuZWxcIiwgdHJ1ZSlcclxuICAgIC8vIFVpLmludm9rZUZsb2F0KFwiSFVEIE1lbnVcIiwgXCJfcm9vdC5IVURNb3ZpZUJhc2VJbnN0YW5jZS5TZXRFeGhhdXN0aW9uUGVuYWx0eU1ldGVyXCIsIClcclxufSk7XHJcbnZhciBoYW5kbGU7XHJcbm9uKCdtZW51T3BlbicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIGxhc3RpdGVtTmFtZSA9IC0yO1xyXG4gICAgaWYgKGV2ZW50Lm5hbWUgPT0gJ0ludmVudG9yeU1lbnUnKSB7XHJcbiAgICAgICAgaW52ZW50b3J5Q3VycmVudEhpZ2hsaWdodGVkLnNldEFscGhhKDEpO1xyXG4gICAgICAgIFNsb3QudXBkYXRlV2lkZ2V0cygpO1xyXG4gICAgICAgIC8vIG9uKCdtb3VzZU1vdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHByaW50Q29uc29sZShHYW1lLmdldEZvcm1FeCggVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIikgKT8uZ2V0TmFtZSgpKVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGhhbmRsZSA9IG9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBVaS5nZXRJbnQoXCJJbnZlbnRvcnlNZW51XCIsIFwiX3Jvb3QuTWVudV9tYy5pbnZlbnRvcnlMaXN0cy5pdGVtTGlzdC5zZWxlY3RlZEVudHJ5LmZvcm1JZFwiKTtcclxuICAgICAgICAgICAgaWYgKCFpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0gIT0gbGFzdGl0ZW1OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBwcmludENvbnNvbGUoKF9hID0gR2FtZS5nZXRGb3JtRXgoVWkuZ2V0SW50KFwiSW52ZW50b3J5TWVudVwiLCBcIl9yb290Lk1lbnVfbWMuaW52ZW50b3J5TGlzdHMuaXRlbUxpc3Quc2VsZWN0ZWRFbnRyeS5mb3JtSWRcIikpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIEdldEl0ZW1IaWdobGlnaHRlZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGxhc3RpdGVtTmFtZSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2ZW50Lm5hbWUgPT0gJ0NvbnRhaW5lck1lbnUnKSB7XHJcbiAgICAgICAgLy8gcHJpbnRDb25zb2xlKEdhbWUuZ2V0Rm9ybUV4KFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpKT8uZ2V0TmFtZSgpKVxyXG4gICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgxKTtcclxuICAgICAgICBTbG90LnVwZGF0ZVdpZGdldHMoKTtcclxuICAgICAgICBoYW5kbGUgPSBvbigndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpO1xyXG4gICAgICAgICAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbSAhPSBsYXN0aXRlbU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHByaW50Q29uc29sZShpc1ZpZXdpbmdDb250YWluZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoR2FtZS5nZXRGb3JtRXgoIFVpLmdldEludChcIkNvbnRhaW5lck1lbnVcIiwgXCJfcm9vdC5NZW51X21jLmludmVudG9yeUxpc3RzLml0ZW1MaXN0LnNlbGVjdGVkRW50cnkuZm9ybUlkXCIpICk/LmdldE5hbWUoKSlcclxuICAgICAgICAgICAgICAgIEdldEl0ZW1IaWdobGlnaHRlZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIGxhc3RpdGVtTmFtZSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSk7XHJcbm9uKCdtZW51Q2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5uYW1lID09ICdJbnZlbnRvcnlNZW51JyB8fCBldmVudC5uYW1lID09ICdDb250YWluZXJNZW51Jykge1xyXG4gICAgICAgIGludmVudG9yeUN1cnJlbnRIaWdobGlnaHRlZC5zZXRBbHBoYSgwKTtcclxuICAgICAgICBTbG90LmZhZGVBbGxPdXQoKTtcclxuICAgICAgICB1bnN1YnNjcmliZShoYW5kbGUpO1xyXG4gICAgfVxyXG59KTtcclxub25jZSgndXBkYXRlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGFsbEl0ZW1zID0gQWRkQWxsSXRlbXNUb0FycmF5KHBsKCksIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICBhbGxJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGFkZEl0ZW10b1Nsb3QoZi5nZXRGb3JtSUQoKSwgKF9hID0gcGwoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEl0ZW1Db3VudChmKSk7XHJcbiAgICB9KTtcclxufSk7XHJcbnZhciBpZ25vcmVGbGFnID0gZmFsc2U7XHJcbm9uKCdjb250YWluZXJDaGFuZ2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgYWN0aW9uID0gJ1BpY2tlZCBVcCc7XHJcbiAgICB2YXIgbmV3SWQgPSAtMTtcclxuICAgIHZhciBvbGRJZCA9IC0xO1xyXG4gICAgdmFyIGl0ZW1JZCA9IGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCk7XHJcbiAgICB2YXIgbnVtID0gZXZlbnQubnVtSXRlbXM7XHJcbiAgICB2YXIgaW5mbyA9IHNvbHZlSW5jb21pbmdJdGVtSW5mbyhldmVudC5iYXNlT2JqLmdldEZvcm1JRCgpKTtcclxuICAgIHZhciB2b2x1bWUgPSBpbmZvWzBdO1xyXG4gICAgdmFyIHNsb3QgPSBpbmZvWzFdO1xyXG4gICAgaWYgKGV2ZW50Lm9sZENvbnRhaW5lcikge1xyXG4gICAgICAgIG9sZElkID0gZXZlbnQub2xkQ29udGFpbmVyLmdldEZvcm1JRCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50Lm5ld0NvbnRhaW5lcikge1xyXG4gICAgICAgIG5ld0lkID0gZXZlbnQubmV3Q29udGFpbmVyLmdldEZvcm1JRCgpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKGlnbm9yZUZsYWcpe2lnbm9yZUZsYWcgPSBmYWxzZTsgcmV0dXJuO31cclxuICAgIC8vIEl0ZW0gYWRkZWQgdG8gcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBpZiAobmV3SWQgPT0gMjAgJiYgIWlnbm9yZUZsYWcpIHtcclxuICAgICAgICAvLyB0aGUgc2xvdCBpcyBmaWxsZWRcclxuICAgICAgICBpZiAoc2xvdC5jdXJyZW50U2l6ZSArIHZvbHVtZSA+IHNsb3QuYmFzZVNpemUpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gd2FzIHBpY2tlZCB1cCBmcm9tIHRoZSB3b3JsZFxyXG4gICAgICAgICAgICBpZiAoIWV2ZW50Lm9sZENvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgRHJvcEl0ZW0oaXRlbUlkLCBudW0sIGV2ZW50Lm9sZENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAvLyBwcmludENvbnNvbGUoJyFldmVudC5vbGRDb250YWluZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIHdhcyB0YWtlbiBmcm9tIGEgY29udGFpbmVyXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgRGVueVNlbGVjdGlvbihpdGVtSWQsIGV2ZW50Lm9sZENvbnRhaW5lciwgc2xvdC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8vIHByaW50Q29uc29sZSgnZXZlbnQub2xkQ29udGFpbmVyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZ25vcmVGbGFnID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZEl0ZW10b1Nsb3QoaXRlbUlkLCBudW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIEl0ZW0gcmVtb3ZlZCBmcm9tIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZWxzZSBpZiAob2xkSWQgPT0gMjAgJiYgIWlnbm9yZUZsYWcpIHtcclxuICAgICAgICByZW1vdmVJdGVtZnJvbVNsb3QoaXRlbUlkLCBudW0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWdub3JlRmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNsb3QuY3VycmVudFNpemUgPD0gMCkge1xyXG4gICAgICAgIHNsb3QuY3VycmVudFNpemUgPSAwO1xyXG4gICAgfVxyXG59KTtcclxudmFyIGlzRmFkZWluID0gZmFsc2U7XHJcbm9uKCdjcm9zc2hhaXJSZWZDaGFuZ2VkJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcclxuICAgIHZhciBpZCA9IChfYiA9IChfYSA9IGV2ZW50LnJlZmVyZW5jZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1JRCgpO1xyXG4gICAgdmFyIHR5cGVCbGFja2xpc3QgPSBbNjIgLyogQ2hhcmFjdGVyICovLCAyNCAvKiBBY3RpdmF0b3IgKi8sIDI5IC8qIERvb3IgKi8sIDMzIC8qIEFwcGFyYXR1cyAqLywgMjggLyogQ29udGFpbmVyICovLCA0MyAvKiBOUEMgKi9dO1xyXG4gICAgaWYgKCgoX2QgPSAoX2MgPSBldmVudC5yZWZlcmVuY2UpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5pc1BsYXlhYmxlKCkpICYmICF0eXBlQmxhY2tsaXN0LmluY2x1ZGVzKChfZiA9IChfZSA9IGV2ZW50LnJlZmVyZW5jZSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmdldFR5cGUoKSkpIHtcclxuICAgICAgICBpc0ZhZGVpbiA9IHRydWU7XHJcbiAgICAgICAgU2xvdC5mYWRlQWxsSW4oKTtcclxuICAgICAgICBzbG90TG9va2F0SXRlbShpZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpc0ZhZGVpbiA9IGZhbHNlO1xyXG4gICAgICAgIHdhaXRGYWRlT3V0KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5vbignZXF1aXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgaWYgKCgoX2EgPSBldmVudC5hY3Rvci5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtSUQoKSkgIT0gKChfYyA9IChfYiA9IHBsKCkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRCYXNlT2JqZWN0KCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtSUQoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBwcmludENvbnNvbGUoZXZlbnQuYmFzZU9iai5nZXROYW1lKCkpXHJcbiAgICBpZiAoVWkuaXNNZW51T3BlbignTWFnaWNNZW51JykpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgaXRlbSA9IGV2ZW50LmJhc2VPYmouZ2V0Rm9ybUlEKCk7XHJcbiAgICAvLyBwcmludENvbnNvbGUoYGVxdWlwOjogaXNFcXVpcHBlZDo6ICR7cGwoKT8uaXNFcXVpcHBlZChldmVudC5iYXNlT2JqKX1gKVxyXG4gICAgdmFyIG9sZENhdCA9IGRldGVybWluZUl0ZW1DYXRlZ29yeShpdGVtKTtcclxuICAgIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtLCAxKTtcclxuICAgIGFkZEl0ZW10b1Nsb3QoaXRlbSwgMSk7XHJcbn0pO1xyXG5vbigndW5lcXVpcCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2M7XHJcbiAgICBpZiAoKChfYSA9IGV2ZW50LmFjdG9yLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1JRCgpKSAhPSAoKF9jID0gKF9iID0gcGwoKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEJhc2VPYmplY3QoKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmdldEZvcm1JRCgpKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHByaW50Q29uc29sZShldmVudC5iYXNlT2JqLmdldE5hbWUoKSlcclxuICAgIGlmIChVaS5pc01lbnVPcGVuKCdNYWdpY01lbnUnKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtID0gZXZlbnQuYmFzZU9iai5nZXRGb3JtSUQoKTtcclxuICAgIC8vIHByaW50Q29uc29sZShgdW5lcXVpcDo6IGlzRXF1aXBwZWQ6OiAke3BsKCk/LmlzRXF1aXBwZWQoZXZlbnQuYmFzZU9iail9YClcclxuICAgIHJlbW92ZUl0ZW1mcm9tU2xvdChpdGVtLCAxKTtcclxuICAgIGFkZEl0ZW10b1Nsb3QoaXRlbSwgMSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=