import fs from 'fs/promises';
import { existsSync as folderExist } from 'fs';
import path from 'path';

import log from '../utils/log.js';

const createFolder = async (...pathParts) => {
  try {
    const dirPath = path.resolve(...pathParts);

    if (!folderExist(dirPath)) {
      log.info(`Creating "${dirPath}" directory`);
      await fs.mkdir(dirPath);
    }
  } catch (error) {
    log.error(`Could not create "${dirPath}" directory`);
    process.exit();
  }
};

export default createFolder;
