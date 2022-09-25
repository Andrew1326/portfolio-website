import { NextPage } from "next";
import { Box } from '@mantine/core'
import Head from "next/head";
import AboutSection from "../components/AboutSection";

export interface ISection {
    title: string;
    text: string;
}

const About: NextPage = (): JSX.Element => {

    //* sections
    const sections: ISection[] = [
        {
            title: 'Little about me',
            text: 'I&apos;m frontend developer with big experience. My english level is B1. I have experience in working on real commercial projects. While working i also use modern technologies. I like creating websites, because it&apos;s ability to apply something new. I have big experience with frontend technologies.'
        },
        {
            title: 'About choice',
            text: 'When i hadn&apos;t knowledge in programming i had big question: &quot;What direction i should choose?&quot; - it&apos;s most difficult question when your are starting something new. I was watching videos about many directions and i have stopped in frontend. I decided to start learning this. I was learning many technologies on PASV courses. On my mind, it&apos;s good courses, because we practiced a lot on real projects. After this courses i had good knowledge of html, css, js + frameworks and libraries. When you&apos;re frontend developer, you can create coloured, interactive websites and apps, i think it&apos;s very cool.'
        }
    ]

    return (
        <Box>
            <Head>
                <title>About</title>
            </Head>
            {
                sections.map((el, i) => <AboutSection key={i} {...el} />)
            }
        </Box>
    )
}

export default About