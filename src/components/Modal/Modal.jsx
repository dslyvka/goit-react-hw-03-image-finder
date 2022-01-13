function Modal({ image, click }) {
  return (
    
    <div className="Overlay" onClick={click}>
      <div className="Modal">
        <img src={image} alt="" image={ image}/>
      </div>
    </div>
  );
}

export default Modal;
