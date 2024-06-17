import { useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import Counter from './Hooks/Counter';
import CreateUser from './Hooks/CreateUser';
import UserList from './Hooks/UserList';
import useInputs from './Hooks/useInputs';
/* 모듈 디자인 로드 */
import styled from './css/App.module/css'

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');  // css 모듈 디자인 
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs : CreateUser에서 inputs 작업시 사용부분
  // inputs: {        // custom hook 작업을 제외.
  //   username: '',
  //   email: ''
  // },

  users: [
    {
      id: 1,
      username: 'HONG',
      email: 'HONG@naver.com',
      active: true
    },
    {
      id: 2,
      username: 'KIM',
      email: 'KIM@naver.com',
      active: false
    },
    {
      id: 3,
      username: 'PARK',
      email: 'PARK@naver.com',
      active: false
    }
  ]
}

  // reducer 함수
  function reducer(state, action) {
    // action 에 따른 state 값 변화 로직 구현
    switch(action.type) {
      // case 'CHANGE_INPUT':     // custom hook 사용시 제외. 왜? useInputs 훅에서 구현되어있기 때문
      //   return {
      //     ...state,
      //     inputs: {
      //       ...state.inputs,
      //       [action.name]: action.value
      //     }
      //   };

      case 'CREATE_USER':
        return {
          inputs: initialState.inputs,      // 초기화
          users: state.users.concat(action.user)
        };

      case 'TOGGLE_USER':
        return {
          ...state,
          users: state.users.map(user =>
            user.id === action.id ? 
            { ...user, active: !user.active} :user
          )
        };
        
      case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        };  


      default:
        return state;
    }
  }

  // UserDispatch 라는 이름으로 Context 를 내보낸다.

  function App() {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;

    // custom hooks 구현으로 다음을 바꿔서 사용.
    // const {username, email} = state.inputs;
    const [{username, email}, onChange, reset] = useInputs({
      username: '',
      email: ''
    });


    const nextId = useRef(4);

    // onChange 는 userinput 에 구현되어있어 주석처리한다.
    // const onChange = useCallback(e => {
    //   const {name, value} = e.target;
    //   dispatch({
    //     type: 'CHANGE_INPUT',
    //     name,
    //     value
    //   })
    // }, []);

    const onCreate = useCallback(() => {
      dispatch({
        type: 'CREATE_USER',
        user: {
          id: nextId.current,
          username,
          email,
        }
      });
      reset();
      nextId.current += 1;
    }, [username, email, reset]);

    // 이 코드는 onToggle이라는 함수를 생성합니다. 
    // 이 함수는 특정 id 값을 받아서 dispatch 함수를 호출하여 
    // type이 'TOGGLE_USER'인 액션을 디스패치(dispatch)합니다.
    const onToggle = useCallback(id => {
      dispatch({
        type: 'TOGGLE_USER',
        id
      });
    }, []);
    // 의존성 배열: useCallback은 두 번째 인수로 의존성 배열을 받습니다. 
    // 이 배열은 함수가 다시 생성될지 여부를 결정하는데, 
    // 배열에 포함된 값들이 변경될 때만 함수가 새로 생성됩니다.
    // 빈 배열 []: 빈 배열이 전달되면, onToggle 함수는 컴포넌트가 마운트될 때 한 번만 생성되고, 
    // 이후에는 절대 변경되지 않습니다. 이는 onToggle 함수가 메모이제이션되어서, 
    // 컴포넌트가 다시 렌더링되더라도 항상 동일한 함수 참조를 사용한다는 의미입니다.

    const onRemove = useCallback(id => {
      dispatch({
        type: 'REMOVE_USER',
        id
      });
    }, []);

    const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <section className={styled.app_wrap}>
        <p class="title">CSS 모듈 디자인!</p>
      </section>
      <br />
      <hr />
      {/* <Counter /> */}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count} </div>
    </> 
  );
}

export default App;
