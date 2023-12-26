import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import '././carrinho.css'
import Menu from '../Components/menu'
import Rodape from '../Components/rodape'
import { Link } from "react-router-dom"


function carrinho(){
    return(
        <> 
        <Menu />
        <h1>Seu carrinho está vazio</h1>
        
        <Rodape />        
        
      
        </>
    )
}

export default carrinho
