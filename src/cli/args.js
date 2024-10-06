const ARGS = process.argv
const NAME_PREFIX = "--"

const parseArgs = () => {
  const arr = []
  const argsWithoutDirPath = ARGS.slice(2)

  for (let i = 0; i < argsWithoutDirPath.length; i++) {
    if(argsWithoutDirPath[i].startsWith(NAME_PREFIX)) {
      const value = `${argsWithoutDirPath[i].slice(2)} is ${argsWithoutDirPath[i + 1]}`

      arr.push(value)
    }
  }

  return console.log(arr.join(', '))
};

parseArgs();