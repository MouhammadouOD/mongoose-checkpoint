const router = require("express").Router();
const personController = require("../controllers/person.controller");

router.post("/add-user", personController.addPerson);
router.get("/all-users", personController.getAllPersons);

module.exports = router;
