function ButtonWhite({ ...props }) {
  return (
    <button {...props} className="w-10">
      {props.children}
      {props.title ? <span>{props.title}</span> : ''}
    </button>
  )
}

export default ButtonWhite
