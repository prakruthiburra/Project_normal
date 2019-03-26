var mysql = require('mysql');
var express = require('express');
var cors = require('cors');

const app = express();

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'DO',
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

app.listen(4000, function() {
    console.log("node listening on port 4000" )
})

const SELECT_ALL_TEST = "SELECT * FROM test_table"

app.get("/", (req,res) => {
    connection.query(SELECT_ALL_TEST, (err, results) => {
        if(err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});
