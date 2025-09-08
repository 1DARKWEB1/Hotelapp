import {Component} from "react";
import './eventsInLanding.css';
import server from "../../index";
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default class EventsInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        fetch(`${server}apps/event/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({items: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    dateLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt.toISOString().slice(0, 10);
    }

    timeLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt.toISOString().slice(11, 16);
    }

    renderItems = () => {
        const items = this.state.items;

        return items.map((item) => (
            <SwiperSlide className="swiper-element" key={item.id}>
                <img src={item.image} alt=".png" />
                <div className="event-text p-2 d-flex flex-column justify-content-center align-items-center">
                    <h2>{item.name}</h2>
                    <h4>{item.where}</h4>
                    <h4>{this.dateLocal(item.when)} {this.timeLocal(item.when)}</h4>
                    <p>{item.info}</p>
                </div>
            </SwiperSlide>
        ))
    }

    render() {
        return (
            <div className="eventsInLanding mt-4 d-flex flex-column justify-content-center align-items-center">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    effect={"fade"}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    {this.renderItems()}
                </Swiper>
            </div>
        );
    }
}