import {stdout, stdin} from "process";
import {Transform} from 'node:stream';

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, encoding, callback) {
      const reversedData = data.toString().split("").reverse()

      callback(null, reversedData.join(""))
    }
  })

  const reverseStdin = stdin.pipe(reverseStream)

  reverseStdin.on("data", data => {
    stdout.write(data);
  });
};

await transform();