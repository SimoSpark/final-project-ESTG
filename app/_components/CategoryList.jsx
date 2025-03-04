import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
        md:grid-cols-4 lg:grid-cols-7 gap-4'>
            {categoryList.length > 0 ? categoryList.map((category, index) => (

    <Link href={'/search/'+category.name} className={`flex flex-col items-center
    justify-center gap-2
    bg-blue-50 p-5 rounded-lg
    cursor-pointer hover:scale-110 transition-all ease-in-out
    `}
                    key={index}>
                    <Image src={category.icon.url}
                        alt='icon'
                        width={40}
                        height={40}
                    />
                   <h2 className='text-primary'>{category.name}</h2>
                </Link>
            )) :
                [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                    <div key={index} className='h-[120px]
              w-full bg-slate-200 animate-pulse
              rounded-lg'>

                    </div>))
            }
        </div>
    )
}

export default CategoryList
