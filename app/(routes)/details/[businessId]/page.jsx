"use client"
import GlobalApi from '@/app/_Services/GlobalApi';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

function BusinessDetail(params) {
    const {data,status}=useSession();
    const [business,setBusiness]=useState([]);
    useEffect(()=>{
      params&&getbusinessById();
    },[params]);

    useEffect(()=>{
      checkUserAuth();
    },[]);

    const getbusinessById=()=>{
      GlobalApi.getBusinessById(params.businessId).then(resp=>{
       setBusiness(resp.businessList);
      })
    }

    const checkUserAuth=()=>{
      if(status=='loading')
      {
          return <p>Loading...</p>
      }
  
      if(status=='unauthenticated')
      {
          signIn('descope');
      }
  
    }

    return status == 'authenticated' && (
        <div>businessddddd</div>
    )

}

export default BusinessDetail

