const express = require("express");
const medicineController = require("./../controllers/medicineController");

const router = express.Router();

router
    .route("/:userId")
    .get(medicineController.getAllMedicine)
    .post(medicineController.createMedicine);

router
    .route("/:userId/:id")
    .get(medicineController.getMedicine)
    .delete(medicineController.deleteMedicine)
    .patch(medicineController.updateMedicine);

module.exports = router;
