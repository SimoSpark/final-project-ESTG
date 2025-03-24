import React, { useState } from "react";
import PaymentForm from "./components/PaymentForm";  // Importation du formulaire

const Booking = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => setShowForm(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Confirmer
      </button>

      {showForm && <PaymentForm setShowForm={setShowForm} />}
    </div>
  );
};

export default Booking;
