import React from "react";

const PaymentForm = ({ setShowForm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-4">Mettre à jour votre carte</h2>

        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Prénom" />
        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Nom" />
        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Code Postal" />
        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Numéro de carte" />
        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Date d'expiration (MM/AA)" />
        <input className="bg-gray-700 border border-gray-600 p-2 w-full mb-2 rounded-md text-white" placeholder="Code de sécurité (CVV)" />

        <button className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-lg mt-4 font-bold">
          Enregistrer
        </button>

        <button
          onClick={() => setShowForm(false)}
          className="mt-4 text-gray-400 text-sm hover:underline"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
