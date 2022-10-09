import { Modal, Stack, TextInput, Textarea, Group, Button } from "@mantine/core"
import { useForm } from "@mantine/form";
import { ObjectId, WithId } from "mongodb";
import { Dispatch, SetStateAction } from "react"
import { IProject } from "../appTypes";
import useProjectsStore from "../stores/projectsStore";

interface IFormValues extends Omit<IProject, 'technologies'> { technologies: string | string[]; }

type TProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    setProjectsUpdateNeeded: (value: SetStateAction<boolean>) => void
}

const EditModal = ({isOpen, setIsOpen, setProjectsUpdateNeeded}: TProps): JSX.Element => {

    //* from store
    const projects = useProjectsStore(state => state.projects) as WithId<IProject>[]
    const selectedProjectId = useProjectsStore(state => state.selectedProjectId) as ObjectId
    const updateProject = useProjectsStore(state => state.updateProject)

    const selectedProject = projects.filter(el => el._id === selectedProjectId)[0]

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
    const filterResults = (results: IFormValues): Partial<IProject> => {
        const filtered: Partial<IFormValues> = Object.fromEntries(Object.entries(results).filter(el => !!el[1]))
        
        if (filtered.technologies) {
            const technologies = filtered.technologies as string
            filtered.technologies = technologies.split(',')
        }

        return filtered as Partial<IProject>
    }

    //* submit
    const submit = async (values: IFormValues): Promise<void> => {
        const updatedFields = filterResults(values)

        const resStatus = await updateProject(updatedFields, selectedProject._id)
        if (resStatus && resStatus < 300) setProjectsUpdateNeeded(true)

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