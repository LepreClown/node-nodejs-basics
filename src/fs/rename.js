import {fileURLToPath} from "node:url";
import path from "path";
import fs from "fs";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "wrongFilename.txt");
const RENAME_FILE_PATH = path.join(__dirname, "files", "properFilename.md");
const ERROR_MSG = "FS operation failed"


const rename = async () => {
  const isExistsFile = fs.existsSync(FILE_PATH);
  const renameHandler = () => fs.renameSync(FILE_PATH, RENAME_FILE_PATH)

  if (!isExistsFile) {
    throw new Error(ERROR_MSG);
  }

  try {
    await renameHandler()
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await rename();