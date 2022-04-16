import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";
// we need to import components in app.js

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // This state handles the alerts in our app

  const showAlert = (msg, type) => {
    setAlert(
      {
        msg: msg,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null)
    }, 3000);
    // setTimeout is used to set time for alert to be displayed
    // ie after 3000ms -> 3s alert will be set to null
    // alert disappears after 3s
  };
  // We make another function of show alert to change values of alert state using setAlert because we need values from user to set the alert state

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#143F6B';
      // using JS dom we change background color of the body
      showAlert("Dark mode activated", "success");
      // using function we added alert to alert state initially null
      document.title = 'React App - Dark Mode';
      // Change the title of the page with button click

      //? setInterval(() => {
      // ?  document.title = 'React App - Dark Mode';
      //   //todo Change the title of the page every 3s
      //? }, 300);
      //? setInterval(() => {
      //?   document.title = 'React App - Home';
      //   //todo Change the title of the page every 3s
      // ?}, 200);
      // //todo This we change the title of the page every 3s
      // //todo Blinking title
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode activated", "success");
      document.title = 'React App - Light Mode';
    }
  };
  return (
    <>
      {/* This is a JSX fragment */}
      {/* Wrap all components in this fragment always */}
      <Navbar title="Text-Utils" about="About" contact="Contact" mode={mode} toggleMode={toggleMode} />
      {/* This is call for navbar component */}
      {/* We can pass values to components using props */}

      <Alert alert={alert} />
      {/* We passed alert state in Alert component so we can change state of Alert component */}
      <Routes>
        <Route path="/" element={
          <div className="container">
            <TextForm showAlert={showAlert} heading="Enter the Text" mode={mode} />
          </div>
        } />
        {/* passes show alert as prop to textform */}
        {/* Here we use react router to set href / to textform component */}
        <Route path="/about" element={
          <div className="container">
            <About heading="About Us" mode={mode} />
          </div>
        } />
      </Routes>

      {/* React router is used to navigate between pages without reloading again and again */}
      {/* To use react router we need to change all <a> tags to link and href attribute to "to" in all components */}

      {/* <div className="container">
        <About heading="About Us"/>
      </div> */}
    </>
  );
}

// When we use bootstrap code in react we need to change:
// 1. class -> className
// 2. href="#" -> href="/"
// 3. change all non closing tag elements oh html to />
// 4. for -> htmlFor

export default App;
// We can add bootstrap to React app using index.html file in the public folder

// npm run start opens a development server
// npm run build builds the app for production

//TODO: To host a react app on github server for free
// You need Github desktop
// in terminal write "npm run build"
// This creates a build folder in our react project
// We can run the react project using only the build folder
// we dont need any other files or folders
// open create-react-app.dev/docs/deployment
// Scroll down to github pages section
// Follow the doc steps to deploy app on github server
// Also first we need to create a repo on github

//TODO: Step 1
// Open your package.json and add a homepage field for your project:
  // "homepage": "https://<myusername>.github.io/<my-app>",

// TODO: Step 2
// npm install --save gh-pages

// TODO: Step 3
// Add the following scripts in your package.json:
//   "scripts": {
// +   "predeploy": "npm run build",
// +   "deploy": "gh-pages -d build",

// TODO: Step 4
// Then run:
// npm run deploy

// TODO: Step 5
// Now goto github repo
// Click on settings
// Click on pages
// There select branch gh-pages if not already selected
// use link to goto the page