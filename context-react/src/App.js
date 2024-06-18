import A from './A';
import B from './B';
import ColorComponent from './ColorComponent';
import ColorContext from './ContextAPI';
import { UserProvider } from './ContextAPI2';

function App() {
  return (
  
  <UserProvider>
    <A />
    <B />
  </UserProvider>     

);
}

export default App;