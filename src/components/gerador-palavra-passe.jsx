import React, { useState } from 'react';

const GeradorPassword = () => {
    const [tamanho, setTamanho] = useState(12);
    const [incluirCaracteresEsp, setIncluirCaracteresEsp] = useState(false);
    const [palavraPasse, setPalavraPasse] = useState('');

    const gerarPalavraPasse = () => {
        const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
        const numeros = '0123456789';
        const caracteresEsp = '!@#$%^&*()_+=-{}[]|;:,.<>?/';

        let caracteres = letrasMaiusculas + letrasMinusculas + numeros;
        if (incluirCaracteresEsp) {
            caracteres += caracteresEsp;
        }

        let novaPalavraPasse = '';
        for (let i = 0; i < tamanho; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            novaPalavraPasse += caracteres[randomIndex];
        }
        setPalavraPasse(novaPalavraPasse);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl font-bold mb-4 text-center text-white">Gerador de Senhas</h1>
                <div className="mb-4">
                    <label htmlFor="tamanho" className="block text-sm font-medium text-gray-300">Comprimento:</label>
                    <input
                        type="number"
                        id="tamanho"
                        min="1"
                        max="50"
                        value={tamanho}
                        onChange={(e) => setTamanho(parseInt(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <input
                        type="checkbox"
                        id="incluirCaracteresEsp"
                        checked={incluirCaracteresEsp}
                        onChange={() => setIncluirCaracteresEsp(!incluirCaracteresEsp)}
                        className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded"
                    />
                    <label htmlFor="incluirCaracteresEsp" className="ml-2 block text-sm font-medium text-gray-300">Incluir caracteres especiais</label>
                </div>
                <button
                    onClick={gerarPalavraPasse}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Gerar Senha
                </button>
                <div className="mt-4">
                    <input
                        type="text"
                        value={palavraPasse}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm text-white bg-gray-700 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default GeradorPassword;
