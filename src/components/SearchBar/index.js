import { useState } from "react"
import './style.css'

export default function SearchBar() {

  const [keyword, setKeyword] = useState('')

  function handleChange(e) {
    
  }

  function handleSubmit(e) {
    
  }

  return (
    <>
      <div className="search-bar">
        <input
          id="search-input"
          onChange={handleChange}
          type="text"
          placeholder="Search your photos..."
          value={keyword}
          className="search-input"
        />
        <button onClick={handleSubmit} type="submit" className="search-btn">
          Search
        </button>
      </div>
    </>
  )
}