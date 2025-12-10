
function Loko(){

  function greet(){
    alert("Hello, Welcome to ReactJS")
  }
  return (
    <div>
      <h1> Welcome to ReactJS </h1>
      <img src="src\assets\react.svg" alt="Random Image"/>
      <h1>This is JSX DATA</h1>
      <h1> The sum of 2+2 is {2+2} </h1>
      <button onClick={greet}> Click Me </button>
    </div>
  )
}

export default Loko;
