import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

function BusinessList({ businessList, title }) {
  return (
    <div className='mt-5'>
      <h2 className='font-bold text-[25px]'>{title}</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
        {businessList.length > 0 ? businessList.map((business, index) => (
          <Link href={'/details/' + business.id}
            key={index}
            className='shadow-md rounded-lg hover:shadow-lg cursor-pointer hover:shadow-primary hover:scale-105 transition-all ease-in-out relative'
          >
            <Image
              src={business?.images[0].url}
              alt={business.name}
              width={500}
              height={200}
              className='h-[150px] md:h-[200px] object-cover rounded-lg'
            />

            {/* Star Rating: Always Visible */}
            <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">4.8</span>
            </div>

            <div className='flex flex-col items-baseline p-3 gap-1'>
              <h2 className='p-1 bg-blue-100 text-primary rounded-full px-2 text-[12px]'>
                {business.category.name}
              </h2>
              <h2 className='font-bold text-lg'>{business.name}</h2>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                <span className="text-gray-700">{business.contactPerson}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span className="text-gray-700 line-clamp-1">{business.address}</span>
              </div>

              <Button className='rounded-lg mt-3'>Book Now</Button>
            </div>
          </Link>
        )) :
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default BusinessList;
