import {Header} from "./components/Header.tsx";
import {Box} from "@chakra-ui/react";
import CardGrid from "./components/CardGrid.tsx";

export default function App() {
    return (
        <Box>
            <Header />
            <CardGrid />
        </Box>
    );
}