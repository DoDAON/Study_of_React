import React from "react";
import Book from "./Book";

function Library(props) {
  // Book 컴포넌트를 return에 삽입. props 로 미리 정의한 이름과 페이지를 넣음
  return (
    <div>
      <Book name="파이썬 강좌" numOfPage={300} />
      <Book name="서버 강좌" numOfPage={400} />
      <Book name="스벨트 강의" numOfPage={500} />
    </div>
  )
}

export default Library;