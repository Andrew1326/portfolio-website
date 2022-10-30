import { ActionIcon, Box, Group, Image } from "@mantine/core";
import { useState } from "react";
import { PlayerTrackNext, PlayerTrackPrev } from "tabler-icons-react";
import useInterval from "../hooks/useInterval";
import { useStyles } from "../styles/imagesCarouselStyles";

export interface IImage {
    url: string;
    alt: string;
}

type TProps = { images: IImage[] }

const ImageCarouse = ({ images }: TProps): JSX.Element => {
    const [imageId, setImageId] = useState<number>(0)

    const { classes } = useStyles()

    //* next img
    const goNext = (): void => {
        if (imageId !== images.length-1) setImageId(imageId+1)
        else setImageId(0)
    }

    //* go prev
    const goPrev = (): void => {
        if (imageId !== 0) setImageId(imageId-1)
        else setImageId(images.length-1)
    }

    //* changing id after 3000ms
    useInterval(() => goNext(), 5000)

    return (
        <Box className={classes.container}>
            <Box className={classes.items_container}>
                <ActionIcon onClick={() => goPrev()}>
                    <PlayerTrackPrev size={22} />
                </ActionIcon>
                <Box className={classes.img_container}>
                    <Image src={images[imageId].url} alt={images[imageId].alt} width='100%' height='auto' />
                </Box>
                <ActionIcon onClick={() => goNext()}>
                    <PlayerTrackNext size={22} />
                </ActionIcon>
            </Box>
            <Group mt='1%' spacing={10}>
                {
                    images.map((_, i) => <Box key={i} className={classes.nav_item} onClick={() => setImageId(i)}></Box>)
                }
            </Group>
        </Box>
    )
}

export default ImageCarouse