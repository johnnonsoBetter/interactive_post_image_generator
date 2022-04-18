import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Pallete from "./components/Pallete";
import SideBar from "./components/SideBar";


function App() {
  return (
    <div className="App">
     
     
        <Grid  container>
          <Grid item xs={12} sm={12} md={9}>
            
            <Box height="calc(100vh)" display='flex' alignItems='center' width='100%' >
              <Pallete />
            </Box>
          </Grid>

          <Grid item sx={{display: {xs: 'none', sm: 'none', md: 'block'}}}  md={3} >
            <Box display='flex'  justifyContent='flex-end'>
              <Box width={280} sx={{backgroundColor: "white", height: "calc(100vh)"}} >
                <SideBar />
              </Box>
            </Box>
          </Grid>

        </Grid>
    
    </div>
  );
}

export default App;


