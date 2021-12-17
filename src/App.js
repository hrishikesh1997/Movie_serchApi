import data from './data.json'
import './App.css';
import { useState } from 'react';

function App() {

   const [serchtext,setseractext]=useState("");
/* 
   const [data,setdata]=useState([]);

    const apiget=()=>{
     fetch("https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c7e096eae87840b8a56d4a0107b359db-data.json")
     .then((response)=>response.json())
     .then((json)=>{
        setdata(json)
     }) 
   } */
 //as your fetch url not working properly loading data manually
  return (

    <div>
      <h1 className='head'>Serch Movies here</h1>
    <input type="text" placeholder="serch.." 
    onChange={(e)=>{
    setseractext(e.target.value)
    
    }} />
      
    <div className="App">
     {  
          data.filter((val)=>{
            if(serchtext===""){
              return val;
            }else if(val.Title.toLocaleLowerCase().includes(serchtext.toLocaleLowerCase())){
              return val;
            }

          }).map((val,key)=>{
            return <div className='App1'>
                        <h2>{val.Title}</h2> 
                         <img src={val.Poster} alt='img'/>
                        <h4> Director:{val.Director}</h4>
                        <h4>Year:{val.Year}</h4>
                         
                    </div>
          })
        } 
        
     
    </div>
    </div>
  );
}

export default App;
