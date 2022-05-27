# Một số lưu ý quan trọng

## Chèn biến vào thuộc tính html
+ Đưa số vào Props componet 
```js
<Block age={18} />
```
+ đưa biến vào react html:
```js
code[<div style={{width: `${width}%`}}>20%</div>]
```
+ giá trị của thuộc tính là một biến:
```js
const x = 18;
<Block age={x} />
```
## Enhanced object literals trong ES6
**1. Định nghĩa key: value cho Object
```js
var name = 'React Js';
var price =  600;
/* Cách truyền thống */
var course = {
   name: name,
   price:price
}
/* ES6 */
var course = {
   name,
   price
}

console.log(course);


```
**2. Định nghĩa Method cho Object

**3. Định nghĩa key cho Object dưới dạng biến
