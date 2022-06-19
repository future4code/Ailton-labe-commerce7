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
import Camiseta18 from "./img/camiseta18.jpeg";
import Back from "./img/back.jpg";
import Logo from "./img/logo1.png";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 120px 1fr 80px;
  /* gap: 8px; */
`;

const Header = styled.header`
  background-image: url(${Back});
  grid-area: 1/1/2/5;
  padding: 0;
  margin: 0;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-position: center;

  img {
    height: 150px;
    padding: 0;
  }
`;
const TextoRodape = styled.p`
  margin: 0;
  color: white;
  font-weight: bold;
  /* padding-top: 20px; */
`;
const ContainerProdutos = styled.div`
  border: 2px solid black;
  background-color: #d8bfd8;
  margin: 12px 0;
`;

const Footer = styled.footer`
  grid-area: 3/1/4/5;
  background-image: url(${Back});
  background-size: cover;
  /* background-position: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  img {
    height: 30px;
  }
  div {
    display: flex;
    gap: 4px;
  }
`;

const Ordenacao = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px;
`;
// const ContainerCarrinho = styled.div`
//   border: 2px solid blue;
// `;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "Colar Urano",
        preco: 100,
        imagem: <img src={Camiseta1} alt="" />,
      },
      {
        id: 2,
        nome: "Anel Júpiter,",
        preco: 69,
        imagem: <img src={Camiseta2} alt="" />,
      },
      {
        id: 3,
        nome: "Anel Via-Lactea",
        preco: 180,
        imagem: <img src={Camiseta3} alt="" />,
      },
      {
        id: 4,
        nome: "Brincos Éris",
        preco: 120,
        imagem: <img src={Camiseta4} alt="" />,
      },
      {
        id: 5,
        nome: "Brincos Saturno",
        preco: 59,
        imagem: <img src={Camiseta5} alt="" />,
      },
      {
        id: 6,
        nome: "Colar Festa no Espaço",
        preco: 143,
        imagem: <img src={Camiseta6} alt="" />,
      },
      {
        id: 7,
        nome: "Colar Aeroespacial",
        preco: 102,
        imagem: <img src={Camiseta7} alt="" />,
      },
      {
        id: 8,
        nome: "Brincos Astronauta",
        preco: 39,
        imagem: <img src={Camiseta8} alt="" />,
      },
      {
        id: 9,
        nome: "Bracelete Planetas",
        preco: 80,
        imagem: <img src={Camiseta18} alt="" />,
      },
    ],
    produto: "Produto",
    ordenacao: "crescente",
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
      const produtoParaAdd = this.state.produtos.filter(
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
    const addProduto = this.state.produtos.filter((returnProduto, index) => {
      return returnProduto.id === id;
    });

    const novoCarrinho = [...this.state.carrinho, addProduto[0]];
    this.setState({ carrinho: novoCarrinho });
  };

  onChangeOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value });
    if (event.target.value === "crescente") {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => a.preco - b.preco),
      });
    }
    if (event.target.value === "decrescente") {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => b.preco - a.preco),
      });
    }
  };
  onClickExcluir = (id) => {
    const removeProdutos = this.state.carrinho.filter((item, index) => {
      return id !== index;
    });
    this.setState({ carrinho: removeProdutos });
  };

  render() {
    return (
      <AppContainer>
        <Header>
          <img src={Logo} />
        </Header>
        <Filtros>
          valorMinimo = {this.state.onChangeValorMinimo}
          valorMaximo = {this.state.onChangevalorMaximo}
          buscarProduto = {this.state.onChangeBusca}
          onChangeValorMaximo = {this.onChangeValorMinimo}
          onChangeValorMaximo = {this.onChangeValorMaximo}
          onChangeBusca = {this.onChangeBusca}
        </Filtros>

        <div>
          <ContainerProdutos>
            <Ordenacao>
              <h3>PRODUTOS:</h3>
              <select onChange={this.onChangeOrdenacao}>
                <option>crescente</option>
                <option>decrescente</option>
              </select>
            </Ordenacao>

            <Produtos
              lista={this.state.produtos}
              butao={this.addCarrinho}
            ></Produtos>
          </ContainerProdutos>
        </div>

        <Carrinho
          excluir={this.onClickExcluir}
          carrinho={this.state.carrinho}
        />

        <Footer>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/179/179319.png" />
            <img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494488.png?token=exp=1655518662~hmac=7707602d3d777b95550f82512b885d08" />
          </div>

          <TextoRodape>Larissa, Fabiano, Giovanna</TextoRodape>
        </Footer>
      </AppContainer>
    );
  }
}
export default App;
