
import React, { useContext, useRef, useState } from 'react'
import { AddPhotoAlternateRounded, CloudDownloadOutlined, MenuRounded, DesignServicesRounded, RectangleRounded, TextIncreaseRounded, WidgetsRounded } from '@mui/icons-material'
import { IconButton, Paper, Tooltip, Zoom } from '@mui/material'
import { Box } from '@mui/system'
import { v4 as uuidv4 } from 'uuid';
import { saveAs } from 'file-saver'
import Menu from '@mui/material/Menu';
import { ChromePicker } from 'react-color';
import Entity from './entity/Entity';
import { PaletteContextProvider } from '../context/PaletteContext';
import html2canvas from 'html2canvas';
import PostDesignContext from '../context/PostDesignContext';



export default function Palette() {

    const [entities, setEntities] = useState([])
    const [backgroundColor, setBackgroundColor] = useState('#fff')
    const {setOpen} = useContext(PostDesignContext)
    
    const fileRef = useRef(null)
   
    const uploadImage = (e) => {

        e.preventDefault()
        const newImage = e.target.files[0]

        addEntity('img', URL.createObjectURL(newImage))
        
        
    }

    const generateScreenShot = () => {

      const shotTarget = document.getElementById('palette')

      html2canvas(shotTarget,
       { allowTaint: true,
            useCORS: true,
            logging: false,
            
           }
        ).then((canvas) => {
        const base64image = canvas.toDataURL("image/png");
        saveAs(base64image, 'images.png')
        
      });


    }

    const addEntity = (type, imageUrl=null) => {

        if(type === 'img')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 15,
            y: 20,
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
            zIndex: 7,
        }))
        else if(type === 'rect')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 15,
            y: 20,
            defaultWidth: 220,
            defaultHeight: 220,
            height: 220,
            width: 220,
            type: 'rect',
            elevation: 0,
            borderRadius: 0,
            borderColor: '',
            borderSize: '',
            backgroundColor: '#222d39',
            zIndex: 7
        }))
        else if(type === 'text')
          setEntities(entities.concat({
            id:  uuidv4(),
            x: 15,
            y: 20,
            defaultWidth: 250,
            defaultHeight: 100,
            height: 100,
            width: 250,
            type: 'text',
            backgroundColor: 'grey',
            fontSize: 32,
            fontWeight: 'normal',
            textAlign: 'left',
            fontFamily: 'Montserrat',
            color: '#222d39',
            zIndex: 7
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

         

            <Box height="100%"  display='flex' justifyContent='center' alignItems='center' width='90%' position='relative'  >
             
                
                    <Box height="100%"  sx={{position: 'absolute', top: 0, right: {xs: '-12%', sm: '-10%', md: '-7%'}}}  display='flex' flexDirection='column'  >


                      <IconButton sx={{display: {xs: '', sm: '', md: 'none'}}} onClick={setOpen} >
                            <MenuRounded />
                        </IconButton>


                        <ColorPicker  backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>

                        
                      
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

                        <Tooltip title='Export Image'  >
                            <IconButton disabled={entities.length === 0} onClick={generateScreenShot} >
                              <CloudDownloadOutlined />
                            </IconButton>

                        </Tooltip>
                        <input onChange={uploadImage} type='file' style={{display: 'none'}} accept='image/*' ref={fileRef} id="file" name="file" />




                    </Box>
             
                
                
                    <Paper id='palette'  elevation={4} sx={{height: "100%", width: '100%', borderRadius: '0px', backgroundColor,}} >
                   
                        {
                            entities.map((entity, index) => {

                                return (
                                    <Entity key={entity.id + index} entity={entity}  />
                                )

                            })
                        }
                         <Entity entity={ {
                              id:  uuidv4(),
                              x: 1,
                              y: 200,
                              height: 'auto',
                              width: 'auto',
                              type: 'sprite',
                            
                          }}  />
                    </Paper>

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
        <Tooltip title='palette background' >
            <IconButton size='small' onClick={handleClick} >
                <DesignServicesRounded />
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


