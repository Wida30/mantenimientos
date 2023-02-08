const express = require ('express');

const router = express.Router();

const {
    getAllStores, 
    createStore,
    getStorebyName,
    deleteStore

} = require('../controllers/store.controller')

router.get('/', getAllStores);
router.get('/nombre/:nombre', getStorebyName);

router.post('/', createStore);

router.delete('/:id', deleteStore)

module.exports = router;