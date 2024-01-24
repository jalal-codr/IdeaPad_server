const express = require('express');
const router = express.Router();
const sayHello = require('../../Controllers/hello/hello');

router.get('/',sayHello);
module.exports= router;
