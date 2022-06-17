import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
const DivLista = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, fr);
  justify-items: center;
`;
const Lista = styled.div`
  img {
    width: 100px;
    padding: 10px;
  }
  border: 1px solid black;
  width: 20vw;
  height: 28vh;
  text-align: center;
`;

class Produtos extends React.Component {
  render() {
    return (
      <DivLista>
        {this.props.lista.map((returnProduto, index) => {
          return (
            <Lista key={index}>
              {returnProduto.imagem}
              <br />
              {returnProduto.nome} <br />
              R${returnProduto.preco},00 <br />
              <button
                onClick={() => {
                  this.props.butao(returnProduto.id);
                }}
              >
                Adicinar Carrinho
              </button>
            </Lista>
          );
        })}
      </DivLista>
    );
  }
}
export default Produtos;
