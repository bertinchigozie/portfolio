import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import img from "../utils/images/hero-1.jpg";

function Home() {
  const [text] = useTypewriter({
    words: [
      "I'm Okeke Chigozie Emmanuel",
      "I'm a Fullstack Web Developer",
      "I have great experience working with the following Technologies: ",
      "HTML, CSS, JavaScript, ReactJs",
      "SASS, TypeScript, and NodeJs",
      "I Look forward to working with you.",
      "Thanks!",
    ],
    loop: false,
    delaySpeed: 2000,
  });
  return (
    <React.Fragment>
      <main className="Grid">
        <div className="Cols-1">
          <div className="V-shape"></div>
          <div className="Image">
            <img src={img} alt="My Pic" />
          </div>
        </div>
        <div className="Cols-2">
          <h1 className="Welcome">Hi there 👋!</h1>
          <p className="Name">
            {text}
            <Cursor cursorColor="#339bf0cb" />
          </p>
          <p className="info"></p>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
