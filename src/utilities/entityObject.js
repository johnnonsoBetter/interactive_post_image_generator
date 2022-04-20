import { v4 as uuidv4 } from 'uuid';

let PaletteEntity = {
    backgroundColor: "#fff",
    
}


let getGeneratedUniqueId = (type) =>  `${Date.now()}${type}${Math.floor(Math.random() * 222100)}`



let ImageEntityObject = {
    id:  uuidv4(),
    defaultWidth: 220,
    defaultHeight: 220,
    height: 150,
    width: 160,
    type: 'img',
    borderRadius: '',
    borderColor: '',
    borderSize: ''
}

let RectangleEntityObject = {
    id:  uuidv4(),
    defaultWidth: 220,
    defaultHeight: 220,
    height: 220,
    width: 220,
    type: 'rect',
    borderRadius: '',
    borderColor: '',
    borderSize: '',
    backgroundColor: 'grey'
}

let TextEntityObject = {
    id:  uuidv4(),
    defaultWidth: 120,
    defaultHeight: 60,
    height: 120,
    width: 120,
    type: 'text',
    backgroundColor: 'grey',
    fontSize: '2rem',
    fontWeight: 'normal',
    alignment: 'left',
    color: ''
}


//  {
//     PaletteEntity,
   
// }


export {
    PaletteEntity,
    ImageEntityObject,
    TextEntityObject,
    RectangleEntityObject
}