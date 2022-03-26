import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { APP_PORT } from './common/constants'
import { join } from 'path';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Eleazar Portafolio')
  .setDescription('Bienvenido a mi portafolio, espero te guste!')
  .setVersion('1.0')
  .addTag('portafolio')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors()

  app.useGlobalPipes(new ValidationPipe({
    disableErrorMessages: false,
    whitelist: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }));

  await app.listen(APP_PORT);
}
bootstrap();
