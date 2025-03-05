import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"



function BookingSection({ children }) {
    return (
        <div>

            <Sheet>
                <SheetTrigger>{children}</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Réserver le service</SheetTitle>
                        <SheetDescription>
                        Sélectionnez la date et le créneau horaire pour réserver un service
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    )
}

export default BookingSection