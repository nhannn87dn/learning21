# Lấy giá trị trong Form

```js
function Form(){
  const = [inputs, setInputs] = React.useState({
    userName: '',
    Passwords: ''
  
  });
  
  const = handleChange = e => {
    if(e.target.type === 'checkbox'){
      setInputs((values)=> ({...values, [e.target.name]: e.target.checked}));
      // [e.target.name] ==> lấy giá trị làm key
    } 
    else {
      setInputs((values)=> ({...values, [e.target.name]: e.target.value}));
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
  
}

```
