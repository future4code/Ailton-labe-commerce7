<<<<<<< HEAD
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
=======
import React from 'react'
import styled from 'styled-components'
import Produtos from './components/Produtos.js'
import Carrinho from './components/Carrinho.js'
import Filtros from './components/Filtro'
import Camiseta1 from './img/camiseta1.jpeg'
import Camiseta2 from './img/camiseta2.jpeg'
import Camiseta3 from './img/camiseta16.jpeg'
import Camiseta4 from './img/camiseta15.jpeg'
import Camiseta5 from './img/camiseta14.jpeg'
import Camiseta6 from './img/camiseta13.jpeg'
import Camiseta7 from './img/camiseta12.jpeg'
import Camiseta8 from './img/camiseta10.jpeg'
import Camiseta18 from './img/camiseta18.jpeg'
import Back from "./img/back.jpg"
import Logo from "./img/logo1.png"


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 120px 1fr 80px;
`

const  Header = styled.header`
background-image: url(${Back});
grid-area: 1/1/2/5;
padding: 0;
margin: 0;
background-size: cover;
display: flex;
justify-content: center;
background-position: center;

img{
  height: 150px;
  padding: 0;
}
`
const TextoRodape = styled.p`
 margin: 0;
  color: white; 
  font-weight:  bold;
  /* padding-top: 20px; */
`
const ContainerProdutos = styled.div`
  border: 0.5px solid purple;
  background-color: #ead1dc;
  margin: 0;
`

>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32
const Footer = styled.footer`
  grid-area: 3/1/4/5;
  background-image: url(${Back});
  background-size: cover;
<<<<<<< HEAD
=======
  /* background-position: center; */
>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
<<<<<<< HEAD
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
=======
  img{
    height: 30px; 
  }
  div{
    display: flex;
    gap: 4px;
  }
`

const Ordenacao = styled.div`
  display: flex;
  justify-content: end;
  padding: 2px;
  height: 15px;
  justify-content: space-between;
  display: flex;
  margin: 10px 2px 10px 2px;
  align-items: center;
`
// const TextoProdutos = styled.h4 `
// align-items: center;
//   margin-left: 10px;
//   margin-bottom: 3000px;
//   display: inline;
//   padding-bottom: 400px;
// `
// const ContainerCarrinho = styled.div`
//   border: 2px solid blue;
// `;
>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
<<<<<<< HEAD
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
=======
        nome: 'Colar Urano',
        preco: 100,
        imagem: <img src={Camiseta1} alt="" />
      },
      {
        id: 2,
        nome: 'Anel Júpiter',
        preco: 69,
        imagem: <img src={Camiseta2} alt="" />
      },
      {
        id: 3,
        nome: 'Anel Via-Lactea',
        preco: 180,
        imagem: <img src={Camiseta3} alt="" />
      },
      {
        id: 4,
        nome: 'Brincos Éris',
        preco: 120,
        imagem: <img src={Camiseta4} alt="" />
      },
      {
        id: 5,
        nome: 'Brincos Saturno',
        preco: 59,
        imagem: <img src={Camiseta5} alt="" />
      },
      {
        id: 6,
        nome: 'Colar Festa no Espaço',
        preco: 143,
        imagem: <img src={Camiseta6} alt="" />
      },
      {
        id: 7,
        nome: 'Colar Aeroespacial',
        preco: 102,
        imagem: <img src={Camiseta7} alt="" />
      },
      {
        id: 8,
        nome: 'Brincos Astronauta',
        preco: 39,
        imagem: <img src={Camiseta8} alt="" />
      },
      {
        id: 9,
        nome: 'Bracelete Planetas',
        preco: 80,
        imagem: <img src={Camiseta18} alt="" />
      }
    ],
    produto: 'Produto',
    ordenacao: 'crescente',
    buscarProduto: '',
    valorMinimo: 0,
    valorMaximo: 3000,
    carrinho: []
  }
  onChangeValorMinimo = event => {
    this.setState({ valorMinimo: Number(event.target.value) })
  }
  onChangeValorMaximo = event => {
    this.setState({ valorMaximo: Number(event.target.value) })
  }
  onChangeBusca = event => {
    this.setState({ buscarProduto: event.target.value })
  }
  onAddProdutoCarrinho = produtoId => {
    const produtosCarrinho = this.state.carrinho.filter(
      produtos => produtoId === produtos.id
    )
    if (produtosCarrinho) {
      const novosProdutosCarrinho = this.state.produtosCarrinho.map(
        produtos => {
          if (produtoId === produtos.id) {
            return {
              ...produtos,
              quantidade: produtos.quantidade + 1
            }
          }
          return produtos
        }
      )
      this.setState({ produtosCarrinho: novosProdutosCarrinho })
    } else {
      const produtoParaAdd = this.state.produtos.filter(
        produtos => produtoId === produtos.id
      )
      const novosProdutosCarrinho = [
        ...this.state.produtosCarrinho,
        { ...produtoParaAdd, quantidade: 1 }
      ]
      this.setState({ produtosCarrinho: novosProdutosCarrinho })
    }
  }

  addCarrinho = id => {
    const addProduto = this.state.produtos.filter((returnProduto, index) => {
      return returnProduto.id === id
    })
>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32

    const novoCarrinho = [...this.state.carrinho, addProduto[0]]
    this.setState({ carrinho: novoCarrinho })
  }

  onChangeOrdenacao = event => {
    this.setState({ ordenacao: event.target.value })
    if (event.target.value === 'crescente') {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => a.preco - b.preco)
      })
    }
    if (event.target.value === 'decrescente') {
      this.setState({
        produtos: this.state.produtos.sort((a, b) => b.preco - a.preco)
      })
    }
  }
  onClickExcluir = id => {
    const removeProdutos = this.state.carrinho.filter((item, index) => {
      return id !== index
    })
    this.setState({ carrinho: removeProdutos })
  }

  findProduto = (event) => {
    this.setState({ buscarProduto: event.target.value });
  };
  render() {
    return (
      <AppContainer>
        <Header>
<<<<<<< HEAD
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

=======
          <img src={Logo}/>
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

            <Produtos lista={this.state.produtos} butao={this.addCarrinho}> 
            </Produtos>
          </ContainerProdutos>
        </div>

>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32
        <Carrinho
          excluir={this.onClickExcluir}
          carrinho={this.state.carrinho}
        />

        <Footer>
<<<<<<< HEAD
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/179/179319.png" />
            <img src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494488.png?token=exp=1655518662~hmac=7707602d3d777b95550f82512b885d08" />
          </div>

          <TextoRodape>Larissa, Fabiano, Giovanna</TextoRodape>
=======
<div>
<img src="https://cdn-icons-png.flaticon.com/512/179/179319.png"/>
          <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png"/>
</div>
        
          <TextoRodape>Larissa Utermohl, Fabiano Lopes, Giovanna Magalhães</TextoRodape>
>>>>>>> 274cac0e560df40f4f95653cb74dac567e971e32
        </Footer>
      </AppContainer>
    )
  }
}
export default App
