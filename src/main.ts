import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,                    // Prohibir datos que no esten en los DTO
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.ENVIRONMENT == 'production' ? true : false,
      transformOptions: {
        enableImplicitConversion: true,   // Convertir Query params en numbers
      },
    })
  );
  app.setGlobalPrefix("/api/");
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
