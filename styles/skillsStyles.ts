import { createStyles } from "@mantine/core";


export const useStyles = createStyles(theme => ({
    technologies_container: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '3%'
    },

    technology: { 
        margin: '2%',

        '&:hover': { 
            cursor: 'pointer',
            color: '#4295df' 
        }
    },

    soft_skills_container: {
        marginTop: '2%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
}))