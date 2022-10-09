import { Box, Button, ActionIcon, Space, Text } from "@mantine/core";
import { MouseEventHandler, SetStateAction } from "react";
import { IProject } from "../appTypes";
import { useGlobalStyles } from "../styles/globalStyles";
import { useStyles } from "../styles/projectStyles";
import { Trash, Edit } from "tabler-icons-react";
import useUserStore from "../stores/userStore";
import useProjectsStore from "../stores/projectsStore";
import TechnologyBadge from "./TechnologyBadge";
import { WithId } from "mongodb";

type TSetModalOpen = (value: SetStateAction<boolean>) => void

type TProps = {
    project: WithId<IProject>,
    setEditModalOpen: TSetModalOpen,
    setDeleteModalOpen: TSetModalOpen
}

const Project = ({project, setEditModalOpen, setDeleteModalOpen}: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* from store
    const isAdmin = useUserStore(state => state.isAdmin)
    const selectProject = useProjectsStore(state => state.selectProject)

    //* open edit modal
    const openEditModal: MouseEventHandler<HTMLButtonElement> = () => {
        selectProject(project._id)
        setEditModalOpen(true)
    }

    //* open delete modal
    const openDeleteModal: MouseEventHandler<HTMLButtonElement> = () => {
        selectProject(project._id)
        setDeleteModalOpen(true)
    }

    return (
        <Box className={classes.project}>
            <Box className={classes.project_title_container}>
                <Text className={classes.project_title}>{project.title}</Text>
                {
                    isAdmin() && <Box className={classes.project_icons_container}>
                        <ActionIcon className={globalClasses.action_icon} mr='10%' onClick={openEditModal}>
                            <Edit />
                        </ActionIcon>
                        <ActionIcon className={globalClasses.action_icon} onClick={openDeleteModal}>
                            <Trash />
                        </ActionIcon>
                    </Box>
                    }
            </Box>
            <Space h='sm' />
            <Text>{project.desc}</Text>
            <Space h='sm' />
            <Box className={classes.technologies_container}>
                <Text size='md' weight='600'>Technologies:</Text>&nbsp;
                    {
                        project.technologies.map((el, i) => <TechnologyBadge technology={el} key={i} />)
                    }
            </Box>
            <Box className={classes.project_buttons_container}>
                <Button mr='1%' color='teal' href={project.githubUrl} target='_blanc' component="a">view code</Button>
                <Button ml='1%' color='cyan' target='_blanc' href={project.appUrl} component="a">view app</Button>
            </Box>
        </Box>
    )
}

export default Project