
import React, { useState } from 'react' 
import { ClickAwayListener, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import DeleteEntity from '../DeleteEntity';
import EditMenu from '../edit_entity/EditMenu';
import TextEditor from './editor/TextEditor';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
   
    position: 'relative',
    
    border: '0px solid #ced4da',
   
  },
}));




export default function TextEntity({entity, width, height}) {

    const [open, setOpen] = React.useState(false);
    const {id, fontSize, fontWeight} = entity
    const [openEditText, setOpenEditText] = useState(false)
    const [text, setText] = useState("Double tap to type something cool!")

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpenEditText(false)
        setOpen(false);
    };

   
    return (
       

        <ClickAwayListener onClickAway={handleClickAway}>
            <Box position='relative'>
            
            {open ? (
                <Box position='fixed' right={0} left={0} display='flex' justifyContent='space-between' top={-45}>
                
                <DeleteEntity id={id} />
                <EditMenu editor={<TextEditor entity={entity} />} />
                </Box>
            ) : null}
             <Box width={width} height={height} overflow='hidden'  sx={{border: open ? "1px solid grey": ''}} onClick={handleClick}  onDoubleClick={() => {

             }} >

                {
                    openEditText ?
                        <BootstrapInput multiline  autoFocus  sx={{width: "100%", height, textAlign: entity.textAlign, fontWeight, fontSize: `${entity.fontSize}px`, color: entity.color, fontFamily: entity.fontFamily}} value={text} onChange={(e) => setText(e.target.value)} /> :
                    <Typography  overflow='hidden' sx={{textAlign: entity.textAlign, fontWeight, fontSize: `${entity.fontSize}px`, color: entity.color, fontFamily: entity.fontFamily}}fontWeight={fontWeight} onDoubleClick={() => setOpenEditText(openEditText => !openEditText)} > {text} </Typography>

                }

               
             </Box>
            </Box>
        </ClickAwayListener>
    )
}


