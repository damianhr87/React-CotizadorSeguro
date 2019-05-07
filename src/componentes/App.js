import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, calcularMarca,obtenerPlan} from '../Helper';
import Resumen from './Resumen'

class App extends Component {
  //crear state
  state = {
    resultado : '',
    datos: {}
  }
  
  cotizarSeguro = (datos) =>{
    const {marca, plan, year} = datos;
  
    //agregar una base de 2000
    let resultado = 2000;

    //obtener la direncia de años 
    const diferencia = obtenerDiferenciaAnio(year);
   
    // por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado) / 100;

  
    // Americano 15% Asiatico 5% y Europeo 30% de incremento valor actual
    resultado = calcularMarca(marca) * resultado ;
    
    //El plan del auto , el basico incrementa el valor 20% y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    //dependiendo del plan incrementar
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    
    //crear objeto para el resumen

    const datosAuto = {
      marca: marca,
      plan: plan ,
      year: year
    }

    //ya tenemos el costo - setstate para ver datos.
    this.setState({
      resultado : resultado,
      datos : datosAuto
    })

  }

  render(){
    return(
      <div className="top">
        <Header 
          titulo = 'Cotizador de Seguro de Auto'
        />
        <div className="contenedor-formulario">
          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
          datos={this.state.datos}
          resultado={this.state.resultado}

          />
        </div>

      </div>
    )
  }

}

export default App;
