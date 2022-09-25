import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
    info_section: {
        width: '100%',
        margin: '2% 0 2% 0',
        padding: '2%',
        background: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0],
        borderRadius: '10px',
        boxShadow: theme.colorScheme === 'dark' ? 'none' : `12px 12px 20px 16px ${theme.colors.gray[3]}`,

        '@media (min-width: 320px)': { 
            margin: '5% 0 5% 0',
            padding: '4%'
        },

        '@media (min-width: 769px)': { 
            margin: '1% 0 1% 0',
            padding: '2%'
        },
    }
}))