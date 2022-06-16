import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos.js";
import Carrinho from "./components/Carrinho.js";
import Filtros from "./components/Filtro";
import Camiseta1 from "./img/camiseta-1.jpeg";
import Camiseta2 from "./img/camiseta-2.jpeg";
import Camiseta3 from "./img/camiseta-16.jpeg";
import Camiseta4 from "./img/camiseta-15.jpeg";
import Camiseta5 from "./img/camiseta-14.jpeg";
import Camiseta6 from "./img/camiseta-13.jpeg";
import Camiseta7 from "./img/camiseta-12.jpeg";
import Camiseta8 from "./img/camiseta-10.jpeg";
import imgCabecalho from "./img/logo1.png";
const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;
const TextoRodape = styled.p`
  border: 2px solid red;
`;
const ContainerProdutos = styled.div`
  border: 2px solid black;
`;
const ContainerCarrinho = styled.div`
  border: 2px solid blue;
`;
const produtos = [
  {
    id: 1,
    nome: "Limpeza das Estrelas",
    preco: 100,
    imagem: Camiseta1,
  },
  {
    id: 2,
    nome: "Role de Skate",
    preco: 69,
    imagem: Camiseta2,
  },
  {
    id: 3,
    nome: "Mix Espacial",
    preco: 180,
    imagem: Camiseta3,
  },
  {
    id: 4,
    nome: "Astro Musica",
    preco: 120,
    imagem: Camiseta4,
  },
  {
    id: 5,
    nome: "Basquete de Saturno",
    preco: 59,
    imagem: Camiseta5,
  },
  {
    id: 6,
    nome: "Festa no Espaço",
    preco: 143,
    imagem: Camiseta6,
  },
  {
    id: 7,
    nome: "Aeroespacial",
    preco: 102,
    imagem: Camiseta7,
  },
  {
    id: 8,
    nome: "Pug Astronauta",
    preco: 39,
    imagem: Camiseta8,
  },
];
class App extends React.Component {
  state = {
    produto: "Produto",
    buscarProduto: "",
    valorMinimo: 0,
    valorMaximo: 180,
    carrinho: [],
  };
  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: Number(event.target.value) });
  };
  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: Number(event.target.value) });
  };
  onChangeBusca = (event) => {
    this.setState({ buscarProduto: event.target.value });
  };
  onAddProdutoCarrinho = (produtoId) => {
    const produtosCarrinho = this.state.carrinho.filter(
      (produtos) => produtoId === produtos.id
    );
    if (produtosCarrinho) {
      const novosProdutosCarrinho = this.state.produtosCarrinho.map(
        (produtos) => {
          if (produtoId === produtos.id) {
            return {
              ...produtos,
              quantidade: produtos.quantidade + 1,
            };
          }
          return produtos;
        }
      );
      this.setState({ produtosCarrinho: novosProdutosCarrinho });
    } else {
      const produtoParaAdd = produtos.filter(
        (produtos) => produtoId === produtos.id
      );
      const novosProdutosCarrinho = [
        ...this.state.produtosCarrinho,
        { ...produtoParaAdd, quantidade: 1 },
      ];
      this.setState({ produtosCarrinho: novosProdutosCarrinho });
    }
  };
  render() {
    return (
      <AppContainer>
        <Filtros>
          valorMinimo = {this.state.onChangeValorMinimo}
          valorMaximo = {this.state.onChangevalorMaximo}
          buscarProduto = {this.state.onChangeBusca}
        </Filtros>
        <section className="main-container">
          {
            <ContainerProdutos>
              <Produtos></Produtos>
            </ContainerProdutos>
          }
          <ContainerCarrinho>
            <h3>Carrinho</h3>
            <div>Carrinhos</div>
            <p>Valor Totatl: </p>
          </ContainerCarrinho>
        </section>
        <footer>
          <p class="text">
            <b> No Copyright </b>{" "}
          </p>
          <TextoRodape>Larissa, Fabiano, Giovanna</TextoRodape>
        </footer>
      </AppContainer>
    );
  }
}
export default App;
