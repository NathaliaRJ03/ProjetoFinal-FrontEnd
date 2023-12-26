import Menu from '../Components/menu'
import '../Components/style.css'
import Rodape from '../Components/rodape'
import Get from '../Components/Get'
import '././carrinho.css'
import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"



function contato(){
    const [inputData, setInputData] = useState({produto: '', valor: '', tamanho: ' ' , cor: ' ' ,foto: ''})
    const navigate = useNavigate()


    function enviar(event){
        alert("mensagem enviada com sucesso!")
        navigate('/')

    }

    return(
        <>
         <Menu />
 <div className = 'form1'>
        
        <form action='"https://api.staticforms.xyz/submit' method='post'>
            <div>
                <h1>Fale Conosco: </h1>
       
       <br/>
                 <label htmlFor="NomeCompleto">Nome Completo: </label><br />
                 <input type="NomeCompleto" name="NomeCompleto" className="from-control" 
                 onChange={e=>setInputData({ ...inputData, produto: e.target.value })}
                  />
             </div>
             <br />
             <div>
                 <label htmlFor="E-mail">E-mail:</label><br />
                 <input type="E-mail" name="E-mail" className="from-control"
                 onChange={e=>setInputData({ ...inputData, valor: e.target.value })}
                  />
                  
             </div>
             <br />
             
             <div>
                 <label htmlFor="message">Digite sua mensagem aqui:</label><br />
                 <textarea name = "message" cols ="30" rows ="10" placeholder = '' required ></textarea>
             </div>
            <p1>Obrigada! Entraremos em contato em breve.</p1>
             
            <br />
             
             <br />
             
             <button className="btn btn-dark" onClick = {enviar} >Enviar</button>
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

export default contato