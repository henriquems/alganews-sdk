"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Service_1 = __importDefault(require("../Service"));
var generateQueryString_1 = __importDefault(require("../utils/generateQueryString"));
var CashFlowService = /** @class */ (function (_super) {
    __extends(CashFlowService, _super);
    function CashFlowService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CashFlowService.getAllEntries = function (query) {
        var queryString = generateQueryString_1.default(query);
        var uri = '/cashflow/entries'.concat(queryString);
        return this.Http.get(uri).then(this.getData);
    };
    CashFlowService.getExistingEntry = function (entryId) {
        return this.Http.get("/cashflow/entries/" + entryId).then(this.getData);
    };
    CashFlowService.updateExistingEntry = function (entryId, entryData) {
        return this.Http.put("/cashflow/entries/" + entryId, entryData).then(this.getData);
    };
    CashFlowService.removeExistingEntry = function (entryId) {
        return this.Http.delete("/cashflow/entries/" + entryId).then(this.getData);
    };
    CashFlowService.insertNewEntry = function (entryData) {
        return this.Http.post('/cashflow/entries/', entryData).then(this.getData);
    };
    CashFlowService.removeEntriesBatch = function (entriesIds) {
        return this.Http.put('/cashflow/entries/bulk-removals', entriesIds).then(this.getData);
    };
    CashFlowService.getAllCategories = function (query) {
        var queryString = generateQueryString_1.default(query);
        var uri = '/cashflow/categories'.concat(queryString);
        return this.Http.get(uri).then(this.getData);
    };
    CashFlowService.insertNewCategory = function (categoryData) {
        return this.Http.post('/cashflow/categories', categoryData).then(this.getData);
    };
    CashFlowService.getExistingCategory = function (categoryId) {
        return this.Http.get("/cashflow/categories/" + categoryId).then(this.getData);
    };
    CashFlowService.updateExistingCategory = function (categoryId, categoryData) {
        return this.Http.put("/cashflow/categories/" + categoryId, categoryData).then(this.getData);
    };
    CashFlowService.removeExistingCategory = function (categoryId) {
        return this.Http.delete("/cashflow/categories/" + categoryId).then(this.getData);
    };
    return CashFlowService;
}(Service_1.default));
exports.default = CashFlowService;
