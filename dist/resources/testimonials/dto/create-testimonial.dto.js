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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTestimonialDto = void 0;
const class_validator_1 = require("class-validator");
class CreateTestimonialDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'nombre es un campo requerido' }),
    __metadata("design:type", String)
], CreateTestimonialDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El company debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'company es un campo requerido' }),
    __metadata("design:type", String)
], CreateTestimonialDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El feedback debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'feedback es un campo requerido' }),
    __metadata("design:type", String)
], CreateTestimonialDto.prototype, "feedback", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ message: 'El campo debe ser una url valida' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateTestimonialDto.prototype, "linkedin", void 0);
exports.CreateTestimonialDto = CreateTestimonialDto;
//# sourceMappingURL=create-testimonial.dto.js.map