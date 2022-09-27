import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
    soft_skill: {
        background: 'linear-gradient(#457fca, #5691c8)',
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