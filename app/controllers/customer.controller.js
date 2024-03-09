const Customer = require("../models/customer.model");
var bcrypt = require("bcryptjs");

exports.list_all_customer = function (req, res) {
  Customer.find({}, function (err, customer) {
    if (err)
    res.send({ error: err});
    res.json(customer);
  });
};

exports.create_customer = function (req, res) {

  let customerdata = req.body;
  var new_customer = new Customer(customerdata);
  new_customer.save(function (err, customer) {
    if (err)
      res.send({ error: err});
    res.json({ message: 'customer created successfully' });
  });
};


exports.get_customer = function (req, res) {
  Customer.findById(req.params.customerId, function (err, customer) {
    if (err)
    res.send({ error: err});
    res.json(customer);
  });
};

exports.update_customer = function (req, res) {
  let customerdata = req.body;
  Customer.findOneAndUpdate({ _id: customerdata._id },  customerdata , { new: true }, function (err, customer) {
    if (err)
    res.send({ error: err});
    res.json({ message: 'customer updated successfully' });
  });
};


exports.delete_customer = function (req, res) {
  let customerId = req.body.customerid;
  Customer.deleteOne({
    _id: customerId
  }, function (err, customer) {
    if (err)
    res.send({ error: err});
    res.json({ message: 'customer deleted successfully' });
  });
};
