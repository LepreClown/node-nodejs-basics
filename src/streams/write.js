import {fileURLToPath} from "node:url";
import path from "path";
import fs from "fs";
import {stdin, exit} from "process"

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(FILE_PATH)

  stdin.on("data", data => {
    stream.write(data);
    exit()
  });
};

await write();