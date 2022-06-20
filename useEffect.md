# useEffect
- Hook cho phép bạn thực hiện các hiệu ứng phụ trong các Components của bạn.
- Dùng khi nào: fetching data, directly updating the DOM, and timers

** Có 3 cách dùng **
1. Không có dependency:
```js
useEffect(() => {
  //Runs on every render
});
```

2. Dependency là một mảng rổng:
```js
useEffect(() => {
  //Runs only on the first render
}, []); // <- add empty brackets here
```
3. Dependency là một Props hoặc State:
```js
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```
-------------------------------
=> Lưu ý: Luôn đúng cho cả 3 cách dùng trên
- Callback luôn được gọi sau khi component đã mounted
- Cleanup luôn được gọi trước khi component unmounted
