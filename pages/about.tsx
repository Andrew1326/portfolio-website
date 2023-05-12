import {GetServerSidePropsResult, NextPage} from 'next';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import {SectionFields} from '../helpers/contentful/types';
import ErrorAlert from '../components/ErrorAlert';
import {getContentGroup, groupsIds} from '../helpers/contentful';

type TProps = {
  sections?: SectionFields[];
  error?: Error;
};

const About: NextPage<TProps> = ({sections, error}): JSX.Element => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        {sections
          ? sections.map((el) => (
              <AboutSection key={el.id} title={el.title} desc={el.description.content[0].content[0].value} />
            ))
          : error && <ErrorAlert error={error} />}
      </main>
    </>
  );
};

//* server side props
export async function getServerSideProps(): Promise<GetServerSidePropsResult<TProps>> {
  const sections = await getContentGroup<SectionFields>(groupsIds.Section);

  if (sections)
    return {
      props: {sections},
    };
  else
    return {
      props: {
        error: {
          name: 'Data loading error',
          message: 'Failed to load sections',
        },
      },
    };
}

export default About;
