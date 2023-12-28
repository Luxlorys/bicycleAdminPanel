import {
    Button, FormControl, FormLabel, Input,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select, Textarea,
    useDisclosure, useToast
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState} from "react";
import Bicycle from "../models/Bicycle.ts";
import BicycleApi from "../services/bicycleApi.ts";


const inputValidator = (bicycle: Bicycle) => {
    return (
        !bicycle.name || bicycle.name.length < 5 ||
        !bicycle.type || bicycle.type.length < 5 ||
        !bicycle.wheel_size ||
        !bicycle.color || bicycle.color.length < 5 ||
        !bicycle.description || bicycle.description.length < 5 ||
        !bicycle.price
    );
};

export default function NewBicycleButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [bicycleName, setBicycleName] = useState<string>("");
    const [bicycleType, setBicycleType] = useState<string>("");
    const [bicycleColor, setBicycleColor] = useState<string>("");
    const [bicyclePrice, setBicyclePrice] = useState<string>("");
    const [bicycleWheelSize, setBicycleWheelSize] = useState<string>("");
    const [bicycleDescription, setBicycleDescription] = useState<string>("");

    const api = new BicycleApi();
    const toast = useToast();

    async function handleSaveButton() {
        try {
            const priceAsNumber = parseFloat(bicyclePrice);

            if (!isFinite(priceAsNumber) || isNaN(priceAsNumber) || priceAsNumber <= 0) {
                toast({
                    title: "Invalid Price",
                    description: "Please enter a valid numeric price.",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                return;
            }

            const bicycle: Bicycle = {
                name: bicycleName,
                color: bicycleColor,
                description: bicycleDescription,
                price: bicyclePrice,
                type: bicycleType,
                wheel_size: bicycleWheelSize,
            };

            if (inputValidator(bicycle)) {
                toast({
                    title: "Fill all fields",
                    description: "Text fields should be at least 5 characters",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
                return; // Stop execution if validation fails
            }

            console.log(bicycle);
            await api.post(bicycle);
            console.log('saved');
            toast({
                title: "Saved successfully",
                status: "success",
                onCloseComplete: () => {
                    window.location.reload();
                },
            });
        } catch (error) {
            toast({
                title: 'Failed saving the bicycle',
                status: "error",
                onCloseComplete: () => {
                    window.location.reload();
                },
            });
            console.log(error);
        }
    }


    return (
        <>
            <Button
                onClick={onOpen}
                variant='ghost'
                colorScheme='teal'
                leftIcon={<AddIcon />}
            >
                Open Modal
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add new bicycle</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input onChange={(e) => setBicycleName(e.target.value)} placeholder='Bicycle name' />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Type</FormLabel>
                            <Input onChange={(e) => setBicycleType(e.target.value)} placeholder='Bicycle type' />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Color</FormLabel>
                            <Input onChange={(e) => setBicycleColor(e.target.value)} placeholder='Bicycle color' />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input onChange={(e) => setBicyclePrice(e.target.value)} placeholder='Bicycle price' />
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Wheel size</FormLabel>
                            <Select onChange={(e) => setBicycleWheelSize(e.target.value)} placeholder='Select wheel size'>
                                <option value='12'>12</option>
                                <option value='16'>16</option>
                                <option value='20'>20</option>
                                <option value='24'>24</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                            </Select>
                        </FormControl>

                        <FormControl isRequired mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea onChange={(e) => setBicycleDescription(e.target.value)} placeholder='Description' size='sm' />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleSaveButton} colorScheme='teal' variant='outline' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose} variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
