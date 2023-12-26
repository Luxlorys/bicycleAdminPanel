const bicycleService = require('../services/biceclyService');

const createBicycle = async (req, res) => {
    try {
        const data = await req.body;
        const create = await bicycleService.createBicycle(data);
        res.status(200).json(create);
    } catch (error) {
        res.status(400).json({ message: 'Internal Server Error', errorMessage: error})
    }
}

const getBicycles = async (req, res) => {
    try {
        const data = await bicycleService.getBicycles();
        res.json({ bicycles: data })

    } catch (error) {
        res.status(400).json({ message: 'Internal Server Error', errorMessage: error.message })
    }
}

const getBicycleById = async (req, res) => {
    try {
        const bicycleId = req.params.id; // Extract the bicycle ID from route parameters
        const bicycle = await bicycleService.getBicycleById(bicycleId);
        res.json({ bicycle: bicycle });
    } catch (error) {
        res.status(400).json({ message: 'Internal Server Error', errorMessage: error.message });
    }
};

module.exports = getBicycleById;


const updateBicycle = async (req, res) => {

}

const deleteBicycle = async (req, res) => {

}


module.exports = {
    createBicycle,
    getBicycles,
    getBicycleById
}