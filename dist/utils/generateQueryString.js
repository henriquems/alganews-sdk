"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateQueryString(params) {
    var convertedParams = {};
    Object
        .keys(params)
        .forEach(function (key) {
        var param = params[key];
        if (param)
            convertedParams[key] = String(param);
    });
    var urlParams = new URLSearchParams(convertedParams);
    return "?" + urlParams.toString();
}
exports.default = generateQueryString;
