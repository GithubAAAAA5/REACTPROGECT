import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Posts() {
  // 상태 변수 선언: 여러 게시물을 저장할 배열
  let [posts, setPosts] = useState([]);

  // useEffect를 사용하여 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    // 비동기 함수 정의
    let fetchPosts = async () => {
      try {
        // axios를 사용하여 데이터 요청: 첫 20개의 게시물 가져오기
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
        
        // 응답 데이터를 상태에 저장
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // 데이터 가져오기 호출
    fetchPosts();
  }, []); // 빈 배열을 전달하여 마운트 시 한 번만 실행되도록 설정

  return (
    <div>
      <h3>컴포넌트 렌더링 시 20개의 게시물 가져오기</h3>
      {/* 데이터가 존재하는 경우에만 출력 */}
      {posts.length > 0 ? (
        <ul>
          {/* 각 게시물을 반복하여 출력 */}
          {posts.map(post => (
            <li key={post.id}>
              {/* [게시글 번호] [제목] [userId] 형식으로 데이터 출력 */}
              [{post.id}] {post.title} [{post.userId}]
            </li>
          ))}
        </ul>
      ) : (
        <p>데이터를 로드 중...</p> // 데이터가 없을 경우 로딩 메시지
      )}

      {/* 개발자 도구의 콘솔에 데이터 객체 출력 */}
      {posts.length > 0 && (
        <button onClick={() => console.log(posts)}>콘솔에 출력</button>
      )}
    </div>
  );
}

export default Posts;