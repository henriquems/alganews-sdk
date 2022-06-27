"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var locale_1 = require("date-fns/locale");
function getEditorDescription(editorCreationDate) {
    var distance = date_fns_1.formatDistance(editorCreationDate, new Date(), { locale: locale_1.ptBR });
    return "Editor h\u00E1 " + distance;
}
exports.default = getEditorDescription;
