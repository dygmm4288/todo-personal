import styled from "styled-components";

export default function TodoFormInput({
  inputRef,
  label,
  inputValue,
  handleChangeInputValue,
}) {
  return (
    <StyledInputItem isEmpty={isEmpty(inputValue)}>
      <label>{label}</label>
      <input
        className='box'
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleChangeInputValue}
        required
      />
    </StyledInputItem>
  );
}
const isEmpty = (str) => str.length === 0;

const StyledInputItem = styled.div`
  label {
    margin-right: 0.5rem;
  }
  input {
    outline: none;
    padding: 0.5rem 0.25rem;
    border: 2px solid;
    border-color: transparent;
    box-sizing: border-box;
  }
  input:focus {
    border-color: ${({ isEmpty }) => (isEmpty ? "lightcoral" : "lightgreen")};
  }
`;
