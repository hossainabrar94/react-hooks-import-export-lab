import React from "react";

function Home(info) {
  return (
    <div id="home">
      <h1>
        {info.username} is a Web Developer from {info.city}
      </h1>
    </div>
  );
}

export default Home