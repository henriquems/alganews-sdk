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
var MetricService = /** @class */ (function (_super) {
    __extends(MetricService, _super);
    function MetricService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MetricService.getTop3Tags = function () {
        return this.Http
            .get('/metrics/editor/top3-tags')
            .then(this.getData);
    };
    MetricService.getEditorMonthlyEarnings = function () {
        return this.Http
            .get('/metrics/editor/monthly-earnings')
            .then(this.getData);
    };
    MetricService.getMonthlyRevenuesExpenses = function () {
        return this.Http
            .get('/metrics/monthly-revenues-expenses', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(this.getData);
    };
    MetricService.getMonthlyRevenuesExpensesChartJs = function () {
        return this.Http
            .get('/metrics/monthly-revenues-expenses', {
            headers: {
                'Content-Type': 'application/vnd.alganews.chartjs+json'
            }
        }).then(this.getData);
    };
    return MetricService;
}(Service_1.default));
exports.default = MetricService;
