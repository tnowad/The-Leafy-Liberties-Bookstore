import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { faPenToSquare,faTrash,faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ButtonDashBoard() {
  const [isVisible, setIsVisible] = useState(false)
  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="action-button">
      <button
        className={
          'font-medium text-white px-4 py-2 bg-green-700 rounded-lg hover:bg-green-500 transition-colors' +
          (isVisible ? ' hidden' : '')
        }
        onClick={handleClick}
      >
        •••
      </button>
      {isVisible && (
        <div className="flex justify-center items-center gap-2">
          <button className="edit-button py-2 px-3 bg-primary-400 text-white rounded-xl hover:text-blue-500 transition-all">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="delete-button py-2 px-3 bg-primary-400 text-white rounded-xl hover:text-red-600 transition-all">
            <FontAwesomeIcon icon={faTrash} color=''/>
          </button>
          <button className="close-button py-2 px-3 bg-primary-400 text-white rounded-xl hover:text-orange-500 transition-all" onClick={handleClick}>
            <FontAwesomeIcon icon={faClose}/>
          </button>
        </div>
      )}
    </div>
  )
}
