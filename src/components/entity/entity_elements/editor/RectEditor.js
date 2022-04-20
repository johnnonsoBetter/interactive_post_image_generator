import { List, ListItemText, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import BorderRadius from './img_editor/BorderRadius'
import Elevation from './img_editor/Elevation'
import BackgroundColor from './rect_editor/BackgroundColor'



export default function RectEditor({entity}) {


    return (
        <List >
             
             <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Background</Typography>
                    </ListItemText>

                    <Box >
                        <BackgroundColor entity={entity} />
                    </Box>
                </Box>
            </ListItem>

            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Elevation</Typography>
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