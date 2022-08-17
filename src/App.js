import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/CardList/CardList'
import React from 'react'
import SearchBox from './components/Search-box/SearchBox'

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

// class App extends Component {
//   constructor() {
//     super()

//     //initiate the state
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//   }

//   //call api when mounted
//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json()) //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
//       .then((users) => {
//         this.setState({ monsters: users })
//       })
//   }

//   //event handlers to change state

//   handleOnChange = (e) => {
//     this.setState({
//       searchField: e.target.value.toLowerCase(),
//     })
//   }

//   //render and re-render when state gets updated
//   render() {
//     const filtered = this.state.monsters.filter((card) =>
//       card.name.toLowerCase().includes(this.state.searchField),
//     )
//     console.log(filtered)

//     return (
//       <div className='App'>
//         <h1>Monsters Rolodex</h1>
//         <SearchBox
//           onChange={this.handleOnChange}
//           className='monseters-search-box'
//           placeholder='search monsters'
//         />
//         <CardList cards={filtered} />
//       </div>
//     )
//   }
// }

function App() {
  const [searchField, setSearchField] = useState('') //specify initial value for state, note diffrent data ty
  const [monsters, setMonsters] = useState([]) //initial monsters value is ''
  const [filteredMonsters, setFilteredMonsters] = useState(monsters) //initial filtered monsters value is also ''
  const [title, setTitle] = useState('')

  const handleOnSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase())
  }

  const handleOnTitleChange = (e) => {
    setTitle(e.target.value.toUpperCase())
  }

  //initial api call - use useeffect to set state
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()) //The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.
      .then((users) => {
        setMonsters(users)
      })
  }, [])

  //put it in useEffect so function inside only gets called when relevant state changes

  useEffect(() => {
    const newFilteredCards = monsters.filter((card) =>
      card.name.toLowerCase().includes(searchField),
    )
    setFilteredMonsters(newFilteredCards)
    console.log('useeffect fired')
  }, [monsters, searchField])

  return (
    <div className='App'>
      <h1>{title}</h1>
      <SearchBox
        onChange={handleOnSearchChange}
        className='monseters-search-box'
        placeholder='search monsters'
        value={searchField}
      />
      <br />
      <SearchBox
        onChange={handleOnTitleChange}
        className='title-search-box'
        placeholder='set title'
        value={title}
      />
      <CardList cards={filteredMonsters} />
    </div>
  )
}
export default App
