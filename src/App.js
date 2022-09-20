import { Navbar , Container , Nav} from 'react-bootstrap';
import './App.css';
import shoe1 from './product1.jpg';
import shoe2 from './product2.jpg';
import shoe3 from './product3.jpg';
import data from './data.js';
import { useState } from 'react';

function App() {

  let [shoes] = useState({data});

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className=''>
        <Container>
          <Navbar.Brand href="#home">예쁜쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <div className='main-bg'></div>
      <div className='main-imgbox'>
        <Card shoes={shoes}></Card>
        <Card shoes={shoes}></Card>
        <Card shoes={shoes}></Card>
      </div>
    </div>
  );
}

function Card(props){
  return (
    <div>
          <img src ={shoe1}></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </div>

  )
}


export default App;
