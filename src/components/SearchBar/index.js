import { useState } from "react"
import { useHistory } from "react-router"
import './SearchBar.css'

export default function SearchBar() {

  let history = useHistory()

  const [keyword, setKeyword] = useState('')

  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    history.replace(`/results/${keyword}`)
  }

  return (
    <>
        <form onSubmit={handleSubmit} className="search-bar">
          <input
            id="search-input"
            onChange={handleChange}
            type="text"
            placeholder="Search pics here..."
            value={keyword}
            className="search-input"
            autoComplete="off"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
    </>
  )
}