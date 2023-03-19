// Purpose: Button component
export default function Button({ children }) {
  return (
    <button className="flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full">
      {children}
    </button>
  )
}
/*
 * Test button component with props and dynamic classes (size, shape, color)
export default function Button({ disabled, size = 'medium', shape = 'circle', color = 'primary', children, ...props }) {
  const sizeClasses = {
    small: 'text-xs',
    medium: 'text-base',
    large: 'text-lg',
  };

  const shapeClasses = {
    circle: 'w-10 h-10 rounded-full',
    pill: 'rounded-full py-2 px-4',
  };

  const colorClasses = {
    primary: 'bg-primary hover:bg-primary-800',
    secondary: 'bg-secondary hover:bg-secondary-800',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed';

  return (
    <button
      {...props}
      disabled={disabled}
      className={`flex items-center justify-center text-white box-border ${sizeClasses[size]} ${shapeClasses[shape]} ${colorClasses[color]} ${disabled ? disabledClasses : ''} ${props.className}`}
    >
      {children}
    </button>
  );
}
*/
