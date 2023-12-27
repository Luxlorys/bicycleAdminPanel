import {Box, Flex, Heading, Spacer} from "@chakra-ui/react";
import NewBicycleButton from "./NewBicycleButton.tsx";

export function Header() {
    return (
        <Flex m={7}>
            <Box>
                <Heading>Admin panel</Heading>
            </Box>
            <Spacer />
            <Box>
                <NewBicycleButton />
            </Box>
        </Flex>
    );
}