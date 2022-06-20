import React from "react";
import styled from "styled-components";
const Container = styled.div`
  input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
    border: 1px solid gray;
  }
  border: 0.5px solid purple;
  padding: 10px;
  gap: 15px;
  background-color: #ead1dc;
`;

class Filtros extends React.Component {
  render() {
    return (
      <Container>
        <h3>FILTROS</h3>
        Valor Mínimo:
        <input
          type="Number"
          value={this.props.valorMinimo}
          onChange={this.props.onChangeValorMinimo}
        />
        Valor Máximo:
        <input
          type="Number"
          value={this.props.valorMaximo}
          onChange={this.props.onChangeValorMaximo}
        />
        Buscar:
        <input
          type="text"
          value={this.props.buscarProduto}
          onChange={this.props.onChangeBusca}
        />
      </Container>
    );
  }
}
export default Filtros;
