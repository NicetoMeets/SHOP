import { Navbar , Container , Nav} from 'react-bootstrap';
import './App.css';
import shoe0 from './product1.jpg';
import shoe1 from './product2.jpg';
import shoe2 from './product3.jpg';
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark" className=''>
        <Container>
          <Navbar.Brand href="#home">예쁜쇼핑몰</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail/0</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


    <Routes>
      <Route path='/' element={ 
      <div>
      <div className='main-bg'></div>
      <div className='main-imgbox'>
        { shoes.map((a,i)=>{ 
          return ( <Card shoes={shoes[i]} i={i} key={i}></Card>)
        })}
      </div>
    </div> 
  } />
      <Route path='/detail:id' element={<Detail shoes={shoes}></Detail>}></Route>
      
    </Routes>
    
    </div>
  );
}


function Card(props){
  return (
        <div>
          <img src ={shoe1}></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}원</p>
        </div>

  )
}



export default App;
