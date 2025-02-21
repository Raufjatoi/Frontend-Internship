import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from './pages/layout';
import Home from './pages/home';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Counter from './pages/counter';

import './App.css';

function App() {
  return (  
    <BrowserRouter>

      <div className="nav">
        <Link to="/blogs">Blogs</Link> <br />
        <Link to="/contact">Contact</Link> <br />
        <Link to="/home">Home</Link> <br />
        <Link to="/layout">Layout</Link>
        <Link to="/counter">Counter</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;