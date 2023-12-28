import Bicycle from "../models/Bicycle.ts";
import {
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Heading, Stack,
    Text,
} from "@chakra-ui/react";
import ChangeBicycleStatusButton from "./ChangeBicycleStatusButton.tsx";
import DeleteBicycleButton from "./DeleteBicycleButton.tsx";

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
                    <ChangeBicycleStatusButton bicycle={bicycle}/>
                    <DeleteBicycleButton bicycle={bicycle} />
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}