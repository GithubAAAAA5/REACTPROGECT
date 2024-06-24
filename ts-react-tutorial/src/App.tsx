import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Greetings2 from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/Myform';
import CounterReducer from './components/CounterReducer';
import ReducerSample from './components/ReducerSample';
import { SampleProvider } from './SampleContext';
import ReducerSample2 from './components/ReucerSample2';


function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }

  const onSubmit = (form: {name: string, description:string}) => {
    console.log(form);
  };

  return (
    <div className="App">
      {/* <Greetings name="tim"  onClick={onClick}/>
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit} />
      <hr />
      <CounterReducer />
      <hr />
      <ReducerSample /> */}
      <SampleProvider>
        <ReducerSample2 />
      </SampleProvider>
    </div>
  );
}

export default App;
