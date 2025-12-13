// function PropsLearn(props) {
//   return (
//     <div>
//       <h2>This is a Props Component</h2>
//       <p>The data passed is: {props.data}</p>
//     </div>
//   );
// }
//-------------------------------------------

function PropsLearn({user}) {
  return (
    <div>
      <h2>This is a Props Component</h2>
      <p>
        The user data passed is: {user.name}, {user.age}, {user.email}
      </p>
    </div>
  );
}

export default PropsLearn;
