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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let SkillsService = class SkillsService {
    constructor(skillModel) {
        this.skillModel = skillModel;
    }
    async create(createSkillDto) {
        const newAbout = new this.skillModel(createSkillDto);
        return await newAbout.save();
    }
    async findAll(lang) {
        return this.skillModel.find(lang ? { lang } : null).exec();
    }
    async findOne(id) {
        const about = await this.skillModel.findById(id);
        if (!about) {
            throw new common_1.NotFoundException(`El about ${id} no puede ser encontrado`);
        }
        return about;
    }
    async update(id, updateSkillDto) {
        const about = await this.skillModel.findByIdAndUpdate(id, updateSkillDto, { new: true });
        if (!about) {
            throw new common_1.NotFoundException(`El about ${id} no puede ser encontrado`);
        }
        return about;
    }
    async remove(id) {
        return await this.skillModel.findByIdAndDelete(id);
    }
};
SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SKILLS_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SkillsService);
exports.SkillsService = SkillsService;
//# sourceMappingURL=skills.service.js.map