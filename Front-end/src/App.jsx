import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Todolists from './pages/Todolists';
import PrivateRoute from './PrivateRoute/Privateroute';
import './index.css'

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<PrivateRoute Component={Home} isAuthenticated={true} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todolists />} />
        </Routes>
      </Layout>
  );
}

export default App;