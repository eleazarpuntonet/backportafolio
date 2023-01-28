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
exports.TestimonialsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let TestimonialsService = class TestimonialsService {
    constructor(testimonialModel) {
        this.testimonialModel = testimonialModel;
    }
    async create(createTestimonialDto) {
        const newAbout = new this.testimonialModel(createTestimonialDto);
        return await newAbout.save();
    }
    async findAll() {
        return this.testimonialModel.find().exec();
    }
    async findOne(id) {
        const about = await this.testimonialModel.findById(id);
        if (!about) {
            throw new common_1.NotFoundException(`El about ${id} no puede ser encontrado`);
        }
        return about;
    }
    async update(id, updateTestimonialDto) {
        const about = await this.testimonialModel.findByIdAndUpdate(id, updateTestimonialDto, { new: true });
        if (!about) {
            throw new common_1.NotFoundException(`El about ${id} no puede ser encontrado`);
        }
        return about;
    }
    async remove(id) {
        return await this.testimonialModel.findByIdAndDelete(id);
    }
};
TestimonialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TESTIMONIAL_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TestimonialsService);
exports.TestimonialsService = TestimonialsService;
//# sourceMappingURL=testimonials.service.js.map