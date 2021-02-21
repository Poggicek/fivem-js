"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.String = void 0;
const __1 = require("..");
const Maths_1 = require("./Maths");
class String {
    static stringToArray(input) {
        let stringsNeeded = 1;
        if (input.length > 99) {
            stringsNeeded = Math.ceil(input.length / 99);
        }
        const outputString = new Array(stringsNeeded);
        for (let i = 0; i < stringsNeeded; i++) {
            outputString[i] = input.substring(i * 99, i * 99 + Maths_1.Maths.clamp(input.substring(i * 99).length, 0, 99));
        }
        return outputString;
    }
    static measureStringWidthNoConvert(input, font = __1.Font.ChaletLondon, scale = 0) {
        SetTextEntryForWidth('STRING');
        __1.Text.addLongString(input);
        SetTextFont(font);
        SetTextScale(1, scale);
        return GetTextScreenWidth(false);
    }
    static measureString(str, font, scale, screenWidth = __1.Screen.ScaledWidth) {
        return this.measureStringWidthNoConvert(str, font, scale) * screenWidth;
    }
}
exports.String = String;
