import Bicycle from '../models/Bicycle.ts';
export default interface api {
    get(): Promise<Bicycle[]>,
    post(bicycle: Bicycle): Promise<void>,
}