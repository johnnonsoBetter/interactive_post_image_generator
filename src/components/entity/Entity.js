import { Divider } from '@mui/material';
import React, { useState, useContext } from 'react' 
import { Rnd } from 'react-rnd';
import ImageEntity from './entity_elements/ImageEntity';
import RectangleEntity from './entity_elements/RectangleEntity';
import TextEntity from './entity_elements/TextEntity';
import PaletteContext from '../../context/PaletteContext'
import SpriteEntity from './entity_elements/SpriteEntity';


export default function Entity({entity}) {


    const [x, setX] = useState(entity.x)
    const [y, setY] = useState(entity.y)
    const [width, setWidth] = useState(entity.width)
    const [height, setHeight] = useState(entity.height)
    const {type} = entity
    const {updateEntity} = useContext(PaletteContext)

    return (
   
        <Rnd
          default={{
            x,
            y,
            width,
            height,
          }}
          onResize={(e, direction, ref, delta, position) => {
              setWidth(ref.offsetWidth)
              setHeight(ref.offsetHeight)

              const newEntity = Object.assign({}, entity)
              newEntity.width = ref.offsetWidth
              newEntity.height = ref.offsetHeight

              updateEntity(newEntity)

          

          }}

          style={{position: 'fixed', zIndex: entity.zIndex}}
          

          onDragStop={(e, d) => {
            // setWidth(ref.offsetWidth)
            // setHeight(ref.offsetHeight)

            setY(d.y)
            setX(d.x)

            const newEntity = Object.assign({}, entity)
            newEntity.x = d.x
            newEntity.y = d.y

            updateEntity(newEntity)

            

          }}
         
          bounds="parent"
        >
         
  
         {
         
                type === 'text' ? <TextEntity width={width} height={height} entity={entity} />
                : type === 'rect' ? <RectangleEntity width={width} height={height} entity={entity} /> : 
                type === 'img' ? <ImageEntity width={width} height={height} entity={entity} /> : 
                type === 'sprite' ? <SpriteEntity width={width} height={height} entity={entity} /> : null
         }
        </Rnd>
     
    );
}

