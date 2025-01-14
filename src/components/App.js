import {Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <header className="container">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Red30 Tech logo"
            title="Red30 Tech | Home"
          />
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/about">About</Link>
        </nav>
      </header> */}

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech"/>} />
        <Route path="about" element={<About />} />

        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />}>
            <Route path=":sessionId" element={<Session />} />
          </Route>
          <Route index element={<h3>Select a category from above</h3>}/>
        </Route>
        <Route path="register" element={<Register />}/>
        <Route path="confirmed" element={<Confirmation />} />
        <Route 
        path="*" 
        element={<h1 className="not-found">Page not found</h1>} 
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;
