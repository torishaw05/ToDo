const express         = require('express');
const path            = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser      = require('body-parser');
const expressValidator = require('express-validator');
const routes          = require('./routes/index.js')
const app             = express();

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(expressValidator());

app.use(routes);

app.listen(8081, function(){
  console.log("We Mobbin Bobbin")
});
