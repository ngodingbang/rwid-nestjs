import { EnvConfigInfer } from './env.config';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface ProcessEnv extends Readonly<EnvConfigInfer> {
      //
    }
  }
}
