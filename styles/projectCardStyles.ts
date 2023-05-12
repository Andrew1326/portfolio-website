import {createStyles} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  project: {
    background: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0],

    '@media (min-width: 320px)': {
      width: '100%',
      padding: '4%',
    },

    '@media (min-width: 769px)': {
      width: '50%',
      padding: '2%',
    },
  },

  project_title_container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  project_title: {
    fontSize: '130%',
    fontWeight: 'bold',
  },

  project_icons_container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  technologies_container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  view_project_btn: {
    height: '37px',
    marginTop: '3%',
    transition: '0.3s ease-in-out',

    '@media (min-width: 481px)': {
      width: '30%',

      '&:hover': {
        width: '50%',
        height: '40px',
      },
    },
  },
}));
