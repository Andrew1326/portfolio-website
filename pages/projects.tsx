import { Container, Title, Box, Text, Badge, Space, Button, ActionIcon, Center } from "@mantine/core";
import { NextPage } from "next";
import { useGlobalStyles } from "../styles/globalStyles";
import { useStyles } from "../styles/projectsStyles";
import Head from "next/head";
import { MouseEventHandler, useEffect, useState } from "react";
import useProjectsStore from "../stores/projectsStore";
import { Edit, Trash } from "tabler-icons-react";
import useUserStore from "../stores/userStore";
import useWindow from "../hooks/useWindow";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import AddModal from "../components/AddModal";

const Projects: NextPage = (): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    const open = useWindow()

    //* modals
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false)

    //* from store
    const selectProject = useProjectsStore(state => state.selectProject)
    const userType = useUserStore(state => state.userType)
    const projects = useProjectsStore(state => state.projects)
    const getProjects = useProjectsStore(state => state.getProjects)

    const isAdmin = userType === 'admin'

    //* projects
    useEffect(() => {
        getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //* open edit modal
    const openEditModal = (id: number): MouseEventHandler<HTMLButtonElement> => () => {
        selectProject(id)
        setEditModalOpen(true)
    }

    //* open delete modal
    const openDeleteModal = (id: number): MouseEventHandler<HTMLButtonElement> => () => {
        selectProject(id)
        setDeleteModalOpen(true)
    }

    //* open add modal
    const openAddModal = (): void => setAddModalOpen(true)

    //* props
    const editModalProps = {isOpen: editModalOpen, setIsOpen: setEditModalOpen}
    const deleteModalProps = {isOpen: deleteModalOpen, setIsOpen: setDeleteModalOpen}
    const addModalProps = {isOpen: addModalOpen, setIsOpen: setAddModalOpen}

    return (
        <>
        {
            projects && <>
                <EditModal {...editModalProps} />
                <DeleteModal {...deleteModalProps} />
                <AddModal {...addModalProps} />
            </>
        }
        <Container fluid>
            <Head>
                <title>Projects</title>
            </Head>
            <Center>
                <Title className={globalClasses.h2}>My projects</Title>
            </Center>
            <Center>
                {
                    isAdmin && <Button size='md' className={classes.add_project_btn} onClick={openAddModal}>add project</Button>
                }
            </Center>
            <Box className={classes.projects_container}>
                {
                    projects?.map((el, i) => <Box key={i} className={classes.project}>
                        <Box className={classes.project_title_container}>
                            <Text className={classes.project_title}>{el.title}</Text>
                            {
                                isAdmin && <Box className={classes.project_icons_container}>
                                    <ActionIcon className={globalClasses.action_icon} mr='10%' onClick={openEditModal(i)}>
                                        <Edit />
                                    </ActionIcon>
                                    <ActionIcon className={globalClasses.action_icon} onClick={openDeleteModal(i)}>
                                        <Trash />
                                    </ActionIcon>
                                </Box>
                            }
                        </Box>
                        <Space h='sm' />
                        <Text>{el.desc}</Text>
                        <Space h='sm' />
                        <Box className={classes.technologies_container}>
                            <Text size='md' weight='600'>Technologies:</Text>&nbsp;
                            {
                                el.technologies.map((el, i) => <Badge mx='1%' size='md' key={i} sx={{ cursor: 'pointer' }} onClick={() => open(el)}>{el}</Badge>)
                            }
                        </Box>
                        <Box className={classes.project_buttons_container}>
                            <Button mx='1%' color='teal' href={el.githubUrl} target='_blanc' component="a">view code</Button>
                            <Button mx='1%' color='cyan' target='_blanc' href={el.appUrl} component="a">view app</Button>
                        </Box>
                    </Box>)
                }
            </Box>
        </Container>
        </>
    )
}

export default Projects