import { NextPage } from "next";
import Head from "next/head";
import { Container, Center, Title, TextInput, Stack, Button, Box, PasswordInput } from "@mantine/core";
import { useGlobalStyles } from "../styles/globalStyles";
import { useForm } from "@mantine/form"
import useUserStore from "../stores/userStore";
import { useRouter } from "next/router";

interface IFormValues {
    name: string;
    password: string;
}

const Login: NextPage = (): JSX.Element => {

    const router = useRouter()

    const { classes: globalClasses } = useGlobalStyles()

    //* from store
    const login = useUserStore(state => state.login)

    //* form
    const form = useForm<IFormValues>({
        initialValues: {
            name: '',
            password: ''
        }
    })

    //* submit
    const submit = (values: IFormValues): void => {
        login(values.name, values.password)
        router.push('/projects')
    }

    return (
        <Container fluid py='5%'>
            <Head>
                <title>Admin</title>
            </Head>
            <Center data-aos='fade-up'>
                <Title order={3} className={globalClasses.h3}>Admin login</Title>
            </Center>
            <Box sx={{ maxWidth: 500 }} mx="auto">
            <form onSubmit={form.onSubmit(submit)}>
                <Stack spacing='md'>
                <TextInput 
                size='md'
                label='Name'
                placeholder='Enter name...'
                {...form.getInputProps('name')}
                />
                <PasswordInput 
                size='md'
                label='Password'
                placeholder='Enter password...'
                {...form.getInputProps('password')}
                />
                <Button size='md' mt='4%' type="submit">Submit</Button>
                </Stack>
            </form>
            </Box>
        </Container>
    )
}

export default Login