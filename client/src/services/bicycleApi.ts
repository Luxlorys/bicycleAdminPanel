import api from "./apiInterface.ts";
import Bicycle from "../models/Bicycle.ts";

export default class BicycleApi implements api {

    async post(bicycle: Bicycle): Promise<Bicycle> {
        try {
            const response = await fetch("http://localhost:3001/api/bicycles/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bicycle)
            });
            const data = await response.json();
            console.log('Data successfully sent:', data);
            return data;
        } catch (error) {
            console.error('Error handling POST', error);
            throw error;
        }
    }

    async getAll(): Promise<Bicycle[]> {
        try {
            const response = await fetch('http://localhost:3001/api/bicycles');

            if (!response.ok) {
                console.error(`GET request failed with status ${response.status}`);
                throw new Error(`GET request failed with status: ${response.status}`);
            }

            const data = await response.json();

            if (!Array.isArray(data)) {
                console.error('GET request did not return an array:', data);
                throw new Error('GET request did not return an array');
            }

            console.log(data);

            return data;
        } catch (error) {
            console.error('Error handling GET', error);
            throw error;
        }
    }


    getById(): Promise<Bicycle> {
        return Promise.resolve(undefined);
    }

    async delete(bicycle: Bicycle): Promise<Bicycle> {
        try {
            const response = await fetch(`http://localhost:3001/api/bicycles/${bicycle._id}/delete`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                console.error(`DELETE request failed with status ${response.status}`);
                throw new Error(`DELETE request failed with status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Failed to delete bicycle', error);
            throw error;
        }
    }


}