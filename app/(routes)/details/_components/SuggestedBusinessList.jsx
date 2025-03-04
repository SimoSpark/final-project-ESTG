import GlobalApi from '@/app/_Services/GlobalApi';
import { Button } from '@/components/ui/button';
import { NotebookPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function SuggestedBusinessList({ business }) {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    business && getBusinessList();
  }, [business]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };

  return (
    <div className="md:pl-10 space-y-6">
      {/* Appointment Button */}
      <Button className="flex items-center justify-center gap-2 w-full py-3 text-lg font-medium">
        <NotebookPen />
        Book Appointment
      </Button>

      {/* Suggested Businesses Section */}
      <div className="hidden md:block">
        <h2 className="font-semibold text-xl text-gray-700 mb-4">Similar Businesses</h2>

        <div className="space-y-4">
          {businessList &&
            businessList.map((business) => (
              <Link
                key={business.id}
                href={`/details/${business.id}`}
                className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg hover:shadow-md transition-all duration-300"
              >
                {/* Business Image */}
                <Image
                  src={business?.images[0].url}
                  alt={business.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover h-[80px] w-[80px]"
                />

                {/* Business Info */}
                <div className="space-y-1">
                  <h2 className="font-bold text-gray-800">{business.name}</h2>
                  <p className="text-sm text-primary">{business.contactPerson}</p>
                  <p className="text-sm text-gray-500">{business.address}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
