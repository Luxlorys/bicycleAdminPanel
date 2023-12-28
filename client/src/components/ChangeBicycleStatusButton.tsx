import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Select,
    useDisclosure, useToast
} from "@chakra-ui/react";
import Bicycle from "../models/Bicycle.ts";
import {useState} from "react";
import BicycleApi from "../services/bicycleApi.ts";

interface Props {
    bicycle: Bicycle
}

export default function ChangeBicycleStatusButton({ bicycle } : Props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [bicycleStatus, setStatus] = useState<string>('');
    const toast = useToast();
    const api = new BicycleApi();

    async function handleChangeStatus() {
        const changed: Bicycle = {
            _id: bicycle._id,
            name: bicycle.name,
            color: bicycle.color,
            description: bicycle.description,
            price: bicycle.price,
            type: bicycle.type,
            wheel_size: bicycle.wheel_size,
            status: bicycleStatus, // Corrected property name from 'status' to 'bicycleStatus'
        };

        try {
            await api.changeStatus(changed); // Assuming you have an 'updateBicycle' method in your BicycleApi service
            console.log('changed');
            toast({
                title: "Status changed successfully",
                status: "success",
                onCloseComplete: () => {
                    window.location.reload();
                },
            });
        } catch (error) {
            toast({
                title: 'Failed changing status',
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
            <Button colorScheme='teal' variant='outline' onClick={onOpen}>{bicycle.status}</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change book status</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Select onChange={(e) => setStatus(e.target.value)} placeholder='Select status'>
                            <option value='Available'>Available</option>
                            <option value='Busy'>Busy</option>
                            <option value='Unavailable'>Unavailable</option>
                        </Select>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={handleChangeStatus} colorScheme='teal' variant='outline' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}