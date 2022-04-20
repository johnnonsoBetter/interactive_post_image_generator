import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PaletteContext from '../../../../../context/PaletteContext';

export default function BorderRadius({entity}) {

 const [borderRadius, setBorderRadius] = React.useState(entity.borderRadius)
 const {updateEntity} = React.useContext(PaletteContext)

 React.useEffect(() => {

    if(borderRadius <= -1){
        setBorderRadius(0)
        return
    }
        

    const newEntity = Object.assign(entity, {})
    newEntity.borderRadius = borderRadius 
   
    updateEntity(newEntity)
    

  }, [borderRadius])
 


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
      <ButtonGroup borderRadius="small" aria-label="small button group">
        <Button key="one" size='small' variant='contained' onClick={() => setBorderRadius(borderRadius => borderRadius - 1)} endIcon={<ArrowBackIos />}></Button>
        <Typography variant='body2' px={2}> {borderRadius}</Typography>
        <Button  size='small'key="three" onClick={() => setBorderRadius(borderRadius => borderRadius + 1)} variant='contained' endIcon={<ArrowForwardIos />}></Button>
      </ButtonGroup>
   
    </Box>
  );
}
