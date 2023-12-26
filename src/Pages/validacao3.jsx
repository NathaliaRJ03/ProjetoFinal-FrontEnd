import { useState } from "react"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Components/menu'
import Rodape from "../Components/rodape"




function validacao3 (){
        //variaveis useStates, navigates, funções
        const [valor1, setData1] = useState()
        const [valor2, setData2] = useState()
        const navigat = useNavigate()

        function validar(event){
            event.preventDefault() 
            if(valor1 == "larissa.demetrio@aluno.senai.br" && valor2 == "1234")
            {
                alert("Login com sucesso!")
                navigat('/MNLADM3')
            }
            else
            {
                alert("Dados inválidos digite novamente!!")
                navigat('/loginadm')
            }
        }


    return(
        <>
        <div className="container"><Menu /></div>
        
        <br />
        <div className="d-flex w-80 vh-100% justify-content-center align-items-center">
          
           <div className="w-50 border bg-light p-5">
            <form onSubmit={validar} >
                <div style={{ fontSize: "30px" }}><p>Tela de Login</p></div>
                <div >
                    <label htmlFor="name">LOGIN</label><br />
                    <input type="text" style={{ width: "300px" }} name="login" placeholder="Digite seu Login aqui!" className="from-control" 
                    onChange={e => setData1(e.target.value)} />
                </div><br />
                <div>
                    <label htmlFor="valor">SENHA</label><br />
                    <input type="password" name="senha" style={{ width: "300px" }}placeholder="Digite sua senha!"  className="from-control"
                     onChange={e => setData2(e.target.value)} />
                </div><br />
                
                <button className="btn btn-info" >-- LOGAR --</button>
            </form>
            </div> 
           
           
        </div>
        <br /><br /> <br /> <br />
        <Rodape />
        </>
    )
}

export default validacao3