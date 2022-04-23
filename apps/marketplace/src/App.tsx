import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/about">
            <h2>About</h2>
          </Route>
          <Route path="/">
            <h2>Home</h2>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
