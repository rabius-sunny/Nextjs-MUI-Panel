import * as React from 'react';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10 } from '../utilities/icons'
import { Brand, BLockListItem, ListIcon, DrawerContainer } from './mui_custom_styles'
import Navbar from './navbar';

export default function Sidebar2({ children }: any) {
    return (
        <Box sx={{ display: 'flex', height: '2000px' }}>
            <CssBaseline />
            <DrawerContainer>
                <Brand>Gull</Brand>
                <List>
                    <BLockListItem >
                        <ListIcon>
                            <Icon1 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon2 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon3 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon4 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon5 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon6 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon7 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon8 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon9 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                    <BLockListItem >
                        <ListIcon>
                            <Icon10 />
                        </ListIcon>
                        <ListItemText primary={"text"} />
                    </BLockListItem>
                </List>
            </DrawerContainer>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Navbar />
                {children}
            </Box>
        </Box>
    );
}
