import React from 'react'
import { FaLine } from 'react-icons/fa';
import lineicon from 'E:/thaihua-project/src/assets/icon-line.png';
const Seclne = () => {
  return (
    <div className=' w-full h-[120px] flex justify-center items-center px-4 '>
    <button 
    className='font-medium text-2xl text-white px-6 py-3 my-2 flex items-center hover:bg-[#449D44] bg-[#01B901] rounded-full'>
      เข้ากลุ่มไลน์
        <span>
            <img className='ml-3' src={lineicon}  width="30" height="30"/>
            </span>

    </button>
    </div>
  )
}

export default Seclne