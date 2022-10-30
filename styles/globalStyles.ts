import { createStyles } from "@mantine/core";

export interface IGradient {
    from: string,
    to: string,
    deg: number
}

//* gradients
export const gradients: IGradient[] = [
    {from: '#f857a6', to: '#ff5858', deg: 45},
    {from: '#bc4e9c', to: '#f80759', deg: 45},
    {from: '#ff9966', to: '#ff5e62', deg: 45},
    {from: '#ee0979', to: '#ff6a00', deg: 45},
    {from: '#fc5c7d', to: '#6a82fb', deg: 45},
    {from: '#fc00ff', to: '#00dbde', deg: 45}
]

export const useGlobalStyles = createStyles(theme => ({
    h1: {
        '@media (min-width: 320px)': { fontSize: '180%' },
        '@media (min-width: 481px)': { fontSize: '300%' },
        '@media (min-width: 769px)': { fontSize: '350%' },
        '@media (min-width: 1025px)': { fontSize: '400%' }
    },

    h2: {
        '@media (min-width: 320px)': { fontSize: '170%' },
        '@media (min-width: 769px)': { fontSize: '250%' },
        '@media (min-width: 1025px)': { fontSize: '300%' },
    },

    h3: {
        '@media (min-width: 320px)': { fontSize: '200%' },
        '@media (min-width: 769px)': { fontSize: '225%' },
        '@media (min-width: 1025px)': { fontSize: '250%' },
    },

    text: { 
        margin: '1% 0 1% 0',
        
        '@media (min-width: 320px)': { fontSize: '130%' },
        '@media (min-width: 481px)': { fontSize: '160%' },
    },

    action_icon: {
        width: '30px',
        height: '30px',

        '&:hover': { backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0] }
    },

    to_top_btn: {
        backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 8 : 1], position: 'fixed', 
        borderRadius: '50%', 
        bottom: 0, 
        right: 0, 
        margin: '0 2% 2% 0', 
        width: '50px', 
        height: '50px',

        '&:hover': {
            backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 3]
        }
    },

    back_btn: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginLeft: '2%',

        '@media (min-width: 320px)': { marginTop: '17%' },
        '@media (min-width: 481px)': { marginTop: '15%' },
        '@media (min-width: 769px)': { marginTop: '10%' },
        '@media (min-width: 1025px)': { marginTop: '8%' },
    }
}))