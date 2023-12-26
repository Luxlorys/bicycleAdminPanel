const { Router } = require('express');
const bicycleController  = require('../controllers/bicycleController');

const router = Router();

router.post('/api/create-bicycle', bicycleController.createBicycle);
router.get('/api/bicycles', bicycleController.getBicycles);

module.exports = router;