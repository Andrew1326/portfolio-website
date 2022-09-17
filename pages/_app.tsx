import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, AppShell, useMantineTheme } from '@mantine/core';
import { useLocalStorage, useWindowScroll } from '@mantine/hooks';
import Header from '../components/Header';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import ToTopBtn from '../components/ToTopBtn';
import { Fonts } from '../components/Fonts';

export default function App({ Component, pageProps }: AppProps) {

  const theme = useMantineTheme()

  const [scroll, scrollTo] = useWindowScroll()

  //* aos init
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

   //* color scheme
   const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  //* toggle scheme
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  //* color theme
  const colorTheme = {
    colorScheme,
    fontFamily: 'Archivo, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'sans-serif' },
    black: theme.colors.gray[theme.colorScheme === 'light' ? 7 : 9]
  }

  //* props
  const headerProps = {colorScheme, toggleColorScheme}
  const toTopBtnProps = {scroll, scrollTo}

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="My portfolio" />
      </Head>
      <MantineProvider theme={colorTheme} withGlobalStyles withNormalizeCSS>
        <Fonts />
        <AppShell header={<Header {...headerProps} />}>
          <Component {...pageProps} />
        </AppShell>
        {
          scroll.y > 0 && <ToTopBtn {...toTopBtnProps} />
        }
      </MantineProvider>
    </>
  );
}