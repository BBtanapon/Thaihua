import React from 'react'
import banner1 from '../assets/check.jpg'
const Sec3 = () => {
  return (
   <div className='w-full bg-white py-16 px-4 text'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[650px] mx-auto my-4' src={banner1} alt="/" />
            <div className='flex flex-col justify-center items-center'>
                <div className='w-[290px] h-[45] bg-indigo-950 text-center'>
                    <h1 className='font-medium text-3xl text-white '>ทำไมต้องเทรดกับเรา ?</h1>
                </div>     
                <hr className="my-1 mx-auto w-[600px] h-0.5 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/>
                <div className='py-2 text-[#333333] text-center'>
                    <ul className='font-medium text-2xl'>
                        <li>✔ ให้บริการ 24 ชั่วโมง</li>
                        <li>✔ ครอบคลุม ใช้งานได้จริง</li>
                        <li>✔ สอนโดยผู้เชี่ยวชาญประสบการณ์มากกว่า 9 ปี</li>
                        <li>✔ คำนึงถึงความต้องการของลูกค้าเป็นหลัก</li>
                    </ul>
                    {/* <p className='font-medium text-2xl'>✔ ให้บริการ 24 ชั่วโมง</p>
                    <p className='font-medium text-2xl'>✔ ครอบคลุม ใช้งานได้จริง</p>
                    <p className='font-medium text-2xl'>✔ สอนโดยผู้เชี่ยวชาญประสบการณ์มากกว่า 9 ปี</p>
                    <p className='font-medium text-2xl'>✔ คำนึงถึงความต้องการของลูกค้าเป็นหลัก</p> */}
    </div>
            </div>
        </div>
   </div>
  )
}

export default Sec3