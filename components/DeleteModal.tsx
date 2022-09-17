import { Button, Center, Group, Modal, Text } from "@mantine/core"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import useProjectsStore from "../stores/projectsStore"

type TProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const DeleteModal = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* from store
    const deleteProject = useProjectsStore(state => state.deleteProject)
    const selectedProjectId = useProjectsStore(state => state.selectedProjectId) as number

    //* handle close
    const handleClose = (): void => setIsOpen(false)

    //* remove project
    const removeProject: MouseEventHandler<HTMLButtonElement> = () => {
        deleteProject(selectedProjectId)
        setIsOpen(false)
    }

    return (
        <Modal title='Delete project' size='md' opened={isOpen} onClose={handleClose}>
            <Center>
                <Text size='xl' weight='bold'>You wont be able to restore project</Text>
            </Center>
            <Group position='right' mt='4%'>
                <Button color='gray' onClick={handleClose}>cancel</Button>
                <Button type='submit' color='red' onClick={removeProject}>delete project</Button>
            </Group>
        </Modal>
    )
}

export default DeleteModal