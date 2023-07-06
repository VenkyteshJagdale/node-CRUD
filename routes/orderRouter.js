const orderController = require("../controllers/orderController");

const router = require("express").Router();

router.post("/addOrder", orderController.addOrder);
router.get("/me/allOrders", orderController.getAllOrders);
router.get("/:id", orderController.getSingleOrder);
router.put("/:id", orderController.updateOrder);

module.exports = router;
