function Button({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line no-unused-vars, react/prop-types
  type = "Button",
  // eslint-disable-next-line react/prop-types
  className = "text-white bg-gray-800 rounded-md  hover:bg-gray-900 duration-500",
  ...props
}) {
  return (
    <button className={`px-3 py-2 m-10 ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
