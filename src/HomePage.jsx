import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './App.css';

function HomePage() {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#430A5D' }}>
                <Navbar.Brand href="#" style={{ paddingLeft: '20px', color: 'white' }}>Text Converter</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNavDropdown" />
                <Navbar.Collapse id="navbarNavDropdown">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" style={{ paddingLeft: '20px', color: 'white' }}>Home</Nav.Link>
                        <Nav.Link href="/WordCounter" style={{ paddingLeft: '20px', color: 'white' }}>Word Counter</Nav.Link>
                        <Nav.Link href="/TextConverter" style={{ paddingLeft: '20px', color: 'white' }}>Converter</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="homepage d-flex justify-content-center align-items-center" style={{ marginTop: '180px' }}>
                <h1>Your Text Converter</h1>
            </div>
            <div className="converter-info text-center" style={{ marginTop: '20px' }}>
                <p style={{ color: '#5F374B', fontSize: '25px' }}><b>This is your text converter. Write any text here and convert it according to your style.</b></p><p style={{ color: '#5F374B', fontSize: '25px' }}><b>Enjoy Text Editing.😎😎</b></p>
            </div>
        </>
    );
}

export default HomePage;
