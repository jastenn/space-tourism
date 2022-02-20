import { readFile } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

export const __dirname = dirname(fileURLToPath(import.meta.url))

const getData = async () => {
  const res = await readFile(join(__dirname, "..", "data.json"))
  return JSON.parse(res.toString())
}

export default getData
