const express = require('express')
const mysql = require('mysql')

const app = express()

//jika error jalankan perintah ini di command prompt mysql
//ALTER USER '(user mysql kamu ex:root)'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password kamu'
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'abc123',
    database: 'acme'
})

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.listen(5000, () => console.log('Server sudah jalan'))