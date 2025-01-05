"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = throttle;
function throttle(f, delay) {
    var timer = 0;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = window.setTimeout(function () { return f.apply(_this, args); }, delay);
    };
}
