// Purpose: Button component
export default function Button({ children }) {
  return (
    <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
      {children}
    </button>
  )
}
