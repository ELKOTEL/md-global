import React from 'react'


const BadgeCard = ({alt, img, product, stock}) => {
  return (
    <div className=" flex flex-col bg-black w-fit border-black border rounded-md p-1">
        <div className=''>
            <img src={img} alt={alt} />
        </div>
        <div className='bg-black text-white flex justify-center'>
            <h1>{product}</h1>
        </div>
        <div className='bg-green-500 text-white flex justify-between px-2'>
            <h1>Stock</h1>
            <h1>{stock}</h1>
        </div>

    </div>
  )
}

export default BadgeCard