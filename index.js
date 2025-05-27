
const express = require('express')
const app = express()

// <------ MIDDLEWARE ------>
app.use(express.json())



// <------ SERVER ------>
const PORT = 3000
app.listen(PORT, () =>  {
  console.log(`server started on port http://localhost:${PORT}`)
})