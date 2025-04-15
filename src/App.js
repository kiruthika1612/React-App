
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

  function Receipe1(){
  return(
    <ul>
      <li>Idly n Sambhar</li>
      <li>Briyani</li>
      <li>kothu Parota</li>
    </ul>

  );
}

const receipes = [
  "Tasty meatball Pasta",
  "Veg Spagetti",
  "Quail Fry"
];

function Receipe2({dishes})
{
  return(
    <ul>
{dishes.map((dish)=>(
  <li style={{listStyleType: "none"}}>{dish}</li>
))}
    </ul>
  );
}


function App() {
  return (
    <div>
      <h1>Welcome to {language.toUpperCase()} {moon} !!</h1>
      <Header name="Kiruthika" year = {1994} month={new Date().getMonth()}/>
      <Receipe1 />
      <Header2 name="Nishanth" year = {1993} month={new Date().getMonth()}/>
      <Receipe2 dishes={receipes}/>
    </div>
    
    
  );
}

export default App;
