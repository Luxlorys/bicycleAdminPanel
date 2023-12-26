const Bicycle = require('../models/Bicycle');

const createBicycle = async (data) => {
    try {
        return Bicycle.create(data);
    } catch (error) {
        throw error;
    }
}

const updateBicycle = async () => {

}

const getBicycleById = async () => {}
const getBicycles = async () => {
    try {
        return await Bicycle.find();
    } catch (error) {
        throw error;
    }
}
const deleteBicycleById = async () => {

}

module.exports = {
    createBicycle,
    getBicycles,
}