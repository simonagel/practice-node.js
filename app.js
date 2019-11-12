const express = require('express');
const app = express();
const path = require('path');
//const members = require('./Members');
const logger = require('./middleware/logger');
const members = require('./routes/api/members');

//const app = require('http').createServer((req, res) => res.send('Hello world!'));





/* app.get('/', (req, res) => {
   // res.send('<h1>mi teknue ponekogas</h1>');
   res.sendFile(path.join(__dirname, 'public', 'index.html'))
}); */

// za da se izbegne za sekoj html da se kreira posebna ruta se koristi static
//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// app.use za middleware

/* http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
http://localhost:3000/images/bg.png
http://localhost:3000/hello.html */

/* const mmembers = [
{
  "id": 1,
  "name": "Nikola",
  "surname": "Stojkovski",
  "email": "nikola@gmail.com"
}, 

{
  "id": 2,
  "name": "Martin",
  "surname": "Martinovski",
  "email": "martin@gmail.com"
},

{
  "id": 3,
  "name": "Filip",
  "surname": "Filipovski",
  "email": "filip@gmail.com"
}
]; */



// init middlewear
app.use(logger);

//ovoj del e prefrlen vo routes/api/members.js kade se definiraat ruti
/*app.get('/api/members', (req, res) => {
  
  res.json(members);
});

// single member
app.get('/api/members/:id', (req,res) => {
  //res.send(req.params.id);
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  }else{
    
    res.status(400).json({msg: `member with id of ${req.params.id} does not exist`});
  }
  
}); */

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', members);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}`);
  
});