import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

function Footer() {
  return (
    <div className='w-full text-sm text-white/50 flex flex-col items-center justify-center p-7 border-t bg-zinc-950/80'>
        <div className='flex items-center space-x-1 text-sm'>
        <FaRegCopyright />
        <div>2025 Kinz. All right reseverd.</div>
        </div>
        <p>Download free project file</p>
    </div>
  )
}

export default Footer