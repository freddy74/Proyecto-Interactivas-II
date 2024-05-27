export function Input({type = "text", name=""}) {
  return (
    <input
      className="w-full border-solid border-custom-blue border-[0.5px] border-opacity-50 rounded bg-custom-light-blue"
      type={type}
      name={name}
    />
  );
}
