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
1. **Định nghĩa key: value cho Object**
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
2. **Định nghĩa Method cho Object**

```js
/* ES6 */
var course = {
   name,
   price,
   getName(){
    return name;
}
```

3. **Định nghĩa key cho Object dưới dạng biến**

```js
var filedName = 'name';
var filedPrice =  'price;

/* ES6 */
var course = {
   [filedName]: 'React Js'
   [filedPrice]: 600
}
console.log(course);
/* output Object: {name: 'React Js', price:600} */
```

## Spread trong ES6

**1. Dùng gộp mảng, object**

Như đã biết Rest parameter với dấu ... ở đầu là một khai báo params vô hạn

```js
funtion logger(...params){
 console.log(params);
}
logger([1,2,3,4,5,6,7]) // Tham số truyền vào vô hạn
```
**2. Dùng gộp mảng, object**


