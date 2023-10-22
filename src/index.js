import React from "react";
import ReactDOM from "react-dom";

// This is how the js file come to know that there exists a CSS file
// import "./index.css";


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

// JSX challenge-----1

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
// if we want to use JavaScript inside the JSX element then we use  these {}

// const fname = "Tapesh";
// const lname = "chahar";
 
// ReactDOM.render(
//     <>
//     <h1>My name is {fname+" "+lname} </h1>
//     <p> My brother name is Parthiv and {2+3}</p>
//     </>, 
//     document.getElementById("root")
// );

// Template Literals
// In this we use ` `(Back tick)

// ReactDOM.render(
//     <>
//     <h1> {`My name is ${fname} ${lname}`} </h1>
//     <p> My brother name is Parthiv and {2+3}</p>
//     </>, 
//     document.getElementById("root")
// );

// JSX challenge------2
// Display current date and time

// const name = "Tapesh";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
// <>
// <h1>Hello, My name is {name}</h1>
// <p>Current date is {currDate}</p>
// <p> current time is {currTime}</p>
// </>,
//  document.getElementById("root"));


// JSX Attributes in React
// we use ALT when the image is not being loaded due to various factors
// <a> this is known Anchor tag
// if we use target = blank in the <a> tag then it will open the link on the another page
// IN order to add CSS we need a className = Heading so that we can add style in it in the index.css file

// const img1 = "https://picsum.photos/200/300?grayscale";
// const img2 = "https://picsum.photos/250/300?grayscale";
// const img3 = "https://picsum.photos/230/300?grayscale";
// const link = "https://www.youtube.com/watch?v=YEt23lSMR8o";
// const fname = "Tapesh";

// ReactDOM.render(
// <>
// <h1 className="Heading"> My name is {fname}</h1>
// <div className="imagess">
// <img src={img1} alt="No need to worry guys"/>


// <img src={img2} alt="No need to worry guys"/>

// <a href={link} target="blank">
// <img src={img3} alt="No need to worry guys"/>
// </a>
// </div>

// </>, document.getElementById("root"));

//---------- How to add google fonts-----
// Go to google fonts and search any font and then copy the link and paste it in the index.html file in the <head> secction
// also copy and paste the font family in the index.css of the font that you want to change under that className

//-----------Inline and Internal CSS-----------

// const img1 = "https://picsum.photos/200/300?grayscale";
// const img2 = "https://picsum.photos/250/300?grayscale";
// const img3 = "https://picsum.photos/230/300?grayscale";
// const link = "https://www.youtube.com/watch?v=YEt23lSMR8o";
// const fname = "Tapesh";
// // Inline CSS
// // kebab case
// const heading = {
//     color: "#fa9191",
//     textTransform: "capitalize",
//     textAlign: "center",
// }

// ReactDOM.render(
// <>
// <h1 style={heading}> My name is {fname}</h1>
// <div className="imagess">
// <img src={img1} alt="No need to worry guys"/>


// <img src={img2} alt="No need to worry guys"/>

// <a href={link} target="blank">
// <img src={img3} alt="No need to worry guys"/>
// </a>
// </div>

// </>, document.getElementById("root"));


// ------------Componenets in React------------
// When we create a componenet the file name should be start with the capital letter like Heading.jsx
// when we create a component file then we have to import it in the index.js file
// SYNRAX FOR THE IMPORT OF THE COMPONENT

import Heading from "./Heading";
import List from "./List";
import Para from "./Para";

// when we have to use it then we have to call it
// <Heading/>  ----> This is the self closing tag 

ReactDOM.render(

<>
<Heading/>
<Para/>
{/* <p>List of 5 Best series</p> */}
<List/>
{/*  // we create a component for this above <List/>
<ol> 
    <li>Prison Break</li>
    <li>Breaking Bad</li>
    <li>Elite</li>
    <li>Money Heist</li>
    <li>Mirzapur</li>
</ol> */}
</>, 
document.getElementById("root"));






