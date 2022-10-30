import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    project_btns_container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

        '@media (min-width: 769px)': { marginTop: '3%' },
        '@media (min-width: 1025px)': { marginTop: '2%' },
    },

    project_btn: {
        margin: '1%',

        '@media (min-width: 320px)': { 
            width: '40%',
        },
        '@media (min-width: 481px)': { 
            width: '30%',
            height: '40px',
            fontSize: '105%'
        },

        '@media (min-width: 769px)': { 
            width: '20%',
            height: '43px',
            fontSize: '105%'
        }
    }
})