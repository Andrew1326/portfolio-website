import { Box, Button, Space, Text, Center, Card } from "@mantine/core";
import { useStyles } from "../styles/projectCardStyles";
import TechnologyBadge from "./TechnologyBadge";
import { ProjectFields } from "../helpers/contentful/types";
import { useRouter } from "next/router";

type TProps = { project: ProjectFields }

const ProjectCard = ({ project }: TProps): JSX.Element => {

    const { classes } = useStyles()

    const router = useRouter()

    return (
        <Card className={classes.project} m='xs' shadow="xl" p="lg" radius="md" withBorder>
            <Box className={classes.project_title_container}>
                <Text className={classes.project_title}>{project.title}</Text>
            </Box>
            <Space h='sm' />
            <Text>{project.description}</Text>
            <Space h='sm' />
            <Box className={classes.technologies_container}>
                <Text size='md' weight='600'>Technologies:</Text>&nbsp;
                    {
                        project.technologies.map((el, i) => <TechnologyBadge technology={el} key={i} />)
                    }
            </Box>
            <Center>
                <Button className={classes.view_project_btn} color='cyan' onClick={() => router.push(`/projects/${project.id}`)}>view more</Button>
            </Center>
        </Card>
    )
}

export default ProjectCard