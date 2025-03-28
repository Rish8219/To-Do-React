import React from 'react'

function Localstorage() {
  return (
    <div className='flex-col justify-self-center'>
      <h1 className='text-4xl '>Local Storage </h1>
      <input type="text" placeholder='enter anything' className='bg-black text-white h-10 mt-10 rounded-2xl p-2 outline-0 border 0 focus:ring-1 focus:ring-pink-500' />
      <button className='border-0 ml-5 outline-0 rounded 2xl p-2 w-20 bg-yellow-300'>save</button>
    </div>
  )
}

export default Localstorage
