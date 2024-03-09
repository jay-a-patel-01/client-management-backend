const Client = require("../models/user.model");
var bcrypt = require("bcryptjs");

exports.list_all_client = function (req, res) {
  Client.find({role:'client'}, function (err, client) {
    if (err)
    res.send({ error: err});
    res.json(client);
  });
};

exports.create_client = function (req, res) {

  let clientdata = req.body;
  clientdata.role = 'client';
  clientdata.password = bcrypt.hashSync(clientdata.password, 8)
  var new_client = new Client(clientdata);
  new_client.save(function (err, client) {
    if (err)
      res.send({ error: err});
    res.json({ message: 'client created successfully' });
  });
};


exports.get_client = function (req, res) {
  Client.findById(req.params.clientId, function (err, client) {
    if (err)
    res.send({ error: err});
    res.json(client);
  });
};

exports.update_client = function (req, res) {
  let clientdata = req.body;
  clientdata.password = bcrypt.hashSync(clientdata.password, 8)
  Client.findOneAndUpdate({ _id: clientdata._id },  clientdata , { new: true }, function (err, client) {
    if (err)
    res.send({ error: err});
    res.json({ message: 'client updated successfully' });
  });
};


exports.delete_client = function (req, res) {
  let clientId = req.body.clientid;
  Client.deleteOne({
    _id: clientId
  }, function (err, client) {
    if (err)
    res.send({ error: err});
    res.json({ message: 'client deleted successfully' });
  });
};
