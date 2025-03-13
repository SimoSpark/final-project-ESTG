import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import { Calendar } from "@/components/ui/calendar"
import { Button } from '@/components/ui/button';
import GlobalApi from '@/app/_Services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import moment from 'moment';
import PaymentSection from './PaymentSection';
import StripePayment from './StripePayment';

function BookingSection({children,business}) {

    const [date,setDate]=useState(new Date());
    const [timeSlot,setTimeSlot]=useState([]);
    const [selectedTime,setSelectedTime]=useState();
    const [bookedSlot,setBookedSlot]=useState([]);
    const [showPayment, setShowPayment] = useState(false);
    const [showStripe, setShowStripe] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const {data}=useSession();
    useEffect(()=>{
        getTime();
       
    },[])

    useEffect(()=>{
        date&&BusinessBookedSlot();
    },[date])

  
    const BusinessBookedSlot=()=>{
        GlobalApi.BusinessBookedSlot(business.id,moment(date).format('DD-MMM-yyyy'))
        .then(resp=>{
            console.log(resp)
            setBookedSlot(resp.bookings)
        })
    }

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

      const saveBooking = () => {
        GlobalApi.createNewBooking(business.id,
            moment(date).format('DD-MMM-yyyy'), selectedTime, data.user.email, data.user.name)
            .then(resp => {
                if (resp) {
                    setShowPayment(true);
                   
                }
            }, () => {
                toast('Erreur lors de la réservation');
            });
    };
    

      const isSlotBooked=(time)=>{
        return bookedSlot.find(item=>item.time==time)
      }
    return (
    <div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>

  <SheetTrigger asChild>
  {children}
  </SheetTrigger>
  <SheetContent className="overflow-auto">
    <SheetHeader>
      <SheetTitle>Réserver un service</SheetTitle>
      <SheetDescription>
      Sélectionnez la date et le créneau horaire pour réserver un service
        {/* Date Picker  */}

        <div className='flex flex-col gap-5 items-baseline'>
        <h2 className='mt-5 font-bold'>Sélectionnez la date</h2>

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border "
            />

        </div>
        {/* Time Slot Picker  */}
        <h2 className='my-5 font-bold'>Sélectionnez un créneau horaire</h2>
        <div className='grid grid-cols-3 gap-3'>
            {timeSlot.map((item,index)=>(
                <Button key={index}
                disabled={isSlotBooked(item.time)}
                variant='outiline'
                className={`border rounded-full 
                p-2 px-3 hover:bg-primary
                 hover:text-white
                 ${selectedTime==item.time&&'bg-primary text-white'}`}
                onClick={()=>setSelectedTime(item.time)}
                >{item.time}</Button>
            ))}
        </div>
        
      </SheetDescription>
    </SheetHeader>
    <SheetFooter className="mt-5">
  {showPayment ? (
    <PaymentSection 
      onConfirm={() => {
        setShowPayment(false);
        toast('Paiement réussi !');
      }} 
      onCancel={() => setShowPayment(false)}
    />
  ) : (
    <div className='flex gap-5'>
      <Button variant="destructive">Annuler</Button>
      <Button disabled={!(selectedTime && date)} onClick={() => saveBooking()}>
        Réserver
      </Button>
    </div>
  )}
</SheetFooter>

  </SheetContent>
</Sheet>

    </div>
  )
}

export default BookingSection