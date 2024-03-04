const express = require('express')
const app = express()

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'views/layouts/layout')
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 4000)