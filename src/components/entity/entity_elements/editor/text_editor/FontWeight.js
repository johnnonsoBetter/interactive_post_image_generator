import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { FormatBoldRounded } from '@mui/icons-material';
import PaletteContext from '../../../../../context/PaletteContext';

export default function FontWeight({entity}) {
  const [selected, setSelected] = React.useState(entity.fontWeight === 'bold');
  const {updateEntity} = React.useContext(PaletteContext)

  React.useEffect(() => {

    const newEntity = Object.assign(entity, {})
    newEntity.fontWeight = selected ? 'bold' : 'normal' 
   

    if(selected)
        setSelected(true)
    else
        setSelected(false)

    updateEntity(newEntity)
    

  }, [selected])

  return (
    <ToggleButton
      value="check"
      selected={selected}
      size='small'
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <FormatBoldRounded  fontSize='1rem' />
    </ToggleButton>
  );
}
