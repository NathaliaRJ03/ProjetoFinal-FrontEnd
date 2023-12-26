import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '././carrinho.css'


function inicial() {
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("https://bd-user-qimz.onrender.com/usuarios")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        },[])

  return (
    <div className='mud1'>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "120px" }} >
      
    {
      valor.map((d, i) => (
    
            <Card key={i} style={{ width: '230px' }}>
            <Card.Img variant="top" src={d.foto} style={{ width: "230px", height: "220px" }}/>
            <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}></Card.Title>
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
            

            <Link to={`/carrinho/${d.id}`} className='btn btn-dark'>Comprar</Link>
         
          </Card>
      ))

    
    }
    </div>
    </div>
    
  );
}

export default inicial;