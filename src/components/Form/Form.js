import { useRef, useState } from 'react'
import './Form.css'

const Form = ({ addGame }) => {
  const [title, setTitle] = useState('')
  const inputRef = useRef(null)

  function formClickHandler() {
    inputRef.current.focus()
  }

  function submitHandler(event) {
    event.preventDefault()
    event.stopPropagation()

    if (!title) {
      return
    }

    const newGame = {
      id: Date.now(),
      title,
      completed: false,
    }

    addGame(newGame)

    setTitle('')
  }

  return (
    <form className="form" onClick={formClickHandler}>
      <button onClick={submitHandler}>
        <span className="v-line" />
        <span className="h-line" />
      </button>
      <input
        value={title}
        ref={inputRef}
        placeholder="Add new game"
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default Form
