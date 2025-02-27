"use client"
import { signIn, useSession } from 'next-auth/react';
import React from 'react'

function BusinessDetail() {
    const { data, status } = useSession();
    if (status == 'loading') {
        return <p>loading...</p>
    }
    if (status == 'unauthenticated') {
        signIn('descope');
    }
    return status=='authenticated'&&(
        <div>business</div>
    )
   
}

export default BusinessDetail

