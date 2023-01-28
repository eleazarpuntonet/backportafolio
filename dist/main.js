"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Eleazar Portafolio')
        .setDescription('Bienvenido a mi portafolio, espero te guste!')
        .setVersion('1.0')
        .addTag('portafolio')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        disableErrorMessages: false,
        whitelist: true,
        transformOptions: {
            enableImplicitConversion: true
        }
    }));
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map