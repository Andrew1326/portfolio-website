import {Button} from '@mantine/core';
import {useRouter} from 'next/router';
import {ArrowBigLeft} from 'tabler-icons-react';
import {useGlobalStyles} from '../styles/globalStyles';
import {useMediaQuery} from '@mantine/hooks';

const BackBtn = () => {
  const {classes: globalClasses} = useGlobalStyles();

  const router = useRouter();

  const smallerThan481 = useMediaQuery('(max-width: 480px)');

  return (
    <Button
      className={globalClasses.back_btn}
      size={smallerThan481 ? 'xs' : 'sm'}
      leftIcon={<ArrowBigLeft size={17} strokeWidth={2} />}
      onClick={() => router.back()}
    >
      {!smallerThan481 && 'back'}
    </Button>
  );
};

export default BackBtn;
