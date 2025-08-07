const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('src'));

app.get('/currencies', (req, res) => {
  const currencies = [
    { code: 'USD', name: 'Dólar Americano' },
    { code: 'EUR', name: 'Euro' },
    { code: 'BRL', name: 'Real Brasileiro' },
    { code: 'GBP', name: 'Libra Esterlina' },
    { code: 'JPY', name: 'Iene Japonês' },
    { code: 'AUD', name: 'Dólar Australiano' },
    { code: 'CAD', name: 'Dólar Canadense' },
    { code: 'CHF', name: 'Franco Suíço' },
    { code: 'CNY', name: 'Yuan Chinês' },
    { code: 'ARS', name: 'Peso Argentino' },
    { code: 'BTC', name: 'Bitcoin' },
    { code: 'ETH', name: 'Ethereum' },
    { code: 'ARS', name: 'Peso Argentino' },
  ];
  res.json({ currencies });
});

app.get('/symbols', async (req, res) => {
  try {
    const response = await axios.get('https://api.exchangerate.host/symbols');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro ao buscar moedas' });
  }
});

app.post('/converter', async (req, res) => {
  const { valor, de, para } = req.body;

  try {
    const response = await axios.get(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
    const dados = response.data;
    const cotacao = dados[`${de}${para}`].bid;

    const resultado = (valor * cotacao).toFixed(2);

    res.json({
      valorConvertido: resultado,
      cotacaoAtual: cotacao
    });
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao converter moeda' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});