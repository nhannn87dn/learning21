# Học ReactJs
Một số vấn đề cần lưu ý xuyên suốt
1. Callback function:
- Một kỹ thuật truyền vào component CON một prop dạng function có tham số để function thực hiện nhiệm vụ truyền tham số đó ra cho component CHA khi component CON có một sự kiện nhằm thay đổi giá trị một State ở CHA.
```

export default App(){
  const [action, setAction] = React.useState('');
  
  /* hàm này lắng nghe các sự kiện click từ Button component */
  const handleControls = (action)=> {
    switch(action) {
      case 'save':
           console.log('saved');
        break;
      case 'delete':
          console.log('deleted');
        break;
       default:
        break;
    };
       
  .....
  return (
      <Button onClick={handleControls} />
  )
}

function Controls({isPlay,isRepeat, isShuffer, handleControls}) {
    /* handleControls đóng vai trò là Callback trả lại giá trị cho component CHA */
    const handleClick = (actionName)=> {
        if(handleControls && typeof handleControls === 'function'){
          handleControls(actionName);
        }
    };
  return (
    <>
      <button onClick={() => handleClick('save')}>Save</button>
      <button onClick={() => handleClick('delete')}>Delete</button>
    </>
    )
 }


```
