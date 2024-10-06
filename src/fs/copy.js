import {cp} from "fs/promises";
import path from "path";
import {fileURLToPath} from 'node:url';
import fs from "fs";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const MAIN_DIRECTORY_PATH = path.join(__dirname, "files");
const COPY_DIRECTORY_PATH = path.join(__dirname, 'files_copy');
const ERROR_MSG = "FS operation failed"


const copy = async () => {
  const copyHandler = () => cp(MAIN_DIRECTORY_PATH, COPY_DIRECTORY_PATH, {recursive: true});
  const isExistsMainDir =  fs.existsSync(MAIN_DIRECTORY_PATH);
  const isExistsCopyDir =  fs.existsSync(COPY_DIRECTORY_PATH)

  if (isExistsCopyDir || !isExistsMainDir) {
    throw new Error(ERROR_MSG);
  }

  try {
    await copyHandler()
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await copy();
