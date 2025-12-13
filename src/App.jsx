// import Header from "./Header";
// import Login,{Profile,Setting,UserKey} from "./UserComponent";
// import Task from "./Task";
// import Zoom from "./clickEvent";
// import ClickEvent1 from "./clickEventPartTwo";
// import ChangeText from './StateIn';
import PropsLearn from "./PropsLearn";
// import Toggle1 from "./ToggleButton";

function App() {
  // const data = "Ritik Made this ";
  let hello = {
    name: "Ritik",
    age: 21,
    email: "ritik@gmail.com",
  };

  return (
    <div>
      <h1>My Task List </h1>
      <PropsLearn user={hello} />
    </div>
  );
}
// function App() {
//   // const data = "Ritik Made this ";
//   return (
//     <div>
//       <h1>My Task List</h1>
//       <ClickEvent1/>
//     </div>
//   );
// }

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
