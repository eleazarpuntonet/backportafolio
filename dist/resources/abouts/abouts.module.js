"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutsModule = void 0;
const common_1 = require("@nestjs/common");
const abouts_service_1 = require("./abouts.service");
const abouts_controller_1 = require("./abouts.controller");
const abouts_provider_1 = require("./providers/abouts.provider");
const config_1 = require("@nestjs/config");
const app_service_1 = require("../../app.service");
let AboutsModule = class AboutsModule {
};
AboutsModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule],
        controllers: [abouts_controller_1.AboutsController],
        providers: [abouts_service_1.AboutsService, ...abouts_provider_1.aboutProviders, app_service_1.AppService]
    })
], AboutsModule);
exports.AboutsModule = AboutsModule;
//# sourceMappingURL=abouts.module.js.map