import { createStyles, keyframes } from "@mantine/core";

//* keyframes 
const smallScreenMove = keyframes({
    '0%': { marginTop: '9%' },
    '20%': { marginTop: '11%' },
    '50%': { marginTop: '13%' },
    '80%': { marginTop: '11%' },
    '100%': { marginTop: '9%' }
})

const normalScreenMove = keyframes({
    '0%': { marginTop: '2%' },
    '20%': { marginTop: '3%' },
    '50%': { marginTop: '4%' },
    '80%': { marginTop: '3%' },
    '100%': { marginTop: '2%' }
})

//* classes
export const useStyles = createStyles(theme => ({
    blob: {
        borderRadius: '50%',
        position: 'absolute',
        animationIterationCount: 'infinite',
        animationDelay: '2s',
        animationDuration: '15s',

        '&:nth-of-type(3)': {
            background: `linear-gradient(to right top, ${theme.colorScheme === 'dark' ? '#fc466b, #3f5efb': '#fc5c7d, #6a82fb'})`,
    
            '@media (min-width: 320px)': { visibility: 'hidden' },
            '@media (min-width: 481px)': {
                width: '250px',
                height: '250px',
                left: '3%',
            },
            '@media (min-width: 769px)': {
                width: '350px',
                height: '350px',
                left: '5%',
                marginTop: '3%'
            },
            '@media (min-width: 1025px)': { left: '15%' },
        },

        '&:nth-of-type(4)': {
            background: `linear-gradient(to left bottom, ${theme.colorScheme === 'dark' ? '#fc466b, #3f5efb': '#fc5c7d, #6a82fb'})`,
    
            '@media (min-width: 320px)': { visibility: 'hidden' },
            '@media (min-width: 481px)': {
                width: '150px',
                height: '150px',
                right: '3%',
                marginTop: '3%'
            },
            '@media (min-width: 769px)': {
                width: '250px',
                height: '250px',
                right: '5%'
            },
            
            '@media (min-width: 1025px)': { right: '17%' }
        },

        '@media (min-width: 320px)': { animationName: `${smallScreenMove}` },

        '@media (min-width: 481px)': { animationName: `${normalScreenMove}` },
    },

    poster_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',

        '@media (min-width: 320px)': { marginTop: '10%' },
        '@media (min-width: 481px)': { marginTop: '3%' },
    },

    poster: {
        background: theme.colorScheme === 'dark' ? '#2f2f2fcb' : '#dcdcdc88',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        borderRadius: '20px',

        '@media (min-width: 320px)': {
            width: '100%',
            height: '200px'
        },
        '@media (min-width: 481px)': {
            width: '80%',
            height: '350px'
        },
        '@media (min-width: 769px)': {
            width: '70%',
            height: '400px'
        },
        '@media (min-width: 1025px)': {
            width: '50%',
            height: '400px'
        }
    },

    logo: {
        background: 'linear-gradient(to right bottom, #12c2e9, #c471ed, #f64f59)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center',
        fontWeight: 'bolder',

        '@media (min-width: 320px)': { fontSize: '140%' },
        '@media (min-width: 481px)': { fontSize: '200%' },
        '@media (min-width: 769px)': { fontSize: '250%' },
        '@media (min-width: 1025px)': { fontSize: '300%' },
    },

    start_btn: {
        '@media (min-width: 320px)': { 
            width: '60%',
            height: '37px',
            fontSize: '90%'
        },
        '@media (min-width: 481px)': { 
            width: '50%',
            height: '42px',
            fontSize: '100%'
        },
        '@media (min-width: 769px)': { 
            width: '45%' 
        },
    }
}))