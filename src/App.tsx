/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Store from './components/Store';

export const App = () => {
  const [numItems, setNumItems] = useState<number>(0);
  const [cartItems, setCartItems] = useState<{}>({});

  return (
    document.title = "Electronics Store",
    <>
      <Router>
      <Navbar/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

/* eslint-disable @typescript-eslint/no-unused-vars */