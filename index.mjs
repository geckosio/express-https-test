import geckos from '@geckos.io/server'
import https from 'https'
import fs from 'fs'
import express from 'express'

const key = fs.readFileSync('certs/private')
const cert = fs.readFileSync('certs/cert')
const options = {
  key: key,
  cert: cert
}

const app = express()
const server = https.createServer(options, app)
const io = geckos()

io.addServer(server)
io.onConnection(channel => {})

app.use(express.static('public'))

server.listen(3000, () => {
  console.log('Open https://localhost:3000/index.html')
})
