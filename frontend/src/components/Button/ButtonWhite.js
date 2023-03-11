function ButtonWhite({ ...props }) {
  return (
    <button
      onClick={() => (window.location.href = props.link)}
      {...props}
      className={`mt-5 pt-2 h-10 w-40 text-gray-400  ${
        props.color === props.title ? 'text-white bg-green-800' : ''
      } rounded-md 
      flex justify-center content-center box-border`}
    >
      {props.children}
      {props.title ? <span className="ml-4">{props.title}</span> : ''}
    </button>
  )
}

export default ButtonWhite
