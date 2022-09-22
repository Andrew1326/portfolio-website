import { Center, Title, Text, Box } from "@mantine/core"
import { ISection } from "../pages/about"
import { useGlobalStyles } from "../styles/globalStyles"
import { useStyles } from "../styles/aboutSectionStyles"

const AboutSection = ({title, text}: ISection): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    return (
        <Box className={classes.info_section}>
            <Center>
                <Title className={globalClasses.h2}>{title}</Title>
            </Center>
            <Text className={globalClasses.text}>{text}</Text>
        </Box>
    )
}

export default AboutSection