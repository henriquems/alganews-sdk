"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Http = axios_1.default.create();
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.Http = Http;
    Service.getData = getData;
    return Service;
}());
function getData(res) {
    return res.data;
}
Http.defaults.baseURL = 'http://localhost:8080';
exports.default = Service;
