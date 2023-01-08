const express = require('express');
const app = express();

const db =  require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'mayapik',
        password: 'nthvnthv1',
        database: 'Hollywood',
        port: 5432
    }
});
app.set("db", db);
app.get('/', (req, res) => {
    db('disneyAPI')
        .insert({ first_name: 'Gal', last_name: 'Gadot', age: '1985-04-30', number_oscars: 0 }, ['*'])
        .then(actors =>
            res.send(actors)
        )
})

app.get('/', (req, res) => {
    db
    .select('first_name', 'last_name').from('actors')
    .then(actors =>
            res.send(actors)
    )

})

app.listen(3005, () => console.log('Example app listening on port 3005!'));