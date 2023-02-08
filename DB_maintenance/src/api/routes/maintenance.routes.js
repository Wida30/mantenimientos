const express = require("express");

const router = express.Router();

const {
    
    createMaintenance, 
    getAllMaintenances,
    getMaintenancebyId,
    deleteMaintenance,
    patchMaintenance
} = require('../controllers/maintenane.controller')


router.get("/", getAllMaintenances);
router.get("/:id", getMaintenancebyId)

router.post("/", createMaintenance);

router.delete("/:id", deleteMaintenance)

router.patch("/id", patchMaintenance)

module.exports = router;