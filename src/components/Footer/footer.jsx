import Logo from "./images/amazon_logo.png";

export function Footer() {
    return(
     <footer className="flex flex-col text-white">
       {/* <!--Footer Superior--> */}
     <div className="py-4 text-center bg-darkblue-600 hover:bg-darkblue-500 text-sm cursor-pointer">
        <p>Voltar ao inicio</p>
     </div>
     <div className="flex flex-wrap md:flex-nowrap md:justify-around py-10 px-10 md:px-20 bg-darkblue-700">
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Conheça-nos</h4>
            <ul className="text-xs w-3/4">
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Informações corporativas</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Carreiras</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Comunicados à imprensa</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Comunidade</a>
                </li>
            </ul>
        </div>
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Ganhe dinheiro conosco</h4>
            <ul className="text-xs w-3/4">
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Publique seu livros</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Seja um associado</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">venda na amazon</a>
                </li>
            </ul>
        </div>
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Conheça-nos</h4>
            <ul className="text-xs w-3/4">
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Sua conta</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Frete prazos de entrega</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Devoluções e reembolsos</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Gerencie seu contéudo e dispositivos</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Ajuda</a>
                </li>
            </ul>
        </div>
        <div className="w-1/2 md:w-auto mb-4 md:mb-0">
            <h4 className="font-bold mb-2">Pagamentos</h4>
            <ul className="text-xs w-3/4">
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Amazon e COVID-19</a>
                </li>
                <li className="mb-2 text-gray-300 hover:underline leading-4">
                    <a href="#">Cartões de Crédito e boleto</a>
                </li>
            </ul>
        </div>
     </div>
     {/* <!--Footer intermediario--> */}
     <div className="hidden md:flex flex-col items-center bg-darkblue-700 border-t 
     border-gray-700 pt-6 pb-4">
       <img src={Logo} alt="Amazon" className="w-20" />
       <ul className="flex flex-wrap justify-center text-xs pt-4 w-3/4 text-gray-400">
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Austrália</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Alemanha</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Canádá</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">China</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Cingapura</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Espanha</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Estados Unidos</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">França</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Holanda</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Índia</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Itália</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Japão</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">México</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Emirados Árabes Unidos</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Reino Unido</a>
         </li>
         <li className="px-2 border-r border-gray-600 hover:underline">
            <a href="#">Turquia</a>
         </li>
       </ul>
       <div className="flex text-xs">
        <span className="text-gray-600 mr-2">E não esqueça:</span>
        <a href="#" className="text-gray-400 hover:underline">Amaon Web Services</a>
       </div>
     </div>
     {/* <!--Footer inferior--> */}
     <div className="flex flex-col items-center bg-darkblue-950 text-xs pt-8 md:pt-2">
        <div className="flex flex-col md:flex-row mb-10">
            <ul className="flex">
              <li className="px-2 border-none md:border-r text-center md:text-left 
               border-gray-600 hover:underline">
               <a href="#">Condições de uso</a>
            </li>
            <li className="px-2 border-none md:border-r text-center md:text-left 
               border-gray-600 hover:underline">
               <a href="#">Notificação de Privacidade</a>
            </li>
            <li className="px-2 border-none md:border-r text-center md:text-left 
               border-gray-600 hover:underline">
               <a href="#">Cookies</a>
            </li>
            <li className="px-2 border-none md:border-r text-center md:text-left 
               border-gray-600 hover:underline">
               <a href="#">Anúncios em interesses</a>
            </li>
            </ul>
            <span className="text-center md:text-left mt-8 md:mt-0 ml-4 text-gray-600">&copy; Amazon.com, Inc. ou suas afiliadas</span>
        </div>
        <p className="item-footer-info">
            Amazon Serviços de Varejo do Brasil Ltda.| CNPJ 15.436.940/0001-03
        </p>
        <p className="item-footer-info">
            Av. Jucelino Kubischeck 2041, Torre E, 18º Andar - São Paulo <a href="#" className="text-blue-800">Fale conosco</a>
        </p>
        <p className="item-footer-info">
            Formas de pagaemntos aceitas: Cartões de crédito (Visa, Mastercard, Elo e American Express)  boleto e Pix.
        </p>
     </div>
   </footer>
    )
}