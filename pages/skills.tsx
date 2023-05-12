import {Center, Box, Title} from '@mantine/core';
import {GetServerSidePropsResult, NextPage} from 'next';
import {useStyles} from '../styles/skillsStyles';
import {gradients, IGradient, useGlobalStyles} from '../styles/globalStyles';
import Head from 'next/head';
import Technology from '../components/Technology';
import SoftSkill from '../components/SoftSkill';
import {SoftSkillFields, TechnicalSkillFields} from '../helpers/contentful/types';
import {getContentGroup, groupsIds} from '../helpers/contentful';
import ErrorAlert from '../components/ErrorAlert';

export interface ISoftSkillsWithGradient {
  gradient: IGradient;
  name: string;
  id: string;
  groupId: string;
}

type TProps = {
  technicalSkills?: TechnicalSkillFields[];
  softSkills?: SoftSkillFields[];
  technicalSkillsError?: Error;
  softSkillsError?: Error;
};

const Skills: NextPage<TProps> = ({
  technicalSkills,
  softSkills,
  technicalSkillsError,
  softSkillsError,
}): JSX.Element => {
  const {classes: globalClasses} = useGlobalStyles();
  const {classes} = useStyles();

  //* create soft skills gradients
  const createSoftSkillsGradients = (softSkills: SoftSkillFields[]): ISoftSkillsWithGradient[] => {
    let createdGradients: IGradient[];

    if (softSkills.length < gradients.length) createdGradients = gradients.slice(0, softSkills.length);
    else {
      for (let i = 0; gradients.length !== softSkills.length; i++) {
        gradients.push(gradients[i]);
        if (i === gradients.length - 1 && gradients.length !== softSkills.length) i = 0;
      }

      createdGradients = gradients;
    }

    const withGradients = softSkills.map((el, i) => ({...el, gradient: gradients[i]}));

    return withGradients;
  };

  return (
    <>
      <Head>
        <title>Skills</title>
      </Head>
      <Center>
        <Title className={globalClasses.h2}>Technical skills</Title>
      </Center>
      {technicalSkills ? (
        <Box className={classes.technologies_container}>
          {technicalSkills.map((el, i) => (
            <Technology key={el.id} technology={el} index={i} />
          ))}
        </Box>
      ) : (
        technicalSkillsError && <ErrorAlert error={technicalSkillsError} />
      )}
      <Center>
        <Title sx={{marginTop: '3%'}} className={globalClasses.h2}>
          Soft skills
        </Title>
      </Center>
      {softSkills ? (
        <Box className={classes.soft_skills_container}>
          {createSoftSkillsGradients(softSkills).map((el) => (
            <SoftSkill key={el.id} softSkill={el} />
          ))}
        </Box>
      ) : (
        softSkillsError && <ErrorAlert error={softSkillsError} />
      )}
    </>
  );
};

//* server side props
export async function getServerSideProps(): Promise<GetServerSidePropsResult<TProps>> {
  const technicalSkillsPromise = getContentGroup<TechnicalSkillFields>(groupsIds.TechnicalSkill);
  const softSkillsPromise = getContentGroup<SoftSkillFields>(groupsIds.SoftSkill);

  const [technicalSkills, softSkills] = await Promise.all([technicalSkillsPromise, softSkillsPromise]);

  if (technicalSkills && softSkills)
    return {
      props: {technicalSkills, softSkills},
    };
  else if (technicalSkills && !softSkills)
    return {
      props: {
        technicalSkills,
        softSkillsError: {
          name: 'Data loading error',
          message: 'Failed to load softSkills',
        },
      },
    };
  else if (!technicalSkills && softSkills)
    return {
      props: {
        softSkills,
        technicalSkillsError: {
          name: 'Data loading error',
          message: 'Failed to load technicalSkills',
        },
      },
    };
  else
    return {
      props: {
        softSkillsError: {
          name: 'Data loading error',
          message: 'Failed to load softSkills',
        },
        technicalSkillsError: {
          name: 'Data loading error',
          message: 'Failed to load technicalSkills',
        },
      },
    };
}

export default Skills;
