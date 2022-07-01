
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
            <h4 className='text-center'> Time : {date.toLocaleTimeString()}</h4>
            <h5 className='text-center'> Date : {date.toLocaleDateString()}</h5>
        </div>
    )
}

export default CurrentTimeComponent
