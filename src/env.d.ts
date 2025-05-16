import { z } from 'zod';

import { appConfigSchema } from './app.config';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends Readonly<z.infer<typeof appConfigSchema>> {
      //
    }
  }
}
