import {Header} from "./components/Header.tsx";
import {Box} from "@chakra-ui/react";
import CardGrid from "./components/CardGrid.tsx";
import BicycleApi from "./services/bicycleApi.ts";

export default function App() {
    const bicycleApi = new BicycleApi();

    return (
        <Box>
            <Header />
            <CardGrid api={bicycleApi} />
        </Box>
    );
}