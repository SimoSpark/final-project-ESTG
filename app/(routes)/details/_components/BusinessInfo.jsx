import Image from 'next/image'
import React from 'react'

function BusinessInfo({business}) {
    return business?.name&&(
      <div className='md:flex gap-4 items-center'>
        <Image src={business?.images[0]?.url}
          alt={business.name}
          width={150}
          height={200}
          className='rounded-full h-[150px]
          object-cover'
        />
        </div>
  )
}

export default BusinessInfo