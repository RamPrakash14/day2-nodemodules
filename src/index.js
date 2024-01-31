// const express = require('express') //common.js
import express from 'express'
import AppRoutes from './routes/index.js'
const app = express()
const PORT = 8000
app.use(express.json())
app.use('/',AppRoutes)
   

app.listen(PORT,()=>console.log(`App is listening port ${PORT}`))
