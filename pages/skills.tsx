import { Center, Container, Box, Title, Text } from "@mantine/core";
import { NextPage } from "next";
import htmlSrc from '/public/html5.png'
import cssSrc from '/public/css3.png'
import jsSrc from '/public/js.png'
import tsSrc from '/public/ts.png'
import reactSrc from '/public/react.png'
import nextSrc from '/public/next.png'
import gitSrc from '/public/git.png'
import githubSrc from '/public/github.png'
import NextImage from 'next/image'
import { useStyles } from "../styles/skillsStyles";
import { useGlobalStyles } from "../styles/globalStyles";
import { useMediaQuery } from "@mantine/hooks";
import { ITechnology } from "../appTypes";
import Head from "next/head";

const HardSkills: NextPage = (): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* meadia queries
    const largerThan320 = useMediaQuery('(min-width: 320px)')
    const largerThan769 = useMediaQuery('(min-width: 769px)')
    
    const imageSize = (largerThan320 && !largerThan769) ? '80px' : '115px'

    //* technologies
    const technologies: ITechnology[] = [
        {name: 'HTML5', src: htmlSrc, duration: 500},
        {name: 'CSS3', src: cssSrc, duration: 700},
        {name: 'JavaScript', src: jsSrc, duration: 900},
        {name: 'TypeSript', src: tsSrc, duration: 1100},
        {name: 'React', src: reactSrc, duration: 1300},
        {name: 'Next', src: nextSrc, duration: 1500},
        {name: 'Git', src: gitSrc, duration: 1700},
        {name: 'GitHub', src: githubSrc, duration: 1900}
    ]

    //* skills
    const softSkills: string[] = ['creativity and willingness to learn', 'good communication', 'problem-solving', 'critical thinking', 'capacity to work under pressure', 'adaptability', 'self-teaching']

    return (
        <Container fluid>
            <Head>
                <title>Skills</title>
            </Head>
            <Center>
                <Title className={globalClasses.h2}>Most important technical skills</Title>
            </Center>
            <Box className={classes.technologies_container}>
                {
                    technologies.map((el, i) => <Box key={i} data-aos='fade-down-right' data-aos-duration={el.duration} className={classes.technology}>
                    <NextImage src={el.src} alt={el.name} width={imageSize} height={imageSize} />
                    <Text className={globalClasses.text} sx={{ textAlign: 'center' }}>{el.name}</Text>
                </Box>)
                }
            </Box>
            <Center><Title sx={{ marginTop: '3%' }} className={globalClasses.h2}>Soft skills</Title></Center>
            <Box className={classes.soft_skills_container}>
                {
                    softSkills.map((el, i) => <Box key={i} data-aos='zoom-in' data-aos-duration={(i * 400)} className={classes.soft_skill}>
                    <Text className={globalClasses.text}>{el}</Text>
                </Box>)
                }
            </Box>
        </Container>
    )
}

export default HardSkills