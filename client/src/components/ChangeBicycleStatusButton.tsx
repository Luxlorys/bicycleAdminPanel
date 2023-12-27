import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay, Radio, RadioGroup, Stack,
    useDisclosure
} from "@chakra-ui/react";

interface StatusProps {
    status: String
}

export default function ChangeBicycleStatusButton({status}: StatusProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button colorScheme='teal' variant='outline' onClick={onOpen}>{status}</Button>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change book status</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <RadioGroup>
                            <Stack spacing={5} direction='row'>

                                <Radio colorScheme='green' value='1'>
                                    Available
                                </Radio>

                                <Radio colorScheme='green' value='2'>
                                    Busy
                                </Radio>

                                <Radio colorScheme='green' value='3'>
                                    Unavailable
                                </Radio>
                            </Stack>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' variant='outline' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}