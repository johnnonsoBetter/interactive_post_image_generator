import { List, ListItem, Box, ButtonBase } from '@mui/material'
import React, { useContext } from 'react'
import PostDesignContext from '../../context/PostDesignContext'


export default function SpriteList() {



    const {sprites, currentSpriteId, setCurrentSpriteId, setOpen} = useContext(PostDesignContext)

    


    return (
        <List sx={{maxHeight: "calc(95vh - 70px)", overflow: 'auto'}} >
            {
                sprites.map((sprite, index) => {

                    return (
                        <ListItem key={sprite.id + index} >
                            <ButtonBase onClick={()=> {
                                setCurrentSpriteId(sprite.id)
                                setOpen(false)
                            }} sx={{p: 1, borderRadius: "10px", border: currentSpriteId === sprite.id && "2px solid dodgerBlue"}}  >
                                <Box  display='flex' justifyContent='center' alignItems='center' >
                                    <img src={sprite.imgUrl} style={{maxWidth: '100%'}} />
                                </Box>
                            </ButtonBase>
                           
                        </ListItem>
                    )
                })
            }
        </List>
    )
}