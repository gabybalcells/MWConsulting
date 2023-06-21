import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link, NavLink } from "react-router-dom";

import './Header.css'

export default function Header() {

    // const menuOptions = ['Services', 'Industries', 'Insights']

    // const handleClickMenuOption = () => {

    // }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Box>
                        <Stack >
                            <Box spacing={2}>
                                <div className='navBar'>
                                <Typography sx={{p:2}}>Matt Wagner Consulting</Typography>
                                <NavLink to='/services' className='navTab' sx={{p:2}}>Services</NavLink>
                                <NavLink to='/industries' className='navTab' sx={{p:2}}>Industries</NavLink>
                                <NavLink to='/industries' className='navTab' sx={{p:2}}>Insights</NavLink>
                                </div>
                            </Box>

                        </Stack>
                    </Box>
                       
                    {/* <Outlet /> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}
