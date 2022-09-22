import react, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Nav} from 'react-bootstrap';


function Detail(props){

  let {id} = useParams();
  let 찿은상품 = props.shoes.find(function(x){return x.id ==id});

  let [alert, setalert] = useState(true);
  let [num, setNum] = useState('');
  let [tab, settab] = useState(0);

  useEffect(()=>{ let a = setTimeout(() => { setalert(false)}, 2000);
  }, [num])


    return (
    <div className="container">
      {
        alert==true? <div>2초안에 구매시 할인해줌</div>:null

      }
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찿은상품.title}</h4>
            <p>{찿은상품.content}</p>
            <p>{찿은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={()=>settab(0)}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={()=>settab(1)}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={()=>settab(2)}>버튼2</Nav.Link>
      </Nav.Item>
    </Nav>
      <Tab tab={tab} ></Tab>
    </div> 
    )
}

function Tab(props){
  if(props.tab==0){
    return (<div>탭0내용입니다</div>)
  }
  else if(props.tab==1){
    return (<div>탭1내용입니다</div>)
  }
  else if(props.tab==2){
    return (<div>탭2내용입니다</div>)
  }
}





export default Detail;