if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const mongoose= require('mongoose')
const express= require('express')
const app =express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser= require('body-parser')
const indexRouter = require('./routes/index') //declaring routes
const authorRouter = require('./routes/authors')

app.set('view engine','ejs')    //seting view engin as ejs
app.set('views', __dirname + '/views')  //setting view(display)
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({limit:'10mb', extended:false})) 

const CONNECTION_URL = "mongodb+srv://abcd:abcd@cluster0.fqk2d.mongodb.net/PROJECT0?retryWrites=true&w=majority";

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

app.use('/',indexRouter)
app.use('/authors',authorRouter)
'authors/new'

app.listen(process.env.PORT||3000)