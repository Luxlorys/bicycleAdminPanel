const bicycleService = require('../services/biceclyService');

const createBicycle = async (req, res) => {
    try {
        const data = req.body;
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

const updateBicycle = async (req, res) => {
    try {
        const bicycleId = req.params.id;
        const payload = req.body; // Use req.body for the update payload

        const updatedBicycle = await bicycleService.updateBicycle(bicycleId, payload);

        if (updatedBicycle instanceof Error) {
            // Handle the case where the service returns an Error object
            res.status(404).json({ message: 'Bicycle not found', errorMessage: updatedBicycle.message });
        } else {
            // If the update is successful, send the updated bicycle in the response
            res.json({ bicycle: updatedBicycle });
        }
    } catch (error) {
        // Handle unexpected errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', errorMessage: error.message });
    }
};

module.exports = updateBicycle;


const deleteBicycle = async (req, res) => {
    try {
        const bicycleId = req.params.id; // Extract the bicycle ID from route parameters
        const deletedBicycle = await bicycleService.deleteBicycleById(bicycleId);
        res.json({ bicycle: deletedBicycle });
    } catch (error) {
        res.status(400).json({ message: 'Internal Server Error', errorMessage: error.message });
    }
}


module.exports = {
    createBicycle,
    getBicycles,
    getBicycleById,
    deleteBicycle,
    updateBicycle
}