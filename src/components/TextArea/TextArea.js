import "./TextArea.css";

const TextArea = ({ value, changed, textLabel, placeholder, required }) => {
  return (
    <div className="text-area-input">
      <label>{textLabel}</label>
      <textarea
        cols="60"
        rows="1"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(value) => changed(value.target.value)}
      />
    </div>
  );
};

export default TextArea;
