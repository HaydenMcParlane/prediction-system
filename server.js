import express from 'express';
import pg from 'pg';
import postgraphql from 'postgraphql';

const connectionString = `User ID=guest;Password=123456789hayden&;Host=localhost;Port=5432;Database=stockdb;
Pooling=true;Min Pool Size=0;Max Pool Size=100;Connection Lifetime=0;`;

let app = express();

app.use(express.static("./public"));
app.use(postgraphql(connectionString));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000);