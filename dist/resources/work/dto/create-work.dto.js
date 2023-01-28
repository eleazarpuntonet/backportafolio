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
exports.CreateWorkDto = void 0;
const class_validator_1 = require("class-validator");
class CreateWorkDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'El titulo debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'titulo es un campo requerido' }),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'La descripcion debe ser un texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'description es un campo requerido' }),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ message: 'El code_link debe ser una Url valida' }),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "code_link", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateWorkDto.prototype, "lang", void 0);
exports.CreateWorkDto = CreateWorkDto;
//# sourceMappingURL=create-work.dto.js.map