//  React
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import EditActivity from "components/EditActivity/EditActivity";
import Form from "components/Form/Form";
import ListActivity from "components/ListActivity/ListActivity";
import DefaultPage from "components/DefaultPage/DefaultPage";

function App() {
  // Variavel de seleção
  const priorities = [
    { name: "Baixa", primaryColor: "#D9F7E9", secondaryColor: "#57C278" },
    { name: "Média", primaryColor: "#FFF5D9", secondaryColor: "#FFBA05" },
    { name: "Alta", primaryColor: "#FDE7E8", secondaryColor: "#E06B69" },
  ];

  // Array de atividades
  const [activities, setActivities] = useState([]);
  const [edit, setEdit] = useState(false);

  // Adiciona uma nova atividade no array para exibição
  const newActivity = (activity) => {
    let newActivity = {
      id: uuidv4(),
      description: activity.description,
      name: activity.name,
      priority: activity.priority,
      responsible: activity.responsible,
    };

    setActivities([...activities, newActivity]);
  };

  // Edita uma atividade
  const editActivity = (activityEdited) => {
    console.log("activityEdited: ", activityEdited);

    setActivities(
      activities.map((activity) =>
        activity.id === activityEdited.id ? activityEdited : activity
      )
    );
  };

  // Deleta uma atividade
  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route
            index
            element={
              <div className="App">
                <Form
                  activity={""}
                  isEdit={edit}
                  priorities={priorities.map((priority) => priority.name)}
                  addActivity={(activity) => newActivity(activity)}
                />

                {priorities.map((priority) => (
                  <ListActivity
                    key={priority.name}
                    priorityName={priority.name}
                    primaryColor={priority.primaryColor}
                    secondaryColor={priority.secondaryColor}
                    activities={activities.filter(
                      (item) => item.priority === priority.name
                    )}
                    deleteActivity={deleteActivity}
                  />
                ))}
              </div>
            }
          />

          <Route
            path="/:id"
            element={
              <EditActivity
                editActivity={(value) => editActivity(value)}
                activities={activities}
                priorities={priorities.map((priority) => priority.name)}
              />
            }
          />
        </Route>

        <Route path="*" element={<div>Nenhuma página encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
