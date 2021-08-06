import * as React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import List from '@material-ui/core/List'
import routes from '../utilities/routes'
import { Brand, BLockListItem, ListIcon, DrawerContainer, ListText } from './mui_custom_styles'
import Navbar from './navbar'

export default function Sidebar({ children }: any) {

    const router = useRouter()
    const activeRoute = (routeName: any) => router.route.indexOf(routeName) > -1 ? true : false

    return (
        <Box sx={{ display: 'flex', height: '2000px' }}>
            <CssBaseline />
            <DrawerContainer>
                <Brand>Gull</Brand>
                <List>
                    {
                        routes.map((route, key) => (
                            <Link href={route.layout + route.path}>
                                <BLockListItem style={{ backgroundColor: activeRoute(route.layout + route.path) ? '#7D48B1' : '' }}>
                                    <ListIcon key={key}>
                                        <route.icon />
                                    </ListIcon>
                                    <ListText> {route.name}</ListText>
                                </BLockListItem>
                            </Link>
                        ))
                    }
                </List>
            </DrawerContainer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Navbar />
                <div style={{ padding: '30px 0' }}>
                    {children}
                </div>
            </Box>
        </Box>
    );
}
