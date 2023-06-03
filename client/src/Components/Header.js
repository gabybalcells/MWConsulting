
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


export default function Header() {

    const menuOptions = ['Services', 'Industries', 'Insights']

    const handleClickMenuOption = () => {

    }

    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography>Matt Wagner Consulting</Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        {menuOptions.map((option) => (
                            <Button
                                key={option}
                                onClick={handleClickMenuOption}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {option}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
