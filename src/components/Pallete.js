import { Container, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



export default function Pallete() {

    return (
        <Box height="80%" width='100%'  >
            
            <Container maxWidth="md" sx={{height: "100%"}} >
                <Paper elevation={4} sx={{height: "100%"}} >
                </Paper>
            </Container>

        </Box>
    )
}