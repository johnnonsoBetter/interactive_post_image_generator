import { ClickAwayListener, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react' 
import PaletteContext from '../../../context/PaletteContext';
import DeleteEntity from '../DeleteEntity';
import EditMenu from '../edit_entity/EditMenu';
import ImgEditor from './editor/ImgEditor';

export default function ImageEntity({entity, width, height}) {

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
                <Box  position='fixed' right={0} left={0} display='flex' justifyContent='space-between' top={-45}>
                
                <DeleteEntity id={id} />
                <EditMenu editor={<ImgEditor  entity={entity}/>} />
                </Box>
            ) : null}
     
            <Paper elevation={entity.elevation} onClick={handleClick} sx={{ border: open ? "2px solid dodgerBlue" : null, borderRadius: `${entity.borderRadius}px`}}  height={height}  width={width} >
                    <img height={height}   width={width} src={entity.imageUrl} style={{maxWidth: "100%", borderRadius: `${entity.borderRadius}px`}} />
            </Paper>
            </Box>
        </ClickAwayListener>
    )
}