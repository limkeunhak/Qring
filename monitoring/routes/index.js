let express = require('express');
let mysqlDB = require('./mysql-db');
mysqlDB.connect();
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/question", function(req, res, next) {
  mysqlDB.query("select * from qring_question_tbl", function (err, rows, fields) {
    if (!err) {
      console.log(rows);
      console.log(fields);
      var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
          'fields : ' + JSON.stringify(fields);
//      res.send(result);
      res.status(200).json([{ question_id:"!!", user_id:"!@@", text:"#D", intent:"DD", date:"ddd", state:"@31"}]);
    } else {
        console.log('query error : ' + err);
        res.send(err);
    }
  });
});

router.get("/answer", function(req, res, next) {
  res.status(200).json();
});

router.get("/transaction", function(req, res, next) {
  res.status(200).json();
});

router.get("/user", function(req, res, next) {
  res.status(200).json();
});

module.exports = router;
