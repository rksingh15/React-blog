import Header from "./Header";
import Login,{Profile,Setting,UserKey} from "./UserComponent";  

function App(){

  const data = "Ritik Made this ";
  return (
    <div>
      <h1>This is JSX DATA {data}</h1>
      <h1> The sum of 2+2 is {2+2} </h1>
    </div>
  )
}







/*
function App(){

  //alert("The sum of 2+2 is " + sum());
  return (
    <div>
    <Header/>
    <Login/>
    <Profile/>
    <Setting/>
    <h1>{UserKey}</h1>
    <h1>Apple Component</h1>

    <Fool/>
    </div>
  )
  
}

function Fool(){

  return (
    <h1> My new Fool Component </h1>
  )
}


function sum(){
  return 2+2;
}

  */
// i m making new file header.jsx and moving header component there can see below
export default App; 