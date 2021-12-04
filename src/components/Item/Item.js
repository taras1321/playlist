import { useRef } from 'react'
import trash from './icons/trash.svg'
import './Item.css'

const Item = ({ game, changeGame, deleteGame }) => {
  const inputRef = useRef(null)

  function clickHandler() {
    inputRef.current.focus()
  }

  function changeHandler(event) {
    const gameData = {
      ...game,
      title: event.target.value,
    }

    changeGame(gameData)
  }

  function changeStatusHandler(event) {
    event.stopPropagation()

    const gameData = {
      ...game,
      completed: !game.completed,
    }

    changeGame(gameData)
  }

  function deleteHandler(event) {
    event.stopPropagation()

    deleteGame(game.id)
  }

  return (
    <li className="item" onClick={clickHandler}>
      <div className="col">
        <div
          className="square"
          onClick={(e) => e.stopPropagation()}
        />
        <input
          ref={inputRef}
          className="name"
          value={game.title}
          onChange={changeHandler}
        />
      </div>
      <div className="col">
        {game.completed ? (
          <div className="complete" onClick={changeStatusHandler}>
            Complete
          </div>
        ) : (
          <div className="to-play" onClick={changeStatusHandler}>
            To play
          </div>
        )}

        <img
          src={trash}
          alt="trash"
          className="delete"
          onClick={deleteHandler}
        />
      </div>
    </li>
  )
}

export default Item
