import React, { Component } from "react";
import Home from "./components/home";
import Event from "./components/event";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends Component {
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
    return (
      <HashRouter>
        <div className="flex-container">
          <div className="main">
            <div className="header">
              <h1>Super Awesome Events Inc</h1>
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/city/:id"
                  render={props => <Event {...props} data={this.state.data} />}
                />
              </Switch>
            </div></div></div>
      </HashRouter>
    );
  }
}

export default App;