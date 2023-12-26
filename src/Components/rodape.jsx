

import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './rodape.css'

function rodape (){
    return(
        <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand className = "centro" href="#home">Front-End - SENAI - Maracanã</Navbar.Brand>
          
        </Container>
      </Navbar>
        </>
    )

}
export default rodape