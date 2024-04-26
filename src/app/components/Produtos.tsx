import { useCarrinhoState } from "@/state/carrinhoState";

export default function Produto(){
    const [itens, adicionarCarrinho] = useCarrinhoState(state => [
        state.produtosDisponiveis,
        state.adicionarCarrinho,
    ])


    const formatter = new Intl.NumberFormat("pt-BR", {
        style : "currency",
        currency : "BRL",
    });

    return(
        <div>
            <h1>Produtos Disponíveis</h1>
            <ul>
                {itens.map((item) => (
                    <li key={item.id}>
                        <img src={item.foto}></img>
                        <div className="informacoes-produto">
                            <div className="nome-produto">
                                {item.nome} 
                            </div>
                            <div className="valor-produto">
                                {formatter.format(item.valor)} 
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link> 
                            <button onClick={() =>{adicionarCarrinho(item)}}><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div> 
                        
                    </li>
                    
                ))}
                
            </ul>
            
        </div>
    )
}

