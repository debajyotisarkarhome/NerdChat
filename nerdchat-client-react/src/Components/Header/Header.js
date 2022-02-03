import {Toolbar,AppBar,Typography,Button} from '@mui/material'
import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./header.css"


const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" style={{ background: '#962a8a' }}>
      <Toolbar variant="dense">
        <Link to="/" style={{ textDecoration: 'none' }}><Typography variant="h6" color="white" sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}>🤓 NerdChat</Typography></Link>
        
        <Button color="inherit" onClick={()=>{
          navigate("/")
        }}>Home</Button>

        <Button color="inherit" onClick={()=>{
          navigate("/randomChat")
        }}>Anonymous P2P Chat</Button>

        <Button color="inherit">Meaw</Button>
        <Button color="inherit">Bhow</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Header;