import { useState, useEffect } from 'react'
import Form from '../Form/Form'
import Item from '../Item/Item'
import Loader from '../Loader/Loader'
import PageNav from '../PageNav/PageNav'
import Popup from '../Popup/Popup'
import './Content.css'

const Content = () => {
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [showPopup, setShowPopup] = useState(false)
  const [activeId, setActiveId] = useState(null)

  const gamesOnPage = 20
  const lastPage = Math.ceil(games.length / gamesOnPage)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'http://jsonplaceholder.typicode.com/todos'
      )
      const data = await response.json()

      setLoading(false)
      setGames(data)
      setPageNum(1)
    }

    fetchData()
  }, [])

  function addGame(game) {
    setGames((prevGames) => {
      const newGames = [...prevGames]

      newGames.splice((pageNum - 1) * gamesOnPage, 0, game)
      return newGames
    })
  }

  function changeGame(newGame) {
    setGames((prevGames) => {
      const newGames = [...prevGames]

      const index = newGames.findIndex(
        (game) => newGame.id === game.id
      )
      newGames[index] = newGame

      return newGames
    })
  }

  function deleteGameById(id) {
    setShowPopup(true)
    setActiveId(id)
  }

  function deleteGame() {
    setGames((prevGames) => {
      let newGames = [...prevGames]

      newGames = newGames.filter((game) => game.id !== activeId)
      return newGames
    })
  }

  if (pageNum > lastPage) {
    setPageNum(lastPage)
  }

  const visibleGames = games.filter(
    (_, index) =>
      (pageNum - 1) * gamesOnPage < index + 1 &&
      index + 1 <= pageNum * gamesOnPage
  )

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <div className="list">
        <div className="info">
          <div className="title">Game title</div>
          <div className="status">Status</div>
        </div>
        <Form addGame={addGame} />
        <ul>
          {visibleGames.map((game) => (
            <Item
              game={game}
              key={game.id}
              changeGame={changeGame}
              deleteGame={deleteGameById}
            />
          ))}
        </ul>
      </div>

      <PageNav
        pageNum={pageNum}
        lastPage={lastPage}
        setPageNum={setPageNum}
      />

      {showPopup ? (
        <Popup setShowPopup={setShowPopup} deleteGame={deleteGame} />
      ) : null}
    </>
  )
}

export default Content
