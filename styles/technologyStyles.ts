import {createStyles} from '@mantine/core';

export const useStyles = createStyles({
  technology: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '2%',

    '&:hover': {
      cursor: 'pointer',
      color: '#4295df',
    },
  },

  technology_img: {
    '@media (min-width: 320px)': {
      width: '55px',
      height: '55px',
    },

    '@media (min-width: 481px)': {
      width: '70px',
      height: '70px',
    },

    '@media (min-width: 769px)': {
      width: '90px',
      height: '90px',
    },

    '@media (min-width: 1025px)': {
      width: '110px',
      height: '110px',
    },
  },
});
