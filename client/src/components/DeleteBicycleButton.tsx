import Bicycle from "../models/Bicycle.ts";
import {Button, useToast} from "@chakra-ui/react";
import BicycleApi from "../services/bicycleApi.ts";
import {useState} from "react";

interface BicycleProps {
    bicycle: Bicycle;
}

export default function DeleteBicycleButton({ bicycle }: BicycleProps) {
    const [isDeleting, setIsDeleting] = useState(false);
    const toast = useToast();
    async function handleDeleteButton() {
        try {
            setIsDeleting(true);
            const api = new BicycleApi();
            await api.delete(bicycle);
            console.log('Deleted');

            toast({
                title: "Deleted successfully",
                status: "success",
                onCloseComplete: () => {
                    window.location.reload();
                },
            });
        } catch (error) {
            console.error('Failed to delete bicycle', error);
        }
    }

    return (
        <Button
            onClick={handleDeleteButton}
            colorScheme='red'
            variant='ghost'
            isDisabled={isDeleting}
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
    );
}

