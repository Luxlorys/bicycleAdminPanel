const { Router } = require('express');
const bicycleController  = require('../controllers/bicycleController');

const router = Router();

router.post('/api/bicycles/create', bicycleController.createBicycle);
router.get('/api/bicycles', bicycleController.getBicycles);
router.get('/api/bicycles/:id', bicycleController.getBicycleById);
router.delete('/api/bicycles/:id/delete', bicycleController.deleteBicycle);
router.put('/api/bicycles/:id', bicycleController.updateBicycle);

module.exports = router;