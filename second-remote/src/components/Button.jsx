
import { useState } from 'react'

function Button() {
    const [count,setCount] = useState(20)
  return (
    <div style={{userSelect:'none',padding:'5px',background:"white",color:"black"}} onClick={()=>{setCount(prev=>prev+1);console.log(count)}}>Button from different react with count: {count}</div>
  )
}

export default Button