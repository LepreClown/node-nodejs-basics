import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, 'files', "fresh.txt");
const SUCCESS_MSG = "I am fresh and young"
const ERROR_MSG = "FS operation failed"


const create = async () => {
  const fileHandler = () => fs.promises.writeFile(FILE_PATH, SUCCESS_MSG, {flag: "wx"});

  try {
    await fileHandler()
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await create();