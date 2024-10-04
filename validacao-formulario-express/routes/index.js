var express = require('express');
var router = express.Router();

// Middleware para fazer o parse do body do formulário
router.use(express.urlencoded({ extended: true}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Escola Virtual' });
});



/* POST rota para processar o formulário */
router.post('/submit-form', function(req,res, next){
  // Dados recebidos do formulário
  const { nomeAluno, dia,mes, ano,nomeMae,nomePai,ddd,tel,ramal,email,serie,turno,    } = req.body;
  const checkboxValues = req.body.checkboxs || [];

  // Resposta para o cliente
  res.send(`<h1 style="  color: green;">Formulário recebido com sucesso!</h1> 
    <h2>Dados Pessoais </h2> 
    <p> Nome: ${nomeAluno} </p>
    <p> Nascimento: ${dia}/${mes}/${ano}</p>
    <p> Nome da Mãe: ${nomeMae} </p>
    <p> Nome do Pai: ${nomePai} </p>
    <p> Telefone: ${ddd} ${tel} ${ramal}</p>
    <p>Email: ${email} </p>
    <h2>Atividades Extracurriculares</h2>
    <p> Série: ${serie} </p>
    <p> Turno: ${turno} </p>
    <p> Atividades Estracurriculares: ${checkboxValues.join(', ')} </p>`);
  
})

module.exports = router;
