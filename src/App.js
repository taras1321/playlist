import Header from './components/Header/Header'
import Content from './components/Content/Content'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contaioner">
        <h1>Community playlist</h1>
        <Content />
      </div>
    </div>
  )
}

export default App
