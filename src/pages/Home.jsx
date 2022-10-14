import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/text-example-1">Text Example 1</Link>
      <Link to="/text-example-2">Text Example 2</Link>
    </div>
  );
}

export default Home;
