import { Center, Container, Box, Title } from "@mantine/core";
import { NextPage } from "next";
import htmlSrc from '/public/html5.png'
import cssSrc from '/public/css3.png'
import jsSrc from '/public/js.png'
import tsSrc from '/public/ts.png'
import reactSrc from '/public/react.png'
import nextSrc from '/public/next.png'
import gitSrc from '/public/git.png'
import githubSrc from '/public/github.png'
import { useStyles } from "../styles/skillsStyles";
import { useGlobalStyles } from "../styles/globalStyles";
import { ITechnology } from "../appTypes";
import Head from "next/head";
import Technology from "../components/Technology";
import SoftSkill from "../components/SoftSkill";

const HardSkills: NextPage = (): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

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
                    technologies.map((el, i) => <Technology technology={el} key={i} />)
                }
            </Box>
            <Center>
                <Title sx={{ marginTop: '3%' }} className={globalClasses.h2}>Soft skills</Title>
            </Center>
            <Box className={classes.soft_skills_container}>
                {
                    softSkills.map((el, i) => <SoftSkill softSkill={el} index={i} key={i} />)
                }
            </Box>
        </Container>
    )
}

export default HardSkills