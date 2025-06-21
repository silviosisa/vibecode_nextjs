export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded mr-3"></div>
                <h1 className="text-xl font-bold text-gray-900">IBGE</h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Estatísticas</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Geociências</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Painel de Indicadores</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Cidades e Estados</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-gray-900">PT</button>
              <button className="text-sm text-gray-600 hover:text-gray-900">EN</button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 py-3 text-sm">
            <a href="#" className="text-blue-600 hover:underline">Home</a>
            <span className="text-gray-500">/</span>
            <a href="#" className="text-blue-600 hover:underline">Geociências</a>
            <span className="text-gray-500">/</span>
            <a href="#" className="text-blue-600 hover:underline">Informações sobre posicionamento geodésico</a>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Rede geodésica</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Redes Geodésicas</h1>
          
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">
              O Sistema de Informações sobre a Rede Geodésica disponibiliza informações 
              sobre a infraestrutura geodésica implantada e mantida pelo IBGE em todo o 
              território nacional. Esta rede constitui a base fundamental para o 
              posicionamento geográfico preciso no país.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Produtos em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Rede Planimétrica</h3>
                <p className="text-gray-600 text-sm">Informações sobre pontos de controle planimétrico</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Rede Altimétrica</h3>
                <p className="text-gray-600 text-sm">Dados sobre referências de nível e altitude</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Rede Gravimétrica</h3>
                <p className="text-gray-600 text-sm">Medições gravimétricas em todo território nacional</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">RBMC</h3>
                <p className="text-gray-600 text-sm">Rede Brasileira de Monitoramento Contínuo</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">SIRGAS</h3>
                <p className="text-gray-600 text-sm">Sistema de Referência Geocêntrico para as Américas</p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Georreferenciamento</h3>
                <p className="text-gray-600 text-sm">Serviços e informações sobre georreferenciamento</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">IBGE</h3>
              <p className="text-gray-300 text-sm">Instituto Brasileiro de Geografia e Estatística</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Acesso à Informação</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white">Transparência</a></li>
                <li><a href="#" className="hover:text-white">Ouvidoria</a></li>
                <li><a href="#" className="hover:text-white">Fale Conosco</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
                <div className="w-8 h-8 bg-blue-400 rounded"></div>
                <div className="w-8 h-8 bg-red-600 rounded"></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-300 text-sm">0800 721 8181</p>
              <p className="text-gray-300 text-sm">www.ibge.gov.br</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
