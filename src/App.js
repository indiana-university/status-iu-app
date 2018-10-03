import React, { Component } from 'react';
import 'rivet-uits/css/rivet.css'
import { Header, Table } from 'rivet-react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Home, Calendar, Maintenance, Notice, Notices } from './pages'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notices: []
    };
  }

  componentDidMount() {
    fetch("https://api.status-test.uits.iu.edu/Notices")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            notices: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header title={"Status.IU"} />
          <Route exact path="/" component={Home} />
          <Route path="/notices" component={Notices} />
          <Route path="/notices/:noticeId" component={Notice} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/maintenance" component={Maintenance} />
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
