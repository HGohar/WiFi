

/* GET 'homelist' page */
module.exports.homelist = function(req,res){
		res.render("locations-list",{title:"Home page"}
		)}


/* GET 'locationInfo' page */		
module.exports.locationInfo = function(req,res){	
	res.render("index",{title:"locationInfo"}
	)}		

/* GET 'Add review' page */	
module.exports.addReview = function(req,res){
		res.render("index",{title:"addReview"}
		)}	