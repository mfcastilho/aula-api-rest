const express = require("express");

const port = 3000;
const app = express();

const clientRoutes = require("./routes/client.routes");

app.use(express.json());


app.use(clientRoutes);

app.listen(port, ()=>{
 console.log(`Servidor rodando na porta ${port}`);
});
