'use client'
import Link from "next/link";
import BotaoVoltar from "../components/BotaoVoltar";
import BotaoDesconectar from "../components/BotaoVoltar";
import "./catalogo.css"
import Carrinho from "../components/Carrinho";
import Produtos from "../components/Produtos";
import Total from "../components/Total";


function Catalogo() {
    return (   
        <div className="menu-compras">
            
            <div className="product">
                <Produtos/>
            </div>

            <div className="carrinho">
                <Carrinho/>
            </div>


        </div>
    )
}


 
export default Catalogo;