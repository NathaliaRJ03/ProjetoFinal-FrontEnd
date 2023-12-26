import Menu from '../Components/menu'
import Rodape from '../Components/rodape'
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./formulario.css"



function Pagamento(){
    const [inputData, setInputData] = useState({produto: '', valor: '', tamanho: ' ' , cor: ' ' ,foto: ''})
    const navigate = useNavigate()


    function pagar(event){
        alert("compra realizada com sucesso! número do pedido: 2318")
        navigate('/')

    }

    return(
        <>
        <Menu />
        <div className = 'formulario'>
            <div>
                <h2>Fomas de Pagamento</h2>
                <img src = "../../public/cartoescerto.png" className = "imagem" ></img>
            </div>
        
        <form>
            <div>
                <h3>Informe os dados do cartão: </h3>
       
       <br/>
                 <label htmlFor="NomeCompleto">Número do cartão: </label><br />
                 <input type="NomeCompleto" name="NomeCompleto" className="from-control" 
                 onChange={e=>setInputData({ ...inputData, produto: e.target.value })}
                 placeholder = "0000 0000 0000 0000"
                  />
             </div>
             <br />
             <div>
                 <label htmlFor="E-mail">Nome impresso no cartão:</label><br />
                 <input type="E-mail" name="E-mail" className="from-control"
                 onChange={e=>setInputData({ ...inputData, valor: e.target.value })}
                  />
                  
             </div>
             <br />
             
             <div>
                 <label htmlFor="E-mail">cpf do titular:</label><br />
                 <input type="E-mail" name="E-mail" className="from-control"
                 onChange={e=>setInputData({ ...inputData, valor: e.target.value })}
                 placeholder = "999.999.999-99"
                  />
                  
             </div>
             
            <br />
             
             <br />
             
             <button className="btn btn-dark" onClick = {pagar} >Comprar</button>
             <br/>
             <br/>
             <h2> SAC: 0800 710 3244  </h2>
           
             <input type="hidden" name="accessKey" value=' 3bd74ced-c596-4d47-beb7-d91b7de9214e'/>
             <input type="hidden" name="redirectTo" value=""/>

         </form>
         
           <br/>
    </div>
        <Rodape />
        </>
    )
    
}
export default Pagamento
    