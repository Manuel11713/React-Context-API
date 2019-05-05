import React,{Component} from 'react';
import {LaLigaContext} from './LaLigaProvider';

class Equipo extends Component{
    render(){
        

        return(
            <LaLigaContext.Consumer>
                {value=>{
                    return(
                        Object.keys(value.state).map(idEquipo=>{
                            return(
                                <li className="list-group-item d-flex justify-content-between align-items-center" key={idEquipo}>
                                    <span>{value.state[idEquipo].nombre}</span> 
                                    <span className="badge badge-danger">{value.state[idEquipo].titulos}</span>
                                    <button className="btn btn-success" onClick={()=>{
                                        value.eresCampeon(idEquipo);
                                    }}>Eres Campeon</button>
                                </li>
                            )
                        })
                    )  
                }}
            </LaLigaContext.Consumer>
        )
            
    }
}

export default Equipo;