// React
import { Link } from "react-router-dom";

// Style
import "./Activity.css";
import { AiOutlineClose } from "react-icons/ai";

const Activity = ({
  id,
  name,
  responsible,
  backgroundColor,
  deleteActivity,
}) => {
  return (
    <div className="activity">
      <div className="header" style={{ background: backgroundColor }}>
        <div className="delete-button">
          <AiOutlineClose size={20} onClick={() => deleteActivity(id)} />
        </div>

        <img src="/images/HumaaansSpace.png" alt="" />
      </div>

      <Link to={`/${id}`} style={{ textDecoration: "none", color: "#000" }}>
        <div className="body">
          <h4>{name}</h4>

          <h5>{responsible}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Activity;
