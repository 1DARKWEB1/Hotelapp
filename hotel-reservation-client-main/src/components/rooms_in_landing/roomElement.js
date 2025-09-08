// import {Component} from "react";
// import './roomElement.css';
// import {SwiperSlide} from "swiper/react";
// import {Image} from "react-bootstrap";
// import server from "../../index";
//
// export default class RoomElement extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             category: null,
//             type_room: null,
//         }
//     }
//
//     componentDidMount() {
//         this.getCategoryById(this.props.item.category);
//         this.getTypeRoomById(this.props.item.type_room);
//     }
//
//     getCategoryById = (pk) => {
//         fetch(server + `apps/category/retrieve/${pk}`)
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({category: data.name})
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
//
//     getTypeRoomById = (pk) => {
//         fetch(server + `apps/type-room/retrieve/${pk}`)
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({type_room: data.name})
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }
//
//     render() {
//         return (
//             <SwiperSlide className="justify-content-start align-items-start bg-transparent">
//                 <div className="room-image">
//                     <Image src={this.props.item.image1} />
//                 </div>
//                 <div className="bg-light room-info p-2 room-info-text d-flex flex-column justify-content-start align-items-start">
//                     <h6>{this.props.item.name}</h6>
//                     <p>{this.state.category}, {this.state.type_room}</p>
//                     <p>{this.props.item.floor}-floor, {this.props.item.room_number}-room, {this.props.item.area} kv</p>
//                 </div>
//             </SwiperSlide>
//         );
//     }
// }