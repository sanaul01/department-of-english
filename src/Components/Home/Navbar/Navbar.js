import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menus from './Menu/Menus';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const Navbar = () => {

  const { user, logOut } = useAuth();
  const [menuEl, setMenuEl] = React.useState(null);

  const openMenu = (event) => {
    setMenuEl(event.currentTarget);
  };

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      
    >
      {user?.email ?
        <MenuItem onClick={logOut}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p>LogOut</p>
        </MenuItem>
        :
        <MenuItem onClick={logOut}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <NavLink to="login"
            style={{ textDecoration: 'none' }}>
            <p style={{ color: 'black' }}>
              Sign in
            </p>
          </NavLink>
        </MenuItem>
      }

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );


  return (
    <div>
      <div className={classes.grow}>
        <AppBar style={{ background: '#1B5E20'}} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon onClick={openMenu} />
            </IconButton>

            {/* ==============Navbar banner logo============ */}
            <Typography className={classes.title} variant="h6" noWrap>
              <img style={{ height: "65px", marginBottom: "-9px" }} src="https://t3.ftcdn.net/jpg/02/72/78/44/360_F_272784427_ct2LctMwGutHuaxtPjOPq5DgKCzteLF6.jpg" alt="" />
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              {/* ========Login and LogOut button============ */}
              <IconButton aria-label="show 4 new mails" color="inherit">
                {
                  user?.email ?
                    <Button
                      onClick={logOut}
                      style={{
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                      LogOut
                    </Button>
                    :
                    <NavLink to="login"
                      style={{
                        textDecoration: 'none'
                      }}>
                      <Button
                        style={{
                          color: 'white',
                          fontWeight: 'bold'
                        }}>
                        Sign in
                      </Button>
                    </NavLink>
                }
              </IconButton>

              {/* Icon button and image */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <img style={{ width: 40, height: 40, borderRadius: 30 }} src="https://images.pexels.com/photos/117139/pexels-photo-117139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </div>
      <Menus
        menuEl={menuEl}
        setMenuEl={setMenuEl}
      />
    </div>
  );
};

export default Navbar;