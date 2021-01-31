import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {/*pathname: URL, state: 우리가 route props에 보내줄 데이터를 의미*/}
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
