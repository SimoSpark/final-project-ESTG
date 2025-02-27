"use client"
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from '@/app/_Services/GlobalApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

function BusinessByCategory() {
    const { category } = useParams();   //use params(new version next) /params
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        if (category) {
            getBusinessList();
        }
    }, [category]);

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(category)
            .then(resp => {
                setBusinessList(resp?.businessLists);
            });
    }

    return (
        <div>
            <BusinessList title={category}
             businessList={businessList} />
        </div>
    );
}

export default BusinessByCategory;
