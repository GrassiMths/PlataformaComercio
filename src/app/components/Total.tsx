import { useCarrinhoState } from "@/state/carrinhoState";

export default function Total(){

    const itens = useCarrinhoState(state => state.carrinho)

    const soma = itens.reduce((acc, item) => acc + item.valor, 0);

    const formatter = new Intl.NumberFormat("pt-BR", {
        style : "currency",
        currency : "BRL",
    });

    return(
        <h1>Total: {formatter.format(soma)}</h1>
    )
}