"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElearningModule = void 0;
const common_1 = require("@nestjs/common");
const elearning_service_1 = require("./elearning.service");
const elearning_controller_1 = require("./elearning.controller");
const elearning_provider_1 = require("./providers/elearning.provider");
const app_service_1 = require("../../app.service");
let ElearningModule = class ElearningModule {
};
ElearningModule = __decorate([
    (0, common_1.Module)({
        controllers: [elearning_controller_1.ElearningController],
        providers: [elearning_service_1.ElearningService, ...elearning_provider_1.elearningProviders, app_service_1.AppService]
    })
], ElearningModule);
exports.ElearningModule = ElearningModule;
//# sourceMappingURL=elearning.module.js.map