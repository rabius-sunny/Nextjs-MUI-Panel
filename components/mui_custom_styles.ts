import { AppBar, InputBase, ListItem, ListItemIcon, ListItemText, styled, Typography } from "@material-ui/core";

const RootContainer = styled('div')({
    backgroundColor: '#F1F3F4',
    minHeight: '2000px'
})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    color: '#B1B1B1',
    borderRadius: "20px",
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        maxWidth: '500px'
    }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: "13px 0",
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    }
}))

const DrawerContainer = styled('div')({
    backgroundColor: '#663399',
    width: '120px',
    height: '100%',
    textAlign: 'center'
})

const Brand = styled(Typography)({
    color: 'white',
    padding: '35px 0 0 0',
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: 700,
})

const BLockListItem = styled(ListItem)({
    display: 'block',
    textAlign: 'center',
    padding: '10px 0',
    margin: '10px auto',
    width: '94px',
    height: '80px',
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
        backgroundColor: '#7D48B1',
        borderRadius: '5px'
    }
})

const ListIcon = styled(ListItemIcon)({
    minWidth: "0"
})

const ListText = styled(ListItemText)({
    color: 'white',
    // paddingBottom: '5px'
})

const TransparentAppbar = styled(AppBar)({
    backgroundColor: 'inherit',
    boxShadow: 'none'
})

const Card = styled('div')({
    display: 'flex',
    alignItems: 'center',
    maxWidth: '296px',
    height: '131px',
    background: 'white',
    borderRadius: '24px',
    margin: '10px'
})

const Capsul = styled('div')(({ color }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 15px 0 20px',
    background: color,
    width: '36px',
    height: '71px',
    borderRadius: '18px'
}))

const NameTypo = styled(Typography)({
    color: '#43454D',
    fontSize: '14px'
})

const ValueTypo = styled('h1')(({ color }) => ({
    fontSize: '30px',
    margin: '-8px 0 0 0',
    fontWeight: 700,
    color: color
}))


export { RootContainer, DrawerContainer, Brand, BLockListItem, ListIcon, ListText, TransparentAppbar, Card, Capsul, NameTypo, ValueTypo, Search, SearchIconWrapper, StyledInputBase }