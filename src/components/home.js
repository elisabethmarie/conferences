import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const dateFormat = (e) => {
    return moment(e).format("DD.MM.YYYY");
}

class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: '',
            url: "https://demo2480495.mockable.io/events"
        };
    }

    componentDidMount() {
        fetch(this.state.url)
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        let events = this.state.data;
        return (
            <div>
                <h2>Konferanser</h2>
                <div className="boxes">
                    {events && events.map(event => {
                        return (
                            <div key={event.id} className="box">
                                <Link to={"/city/" + event.id}>
                                    <h3>{event.name}</h3>
                                    <p>{event.location}</p>
                                    {event.start === event.stop ?
                                        <p>{dateFormat(event.start)}</p> : <p>{dateFormat(event.start)} - {dateFormat(event.stop)}</p>}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;