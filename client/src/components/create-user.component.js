import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";


export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    }
  }

  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "username",
      password: "password"
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    const user = {
      username: this.state.username,
      username: this.state.password
    }
    console.log("username and password: ", this.state);

    Axios.post('/users/add', user)
      .then(res => console.log(res.data))
      .catch(err => res.status(400).json('error:  ', err));

    this.setState({
      username: "",
      password: ""
    })


  };


  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}