
import React from 'react';
import Carousel from './components/Carousel';
import { SLIDES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 text-gray-800">
      <header className="py-6 px-4 md:px-8 bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-8 bg-blue-600 rounded-sm"></div>
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">Novembro Azul</h1>
          </div>
          <a
            href="#saude"
            className="hidden md:inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-sm"
          >
            Cuide-se
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-20">
        <section className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-blue-200 text-blue-800 text-sm font-bold px-4 py-1 rounded-full mb-4">
            Campanha de Conscientização
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-4 leading-tight">
            A saúde do homem <br /> importa.
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Novembro Azul é mais que uma campanha. É um lembrete para quebrar tabus,
            cuidar da saúde e prevenir o câncer de próstata.
          </p>
        </section>

        <section id="saude" className="py-12 md:py-16">
          <Carousel slides={SLIDES} />
        </section>

        <section className="text-center mt-16 md:mt-24 bg-blue-700 text-white p-8 md:p-16 rounded-3xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Dê o Próximo Passo</h3>
            <p className="max-w-2xl mx-auto mb-8">
                A prevenção é o melhor caminho. Converse com seu médico, informe-se e incentive os homens da sua vida a fazerem o mesmo. Um simples gesto pode salvar vidas.
            </p>
            <button
                onClick={() => alert('Procure um urologista para mais informações e agendamento de exames.')}
                className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
                Saiba Mais Sobre a Prevenção
            </button>
        </section>
      </main>

      <footer className="text-center py-8 mt-12">
        <p className="text-gray-500">
          Feito com ❤️ em prol da conscientização. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
