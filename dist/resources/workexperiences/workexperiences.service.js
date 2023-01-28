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
exports.WorkexperiencesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let WorkexperiencesService = class WorkexperiencesService {
    constructor(worksModel) {
        this.worksModel = worksModel;
    }
    async create(createWorkexperienceDto) {
        const newWork = new this.worksModel(createWorkexperienceDto);
        return await newWork.save();
    }
    async findAll(lang) {
        return await this.worksModel.find(lang ? { lang } : null).exec();
    }
    async findOne(id) {
        const work = this.worksModel.findById(id);
        if (!work) {
            throw new common_1.NotFoundException(`El work ${id} no puede ser encontrado`);
        }
        return work;
    }
    async update(id, updateWorkDto) {
        const work = await this.worksModel.findByIdAndUpdate(id, updateWorkDto, { new: true });
        if (!work) {
            throw new common_1.NotFoundException(`El work ${id} no puede ser encontrado`);
        }
        return work;
    }
    async remove(id) {
        return await this.worksModel.findByIdAndDelete(id);
    }
};
WorkexperiencesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('WORKEXPERIENCE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], WorkexperiencesService);
exports.WorkexperiencesService = WorkexperiencesService;
//# sourceMappingURL=workexperiences.service.js.map