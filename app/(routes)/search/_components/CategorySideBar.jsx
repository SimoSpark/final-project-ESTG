"use client"
import GlobalApi from '@/app/_Services/GlobalApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function CategorySideBar() {
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList();

    }, [])

    const getCategoryList = () => {
        GlobalApi.getCategory().then(resp => {
            console.log(resp)
            setCategoryList(resp.categories);
        })
    }
    return (
        <div>
            <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
            <div>
                {categoryList.map((category, index) => (
                    <div key={index} >
                        <Image src={category.icon.url}
                            alt='icon'
                            width={30}
                            height={30} />
                        <h2>{category.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategorySideBar