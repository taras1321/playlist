import './PageNav.css'

const PageNav = ({ pageNum, lastPage, setPageNum }) => {
  function clickFirstHandler() {
    setPageNum(1)
  }

  function clickLastHandler() {
    setPageNum(lastPage)
  }

  function clickPrevtHandler() {
    setPageNum((prevPage) => prevPage - 1)
  }

  function clickNextHandler() {
    setPageNum((prevPage) => prevPage + 1)
  }

  return (
    <div className="page-nav">
      <div className="nums">
        {pageNum} of {lastPage} pages
      </div>

      <div className="btns">
        <button disabled={pageNum === 1} onClick={clickFirstHandler}>
          &lt;&lt;
        </button>
        <button disabled={pageNum === 1} onClick={clickPrevtHandler}>
          &lt; Prev page
        </button>
        <button
          disabled={pageNum === lastPage}
          onClick={clickNextHandler}
        >
          Next page &gt;
        </button>
        <button
          disabled={pageNum === lastPage}
          onClick={clickLastHandler}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  )
}

export default PageNav
