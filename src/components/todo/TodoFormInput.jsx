export default function TodoFormInput({
  inputRef,
  label,
  inputValue,
  handleChangeInputValue,
  className,
}) {
  return (
    <div className={"input-item"}>
      <label>{label}</label>
      <input
        className={"box " + className}
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleChangeInputValue}
        required
      />
    </div>
  );
}
