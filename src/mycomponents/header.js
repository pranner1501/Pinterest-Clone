import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrum, Card, Form, Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Navbar from './Navbar';
// App.js
//import React from 'react';

//import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       {/* The rest of your content */}
//     </div>
//   );
// }

//export default App;


function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    // <p  onClick={decoratedOnClick}>{children}</p>
<Button className='specialtext' variant='outline-dark' size="lg" onClick={decoratedOnClick}> {children}</Button>
  );
}

export default function Header() {

  return (
    
    <div className="App">
      <header className="App-header">

      <div><Navbar /></div>
        <div className='sign-in'>
          <Container>
          <Accordion defaultActiveKey="">
          
            <Card>
              <Card.Header>
                <CustomToggle eventKey="0" >Login</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body> 
                <Form>
                  <Form.Group>
                    <Form.Label >Username</Form.Label>
                    <Form.Control type="username" placeholder='username'></Form.Control>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder='password goes here'></Form.Control>
                  </Form.Group></Form></Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <CustomToggle eventKey="1">Sign Up</CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body><Form><Form.Group>
                  <Form.Label >Email</Form.Label>
                  <Form.Control type="email" placeholder='example@email.com'></Form.Control>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder='username'></Form.Control>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder='password goes here'></Form.Control>
                </Form.Group></Form></Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
           </Container>
        </div>
      
        
      </header>


    </div>

  );
}