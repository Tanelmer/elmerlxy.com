"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let BlogService = class BlogService {
    constructor(postModel) {
        this.postModel = postModel;
    }
    async getPosts() {
        const posts = await this.postModel.find().exec();
        return posts;
    }
    async getPost(postID) {
        const post = await this.postModel.findById(postID).exec();
        return post;
    }
    async addPost(createPostDTO) {
        const newPost = await new this.postModel(createPostDTO);
        return newPost.save();
    }
    async editPost(postID, createPostDTO) {
        const editedPost = await this.postModel.findByIdAndUpdate(postID, createPostDTO, { new: true });
        return editedPost;
    }
    async deletePost(postID) {
        const deletedPost = await this.postModel.findByIdAndRemove(postID);
        return deletedPost;
    }
};
BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Post')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], BlogService);
exports.BlogService = BlogService;
//# sourceMappingURL=blog.service.js.map