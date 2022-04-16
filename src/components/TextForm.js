import React, { useState } from 'react';
// {useState} is a hook that we can use in React app
// Hooks are used in React so that we use the funtionality of class-based components using functional components
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // Using this function we change the value of text to desired value when button is clicked
        props.showAlert("Upper Case Text", "info");
        // we passed showalert as prop in app.js and here we used it to give value to alert state
    };

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower Case Text", "info");
    };

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "info");
    };

    const handleRandomText = () => {
        let newText = text + 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quaerat totam quia deleniti sit aliquam animi dolor repudiandae corporis reprehenderit accusantium esse, doloribus amet unde alias nam pariatur quidem modi odit cum perspiciatis nostrum.';
        setText(newText);
        props.showAlert("Random Text Added", "info");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
        // Here we setText as event.target.value
        // we use event as an parameter
        // Whenever user tries to change value of textarea onChange function in executed and it sets the text to current value of textArea
    };

    const [text, setText] = useState("");
    // This is the syntax for hooks in React
    // text is the value we give using useSate
    // setText when run changes value of text 

    // text="newText"; 
    // ! wrong way to change the state

    // setText("new Text")
    // ? Correct way

    const myStyleSheet={
        backgroundColor: props.mode==='light'?'white':'#143F6B',
        color: props.mode==='light'?'black':'white',
    }

    return (
        <>
            <div className='container' style={myStyleSheet}>
                <div className="mb-3 mt-3">
                    <h2><label htmlFor="Textarea" className="form-label">{props.heading}</label></h2>
                    <textarea className="form-control" placeholder="Enter Text Here" value={text} onChange={handleOnChange} id="Textarea" rows="5" style={myStyleSheet}></textarea>
                    {/* onChange is an event-listener*/}
                    {/* Whenever we use JS events in reactJS we need to define a function that runs whenever event is executed */}
                    {/* As we have given a value for textarea and {text} is constant so we would not able to change the text in textarea */}
                    {/* For this we used onChange event listener <see handleOnChange> */}
                </div>
                <button type="button" className="btn btn-primary mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
                {/* Similarly onClick is also an event listener */}
                <button type="button" className="btn btn-primary mx-1" onClick={handleRandomText}>Random Text Generator</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleClearText}>Clear</button>

            </div>

            <div className="container my-5" style={myStyleSheet}>
                <h3>Text Summary: </h3>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>Time to read text {(text.split(" ").length) * 0.008} minutes</p>
                {/* We use split function to split the text into array of words and length to count the characters */}
                {/* text.length gives number characters of the variable */}
            </div>

            <div className="container" style={myStyleSheet}>
                <h3>Preview: </h3>
                <p>{text.length>0?text:"Enter some text in above textbox to preview it here..."}</p>
                {/* We can use ternary operator in JS to display text */}
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
    heading: "Enter the text",
};