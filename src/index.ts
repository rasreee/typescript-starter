import chalk from 'chalk';

import { getPath, readJSON } from '@/lib/file-system';
import { logger } from '@/lib/logger';

const packageJSON = readJSON(getPath(__dirname, '..', 'package.json'));

logger.info(chalk.bold.cyanBright('🎸', packageJSON.name, '🎸'));
logger.info(chalk.bold.cyanBright(`Running for ${process.env.NODE_ENV}`));
