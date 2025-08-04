# JSX

리액트는 기본 JS에서 작업하는 것이 아니라 xml 기반 특수 확장자 JSX에서 작업한다. 기본적으로 JSX는 다음과 같이 생겼다.

```jsx
const element = <h1>hello world!</h1>;
```

일반적인 js 문법과 유사하지만 대입값으로 html 문법을 넣을 수 있다. 결국 element 라는 변수에는 html 엘리먼트가 저장되어 있는 형태이다.

# JSX를 사용하는 이유

**생산성**

작성하기 편하고, 그렇기에 생산성이 올라간다는 점에서 JSX를 사용한다. 굳이 JSX를 사용하지 않고 개발해도 문제는 없다만 보통은 JSX를 사용하는 것이 표준으로 권장된다고 한다.

리엑트는 엘리먼트를 생성하는 createElement() 라는 함수로 모든 엘리먼트를 관리한다. 기본 js 문법으로 리엑트 엘리먼트를 생성한다면 다음과 같은 코드일 것이다.

```js
class Hello extends React.Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(Hello, { toWhat: 'World' }, null));
```

컴포넌트가 렌더링될 때 엘리먼트를 내뱉는 걸 메인 돔에 생성시키는 거 같은데 이를 JSX 문법으로 변환하면

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello toWhat="World" />);
```

대충 비교해봐도 깔끔하다는 것이 느껴진다. 엘리먼트 생성할 때 함수 파라미터로 3가지를 넣는 걸 볼 수 있는데, 보면 null 값도 있다. 구체적으로 엘리먼트 생성 함수는 다음의 파라미터를 가지는데
```jsx
React.createElement(
  type, // 예약어, 또는 컴포넌트명
  [props], // 엘리먼트 파라미터라고 생각하면 편하다
  [...children] // 하위 엘리먼트
)
```

즉 당장에 쓰지 않아도 어쨌든 파라미터 값을 다 넣어야해서 적는데 솔직히 없는 건 과감히 빼고 적고 싶은 것만 적는 것이 효율적이다. 이런 점에서 JSX는 편하다.


# JSX 사용법
기본적으로 모든 js 문법을 지원하며 여기서 XML/HTML을 섞어서 사용하면 된다.
```jsx
const name = '김말똥';
const myClass = "hello class";
const element = (
  <h1 className={myClass}>
    <span>Hello {name}</span>
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
```
코드상에서 알 수 있는 걸 보자면

1. 하위 엘리먼트는 기존 XML/HTML 방식으로 동일하게 하되 괄호로 감싼다
2. 내부 중괄호는 최종 번역 때 JS 문법을 그대로 실행하게 해준다. 변수명을 적는다면 그 변수가 그대로 들어간다.
3. 당연하게도 중괄호 안에 JS 함수를 집어넣어도 정상 작동한다.

기본적인 JS를 따라가되 위와 같이 엘리먼트를 좀 더 가독성있게 효율적으로 개발할 수 있도록 한다.

# 실습
책 컴포넌트와 도서관 컴포넌트를 만들어서 간단한 JSX 실습을 한다.

## Book.jsx
```jsx
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
```

## Library.jsx
```jsx
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
```

전체 완료 후 main.jsx에 Library 컴포넌트를 넣어 최종 출력