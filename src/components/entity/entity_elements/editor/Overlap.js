import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PaletteContext from '../../../../context/PaletteContext';


export default function Overlap({entity}) {

 const [zIndex, setZIndex] = React.useState(entity.zIndex)
 const {updateEntity} = React.useContext(PaletteContext)

 React.useEffect(() => {
    if(zIndex <= -1){
        setZIndex(0)
        return
    }
    
    const newEntity = Object.assign(entity, {})
    newEntity.zIndex = zIndex
   

    updateEntity(newEntity)
    

  }, [zIndex])
 


  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup size="small" aria-label="small button group">
        <Button key="one" size='small' variant='contained' onClick={() => setZIndex(zIndex => zIndex - 1)} endIcon={<ArrowBackIos />}></Button>
        <Typography variant='body2' px={2}> {zIndex} </Typography>
        <Button key="three" size='small' onClick={() => setZIndex(zIndex => zIndex + 1)} variant='contained' endIcon={<ArrowForwardIos />}></Button>
      </ButtonGroup>
   
    </Box>
  );
}
