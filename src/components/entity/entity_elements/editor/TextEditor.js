import { List, ListItemText, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react' 
import Overlap from './Overlap'
import FontFamily from './text_editor/FontFamily'
import FontSize from './text_editor/FontSize'
import FontWeight from './text_editor/FontWeight'
import TextColor from './text_editor/TextColor'
import ToggleAlignment from './text_editor/ToggleAlignment'


export default function TextEditor({entity}) {


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
                        <Typography variant='body2' > Color/Typeface</Typography>
                    </ListItemText>

                    <Box display='flex' alignItems='center' width="100%"  justifyContent='flex-end' >
                   
                    <Box >
                            <TextColor entity={entity} />
                        </Box>

                        <Box >
                            <FontWeight entity={entity} />
                        </Box>
                    </Box>
                </Box>

                
            </ListItem>


            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Alignment</Typography>
                    </ListItemText>

                    <Box >
                        <ToggleAlignment entity={entity} />
                    </Box>
                </Box>
            </ListItem>

            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > Size</Typography>
                    </ListItemText>

                    <Box >
                        <FontSize entity={entity} />
                    </Box>
                </Box>
            </ListItem>

            <ListItem >
                <Box display='flex' alignItems='center' width="100%"  justifyContent='space-between' >
                    <ListItemText  > 
                        <Typography variant='body2' > FontFamily</Typography>
                    </ListItemText>

                    <Box >
                        <FontFamily entity={entity} />
                    </Box>
                </Box>
            </ListItem>

           
        </List>
    )
}