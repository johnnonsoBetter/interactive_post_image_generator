import React from 'react'
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {createTheme, ThemeProvider} from '@mui/material'

import NoDesign from "./components/NoDesign";
import Palette from "./components/Palette";
import SideBar from "./components/SideBar";
import { PostDesignContextProvider } from "./context/PostDesignContext";
import {PaletteEntity} from './utilities/entityObject'
import { v4 as uuidv4 } from 'uuid';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'Quicksand', 'sans-serif',
    ].join(','),
  },
});


const sprites = [
  {
    id: uuidv4(),
    imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/c_fit,q_100,w_200/v1650440985/sprites/cartoon-smiling-female-teacher-with-pointer-vector-14071505-removebg-preview_fefxlw.png'
  },
  {
    id: uuidv4(),
    imgUrl: 'https://res.cloudinary.com/dn6vnxbnm/image/upload/c_fit,q_100,w_200/v1650440198/sprites/cute-teacher-cartoon-holding-a-pointer-vector-11141472-removebg-preview_g80hhq.png'
  },
]

function App() {

  const [palettes, setPalettes] = useState([])
  const [currentSpriteId, setCurrentSpriteId] = useState(sprites[0].id)
  


  const createPalette = () => {

    setPalettes(palettes.concat({backgroundColor: "green"})) 
  }
  

  return (
    <div className="App">
      <ThemeProvider theme={theme} >
      <PostDesignContextProvider 

        value={{
          palettes,
          sprites,
          createPalette,
          currentSpriteId,
          setCurrentSpriteId: (spriteid) => setCurrentSpriteId(spriteid)
        }}
      
      >
        <Grid  container>
          <Grid item xs={12} sm={12} md={9} >
            
            <Box height="calc(100vh)" display='flex' alignItems='center' width='100%' >
              
              {
                palettes.length === 0 ?
                <NoDesign /> :
                <Palette />

              }
            </Box>
          </Grid>

          <Grid item sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}  md={3} >
            <Box display='flex'  justifyContent='flex-end'>
              <Box width={280} sx={{backgroundColor: "white", height: "calc(100vh)"}} >
                <SideBar sprites={sprites} />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </PostDesignContextProvider>      
      </ThemeProvider> 
    </div>
  );
}

export default App;


