import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import expressBasicAuth from 'express-basic-auth';

import { AppModule } from './app/app.module';
import { EnvConfig } from './env/env.config';

function enableCors(app: INestApplication<any>) {
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
}

function setupSwagger(app: INestApplication<any>, config: EnvConfig) {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('RWID NestJS')
    .setDescription('Learn NestJS from basic.')
    .setVersion(config.APP_VERSION)
    .build();
  const content = SwaggerModule.createDocument(app, swaggerConfig);

  app.use(
    ['/api/docs', '/api/docs-json'],
    expressBasicAuth({
      challenge: true,
      users: {
        [config.API_DOCS_USERNAME]: config.API_DOCS_PASSWORD,
      },
    }),
  );
  SwaggerModule.setup('api/docs', app, content, {
    ui: false,
    raw: ['json'],
  });
  app.use('/api/docs', apiReference({ content }));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(EnvConfig);

  enableCors(app);
  setupSwagger(app, config);

  await app.listen(config.PORT);
}

void bootstrap();
