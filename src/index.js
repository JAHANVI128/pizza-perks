import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.css";

const pizzaData = [{
  name: "Focaccia",
  ingredients: "Bread with italian olive oil",
  price: 6,
  photoName: "imgs/focaccia.jpg",
  soldOut: false
}, {
  name: 'Margherita',
  ingredients: 'Cheese and mozzarella cheese',
  price: 5,
  photoName: "imgs/margherita.jpg",
  soldOut: true
}, {
  name: "Pizza Spinaci",
  ingredients: "Spinach, Italian sausage, mushrooms, onions, bacon, pepperoni, pineapple",
  price: 10,
  photoName: "imgs/spinaci.jpg",
  soldOut: false
}, {
  name: "Pizza Funghi",
  ingredients: "Funghi, Italian sausage, mushrooms, onions, bacon",
  price: 8,
  photoName: "imgs/funghi.jpg",
  soldOut: false
}, {
  name: "Pizza Salamino",
  ingredients: "Sliced salmon, Italian sausage, onions, bacon",
  price: 9,
  photoName: "imgs/salamino.jpg",
  soldOut: true
}, {
  name: "Pizza Prosciutto",
  ingredients: "Prosciutto, Italian sausage, onions, bacon, pepperoni",
  price: 12,
  photoName: "imgs/prosciutto.jpg",
  soldOut: true
}]

function App(){
  return(
    <div className='container'>
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header() {

  // const style = {
  //   color : "tomato",
  //   fontSize: "50px",
  //   textAlign:"center",
  //   textTransform:"uppercase"
  // }

  const style = {};

  return (
    <header className='header'>
       <h1 style={style
        // {
        //   color : "tomato",
        //   fontSize: "50px",
        //   textAlign:"center",
        //   textTransform:"uppercase"
        // }
      }>PIZZA PERKS CO.</h1> 
    </header>
  );
}

function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <Pizza name="Focaccia" ingredients="Bread with italian olive oil" photoName="imgs/focaccia.jpg" price="6"/>
      <Pizza name="Margherita" ingredients="Cheese and mozzarella cheese" photoName="imgs/margherita.jpg" price="5"/>
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className='pizza'>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
      </div>

      {/* <img src="imgs/margherita.jpg" alt='margherita' />
      <h3>Margherita</h3>
      <p>Cheese and mozzarella cheese</p>

      <img src="imgs/spinaci.jpg" alt='spinaci' />
      <h3>Spinaci</h3>
      <p>Spinach, Italian sausage, mushrooms, onions, bacon, pepperoni, pineapple</p>

      <img src="imgs/funghi.jpg" alt='funghi' />
      <h3>Funghi</h3>
      <p>Funghi, Italian sausage, mushrooms, onions, bacon</p>

      <img src="imgs/salamino.jpg" alt='salamino' />
      <h3>Salamino</h3>
      <p>Sliced salmon, Italian sausage, onions, bacon</p>

      <img src="imgs/prosciutto.jpg" alt='prosciutto' />
      <h3>Pizza Prosciutto</h3>
      <p>Prosciutto, Italian sausage, onions, bacon, pepperoni</p> */}
    </div>
  );
}

function Footer() {

  const hour = new Date().getHours();
  // console.log(hour);

  let openhr = 11;
  let closehr = 22;
  let isOpen = hour >= openhr && hour <= closehr;

  console.log(isOpen);
  // if(hour >= openhr && hour <= closehr){
  //   alert("We are currently open !!!");
  // }else{
  //   alert("We are currently closed for the day !!!");
  // }
  return (
    <footer className='footer'> 
      {
        new Date().toLocaleTimeString()
      } We are currently open!!
    </footer>
  );

  // return React.createElement('footer',null,"We are currently open!!")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Header />
    <Menu />
    <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
