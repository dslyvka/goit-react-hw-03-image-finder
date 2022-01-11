import { Component, Fragment } from 'react';
import { FiSearch } from 'react-icons/fi';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
  };

  handleClick = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    // const { value } = this.state;
    return (
      <Fragment>
        <header className="searchbar Searchbar">
          <form
            className="form SearchForm"
            // onSubmit={() => {
            //   this.props.onSubmit(this.state.value);
            // }}
          >
            <button
              type="submit"
              className="button SearchForm-button"
              onClick={this.handleClick}
            >
              <span className="button-label ">
                <FiSearch />
              </span>
            </button>

            <input
              className="input SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </header>
      </Fragment>
    );
  }
}

export default Searchbar;
