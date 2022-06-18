import React from 'react'
import styled from 'styled-components'
import carrinho from '../img/carrinho.png'
// import Produtos from "./Produtos";

const Container = styled.div`
  background-image: white;
  text-align: justify;
  width: 300px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 30px;
  }

  button {
    font-size: 8px;
    width: 2vw;
    height: 4vh;
    margin-top: 30px;
  }
`
const DivCarrinho = styled.div`
  display: flex;
  justify-content: baseline;
`
const ListaProdutos = styled.p`
  background-image: white;
`

const BotaoExcluir = styled.button`
  width: 100px;
  margin-left: 10px;
  display: inline-block;
  align-content: flex-end;
  align-items: center;
  flex-shrink: 1;
`

class Carrinho extends React.Component {
  render() {
    const addCarrinho = this.props.carrinho.map((item, index) => {
      return (
        <DivCarrinho>
          {item.imagem}
          <ListaProdutos>
            Nome: {item.nome} <br />
            Preço: R${item.preco},00
          </ListaProdutos>
          <BotaoExcluir onClick={() => this.props.excluir(index)}>
            X
          </BotaoExcluir>
        </DivCarrinho>
      )
    })
    return (
      <Container>
        <p>Carrinho</p>
        <img src={carrinho} />
        <ListaProdutos>{addCarrinho}</ListaProdutos>
      </Container>
    )
  }
}
export default Carrinho
