const express = require("express");
const clientRoutes = require("./routes/client.routes");



const app = express();
const port = 3000;

app.use(express.json());

app.use(clientRoutes);


app.listen(port, ()=>{
     console.log(`Servidor rodando na porta ${port}`);
});