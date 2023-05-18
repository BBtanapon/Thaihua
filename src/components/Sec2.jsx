import React from 'react'
import logo from '../assets/logo.jpg'
const Sec2 = () => {
  return (
    <div className='pt-5 flex flex-col justify-center items-center text-center bg-white'>
    <img src={logo} width={150} height={150}  />
    <p className='pt-5 font-sans font-bold text-3xl text-[#003399]'>THAIHUA CONSULT INVESTMENT</p>
    <div class="inline-flex justify-center items-center w-full">
        <hr className="my-4 mx-auto w-[1280px] h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"/>
    </div>
    <p className=' font-medium text-xl text-[#333333]'>เป็นธุรกิจให้เกี่ยวกับด้านการเทรด<br/>มุ่งเน้นไปที่ความต้องการของลูกค้าให้บริการให้คำปรึกษาและสอนเทรดอย่างมืออาชีพ<br/>เป็นมาตรฐานแก่ลูกค้า ตลอดจนการสนับสนุนอย่างมืออาชีพ </p>
    <p className='pt-8 font-bold text-3xl text-[#003399]'>คอร์สสอนเทรดหุ้น<br/>ให้การเทรดหุ้นเป็นเรื่องง่ายไม่มีความรู้ก็เทรดได้ !!</p>
    <div className='py-6 text-[#333333]'>
        <p className='font-medium text-xl'>✔ ไม่มีความรู้ก็เทรดได้</p>
        <p className='font-medium text-xl'>✔ สอนโดยผู้เชี่ยวชาญ</p>
        <p className='font-medium text-xl'>✔ สอนดูกราฟหุ้น</p>
        <p className='font-medium text-xl'>✔ ไม่มีความรู้ก็เทรดได้</p>
        <p className='font-medium text-xl'>✔ เน้นใช้งานได้จริง</p>
        <p className='font-medium text-xl'>✔ มีกลุ่มสอนเทรดให้เข้า <strong className='text-[#e74c3c] font-bold text-2xl'>ฟรี !</strong></p>
    </div>
    

</div>
  )
}

export default Sec2