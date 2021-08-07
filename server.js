const express = require('express')
const { Router } = express

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/public', express.static('./src/files'))

const PORT = 8080

app.get('/', (req, res) => {
    var fs = require('fs')
    filename = 'productos.txt'
    fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    res.send(JSON.parse(data))
    });
})

app.get('/productos', (req, res) => {
    var fs = require('fs')
    filename = 'productos.txt'
    fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    productos = JSON.parse(data)
    console.log('OK: ' + filename);
    res.send(productos)
    });
})

app.get('/productoRandom', (req, res) => {
    var fs = require('fs')
    filename = 'productos.txt'
    fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    productos = JSON.parse(data)
    console.log('OK: ' + filename)
    res.send(productos[Math.floor(Math.random() * productos.length)])
    });
})

app.listen(PORT, () => {
    console.log(`Port 8080`)
 })