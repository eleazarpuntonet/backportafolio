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
exports.AboutsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const public_decorator_1 = require("../../auth/public.decorator");
const abouts_service_1 = require("./abouts.service");
const create_about_dto_1 = require("./dto/create-about.dto");
const update_about_dto_1 = require("./dto/update-about.dto");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const app_service_1 = require("../../app.service");
let AboutsController = class AboutsController {
    constructor(aboutsService, config, appService) {
        this.aboutsService = aboutsService;
        this.config = config;
        this.appService = appService;
        this.SERVER_URL = "http://localhost:3000/";
        this.SERVER_URL = this.config.get('SERVER_URL');
    }
    async create(createAboutDto, request) {
        const file = request.file;
        if (file) {
            createAboutDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            createAboutDto.image = `${this.SERVER_URL}404.jpg`;
        }
        return this.aboutsService.create(createAboutDto);
    }
    findAll(params) {
        return this.aboutsService.findAll(params.lang);
    }
    findOne(id) {
        return this.aboutsService.findOne(id);
    }
    async update(id, updateAboutDto, request) {
        const file = request.file;
        if (file) {
            updateAboutDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            updateAboutDto.image = updateAboutDto.image;
        }
        return this.aboutsService.update(id, updateAboutDto);
    }
    remove(id) {
        return this.aboutsService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_about_dto_1.CreateAboutDto, Object]),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AboutsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_about_dto_1.UpdateAboutDto, Object]),
    __metadata("design:returntype", Promise)
], AboutsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AboutsController.prototype, "remove", null);
AboutsController = __decorate([
    (0, common_1.Controller)('abouts'),
    __metadata("design:paramtypes", [abouts_service_1.AboutsService,
        config_1.ConfigService,
        app_service_1.AppService])
], AboutsController);
exports.AboutsController = AboutsController;
//# sourceMappingURL=abouts.controller.js.map