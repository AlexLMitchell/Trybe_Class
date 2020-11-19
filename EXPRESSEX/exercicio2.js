const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
function tokenIsValid(token) {
  const regToken = /^[A-z0-9]{12}/
  if (!token || regToken.test(token)) {
    console.log('Token inválido');
  }
  return regToken.test(token);
}
app.get('/btc/price', async (req, res) => {
  console.log(req.header);
  const { authorization: token } = req.header;
  const tokenChecked = tokenIsValid(token);
  if (tokenChecked) {
    const api = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
    const dataApi = axios.get(api).then(({ data }) => data);
    return await res.json({ dataApi });
  }
});
app.listen(3000, () => console.log('Estamos bem'));
