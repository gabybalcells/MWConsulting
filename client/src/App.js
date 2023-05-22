// import logo from './logo.svg';
import './App.css'
import { Grid, Box, Typography, Paper } from '@mui/material'

function App() {
  return (
    <div>
      <Box>
        <Grid className="App"
          container
          spacing={2}
          justifyContent="center"
          alignItems="flex-end"
          paddingBottom='10px'
          paddingLeft='10px'
          paddingRight='10px'
          // textAlign='center'
          >
          <Grid item xs={7.5}> 
              <Typography className='siteName' variant='h4'>Matt Wagner Consulting</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography className='pageLink' variant='h6'>Services</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography className='pageLink' variant='h6'>Industries</Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography className='pageLink' variant='h6'>Insights</Typography>
            </Grid>    
        </Grid>
      </Box>
      <Paper className='body'>placeholder</Paper>

    {/* <div className="App">
      <h1 >
          Matthew Wagner Consulting
        </h1>
        <h3 >
          Services
        </h3>
        <h3 >
          Industries
        </h3>
        <h3 >
          Insights
        </h3>    
    </div> */}
    </div>
  )

}

export default App
