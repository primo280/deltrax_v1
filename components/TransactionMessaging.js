// components/TransactionMessaging.js

const TransactionMessaging = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#111827]">
        <div className="w-full max-w-2xl bg-[#1F2937] p-8 rounded-lg shadow-lg">
          {/* Titre */}
          <h2 className="text-center text-lg font-semibold text-yellow-400 mb-6">
            Transaction en cours
          </h2>
  
          {/* Icône et Texte */}
          <div className="flex items-center space-x-2 text-gray-300 mb-6">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-700 rounded-full text-white font-bold">
              i
            </span>
            <p className="text-sm">Cliquez ici pour consulter les devis de la transaction</p>
          </div>
  
          {/* Champs de texte (faux placeholders pour style uniquement) */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-600 rounded-md"></div>
            <div className="h-20 bg-gray-600 rounded-md"></div>
            <div className="h-4 bg-gray-600 rounded-md"></div>
            <div className="h-4 bg-gray-600 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-600 rounded-md"></div>
          </div>
  
          {/* Zone de texte */}
          <div className="mt-6">
            <textarea
              placeholder="Envoyez à l'agent toutes les informations nécessaires à la transaction..."
              className="w-full h-16 p-3 bg-white rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
  
          {/* Boutons */}
          <div className="flex justify-between mt-6">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Transfert effectué
            </button>
            <button className="px-6 py-2 bg-yellow-400 text-gray-800 rounded-md hover:bg-yellow-500 transition">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TransactionMessaging;
  