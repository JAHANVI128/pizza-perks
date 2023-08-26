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
  photoName: "imgs/Focaccia.jpg",
  soldOut: false
}, {
  name: 'Margherita',
  ingredients: 'Cheese and mozzarella cheese',
  price: 5,
  photoName: "imgs/pizza-margarita.jpg",
  soldOut: true
}, {
  name: "Pizza Spinaci",
  ingredients: "Spinach, Italian sausage, mushrooms, onions, bacon, pepperoni, pineapple",
  price: 10,
  photoName: "imgs/Pizza Spinaci.jpg",
  soldOut: false
}, {
  name: "Pizza Funghi",
  ingredients: "Funghi, Italian sausage, mushrooms, onions, bacon",
  price: 8,
  photoName: "imgs/Pizza Funghi.jpg",
  soldOut: false
}, {
  name: "Pizza Salamino",
  ingredients: "Sliced salmon, Italian sausage, onions, bacon",
  price: 9,
  photoName: "imgs/pizza salamino.jpg",
  soldOut: true
}, {
  name: "Pizza Prosciutto",
  ingredients: "Prosciutto, Italian sausage, onions, bacon, pepperoni",
  price: 12,
  photoName: "imgs/Pizza Prosciutto.jpg",
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
    <div className='menu'>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}

function Footer() {

  const hour = new Date().getHours();
  // console.log(hour);

  let openhr = 12;
  let closehr = 22;
  let isOpen = hour >= openhr && hour <= closehr;

  console.log(isOpen);
  // if(hour >= openhr && hour <= closehr){
  //   alert("We are currently open !!!");
  // }else{
  //   alert("We are currently closed for the day !!!");
  // }
  return <footer> {new Date().toLocaleTimeString()} We are currently open!!</footer>

  // return React.createElement('footer',null,"We are currently open!!")
}

function Pizza() {
  return <div>
    <img src="imgs/prosciutto.jpg" alt='prosciutto' />
    <h2>Pizza Prosciutto</h2>
    <p>Prosciutto, Italian sausage, onions, bacon, pepperoni</p>
  </div>
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
