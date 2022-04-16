import React, { useState } from 'react';
import 'D:/Vs code/ReactJS/2_project1/src/App.css';

export default function About(props) {

    const [myStylesheet, setMystylesheet] = useState({
        color: "black",
        backgroundColor: "white",
    });
    // This is useState object
    // We can use this same as useState text

    const [btnStyle, setBtnStyle] = useState({
        color: "white",
        backgroundColor: "black",
    });

    const [btnText, setBtnText] = useState("Switch to Dark Mode");

    const toggleStyle = () => {
        if (myStylesheet.color === "white") {
            setMystylesheet({
                color: "black",
                backgroundColor: "hsla(0, 0%, 0%, 0)",
            });
            setBtnText("Switch to Dark Mode");
            setBtnStyle({
                color: "white",
                backgroundColor: "black",
            });
        }
        else if (myStylesheet.color === "black") {
            setMystylesheet({
                color: "white",
                backgroundColor: "#143F6B",
            });
            setBtnText("Switch to Light Mode");
            setBtnStyle({
                color: "black",
                backgroundColor: "white",
            });
        };
    };

    return (
        <div className="mycontainer" style={myStylesheet}>
            <div className="accordion my-5 py-5 px-5" id="accordionExample" style={myStylesheet}>
                <h1 className='my-3'>{props.heading}</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStylesheet}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStylesheet}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStylesheet}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStylesheet}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStylesheet}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStylesheet}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-dark my-3" onClick={toggleStyle} style={btnStyle}>{btnText}</button>
                {/* When we click this button toggleStyle function in executed which changes light mode to dark mode */}
            </div>
        </div>

    );
};

