import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import Mane from '../Components/menu'
import '././carrinho.css'
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'
import { Link } from "react-router-dom"



function carrinho3(){

    const {id} = useParams()
    const [data, setData] = useState([])
    const navigat = useNavigate()
    const [res, setTotal] = useState(0)

    useEffect(() => {
        axios.get("https://bd-user-qimz.onrender.com/produtos/")
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
        

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
        {/* <Link to="../Pages/pagamento" className='btn btn-dark'>Comprar</Link>  */}
        <Link to="/pagamento" className='btn btn-dark'>comprar</Link>

        </div>    
        <Rodape />     
        
      
        </>
    )
}

export default carrinho3