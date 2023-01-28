"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkexperiencesModule = void 0;
const common_1 = require("@nestjs/common");
const workexperiences_service_1 = require("./workexperiences.service");
const workexperiences_controller_1 = require("./workexperiences.controller");
const workexperience_provider_1 = require("./providers/workexperience.provider");
let WorkexperiencesModule = class WorkexperiencesModule {
};
WorkexperiencesModule = __decorate([
    (0, common_1.Module)({
        controllers: [workexperiences_controller_1.WorkexperiencesController],
        providers: [workexperiences_service_1.WorkexperiencesService, ...workexperience_provider_1.workExperiencesProviders]
    })
], WorkexperiencesModule);
exports.WorkexperiencesModule = WorkexperiencesModule;
//# sourceMappingURL=workexperiences.module.js.map