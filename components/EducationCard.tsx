import { Card, Image, Title, Text, Box, Button } from "@mantine/core"
import { EducationFields } from "../helpers/contentful/types"
import { useStyles } from "../styles/educationCardStyles"
import { useGlobalStyles } from "../styles/globalStyles"

type TProps = { 
    fields: EducationFields,
    index: number
}

const EducationCard = ({ fields, index }: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    console.log(fields)

    return (
        <Card shadow="xl" p="xs" m='sm' radius="md" withBorder>
            <Box className={classes.card_content_container}>
                {
                    index % 2 === 0 ? <>
                    <Box className={classes.card_img_container}>
                        <Image src={fields.image.fields.file.url} alt={fields.image.fields.title} width='100%' height='auto' />
                    </Box>
                    <Box className={classes.card_info_container}>
                        <Title className={globalClasses.h2} order={2}>{fields.title}</Title>
                        <Text className={globalClasses.text}>{fields.description}</Text>
                    {
                        fields.link && <Button mt='2%' color='cyan' size='md' href={fields.link} target='_blank' rel="noopener noreferrer" component='a'>view this</Button>
                    }
                    </Box>
                </>
                :
                <>
                <Box className={classes.card_info_container}>
                    <Title className={globalClasses.h2} order={2}>{fields.title}</Title>
                    <Text className={globalClasses.text}>{fields.description}</Text>
                    {
                        fields.link && <Button mt='2%' color='cyan' size='md' href={fields.link} target='_blank' rel="noopener noreferrer" component='a'>view this</Button>
                    }
                </Box>
                <Box className={classes.card_img_container}>
                    <Image src={fields.image.fields.file.url} alt={fields.image.fields.title} width='100%' height='auto' />
                </Box>
                </>
                }
            </Box>
        </Card>
    )
}

export default EducationCard