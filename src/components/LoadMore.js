import React, { useState } from 'react'

const LoadMore = ({items}) => {
    const [list,setList]=useState([]);
    function LoadMore(){
        setTimeout(()=>{
            let itemstoAdd=items.splice(0,10);
            setList([...list,...itemstoAdd])
        },500)
    }
  return (
    <div>
        <ul>
            {list.map((item,id)=>{
                return(
                    <li key={id}>
                        {item}
                    </li>
                )
            })}
        </ul>
        {(items.length>0)
        ?<button onClick={LoadMore}>Load More</button>
        :""}
    </div>
  )
}

export default LoadMore