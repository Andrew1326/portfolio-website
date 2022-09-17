import { NextPage } from 'next'
import { Container, Title, Center, Box, Code } from '@mantine/core'
import { useStyles } from '../styles/indexStyles'
import { logo } from '../constants'
import { useGlobalStyles } from '../styles/globalStyles'
import Head from 'next/head'

const Home: NextPage = (): JSX.Element => {

  const { classes: globalClasses } = useGlobalStyles()
  const { classes } = useStyles()

  return (
    <Container fluid>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Center data-aos='fade-up' data-aos-duration='1200'>
          <Title order={1} className={globalClasses.h1}>My name is Andrew and i'm frontend developer</Title>
      </Center>
      <Center data-aos='fade-up' data-aos-duration='1500'>
          <Title order={2} className={globalClasses.h2}>All that you want to know about me you can find here</Title>
      </Center>
      <Box className={classes.blob}></Box>
      <Box className={classes.blob}></Box>
      <Box className={classes.poster_container}>
        <Box className={classes.poster}>
          <Code block className={classes.logo}>{logo}</Code>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
