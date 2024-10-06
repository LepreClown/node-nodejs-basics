import {createGunzip} from "zlib";
import fs from "fs";
import {fileURLToPath} from "node:url";
import path from "path";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const INPUT_FILE_PATH = path.join(__dirname, "files", "archive.gz");
const OUTPUT_FILE_PATH = path.join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const unzip = createGunzip()
  const readStream = fs.createReadStream(INPUT_FILE_PATH)
  const writeStream = fs.createWriteStream(OUTPUT_FILE_PATH)

  readStream.pipe(unzip).pipe(writeStream);
};

await decompress();