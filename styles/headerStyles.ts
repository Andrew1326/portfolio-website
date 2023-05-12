import {createStyles} from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0],

    '@media (min-width: 320px)': {height: '40px'},
    '@media (min-width: 481px)': {height: '70px'},
  },

  content_container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },

  menu_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
  },

  menu: {':hover': {backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 9 : 0]}},

  logo_container: {
    textDecoration: 'none',
    '&:hover': {textDecoration: 'none'},
  },

  logo: {
    background: 'linear-gradient(to right bottom, #12c2e9, #c471ed, #f64f59)',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '17px',

    '&:hover': {cursor: 'pointer'},
  },

  links_container: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '400px',
    alignItems: 'center',
  },

  link: {
    fontSize: '17px',
    margin: '0 1% 0 1%',

    '&:hover': {
      color: '#4295df',
      textDecoration: 'none',
    },
  },
}));
