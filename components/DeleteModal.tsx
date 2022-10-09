import { Button, Center, Group, Modal, Text } from "@mantine/core"
import { ObjectId } from "mongodb"
import { Dispatch, MouseEventHandler, SetStateAction } from "react"
import useProjectsStore from "../stores/projectsStore"

type TProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setProjectsUpdateNeeded: (value: SetStateAction<boolean>) => void
}

const DeleteModal = ({isOpen, setIsOpen, setProjectsUpdateNeeded}: TProps): JSX.Element => {

    //* from store
    const deleteProject = useProjectsStore(state => state.deleteProject)
    const selectedProjectId = useProjectsStore(state => state.selectedProjectId) as ObjectId

    //* handle close
    const handleClose = (): void => setIsOpen(false)

    //* remove project
    const removeProject: MouseEventHandler<HTMLButtonElement> = async () => {
        const resStatus = await deleteProject(selectedProjectId)
        if (resStatus && resStatus < 300) setProjectsUpdateNeeded(true)

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