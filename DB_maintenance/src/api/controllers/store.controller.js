
const Store = require('../models/store.model');

const getAllStores = async (req, res, next) => {
    try {
        const allStores = await Store.find().populate("maintenances")
        return res.json({
            status: 200,
            message: 'Stores OK',
            stores: allStores,
        })
    } catch (error) {
        return next(error);
        
    }
};

const createStore = async (req, res, next) => {
    try {
        const newStore = new Store(req.body);
        const createdStore = await newStore.save();
        return res.json({
            status : 201,
            message: 'Store created',
            store: createdStore
        })
    } catch (error) {
        
    }
};

const getStorebyName = async (req, res, next) => {
    
    try {
        const {nombre} =req.params
        const getStorebyName = await Store.findOne({nombre: nombre});
        return res.status(200).json(getStorebyName)
    } catch (error) {
        return next(error);
        
    }
};



const deleteStore = async (req, res, next) => {
    try {
        const {id} = req.params;
        const borrarStore = await Store.findByIdAndDelete(id);
        return res.status(200).json(borrarStore)
    } catch (error) {
        return next(error)
    }
};




module.exports = {getAllStores, createStore, getStorebyName, deleteStore}