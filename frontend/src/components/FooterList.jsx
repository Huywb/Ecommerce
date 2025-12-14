import React from 'react'

const FooterList = ({title,menu}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-white'>{title}</h1>
        {
            menu.map((item,index)=>(
                <span className='text-gray-400 text-sm cursor-pointer hover:text-gray-200 duration-300 transition-all' key={index}>{item.name}</span>
            ))
        }
    </div>
  )
}

export default FooterList
