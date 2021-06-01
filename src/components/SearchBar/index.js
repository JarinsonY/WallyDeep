import { useState } from "react"
import getPics from "../../services/getPics";
import './style.css'

export default function SearchBar() {

  const [keyword, setKeyword] = useState('')
  const [pics, setPics] = useState([])


  function handleChange(e) {
    setKeyword(e.target.value);
  }

  function handleSubmit(e) {
    getPics(keyword).then(
      pics => {
        setPics(pics)
      })
  }

  return (
    <>
      <div className="search-bar">
        <input
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


      {pics.map((photo) => (
        <img src={photo.urls.small} alt={photo.alt_description} key={photo.id} />
      ))}
    </>
  )
}