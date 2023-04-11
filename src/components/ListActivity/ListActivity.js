import Activity from "../Activity/Activity";
import "./ListActivity.css";

const ListActivity = ({
  priorityName,
  primaryColor,
  secondaryColor,
  activities,
  deleteActivity,
}) => {
  return activities.length > 0 ? (
    <>
      <section className="activities-card" style={{ background: primaryColor }}>
        <h3 style={{ borderColor: secondaryColor }}>{priorityName}</h3>

        <div className="activities-list">
          {activities.map((activity) => (
            <Activity
              key={activity.id}
              id={activity.id}
              name={activity.name}
              responsible={activity.responsible}
              description={activity.description}
              priority={activity.priority}
              backgroundColor={secondaryColor}
              deleteActivity={deleteActivity}
            />
          ))}
        </div>
      </section>
    </>
  ) : (
    ""
  );
};

export default ListActivity;
