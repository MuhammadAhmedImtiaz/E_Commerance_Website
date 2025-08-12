import React from 'react'
import Button from '../Shared/Button'
const ProductCards = ({data}) => {
  return (
    <div className='mb-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
            {/* card section */}
            {
                data.map((data)=>(
                    <div key={data.id}>
                        <div className='relaive'>
                            <img src={data.img} alt=""
                            className='[h-190px] w-[260px] object-cover rounded-md' />
                            {/* hover button */}
                            <div>
                                <Button 
                                text={"Add to Cart"}
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCards