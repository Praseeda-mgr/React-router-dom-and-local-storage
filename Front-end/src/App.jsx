// src/App.js
import React from 'react';
import './index.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';
import Home from './Pages/Home.JSx';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Layout from './layout/Layout';
import Privateroute from './PrivateRoute/Privateroute';
import Todolist from './Pages/TodoList';
const App = () => {
  return (
    <div>
      <Layout>
        {/* <h2 className="text-3xl">Welcome to My Website</h2> */}
        {/* Add other sections/content here */}
          <Routes>
            <Route path='/' element = {<Privateroute Component={Home} isAuthenticated={true}/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path = '/contact' element = {<Contact/>}/>
            <Route path = '/services' element = {<Services/>}/>
            <Route path = '/login' element = {<Login/>}/>
            <Route path = '/todolist' element = {<TodoList/>}/>
          </Routes>
      </Layout>
      
    </div>
  );
};

export default App;


