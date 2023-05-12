import {Box, Text} from '@mantine/core';
import {ISoftSkillsWithGradient} from '../pages/skills';
import {useGlobalStyles} from '../styles/globalStyles';
import {useStyles} from '../styles/softSkillStyles';

type TProps = {softSkill: ISoftSkillsWithGradient};

const SoftSkill = ({softSkill}: TProps): JSX.Element => {
  const {classes: globalClasses} = useGlobalStyles();
  const {classes} = useStyles({gradient: softSkill.gradient});

  return (
    <Box data-aos="zoom-in" data-aos-duration="1200" className={classes.soft_skill}>
      <Text className={globalClasses.text}>{softSkill.name}</Text>
    </Box>
  );
};

export default SoftSkill;
