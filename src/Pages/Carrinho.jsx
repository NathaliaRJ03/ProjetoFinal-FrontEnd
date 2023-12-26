import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import '././carrinho.css'
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'







function carrinho(){

    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()
    const [res, setTotal] = useState(0)

   
console.log(res)
    useEffect(() => {
        axios.get("https://bd-user-qimz.onrender.com/usuarios/"+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    function pagar(event){
        alert("compra realizada com sucesso! número do pedido: 2318")
        navigat('/')

    }
 
    


    return(
        <> 
        <Menu />
        <div className= 'form-cantainer'>
            <h2> Seu Carrinho: </h2>
            <div>
                <div>
                    </div>
                    <div>
                        <img src={data.foto} style ={{width: '300px', height: '300px'}}/>
                        </div>
                        <div>
                            <h3>Produto</h3>
                            {data.produto}
                            </div>
                            <div>
                                <h3>Preço do produto </h3>
                                {data.valor}
                                </div>
                                <select onChange = {(e)=>setTotal(e.target.value)}>
                                <option value ="" disable>Quantidade de produtos</option>
                                    <option value = {1}disable>1</option>
                                    <option value = {2}disable>2</option>
                                    <option value = {3}disable>3</option>
                                    <option value = {4}disable>4</option>
                                    <option value = {5}disable>5</option>
                                    <option value = {6}disable>6</option>
                                    <option value = {7}disable>7</option>
                                    <option value = {8}disable>8</option>
                                    <option value = {9}disable>9</option>
                                    <option value = {10}disable>10</option>
                                    <option value = {11}disable>11</option>
                                    <option value = {12}disable>12</option>

                                </select>
                                <br />
                                <div>R$ {data.valor*res},00 </div>
                                    
        </div>  
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
        </div>
        
        <Rodape />        
        
      
        </>
    )
}

export default carrinho