"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maths = void 0;
class Maths {
    static clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }
    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
exports.Maths = Maths;
