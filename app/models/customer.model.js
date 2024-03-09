const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    customerName: {
      type: String,
      required: 'Kindly enter name of the client'
    },
    email: {
      type: String,
      required: 'Kindly enter email'
    },
   
    mobileNumber: {
      type: Number,
      required: 'Kindly enter mobile number'
    },
    countryId:{
      type:String,
      //required: 'Kindly enter country'
    },
    stateId:{
      type:String,
     // required: 'Kindly enter state'
    },
    cityId:{
      type:String,
     // required: 'Kindly enter city'
    },
  })
);

module.exports = Customer;