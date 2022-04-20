import React, { useRef, useState } from 'react'
import { AddPhotoAlternateRounded, CloudDownloadOutlined, DesignServicesRounded, RectangleRounded, TextIncreaseRounded, WidgetsRounded } from '@mui/icons-material'
import { Button, Container, IconButton, Paper, Tooltip, Zoom } from '@mui/material'
import { Box } from '@mui/system'
import { v4 as uuidv4 } from 'uuid';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { ChromePicker } from 'react-color';
import Entity from './entity/Entity';
import {ImageEntityObject, TextEntityObject, RectangleEntityObject} from '../utilities/entityObject'
import { PaletteContextProvider } from '../context/PaletteContext';



export default function Palette() {

    const [entities, setEntities] = useState([])
    const [backgroundColor, setBackgroundColor] = useState('#fff')
    const [image, setImage] = useState(null)
    
    const fileRef = useRef(null)
   
    const uploadImage = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]
        setImage(newImage)


        addEntity('img', URL.createObjectURL(newImage))
        
        
    }

    const addEntity = (type, imageUrl=null) => {

        if(type === 'img')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 150,
            y: 205,
            defaultWidth: 220,
            defaultHeight: 220,
            height: 150,
            width: 160,
            type: 'img',
            elevation: 0,
            borderRadius: 0,
            borderColor: '',
            borderSize: '',
            imageUrl,
        }))
        else if(type === 'rect')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 150,
            y: 205,
            defaultWidth: 220,
            defaultHeight: 220,
            height: 220,
            width: 220,
            type: 'rect',
            elevation: 0,
            borderRadius: 0,
            borderColor: '',
            borderSize: '',
            backgroundColor: '#222d39'
        }))
        else if(type === 'text')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 150,
            y: 205,
            defaultWidth: 120,
            defaultHeight: 30,
            height: 70,
            width: 170,
            type: 'text',
            backgroundColor: 'grey',
            fontSize: 24,
            fontWeight: 'normal',
            textAlign: 'left',
            fontFamily: 'Montserrat',
            color: '#222d39'
        }))
       
    }


    return (
        
          <PaletteContextProvider
            value={{
              entities,

              removeEntity: (id) => {

                const newEntities = entities.filter(entity => entity.id !== id)
                setEntities(newEntities)
              }, 

              updateEntity: (updatedEntity) => {
               
                const newEntities = entities.map(entity => {
                  return entity.id === updatedEntity.id ? updatedEntity : entity
                })

                setEntities(newEntities)
              }
            }}
          >
            <Zoom in={true} >

            <Box height="80%"  width='100%'  >
             
                <Container maxWidth="lg"  >
                    <Box display='flex' justifyContent='space-between' >

                    <ColorPicker  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>

                    <Box display='flex' alignItems='center' justifyContent='space-around' my={1} >

                        <Button size='small' endIcon={<CloudDownloadOutlined /> } sx={{height: 25, mr: 1}} variant='contained' >
                          Export 
                        </Button>
                        <Tooltip title='Text'  >
                            <IconButton onClick={() => addEntity('text')} >
                                <TextIncreaseRounded />
                            </IconButton>

                        </Tooltip>

                        

                        <Tooltip title='Image' >
                            <IconButton onClick={() => {
                              const file = fileRef.current 

                              file.click()
                            }}  >
                                <AddPhotoAlternateRounded />
                            </IconButton>

                        </Tooltip>

                        <Tooltip title='Rect'  >
                            <IconButton onClick={() => addEntity('rect')} >
                                <RectangleRounded />
                            </IconButton>

                        </Tooltip>
                        <input onChange={uploadImage} type='file' style={{display: 'none'}} accept='image/*' ref={fileRef} id="file" name="file" />



                    </Box>


                    </Box>
                    
                </Container>
               
                <Container maxWidth="lg" sx={{height: "100%"}}  >
                    <Paper elevation={4} sx={{height: "100%", backgroundColor,}} >
                        {
                            entities.map((entity, index) => {

                                return (
                                    <Entity key={entity.id + index} entity={entity}  />
                                )

                            })
                        }
                         <Entity entity={ {
                              id:  uuidv4(),
                              x: 15,
                              y: 20,
                              height: 'auto',
                              width: 'auto',
                              type: 'sprite',
                            
                          }}  />
                    </Paper>
                </Container>

            </Box>
            </Zoom>
            </PaletteContextProvider>              
        
       
    )
}


function ColorPicker({backgroundColor, setBackgroundColor}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeComplete = (color) => {
    setBackgroundColor(color.hex)
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='background color' >
            <IconButton size='small' onClick={handleClick} >
                <DesignServicesRounded fontSize='16px' />
            </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="picker-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <ChromePicker onChangeComplete={handleChangeComplete} color={backgroundColor}/>
      </Menu>
    </React.Fragment>
  );
}



