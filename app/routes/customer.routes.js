const { authJwt } = require("../middlewares");
const controller = require("../controllers/customer.controller");
const { verifySignUp } = require("../middlewares");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/customer/getcustomerlist", [authJwt.verifyToken], controller.list_all_customer);
  app.post("/api/customer/createcustomer", [verifySignUp.checkDuplicateCustomernameOrEmail], controller.create_customer);
  app.get("/api/customer/getcustomer/:customerId", [authJwt.verifyToken], controller.get_customer);
  app.post("/api/customer/updatecustomer", [authJwt.verifyToken], controller.update_customer);
  app.post("/api/customer/deletecustomer", [authJwt.verifyToken], controller.delete_customer);
};