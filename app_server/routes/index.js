var express = require('express');
var router = express.Router();
var CtrlMain = require("../controllers/main")



/* GET home page. */
router.get('/', CtrlMain.index);

module.exports = router;
