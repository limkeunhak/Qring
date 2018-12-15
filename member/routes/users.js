const express = require('express');
const router = express.Router();
let mysqlDB = require('../utils/qring_db');
mysqlDB.connect();

/* GET user info. by user key & platform*/
router.get('/', function(req, res, next) {
  let userKey = req.query.userKey;
//  let userPlatform = req.query.userPlatform;
  
  if (!userKey) {
    res.status(400).json({ resultCode: 400, resultState:'You should check parameters'});
    return;
  }
  let queryString = 'select * from qring_user_tbl where user_key = "' + userKey + '"';
  mysqlDB.query(queryString, function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

/* POST new Qring user */
router.post('/', function(req, res, next) {
  console.log(req.body);
  let userKey = req.body.userKey;
  let userPlatform = req.body.userPlatform;
  let registDate = req.body.date;
  let state = req.body.state;

  // TODO: Check whether this user aleady exist or not

  let queryString = `insert into qring_user_tbl (user_key, state, user_platform, date) values (\'${userKey}\', \'${state}\', \'${userPlatform}\', \'${registDate}\')`;
  console.log(queryString);
  mysqlDB.query(queryString, function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

/* DELETE user info. */
router.delete('/', function(req, res, next) {
  let userKey = req.body.userKey;

  // TODO: Check whether this user aleady exist or not

  let queryString = "delete from qring_user_tbl where user_key = '" + userKey + "'";
  mysqlDB.query(queryString, function (err, rows, fields) {
    if (!err) {
      res.status(200).json(rows);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
