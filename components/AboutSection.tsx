import {Center, Title, Text, Card} from '@mantine/core';
import {useGlobalStyles} from '../styles/globalStyles';
import {useStyles} from '../styles/aboutSectionStyles';

type TProps = {
  title: string;
  desc: string;
};

const AboutSection = ({title, desc}: TProps): JSX.Element => {
  const {classes: globalClasses} = useGlobalStyles();
  const {classes} = useStyles();

  return (
    <Card className={classes.info_section} shadow="xl" p="lg" radius="md" withBorder>
      <Center>
        <Title className={globalClasses.h2}>{title}</Title>
      </Center>
      <Text className={globalClasses.text}>{desc}</Text>
    </Card>
  );
};

export default AboutSection;
