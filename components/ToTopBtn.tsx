import {ActionIcon} from '@mantine/core';
import {ArrowBigTop} from 'tabler-icons-react';
import {useGlobalStyles} from '../styles/globalStyles';

interface IScrollPosition {
  x: number;
  y: number;
}

type TProps = {
  // eslint-disable-next-line no-unused-vars
  scrollTo: (data: Partial<IScrollPosition>) => void;
};

const ToTopBtn = (props: TProps): JSX.Element => {
  const {scrollTo} = props;
  const {classes: globalClasses} = useGlobalStyles();

  return (
    <ActionIcon className={globalClasses.to_top_btn} onClick={() => scrollTo({y: 0})}>
      <ArrowBigTop size={20} />
    </ActionIcon>
  );
};

export default ToTopBtn;
