import { Module } from '@nestjs/common';

import { EnvModule } from '@/env/env.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
