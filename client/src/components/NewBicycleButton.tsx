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

export default function NewBicycleButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [bicycleName, setBicycleName] = useState<string>("");
    const [bicycleType, setBicycleType] = useState<string>("");
    const [bicycleColor, setBicycleColor] = useState<string>("");
    const [bicyclePrice, setBicyclePrice] = useState<string>("");
    const [bicycleWheelSize, setBicycleWheelSize] = useState<string>("");
    const [bicycleDescription, setBicycleDescription] = useState<string>("");

    async function handleSaveButton() {

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

                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input onChange={(e) => setBicycleName(e.target.value)} placeholder='Bicycle name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Type</FormLabel>
                            <Input onChange={(e) => setBicycleType(e.target.value)} placeholder='Bicycle type' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Color</FormLabel>
                            <Input onChange={(e) => setBicycleColor(e.target.value)} placeholder='Bicycle color' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input onChange={(e) => setBicyclePrice(e.target.value)} placeholder='Bicycle price' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Wheel size</FormLabel>
                            <Select onChange={(e) => setBicycleWheelSize(e.target.value)} placeholder='Size'>
                                <option value='option1'>12</option>
                                <option value='option1'>16</option>
                                <option value='option1'>20</option>
                                <option value='option2'>24</option>
                                <option value='option3'>26</option>
                                <option value='option3'>27</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea onChange={(e) => setBicycleDescription(e.target.value)} placeholder='Description' size='sm' />
                        </FormControl>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' variant='outline' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose} variant='ghost'>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}