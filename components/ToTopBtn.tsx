import { ActionIcon } from "@mantine/core"
import { ArrowBigTop } from "tabler-icons-react"

interface ScrollPosition {
    x: number,
    y: number
}

type TProps = {
    scroll: ScrollPosition
    scrollTo: ({ x, y }: Partial<ScrollPosition>) => void
}

const ToTopBtn = ({scroll, scrollTo}: TProps): JSX.Element => {
    return (
    <ActionIcon sx={theme => ({ backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 8 : 1], position: 'fixed', borderRadius: '50%', bottom: 0, right: 0, margin: '0 2% 2% 0', width: '50px', height: '50px', ':hover': {
        backgroundColor: theme.colors.gray[theme.colorScheme === 'dark' ? 7 : 3]
    } })} onClick={() => scrollTo({ x: 0, y: 0 })}><ArrowBigTop size={20} /></ActionIcon>
    )
}

export default ToTopBtn