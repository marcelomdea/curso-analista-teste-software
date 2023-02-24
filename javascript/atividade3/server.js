const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const tasks = [];

app.use(bodyParser.json());

// Rotas do aplicativo
app.get('/', (req, res) => {
  res.send('Módulo 3. Programação JavaScript (JS) e teste de unidade. Semana 5 - Masterclass - ATIVIDADE');
});


app.post('/tarefa', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.send(newTask);
});


// Iniciando o servidor
app.listen(port, () => {
  console.log(`Aplicativo de lista de tarefas sendo executado em http://localhost:${port}`);
});

module.exports = app
