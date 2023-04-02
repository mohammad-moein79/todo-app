import React from 'react'

function Header() {
     return (
          <div className='w-full flex justify-center'>
               <div className='bg-[#fff] flex items-center justify-between  min-w-[90%] pr-4 pl-4 rounded-br-md rounded-bl-md'>
                    <div>
                         <ul className='flex items-center'>
                              <li><a href="#" className='text-[19px] p-2 m-[5px]'>Home</a></li>
                              <li><a href="#" className='text-[19px] p-2 m-[5px]'>More Data</a></li>
                         </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                         <img src="https://s2.uupload.ir/files/microsoft-to-do-2022-06-05_thumbnail_q26c.png" className='w-[100px]' alt="logo" />
                    </div>
               </div>
          </div>
     )
}

export default Header
