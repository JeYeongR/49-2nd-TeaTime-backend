const express = require("express");
const { productRouter } = require("./productRouter");
const { cartRouter } = require("./cartRouter")
const router = express.Router();

router.use("/products", productRouter);
router.use("/cart", cartRouter)
module.exports = router;
