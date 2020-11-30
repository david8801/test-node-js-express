var express = require('express');
var router = express.Router();
const { Sequelize, INTEGER, STRING, DOUBLE } = require("sequelize")


const sequelize = new Sequelize("data", "postgres", "070573", {
    dialect: "postgres",
    host: "localhost",
    logging: false
});

router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/test', async function (req, res, next) {
    const users = await sequelize.query("SELECT * FROM emp_data");
    console.log(users)
    if (req.body.x && req.body.y) {
        let response = req.body.x + req.body.y
        res.send({result: response})
    } else {
      res.status(400).send('Something broke!')
    }
});

module.exports = router;
