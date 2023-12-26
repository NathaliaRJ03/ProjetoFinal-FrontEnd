import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'
import Carrosel from './corrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import '././carrinho.css'



function produtos() {
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("https://bd-user-qimz.onrender.com/produtos")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        })

  return (
    <div className='mud1'>
    <>
    <Menu />
    <div className = "responsivo">
      <div className = "container-fluid">
        <div>
          <Carrosel/>
        </div>
      </div>

    </div>
    
    
    <br/>
    <h1 className='let'>Últimas Peças:</h1>
    <div style={{ display: "flex", textAlign:'center',flexWrap: "wrap", gap: "200px" }} >
    {
      valor.map((d, i) => (
            <Card key={i} style={{ width: '270px'}}>
            <Card.Img   variant="top" src={d.foto} style={{ width: "270px", height: "260px" , display: 'flex'}}/>
            <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}></Card.Title>
            <Card.Text>
            
            </Card.Text>

            <Card.Text>
            {d.produto}
            </Card.Text>
            <Card.Text>
            {d.tamanho}
            </Card.Text>
            <Card.Text>
            {d.cor}
            </Card.Text>
            <Card.Text> R$ {d.valor},00 </Card.Text> </Card.Body>
            
            <Link to={`/carrinho3/${d.id}`} className="btn btn-dark">Comprar</Link>
            
          </Card>
      ))

    
    }
    </div><br /><br />
    
    <Rodape />
    </>
    
    </div>
  );
}

export default produtos;