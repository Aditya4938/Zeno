import './App.css';
import Advertise from './components/Advertise';
import Client from './components/Client';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Introduction from './components/Introduction';
import Navbar from "./components/Navbar";
import Reach from './components/Reach';
import WhatWeDo from "./components/WhatWeDo";

function App() {
  document.body.style.backgroundColor="#F0F6F8"
  document.body.style.color="#ADADAD"
  return (
    <>
    
    <div className="conatinerapp">
    <Navbar/>
    <Introduction/>
    <WhatWeDo/>
    <Reach/>
    <Feature/>
    <Client/>
    <Advertise/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
