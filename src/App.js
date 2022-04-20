import React from 'react'
import { Drawer, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import {createTheme, ThemeProvider} from '@mui/material'

import NoDesign from "./components/NoDesign";
import Palette from "./components/Palette";
import SideBar from "./components/SideBar";
import { PostDesignContextProvider } from "./context/PostDesignContext";
import {PaletteEntity} from './utilities/entityObject'

import { sprites } from './utilities/spriteDb';


const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat', 'Quicksand', 'sans-serif',
    ].join(','),
  },
});


function App() {

  const [palettes, setPalettes] = useState([])
  const [currentSpriteId, setCurrentSpriteId] = useState(sprites[0].id)
  const [open, setOpen] = useState(false)
  


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
          open, 
          setOpen: (o) => setOpen(o),
          createPalette,
          currentSpriteId,
          setCurrentSpriteId: (spriteid) => setCurrentSpriteId(spriteid)
        }}
      
      >
        
        <Grid  container>
          <Grid item xs={12} sm={12} md={9} >
            
            <Box height="calc(100vh - 20px)" display='flex' alignItems='center' width='100%' >
              
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
          <Drawer
            anchor='left'
            open={open}
            onClose={() => setOpen(false)}
          >
            <SideBar sprites={sprites} />
          </Drawer>
      </PostDesignContextProvider>      
      </ThemeProvider> 
    </div>
  );
}

export default App;


