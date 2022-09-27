import { NextPage } from "next";
import { Box, Container } from "@mantine/core";
import localcodingSrc from '/public/localcoding.png'
import codewarsSrc from '/public/codewars.png'
import { IImage } from "../appTypes";
import Image from "next/image";
import { useStyles } from "../styles/educationStyles";
import Head from "next/head";

const Education: NextPage = (): JSX.Element => {

    const { classes } = useStyles()

    //* images
    const images: IImage[] = [
        {src: localcodingSrc, alt: 'localcoding'},
        {src: codewarsSrc, alt: 'codewars'}
    ]

    return (
        <Container fluid>
            <Head>
                <title>Education</title>
            </Head>
            <Box className={classes.images_container}>
            {
                images.map((el, i) => <Image key={i} src={el.src} alt={el.alt} />)
            }
            </Box>
        </Container>
    )
}

export default Education