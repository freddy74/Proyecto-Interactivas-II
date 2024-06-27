const Input = ({ type = 'text', value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
    />
  );
};

export { Input };