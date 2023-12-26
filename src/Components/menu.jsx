
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'
Link
NavLink



function menu (){
    return(
        <>
        
         <header className="menu">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a className = 'menu1' class="navbar-brand">MNL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/Feminina">Sessão Feminina</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="/Masculina">Sessão Masculina</a>
        </li>
        <li class="nav-item" >
          <a class="nav-link"  href="/Contato">Fale Conosco</a>
        </li>
     
        <li class="nav-item">
        <a class="nav-link"
          href="/carrinhovazio">Carrinho</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

</header>
        </>
    )

}
export default menu