import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PaletteContext from '../../../../../context/PaletteContext';


export default function FontSize({entity}) {

 const [size, setSize] = React.useState(entity.fontSize)
 const {updateEntity} = React.useContext(PaletteContext)

 React.useEffect(() => {
    if(size <= -1){
        setSize(0)
        return
    }
    
    const newEntity = Object.assign(entity, {})
    newEntity.fontSize = size
   

    updateEntity(newEntity)
    

  }, [size])
 


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
        <Button key="one" size='small' variant='contained' onClick={() => setSize(size => size - 1)} endIcon={<ArrowBackIos />}></Button>
        <Typography variant='body2' px={2}> {size}px </Typography>
        <Button key="three" size='small' onClick={() => setSize(size => size + 1)} variant='contained' endIcon={<ArrowForwardIos />}></Button>
      </ButtonGroup>
   
    </Box>
  );
}
