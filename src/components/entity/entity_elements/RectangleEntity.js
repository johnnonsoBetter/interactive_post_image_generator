import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import EditMenu from '../edit_entity/EditMenu';
import DeleteEntity from '../DeleteEntity';
import RectEditor from './editor/RectEditor';
import { Paper } from '@mui/material';

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
            <EditMenu editor={<RectEditor entity={entity} />}/>
          </Box>
        ) : null}
        
        <Paper style={{backgroundColor: entity.backgroundColor}} elevation={entity.elevation} onClick={handleClick} sx={{bgcolor: 'grey', height: height, width: width, border: open ? "2px solid dodgerBlue" : null, borderRadius: `${entity.borderRadius}px`}}   >
            
          </Paper>
      </Box>
    </ClickAwayListener>
  );
}



