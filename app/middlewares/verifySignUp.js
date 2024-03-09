const db = require("../models");
const User = db.user;
const Customer = db.customer;

checkDuplicateUsernameOrEmail = (req, res, next) => {

  console.log('req',req);
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Failed!, Email is already in use!" });
      return;
    }

    next();
  });
};

checkDuplicateCustomernameOrEmail = (req, res, next) => {

  console.log('req',req);
  Customer.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(400).send({ message: "Failed!, Email is already in use!" });
      return;
    }
    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkDuplicateCustomernameOrEmail
  
};

module.exports = verifySignUp;