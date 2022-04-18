import { AddPhotoAlternateRounded, AddRounded, FolderZipRounded, TextIncreaseRounded } from '@mui/icons-material'
import { BottomNavigation, Box, Button, IconButton, Paper, Tooltip } from '@mui/material'
import React from 'react'


export default function SideBar() {


    return (
        <Box px={1}>
            <Box display='flex' justifyContent='space-around' >
              
                <Tooltip title='Add Text' >
                    <IconButton >
                        <TextIncreaseRounded />
                    </IconButton>

                </Tooltip>

                <Tooltip title='Add Image' >
                    <IconButton >
                        <AddPhotoAlternateRounded />
                    </IconButton>

                </Tooltip>

               
            </Box>
            <Button sx={{backgroundColor: 'dodgerblue'}} disableElevation variant='contained' startIcon={<AddRounded />} fullWidth size='small' > New Design</Button>


            <Paper   sx={{ position: 'fixed', px: 1, zIndex: 500, height: 50, width: 280, bottom: 0,right: 0}} elevation={3}>
                <BottomNavigation
                showLabels
            
               
                >
                    <Button  sx={{backgroundColor: 'dodgerblue'}} disableElevation variant='contained' startIcon={<FolderZipRounded />} fullWidth size='small' > Generate Images</Button>

            
                </BottomNavigation>
            </Paper>

        </Box>
    )
}