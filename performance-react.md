# Optimizing Performance

- `React Memo` nó **Cache cả một component** -> bỏ qua việc **rendering** khi component đó ko có biến nào thay đổi, và ko sử dụng State.
```js
function Button({handleCallback}){
  return (
    <>
    <button onClick={handleCallback}>Name</button>
    </>
  )

}
export default React.memo(Button)
```

- `useCallback` dùng cache **một function** có sử dụng State, nó chỉ phụ thuộc vào dependency.

```js
export default function App(){
  const [age, setAge] = React.useState(0)
  ...
  
  const increaseAge = React.useCallback(()=> {
    setAge(prev => prev+1);
  }, [age]); //depn
  
}

```
- `useMemo` dùng cache **Kết quả** của một function có độ tính toán cao, làm chậm component.
