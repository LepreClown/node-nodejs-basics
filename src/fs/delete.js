import {fileURLToPath} from "node:url";
import path from "path";
import fs from "fs";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "fileToRemove.txt");
const ERROR_MSG = "FS operation failed"


const remove = async () => {
  const isExistsFile =  fs.existsSync(FILE_PATH);
  const removeHandler = () => fs.promises.rm(FILE_PATH)

  if (!isExistsFile) {
    throw new Error(ERROR_MSG);
  }

  try {
    await removeHandler()
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await remove();