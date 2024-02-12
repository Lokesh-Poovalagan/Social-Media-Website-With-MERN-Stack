const app = require('./app')
const path = require('path')
const connectDatabase = require('./config/Database')

connectDatabase()

app.listen(process.env.PORT,()=>{
    console.log( `Server is running in port ${process.env.PORT} and in environment ${process.env.NODE_ENV}` )
})