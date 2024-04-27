const { Router } = require("express");
const MenuRouter = require("./MenuRouter");
const CategoryRouter = require("./categoyRoute");  

const router = Router();

router.use("/menu", MenuRouter);
router.use("/category", CategoryRouter);

module.exports = router;

