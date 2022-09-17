import { Modal, Stack, TextInput, Textarea, Group, Button } from "@mantine/core"
import { useForm } from "@mantine/form";
import { Dispatch, SetStateAction } from "react"
import { IProject } from "../appTypes";
import useProjectsStore from "../stores/projectsStore";

interface IFormValues extends Omit<IProject, 'technologies'> { technologies: string; }

type TProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const EditModal = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* from store
    const projects = useProjectsStore(state => state.projects) as IProject[]
    const selectedProjectId = useProjectsStore(state => state.selectedProjectId) as number
    const editProject = useProjectsStore(state => state.editProject)

    const selectedProject = projects[selectedProjectId]

    //* handle close
    const handleClose = (): void => setIsOpen(false)

    //* form
    const form = useForm<IFormValues>({
        initialValues: {
            title: '',
            desc: '',
            technologies: '',
            githubUrl: '',
            appUrl: ''
        }
    })

    //* filter results
    const filterResults = (results: IFormValues): IProject => {
        results.technologies.split(', ')

        const projectArr = Object.entries(selectedProject)
        const resultsArr = Object.entries(results)

        const updatedProject = resultsArr.map((el, i) => el[1].length > 0 ? el : projectArr[i])

        return Object.fromEntries(updatedProject) as IProject
    }

    //* submit
    const submit = (values: IFormValues): void => {
        editProject({
            id: selectedProjectId,
            updatedProject: filterResults(values)
        })

        form.reset()
        setIsOpen(false)
    }

    return (
        <Modal title='Edit project' size='lg' opened={isOpen} onClose={handleClose}>
            <form onSubmit={form.onSubmit(submit)}>
            <Stack spacing='md'>
                <TextInput 
                type='text'
                size='md'
                label='Title'
                {...form.getInputProps('title')}
                />
                <Textarea 
                type='text'
                size='md'
                label='Description'
                {...form.getInputProps('desc')}
                />
                <TextInput 
                type='text'
                size='md'
                label='Technologies'
                {...form.getInputProps('technologies')}
                />
                <TextInput 
                type='url'
                size='md'
                label='github url'
                {...form.getInputProps('githubUrl')}
                />
                <TextInput 
                type='url'
                size='md'
                label='App url'
                {...form.getInputProps('appUrl')}
                />
            </Stack>
            <Group position='right' mt='4%'>
                <Button color='gray' onClick={handleClose}>cancel</Button>
                <Button type='submit' color='green'>save changes</Button>
            </Group>
            </form>
        </Modal>
    )
}

export default EditModal