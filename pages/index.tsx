import { NextPage } from 'next'
import { Title, Center, Box, Button, Stack } from '@mantine/core'
import { useStyles } from '../styles/indexStyles'
import Logo from '../components/Logo'
import { gradients, useGlobalStyles } from '../styles/globalStyles'
import Head from 'next/head'
import { useMediaQuery } from "@mantine/hooks"
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const { classes: globalClasses } = useGlobalStyles()
  const { classes } = useStyles()

  const router = useRouter()

  const smallerThan481 = useMediaQuery('(max-width: 480px)')
  const smallerThan768 = useMediaQuery('(max-width: 768px)')

  const logoSize: string = smallerThan481 ? '150%' : smallerThan768 ? '200%' : '250%'

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
      <Center data-aos='fade-up' data-aos-duration='1200'>
          <Title order={1} className={globalClasses.h1}>My name is Andrew and i&apos;m web developer</Title>
      </Center>
      <Center data-aos='fade-up' data-aos-duration='1500'>
        {
          !smallerThan481 && <Title order={2} className={globalClasses.h2}>You can find some information about me here</Title>
        }
      </Center>
      <Box className={classes.blob}></Box>
      <Box className={classes.blob}></Box>
      <Box className={classes.poster_container}>
        <Box className={classes.poster}>
          <Stack>
            <Logo size={logoSize} />
            {
              !smallerThan481 && <Center>
              <Button className={classes.start_btn} variant='gradient' gradient={gradients[5]} onClick={() => router.push('/about')}>start exploring</Button>
            </Center>
            }
          </Stack>
        </Box>
      </Box>
      {
        smallerThan481 && <Center>
          <Button className={classes.start_btn} mt='10%' variant='gradient' gradient={gradients[5]} onClick={() => router.push('/about')}>start exploring</Button>
        </Center>
      }
      </main>
    </>
  )
}

export default Home
