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
        <h3>Filtros</h3>
        Valor Mínimo:
        <input
          type="Number"
          value={this.props.numMin}
          onChange={this.props.onValorMinimo}
          placeholder="Valor Minimo"
        />
        Valor Máximo:
        <input
          type="Number"
          value={this.props.numMax}
          onChange={this.props.onValorMaximo}
          placeholder="Valor Máximo"
        />
        Buscar:
        <input
          type="text"
          value={this.props.buscar}
          onChange={this.props.onBuscarProduto}
          placeholder="Buscar"
        />
      </Container>
    );
  }
}
export default Filtros;
