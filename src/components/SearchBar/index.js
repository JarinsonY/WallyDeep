import { useState } from "react"
import { useHistory } from "react-router"
import './style.css'

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
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            id="search-input"
            onChange={handleChange}
            type="text"
            placeholder="Search your photos..."
            value={keyword}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
      </div>
    </>
  )
}