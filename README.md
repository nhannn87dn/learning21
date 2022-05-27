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
Nhưng với trường hợp này nó dùng để gộp

```js
// Với Object
var obj1 = {
   name: 'Node Js'
};
var obj2 = {
  price: 1000
};

var obj2 = {...obj1,..obj2};

// Kết quả cho ra: {name: 'Node Js', price: 1000

// Với Mảng

var arr1 = ['bmw','ford','huydai'];
var arr2 = ['toyota','suzuki','charolet'];

var arr3 = [..arr1, ..arr2];
// Kết quả cho ra: ['bmw','ford','huydai','toyota','suzuki','charolet'];
```


**2. Dùng hack (ghi đè giá trị) mảng, object**

```js
var configSetting = {
   endpoint: 'http://domain.com/send-order',
   apiVersion: 'v1',
   'others': 'desc'
};

// TH bạn cần tạo một object khác có cùng thuộc tính trên nhưng muốn `endpoint` có giá trị khác

var configEnd = {
   ...configSetting,
   endpoint: 'http://domain.com/query-order'
 };

// ==> endpoint sẽ được cập nhật giá trị mới bạn có thể check với console.log(configEnd);

```

