const { Router } = require("express");
const MenuRouter =require("./MenuRouter")


const router = Router();

router.use("/Menu", MenuRouter);

module.exports = router;
