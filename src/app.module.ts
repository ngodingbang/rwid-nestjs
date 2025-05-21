import { Module } from '@nestjs/common';
import { dotEnvLoader, ZodConfigModule } from 'nest-zod-config';

import { AppConfig } from './app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ZodConfigModule.forRootAsync({
      config: AppConfig,
      loader: dotEnvLoader(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
