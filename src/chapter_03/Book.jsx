import React from 'react';

// Book 컴포넌트 생성
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name} 입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage} 페이지 입니다.`}</h2>
    </div>
  )
}

// 기본 수출
export default Book;