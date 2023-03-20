import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ placeholder, onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const searchQuery = formData.get('searchQuery')
    onSearch(searchQuery)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center w-full h-10 bg-gray-100 rounded-full"
    >
      <input
        type="text"
        name="searchQuery"
        className="pl-5 w-full h-full bg-transparent rounded-tl-full rounded-bl-full ring-0 focus:ring-0"
        placeholder={placeholder}
      />
      <button className="flex items-center justify-center w-10 h-10">
        <FontAwesomeIcon
          className="cursor-pointer text-gray-300 transition-all hover:text-green-800 "
          icon={faSearch}
        />
      </button>
    </form>
  )
}
export default Search
