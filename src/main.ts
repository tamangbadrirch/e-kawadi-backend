import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Second Life')
    .setDescription('discription')
    .setVersion('1')
    .addServer('/api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors() //front end ko url or port halne ["localhost:3000"]
  app.setGlobalPrefix('/api')
  await app.listen(5000);
}
bootstrap();
