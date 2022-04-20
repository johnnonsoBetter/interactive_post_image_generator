import { Box, Typography} from '@mui/material'
import React, {useContext} from 'react'
import PostDesignContext from '../context/PostDesignContext'
import SpriteList from './sprites/SpriteList'


export default function SideBar({sprites}) {

    const {createPalette} = useContext(PostDesignContext)


    return (
        <Box px={1} my={1}>
            
            <Typography variant='body1' py={1} color="initial">Select Sprites</Typography>
            <Box  >

                <SpriteList />
            </Box>


        </Box>
    )
}