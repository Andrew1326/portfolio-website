import { ActionIcon } from "@mantine/core"
import { ArrowBigTop } from "tabler-icons-react"
import { useGlobalStyles } from "../styles/globalStyles"

interface ScrollPosition {
    x: number;
    y: number;
}

type TProps = { scrollTo: ({ x, y }: Partial<ScrollPosition>) => void }

const ToTopBtn = ({ scrollTo }: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()

    return (
    <ActionIcon className={globalClasses.to_top_btn} onClick={() => scrollTo({ x: 0, y: 0 })}><ArrowBigTop size={20} /></ActionIcon>
    )
}

export default ToTopBtn