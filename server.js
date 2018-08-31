import express from 'express';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => res.send('Yo!'));

app.listen(3305, () => {
    console.log('Server started on PORT 3305...');
});