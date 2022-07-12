const router = require("express").Router();

const allRoutes = require("./routes");
router.use("/", allRoutes);
module.exports = router;
