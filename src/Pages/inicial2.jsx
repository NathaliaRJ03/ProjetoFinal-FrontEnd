import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import '././carrinho.css'


function inicial2() {
    const [valor, setValor] = useState([])
    const navigat = useNavigate()    

        useEffect(() => {
            axios.get("https://bd-user-qimz.onrender.com/usuarios2")
            .then(res => setValor(res.data))
            .catch(err => console.log(err))
        },[])

  return (
    <div className='mud1'>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "120px" }} >
      
    {
      valor.map((d, i) => (
    
            <Card key={i} style={{ width: '240px' }}>
            <Card.Img variant="top" src={d.foto} style={{ width: "240px", height: "240px" }}/>
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
            

            <Link to={`/carrinho2/${d.id}`} className='btn btn-dark'>Comprar</Link>
         
          </Card>
      ))

    
    }
    </div>
    </div>
  );
}

export default inicial2;