import { Global, Module } from '@nestjs/common';
import { dotEnvLoader, envLoader, ZodConfigModule } from 'nest-zod-config';

import { EnvConfig } from './env.config';

@Global()
@Module({
  imports: [
    ZodConfigModule.forRootAsync({
      config: EnvConfig,
      loader: [envLoader(), dotEnvLoader()],
      isGlobal: true,
    }),
  ],
})
export class EnvModule {}
