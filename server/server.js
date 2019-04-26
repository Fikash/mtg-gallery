const express = require ('express');
const app = express();

const bodyParser = require('body-parser');


// Mongo/Mongoose setup start 
//
//

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connect('mongodb://localhost/cardCollection', {useNewUrlParser: true});

mongoose.connection.once('open', (error, client) => {
  console.log('Connected with MongoDB: cardCollection');
});

const NewCardSchema = new Schema({
  id: String,
  cardName: String,
  releaseDate: String,
  artCropped: String,
  artCard: String,
  artist: String
})

const NewCard = mongoose.model('NewCard', NewCardSchema);

//
//
// Mongo/Mongoose setup end

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req, res) => 
  res.send('./bundle/index_bundle.js')
);

app.post('/saveCard', (req, res) => {
// console.log(req.body);  
let savedCard = new NewCard( req.body );
console.log(savedCard.cardName);
savedCard.save(function(err) {
  if (err) return console.error(err)})
res.end('done')
});




app.listen(3000, function () {
  console.log('Server started on port 3000, Everythings peachy')
});


module.exports = NewCard;