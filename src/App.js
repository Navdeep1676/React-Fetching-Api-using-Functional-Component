import React, {  useEffect, useState } from 'react';
import Show from './Show';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    getData();
  },[])
  const getData=()=>{
    fetch('https://randomuser.me/api/')
    .then(respose=>respose.json())
    .then(data=>{
      const result=data.results[0];
      let arr=[];
      arr.push(result);
      setData([...arr])
      console.log(data);
      
    })
  }
  return (
    <div>
{
  data.map((data,i)=>{
   return(
    <Show
    key={i}
    name={data.name.first+' '+ data.name.last}
    email={data.email}
    age={data.dob.age}
    city={data.location.city}
    phone={data.phone}
    gender={data.gender}
    img={data.picture.large}
    data={()=>getData()}
    />
   )
  })
}
    </div> 
  );
}

export default App;