const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '1212zxzxc',
    database: 'test'
});

connection.connect();

connection.query('insert into administrator(username, password) values ("admin", "shengteng2019")'
    , (err, res) => {
        if (err) console.log(err)
        console.log(res)
    }
)

connection.end();