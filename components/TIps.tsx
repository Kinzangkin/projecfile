import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";

function TIps() {
  return (
    <div className='flex m-5 sm:mx-70 bg-purple-900/30 border border-white p-5 rounded-xl'>
        <div className='text-2xl text-purple-400'>
            <IoInformationCircleOutline />
        </div>
        <div className='text-sm'>
            <p className='mx-2 text-purple-400'>Tips Download</p>
            <ul>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>Each link uses a short link with ads</li>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>Stay on the main page, do not switch pages</li>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>If it fails, try reloading the page</li>
            </ul>
        </div>
    </div>
  )
}

export default TIps