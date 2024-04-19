import Link from "next/link"

export default function BotaoVoltar(){
    return (
        <button className="btn-voltar"><Link href ="carrinho">Voltar</Link></button>
    )
}