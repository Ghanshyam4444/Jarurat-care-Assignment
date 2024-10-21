const express = require("express");
const router = express.Router();
const serviceController = require("../controllers/service-controller");
const signupschema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
router
  .route("/addservice")
  .post(validate(signupschema), serviceController.addservice);
router.route("/getAllServices").get(serviceController.getAllServices);
router.route("/delete/:id").delete(serviceController.deleteServiceById);
router.route("/getService/:id").get(serviceController.getServiceById);
router.route("/editService/:id").patch(serviceController.updateServiceById);

module.exports = router;
