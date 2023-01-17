import * as Gluon from "@gluon-framework/gluon"
import { writeFile } from "fs/promises"

const Window = await Gluon.open('index.html', {
  windowSize: [800, 600]
})

Window.ipc.on('submit', async data => {
  // write file with data
  const currentPath = process.cwd()
  await writeFile(`${currentPath}/data.json`, JSON.stringify(data), 'utf-8')
  return true
})