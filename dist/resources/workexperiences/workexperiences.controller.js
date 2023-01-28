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
exports.WorkexperiencesController = void 0;
const common_1 = require("@nestjs/common");
const workexperiences_service_1 = require("./workexperiences.service");
const create_workexperience_dto_1 = require("./dto/create-workexperience.dto");
const update_workexperience_dto_1 = require("./dto/update-workexperience.dto");
const public_decorator_1 = require("../../auth/public.decorator");
const jwt_guard_1 = require("../../auth/guards/jwt.guard");
const platform_express_1 = require("@nestjs/platform-express");
let WorkexperiencesController = class WorkexperiencesController {
    constructor(workexperiencesService) {
        this.workexperiencesService = workexperiencesService;
    }
    create(createWorkexperienceDto) {
        return this.workexperiencesService.create(createWorkexperienceDto);
    }
    findAll(params) {
        return this.workexperiencesService.findAll(params.lang);
    }
    findOne(id) {
        return this.workexperiencesService.findOne(id);
    }
    update(id, updateWorkexperienceDto) {
        return this.workexperiencesService.update(id, updateWorkexperienceDto);
    }
    remove(id) {
        return this.workexperiencesService.remove(id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_workexperience_dto_1.CreateWorkexperienceDto]),
    __metadata("design:returntype", void 0)
], WorkexperiencesController.prototype, "create", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WorkexperiencesController.prototype, "findAll", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkexperiencesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('image')),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_workexperience_dto_1.UpdateWorkexperienceDto]),
    __metadata("design:returntype", void 0)
], WorkexperiencesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WorkexperiencesController.prototype, "remove", null);
WorkexperiencesController = __decorate([
    (0, common_1.Controller)('workexperiences'),
    __metadata("design:paramtypes", [workexperiences_service_1.WorkexperiencesService])
], WorkexperiencesController);
exports.WorkexperiencesController = WorkexperiencesController;
//# sourceMappingURL=workexperiences.controller.js.map