import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Resultado extends Component{
    render(){
        const resultado = this.props.resultado;
        const mensaje = (!resultado) ? 'Elije marca, Año y Tipo de seguro' : 'El total es : $';
        return(
            <div className="gran-total">
            {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition
                        className="resultado"
                        key={resultado}  //elemento unico
                        timeout={{enter: 150, exit: 150}}> 
                        <span>{resultado}</span>
                    </CSSTransition>               
                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;