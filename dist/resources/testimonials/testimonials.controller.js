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
exports.TestimonialsController = void 0;
const common_1 = require("@nestjs/common");
const testimonials_service_1 = require("./testimonials.service");
const create_testimonial_dto_1 = require("./dto/create-testimonial.dto");
const update_testimonial_dto_1 = require("./dto/update-testimonial.dto");
const public_decorator_1 = require("../../auth/public.decorator");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const app_service_1 = require("../../app.service");
let TestimonialsController = class TestimonialsController {
    constructor(testimonialsService, config, appService) {
        this.testimonialsService = testimonialsService;
        this.config = config;
        this.appService = appService;
        this.SERVER_URL = "http://localhost:3000/";
        this.SERVER_URL = this.config.get('SERVER_URL');
    }
    async create(createTestimonialDto, request) {
        const file = request.file;
        if (file) {
            createTestimonialDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            createTestimonialDto.image = `${this.SERVER_URL}404.jpg`;
        }
        return this.testimonialsService.create(createTestimonialDto);
    }
    findAll() {
        return this.testimonialsService.findAll();
    }
    findOne(id) {
        return this.testimonialsService.findOne(id);
    }
    async update(id, updateTestimonialDto, image, request) {
        const file = request.file;
        if (file) {
            updateTestimonialDto.image = await this.appService.uploadPublicFile(file.buffer, file.originalname);
        }
        else {
            updateTestimonialDto.image = updateTestimonialDto.image;
        }
        return this.testimonialsService.update(id, updateTestimonialDto);
    }
    remove(id) {
        return this.testimonialsService.remove(id);
    }
};
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testimonial_dto_1.CreateTestimonialDto, Object]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __param(3, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_testimonial_dto_1.UpdateTestimonialDto, Object, Object]),
    __metadata("design:returntype", Promise)
], TestimonialsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimonialsController.prototype, "remove", null);
TestimonialsController = __decorate([
    (0, common_1.Controller)('testimonials'),
    __metadata("design:paramtypes", [testimonials_service_1.TestimonialsService,
        config_1.ConfigService,
        app_service_1.AppService])
], TestimonialsController);
exports.TestimonialsController = TestimonialsController;
//# sourceMappingURL=testimonials.controller.js.map