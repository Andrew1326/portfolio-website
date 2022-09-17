import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
    add_project_btn: {
        width: '30%',
        marginTop: '2%'
    },

    projects_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '2%'
    },

    project: {
        background: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0],
        padding: '2%',
        borderRadius: '10px',
        margin: '1%',
        boxShadow: `12px 12px 20px 0px ${theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 3]}`,

        '@media (min-width: 320px)': { width: '100%' },
        '@media (min-width: 769px)': { width: '50%' },
    },

    project_title_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    project_title: {
        fontSize: '130%',
        fontWeight: 'bold'
    },

    project_icons_container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },

    technologies_container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    project_buttons_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '@media (min-width: 320px)': { marginTop: '5%' },
        '@media (min-width: 481px)': { marginTop: '3%' },
    }
}))