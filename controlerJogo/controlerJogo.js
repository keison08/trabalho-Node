// cria minhas aplicações 

const db = require('../models');
const user = db.users;

const Op = db.Sequelize.Op;


const app = express();
app.use(bodyParser.json());

// a. Criação do jogo
app.post('/games/:id', async (req, res) => {
  try {
    const {id, nome, descricao, jogadores, idade } = req.body;
    const novoJogo = await db.jogoDeTabuleiro.create({
      id,
      idade,
      nome,
      descricao,
      jogadores,
      idade
    });
    res.status(201).json(novoJogo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o jogo de tabuleiro' });
  }
});


/// b. Leitura 

app.get('/games', async (req, res) => {
  try {
    const jogos = await db.jogoDeTabuleiro.findAll();
    res.status(200).json(jogos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar jogos de tabuleiro' });
  }
});


///c . Atualização 

app.get('/games/:id', async (req, res) => {
  const jogoId = req.params.id;
  try {
    const jogo = await db.jogoDeTabuleiro.findByPk(jogoId);
    if (jogo) {
      res.status(200).json(jogo);
    } else {
      res.status(404).json({ mensagem: 'Jogo de tabuleiro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar jogo de tabuleiro' });
  }
});


/// d . exclusão 

app.delete('/games/:id', async (req, res) => {
  const jogoId = req.params.id;
  try {
    const jogo = await db.jogoDeTabuleiro.findByPk(jogoId);
    if (jogo) {
      await jogo.destroy(); 
      res.status(204).send(); 
    } else {
      res.status(404).json({ mensagem: 'Jogo de tabuleiro não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir jogo de tabuleiro' });
  }
});


