import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const port = process.env.PORT ? Number(process.env.PORT) : 5005;
  await app.listen(port, '0.0.0.0');
  console.log(`Server products-mongodb started successfully on port ${port}`);
}
bootstrap();
