// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// export default function CurrentTimeComponent() {

// let today=new Date();
// const [time, settime] = useState('');

// const handleTime=()=>{
//     settime( today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
// }

// useEffect(() => {
//   setInterval(()=>{
// handleTime();
//   },1000)
// },[time])



//   return (
//     <h2>{time}</h2>
//   )
// }

import  React, { useState , useEffect } from 'react'

export const CurrentTimeComponent = () => {

    var [date,setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });
  
  

    return(
        <div>
            <h1 className='text-center'> Time : {date.toLocaleTimeString()}</h1>
            <h5 className='text-center'> Date : {date.toLocaleDateString()}</h5>
        </div>
    )
}

export default CurrentTimeComponent
