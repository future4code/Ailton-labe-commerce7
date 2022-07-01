import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";

const DivLista = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  justify-content: center;
  border: 1px solid #a64d79;

  /* grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, fr); */
  justify-items: center;
`;
const Lista = styled.div`
  img {
    width: 100px;
    padding-top: 8px;
    margin-bottom: 2px;
  }
  button {
    margin: 2px;
    margin-top: 3px;
    height: 25px;
    border: 1px solid purple;
    width: 150px;
    font: bold 10px verdana, sans-serif;
    text-align: center;
  }
  border: 1px dashed purple;
  width: 230px;
  height: 220px;
  text-align: center;
  font-size: 14px;
`;

class Produtos extends React.Component {
  render() {
    return (
      <DivLista>
        {this.props.lista
          .filter((returnProduto) => {
            return returnProduto.nome
              .toLowerCase()
              .includes(this.props.buscaNome.toLowerCase());
          })

          .filter((returnProduto) => {
            return (
              this.props.buscaMax === "" ||
              returnProduto.preco <= this.props.buscaMax
            );
          })

          .filter((returnProduto) => {
            return (
              this.props.buscaMin === "" ||
              returnProduto.preco >= this.props.buscaMin
            );
          })

          .map((returnProduto, index) => {
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
