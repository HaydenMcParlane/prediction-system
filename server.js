import express from 'express';
import pg from 'pg';
import postgraphql from 'postgraphql';

const connectionString = "postgres://guest@104.236.15.172:5432/stockdb";

let app = express();

app.use(express.static("./public"));
app.use(postgraphql(connectionString));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000);