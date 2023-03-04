import { Link } from 'react-router-dom'

export default function MenuLinks({ className, items, ...props }) {
  return (
    <ul
      className={`flex flex-col items-center justify-center w-full h-full ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="w-full h-12 flex items-center"
        >
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
