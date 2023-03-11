function ButtonWhite({ ...props }) {
  return (
    <button
      onClick={() => (window.location.href = props.link)}
      {...props}
      className={`mt-5 pt-2 h-10 w-36 text-gray-400  ${
        props.color === props.title ? 'text-white bg-green-800' : ''
      } rounded-md 
      flex justify-around content-center box-border`}
    >
      {props.children}
      {props.title ? <span>{props.title}</span> : ''}
    </button>
  )
}

export default ButtonWhite
