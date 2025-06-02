import { parseArgs } from 'node:util';

async function bootstrap(): Promise<void> {
  const {
    values: { environment },
  } = parseArgs({
    options: {
      environment: { type: 'string' },
    },
  });

  switch (environment) {
    case 'development':
      /** data for your development */
      break;
    case 'staging':
      /** data for your staging environment */
      break;
    case 'production':
    default:
      break;
  }
}

bootstrap()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
