
import './App.css';

let language = "ReactLanguage";
let moon = "🌙";

function Header(props)
{
  return(
    <header>
      <h3>{props.name}'s React App </h3>
      <p>Since {props.year}</p>
      
    </header>
  );
}


function App() {
  return (
    <div>
      <Header name="Kiruthika" year = {1994}/>
      <h1>Hello {language.toUpperCase()} {moon} !!</h1>
    </div>
    
    
  );
}

export default App;
