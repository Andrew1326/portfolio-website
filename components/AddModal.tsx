import { Button, Group, Modal, Stack, Textarea, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { Dispatch, SetStateAction } from "react"
import { IProject } from "../appTypes";
import useProjectsStore from "../stores/projectsStore";

interface IFormValues extends Omit<IProject, 'technologies'> { technologies: string; }

type TProps = {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddModal = ({isOpen, setIsOpen}: TProps): JSX.Element => {

    //* form store
    const addProject = useProjectsStore(state => state.addProject)

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

    //* submit
    const submit = (values: IFormValues): void => {
        addProject({
            ...values,
            technologies: values.technologies.split(', ')
        })

        form.reset()
        setIsOpen(false)
    }

    return (
        <Modal title='Add project' size='lg' opened={isOpen} onClose={handleClose}>
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
                <Button type='submit' color='green'>add project</Button>
            </Group>
            </form>
        </Modal>
    )
}

export default AddModal