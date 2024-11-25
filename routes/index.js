var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send(`
    <!doctype html>

    <body>
      <form action="/result">
        <label for="input">Enter number: </label>
        <input type="number" name="numberInput"></input>
        <input type="submit" value="OK"></input>
      </form>
    </body>
    

  `);
});

router.get('/result', function(req, res, next) {
  console.log(req);
  let addedNumber = Number(req.query.numberInput) * 2;
  // res.render('index', { title: 'Express' });
  res.send(`
    <!doctype html>

    <body>
      <p>The result is: ${addedNumber} </p>
    </body>
  `);
});

module.exports = router;
