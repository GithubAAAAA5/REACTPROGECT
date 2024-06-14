import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <div className='button'>
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size={"small"}>Button</Button>
      </div>
    </div>
  );
}

export default App;
