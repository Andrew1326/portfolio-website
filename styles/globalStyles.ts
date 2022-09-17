import { createStyles } from "@mantine/core";


export const useGlobalStyles = createStyles(theme => ({
    h1: {
        '@media (min-width: 320px)': { fontSize: '250%' },
        '@media (min-width: 481px)': { fontSize: '300%' },
        '@media (min-width: 769px)': { fontSize: '350%' },
        '@media (min-width: 1025px)': { fontSize: '400%' }
    },

    h2: {
        '@media (min-width: 320px)': { fontSize: '225%' },
        '@media (min-width: 769px)': { fontSize: '250%' },
        '@media (min-width: 1025px)': { fontSize: '300%' },
    },

    h3: {
        '@media (min-width: 320px)': { fontSize: '200%' },
        '@media (min-width: 769px)': { fontSize: '225%' },
        '@media (min-width: 1025px)': { fontSize: '250%' },
    },

    text: { 
        marginTop: '2%',
        
        '@media (min-width: 320px)': { fontSize: '130%' },
        '@media (min-width: 481px)': { fontSize: '160%' },
    },

    action_icon: {
        width: '30px',
        height: '30px',

        ':hover': { backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0] }
    }
}))