import React, {Component} from 'react';
import './aboutUs.css';
import {Button} from "react-bootstrap";
class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <div className="LeftSide">
                    <p className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusamus accusantium aperiam asperiores culpa cumque, cupiditate dolor dolores
                        eius error fugit illum ipsum iusto labore laudantium maiores maxime nemo officiis
                        quaerat quasi quisquam quo repellendus similique sint temporibus ullam vitae voluptatibus
                        voluptatum. Fuga, magnam.
                    </p>
                    <Button href="#anvar" className="SubmitAboutUs">Contact</Button>
                </div>
            </div>
        );
    }
}

export default AboutUs;