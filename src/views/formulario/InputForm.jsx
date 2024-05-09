function Input({
  id,
  inputType,
  placeholder,
  readOnly,
  onChange,
  value,
}) {
  return (
    <div className="input-frm">
      <input
        className="input-size"
        type={inputType}
        placeholder={placeholder}
        value={value}
        id={id}
        name={id}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
