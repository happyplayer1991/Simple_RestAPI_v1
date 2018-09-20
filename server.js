const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

require('./app/route/user.route.js')(app);

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist/Test-Project')));
app.use('/', express.static(path.join(__dirname, 'dist/Test-Project')));

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
 
app.use(cors(corsOptions));
 
const db = require('./app/config/db.config.js');
  
function initial(){
 
  let users = [
    {
      firstname: "Joe",
      lastname: "Thomas",
      age: 36
    },
    {
      firstname: "Peter",
      lastname: "Smith",
      age: 18
    },
    {
      firstname: "Lauren",
      lastname: "Taylor",
      age: 31
    },
    {
      firstname: "Mary",
      lastname: "Taylor",
      age: 24
    },
    {
      firstname: "David",
      lastname: "Moore",
      age: 25
    },
    {
      firstname: "Holly",
      lastname: "Davies",
      age: 27
    },
    {
      firstname: "Michael",
      lastname: "Brown",
      age: 45
    }
  ]
 
  // Init data -> save to MySQL
  const User = db.users;
  for (let i = 0; i < users.length; i++) { 
    User.create(users[i]);  
  }
}

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
  
  // Create a Server
  var server = app.listen(4200, function () {
    console.log(server.address());
    let host = server.address().address;
    let port = server.address().port;
   
    console.log(`App listening at http://${host}:${port}`);
  });

  initial();
});
 

 
