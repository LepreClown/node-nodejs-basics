import {fileURLToPath} from "node:url";
import path from "path";
import { createGzip } from 'zlib';
import fs from "fs";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const INPUT_FILE_PATH = path.join(__dirname, "files", "fileToCompress.txt");
const OUTPUT_FILE_PATH = path.join(__dirname, "files", "archive.gz");

const compress = async () => {
  const gzip = createGzip();

  const readStream = fs.createReadStream(INPUT_FILE_PATH)
  const writeStream = fs.createWriteStream(OUTPUT_FILE_PATH)

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
