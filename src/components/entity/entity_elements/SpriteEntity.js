import { DeleteRounded } from '@mui/icons-material';
import { Avatar, ClickAwayListener, IconButton, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react' 
import PostDesignContext from '../../../context/PostDesignContext';


export default function SpriteEntity({entity, width, height}) {

    const [open, setOpen] = React.useState(false);
    
    const {sprites, currentSpriteId, setCurrentSpriteId} = useContext(PostDesignContext)

    const {id} = entity
    const sprite = sprites.find(sprite => sprite.id == currentSpriteId)
    const src = sprite ? sprite.imgUrl : null

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
       
        <div >

            {
                sprite && 
                <ClickAwayListener onClickAway={handleClickAway}>
                <Box position='relative'>
                
                {open ? (
                    <Box position='fixed' right={0} left={0} display='flex' justifyContent='space-between' top={-45}>
                    
                    <Tooltip title='remove' >
                        <IconButton size='small' onClick={() => setCurrentSpriteId(null)}  >
                            <Avatar sx={{width: 32, height: 32}} >
                            <DeleteRounded  color='action' fontSize='16px' />
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                   
                    </Box>
                ) : null}
                 <Box onClick={handleClick} sx={{border: open ? "2px solid dodgerBlue" : null, borderRadius: '10px'}}  height={height}  width={width} >
                    <img height={height}  width={width} src={src} style={{maxWidth: "80%", objectFit: 'scale-down', objectPosition: 'center'}} />
                </Box>
                </Box>
            </ClickAwayListener>
            }
        </div>
       
    )
}