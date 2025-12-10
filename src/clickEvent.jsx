
const fruit=(name)=>{
    alert(name);
}
function Zoom (){
function klickEvent() {
    alert("You clicked me!");
    }

    // const fruit=(name)=>{
    //     alert(name);
    // }



    return (
    <div>
      <button onClick={klickEvent}>Click Me!</button>

        <button onClick={()=>fruit('Mango')}>Mango</button>  
        {/* // you can also write like this only for parameter */}
        <button onClick={()=>fruit('Apple')}>Apple</button>
    </div>
    )







}
export default Zoom;