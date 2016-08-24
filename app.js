const Express = require('express');
let app = Express();
const port = 5000;

app.get('/', function(req, res) {
  res.json({message: "Hello from express!"});
})

app.get('/page2', function(req, res) {
  res.json({message: "I am page 2!!!!"});
})

app.listen(port, function() {
  console.log("Listening on port "+port);
});
