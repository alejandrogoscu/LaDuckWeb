
const express = require('express')
const app = express()




// <------ SERVER ------>
const PORT = 3000
app.listen(PORT, () =>  {
  console.log(`server started on port http://localhost:${PORT}`)
})