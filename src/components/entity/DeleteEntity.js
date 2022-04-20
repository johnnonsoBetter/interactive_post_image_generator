import { DeleteRounded } from '@mui/icons-material'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import React, { useContext } from 'react'  
import PaletteContext from '../../context/PaletteContext'


export default function DeleteEntity({id}) {

  const {removeEntity} = useContext(PaletteContext)


    return (
        <Tooltip title='remove' >
        <IconButton size='small' onClick={() => {removeEntity(id)}}  >
            <Avatar sx={{width: 32, height: 32}} >
              <DeleteRounded  color='action' fontSize='16px' />
            </Avatar>
        </IconButton>
      </Tooltip>
    )
}