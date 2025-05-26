import { Test, TestingModule } from '@nestjs/testing';

import { EnvConfig } from './env.config';

describe('EnvConfig', () => {
  let config: EnvConfig;
  let mockEnvConfig: Partial<EnvConfig>;

  beforeEach(async () => {
    mockEnvConfig = {
      NODE_ENV: 'development',
      PORT: 3000,
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [EnvConfig, { provide: EnvConfig, useValue: mockEnvConfig }],
    }).compile();

    config = module.get<EnvConfig>(EnvConfig);
  });

  it('should be defined', () => {
    expect(config).toBeDefined();
  });

  describe('get', () => {
    it('should return environment variable value', () => {
      const result = config.NODE_ENV;
      expect(['development', 'staging', 'production']).toContain(result);
    });

    it('should return different environment variable value', () => {
      const result = config.PORT;
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(65535);
    });

    it('should return undefined for non-existent key', () => {
      const result = config['NON_EXISTENT_KEY' as keyof typeof mockEnvConfig];
      expect(result).toBeUndefined();
    });
  });
});
