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
exports.ElearningController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../../auth/public.decorator");
const elearning_service_1 = require("./elearning.service");
const create_elearning_dto_1 = require("./dto/create-elearning.dto");
const update_elearning_dto_1 = require("./dto/update-elearning.dto");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const app_service_1 = require("../../app.service");
let ElearningController = class ElearningController {
    constructor(elearningService, config, appService) {
        this.elearningService = elearningService;
        this.config = config;
        this.appService = appService;
        this.SERVER_URL = "http://localhost:3000/";
        this.SERVER_URL = this.config.get('SERVER_URL');
    }
    async create(createElearningDto, request) {
        const file = request.file;
        if (file) {
            createElearningDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            createElearningDto.image = `${this.SERVER_URL}404.jpg`;
        }
        return this.elearningService.create(createElearningDto);
    }
    findAll(params) {
        return this.elearningService.findAll(params.lang);
    }
    findOne(id) {
        return this.elearningService.findOne(id);
    }
    async update(id, updateElearningDto, request) {
        const file = request.file;
        if (file) {
            updateElearningDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            updateElearningDto.image = updateElearningDto.image;
        }
        return this.elearningService.update(id, updateElearningDto);
    }
    remove(id) {
        return this.elearningService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_elearning_dto_1.CreateElearningDto, Object]),
    __metadata("design:returntype", Promise)
], ElearningController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ElearningController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElearningController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_elearning_dto_1.UpdateElearningDto, Object]),
    __metadata("design:returntype", Promise)
], ElearningController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ElearningController.prototype, "remove", null);
ElearningController = __decorate([
    (0, common_1.Controller)('elearning'),
    __metadata("design:paramtypes", [elearning_service_1.ElearningService,
        config_1.ConfigService,
        app_service_1.AppService])
], ElearningController);
exports.ElearningController = ElearningController;
//# sourceMappingURL=elearning.controller.js.map