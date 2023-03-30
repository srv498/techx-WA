require('dotenv').config();

function getAccountInfo(id) {
    var ibmdb = require("ibm_db");
    const dbname = 'bludb';
    const hostname = 'ba99a9e6-d59e-4883-8fc0-d6a8c9f7a08f.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud:31321';
    const port = '31321';
    const protocol = 'TCPIP';
    const uid = 'hdc17710';
    const pwd = '9DubGf0mhOEuLkq7';
    connStr = `DATABASE=${dbname};HOSTNAME=${hostname};PORT=${port};PROTOCOL=${protocol};UID=${uid};PWD=${pwd};Security=SSL`;
    try {
        var connection = ibmdb.openSync(connStr);
        queryString = `SELECT * FROM HDC17710.BANKCUSTOMERS WHERE ID='${id}'`;
        
        var response = connection.querySync(queryString);
        connection.closeSync();
        
        return response[0]
    }
    catch (e) {
        console.log("some error happened here: ", e);
    }

}

module.exports = getAccountInfo;