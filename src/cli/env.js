const PREFIX = "RSS_"
const ENV_VARIANTS = process.env

const parseEnv = () => {
  const arr = []

  for (const key in ENV_VARIANTS) {
    if (key.startsWith(PREFIX)) {
      const value = `${key}=${ENV_VARIANTS[key]}`

      arr.push(value)
    }
  }

  return console.log(...arr)
}

parseEnv();