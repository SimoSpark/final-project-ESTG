import GlobalApi from '@/app/_Services/GlobalApi';
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'
function SuggestedBusinessList({business}) {
  
    const [businessList,setBusinessList]=useState([]);
      useEffect(()=>{
         
          business&&getBusinessList()
      },[business]);
  
      const getBusinessList=()=>{
          GlobalApi.getBusinessByCategory(business?.category?.name)
          .then(resp=>{
              setBusinessList(resp?.businessLists);
          })
      }

    return (
        <div className='pl-10'>
            <Button className="flex gap-2 w-full">
                <NotebookPen />
                Book Appointment
            </Button>
            <h2 className='font-bold 
      text-lg mt-3 mb-3
      
      '>Similar Business</h2>
        </div>
    )
}

export default SuggestedBusinessList