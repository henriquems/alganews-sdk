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
var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    function PostService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PostService.getAllPosts = function (search) {
        var queryString = generateQueryString_1.default(search);
        return this.Http.get('/posts'.concat(queryString)).then(this.getData);
    };
    PostService.getExistingPost = function (id) {
        return this.Http.get("/posts/" + id).then(this.getData);
    };
    PostService.insertNewPost = function (post) {
        return this.Http.post('/posts', post).then(this.getData);
    };
    PostService.publishExistingPost = function (postId) {
        return this.Http.put("/posts/" + postId + "/publishing").then(this.getData);
    };
    PostService.updateExistingPost = function (postId, post) {
        return this.Http.put("/posts/" + postId, post).then(this.getData);
    };
    PostService.deleteExistingPost = function (postId) {
        return this.Http.delete("/posts/" + postId).then(this.getData);
    };
    PostService.deactivateExistingPost = function (postId) {
        return this.Http.delete("/posts/" + postId + "/activation").then(this.getData);
    };
    return PostService;
}(Service_1.default));
exports.default = PostService;
