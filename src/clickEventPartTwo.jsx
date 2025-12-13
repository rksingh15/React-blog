

function ClickEvent1(){
  function handleClick() {
    alert("Button was clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default ClickEvent1;