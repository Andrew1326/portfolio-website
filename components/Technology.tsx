import { Box, Text } from '@mantine/core'
import { ITechnology } from "../appTypes";
import Image from 'next/image'
import { useGlobalStyles } from '../styles/globalStyles';
import { useStyles } from '../styles/technologyStyles'
import { useMediaQuery } from '@mantine/hooks';
import useSearch from '../hooks/useSearch';

type TProps = { technology: ITechnology }

const Technology = ({technology}: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()
    
    const search = useSearch()

    //* media queries
    const largerThan320 = useMediaQuery('(min-width: 320px)')
    const largerThan769 = useMediaQuery('(min-width: 769px)')

    const imageSize = (largerThan320 && !largerThan769) ? '80px' : '115px'

    return (
        <Box data-aos='fade-down-right' data-aos-duration={technology.duration} className={classes.technology} onClick={() => search(technology.name)}>
            <Image src={technology.src} alt={technology.name} width={imageSize} height={imageSize} />
            <Text className={globalClasses.text} sx={{ textAlign: 'center' }}>{technology.name}</Text>
        </Box>
    )
}

export default Technology