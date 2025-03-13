import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe("pk_test_51..."); // Clé test Stripe

const CheckoutForm = ({ onConfirm }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { paymentIntent, error } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      setLoading(false);
    } else {
      console.log("Paiement réussi !", paymentIntent);
      onConfirm();
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-white rounded-lg shadow-md text-center">
      <h2 className="font-bold text-xl mb-4 text-gray-800">Paiement sécurisé</h2>
      <CardElement className="border p-3 rounded-lg" />
      <Button type="submit" className="mt-4 bg-blue-600 text-white" disabled={loading}>
        {loading ? "Traitement..." : "Payer"}
      </Button>
    </form>
  );
};

const StripePayment = ({ onConfirm }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm onConfirm={onConfirm} />
  </Elements>
);

export default StripePayment;
