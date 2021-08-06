import * as React from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { TransparentAppbar, Search, SearchIconWrapper, StyledInputBase, ToolMenu, RectAvatar } from './mui_custom_styles'
import { TripleMenu, Arrow, Notification } from '../src/utilities/icons'
import { Avatar } from '@material-ui/core';

export default function Navbar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget)
    }
    const mobileMenuId = 'primary-search-account-menu-mobile'
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Arrow />
                </IconButton>
                <p>Navigate</p>
            </MenuItem>
            <MenuItem>
                <IconButton>
                    <Notification />
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large">
                    <Avatar
                        src="https://i.ibb.co/WkCqW5P/user.jpg"
                        alt="user"
                    />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <TransparentAppbar position="static">
                <ToolMenu>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                    >
                        <TripleMenu />
                    </IconButton>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large">
                            <Arrow />
                        </IconButton>
                        <IconButton
                            size="large"
                        >
                            <Notification />
                        </IconButton>
                        <IconButton
                            edge="end"
                        >
                            <RectAvatar
                                src="https://i.ibb.co/WkCqW5P/user.jpg"
                                alt="user"
                            />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="primary"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </ToolMenu>
            </TransparentAppbar>
            {renderMobileMenu}
        </Box>
    );
}
