import React from "react";
// import logo from './logo.svg';
// import './App.css';
import routers from "./router/index";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  // console.log(routers);

  return (
    <div className="App">
      {routers.map((item, index) => {
        return (
          <Link to={item.path} key={index}>
            {item.name}
          </Link>
        );
      })}
      <br />
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              path={item.path}
              key={index}
              element={<item.components />}
            ></Route>
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
