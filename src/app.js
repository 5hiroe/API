import express from 'express'
import init from './config/config.js'
const PORT = 8080

async function main () {
  const app = express()

  await init(app)
  app.listen(PORT, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Server Initialized ON ${PORT}`)
    }
  })
}

main()
