import { Box, Text, Image } from '@mantine/core'
import { useGlobalStyles } from '../styles/globalStyles';
import { useStyles } from '../styles/technologyStyles'
import useSearch from '../hooks/useSearch';
import { TechnicalSkillFields } from '../helpers/contentful/types';

type TProps = { 
    technology: TechnicalSkillFields,
    index: number
}

const Technology = ({ technology, index }: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* animations durations
    const durations: number[] = [500, 700, 900, 1100, 1300, 1500, 1700, 1900]
    
    const search = useSearch()

    return (
        <Box data-aos='fade-down-right' data-aos-duration={durations[index]} className={classes.technology} onClick={() => search(technology.name)}>
            <Image className={classes.technology_img} src={`https:${technology.image.fields.file.url}`} alt={technology.name} />
            <Text className={globalClasses.text} sx={{ textAlign: 'center' }}>{technology.name}</Text>
        </Box>
    )
}

export default Technology