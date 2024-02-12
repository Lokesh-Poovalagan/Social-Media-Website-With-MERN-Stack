const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const blogs = require('./routes/blogs')
app.use(express.json())
dotenv.config({path:path.join(__dirname,"config/configuration.env")})
app.use('/api/v1',blogs)


module.exports=app