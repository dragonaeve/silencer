const express = require('express')
const app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send('/')
});

app.get('/map', (req, res) => {
	res.send('/map')
});

app.get('/stats', (req, res) => {
	res.send('/stats')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});