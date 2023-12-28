import Bicycle from '../models/Bicycle.ts';
export default interface api {
    getAll(): Promise<Bicycle[]>,

    post(bicycle: Bicycle): Promise<Bicycle>,
    delete(bicycle: Bicycle): Promise<Bicycle>,

    changeStatus(bicycle: Bicycle): Promise<Bicycle>
}