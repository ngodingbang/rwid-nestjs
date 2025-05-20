import { Config } from 'nest-zod-config';
import { z } from 'zod';

export const appConfigSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'staging', 'production'])
    .default('development'),
  PORT: z.number().step(1).min(1).max(9999).optional().default(3000),
});

export class AppConfig extends Config(appConfigSchema) {}
