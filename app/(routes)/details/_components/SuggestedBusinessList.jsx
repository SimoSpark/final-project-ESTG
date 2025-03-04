import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import React from 'react'

function SuggestedBusinessList({business}) {
  return (
        <div className='pl-10'>
       <Button className="flex gap-2 w-full">
       <NotebookPen/>
       Book Appointment  
       </Button> 
    
    </div>
  )
}

export default SuggestedBusinessList