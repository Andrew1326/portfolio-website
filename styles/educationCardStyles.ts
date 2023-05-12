import {createStyles} from '@mantine/core';

export const useStyles = createStyles({
  card: {
    '@media (min-width: 320px)': {margin: '4% 0 4% 0'},
    '@media (min-width: 481px)': {margin: '3% 0 3% 0'},
    '@media (min-width: 769px)': {margin: '2% 0 2% 0'},
    '@media (min-width: 1025px)': {margin: '1% 0 1% 0'},
  },

  card_content_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  card_img_container: {
    '@media (min-width: 320px)': {width: '100%'},
    '@media (min-width: 1025px)': {width: '60%'},
  },

  card_info_container: {
    textAlign: 'center',

    '@media (min-width: 320px)': {width: '100%'},
    '@media (min-width: 1025px)': {width: '40%'},
  },
});
