const Maintenance = require('../models/maintenance.model')

const getAllMaintenances = async (req, res, next) => {
    try {
  
      const allMaintenance = await Maintenance.find()
      return res.json({
        status: 200,
        message: "Maintenances OK",
        maintenances: allMaintenance,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createMaintenance = async (req, res, next) => {
    try {
      const newMaintenance = new Maintenance(req.body);
      const createdMaintenance = await newMaintenance.save();
      return res.json({
        status: 201,
        message: "Maintenance created",
        mamintenance: createdMaintenance,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getMaintenancebyId = async (req, res) => {
    
    try {
      const id = req.params._id
      const getMaintenancebyId = await Maintenance.findById(id);
      return res.status(200).json(getMaintenancebyId);
    } catch (error) {
      return res.status(500).json(error);
      
    }
  };

 

  const deleteMaintenance = async (req, res, next) => {
   try {
    const id = req.params.id;
    const borrarMantenimiento = await Maintenance.findByIdAndDelete(id);
    return res.status(200).json(borrarMantenimiento)
   } catch (error) {
    return next (error)
    
   }
  };

  const patchMaintenance = async(req, res, next) => {
    try {
      const {id} = req.params;
      const patchMaintenance = new Maintenance(req.body);
      patchMaintenance._id = id;
      
      const  maintenanceDB = await Maintenance.findByIdAndUpdate(id, patchMaintenance);
      return res.status(200).json({nuevo: patchMaintenance, viejo: maintenanceDB})
    } catch (error) {
      return next(error)
      
    }
  };

  

  module.exports = { getAllMaintenances, createMaintenance, getMaintenancebyId, deleteMaintenance, patchMaintenance };