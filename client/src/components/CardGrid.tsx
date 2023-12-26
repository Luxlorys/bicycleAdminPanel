import {SimpleGrid} from "@chakra-ui/react";
import BicycleCard from "./BicycleCard.tsx";
import Bicycle from "../models/Bicycle.ts";

export default function CardGrid () {
    const bc: Bicycle = {
        name: 'bike 3000',
        type: 'city',
        color: 'black',
        price: 12000,
        wheel_size: 16,
        description: 'masjaufuj asdujasud aksufafs',
        status: 'busy',
    }
    return (
        <SimpleGrid m={10} spacing={10} templateColumns='repeat(auto-fill, minmax(250px, 1fr))'>
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
            <BicycleCard bicycle={bc} />
        </SimpleGrid>
    );
}