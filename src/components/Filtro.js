import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
height: 80vh;
padding: 25px 10px;
gap: 15px;
`


const Titulo =styled.h3`
margin-bottom: 10px;
`


 class Filtro extends Component {
  
  render() {

    return (

      <div>

<Titulo>Filtros</Titulo>

<label>Valor Minimo:
  <input value={this.props.InputValorMinimo} onChange={this.props.onChangeInputValorMinimo}/>
</label>

<label>Valor Maximo:
<input value={this.props.InputValorMaximo} onChange={this.props.onChangeInputValorMaximo}/>

</label>

<label> 
  Buscar:
  <input></input>
</label>
      </div>
    )
  }
}

export default Filtro;