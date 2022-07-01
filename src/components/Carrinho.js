import React from 'react'
import styled from 'styled-components'
import carrinho from '../img/carrinho.png'
// import Produtos from "./Produtos";

const Container = styled.div`
  background-color: #ead1dc;
  text-align: justify;
  width: 300px;
  border: 0.5px solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 20px;
    display: flex;
    align-items: baseline;
    flex-direction: row;
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
  border: 1px dashed purple;
  height: fit-content;
  font-size: small;
`
const ListaProdutos = styled.p`
  background-image: white;
  
`

const BotaoExcluir = styled.button`
  width: 130px;
  margin-left: 5px;
  display: inline-block;
  align-content: flex-end;
  align-items: space-between;
  flex-shrink: 5;
  border: 0.5px solid purple;
  text-align: center;
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
        <h3>CARRINHO</h3><img src={carrinho}/>
        <ListaProdutos>
          {addCarrinho}
        </ListaProdutos>
      </Container>
    )
  }
}
export default Carrinho
