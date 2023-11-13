import path from 'path';
import { existsSync as folderExist } from 'fs';
import createFolder from '../utils/create-folder.js';

import log from '../utils/log.js';

const init = async argv => {
  if (folderExist(path.resolve('src'))) {
    log.error(`Could not create "src" directory`);
    log.error(`folder already exists`);
    return;
  }

  try {
    await createFolder(path.resolve('src'));

    await createFolder(path.resolve('src', 'app'));
    await createFolder(path.resolve('src', 'process'));
    await createFolder(path.resolve('src', 'pages'));
    await createFolder(path.resolve('src', 'widgets'));
    await createFolder(path.resolve('src', 'features'));
    await createFolder(path.resolve('src', 'entities'));
    await createFolder(path.resolve('src', 'shared'));

    await createFolder(path.resolve('src', 'app', 'providers'));

    await createFolder(path.resolve('src', 'shared', 'assets'));
    await createFolder(path.resolve('src', 'shared', 'constants'));
    await createFolder(path.resolve('src', 'shared', 'libs'));
    await createFolder(path.resolve('src', 'shared', 'ui'));
  } catch (error) {
    log.error(`Could not create folder structure`);
    log.error(error);
  }
};

export default init;
