import React from 'react';
import { Calendar, Clock, MapPin, User, CheckCircle, ArrowRight, Repeat, Phone } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

function BookingHistoryList({ bookingHistory, type }) {
  // Fonction pour déterminer le statut de la réservation
  const getStatusColor = (status) => {
    if (status === 'completed') return 'bg-green-100 text-green-800';
    if (status === 'upcoming') return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  // Fonction pour déterminer si une date est à venir
  const isUpcoming = (dateString) => {
    const bookingDate = new Date(dateString);
    const today = new Date();
    return bookingDate > today;
  };
  
  return (
    <div className="space-y-4">
      {bookingHistory.map((booking, index) => {
        // Déterminer si la réservation est à venir ou passée
        const upcoming = isUpcoming(booking.date);
        const statusClass = upcoming ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
        const statusText = upcoming ? 'À venir' : 'Terminé';
        
        return (
          <Card key={booking.id || index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Image section with status overlay */}
              <div className="relative md:w-1/3">
                {booking?.businessList?.images && booking?.businessList?.images[0]?.url && (
                  <>
                    <Image 
                      src={booking.businessList.images[0].url}
                      alt={booking.businessList.name || 'Service image'}
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                    <Badge className={`absolute top-2 right-2 ${statusClass}`}>
                      {statusText}
                    </Badge>
                  </>
                )}
              </div>
              
              {/* Content section */}
              <CardContent className="flex-1 p-4 md:p-6">
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-primary">
                    {booking.businessList.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-primary" />
                      {booking.date}
                    </span>
                    <span className="mx-1">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      {booking.time}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 grid gap-3">
                  <div className="flex items-start gap-2">
                    <User className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{booking.businessList.contactPerson}</p>
                      <p className="text-sm text-gray-500">Prestataire</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">{booking.businessList.address}</p>
                      <p className="text-sm text-gray-500">Adresse</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
            
            <CardFooter className="flex justify-between border-t bg-gray-50 p-4">
              {upcoming ? (
                <>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Phone className="h-4 w-4" /> 
                    Contacter
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <ArrowRight className="h-4 w-4" /> 
                    Voir détails
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Repeat className="h-4 w-4" /> 
                    Réserver à nouveau
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <CheckCircle className="h-4 w-4" /> 
                    Laisser un avis
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

export default BookingHistoryList;