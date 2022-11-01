import { ActionIcon, ColorScheme, Box, Header as MHeader, Text, Menu } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { Moon, Sun } from "tabler-icons-react"
import { useStyles } from '../styles/headerStyles'
import { useGlobalStyles } from "../styles/globalStyles"
import Link from "next/link"

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
    const smallerThan380 = useMediaQuery('(max-width: 380px)')
    const smallerThan481 = useMediaQuery('(max-width: 480px)')

    //* links
    const links: ILink[] = [
        {href: '/about', text: 'About Me', show: !smallerThan380},
        {href: '/skills', text: 'Skills', show: !smallerThan380},
        {href: '/education', text: 'Education', show: !smallerThan380},
        {href: '/projects', text: 'Projects', show: !smallerThan481}
    ]

    //* get breakpoint links
    const getBreakPointLinks = (): ILink[] => links.filter(el => el.show)

    const breakpointLinks = getBreakPointLinks()

    //* is dark
    const dark: boolean = colorScheme === 'dark'

    //* logoLink
    const LogoLink = (): JSX.Element => <Link className={classes.logo_container} href='/' passHref>
        <Text size='xl' className={classes.logo}>Portfolio</Text>
    </Link>

    return (
        <MHeader height={70} p="xl" className={classes.header}>
            <Box className={classes.content_container}>
            <Box className={classes.menu_container}>
            {
                smallerThan481 ? <Menu trigger="hover" delay={200} className={classes.menu}>
                    <Menu.Label>Pages:</Menu.Label>
                    {
                        links.map((el, i) => !el.show && <Link key={i} href={el.href} passHref>
                            <Menu.Item>{el.text}</Menu.Item>
                        </Link>)
                    }
                </Menu>
                :
                <LogoLink />
            }
            </Box>
            <Box className={classes.links_container}>
                {
                    breakpointLinks.length > 0 && breakpointLinks.map((el, i) => el.show && <Text key={i} className={classes.link} variant="link" component="a" href={el.href}>{el.text}</Text>)
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