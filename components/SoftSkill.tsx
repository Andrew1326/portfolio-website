import { Box, Text } from '@mantine/core'
import { useGlobalStyles } from '../styles/globalStyles'
import { useStyles } from '../styles/softSkillStyles'

type TProps = { 
    softSkill: string,
    index: number 
}

const SoftSkill = ({softSkill, index}: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    return (
        <Box data-aos='zoom-in' data-aos-duration={(index * 500)} className={classes.soft_skill}>
                <Text className={globalClasses.text}>{softSkill}</Text>
        </Box>
    )
}

export default SoftSkill