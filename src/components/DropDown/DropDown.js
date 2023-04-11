import "./DropDown.css";

const DropDown = (props) => {
  return (
    <div className="drop-down-container">
      <label>{props.textLabel}</label>

      <select
        required={props.required}
        value={props.value}
        onChange={(event) => props.changed(event.target.value)}
      >
        <option value="">Selecione</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
