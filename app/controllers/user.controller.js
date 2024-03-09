const db = require("../models");
const User = db.user;
 
exports.read_a_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    }); 

  };

  
