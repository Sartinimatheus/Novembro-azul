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

        <section id="saude" className="py-12 md:py-16" aria-labelledby="carousel-heading">
          <h2 id="carousel-heading" className="sr-only">Informações importantes sobre a saúde do homem</h2>
          <Carousel slides={SLIDES} ariaLabel="Informações sobre a prevenção do câncer de próstata" />
        </section>

        <section className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">Assista e Informe-se</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Um vídeo curto para desmistificar a prevenção do câncer de próstata. O conhecimento é a sua melhor ferramenta.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-4">
            <div
              className="relative rounded-2xl shadow-2xl overflow-hidden cursor-pointer group bg-cover bg-center"
              style={{
                paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
              }}
              onClick={() => alert('O vídeo será adicionado em breve!')}
              aria-label="Assistir ao vídeo informativo"
              role="button"
            >
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="bg-white/30 group-hover:bg-white/40 backdrop-blur-sm p-5 rounded-full transition-all duration-300 transform group-hover:scale-110 shadow-lg inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="mt-4 font-bold text-lg drop-shadow-md">Assistir ao Vídeo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">Vozes da Experiência</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Depoimentos de quem superou o medo e cuidou da saúde. A detecção precoce fez toda a diferença.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6 flex-grow">"Adiei por anos por puro preconceito. Quando finalmente fiz o exame, descobrimos um problema inicial que foi tratado com sucesso. Não esperem como eu esperei."</p>
              <div>
                <p className="font-bold text-blue-800">Carlos M.</p>
                <p className="text-sm text-gray-500">58 anos, Paciente</p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
              <p className="text-gray-600 italic mb-6 flex-grow">"Meu pai teve câncer de próstata, então comecei os exames cedo. É rápido, simples e me dá a tranquilidade de saber que estou cuidando de mim e da minha família."</p>
              <div>
                <p className="font-bold text-blue-800">Roberto S.</p>
                <p className="text-sm text-gray-500">49 anos, Preventivo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">Para Saber Mais</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Consulte fontes confiáveis para informações detalhadas sobre a saúde masculina e a prevenção do câncer de próstata.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a href="https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
              <h4 className="font-bold text-xl text-blue-800 mb-3">INCA</h4>
              <p className="text-gray-600 mb-4 text-sm">
                O Instituto Nacional de Câncer oferece guias e materiais educativos sobre diversos tipos de câncer, incluindo o de próstata.
              </p>
              <span className="font-bold text-blue-600 hover:text-blue-800">
                Visitar Site &rarr;
              </span>
            </a>
            <a href="https://portaldaurologia.org.br/" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
              <h4 className="font-bold text-xl text-blue-800 mb-3">Sociedade Brasileira de Urologia</h4>
              <p className="text-gray-600 mb-4 text-sm">
                A SBU é a fonte oficial para diretrizes e recomendações sobre a saúde urológica no Brasil.
              </p>
              <span className="font-bold text-blue-600 hover:text-blue-800">
                Visitar Site &rarr;
              </span>
            </a>
            <a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-do-homem" target="_blank" rel="noopener noreferrer" className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
              <h4 className="font-bold text-xl text-blue-800 mb-3">Ministério da Saúde</h4>
              <p className="text-gray-600 mb-4 text-sm">
                Acesse a página do Ministério da Saúde para informações sobre políticas públicas e campanhas de saúde para homens.
              </p>
              <span className="font-bold text-blue-600 hover:text-blue-800">
                Visitar Site &rarr;
              </span>
            </a>
          </div>
        </section>

        <section className="mt-16 md:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-2">Conheça os Exames de Rastreamento</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              O diagnóstico precoce aumenta drasticamente as chances de cura. Estes são os dois principais exames para detectar alterações na próstata. Converse com seu médico sobre eles.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100">
              <h4 className="font-bold text-xl text-blue-800 mb-3">Exame de Sangue (PSA)</h4>
              <p className="text-gray-700">
                O Antígeno Prostático Específico (PSA) é uma proteína da próstata. Um simples exame de sangue mede seus níveis. Valores elevados podem indicar alterações e a necessidade de mais investigações.
              </p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-blue-100">
              <h4 className="font-bold text-xl text-blue-800 mb-3">Exame de Toque Retal</h4>
              <p className="text-gray-700">
                Neste exame rápido, o médico avalia o tamanho, forma e textura da próstata. É fundamental para detectar nódulos ou áreas endurecidas que o PSA sozinho pode não mostrar. Os dois exames são complementares.
              </p>
            </div>
          </div>
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

      <section className="container mx-auto text-center py-12 px-4">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div className="text-center sm:text-left">
              <h4 className="font-bold text-lg text-blue-900">Agende seu Lembrete Anual</h4>
              <p className="text-gray-600 text-sm">
                  Não deixe para depois. Marque seu próximo check-up no calendário.
              </p>
          </div>
          <button
              onClick={() => alert('Lembrete simulado! Não se esqueça de adicionar este evento ao seu calendário pessoal.')}
              className="flex-shrink-0 bg-blue-100 text-blue-800 font-bold py-2 px-5 rounded-full hover:bg-blue-200 transition-colors duration-300"
          >
              Criar Lembrete
          </button>
        </div>
      </section>

      <footer className="text-center py-8">
        <p className="text-gray-500">
          Feito com ❤️ em prol da conscientização. &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
