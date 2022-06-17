import React from "react";
import styled from "styled-components";
import Produtos from "./components/Produtos.js";
import Carrinho from "./components/Carrinho.js";
import Filtros from "./components/Filtro";
import Camiseta1 from "./img/camiseta1.jpeg";
import Camiseta2 from "./img/camiseta2.jpeg";
import Camiseta3 from "./img/camiseta16.jpeg";
import Camiseta4 from "./img/camiseta15.jpeg";
import Camiseta5 from "./img/camiseta14.jpeg";
import Camiseta6 from "./img/camiseta13.jpeg";
import Camiseta7 from "./img/camiseta12.jpeg";
import Camiseta8 from "./img/camiseta10.jpeg";
// import imgCabecalho from "./img/logo1.png";
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
// const ContainerCarrinho = styled.div`
//   border: 2px solid blue;
// `;
const produtos = [
  {
    id: 1,
    nome: "Limpeza das Estrelas",
    preco: 100,
    imagem: <img src={Camiseta1} alt="" />,
  },
  {
    id: 2,
    nome: "Role de Skate",
    preco: 69,
    imagem: <img src={Camiseta2} alt="" />,
  },
  {
    id: 3,
    nome: "Mix Espacial",
    preco: 180,
    imagem: <img src={Camiseta3} alt="" />,
  },
  {
    id: 4,
    nome: "Astro Musica",
    preco: 120,
    imagem: <img src={Camiseta4} alt="" />,
  },
  {
    id: 5,
    nome: "Basquete de Saturno",
    preco: 59,
    imagem: <img src={Camiseta5} alt="" />,
  },
  {
    id: 6,
    nome: "Festa no Espaço",
    preco: 143,
    imagem: <img src={Camiseta6} alt="" />,
  },
  {
    id: 7,
    nome: "Aeroespacial",
    preco: 102,
    imagem: <img src={Camiseta7} alt="" />,
  },
  {
    id: 8,
    nome: "Pug Astronauta",
    preco: 39,
    imagem: <img src={Camiseta8} alt="" />,
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

  addCarrinho = (id) => {
    const addProduto = produtos.filter((returnProduto, index) => {
      if (id === returnProduto.id) {
        return returnProduto;
      }
    });

    const novoCarrinho = [...this.state.carrinho, addProduto[0]];
    this.setState({ carrinho: novoCarrinho });
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
              <Produtos lista={produtos} butao={this.addCarrinho} />
            </ContainerProdutos>
          }
          <Carrinho carrinho={this.state.carrinho} />
        </section>
        <footer>
          <p>
            <b> No Copyright </b>{" "}
          </p>
          <TextoRodape>Larissa, Fabiano, Giovanna</TextoRodape>
        </footer>
      </AppContainer>
    );
  }
}
export default App;
