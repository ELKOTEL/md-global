import React from 'react'


const BadgeCard = ({alt, img, product, stock}) => {
  console.log('Stock:', stock); // Add this for debugging
  return (
    <div className=" flex flex-col w-fit border-black border rounded-md p-1">
        <div className='bg-orange-700  rounded-t-md'>
            <img src={img} alt={alt}  className=''/>
        </div>
        <div className='bg-black text-white flex justify-center '>
            <h1>{product}</h1>
        </div>
        <div              className={`${
          stock >= 5 ? 'bg-green-500' : 'bg-red-500'
        } text-white flex justify-between p-2 rounded-b-md text-2xl font-bold`}>
            <h1>Stock</h1>
            <h1>{stock}</h1>
        </div>

    </div>
  )
}

export default BadgeCard