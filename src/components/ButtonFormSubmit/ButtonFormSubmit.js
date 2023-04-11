import "./ButtonFormSubmit.css";

const ButtonFormSubmit = (props) => {
  return (
    <div className="button-form">
      <button type={props.type}>{props.text}</button>
    </div>
  );
};

export default ButtonFormSubmit;
 