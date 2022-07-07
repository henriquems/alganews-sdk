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
var utils_1 = require("../utils");
var PayrollService = /** @class */ (function (_super) {
    __extends(PayrollService, _super);
    function PayrollService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayrollService.getAllPayments = function (query) {
        var queryString = utils_1.generateQueryString(query);
        var uri = '/payments'.concat(queryString);
        return this.Http.get(uri).then(this.getData);
    };
    PayrollService.getExistingPayment = function (paymentId) {
        return this.Http.get("/payments/" + paymentId).then(this.getData);
    };
    PayrollService.insertNewPayment = function (payment) {
        return this.Http.post('/payments', payment).then(this.getData);
    };
    PayrollService.getPaymentPreview = function (paymentInfo) {
        return this.Http.post('/payments/previews', paymentInfo).then(this.getData);
    };
    PayrollService.approvePayment = function (paymentId) {
        return this.Http.put("/payments/" + paymentId + "/approval").then(this.getData);
    };
    PayrollService.getExistingPaymentPosts = function (paymentId) {
        return this.Http.get("/payments/" + paymentId + "/posts").then(this.getData);
    };
    PayrollService.removeExistingPayment = function (paymentId) {
        return this.Http.delete("/payments/" + paymentId).then(this.getData);
    };
    PayrollService.approvePaymentsBatch = function (paymentIds) {
        return this.Http.put("/payments/bulk-approvals", paymentIds).then(this.getData);
    };
    return PayrollService;
}(Service_1.default));
exports.default = PayrollService;
