"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const testimonials_module_1 = require("./resources/testimonials/testimonials.module");
const abouts_module_1 = require("./resources/abouts/abouts.module");
const skills_module_1 = require("./resources/skills/skills.module");
const work_module_1 = require("./resources/work/work.module");
const workexperiences_module_1 = require("./resources/workexperiences/workexperiences.module");
const studies_module_1 = require("./resources/studies/studies.module");
const elearning_module_1 = require("./resources/elearning/elearning.module");
const users_module_1 = require("./resources/users/users.module");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const core_1 = require("@nestjs/core");
const jwt_guard_1 = require("./auth/guards/jwt.guard");
const roles_guard_1 = require("./auth/guards/roles.guard");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const database_providers_1 = require("./database/database.providers");
const client_module_1 = require("./client/client.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: process.env.NODE_ENV == 'local' ? '.local.env' : '.env',
                isGlobal: true,
                validationSchema: Joi.object({
                    SERVER_URL: Joi.string().required(),
                    DATABASE_NAME: Joi.string().required(),
                    DATABASE_USERNAME: Joi.string().required(),
                    DATABASE_PASSWORD: Joi.string().required(),
                    DATABASE_HOST: Joi.string().required(),
                    AWS_PUBLIC_BUCKET_NAME: Joi.string().required(),
                    AWS_ACCESS_KEY_ID: Joi.string().required(),
                    AWS_SECRET_ACCESS_KEY: Joi.string().required(),
                    AWS_REGION: Joi.string().required(),
                    PORT: Joi.number().required()
                })
            }),
            platform_express_1.MulterModule.register(),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../src/public'),
            }),
            database_module_1.DatabaseModule,
            testimonials_module_1.TestimonialsModule,
            abouts_module_1.AboutsModule,
            skills_module_1.SkillsModule,
            work_module_1.WorkModule,
            workexperiences_module_1.WorkexperiencesModule,
            studies_module_1.StudiesModule,
            elearning_module_1.ElearningModule,
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            client_module_1.ClientModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_guard_1.JwtGuard,
            },
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guard_1.RolesGuard,
            },
            ...database_providers_1.databaseProviders
        ],
        exports: [app_service_1.AppService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map