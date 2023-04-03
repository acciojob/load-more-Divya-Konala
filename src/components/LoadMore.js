import React, { useState } from 'react'

const LoadMore = ({items}) => {
    const [list,setList]=useState([]);
    function LoadMore(){
        let itemstoAdd=items.splice(0,10);
        setList([...list,...itemstoAdd])
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
        <button onClick={LoadMore}>Load More</button>
    </div>
  )
}

export default LoadMore