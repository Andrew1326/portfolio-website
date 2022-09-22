import { Container, Title, Box, Button, Center } from "@mantine/core";
import { NextPage } from "next";
import { useGlobalStyles } from "../styles/globalStyles";
import { useStyles } from "../styles/projectsStyles";
import Head from "next/head";
import { useEffect, useState } from "react";
import useProjectsStore from "../stores/projectsStore";
import useUserStore from "../stores/userStore";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import AddModal from "../components/AddModal";
import Project from "../components/Project";

const Projects: NextPage = (): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* modals
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false)
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false)
    const [addModalOpen, setAddModalOpen] = useState<boolean>(false)

    //* from store
    const isAdmin = useUserStore(state => state.isAdmin)
    const projects = useProjectsStore(state => state.projects)
    const getProjects = useProjectsStore(state => state.getProjects)

    //* projects
    useEffect(() => {
        getProjects()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        <Box>
            <Head>
                <title>Projects</title>
            </Head>
            <Center>
                <Title className={globalClasses.h2}>My projects</Title>
            </Center>
            <Center>
                {
                    isAdmin() && <Button size='md' className={classes.add_project_btn} onClick={openAddModal}>add project</Button>
                }
            </Center>
            <Box className={classes.projects_container}>
                {
                    projects?.map((el, i) => <Project key={i} project={el} id={i} setEditModalOpen={setEditModalOpen} setDeleteModalOpen={setDeleteModalOpen} />)
                }
            </Box>
        </Box>
        </>
    )
}

export default Projects