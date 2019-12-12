import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import * as selectors from "../store/selectors";
import UserList from './UserList';


class App extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <UserList users={this.props.users}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: selectors.getUsers(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => dispatch(actions.fetch())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
