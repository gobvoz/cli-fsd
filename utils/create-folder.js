import fs from 'fs/promises';
import { existsSync as folderExist } from 'fs';

import log from '../utils/log.js';

const createFolder = async (folderPath, silentMode) => {
  try {
    if (!folderExist(folderPath)) {
      !silentMode && log.info(`Creating "${folderPath}" directory`);
      await fs.mkdir(folderPath);
    }
  } catch (error) {
    log.error(`Could not create "${folderPath}" directory`);
    process.exit();
  }
};

export default createFolder;
