import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Get from './Components/Get'
import Get2 from './Components/Get2'
import Get3 from './Components/Get3'
import Add from './Pages/Adicionar'
import Atualizar from './Pages/Atualizar'
import Atualizar2 from './Pages/Atualizar2'
import Carrinho from './Pages/Carrinho'
import Carrinho2 from "./Pages/Carrinho2"
import Carrinho3 from "./Pages/Carrinho3"
import Contato from "./Pages/Contato"
import Feminina from "./Pages/Feminina"
import Masculina from './Pages/Masculina'
import Home from './Pages/home'
import Add2 from './Pages/Adicionar2'
import CarrinhoVazio from './Pages/carrinhovazio'
import Validacao from './Pages/validacao'
import Validacao2 from './Pages/validacao2'
import Validacao3 from './Pages/validacao3'
import Pagamento from './Pages/pagamento'


function AppRouter(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/criar" element={<Add />}></Route>
                    <Route path="/criar2" element={<Add2 />}></Route>
                    <Route path="/update/:id" element={<Atualizar />}></Route>
                    <Route path="/update2/:id" element={<Atualizar2 />}></Route>
                    <Route path="/MNLADM1" element={<Get />}></Route>
                    <Route path="/MNLADM2" element={<Get2 />}></Route>
                    <Route path="/MNLADM3" element={<Get3 />}></Route>
                    <Route path="/masculina" element={<Masculina/>}></Route>
                    <Route path="/carrinho/:id" element={<Carrinho />}></Route>
                    <Route path="/carrinho2/:id" element={<Carrinho2 />}></Route>
                    <Route path="/feminina" element={<Feminina />}></Route>
                    <Route path="/contato" element={<Contato />}></Route>
                    <Route path="/carrinho3/:id" element={<Carrinho3/>}></Route>
                    <Route path="/carrinhovazio" element={<CarrinhoVazio />}></Route>
                    <Route path="/pagamento" element={<Pagamento />}></Route>
                    <Route path="/loginadm" element={<Validacao />}></Route>
                    <Route path="/loginadm2" element={<Validacao2 />}></Route>
                    <Route path="/loginadm3" element={<Validacao3 />}></Route>
                    <Route path="/pagamento" element={<Pagamento />}></Route>
                    
                    
              
                  

                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter