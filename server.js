const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config/config');
const db = require('./config/db.config');

/**
 * Init Local Variables
 */
module.exports.initLocalVariables = function (app) {
  var server_uri =  (process.env.NODE_ENV === 'secure' ? 'https://' : 'http://') + config.host + ':' + config.port;
  const corsOptions = {
    origin: server_uri,
    optionsSuccessStatus: 200
  }
   
  app.use(cors(corsOptions));
}

/**
 * Init View Engine
 */
module.exports.initViewEngine = function (app) {
  app.use(express.static(path.join(__dirname, 'dist/Test-Project')));
  app.use('/', express.static(path.join(__dirname, 'dist/Test-Project')));
}

/**
 * Seed
 */
module.exports.seed = function () {
 
  let users = [
    {
      name: "Jack",
      surname: "Thomas",
      birthday: '2018.03.29',
      info: 'Perfect guy'
    },
    {
      name: "Andrey",
      surname: "Iniesta",
      birthday: '2018.04.10',
      info: 'Cool guy'
    },
  ]
 
  // Init data -> save to MySQL
  const User = db.users;
  for (let i = 0; i < users.length; i++) { 
    User.create(users[i]);  
  }
}

/**
 * Init Middleware
 */
module.exports.initMiddleware = function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }));
}

/**
 * Create Http Server
 */
module.exports.initServer = function (app) {
  // force: true will drop the table if it already exists
  db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
    
    // Create a Server
    var server = app.listen(config.port, function () {
      console.log(server.address());
      let host = server.address().address;
      let port = server.address().port;
    
      console.log(`App listening at http://${host}:${port}`);
    });

    this.seed();
  });
}

/**
 * Configure the modules server routes
 */
module.exports.initModulesServerRoutes = function (app) {
  // Globbing routing files
  require('./app/route/user.route.js')(app);
};

module.exports.init = function () {
  var app = express();
  this.initLocalVariables(app);
  this.initViewEngine(app);
  this.initMiddleware(app);
  this.initServer(app);
  this.initModulesServerRoutes(app);
}

this.init();





 
