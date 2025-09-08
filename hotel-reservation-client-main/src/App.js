import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from "./components/landing_page/landing";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "./components/gallery/gallery";
import Rooms from "./components/rooms/rooms";
import AboutUs from "./components/about_us/aboutUs";
import Service from "./components/service/service";
import Events from "./components/events/events";
import PrivateArea from "./components/private_area/privateArea";
import {useContext} from "react";
import AuthContext from "./context/AuthContext";

function App() {
    const ana = useContext(AuthContext);

    const authenticated = ana;
    return (
        <div>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/rooms' element={<Rooms />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/service' element={<Service />} />
                <Route path='/event' element={<Events />} />
                <Route path='/client' element={authenticated ? <PrivateArea /> : <h1>Please Log In</h1>} />
                {/*<Route path='/' element={authenticated ? <Landing /> : <h1>Please Log In</h1>} />*/}
            </Routes>
        </div>
    );
}

export default App;
