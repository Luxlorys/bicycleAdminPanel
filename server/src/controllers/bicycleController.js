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
        res.status(400).json({ message: 'Internal Server Error', errorMessage: error})
    }
}

const getBicycleById = async (req, res) => {

}

const updateBicycle = async (req, res) => {

}

const deleteBicycle = async (req, res) => {

}


module.exports = {
    createBicycle,
    getBicycles
}