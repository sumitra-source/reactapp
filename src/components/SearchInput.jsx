import React, { Component } from "react";

export class SearchInput extends Component {
  state = {
    entry: "",
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div classsName="field">
            <div className="ui massive icon input">
              <input
                type="text"
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                placeholder="search..."
                value={this.state.entry}
              />

              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
