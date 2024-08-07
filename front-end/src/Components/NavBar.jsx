import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      NavBar
      <Link to="/songs">Go to songs</Link>
      <Link to="/songs/new">Add song</Link>
    </div>
  );
};

export default NavBar;
