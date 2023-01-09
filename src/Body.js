import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';

function Body(){
    const[items,setitems]=useState([]);
    useEffect(()=>{
        axios.get('https://kontests.net/api/v1/all')
        .then((res)=>{
            setitems(res.data);
             console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])

    const itemslist=items.map((obj)=>{
         return (
        
             <div className="card col-md-4 obj">
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kP97Ad3lCDWSjdP3mNkzkTJWNzixpVPh2Q&usqp=CAU" alt="Card image cap"></img>
            
             <div className="text">
                <h4>{obj.name}</h4>
                <p>{obj.site}</p><br/>
                <p>start: {obj.start_time.slice(0,10)}</p> <p>end: {obj.end_time.slice(0,10)}</p>
               <a href={obj.url} target="_black"><button className="btn btn-primary">GO</button></a>
             </div>
            </div>
       
         )
    })
    
    return (
        <div className='row'>
           
              
              {itemslist}
        </div>
    )
}
export default Body;