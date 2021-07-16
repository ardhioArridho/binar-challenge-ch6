const express = require('express');
const app = express();
const port = 3000;

// buat parsing json
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//  handling error 404 & 500
app.use((req,res,next) => {
    res.status(404).send('--------------RESOURCE CANNOT BE FOUND--------------')
});

app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('-------------THERE IS AN INTERNAL ERROR-------------')
});

// buat set view ke ejs
app.use(express.static(__dirname)); // buat ngeset css di file ejs
app.set('view engine', 'ejs');
app.set('views', './views');

// routers section
const routes = require('./routers/routes');
// app.use(routes);

// include cors
const cors = require('cors');
app.use(cors());




// listen to port
app.listen(port, () => {
    console.log(`>>>>>>>>>>>>>>>> SERVER IS LISTENING TO PORT ${port} >>>>>>>>>>>>>>>>>`)
});