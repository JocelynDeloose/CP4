const express = require("express");

const router = express.Router();

const classroleControllers = require("./controllers/classroleControllers");
const characterficheControllers = require("./controllers/characterficheControllers");

router.get("/class", classroleControllers.browse);
router.get("/class/:id", classroleControllers.read);
router.put("/class/:id", classroleControllers.edit);
router.post("/class", classroleControllers.add);
router.delete("/class/:id", classroleControllers.destroy);

router.get("/characterfiche", characterficheControllers.browse);
router.get("/characterfiche/:id", characterficheControllers.read);
router.put("/characterfiche/:id", characterficheControllers.edit);
router.post("/characterfiche", characterficheControllers.add);
router.delete("/characterfiche/:id", characterficheControllers.destroy);

module.exports = router;
