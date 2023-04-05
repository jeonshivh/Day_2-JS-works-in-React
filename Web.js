import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import MoodIcon from '@mui/icons-material/Mood';
//import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Web() {
  return (
    <div>
        <Navbar bg="secondary" variant='white'>
        <Container>
        <ShoppingCartIcon></ShoppingCartIcon>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
    </div>




    
  )
}

export default Web