import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.esc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.esc);
  }
  render() {
    return (
      <div className="Overlay" onClick={this.props.click}>
        <div className="Modal">
          <img src={this.props.image} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
