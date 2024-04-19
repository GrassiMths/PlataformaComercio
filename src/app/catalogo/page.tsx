import Link from "next/link";
import BotaoVoltar from "../components/BotaoVoltar";

function Catalogo() {
    return (
       
                        
        <div className="container-catalogo">
    
            <h1 className="catalogo">Catálogo de Compras</h1> 

            <div className="product">
                <img src="/produto1.jpg" alt="Produto 1"></img>
                <div className="product-info">
                    <h2>Cadeira Gamer Rosa</h2>
                    <p>Cadeira gamer para os verdadeiros gamers.</p>
                    <p>Preço: R$ 990,00</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>

            <div className="product">
                <img src="/produto2.jpg" alt="Produto 2"></img>
                <div className="product-info">
                    <h2>PC Gamer</h2>
                    <p>PC gamer completo perfeito para jogo com um alto desempenho.</p>
                    <p>Preço: R$ 5599,99</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>

            <div className="product">
                <img src="/produto3.png" alt="Produto 3"></img>
                <div className="product-info">
                    <h2>Cueca Los 3 Mas Grandes</h2>
                    <p>Cueca mais pika de todos os tempos.</p>
                    <p>Preço: R$ 99,99</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            </div>
            <BotaoVoltar/>
        </div>
        


       
    )
}
 
export default Catalogo;