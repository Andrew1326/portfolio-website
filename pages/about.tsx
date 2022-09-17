import { NextPage } from "next";
import { Center, Container, Title, Text, Stack, Box } from '@mantine/core'
import { useGlobalStyles } from "../styles/globalStyles";
import { useStyles } from "../styles/aboutStyles";
import Head from "next/head";

const About: NextPage = (): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    return (
        <Container fluid>
            <Head>
                <title>About</title>
            </Head>
            <Box className={classes.info_container}>
            <Center><Title className={globalClasses.h2}>Little about me</Title></Center>
            <Stack>
            <Text className={globalClasses.text}>
            I'm frontend developer with big experience. My english level is B1. I have experience in working on real commercial projects. While working i also use modern technologies. I like creating websites, because it's ability to apply something new. I have big experience with frontend technologies.
            </Text>
            <Center>
            <Text className={globalClasses.text}>
            <q>On my mind no one can know everything and the best way it's don't stop learning</q>
            </Text>
            </Center>
            </Stack>
            </Box>
            <Box className={classes.info_container} sx={{ marginTop: '1%' }}>
            <Center><Title className={globalClasses.h2}>About direction</Title></Center>
            <Center className={globalClasses.text}>
            When i hadn't knowledge in programming i had big question: "What direction i should choose?" - it's most difficult question when your are starting something new. I was watching videos about many directions and i have stopped in frontend. I decided to start learning this. I was learning many technologies on PASV courses. On my mind, it's good courses, because we practiced a lot on real projects. After this courses i had good knowledge of html, css, js + frameworks and libraries. When you're frontend developer, you can create coloured, interactive websites and apps, i think it's very cool.
            </Center>
            </Box>
        </Container>
    )
}

export default About