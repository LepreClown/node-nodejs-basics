import fs from "fs";
import {fileURLToPath} from "node:url";
import path from "path";


const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "fileToRead.txt");
const ERROR_MSG = "FS operation failed"

const read = async () => {
  const isExistsFiles = fs.existsSync(FILE_PATH);
  const readAndWriteHandler = () => fs.promises.readFile(FILE_PATH, "utf8")

  if (!isExistsFiles) {
    throw new Error(ERROR_MSG);
  }

  try {
    console.log(await readAndWriteHandler())
  } catch (e) {
    throw new Error(ERROR_MSG);
  }
};

await read();