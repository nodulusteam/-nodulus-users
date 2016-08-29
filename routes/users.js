var express = require('@nodulus/core');
var router = express.Router();
var util = require('util');
var fs = require('fs');
var path = require('path');
 
var moment = require('moment');
var usermanager = require("../app/users").users;
router.post('/login', function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    var jsonVersion = "{}";
    var email = req.body.Email;
    var password = req.body.Password;
    usermanager.login(email, password, function (user) {
        res.json(user);
    });
});
router.post('/logout', function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    var jsonVersion = "{}";
    var email = req.body.Email;
    var password = req.body.Password;
});
router.post('/register', function (req, res) {
    if (!req.body)
        return res.sendStatus(400);
    var jsonVersion = "{}";
    var email = req.body.Email;
    var password = req.body.Password;
    usermanager.register(req.body, function (user) {
        res.json(user);
    });
});
module.exports = router;
