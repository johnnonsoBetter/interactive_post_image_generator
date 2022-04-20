import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PaletteContext from '../../../../../context/PaletteContext';

export default function Elevation({entity}) {

 const [elevation, setElevation] = React.useState(entity.elevation)
 const {updateEntity} = React.useContext(PaletteContext)

 React.useEffect(() => {

    if(elevation <= -1){
        setElevation(0)
        return
    }
        

    const newEntity = Object.assign(entity, {})
    newEntity.elevation = elevation 
   
    updateEntity(newEntity)
    

  }, [elevation])
 


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
      <ButtonGroup elevation="small" aria-label="small button group">
        <Button key="one" size='small' variant='contained' onClick={() => setElevation(elevation => elevation - 1)} endIcon={<ArrowBackIos />}></Button>
        <Typography variant='body2' px={2}> {elevation}</Typography>
        <Button  size='small'key="three" onClick={() => setElevation(elevation => elevation + 1)} variant='contained' endIcon={<ArrowForwardIos />}></Button>
      </ButtonGroup>
   
    </Box>
  );
}
