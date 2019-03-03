import React from "react";
import moment from 'moment';
import { Link } from "react-router-dom";

const dateFormat = (e) => {
    return moment(e).format("DD.MM.YYYY");
}

const timeFormat = (e) => {
    return new Date(e).toLocaleTimeString(
        navigator.language,
        { hour: "2-digit", minute: "2-digit" }
    );
}

const Event = ({ data, match }) => {
    if (data && match) {
        let id = match.params.id - 1;

        return (
            <div>
                <Link to={"/"}><h4>Tilbake</h4></Link>
                <h2>{data[id].name}</h2>

                {data[id].start === data[id].stop ?
                    <h4>{dateFormat(data[id].start)}</h4> :
                    <h4>{dateFormat(data[id].start)} - {dateFormat(data[id].stop)}</h4>}

                {data[id].subevents.map(subevent => {
                    let tidStart = timeFormat(subevent.start);
                    let tidStop = timeFormat(subevent.stop);
                    return (
                        <div key={subevent.id} className="box">
                            <h3>{subevent.location}</h3>
                            <p>{subevent.name}</p>
                            <p>{moment(subevent.start).format("DD.MM.YYYY")}</p>
                            <p>{tidStart} - {tidStop}</p>
                        </div>
                    );})}
            </div>
        );
    }
};
export default Event;