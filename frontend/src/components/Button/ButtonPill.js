export default function ButtonPill({ ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center text-white bg-primary rounded-full box-border text-base py-2 p-4 hover:bg-primary-600 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
