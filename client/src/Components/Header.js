
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { Outlet, Link, NavLink } from "react-router-dom";

import './Header.css'


export default function Header() {

    // const menuOptions = ['Services', 'Industries', 'Insights']

    // const handleClickMenuOption = () => {

    // }

    return (
        <AppBar className='header' style={{backgroundColor: '#DAAD86'}}>
            <Container  style={{maxWidth:'100%'}}>
                <Toolbar>
                    <Grid container spacing={3} >
                        <Grid item xs={6} style={{aligntItems: 'center', justifyContent: 'center', direction: 'row', display: 'flex'}}>
                            <Typography variant='h4' align='left'>Matt Wagner Consulting</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink spacing={1} to='/offerings'  className='navLink'>Offerings</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink to='/industries'  className='navLink'>Industries</NavLink>
                        </Grid>
                        <Grid item xs={2}>
                            <NavLink to='/industries'  className='navLink'>Industries</NavLink>
                        </Grid>
                    </Grid>
                    {/* <Menu></Menu> */}
                    <Outlet />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
