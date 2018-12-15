let express = require('express');
let mysqlDB = require('../utils/qring_db');
mysqlDB.connect();
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/question", function(req, res, next) {
  mysqlDB.query("select * from qring_question_tbl", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.get("/answer", function(req, res, next) {
  mysqlDB.query("select * from qring_answer_tbl", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.get("/transaction", function(req, res, next) {
  mysqlDB.query("select * from qring_tx_history_tbl", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.get("/user", function(req, res, next) {
  mysqlDB.query("select * from qring_user_tbl", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
