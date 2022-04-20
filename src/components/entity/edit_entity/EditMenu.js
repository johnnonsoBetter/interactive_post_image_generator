import React from 'react' 

import { WidgetsRounded } from '@mui/icons-material';
import {  Avatar, Box, IconButton, Menu, Tooltip, Typography } from '@mui/material'


export default function EditMenu({editor, backgroundColor, setBackgroundColor}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title='edit' >
              <IconButton size='small' onClick={handleClick} >
                  
                  <Avatar sx={{width: 32, height: 32}} >
                  <WidgetsRounded color='info' fontSize='8px' />
                  </Avatar>
              </IconButton>
              
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="picker-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              width: 260,
              mb: 3,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(50%) rotate(-45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          {editor}
        </Menu>
      </React.Fragment>
    );
  }
  
  