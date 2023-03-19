// export default function ButtonPill({ ...props }) {
//   return (
//     <button
//       {...props}
//       className={`flex items-center justify-center text-white bg-primary rounded-full box-border text-base py-2 p-4 hover:bg-primary-800 ${props.className}`}
//     >
//       {props.children}
//     </button>
//   )
// }
export default function ButtonPill({ disabled, size = 'medium', color = 'primary', ...props }) {
  const sizeClasses = {
    small: 'py-1 px-3 text-xs',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-5 text-lg',
  }

  const colorClasses = {
    primary: 'bg-primary hover:bg-primary-800',
    secondary: 'bg-secondary hover:bg-secondary-800',
  }

  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex items-center justify-center text-white rounded-full box-border ${sizeClasses[size]} ${colorClasses[color]} ${props.className}`}
    >
      {props.children}
    </button>
  )
}
