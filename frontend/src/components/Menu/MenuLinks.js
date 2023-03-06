import { Link } from 'react-router-dom'

export default function MenuLinks({ className, items, ...props }) {
  return (
    <ul
      className={`flex flex-col items-center w-full h-full ${className}`}
      {...props}
    >
      {items.map((item, index) => (
        <li key={index} className="h-12 flex items-center hover:text-green-800">
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
