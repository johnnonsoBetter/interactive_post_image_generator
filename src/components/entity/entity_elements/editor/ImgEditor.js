import { List, ListItemText, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import BorderRadius from './img_editor/BorderRadius'
import Elevation from './img_editor/Elevation'
import FontFamily from './text_editor/FontFamily'
import FontSize from './text_editor/FontSize'
import FontWeight from './text_editor/FontWeight'
import TextColor from './text_editor/TextColor'
import ToggleAlignment from './text_editor/ToggleAlignment'


export default function ImgEditor({entity}) {


    return (
        <List >
             


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