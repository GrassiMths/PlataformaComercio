import { useCarrinhoState } from "@/state/carrinhoState";

export default function Produto(){
    const [itens, adicionarCarrinho] = useCarrinhoState(state => [
        state.produtosDisponiveis,
        state.adicionarCarrinho,
    ])

    return(
        <div>
            <h1>Produtos Disponíveis</h1>
            <ul>
                {itens.map((item) => (
                    <li key={item.id}>
                        <img src={item.foto}></img>
                        {item.nome} - ${item.valor}    
                        <button onClick={() =>{adicionarCarrinho(item)}}>
                            Adicionar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

