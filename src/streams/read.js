import fs from "fs";
import {fileURLToPath} from "node:url";
import path from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(FILE_PATH)

  stream.on("data", data => {
    process.stdout.write(data)
  })
};

await read();