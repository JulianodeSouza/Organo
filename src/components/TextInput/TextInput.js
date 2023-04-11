import "./TextInput.css";

const TextInput = (props) => {
  return (
    <div className="text-input">
      <label>{props.textLabel}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onChange={(event) => props.changed(event.target.value)}
        value={props.value}
        disabled={props.disabled}
      />
    </div>
  );
};

export default TextInput;
