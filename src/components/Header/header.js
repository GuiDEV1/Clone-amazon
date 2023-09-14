import Logo from "./images/amazon_logo.png"


export function Header () {
    return(
          <header>
              <div className="grid text-white">
              {/* <!-- Header superior --> */}
                <div className="flex flex-wrap md:flex-nowrap bg-darkblue-900 px-2 py-1 items-center">
                {/* <!--Menu hambueguer--> */}
                  <div className="py-1 px-2 md:border border-gray-700 hover:border-white rounded cursor-pointer">
                      <i className="fas fa-bars text-2xl"></i>
                  </div>
                    <div className="flex mx-2 py-2 border border-transparent hover:border-white cursor-pointer">
                      <img src={Logo} alt="Logo da amazon" className="h-7" />
                      <span className="text-xs pl-1 pt-1 font-bold">.com.br</span>
                  </div>
                    <div className="w-full md:w-auto flex-grow md:ml-3 mr-0 pt-1 order-2 md:order-none">
                      <form action="" className="flex">
                          <select className="hidden md:block p-2 text-xs text-gray-700 bg-gray-200
                      hover:bg-gray-300 rounded-bl border-r border-gray-500">
                              <option value="">Livros</option>
                          </select>
                          <input type="text" className="p-2 flex-grow rounded-l md:rounded-none text-black" />
                          <button className="px-4 bg-gold-100 hover:bg-gold-200 rounded-tr rounded-br">
                              <i className="fas fa-search text-darkblue-900 text-xl mt-1"></i>
                          </button>
                      </form>
                  </div>
                  <div className="hidden md:block ml-1 pb-1 text-xs border-transparent
                   hover:border-white rounded-sm p-2">
                    <p className="leading-3">Olá faça o seu login</p>
                    <p className="font-extrabold">Contas e Listas <i class="fas fa-chevron-down"></i></p>
                </div>
                <div className="hidden md:block pb-1 text-xs border-transparent
                hover:border-white rounded-sm p-2">
                    <p className="leading-3">Devoluções</p>
                    <p className="font-extrabold">e Pedidos</p>
                </div>
                <div className="hidden md:block pb-1 text-xs border-transparent
                 hover:border-white rounded-sm p-2">
                    <p className="leading-3">Experimente</p>
                    <p className="font-extrabold">Prime <i class="fas fa-chevron-down"></i></p>
                </div>
                {/* <!--Carrinho--> */}
                <div className="p-2 border border-transparent hover:border-white rounded-sm absolute right-0
                  top-0 mr-2 mt-2 md:mr-0 md:mt-0 md:relative order-1 md:order-none md:flex">
                    <i className="fa fa-shopping-cart flex text-2xl md:mr-2"></i>
                    <span className="font-bold text-gold-200 text-base absolute top-0 left-0 -mt-1 ml-4
                   text-center w-6 h-6 bg-darkblue-600 rounded-full">0</span>
                    <span className="hidden md:flex text-xs font-extrabold">Carrinho</span>
                </div>
                {/* Parei no carrinho */}
                </div>
              </div>
          </header>
    )
}
