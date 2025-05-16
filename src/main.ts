import { NestFactory } from '@nestjs/core';
import { dotEnvLoader, loadConfig } from 'nest-zod-config';

import { AppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const config = await loadConfig(AppConfig, dotEnvLoader());
  const app = await NestFactory.create(AppModule);

  await app.listen(config.PORT);
}

void bootstrap();
