import React from "react";
import profile from "../assests/images/profile.png";
import bankist from "../assests/images/bankist.png";
import metabnb from "../assests/images/metabnb.png";
import piggy from "../assests/images/piggy.png";
import todo from "../assests/images/to-do.png";
import mapty from "../assests/images/mapty.png";
import Project from "./Project";
import "../App.scss";

const projects = [
  {
    name: "Profile page app",
    id: 1,
    image: profile,
    url: "https://jolly-cloudfare.netlify.app/",
    description:
      "This is a single page app, built with reactjs. As part of my HNG internship project, I built this web app to show my reactJS skills. It is mobile responsive and User friendly.",
    how: "To view the profile, click on the available links, it will direct you to your requested page.",
  },
  {
    name: "Meta BnB Project",
    id: 2,
    image: metabnb,
    url: "https://metabnb-project.netlify.app",
    description:
      "This is a single page app, built with reactjs. As part of my HNG internship project, I built this web app to show my reactJS skills. It is mobile responsive and User friendly.",
    how: "Click on the navigations to view list of Meta Bnb projects and rents. You can also connect with people via locations",
  },
  {
    name: "Bankist App",
    id: 3,
    image: bankist,
    url: "https://alt-bankist-app.netlify.app",
    description:
      "This is a Bankist app, I built it when I was learning modern JavaScript. It was originally built by Jonas Schemedtmann. The app allows registered user to transfer money to another existing user, take loan, and close account. It is user friendly.",
    how: "To Log in into any of the existing accounts, for first user: use 'go' as user input and '1111' as pin while the second user: 'no' as user and '2222' as pin",
  },
  {
    name: "Piggy game",
    id: 4,
    image: piggy,
    url: "https://my-simple-piggy-game.netlify.app",
    description:
      "This is a piggy app, I built it when I was learning modern JavaScript. It was originally built by Jonas Schemedtmann. The game can be played by two players, anyone who is first to score  hundred points wins the game. In the app, you can hold your scores and also roll the dices for a new point. It is user friendly",
    how: "Click on new game, to start the game. Click on roll dice to earn a point. To add points to your total score, click on hold.",
  },
  {
    name: "To Do app",
    id: 5,
    image: todo,
    url: "https://godzie-todo.netlify.app",
    description:
      "This is a single page app, built with reactjs. It is a to-do app. It allows Users to add a list of their To-Dos, a user can edit a to-do, delete a to-do, filter to-dos, mark a to-do as complete or incomplete.",
    how: "Type the list of task in the provided input section, click on the + button to creat the list. To check if a task has been completed click on completed button and to view completed task, click on the select option button ",
  },
  {
    name: "Mapty app",
    id: 6,
    image: mapty,
    url: "https://go-mapty.netlify.app/",
    description:
      "This is a map web app, I built it when I was learning modern JavaScript. It was originally built by Jonas Schemedtmann. The app gets your current location, which you can record your cycling or running distance and kilometers covered. It was built JavaScript OOP. It is user friendly",
    how: "Click on the map, a form displays at the left side of the screen, fill the required information then click enter",
  },
];

const project = projects.map((project) => {
  return (
    <Project
      key={project.id}
      name={project.name}
      image={project.image}
      id={project.id}
      description={project.description}
      url={project.url}
      how={project.how}
    />
  );
});

function Portfolio() {
  return <div className="Portfolio">{project}</div>;
}

export default Portfolio;
