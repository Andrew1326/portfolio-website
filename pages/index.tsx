import { NextPage } from 'next'
import { Title, Center, Box, Code, Button } from '@mantine/core'
import { useStyles } from '../styles/indexStyles'
import { logo } from '../constants'
import { useGlobalStyles } from '../styles/globalStyles'
import Head from 'next/head'
import { useMediaQuery } from "@mantine/hooks"

const Home: NextPage = () => {

  const { classes: globalClasses } = useGlobalStyles()
  const { classes } = useStyles()

  const smallerThan481 = useMediaQuery('(max-width: 480px)')

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
      <Center data-aos='fade-up' data-aos-duration='1200'>
          <Title order={1} className={globalClasses.h1}>My name is Andrew and i&apos;m frontend developer</Title>
      </Center>
      <Center data-aos='fade-up' data-aos-duration='1500'>
        <Title order={2} className={globalClasses.h2}>{smallerThan481 ? '' : 'All that you want to know about me you can find here'}</Title>
      </Center>
      <Box className={classes.blob}></Box>
      <Box className={classes.blob}></Box>
      <Box className={classes.poster_container}>
        <Box className={classes.poster}>
          <Code block className={classes.logo}>{logo}</Code>
        </Box>
      </Box>
      {
        smallerThan481 && <Center>
          <Button size='md' mt='15%' color='blue' href='/about' component='a'>start exploring</Button>
      </Center>
      }
      </main>
    </>
  )
}

export default Home
