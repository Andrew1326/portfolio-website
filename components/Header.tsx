import { ActionIcon, ColorScheme, Box, Header as MHeader, Text, Code, Menu } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Moon, Sun } from "tabler-icons-react"
import { logo } from '../constants'
import { useStyles } from '../styles/headerStyles'
import { useGlobalStyles } from "../styles/globalStyles"

interface ILink {
    href: string;
    text: string;
    show: boolean
}

type TProps = { 
    colorScheme: ColorScheme,
    toggleColorScheme: () => void
 }

const Header = ({ colorScheme, toggleColorScheme }: TProps): JSX.Element => {

    const { classes: globalClasses } = useGlobalStyles()
    const { classes } = useStyles()

    //* media queries
    const smallerThan481 = useMediaQuery('(max-width: 480px)')
    const smallerThan380 = useMediaQuery('(max-width: 380px)')

    //* links
    const links: ILink[] = [
        {href: '/about', text: 'About Me', show: !smallerThan380},
        {href: '/skills', text: 'Skills', show: !smallerThan380},
        {href: '/education', text: 'Education', show: !smallerThan380},
        {href: '/projects', text: 'Projects', show: !smallerThan481}
    ]

    //* is dark
    const dark: boolean = colorScheme === 'dark'

    return (
        <MHeader height={70} p="xl" className={classes.header}>
            <Box className={classes.content_container}>
            <Box className={classes.menu_container}>
            {
                smallerThan481 ? <Menu trigger="hover" delay={200} className={classes.menu}>
                    <Menu.Label>Pages:</Menu.Label>
                    {
                        links.map((el, i) => !el.show && <Menu.Item key={i} href={el.href} component='a'>{el.text}</Menu.Item>)
                    }
                </Menu>
                :
                <Text variant="link" href='/' component="a" className={classes.logo_container}><Code block className={classes.logo}>{logo}</Code></Text>
            }
            </Box>
            <Box className={classes.links_container}>
                {
                    links.map((el, i) => el.show && <Text key={i} className={classes.link} variant="link" component="a" href={el.href}>{el.text}</Text>)
                }
            </Box>
                <ActionIcon className={globalClasses.action_icon} sx={{ width: '50px', height: '50px' }} onClick={() => toggleColorScheme()}>
                {
                    dark ? <Sun size={22} /> : <Moon size={22} />
                }
                </ActionIcon>
            </Box>
        </MHeader>
    )
}

export default Header