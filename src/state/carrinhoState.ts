import { create } from 'zustand'

const produtos = [
  {
    id: 1,
    nome: 'Cadeira Gamer Rosa',
    valor: 990.99 ,
    foto: '/produto1.jpg'
  },
  {
    id: 2,
    nome: 'PC Gamer',
    valor: 5990.99,
    foto: '/produto2.jpg'
  },
  {
    id: 3,
    nome: 'Cueca Los 3 Más Grandes',
    valor: 25.99,
    foto: '/produto3.png'
  }
]

interface Produto{
    id: number
    nome: string
    valor: number
    foto: string
}

interface CarrinhoState{
      produtosDisponiveis: Produto[]
      carrinho: Produto[]
      adicionarCarrinho: (item: Produto) => void;
      removerCarrinho: (id: number) => void;
      limparCarrinho: () => void;
}

  export const useCarrinhoState = create<CarrinhoState>((set) => ({
      produtosDisponiveis: produtos,
      carrinho: [],

      adicionarCarrinho: (novoProduto) =>
        set((state) => ({
          carrinho: [...state.carrinho, novoProduto],
        })),

      removerCarrinho: (id) =>
      set((state) => ({
          carrinho: state.carrinho.filter((item) => item.id !== id),
      })),

      
      limparCarrinho: () =>
        set((state) => ({
            carrinho: [],
        })),
  }));
    

