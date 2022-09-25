import { NextPage } from 'next'
import { Container, Title, Center, Box, Code, Button } from '@mantine/core'
import { useStyles } from '../styles/indexStyles'
import { logo } from '../constants'
import { useGlobalStyles } from '../styles/globalStyles'
import Head from 'next/head'
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'

const Home: NextPage = (): JSX.Element => {

  const { classes: globalClasses } = useGlobalStyles()
  const { classes } = useStyles()

  const smallerThan481 = useMediaQuery('(max-width: 480px)')

  const router = useRouter()

  //* start exploring
  const startExploring: MouseEventHandler<HTMLButtonElement> = () => router.push('/about')

  return (
    <Container fluid>
      <Head>
        <title>Portfolio</title>
      </Head>
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
          <Button size='md' mt='15%' color='blue' onClick={startExploring}>start exploring</Button>
      </Center>
      }
    </Container>
  )
}

export default Home
