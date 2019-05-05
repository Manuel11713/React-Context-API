import React,{Component} from 'react';
import Equipos from './Equipos.jsx';
import LaLigaProvider from './LaLigaProvider';
class App extends Component{
 
  render(){
    return (
      <div className="App">
        <LaLigaProvider>
          <Equipos/>
        </LaLigaProvider>
      </div>
    );
  }
}

export default App;
