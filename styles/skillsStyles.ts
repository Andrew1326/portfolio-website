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
    },

    soft_skill: {
        background: 'linear-gradient(#457fca, #5691c8)',
        transition: '0.4s ease-in-out',
        color: theme.colors.gray[2],
        height: 'auto',
        textAlign: 'center',
        margin: '1%',
        padding: '2%',
        borderRadius: '15px',

        '@media (min-width: 320px)': { 
            width: '100%',
            margin: '2% 0 2% 0'
         },
        '@media (min-width: 481px)': { 
            width: '40%',
            margin: '0.5% 0 0.5% 0'
        }
    }
}))