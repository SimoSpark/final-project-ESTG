import React, { useEffect, useState } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import GlobalApi from '@/app/_Services/GlobalApi';
import { useSession } from 'next-auth/react';
import { toast } from 'sonner';
import moment from 'moment';
import PaymentForm from "../_components/PaymentForm"; // Importation du formulaire

function BookingSection({ children, business }) {
    const [date, setDate] = useState(new Date());
    const [timeSlot, setTimeSlot] = useState([]);
    const [selectedTime, setSelectedTime] = useState();
    const [bookedSlot, setBookedSlot] = useState([]);
    const [showPaymentForm, setShowPaymentForm] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [paymentNow, setPaymentNow] = useState(false);


    const { data } = useSession();

    useEffect(() => {
        getTime();
    }, []);

    useEffect(() => {
        if (date) BusinessBookedSlot();
    }, [date]);

    const BusinessBookedSlot = () => {
        GlobalApi.BusinessBookedSlot(business.id, moment(date).format('DD-MMM-yyyy'))
            .then(resp => setBookedSlot(resp.bookings));
    };

    const getTime = () => {
        const timeList = [];
        for (let i = 10; i <= 12; i++) {
            timeList.push({ time: i + ':00 AM' }, { time: i + ':30 AM' });
        }
        for (let i = 1; i <= 6; i++) {
            timeList.push({ time: i + ':00 PM' }, { time: i + ':30 PM' });
        }
        setTimeSlot(timeList);
    };

    const saveBooking = () => {
        GlobalApi.createNewBooking(
            business.id,
            moment(date).format('DD-MMM-yyyy'),
            selectedTime,
            data.user.email,
            data.user.name
        ).then(() => {
            if (paymentNow) {
                setShowPaymentForm(true); // Affiche le formulaire de paiement
            } else {
                toast('Réservation confirmée ! Vous pouvez payer plus tard.');
                setIsOpen(false); // Ferme le modal
            }
        }, () => {
            toast('Erreur lors de la réservation');
        });
    };

    const isSlotBooked = (time) => bookedSlot.some(item => item.time === time);

    return (
        <div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    {children}
                </SheetTrigger>
                <SheetContent className="overflow-auto flex justify-center items-center">
                    <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-xl p-6 w-full max-w-lg">
                        <SheetHeader>
                            <SheetTitle>Réserver un service</SheetTitle>
                            <SheetDescription>
                                Sélectionnez la date et l'heure pour réserver un service.
                            </SheetDescription>
                        </SheetHeader>

                        {!showPaymentForm ? (
                            <div className='mt-6'>
                                {/* Sélection de la date */}
                                <div className='flex flex-col gap-5 items-baseline'>
                                    <h2 className='font-bold'>Sélectionnez la date</h2>
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-md border"
                                    />
                                </div>

                                {/* Sélection de l'heure */}
                                <h2 className='my-5 font-bold'>Sélectionnez un créneau horaire</h2>
                                <div className='grid grid-cols-3 gap-3'>
                                    {timeSlot.map((item, index) => (
                                        <Button key={index}
                                            disabled={isSlotBooked(item.time)}
                                            variant='outline'
                                            className={`border rounded-full 
                                            p-2 px-3 hover:bg-primary
                                            hover:text-white
                                            ${selectedTime === item.time && 'bg-primary text-white'}`}
                                            onClick={() => setSelectedTime(item.time)}
                                        >
                                            {item.time}
                                        </Button>
                                    ))}
                                </div>
                                <div className="mt-5">
                                    <h2 className='font-bold mb-2'>Voulez-vous payer maintenant ?</h2>
                                    <div className='flex gap-3'>
                                        <Button 
                                            variant={paymentNow ? 'default' : 'outline'}
                                            onClick={() => setPaymentNow(true)}
                                        >
                                            Oui
                                        </Button>
                                        <Button 
                                            variant={!paymentNow ? 'default' : 'outline'}
                                            onClick={() => setPaymentNow(false)}
                                        >
                                            Non
                                        </Button>
                                    </div>
                                </div>

                                <SheetFooter className="mt-5 flex justify-between">
                                    <SheetClose asChild>
                                        <Button variant="destructive">Fermer</Button>
                                    </SheetClose>
                                    <Button disabled={!(selectedTime && date)} onClick={saveBooking}>
                                        Confirmer
                                    </Button>
                                </SheetFooter>
                            </div>
                        ) : (
                            // Formulaire de paiement
                            <PaymentForm setShowForm={setShowPaymentForm} />
                        )}
                    </Card>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default BookingSection;
