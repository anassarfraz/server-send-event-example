var express = require('express');
var router = express.Router();
const eventConfig = require('../config/eventConfig');

let users = 0;

router.get('/', function(req, res, next) {
  res.send('user list');
});
//just simple post for test events
router.post('/', function(req, res, next) {
  ++users;
  res.send('user added');
  eventConfig.addEventEmitter.emit('userAdded',users);
});

//just simple delete for test events
router.delete('/', function(req, res, next) {
  users--;
  res.send('user deleted');
  eventConfig.deleteEventEmitter.emit('userDeleted',users);
});


module.exports = router;
