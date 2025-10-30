import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";

function TIps() {
  return (
    <div className='flex m-5 bg-purple-900/30 border border-white p-5 rounded-xl'>
        <div className='text-2xl text-purple-400'>
            <IoInformationCircleOutline />
        </div>
        <div className='text-sm'>
            <p className='mx-2 text-purple-400'>Tips Download</p>
            <ul>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>Tiap link menggunakan short-link dengan iklan</li>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>Tetap pada page utama jangan berpidah page</li>
            <li className='text-sm'><span className='text-xl mx-2'>•</span>Jika gagal, coba reload halaman</li>
            </ul>
        </div>
    </div>
  )
}

export default TIps