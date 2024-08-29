import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
     origin: 'http://localhost:4200',
     methods: 'GET, POST, PUT, DELETE',
     allowedHeaders: 'Content-Type, Authorization',
  });
  const configService = app.get(ConfigService); 
  const port = configService.get('PORT') || 3000;  

  await app.listen(port);
}
bootstrap();
