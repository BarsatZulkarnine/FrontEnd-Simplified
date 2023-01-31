import './Modal.css';

function Modal(props){
    return (
    <div>
        <div className="modal">
            <p className="modal__title">{props.title}</p>
            <div className="modal__buttons">
                <button onClick={props.closeModal} className="btn btn__cancel">Cancel</button>
                <button onClick={props.closeModal} className="btn">Confirm</button>
            </div>
        </div>
        <div className="backdrop" ></div>
    </div>
    )
}

export default Modal