const exoress = require('express');

const app = exoress();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) =>{
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(PORT, () =>{
    console.log(`Server Is Listening on PORT=${PORT}`)
});