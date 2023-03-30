const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const getAccountBalance = require('./accountFunctions/getAccountBalance')
const getAccountInfo = require('./accountFunctions/getAccountInfo')
const accountFound = require('./accountFunctions/accountFound')
const payBill = require('./accountFunctions/payBill')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/checkbalance', (req, res) => {  
  if (accountFound(Number(req.query.id))) {
    let accountInfo = getAccountInfo(Number(req.query.id))
    let balance = getAccountBalance(accountInfo)
    res.json({message: balance})
  }
  else {
    res.json({message: `There is no account associated with the account id: ${req.query.id}`})
  }
})

app.get('/api/paybill', (req, res) => {
  if (accountFound(req.query.id)) {
    res.json(payBill(req.query.id, req.query.amount))
  }
  else {
    res.json({message: `There is no account associated with the account id: ${req.query.id}`})
  }
})


app.listen(3000, () => {
  console.log('API server started on port 3000')
})