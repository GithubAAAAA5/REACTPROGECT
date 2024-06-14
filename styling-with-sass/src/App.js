import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Box from './cssmodule/Box';
import CheckBox from './cssmodule/components/CheckBox';
import { useState } from 'react';

function App() {

  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <div className="App">
      {/* <div className='button'>
        <Button size="large" onClick={() => alert('?저를클릭하셨는데요?')}>Button</Button>
        <Button>Button</Button>
        <Button size={"small"}>Button</Button>
      </div>

      <div className='button'>
        <Button size="large" color="gray">Button</Button>
        <Button color="gray">Button</Button>
        <Button size={"small"} color={"gray"}>Button</Button>
      </div>

      <div className='button'>
        <Button size="large" color="pink">Button</Button>
        <Button color="pink">Button</Button>
        <Button size={"small"} color={"pink"}>Button</Button>
      </div>

      <div className='button'>
        <Button size="large" color="blue" outline>Button</Button>
        <Button color="gray" outline>Button</Button>
        <Button size={"small"} color={"pink"} outline>Button</Button>
      </div>

      <div className='button'>
        <Button size="large" color="blue" fullWidth>Button</Button>
        <Button size="medium" color="gray" fullWidth>Button</Button>
        <Button size="small" color="pink" fullWidth>Button</Button>
      </div> */}

      {/* CSS Module 테스트 */}
      {/* <Box /> */}
      {/* <Box className="test"/> */}
      <CheckBox onChange={onChange} checked={check} onClick={() => alert('낙장불입')}>
        다음 약관에 모두 동의
      </CheckBox>
      <p>
        <b>check : </b>
        { check? 'true':'false'}
      </p>
    </div>
  );
}

export default App;
