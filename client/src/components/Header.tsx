import {Box, Button, Flex, Heading, Spacer} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

export function Header() {
    return (
        <Flex m={7}>
            <Box>
                <Heading>Admin panel</Heading>
            </Box>
            <Spacer />
            <Box>
                <Button leftIcon={<AddIcon />} colorScheme='teal' variant='outline'>new bicycle</Button>
            </Box>
        </Flex>
    );
}