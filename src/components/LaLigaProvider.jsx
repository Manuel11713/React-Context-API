import React,{Component} from 'react';

//Creamos el context
const LaLigaContext = React.createContext();
export {LaLigaContext};
class LaLigaProvider extends Component{
    state={
        equipos:[
          {
            nombre:'Real Madrid',
            titulos: 35
          },
          {
            nombre:'Barcelona',
            titulos: 25
          },
          {
            nombre:'Atletico de Madrid',
            titulos: 10
          }
        ]
      }
      eresCampeon=id=>{
        const equipos = [...this.state.equipos];
        equipos[id].titulos +=1;
        this.setState({equipos})
      }
    render(){
        return(
            <LaLigaContext.Provider value={{
                state:this.state.equipos,
                eresCampeon:this.eresCampeon
            }}>
                {this.props.children}
            </LaLigaContext.Provider>
        );  
    }
}

export default LaLigaProvider;