export default interface Bicycle {
    _id?: string;
    name: string;
    type: string;
    color: string;
    price: number;
    wheel_size: 12 | 16 | 20 | 24 | 26 | 27;
    description: string;
    status?: 'available' | 'busy' | 'unavailable';
}