import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Menu from "../Components/menu"
import Rodape from "../Components/rodape"




function adicionar2(){

    const [inputData, setInputData] = useState({produto: '', valor: '', tamanho: ' ' , cor: ' ' ,foto: ''})
    const navigate = useNavigate()

    function HandSunmit(event){
        event.preventDefault()
        axios.post("https://bd-user-qimz.onrender.com/usuarios2", inputData)
        .then(res =>{
            alert("Dados Atualizados!")
            navigate('/MNLADM2')
        })
        .catch(err => console.log(err))

    }

    return(
        <>
        <Menu />
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
           
           <div className="w-50 border bg-light p-5">
            <form onSubmit={HandSunmit}>
            <h3>Adicione um produto na sessão masculina:</h3>
            <div >
                    <label htmlFor="produto">Produto</label><br />
                    <input type="produto" name="produto" className="from-control" 
                    onChange={e=>setInputData({ ...inputData, produto: e.target.value })}
                     />
                </div>
                <br />
                <div>
                    <label htmlFor="valor">Valor</label><br />
                    <input type="valor" name="valor" className="from-control"
                    onChange={e=>setInputData({ ...inputData, valor: e.target.value })}
                     />
                </div>
                <br />
                <div>
                    <label htmlFor="tamanho">Tamanho</label><br />
                    <input type="tamanho" name="tamanho" className="from-control"
                    onChange={e=>setInputData({ ...inputData, tamanho: e.target.value })}
                     />
                </div>
                <br />
                <div>
                    <label htmlFor="cores">Cor</label><br />
                    <input type="cores" name="cores" className="from-control"
                    onChange={e=>setInputData({ ...inputData, cor: e.target.value })}
                     />
                </div>
                <br />
                <div>
                    <label htmlFor="imagem">Imagem</label><br />
                    <input type="text" name="imagem" className="from-control"
                    onChange={e=>setInputData({ ...inputData, foto: e.target.value })}
                     />
                </div>
                
                
                <br />
                <button className="btn btn-info" >Enviar</button>
            </form>
            </div> 
           
           
        </div>
        <Rodape/>
        
        </>
    )
}

export default adicionar2