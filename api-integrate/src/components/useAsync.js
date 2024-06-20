// useReducer와 useEffect를 React에서 가져옵니다.
import { useReducer, useEffect } from 'react';

// reducer 함수는 상태와 액션을 받아 상태를 업데이트합니다.
function reducer(state, action) {
  switch (action.type) {
    // 'LOADING' 액션 타입일 때의 상태를 정의합니다.
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    // 'SUCCESS' 액션 타입일 때의 상태를 정의합니다.
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    // 'ERROR' 액션 타입일 때의 상태를 정의합니다.
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    // 정의되지 않은 액션 타입일 때의 예외 처리입니다.
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// useAsync 커스텀 훅을 정의합니다.
function useAsync(callback, deps = [], skip = false) {
  // useReducer를 사용하여 상태와 디스패치 함수를 초기화합니다.
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  // 데이터를 비동기적으로 가져오는 fetchData 함수를 정의합니다.
  const fetchData = async () => {
    // 로딩 상태로 디스패치합니다.
    dispatch({ type: 'LOADING' });
    try {
      // 콜백 함수를 호출하여 데이터를 가져옵니다.
      const data = await callback();
      // 성공 상태로 디스패치합니다.
      dispatch({ type: 'SUCCESS', data });
    } catch (error) {
      // 에러 상태로 디스패치합니다.
      dispatch({ type: 'ERROR', error });
    }
  };

  // useEffect를 사용하여 컴포넌트가 마운트될 때 또는 의존성이 변경될 때 fetchData 함수를 호출합니다.
  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line
  }, deps);

  // 현재 상태와 fetchData 함수를 반환합니다.
  return [state, fetchData];
}

// useAsync 훅을 기본으로 내보냅니다.
export default useAsync;