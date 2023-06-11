
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
import { Outlet, Link } from "react-router-dom";


export default function Header() {

    // const menuOptions = ['Services', 'Industries', 'Insights']

    // const handleClickMenuOption = () => {

    // }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography>Matt Wagner Consulting</Typography>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/services'>Services</Link>
                            </li>
                            <li>
                                <Link to='/industries'>Industries</Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
