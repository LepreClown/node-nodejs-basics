import path from "path"
import {release, version} from "os"
import {createServer as createServerHttp} from "http"
import {fileURLToPath} from "node:url";
import fs from "fs";

const __filename = fileURLToPath(new URL('.', import.meta.url));
const __dirname = path.dirname(__filename)

const FILE_PATH_TO_A = path.join(__filename, "files", "a.json");
const FILE_PATH_TO_B = path.join(__filename, "files", "b.json")

import "./files/c.js"


const random = Math.random();

const readHandler = async (path) => {
  return fs.promises.readFile(path, "utf8")
}

let unknownObject;

if (random > 0.5) {
  unknownObject = await readHandler(FILE_PATH_TO_A);
} else {
  unknownObject = await readHandler(FILE_PATH_TO_B);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};

