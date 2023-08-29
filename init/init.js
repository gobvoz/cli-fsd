import path from 'path';
import { existsSync as folderExist } from 'fs';

import log from '../utils/log.js';

const init = async argv => {
  if (folderExist(path.resolve('src'))) {
    log.error(`Could not create "src" directory`);
    log.error(`folder already exists`);
    return;
  }

  try {
    await fs.mkdir(path.resolve('src'));

    await fs.mkdir(path.resolve('src', 'app'));
    await fs.mkdir(path.resolve('src', 'process'));
    await fs.mkdir(path.resolve('src', 'pages'));
    await fs.mkdir(path.resolve('src', 'widgets'));
    await fs.mkdir(path.resolve('src', 'features'));
    await fs.mkdir(path.resolve('src', 'entities'));
    await fs.mkdir(path.resolve('src', 'shared'));

    await fs.mkdir(path.resolve('src', 'app', 'providers'));

    await fs.mkdir(path.resolve('src', 'shared', 'assets'));
    await fs.mkdir(path.resolve('src', 'shared', 'constants'));
    await fs.mkdir(path.resolve('src', 'shared', 'libs'));
    await fs.mkdir(path.resolve('src', 'shared', 'ui'));
  } catch (error) {
    log.error(`Could not create folder structure`);
    log.error(error);
  }
};

export default init;
