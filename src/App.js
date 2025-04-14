
import './App.css';

let language = "Donavan's Kitchen";
let moon = "🍛";

function Header(props)
{
  return(
    <header>
      <h3>{props.name}'s Specials </h3>
      <p>Since {props.year} {props.month}</p>
      
    </header>
  );
}
//another way of doing  Header withput props which is more specific
function Header2({name, month, year})
{
  return(
    <header>
      <h3>Chef. {name}'s Specials </h3>
      <p>Since {year} {month}</p>
      
    </header>
  );
}


function App() {
  return (
    <div>
      <Header name="Kiruthika" year = {1994} month={new Date().getMonth()}/>
      <Header2 name="Nishanth" year = {1993} month={new Date().getMonth()}/>
      <h1>Welcome to {language.toUpperCase()} {moon} !!</h1>
    </div>
    
    
  );
}

export default App;
