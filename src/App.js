import React from "react";
import styled from "styled-components";
import Carrinho from "./components/Carrinho.js";
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
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 120px 1fr 80px;
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
`;

const Lista = styled.div`
  img {
    width: 100px;
    padding: 10px;
  }
  button {
    margin: 4px;
    height: 30px;
  }
  border: 1px solid black;
  width: 230px;
  height: 220px;
  text-align: center;
`;
const Footer = styled.footer`
  grid-area: 3/1/4/5;
  background-image: url(${Back});
  background-size: cover;
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
const Filtros = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  border: 1px solid black;
  padding: 10px;
  gap: 15px;
`;
const DivInput = styled.div`
  grid-area: 1/1/2/2;
`;
const DivLista = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 20vw);

  gap: 12px;
  padding: 12px;
  border: 2px solid black;
  background-color: #d8bfd8;
  margin: 12px 0;
  grid-area: 1/2/6/3;
`;
const Ordenacao = styled.div`
  display: flex;
  justify-content: end;
  padding: 5px;
`;

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
    valorMinimo: "",
    valorMaximo: "",
    carrinho: [],
  };
  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };
  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };
  onChangeBusca = (event) => {
    this.setState({ buscarProduto: event.target.value });
  };

  addCarrinho = (id) => {
    const addProduto = this.state.produtos.filter((returnProduto) => {
      return returnProduto.id === id;
    });

    const novoCarrinho = [...this.state.carrinho, addProduto[0]];
    this.setState({ carrinho: novoCarrinho });
  };

  findProduto = (event) => {
    this.setState({ buscarProduto: event.target.value });
  };
  render() {
    return (
      <AppContainer>
        <Header>
          <img src={Logo} />
        </Header>
        <Filtros>
          <Ordenacao>
            Ordem:
            <select onChange={this.onChangeOrdenacao}>
              <option></option>
              <option>crescente</option>
              <option>decrescente</option>
            </select>
          </Ordenacao>
          <DivInput>
            <h3>Filtros</h3>
            <input
              type="Number"
              value={this.state.valorMinimo}
              onChange={this.onChangeValorMinimo}
              placeholder=" Valor Mínimo"
            />
            <input
              type="Number"
              value={this.state.valorMaximo}
              onChange={this.onChangeValorMaximo}
              placeholder="valor Máximo"
            />
            <input
              type="text"
              value={this.state.buscarProduto}
              onChange={this.findProduto}
              placeholder="Buscar:"
            />
          </DivInput>
          <DivLista>
            {this.state.produtos
              .filter((produtos) => {
                return produtos.nome
                  .toLowerCase()
                  .includes(this.state.buscarProduto.toLowerCase());
              })
              .filter((valorMin) => {
                return (
                  this.state.valorMinimo === "" ||
                  valorMin.preco >= this.state.valorMinimo
                );
              })
              .filter((valorMax) => {
                return (
                  this.state.valorMaximo === "" ||
                  valorMax.preco <= this.state.valorMaximo
                );
              })

              .map((produto) => {
                return (
                  <Lista>
                    {produto.imagem} <br />
                    {produto.nome} <br />
                    {produto.preco} <br />
                    <button
                      onClick={() => {
                        this.addCarrinho(produto.id);
                      }}
                    >
                      Adicinar Carrinho
                    </button>
                  </Lista>
                );
              })}
          </DivLista>
        </Filtros>

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
