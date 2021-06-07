//importa o express
const express = require('express');
//instancia o express
const app = express();

app.get('/', (request,response) =>{
    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Silas Eduardo'
    })
}); //cria a rota principal
// indica a porta a ser usada
app.listen(3333);