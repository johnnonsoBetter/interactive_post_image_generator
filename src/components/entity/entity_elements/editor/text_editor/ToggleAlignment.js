import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import PaletteContext from '../../../../../context/PaletteContext';

export default function ToggleAlignment({entity}) {
  const [alignment, setAlignment] = React.useState(entity.textAlign);
  const {updateEntity} = React.useContext(PaletteContext)

  const handleAlignment = (event, newAlignment) => {
    const newEntity = Object.assign(entity, {})
    newEntity.textAlign = newAlignment
    updateEntity(newEntity)
    setAlignment(newAlignment);
  };


  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      size='small'
    >
      <ToggleButton size='small' value="left" aria-label="left aligned">
        <FormatAlignLeftIcon  fontSize='1rem'/>
      </ToggleButton>
      <ToggleButton size='small' value="center" aria-label="centered">
        <FormatAlignCenterIcon fontSize='1rem' />
      </ToggleButton>
      <ToggleButton size='small' value="right" aria-label="right aligned">
        <FormatAlignRightIcon  fontSize='1rem'/>
      </ToggleButton>
    
    </ToggleButtonGroup>
  );
}
