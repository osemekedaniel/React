/*import React from 'react';
import logo from './logo.svg';
import './App.css';


export class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <div class="text">
        <h1><strong>Hello World {this.props.name}</strong></h1>
        <img src={logo} width="10%" height="50%"></img>
        </div>
      </div>
    );
  }
}
*/
import React from 'react';
import HelloWorld from './components/helloworld';
import HelloWorld2 from './components/helloworld2'
import HelloWorld3 from './components/helloworld3';
const App = () => {
 return (
 <div>
 <HelloWorld />
 <HelloWorld2 name="Pius"/>
 <HelloWorld2 />
 <HelloWorld3 name="Joy"/>
 </div>
 );
}
export default App;


