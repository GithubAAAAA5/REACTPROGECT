// import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types'; // prop 타입 검증을 모듈.
import StateComponent from './useState/StateTest';
import Counter from './useState/Counter';
import MyComponent2 from './useState/MyComponent2';
import EventComponent from './Event.js/EventComponent';
import InputSample from './Event.js/InputSample';
import EventComponent2 from './Event.js/EventComponent2';
import UserList from './Array/UserList';

function App() {

  const name = 'React';

  const style = {
    backgroundColor: 'red', // 카멜 표기법
    color: 'white',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
    {/* 2nd Day :useState 테스트 */}
    {/* <StateComponent />
    <MyComponent2 name = {'홍길동'} age = {20} />*/}
    
    <Counter /> 

    {/* 2nd Day : event*/}
    {/* <EventComponent />
    <EventComponent2 />
    <InputSample /> */}
  
    {/* 2nd Day : 컴포넌트 배열 */}
    <UserList />

    {/* 1st Day */}
    {/* <Wrapper>
    <MyComponent name={"홍길동"} age={20} email={"Hong@naver.com"} isSpecial={true}/>
    <div className='test-box'>
      <WelcomeFunction name="Sara" />
      <WelcomeClass name="Cahal" />
      <WelcomeFunction name="Edite" />
      <WelcomeFunction name={name} />
      <br /> <br></br> 태그는 닫아야한다.
    </div>
    <div style={style}>Hello World!!</div>   하나의 태그로 묶여야 한다. 
    </Wrapper> */}
    </>
  );
}

// 함수형 컴포넌트
function WelcomeFunction(props) {
  // console.log(props);
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형 컴포넌트
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 화살표 함수를 이용한 컴포넌트
const MyComponent = ({name, age, addr=' 서울시 신촌2',
                       email, isSpecial}) => {
  return (
    <>
      { isSpecial && // 3항 연산식
      <div>
        나의 첫번째 MyComponent 입니다.<br />
        프로퍼티 1 : {name}<br />
        프로퍼티 2 : {age}<br />
        기본값 프로퍼티 3 : {addr}<br />
        </div>
      }
    </>
  );
}

// props 기본값 설정하기.. 중요* 대소문자를 구분함
//  컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용할 값을 설정하는 경우에 사용함
//  syntax : 컴포넌트.defaultProps = {}
// MyComponent.defaultProps = {    // .defaultProps 를 통해 값설정
//   addr : '서울시 신촌',
//   age : 0
// }

// props 타입 검증 ( 주의 사항 - 대소문자를 정확하게 구분한다 )
// npm install prop-types
// 컴포넌트명.propTypes = {}
// PropType 이 기대하는 값을 가지는지 여부를 확인한다.
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string.isRequired    
  // 필수 값( 상위 컴포넌트에서 변경)
}
export default App;
