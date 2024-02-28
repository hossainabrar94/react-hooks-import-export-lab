import React from "react";

function About(info) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={info.image} alt="I made this" />
    </div>
  );
}

export default About