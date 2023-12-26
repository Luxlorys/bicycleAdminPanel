import Bicycle from "../models/Bicycle.ts";
import {
    Button, ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading, Stack,
    Text,
} from "@chakra-ui/react";

interface BicycleCardProps {
    bicycle: Bicycle;
}

export default function BicycleCard({ bicycle }: BicycleCardProps) {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Stack mt='6' spacing='1'>
                    <Heading size='md'>{bicycle.name}</Heading>

                    <Text>
                        Description: {bicycle.description}
                    </Text>

                    <Text color='teal.600' fontSize='2xl'>
                        ${bicycle.price}
                    </Text>

                    <Text color='teal.600' fontSize='2xl'>
                        Color: {bicycle.color}
                    </Text>

                    <Text color='teal.600' fontSize='2xl'>
                        Type: {bicycle.type}
                    </Text>

                    <Text color='teal.600' fontSize='2xl'>
                        Wheel size: {bicycle.wheel_size}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='outline' colorScheme='teal'>
                        Status
                    </Button>
                    <Button variant='ghost' colorScheme='red'>
                        Delete
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}