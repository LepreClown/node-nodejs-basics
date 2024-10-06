import {spawn} from "child_process"
import path from "path";
import {fileURLToPath} from "node:url";

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = path.join(__dirname, "files", "script.js");
const ARGS = ["hello", "write", "men", "fields", "banana", "fruits"]

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [FILE_PATH, ...args]);

  childProcess.stdout.on("data", data => {
    console.log(data.toString());
  })

  process.stdin.on('data', (data)=>{
    childProcess.stdin.write(data);
  })
}

await spawnChildProcess(ARGS);
