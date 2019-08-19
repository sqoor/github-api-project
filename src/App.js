import React, { Component } from "react";
import axios from "axios";

import Search from "./components/Search";
import Table from "./components/Table";

class App extends Component {
  state = {
    repos: [],
    userFound: false,
    searchedForUser: false
  };

  getRepos = async usernameToSearchFor => {
    try {
      const res = await axios
        .get(`https://api.github.com/users/${usernameToSearchFor}/repos`);
      
      console.log(res.status);
      if(res.status === 200) 
        this.setState({ repos: res.data, searchedForUser: true, userFound: true })
    } catch (err) {
      console.log(err);
      this.setState({ repos: [], searchedForUser: true, userFound: false })
    }
  };

  renderReposOrMessage = () => {
    const {userFound, searchedForUser} = this.state;

    if (!searchedForUser) return "";
    else if (userFound) return <Table repos={this.state.repos} />;
    else return <h3 className="m-5">User is not found!</h3>
  }

  render() {
    const { getRepos, renderReposOrMessage } = this;

    return (
      <div className="container m-3">
        <Search getRepos={getRepos} />
        {renderReposOrMessage()}
      </div>
    );
  }
}

export default App;
