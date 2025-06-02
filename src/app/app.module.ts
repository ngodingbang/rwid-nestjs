import { Module } from '@nestjs/common';

import { EnvModule } from '@/env/env.module';
import { PostModule } from '@/post/post.module';
import { UsersModule } from '@/user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [EnvModule, UsersModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
