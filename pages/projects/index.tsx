import { Title, Box, Center } from "@mantine/core";
import { GetServerSideProps, NextPage } from "next";
import { useGlobalStyles } from "../../styles/globalStyles";
import { useStyles } from "../../styles/projectsStyles";
import Head from "next/head";
import ProjectCard from "../../components/ProjectCard";
import ErrorAlert from '../../components/ErrorAlert'
import { ProjectFields } from "../../helpers/contentful/types";
import { getContentGroup, groupsIds } from "../../helpers/contentful/index";

type TProps = { 
    projects?: ProjectFields[],
    error?: Error
}

const Projects: NextPage<TProps> = ({ projects, error }) => {
    
    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <main>
            <Center>
                <Title className={globalClasses.h2}>My projects</Title>
            </Center>
            <Box className={classes.projects_container}>
                {
                    projects ? projects.map(el => <ProjectCard key={el.id} project={el} />)
                    :
                    error && <ErrorAlert error={error} />
                }
            </Box>
            </main>
        </>
    )
}

//* server side props
export const getServerSideProps: GetServerSideProps<TProps> = async () => {
    const projects = await getContentGroup<ProjectFields>(groupsIds.Project)

    if (projects) return {
        props: { projects }
    }

    else return {
            props: {
                error: { 
                    name: 'Data loading error', 
                    message: 'Failed to load projects' 
                }
            }
        }

}

export default Projects