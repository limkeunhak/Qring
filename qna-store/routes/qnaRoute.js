const express = require('express');
const router = express.Router();
let mysqlDB = require('../utils/qring_db');
mysqlDB.connect();

router.get('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.delete('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/answer', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', function(req, res, next) {
  mysqlDB.query("select * from qring_question_tbl order by question_id desc", function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.get('/question2', function(req, res, next) {
  mysqlDB.query("select * from qring_question_tbl q inner join qring_user_tbl u on q.user_key = u.user_key order by q.question_id desc", 
  function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.get('/question/:user_key', function(req, res, next) {
  mysqlDB.query(`select * from qring_question_tbl where user_key = '${req.params.user_key}'`, function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

router.post('/question', function(req, res, next) {
  let userKey = req.body.userKey;
  let registDate = "0000-00-00";
  let state = "ACTIVE";
  let text = req.body.text;
  let intent = "챗봇 인텐트"; // req.body.intent;
  let entity = "테스트 엔티티";

  let queryString = `insert into qring_question_tbl (user_key, text, intent, date, state) values ('${userKey}', '${text}', '${intent}', '${registDate}', '${state}')`;
  console.log(queryString);

  mysqlDB.query(queryString, function (err, rows, fields) {
    if (err) {
		console.log(err);
      res.status(400).json(err);
    } else {
		res.status(200).json(rows);
    }
  })
});

router.delete('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put('/question', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
