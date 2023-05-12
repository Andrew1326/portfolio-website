import {GetServerSidePropsResult, NextPage} from 'next';
import Head from 'next/head';
import {EducationFields} from '../helpers/contentful/types';
import EducationCard from '../components/EducationCard';
import ErrorAlert from '../components/ErrorAlert';
import {getContentGroup, groupsIds} from '../helpers/contentful';

type TProps = {
  education?: EducationFields[];
  error?: Error;
};

const Education: NextPage<TProps> = ({education, error}) => {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <main>
        {education
          ? education.map((el, i) => <EducationCard key={el.id} fields={el} index={i} />)
          : error && <ErrorAlert error={error} />}
      </main>
    </>
  );
};

//* server side props
export async function getServerSideProps(): Promise<GetServerSidePropsResult<TProps>> {
  const education = await getContentGroup<EducationFields>(groupsIds.EducationCard);

  if (education)
    return {
      props: {education},
    };
  else
    return {
      props: {
        error: {
          name: 'Data loading error',
          message: 'Failed to load education',
        },
      },
    };
}

export default Education;
