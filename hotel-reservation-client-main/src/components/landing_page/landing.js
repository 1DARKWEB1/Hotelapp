import {Component} from "react";
import './landing.css';
import Welcome from "../welcome_landing/welcome";
import RoomsInLanding from "../rooms_in_landing/roomsInLanding";
import ServiceInLanding from "../services_in_landing/serviceInLanding";
import EventsInLanding from "../events_in_landing/eventsInLanding";
import Footer from "../footer/footer";
import FoodInLanding from "../foods_in_landing/foodInLanding";
import FeedbackInLanding from "../feedback_in_landing/feedbackInLanding";

export default class Landing extends Component {
    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                {/*<Header />*/}
                <Welcome/>
                <RoomsInLanding/>
                <FeedbackInLanding/>

                <br/>
                <div className="w-100 pt-5 pb-3 d-flex flex-column justify-content-center">
                    <div className="w-100 line"/>
                    <font className="line-text mx-5 px-5">Services</font>
                </div>

                <ServiceInLanding/>

                <br/>
                <div className="row-title w-100 pt-5 pb-3 d-flex flex-column justify-content-center">
                    <div className="w-100 line"/>
                    <font className="line-text mx-5 px-5">Events</font>
                </div>

                {/*<FoodInLanding />*/}
                <EventsInLanding/>

                <div className="w-100 p-5 d-flex flex-column justify-content-between align-items-center">
                    <h1 className="our-location-title text-brown">Our location</h1>
                    <iframe
                        title="location of hotel"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11990.2926933274!2d69.267908!3d41.296393!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f74710c22b9462e!2sGrand%20Mir%20Hotel!5e0!3m2!1sru!2s!4v1669045321940!5m2!1sru!2s"
                        height="450" style={{border: 0, width: "100%"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <Footer/>
            </div>
        );
    }
}