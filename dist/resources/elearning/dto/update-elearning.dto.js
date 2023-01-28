"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateElearningDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_elearning_dto_1 = require("./create-elearning.dto");
class UpdateElearningDto extends (0, mapped_types_1.PartialType)(create_elearning_dto_1.CreateElearningDto) {
}
exports.UpdateElearningDto = UpdateElearningDto;
//# sourceMappingURL=update-elearning.dto.js.map