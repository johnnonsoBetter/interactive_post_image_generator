import { List, ListItemText, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import BorderRadius from './img_editor/BorderRadius'
import Elevation from './img_editor/Elevation'
import Overlap from './Overlap'



export default function ImgEditor({entity}) {


    return (
        <List >
             
             <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Overlap</Typography>
                    </ListItemText>

                    <Box >
                        <Overlap entity={entity} />
                    </Box>
                </Box>
            </ListItem>

            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Shadow</Typography>
                    </ListItemText>

                    <Box >
                        <Elevation entity={entity} />
                    </Box>
                </Box>
            </ListItem>

            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Radius</Typography>
                    </ListItemText>

                    <Box >
                        <BorderRadius entity={entity} />
                    </Box>
                </Box>
            </ListItem>

          
           
        </List>
    )
}