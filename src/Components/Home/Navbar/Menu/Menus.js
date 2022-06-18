import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { NavLink } from 'react-router-dom';

// import MenuBookIcon from '@mui/icons-material/MenuBook';

const StyledMenu = withStyles({
  paper: {
    background: "#1B5E20"
    
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: "#1B5E20",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
        fontWeight: 600
      },
    },
  },
}))(MenuItem);

export default function Menus({menuEl, setMenuEl}) {
  
  const handleClose = () => {
    setMenuEl(null);
  };

  return (
    <div style={{marginLeft: 0}}>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={menuEl}
        keepMounted
        open={Boolean(menuEl)}
        onClick={handleClose}
        
      >
        <NavLink to="/19-novel" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem >
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="19th Century Novel" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/20-poetry" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="20th Century Poetry" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/modern-drama" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Modern Drama" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/20-novel" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="20th Century Novel" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/american-poetry" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="American Poetry" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="fiction-drama" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Fiction & drama" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/classics-translation" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Classics in Translation" />
        </StyledMenuItem>
        </NavLink>

        
        <NavLink to="/criticism" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Literary Criticism" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/continental-literature" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Continental Literature" />
        </StyledMenuItem>
        </NavLink>

        <NavLink to="/language-teaching" style={{textDecoration:'none', color:'black'}}>
        <StyledMenuItem>
          <ListItemIcon>
            <MenuBookIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="A & M Language Teaching" />
        </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
}