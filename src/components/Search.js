import React, { Component } from "react";

class Search extends Component {
  submitHandler = e => {
    e.preventDefault();

    const userToSearchFor = this.usernameInput.value;
    this.usernameInput.value = '';

    if(userToSearchFor.length > 0) this.props.getRepos(userToSearchFor)
    
  };

  render() {
    return (
        <form  className="form-inline align-self-center" onSubmit={this.submitHandler}>
          <div className="input-group">
            <input ref={usernameInput => this.usernameInput = usernameInput} type="text" placeholder="Github username" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
    );
  }
}

export default Search;
