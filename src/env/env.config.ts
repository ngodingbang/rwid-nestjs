import { Config } from 'nest-zod-config';
import { z } from 'zod';

const envConfig = z.object({
  NODE_ENV: z
    .enum(['development', 'staging', 'production'])
    .optional()
    .default('development'),
  PORT: z.number().step(1).min(1).max(65535).optional().default(3000),
  APP_VERSION: z
    .string()
    .optional()
    .default(() => process.env.npm_package_version),

  API_DOCS_USERNAME: z.string(),
  API_DOCS_PASSWORD: z.string(),
});

export class EnvConfig extends Config(envConfig) {}

export type EnvConfigInfer = z.infer<typeof envConfig>;
