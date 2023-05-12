import {Card, Image, Title, Text, Box, Button} from '@mantine/core';
import {useMediaQuery} from '@mantine/hooks';
import {EducationFields} from '../helpers/contentful/types';
import {useStyles} from '../styles/educationCardStyles';
import {useGlobalStyles} from '../styles/globalStyles';

type TProps = {
  fields: EducationFields;
  index: number;
};

const EducationCard = ({fields, index}: TProps): JSX.Element => {
  const {classes: globalClasses} = useGlobalStyles();
  const {classes} = useStyles();

  const smallerThan481 = useMediaQuery('(max-width: 480px)');

  //* card variants
  const CardImg = (): JSX.Element => (
    <Box className={classes.card_img_container}>
      <Image src={fields.image.fields.file.url} alt={fields.image.fields.title} width="100%" height="auto" />
    </Box>
  );

  const CardText = (): JSX.Element => (
    <Box className={classes.card_info_container}>
      <Title className={globalClasses.h2} order={2}>
        {fields.title}
      </Title>
      {fields.description && <Text className={globalClasses.text}>{fields.description}</Text>}
      {fields.link && (
        <Button
          mt="2%"
          color="cyan"
          size="md"
          href={fields.link}
          target="_blank"
          rel="noopener noreferrer"
          component="a"
        >
          view this
        </Button>
      )}
    </Box>
  );

  const LeftImgCard = (): JSX.Element => (
    <>
      <CardImg />
      <CardText />
    </>
  );

  const RightImgCard = (): JSX.Element => (
    <>
      <CardText />
      <CardImg />
    </>
  );

  return (
    <Card className={classes.card} shadow="xl" p="xs" radius="md" withBorder>
      <Box className={classes.card_content_container}>
        {!smallerThan481 ? index % 2 === 0 ? <LeftImgCard /> : <RightImgCard /> : <LeftImgCard />}
      </Box>
    </Card>
  );
};

export default EducationCard;
