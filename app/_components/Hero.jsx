
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center flex-col gap-3 justify-center pt-14 pb-7'>
      <h2 className='font-bold text-[46px] text-center'>Explorez les meilleurs
        <span className='text-primary'> services et réparations </span>
        <br /> à domicile près de chez vous
      </h2>
      <h2 className='text-xl text-gray-400'>Votre maison, notre service – Trouvez des experts près de chez vous</h2>
      <div className='mt-4 flex gap-4 items-center'>
        <Input placeholder='Rechercher...' className='rounded-md md:w-[350px]' />
        <Button className='rounded-full h-[50px] w-[50px]'>
          <Search className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default Hero