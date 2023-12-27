const Bicycle = require('../models/Bicycle');

const createBicycle = async (data) => {
    try {
        return Bicycle.create(data);
    } catch (error) {
        throw new Error(`failed to create bicycle: ${error.message}`);
    }
}

const updateBicycle = async (bicycleId, payload) => {
    try {
        const updatedBicycle = await Bicycle.findByIdAndUpdate(bicycleId, payload);

        if (!updatedBicycle) {
            return new Error('product not found');
        }
        return updatedBicycle;
    } catch (error) {
        throw new Error(`failed to update bicycle: ${error.message}`);
    }
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
        throw new Error(`failed to get by bicycles id: ${error.message}`);
    }
};
const getBicycles = async () => {
    try {
        return await Bicycle.find({});
    } catch (error) {
        throw new Error(`failed to get bicycle: ${error.message}`);
    }
}
const deleteBicycleById = async (id) => {
    try {
        return await Bicycle.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(`failed to delete bicycle: ${error.message}`);
    }
}

module.exports = {
    createBicycle,
    getBicycles,
    getBicycleById,
    deleteBicycleById,
    updateBicycle,
}