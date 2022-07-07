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
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserService.getAllEditors = function () {
        return this.Http.get('/users/editors').then(this.getData);
    };
    UserService.getExistingEditor = function (editorId) {
        return this.Http.get("/users/editors/" + editorId).then(this.getData);
    };
    UserService.getDetailedUser = function (userId) {
        return this.Http.get("/users/" + userId).then(this.getData);
    };
    UserService.getAllUsers = function () {
        return this.Http.get('/users').then(this.getData);
    };
    UserService.updateExistingUser = function (userId, userData) {
        return this.Http.put("/users/" + userId, userData).then(this.getData);
    };
    UserService.insertNewUser = function (userData) {
        return this.Http.post('/users', userData).then(this.getData);
    };
    UserService.activateExistingUser = function (userId) {
        return this.Http.put("/users/" + userId + "/activation").then(this.getData);
    };
    UserService.deactivateExistingUser = function (userId) {
        return this.Http.delete("/users/" + userId + "/activation").then(this.getData);
    };
    return UserService;
}(Service_1.default));
exports.default = UserService;
