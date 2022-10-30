import { createStyles } from "@mantine/core";
import { IGradient } from "./globalStyles";

export const useStyles = createStyles((theme, { gradient }: { gradient: IGradient }) => ({
    soft_skill: {
        backgroundImage: theme.fn.linearGradient(gradient.deg, gradient.from, gradient.to),
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