import { useCarrinhoState } from "@/state/carrinhoState";
import Total from "./Total";

export default function Carrinho(){
    const [itens, removerCarrinho, limparCarrinho] = useCarrinhoState(state => [
        state.carrinho,
        state.removerCarrinho,
        state.limparCarrinho,
    ])

    const soma = itens.reduce((acc, item) => acc + item.valor, 0);

    const formatter = new Intl.NumberFormat("pt-BR", {
        style : "currency",
        currency : "BRL",
    });

    

    return(
        <div>
            <h1>Meu Carrinho</h1>
            <ul>
                {itens.map((item) => (
                    <li key={item.id}>
                        {item.nome} - ${item.valor}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link> 
                        
                        <button className="remover-carrinho" onClick={() =>{removerCarrinho(item.id)}}><i className="fa-solid fa-xmark"></i></button>
                    </li>
                ))}
            </ul>
            <button className = "limpar-carrinho" onClick={() => limparCarrinho()}>Limpar Carrinho</button>
            <div className="total">
            <Total/>
            </div>

        </div>
    )
}

