import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CarsModule } from './cars-module/cars.module';

async function bootstrap() {
  const app = await NestFactory.create(CarsModule);

  const options = new DocumentBuilder()
    .setTitle('Cars API')
    .setDescription('The cars API description')
    .setVersion('1.0')
    .addTag('cars')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
