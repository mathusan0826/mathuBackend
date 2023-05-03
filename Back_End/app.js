const express = require("express");
const app = express()
const cors = require("cors");
const Bodyparser=require('body-parser');
const routes = require('./routes/orderRoute');
const routesProduct = require('./routes/productItemsRoute');
const routesPerson = require('./routes/addPersonRoute');

const port = 5000;


require('./db');
var corsOptions = {
    origin: "http://localhost:4200"
  };
  app.use(cors(corsOptions));

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
app.use(cors(corsOptions))

app.use(express.json());
app.use('/api/order', routes);
 app.use('/api/addPerson',routesPerson);
 app.use('/api/product',routesProduct);
        
const listener = app.listen(process.env.PORT || 5000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})