const express = require("express");
const app = express();

const clientRoutes = require("./routes/client.routes")

const port = 3000;

app.use(express.json());


app.use(clientRoutes);

app.listen(port, ()=>{
 console.log(`Servidor rodando na porta ${port}`);
});