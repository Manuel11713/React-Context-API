import React,{Component} from 'react';
import Equipo from './Equipo.jsx';

class Equipos extends Component{
    
    render(){ 
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-8">
                       <Equipo/>
                    </div> 
                </div> 
            </div>
        );
    }
}
export default Equipos;