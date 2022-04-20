import { List, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import PostDesignContext from '../context/PostDesignContext'


export default function PaletteList() {



    const {palettes} = useContext(PostDesignContext)


    return (
        <List sx={{maxHeight: "calc(95vh - 70px)", overflow: 'auto'}} >
            {
                palettes.map((p, index) => {

                    return (
                        <ListItem key={p.id + index} >
                            This is the same palette
                        </ListItem>
                    )
                })
            }
        </List>
    )
}