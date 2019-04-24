const express = require ('express');
const app = express();
// const port = process.env.PORT || 3000;




app.get('/', (req, res) => 
  res.send('oh look, a new message')
);

// app.post('', (req, res) => 

// )




app.listen(3000, function () {
  console.log('Server started on port 3000, Everythings peachy')
});