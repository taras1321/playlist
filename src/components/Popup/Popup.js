import './Popup.css'
import close from './icons/close.svg'

const Popup = ({ setShowPopup, deleteGame }) => {
  function closeHandler() {
    setShowPopup(false)
  }

  function deleteHandler() {
    deleteGame()
    setShowPopup(false)
  }

  return (
    <div className="back" onClick={closeHandler}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="text">
          Are you sure you want to <br /> delete this item?
        </div>
        <button className="delete" onClick={deleteHandler}>
          Yes, delete
        </button>
        <button className="cancel" onClick={closeHandler}>
          Cancel
        </button>

        <img
          src={close}
          alt="close"
          className="close"
          onClick={closeHandler}
        />
      </div>
    </div>
  )
}

export default Popup
