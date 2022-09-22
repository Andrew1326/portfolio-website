import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
    add_project_btn: {
        marginTop: '2%',

        '@media (min-width: 320px)': { width: '70%' },
        '@media (min-width: 481px)': { width: '30%' }
    },

    projects_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '2%'
    }
}))