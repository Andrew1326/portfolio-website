import { createStyles } from "@mantine/core";

export const useStyles = createStyles(theme => ({
    info_container: {
        margin: '2% 0 2% 0',
        background: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0],
        padding: '2%',
        borderRadius: '10px'
    }
}))