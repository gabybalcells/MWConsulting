import React from 'react';
import './App.css';
import { Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from './Components/Header'

import mattimage from './assets/mattheadshot.jpg'
import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Components/Services';
import Industries from './Components/Industries';
import Insights from './Components/Insights';


function App() {

  // useEffect(() => {
  //   const script = document.createElement('script');

  //   script.src = "https://publisher.impartner.io/Csp/?vendorName=smartsheet-channel-program&partnerId=08da929c-41b7-96f3-c8ea-e90006006105";
  //   script.async = true;

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, [])



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
            <Header/>
          {/* <Grid item xs={7.5}> 
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
            </Grid>     */}
        </Grid>
      </Box>
      <Grid 
        container
      >
      {/* <div class='showcase'></div> */}
        {/* <Grid item>
          <img alt="Headshot of Matt" src={mattimage}></img>
        </Grid> */}
      </Grid>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route exact path='services' element={<Services/>}/>
            <Route exact path='industries' element={<Industries/>}/>
            <Route exact path='insights' element={<Insights/>}/>
          </Route>
        </Routes>
    </div>
  )

}

export default App
