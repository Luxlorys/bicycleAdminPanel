import { SimpleGrid } from "@chakra-ui/react";
import BicycleCard from "./BicycleCard.tsx";
import Bicycle from "../models/Bicycle.ts";
import BicycleApi from "../services/bicycleApi.ts";
import { useEffect, useState } from "react";

interface BicycleApiProps {
    api: BicycleApi;
}

export default function CardGrid({ api }: BicycleApiProps) {
    const [bicycles, setBicycles] = useState<Bicycle[]>([]);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                const data = await api.getAll();

                if (isMounted) setBicycles(data);
                console.log(data);
            } catch (err) {
                console.log(err);
                throw err;
            }
        };

        fetchData();
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <SimpleGrid m={10} spacing={10} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
            {bicycles.map((bicycle) => (
                <BicycleCard key={bicycle._id} bicycle={bicycle} />
            ))}
        </SimpleGrid>
    );
}
