# Optimizing Performance

## React Memo
- nó **Cache cả một class component và function component** -> bỏ qua việc **rendering** khi component đó ko có biến nào thay đổi, và ko sử dụng State.
- **Khi nào dùng**: Khi mà component này độc lập hoàn toàn với component chứa nó (CHA), tức là khi CHA cần re-render nhưng CON ko cần thiết phải re-render thì dùng. Tùy từng ngữ cảnh cụ thể.
```js
function SayHello({name}){
  return (
    <>
    <h1>Hello {name}</H1>
    </>
  )

}
export default React.memo(SayHello)

function App(){
  const [count, setCount] = React.useState(0)
  const handleClick = () => {
    setCount(prev=>prev+1);
  }
  return (
    <>
    <p>{count}</p>
    <button onClick={handleClick}>Increament</button>
    {* SayHello ko liên quan đến việc render lại giá trị count của App *}
    <SayHello name='Tony' />
    </>
  )

}
export default App
```
## useCallback
- `useCallback` dùng cache **một function** có sử dụng State, nó chỉ phụ thuộc vào dependency.
- Dùng khi nào: khi component CON cần truyền một sự kiện callback ra cho CHA

```js

// CHA 
export default function App(){
  const [age, setAge] = React.useState(0)
  ...
  // useCallback để cache lại tham chiếu
  const handleIncreaseAge = React.useCallback(()=> {
    setAge(prev => prev+1);
  }, []); //depn
  
   return (
    <>
    <p>{age}</p>
     <SayHello name='Tony' onIncease={handleIncreaseAge} />
    </>
  )
  
}
// CON sẽ gọi ra CHA để tăng Age lên.
function SayHello({name,onIncease}){
  return (
    <>
    <h1>Hello {name}</h1>
    <button onClick={onIncease}>Increament</button>
    </>
  )

}
// CON dùng thêm Memo nữa mới cache đc
export default React.memo(SayHello)

```
- `useMemo` sinh ra với mục địch tránh việc rerender nhiều lần thì useMemo tránh cho việc tính toán lại một function lặp đi lặp lại nhiều lần mỗi lần component re-render. Bản chất useMemo là caching lại giá trị return của function, mỗi lần component rerender nó sẽ kiểm tra giá trị tham số truyền vào function nếu giá trị đó không thay đổi, thì return value đã caching trong memory. Ngược lại nếu giá trị tham số truyền vào thay đổi, nó sẽ thực hiện tính toán lại vào trả về value, sao đó caching lại value cho những lần rerender tiếp theo.

```js
import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";

function App() {

  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  
  const words = ["hey", "this", "is", "cool"];
  const word = words[wordIndex];

  const computeLetterCount = word => {
    let i = 0;
    while (i < 1000000000) i++;
    return word.length;
  };

const letterCount = useMemo(() => computeLetterCount(word), [word]);

  return (
    <div style={{ padding: "15px" }}>
      <h2>Compute number of letters</h2>

      <p>
        "{word}" has {letterCount} letters
      </p>

      <button
        onClick={() => {
          const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
          setWordIndex(next);
        }}
      >
        Next word
      </button>
      <br />
      <br />
      <h2>Increment a counter (fast ⚡️)</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


```


