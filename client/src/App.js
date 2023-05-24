// import logo from './logo.svg';
import './App.css'
import { Grid, Box, Typography, Paper } from '@mui/material'
import mattimage from './assets/mattheadshot.jpg'

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
      <Grid 
        container
      >
        <Grid item>
          <img alt="Headshot of Matt" src={mattimage}></img>
        </Grid>
      </Grid>
    </div>
  )

}

export default App
