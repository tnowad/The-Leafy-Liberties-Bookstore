import React, { useState } from 'react'
export default function Dropdown({ trigger, menu }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      {React.cloneElement(trigger, { onClick: toggle })}
      {isOpen && React.cloneElement(menu, { onClick: toggle })}
    </div>
  )
}
