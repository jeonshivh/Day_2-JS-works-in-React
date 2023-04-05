import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhoneIcon from '@mui/icons-material/Phone';

function Webfooter() {
  return (
    <footer>
    <div class="bottomleft">
    
        <Navbar bg="secondary" variant='white' fixed="bottom" text='center'>
        <Container text="center">
        <div>
            <h6>ADDRESS:</h6>
        <p>27,North Street,Bangalore.</p>
        </div>
        <div>
        <h6>CONTACT:</h6>
        <p><PhoneAndroidIcon></PhoneAndroidIcon>+91 9876543210</p>
        <p><PhoneIcon></PhoneIcon>411 098 678</p>
        </div>
        <div>
        <h6>MAIL US</h6>
        <p>info@gmail.com</p>
        </div>
        </Container>
      </Navbar>      
    
        
        </div>
        </footer>
        
    
  );
}

export default Webfooter