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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
const localauth_guard_1 = require("./auth/guards/localauth.guard");
const auth_service_1 = require("./auth/auth/auth.service");
const public_decorator_1 = require("./auth/public.decorator");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("mongoose");
let AppController = class AppController {
    constructor(appService, authService, config, connection) {
        this.appService = appService;
        this.authService = authService;
        this.config = config;
        this.connection = connection;
    }
    async login(req) {
        const user = req.user;
        return this.authService.generateJWT(user);
    }
    async create(bodyTested, image, request) {
        try {
            const file = request.file;
            const url = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        catch (_a) {
            console.log('Algo fallo');
        }
        return 'retorno';
    }
    resumePdf(res) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), '/src/public/files/ES_ELEAZAR_ORTEGA.pdf'));
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="ELEAZAR_ORTEGA.pdf"',
        });
        return new common_1.StreamableFile(file);
    }
    resumePdfEN(res) {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), '/src/public/files/EN_ELEAZAR_ORTEGA.pdf'));
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="ELEAZAR_ORTEGA.pdf"',
        });
        return new common_1.StreamableFile(file);
    }
    redirect(res) {
        return res.redirect('/api');
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(localauth_guard_1.LocalAuthGuard),
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('/test'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/resume-pdf-es'),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], AppController.prototype, "resumePdf", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/resume-pdf-en'),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], AppController.prototype, "resumePdfEN", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "redirect", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __param(3, (0, common_1.Inject)('DATABASE_CONNECTION')),
    __metadata("design:paramtypes", [app_service_1.AppService,
        auth_service_1.AuthService,
        config_1.ConfigService,
        mongoose_1.Connection])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map