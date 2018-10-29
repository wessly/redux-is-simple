var express = require('express');
var router = express.Router();

const users = require('./../db/users')

let loggedIds = []

router.get('/', function(req, res, next) {
  res.json({"Cant":"be here"})
});

router.post('/verify', function(req, res, next) {
  let verified
  for (let id of loggedIds) {
    if (id.toString() === req.body.id) { verified = true } else { verified = false }
  }
  res.json({ 'verified': verified || null })
})

router.post('/auth', function(req, res) {
  login(req.body.username, req.body.password)
  .then((data) => {
    if (data !== false) {
      res.json(data)
    } else {
      res.json({status: 0})
    }
  })
})

async function login(login_user, login_pass) {
  let found = false
  let generated_id, found_user, found_password, found_level
  for (let user of users) {
    if (login_user === user.username && login_pass === user.password) {
      found = true
      generated_id = Math.floor(Math.random() * 999999999999999999999) + 1
      found_user = user.username
      found_password = user.password
      found_level = user.authlevel
      loggedIds.push(generated_id.toString())
    }
  }
  if (found) return await {status: 1, info: { id: generated_id.toString(), username: found_user, authlevel: found_level }}
  return await false
}

module.exports = router;
