
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
        <AppBar className='header'>
            <Container>
                <Toolbar>
                    <Grid container spacing={2} >
                        <Grid item>
                            <Typography variant='h4'>Matt Wagner Consulting</Typography>
                        </Grid>
                        <Grid item>
                            <NavLink spacing={1} to='/offerings'>Offerings</NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to='/industries'>Industries</NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to='/industries'>Industries</NavLink>
                        </Grid>
                    </Grid>
                    {/* <Menu></Menu> */}
                    <Outlet />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
