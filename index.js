const express = require('express')

const path = require('path')

const app = express()

const PORT = 3000

//Middleware
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

//Enrutamiento
app.use("/", require("./routes/index"))

app.listen(PORT, () => console.log(`Server ready at port ${PORT}`));