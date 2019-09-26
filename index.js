const express = require('express');
const cors = require('cors');

app.get('/contract', async (req, res) => {
    const contract = getContract();
    const name = await contract.name();
    const symbol = await contract.symbol();
    const totalSupply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const denominator = Math.pow(10, Number(decimals[0]));
    res.send({ name: name[0], symbol: symbol[0], totalSupply: totalSupply[0] / denominator });
  });
  
app.get('/balance', async (req, res) => {
    const eth = new Eth(new Eth.HttpProvider(settings.Node));
    const balance = await eth.getBalance(req.query.who, 'pending');
    res.send({ balance: Number(balance) });
});

const port = process.env.API_PORT || 5000;
console.log('Listening on port: ' + port);
app.listen(port);