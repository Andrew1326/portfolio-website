import { Code } from "@mantine/core"
import { useStyles } from '../styles/headerStyles'

type TProps = { size?: string }

const Logo = ({ size }: TProps): JSX.Element => {

    const { classes } = useStyles()

    const code: string = `<WebDeveloper />`

    return <Code block className={classes.logo} style={{ fontSize: size ?? 'auto' }}>{code}</Code>
}

export default Logo