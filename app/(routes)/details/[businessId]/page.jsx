"use client"
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState, use } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import GlobalApi from '@/app/_Services/GlobalApi';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinesssDescription from '../_components/BusinesssDescription';

function BusinessDetail(props) {
    const params = use(props.params);
    const { data, status } = useSession();
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        if (params?.businessId) getbusinessById();
    }, [params]);

    useEffect(() => {
        checkUserAuth();
    }, []);

    const getbusinessById = () => {
        GlobalApi.getBusinessById(params.businessId).then(resp => {
            setBusiness(resp.businessList);
        });
    };

    const checkUserAuth = () => {
        if (status === 'loading') {
            return <p>Loading...</p>;
        }

        if (status === 'unauthenticated') {
            signIn('descope');
        }
    };

    return status=='authenticated'&&business&&(
        <div className='py-8 md:py-20
        px-10 md:px-36'>
            <BusinessInfo business={business} />
    
            <div className='grid grid-cols-3 mt-16'>
              <div className='col-span-3 md:col-span-2 order-last md:order-first'>
              <BusinesssDescription business={business}/>
              </div>
              <div className=''>
              <SuggestedBusinessList business={business}/>
              </div>
            </div>

        </div>
      )
    }
    
    export default BusinessDetail
