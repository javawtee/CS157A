const express = require('express')
const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "123456",
    database: "cs157a"
})

const app = express()

const greeting = res => {
    con.query('SELECT * FROM emp', (err, rows) => {
        if (err) res.status(500).send('Oops! Something went wrong with connection')
        else {
            res.status(200).send(`
                <div>
                    <h1> Hi Amit from Node.js</h1>
                    <p><b>Let me show you my emp table from MySQL > db: cs157a</b></p>
                    <table>
                        <tr><td>ID</td><td>Name</td><td>Age</td></tr>
                        ${rows.map(row => { return `<tr><td>${row.id}</td><td>${row.name}</td><td>${row.age}</td></tr>` })}
                    </table>
                </div>
            `)
        }
    })

}

app.get('/', (req, res) => {
    greeting(res)
})

app.listen(5000, () => console.log('Listening on port 5000'))




