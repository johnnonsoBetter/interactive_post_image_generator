import React, { useContext } from 'react' 
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { AddRounded } from '@mui/icons-material'
import PostDesignContext from '../context/PostDesignContext'


export default function NoDesign() {

    const {createPalette} = useContext(PostDesignContext)


    return (
        <Box width='100%'>
            <Box width='100%' display='flex' justifyContent='center' >
                <Typography  textAlign='center' fontWeight={700}  color="initial"> Start Making Interactive Post Design Images!</Typography>
            </Box>

            <Box width='100%' display='flex' justifyContent='center' >
                <Button onClick={createPalette} sx={{backgroundColor: 'dodgerblue'}} disableElevation variant='contained' startIcon={<AddRounded />}  size='small' > New Design</Button>
            </Box>
            
        </Box>
    )
}