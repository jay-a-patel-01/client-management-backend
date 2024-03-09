const { authJwt } = require("../middlewares");
const controller = require("../controllers/client.controller");
const { verifySignUp } = require("../middlewares");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/client/getclientlist", [authJwt.verifyToken], controller.list_all_client);
  app.post("/api/client/createclient", [authJwt.verifyToken],[verifySignUp.checkDuplicateUsernameOrEmail], controller.create_client);
  app.get("/api/client/getclient/:clientId", [authJwt.verifyToken], controller.get_client);
  app.post("/api/client/updateclient", [authJwt.verifyToken], controller.update_client);
  app.post("/api/client/deleteclient", [authJwt.verifyToken], controller.delete_client);
};