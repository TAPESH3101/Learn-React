import React from "react";
import ReactDOM from "react-dom";



// ReactDOM.render(
// [
// <h1>My name is tapesh</h1>,
// <h2>What is your name</h2>,
// <p> I am going to become successfull</p>
// ],
// document.getElementById("root"));

// ReactDOM.render(
//     <div>
//     <h1>My name is tapesh</h1>
//     <h2>What is your name</h2>
//     <p> I am going to become successfull</p>
//     </div>,
//     document.getElementById("root"));

// we can use <div></div> as well instead of making an array of an element
// we use <div> in order to use multiple JSX element
// when we use <div> then an extra <div> is created in the web html code then
// in order to prevent that extra <div> we use React.ragment
// Use ctrl+D to select both the <div>
// React.Fragment is faster than the <div> because it will not create an extra node and 
// alsoe consume less memory than <div>

// ReactDOM.render(
//     <React.Fragment>
//     <h1> How are you bro</h1>
//     <h2>I am fine what about you</h2>
//     </React.Fragment>,document.getElementById("root")
// );

// It also works the same as React.Fragment 
// ReactDOM.render(
//     <>
//     <h1> How are you bro</h1>
//     <h2>I am fine what about you</h2>
//     </>,document.getElementById("root")
// );

// JSX challenge

// ReactDOM.render(

// <>
// <h1> Top Netflix Picks</h1>
// <p>List of 5 Best series</p>
// <ol>
//     <li>Prison Break</li>
//     <li>Breaking Bad</li>
//     <li>Elite</li>
//     <li>Money Heist</li>
//     <li>Mirzapur</li>
// </ol>
// </>, 
// document.getElementById("root"));

// JSX Expression in React 
// we can use curly braces like this { } 
// we can only use expression inside these braces

ReactDOM.render(
    <>
        <h1>My name is Tapesh</h1>
        <p> My brother name is Parthiv</p>
    </>, document.getElementById("root")
);









