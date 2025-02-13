import Image from 'next/image'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3
        md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {categoryList.map((category, index) => (
                <div key={category.id || index}>  
                    <Image src={category.icon.url}
                        alt='icon'
                        width={40}
                        height={40}
                    />
                </div>
            ))}
        </div>
    )
}

export default CategoryList
