import {fileURLToPath} from "node:url";
import path from "path";
import fs from "fs";
import {createHash} from "crypto";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "fileToCalculateHashFor.txt");
const ERROR_MSG = "FS operation failed"

const calculateHash = async () => {
  const isExistsFile = fs.existsSync(FILE_PATH);
  const hash = createHash("sha256");

  if (!isExistsFile) {
    throw new Error(ERROR_MSG);
  }

  const stream = fs.createReadStream(FILE_PATH)

  stream.on("data", data => {
    hash.update(data)
  })

  stream.on('end', () => {
    const hashHex = hash.digest('hex');
    console.log(hashHex);
  });
};

await calculateHash();