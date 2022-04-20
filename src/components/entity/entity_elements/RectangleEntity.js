import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import EditMenu from '../edit_entity/EditMenu';
import DeleteEntity from '../DeleteEntity';

export default function RectangleEntity({width, height, entity}) {
  const [open, setOpen] = React.useState(false);
  const {id} = entity



  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box position='relative'>
       
        {open ? (
          <Box position='fixed' right={0} left={0} display='flex' justifyContent='space-between' top={-45}>
            
            <DeleteEntity id={id} />
            <EditMenu />
          </Box>
        ) : null}
         <Box           
         style={{backgroundColor: "green"}} width={width} sx={{bgColor: "blue", border: open ? "1px solid grey" : null}} onClick={handleClick} height={height} >
            
        </Box>
      </Box>
    </ClickAwayListener>
  );
}



