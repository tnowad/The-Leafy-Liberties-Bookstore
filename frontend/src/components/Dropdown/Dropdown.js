import { useState } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Dropdown = ({ options, trigger, changeTitle, path }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      <button
        type="button"
        className={`whitespace-nowrap inline-flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-full shadow-md text-sm font-medium text-white ${
          changeTitle ? `bg-primary hover:bg-primary-800 ` : ''
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
        onClick={() =>
          options
            ? setIsOpen(!isOpen)
            : (window.location.href = path ? path : '')
        }
      >
        {selectedOption && changeTitle ? selectedOption.label : trigger}
        {changeTitle ? (
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.707 14.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-3.5 3.5z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          ''
        )}
      </button>
      {isOpen && options && (
        <div className="absolute top-8 z-10 w-auto mt-2 rounded-md bg-white shadow-lg">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
