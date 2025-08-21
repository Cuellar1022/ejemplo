const express = require('express');
const app = express();

app.use(express.static(__dirname));


/*/app.get('/', (req, res) => {
    res.send('Esto es una prueba de funcionamiento Emily Solanyi y Andrés Cuellar');
});

app.get('/about', (req, res) => {
    res.send('Esta seccion hablara sobre mi: Digite su nombre');
});

app.get('/products', (req, res) => {
    res.send(`
        <h1>producto de permumes </h1>
        <img src="/imagenes/995817-800-800.webp" alt="Imagen principal" />
    `);
});


app.get('/categories', (req, res) => {
    res.send('Esta seccion hablara sobre mi: Categorias');
});

app.get('/services', (req, res) => {
    res.send(`
        <h1> Servicios </h1>
        <img src="/imagenes/Pagina_en_construccion.jpg" alt="Imagen principal" />
    `);
});
app

app.get('/contact_us', (req, res) => {
    res.send(`
        <h1> Contactanos </h1>
        <img src="/imagenes/formulario-de-contacto-empresarial_x.png" alt="Imagen principal" />
    `);
});

app.get('/locate_us', (req, res) => {
    res.send('<h1> ubicanos en Bogotá D.C.</h1>');
});*/

app.use(express.static('public'));

app.listen(5000, () => {
    console.log('Servidor on port 5000')
});

