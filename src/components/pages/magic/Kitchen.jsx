import React from 'react'

function Kitchen(props) {
  return (
    <div>
        Kitchen
        <hr/>

        <button className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1' onClick={()=>props.addCake(10)}>make cake!</button>

    </div>
  )
}

export default Kitchen