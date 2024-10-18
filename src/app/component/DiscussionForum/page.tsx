"use client"
import React ,{useState} from 'react'

function page() {
    const [newComment, setnewComment]=useState('')

    function AddComment(){
        
    }
  return (
    <>
    <div className='flex justify-around'>
         <textarea
         placeholder='Add your Comment...'
         value={newComment}
         className='w-4/5 rounded-md px-4 py-2'
         onChange={(e)=>e.target.value}/>
         <button onClick={AddComment}
         className='bg-background-50 w-1/5 rounded-md p-3' >Add Comment</button>
    </div>
    <div>

    </div>
    <div>

    </div>
    </>
  )
}

export default page