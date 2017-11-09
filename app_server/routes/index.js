var express = require('express');
var router = express.Router();
var CtrlLocations = require("../controllers/locations")
var CtrlOthers = require("../controllers/others")



/* GET Locations page. */
router.get('/', CtrlLocations.homelist);
router.get('/location', CtrlLocations.locationInfo);
router.get('/location/review/new', CtrlLocations.addReview);


/* GET Others page. */

router.get("/about", CtrlOthers.about)
module.exports = router;
