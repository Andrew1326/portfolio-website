import { Box, Title, Text, Button, Image } from "@mantine/core";
import { NextPage, GetStaticPropsResult } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { useStyles } from '../../styles/projectStyles'
import { useGlobalStyles } from "../../styles/globalStyles";
import ErrorAlert from "../../components/ErrorAlert";
import BackBtn from "../../components/BackBtn";
import { getContent, getContentGroup, groupsIds } from "../../helpers/contentful";
import { ProjectFields, Image as CImage } from "../../helpers/contentful/types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface IImage {
    url: string;
    alt: string;
}

interface IParams extends ParsedUrlQuery { [index: string]: string }

interface IPath { params: IParams }

type TGetStaticPathsRes = {
    paths: IPath[],
    fallback: false | true | 'blocking'
}

type TProps = { 
    project?: ProjectFields,
    error?: Error
}

const Project: NextPage<TProps> = ({ project, error }) => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* create carousel images
    const createCarouselImages = (images: CImage[]): IImage[] => {
        const fields = images.map(el => el.fields)
        const imagesArr = fields.map(el => ({ url: el.file.url, alt: el.title }))

        return imagesArr
    }

    return (
        <Box>
            <Head>
                <title>{project?.title}</title>
            </Head>
            <main className={classes.container}>
                {
                    project ? <>
                        <BackBtn />
                        <Title order={2} className={globalClasses.h2}>{project.title}</Title>
                        <Text className={globalClasses.text}>{project.description}</Text>
                        <Carousel interval={5000} infiniteLoop emulateTouch transitionTime={600} showArrows showThumbs={false}>
                            {
                                createCarouselImages(project.images).map((el, i) => <Image key={i} src={el.url} alt={el.alt} />)
                            }
                        </Carousel>
                        <Box className={classes.project_btns_container}>
                            <Button className={classes.project_btn} href={project.githubUrl} target='_blank' rel="noopener noreferrer" color='cyan' component='a'>view code</Button>
                            {
                                project.appUrl && <Button className={classes.project_btn} href={project.appUrl} target='_blank' rel="noopener noreferrer" color='teal' component='a'>view app</Button>
                            }
                        </Box>
                    </>
                    :
                    error && <ErrorAlert error={error} />
                }
            </main>
        </Box>
    )
}

//* static paths
export async function getStaticPaths(): Promise<TGetStaticPathsRes | undefined> {
    const projects = await getContentGroup<ProjectFields>(groupsIds.Project)
    
    if (projects) {
        const paths: IPath[] = projects.map(el => ({ params: { id: el.id } }))
        
        return {
            paths,
            fallback: false
        }
    }
}

//* static props
export async function getStaticProps(context: { params: IParams; }): Promise<GetStaticPropsResult<TProps>> {
    const { id } = context.params as IParams
    const project = await getContent<ProjectFields>(id)

    if (project) return {
        props: { project }
    }

    else return {
        props: {
            error: { 
                name: 'Data loading error', 
                message: 'Failed to load project' 
            }
        }
    }
}

export default Project