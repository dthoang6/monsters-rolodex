import { Component } from "react"
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ""
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }
  render() {
    const filteredMonsters = this.state.monsters.filter(item => {
      return item.name.toLocaleLowerCase().includes(this.state.searchField)
    })

    return (
      <div className="App">
        <input
          type="search"
          placeholder="searching monsters"
          onChange={event => {
            const searchField = event.target.value.toLocaleLowerCase()

            this.setState(() => {
              return { searchField }
            })
          }}
        />

        {filteredMonsters.map(item => {
          return <h1 key={item.id}>{item.name}</h1>
        })}
      </div>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Hello, my name is tom hoang.
        </a>
      </header>
    </div>
  )
} */

export default App
