import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
    card_content_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    card_img_container: {
        '@media (min-width: 320px)': { width: '100%' },
        '@media (min-width: 1025px)': { width: '60%' }
    },

    card_info_container: {
        textAlign: 'center',

        '@media (min-width: 320px)': { width: '100%' },
        '@media (min-width: 1025px)': { width: '40%' }
    }
})