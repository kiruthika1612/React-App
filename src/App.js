
import React from 'react';
import './App.css';
import chef from "./images/chef.jpg";

let language = "Donavan's Kitchen";
let moon = "🍛";

function Header(props)
{
  return(
    <header>
      <h3>Chef. {props.name}'s Specials </h3>
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
    <>
    <main>
      <img src="https://github.com/kiruthika1612.png"
      height={200} alt="mypic from git hub profile"  /> 
    <ul>
      <li>Idly n Sambhar</li>
      <li>Briyani</li>
      <li>kothu Parota</li>
    </ul>
    </main>
    </>
  );
}

const receipes = [
  "Tasty meatball Pasta",
  "Veg Spagetti",
  "Quail Fry",
  "Muscles dry gravy"
];

const receipeObjects = receipes.map((dish,i)=>({
  id:i,
  title:dish
}));

console.log(receipeObjects);

function Receipe2({dishes})
{
  return(
    <React.Fragment>
    <main>
    <img src={chef} height={200} alt="Pic of a Chef"/>
    <ul>
{dishes.map((dish)=>(
  <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>
))}
    </ul>
    </main>
    </React.Fragment>
  );
}


function App() {
  return (
    <div>
      <h1>Welcome to {language.toUpperCase()} {moon} !!</h1>
      <Header name="Kiruthika" year = {1994} month={new Date().getMonth()}/>
      <Receipe1 />
      <Header2 name="Nishanth" year = {1993} month={new Date().getMonth()}/>
      <Receipe2 dishes={receipeObjects}/>
    </div>
    
    
  );
}

export default App;
