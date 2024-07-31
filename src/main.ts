import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from "fs"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
  .setTitle('Movies API')
  .setDescription('This is a movies api')
  .setVersion('1.0')
  .addTag('Movies')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

fs.writeFileSync("movies-endpoints.json", JSON.stringify(document))

  await app.listen(3000);
}
bootstrap();
