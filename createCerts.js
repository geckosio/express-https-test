// https://www.npmjs.com/package/selfsigned
const selfsigned = require('selfsigned')
const attrs = [{ name: 'commonName', value: 'contoso.com' }]
const pems = selfsigned.generate(attrs, { days: 365 })

const fs = require('fs')

fs.writeFileSync('certs/private', pems.private)
fs.writeFileSync('certs/public', pems.public)
fs.writeFileSync('certs/cert', pems.cert)

console.log('Created!')
