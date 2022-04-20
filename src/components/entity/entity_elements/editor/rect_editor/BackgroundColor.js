import React from 'react'
import { DesignServicesRounded } from "@mui/icons-material";
import { IconButton, Menu, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { ChromePicker } from "react-color";
import PaletteContext from "../../../../../context/PaletteContext";


export default function BackgroundColor({entity}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const {updateEntity} = useContext(PaletteContext)

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleChangeComplete = (color) => {
        const newEntity = Object.assign(entity, {})
        newEntity.backgroundColor = color.hex
        updateEntity(newEntity)
    };
  
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title='color' >
              <IconButton size='small' onClick={handleClick} >
                  <DesignServicesRounded fontSize='16px' />
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
              mt: 1.5,
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
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <ChromePicker onChangeComplete={handleChangeComplete} color={entity.backgroundColor}/>
        </Menu>
      </React.Fragment>
    );
  }
  
  
  
  