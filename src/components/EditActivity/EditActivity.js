// React
import { useParams } from "react-router-dom";

//  Style
import "./EditActivity.css";

// Components
import Form from "components/Form/Form";

const EditActivity = ({ activities, priorities, editActivity }) => {
  const params = useParams();
  const activityToEdit = activities.find((activity) => activity.id === params.id);

  return (
    <Form
      activity={activityToEdit}
      priorities={priorities}
      isEdit={true}
      editActivity={editActivity}
    />
  );
};

export default EditActivity;
