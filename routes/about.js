var express = require('express');
var router = express.Router();

// GET /user/about
router.get('/about', function(req, res, next){
    res.render('about', {tec: "ITGAM"})
  })
  
  module.exports = router;