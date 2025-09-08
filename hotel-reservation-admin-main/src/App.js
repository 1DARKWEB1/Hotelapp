import Container from 'react-bootstrap/Container';
import {Routes, Route, Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import Category from "./components/category/category";
import Staff from "./components/staff/staff";
import Room from "./components/room/room";
import TypeRoom from "./components/typeroom/typeroom";
import Gallery from "./components/gallery/gallery";
import Service from "./components/service/service";
import Event from "./components/event/event";
import Feedback from "./components/feedback/feedback";
import Reservation from "./components/reservation/reservation";
import { useLocation } from 'react-router-dom';
import { MdPeople, MdCategory, MdMeetingRoom, MdHotel, MdPhoto, MdRoomService, MdEvent, MdFeedback, MdBookOnline } from "react-icons/md";

const navLinks = [
    { to: "/staff", label: "Staff", icon: <MdPeople size={22} /> },
    { to: "/category", label: "Categories", icon: <MdCategory size={22} /> },
    { to: "/type-room", label: "Type Rooms", icon: <MdMeetingRoom size={22} /> },
    { to: "/room", label: "Rooms", icon: <MdHotel size={22} /> },
    { to: "/gallery", label: "Gallery", icon: <MdPhoto size={22} /> },
    { to: "/service", label: "Service", icon: <MdRoomService size={22} /> },
    { to: "/event", label: "Events", icon: <MdEvent size={22} /> },
    { to: "/feedback", label: "FeedBack", icon: <MdFeedback size={22} /> },
    { to: "/reservation", label: "Reservation", icon: <MdBookOnline size={22} /> },
];

function App() {
    const location = window.location.pathname;

    return (
        <div style={{ display: "flex", minHeight: "100vh", background: "#eaf2fb" }}>
            <nav className="sidebar">
                <h2>Hotel Admin</h2>
                <ul>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={location === link.to ? "active" : ""}
                            style={{ textDecoration: "none" }}
                        >
                            <li className={location === link.to ? "active" : ""}>
                                <span style={{ marginRight: 12, display: "flex", alignItems: "center" }}>{link.icon}</span>
                                {link.label}
                            </li>
                        </Link>
                    ))}
                </ul>
            </nav>
            <main className="main-content" style={{ flex: 1 }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "32px"
                }}>
                    <h1 style={{ margin: 0 }}>Admin Panel</h1>
                </div>
                <Routes>
                    <Route path='/staff' element={<Staff />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/room' element={<Room />} />
                    <Route path='/type-room' element={<TypeRoom />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/feedback' element={<Feedback />} />
                    <Route path='/reservation' element={<Reservation />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
