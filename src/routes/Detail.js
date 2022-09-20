import react, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';


function Detail(props){

  let {id} = useParams();
  let 찿은상품 = props.shoes.find(function(x){return x.id ==id});

  let [alert, setalert] = useState(true)
  let [num, setNum] = useState('')
  

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
    </div> 
    )
}

export default Detail;