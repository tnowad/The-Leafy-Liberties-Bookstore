function Button({
  to,
  href,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  return <button>{children}</button>
}

export default Button
