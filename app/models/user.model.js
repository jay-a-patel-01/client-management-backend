const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    clientName: {
      type: String,
      required: 'Kindly enter name of the client'
    },
    email: {
      type: String,
      required: 'Kindly enter email'
    },
    subscription_start_date: {
      type: Date,
      required: 'Kindly enter subscription end date'
    },
    subscription_end_date: {
      type: Date,
      required: 'Kindly enter subscription end date'
    },
    mobileNumber: {
      type: Number,
      required: 'Kindly enter mobile number'
    },
    address:{
      type:String,
      required: 'Kindly enter address'
    },
    role:{
      default:'client',
      type:String,
    },
    password: {
      type: String,
      required: 'Kindly enter password'
    },
  })
);

module.exports = User;