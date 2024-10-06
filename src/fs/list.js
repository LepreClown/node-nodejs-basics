import path from "path";
import fs from "fs";
import {fileURLToPath} from "node:url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIR_PATH = path.join(__dirname, "files");
const ERROR_MSG = "FS operation failed"

const list = async () => {
  const isExistsFiles = fs.existsSync(DIR_PATH);
  const readAndWriteHandler = () => fs.promises.readdir(DIR_PATH)

  if (!isExistsFiles) {
    throw new Error(ERROR_MSG);
  }

  try {
    const files = await readAndWriteHandler()
    console.log(...files)
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await list();