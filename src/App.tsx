/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from 'react';
import HelloWorld from './components/helloworld';
import HelloWorld2 from './components/helloworld2';
import HelloWorld3 from './components/helloworld3';
const App: React.FC = () => {
 return (
 <div>
 <HelloWorld />
 <HelloWorld2 name="Pius" />
 <HelloWorld2 />
 <HelloWorld3 name="Joy"/>
 </div>
 );
}
export default App;
