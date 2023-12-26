const Bicycle = require('../models/Bicycle');

const createBicycle = async (data) => {
    try {
        return Bicycle.create(data);
    } catch (error) {
        throw error;
    }
}

const updateBicycle = async (data) => {

}

const getBicycleById = async (id) => {
    try {
        const bicycle = await Bicycle.findById(id);

        if (!bicycle) {
            return new Error('element with this id is not found')
        }

        return bicycle;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
const getBicycles = async () => {
    try {
        return await Bicycle.find();
    } catch (error) {
        throw error;
    }
}
const deleteBicycleById = async (id) => {

}

module.exports = {
    createBicycle,
    getBicycles,
    getBicycleById,
}