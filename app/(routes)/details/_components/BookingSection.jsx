import React, { useState, useEffect } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Calendar } from "@/components/ui/calendar"

function BookingSection({ children }) {
    const [date, setDate] = useState(null);
    const [timeSlot,setTimeSlot]=useState([]);
    useEffect(() => {
        setDate(new Date());
    }, []);
    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
  
        setTimeSlot(timeList)
      }

    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Réserver le service</SheetTitle>
                        <div>
                        <SheetDescription>
                            Sélectionnez la date et le créneau horaire pour réserver un service
                            </SheetDescription>
                        </div>

                        <div className='flex flex-col gap-5 items-baseline'>
                            <h2 className='mt-5 font-bold'>Select Date</h2>

                            
                            <div>
                                {date && (
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            {/* time slot picker */}
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default BookingSection
