const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const itemRoutes = require('./src/routes/item.routes')

app.use('/api/items', itemRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});