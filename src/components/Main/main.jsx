import cat1 from "./images/cat1.jpg";
import cat2 from "./images/cat2.jpg";
import cat3 from "./images/cat3.jpg";
import cat4 from "./images/cat4.jpg";
import cat5 from "./images/cat5.jpg";
import cat6 from "./images/cat6.jpg";
import cat7 from "./images/cat7.jpg";
import cat8 from "./images/cat8.jpg";
import cat9 from "./images/cat9.jpg";
import bannerpromo from "./images/banner_promo.jpg";
import livro1 from "./images/livro1.jpg";
import livro2 from "./images/livro2.jpg";
import livro3 from "./images/livro3.jpg";
import livro4 from "./images/livro4.jpg";
import livro5 from "./images/livro5.jpg";
import livro6 from "./images/livro6.jpg";
import livro7 from "./images/livro7.jpg";
import livro8 from "./images/livro8.jpg";


export function Main() {
    return (
        <main>
        <div className="grid grid-cols-6">
           {/* <!--Navbar Esquerda--> */}
           <div className="col-span-1 hidden md:block pl-2 my-2 border-r border-gray-300 text-xs">
               <h3 className="font-bold">Destaque Em livros</h3> 
               <ul className="pl-2 mb-2">
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Indicações Amazon</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Inglês e outras Línguas</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Livros em oferta</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Mais Vendidos do Mês</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Pré-venda e Lançamentos</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Livros Exclusivos Amazon</a>
                   </li>
               </ul>
               <h3 className="font-bold">Páginas Especiais</h3> 
               <ul className="pl-2 mb-2">
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Livros Clássico</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Livros que viraram Filmes</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Loja Geek</a>
                   </li>
               </ul>
               <h3 className="font-bold">Livros Educacionais</h3> 
               <ul className="pl-2 mb-2">
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Didáticos e Escolares</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Estudo e Ensino de Idiomas</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Examos e Concurso</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Importados para Exames</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Universitários e Acadêmicos</a>
                   </li>
               </ul>
               <h3 className="font-bold">Kindle</h3> 
               <ul className="pl-2 mb-2">
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Acessórios Kindle</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Comprar Kindle</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">eBooks em Inglês</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">eBooks em oferta</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Kindle Unlimited</a>
                   </li>
                   <li className="text-gray-800 hover:text-orange-650">
                       <a href="#">Todos os eBooks</a>
                   </li>
               </ul>
           </div>
           {/* <!--Conteudo principal--> */}
           <div className="col-span-6 md:col-span-5 p-2">
              <div className="flex flex-col">
                {/* <!--Título e Categorias--> */}
                <div className="text-center">
                   <h2 className="text-2xl font-bold md:text-3xl md:font-normal mb-1">Loja de Livros</h2>
                   <ul className="flex flex-wrap md:flex-nowrap justify-center md:text-sm px-4 md:px-0 pb-2">
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Livros em Oferta</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Importados</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Lançamentos</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Universitários</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Didáticos e escolares</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">HQs e Mangás</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Mais Vendidos</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1 border-r 
                       border-black">Livros Infantis</a>
                      </li>
                      <li>
                       <a href="#" 
                       className="text-blue-600 underline hover:text-orange-650 px-1">Indicações</a>
                      </li>
                   </ul>
                   <div className="h-2 border-b shadow-md"></div>
                </div>
                {/* <!--Promoções e Categorias--> */}
                <div className="hidden md:block my-6">
                   <img src={bannerpromo} alt="Promoções"/>
                </div>
                <div className="flex flex-col md:flex-row items-center my-8 py-1">
                   <p className="font-bold md:w-3/4 text-center md:border-r-2 border-gray-300 
                   leading-5 pr-2 mt-10 md:mt-0">Assine o Amazon Prime para ter benefícios de 
                   leitura com o prime Reading, frete GRÁTIS sem valor mínimo de compra e muito mais.
                    Apenas R$ 16,00/mês.</p>
                    <a href="#" className="btn-amazon-prime">Teste GRATÍS por 30 dias</a>
                </div>
                {/* <!-- Categorias !--> */}
                <div className="flex flex-col px-6 pb-8 border-b border-gray-400">
                   <h3 className="text-center md:text-left text-xl font-bold mb-4">Encontre ofertas Promoções
                     por categorias</h3>
                     <ul className="flex flex-wrap md:flex-nowrap px-2 text-xs font-bold">
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat1} alt="Todas as ofertas" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Todas as Ofertas</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat2} alt="Ofertas Relâmpago" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Ofertas Relâmpago</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat3} alt="Literatura" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Literatura</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat4} alt="HQs e Mangás" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">HQs e Mangás</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat5} alt="Ficção" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Ficção</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat6} alt="Inglês e outras línguas" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Inglês e outras línguas</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat7} alt="Autoajuda" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Autoajuda</a>
                       </li>
                       <li className="text-center mx-3 mb-3 md:mb-0">
                           <img src={cat8} alt="Infantil" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Infantil</a>
                       </li>
                       <li className="text-center mx-auto md:mx-3 mb-3 md:mb-0">
                           <img src={cat9} alt="Negócios" className="rounded w-full md:w-75px mb-2 mx-auto"/>
                           <a href="#">Negócios</a>
                       </li>
                     </ul>
                </div>
                {/* <!-- Catálogo De produtos --> */}
                <div className="flex flex-col">
                   <div className="flex justify-between py-2 px-4 text-sm">
                       <p>Mostrando 1-32 de 122 Resultados</p>
                       <div className="flex md:flex-none">
                           <span>Ordenar por</span>
                           <select className="bg-gray-300 pr-4 md:pr12 ml-3 rounded-sm border 
                           border-gray-300 text-xs px-1">
                            <option>Destaques</option> 
                            <option>Todos</option> 
                       </select>
                       </div>
                   </div>
                   <div className="flex flex-wrap border border-gray-300 divide-x divide-gray-300 mb-10">
                       <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                          <img src={livro1} alt="Livro 1" className="h-210px place-self-center p-2"/>
                         <p className="text-red-700 mt-10">R$ 26,30</p>
                         <p className="text-sm mb-2">De: <span className="line-through">R$ 63,60</span> (58% off)</p>
                         <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                         <a href="#" className="text-sm text-blue-600 hover:underline 
                         hover:text-orange-650 mb-2">Em busca de Sentido</a>
                         <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                           className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                           <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                           py-1">Saiba mais</button>
                       </div>
                       <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro2} alt="Livro 2" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 17,40</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 39,90</span> (56% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">Não se Humilha, Não</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro3} alt="Livro 3" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 17,40</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 34,90</span> (50% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">As Seis Lições</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro4} alt="Livro 4" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 37.90</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 49,90</span> (44% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">Anne ll</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro5} alt="Livro 5" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 13,40</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 39,90</span> (36% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">Propósito - A coragem de ser quem somos</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro6} alt="Livro 6" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 20,50</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 42,00</span> (51% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">A morte de Ivan Ilitch</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro7} alt="Livro 7" className="h-210px place-self-center p-2"/>
                          <p className="text-red-700 mt-10">R$ 10,40</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 37,90</span> (73% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">Outros jeitos de usar a boca</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                        <div className="w-1/2 md:w-1/4 flex flex-col px-8 py-4 border-b border-gray-300">
                           <img src={livro8} alt="Livro 8" className="h-210px place-self-center p-2" />
                          <p className="text-red-700 mt-10">R$ 55,90</p>
                          <p className="text-sm mb-2">De: <span className="line-through">R$ 119,90</span> (53% off)</p>
                          <p className="text-xs text-gray-700 mb-2">Termina em 2:09:46</p>
                          <a href="#" className="text-sm text-blue-600 hover:underline 
                          hover:text-orange-650 mb-2">Nassim Nicholas Taleb Exclusivo Amazon</a>
                          <p className="text-sm mb-8">Está oferta é excluisiva para membros do <a href="#" 
                            className="text-xs text-blue-600 hover:underline hover:text-orange-650">Amazon Prime</a>.</p>
                            <button className="text-xs bg-gray-200 border border-gray-600 rounded-sm 
                            py-1">Saiba mais</button>
                        </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </main> 
    )
}