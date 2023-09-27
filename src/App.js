import './App.css';
import React from 'react';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';


const array = [
  {id:1 , name:"Mercedes",price:"300$",src:"/image/arac-1.jpeg"},
  {id:2 , name:"Ferrari",price:"300$",src:"/image/arac-2.jpeg"},
  {id:3 , name:"Mustang",price:"300$",src:"/image/arac-3.webp"},
  {id:4 , name:"Rolls Rolys",price:"300$",src:"/image/arac-4.jpeg"},
  {id:5 , name:"Bugatti",price:"300$",src:"/image/arac-5.jpeg"},
  {id:6 , name:"Porche",price:"300$",src:"/image/arac-6.jpeg"},
  {id:7 , name:"Audi",price:"300$",src:"/image/arac-7.jpeg"},
  {id:8 , name:"Luxury Cars",price:"300$",src:"/image/arac-8.jpeg"}
]

function App() {
  
  return (
    <div className="App">
     <Nav></Nav>
     <Main data={array}></Main>
     <Footer></Footer>
    </div>
  );
}

export default App;
