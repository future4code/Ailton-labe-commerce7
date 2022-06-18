import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
const DivLista = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  justify-content: center;

  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, fr); */
  justify-items: center;
`;
const Lista = styled.div`
  img {
    width: 100px;
    padding: 10px;
  }
  button{
    margin: 4px;
   height: 30px;
  }
  border: 1px solid black;
  width: 230px;
  height: 220px;
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
