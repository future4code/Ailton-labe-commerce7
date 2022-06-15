import React from "react";
import styled from 'styled-components';
import Filtros from "./components/Filtro.js";
import Produtos from "./components/Produtos.js";
import Carrinho from "./components/Carrinho.js";


class App extends React.Component{
  state = {
    produtos: "produtos",
    ordenacao: "crescente",
    valorMaximo: Infinity,
    valorMinimo: 0,
    buscarProduto: "",
    };

    alteraInputOrdenacao = (event) => {
      this.setState({ ordenacao: event.target.value });
    };
  
    onChangeInputValorMinimo = (event) => {
      this.setState({ valorMinimo: Number(event.target.value) });
    };
  
    onChangeInputValorMaximo = (event) => {
      this.setState({ valorMaximo: Number(event.target.value) });
    };
  
    onChangeInputBusca = (event) => {
      this.setState({ buscarProduto: event.target.value });
    };

    render(){
      return(
      
        <div className="container">
          <header>header</header>
          {/* <section className= "main-container"> */}
        {/* <ContainerProdutos>
        <Produtos>

        </Produtos>

        </ContainerProdutos> */}

        {/* <ContainerCarrinho>
          <h3>Carrinho</h3>
          <div>Carrinhos</div>
          <p>Valor Totatl: </p>
        </ContainerCarrinho>
          
          </section>
          <footer>
            <p class="text"> 
            <b> No Copyright </b> </p>
          <TextoRodape>Larissa, Fabiano, Giovanna 
            </TextoRodape>
            </footer> */}
          </div>

         
      )
    }
  
  }
  
    

export default App;
