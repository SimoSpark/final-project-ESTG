import React from 'react';
import { Button } from '@/components/ui/button';

function PaymentSection({ onConfirm, onCancel }) {
    return (
        <div className="p-5 bg-white rounded-lg shadow-md text-center">
            <h2 className="font-bold text-xl mb-4 text-gray-800">Sélectionnez un mode de paiement</h2>

            <div className="flex flex-col gap-4">
                <Button onClick={() => setShowStripe(true)}>💳 Payer par Carte</Button>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">🅿️ Payer avec PayPal</Button>
                <Button className="w-full bg-gray-300 hover:bg-gray-400 text-black">🔄 Autre méthode</Button>
            </div>

            <div className="flex justify-between mt-6">
                <Button variant="destructive" onClick={onCancel}>Annuler</Button>
                <Button onClick={onConfirm} className="bg-green-600 hover:bg-green-700 text-white">
                    Confirmer
                </Button>
            </div>
        </div>
    );
}

export default PaymentSection;
