// React
import { useState } from "react";

// Style
import "./Form.css";

// Components
import TextInput from "../TextInput/TextInput";
import DropDown from "../DropDown/DropDown";
import TextArea from "components/TextArea/TextArea";
import ButtonFormSubmit from "../ButtonFormSubmit/ButtonFormSubmit";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const textButton = !props.isEdit ? "Criar Atividade" : "Salvar alterações";

  // Variaveis de controle de estado
  const [name, setName] = useState(
    props.activity.name !== "" ? props.activity.name : ""
  );

  const [responsible, setResponsible] = useState(
    props.activity.responsible !== "" ? props.activity.responsible : ""
  );

  const [description, setDescription] = useState(
    props.activity.description !== "" ? props.activity.description : ""
  );

  const [priority, setPriority] = useState(
    props.activity.priority !== "" ? props.activity.priority : ""
  );

  const navigate = useNavigate();

  // Função para salvar as atividades
  const submitForm = ($event) => {
    $event.preventDefault();

    if (!props.isEdit) {
      props.addActivity({ name, responsible, description, priority });

      setName("");
      setResponsible("");
      setDescription("");
      setPriority("");
    } else {
      props.editActivity({
        id: props.activity.id,
        name,
        responsible,
        description,
        priority,
      });
      navigate(-1);
    }
  };

  return (
    <>
      <section className="form-add">
        <form onSubmit={submitForm}>
          {props.activity === "" ? (
            <h2>Preencha os campos para adicionar uma tarefa</h2>
          ) : (
            <h2 style={{ textAlign: "center" }}>
              {`Detalhes: ${props.activity.name}`}
            </h2>
          )}

          <TextInput
            textLabel="Atividade"
            disabled={props.isEdit ? true : false}
            placeholder="Digite o nome da atividade"
            type="text"
            required={true}
            value={name}
            changed={(value) => setName(value)}
          />
          <TextInput
            textLabel="Responsável"
            placeholder="Digite o responsável"
            disabled={props.isEdit ? true : false}
            type="text"
            required={true}
            value={responsible}
            changed={(value) => setResponsible(value)}
          />
          <TextArea
            textLabel={"Descrição"}
            placeholder={"Descreva a atividade"}
            required={true}
            value={description}
            changed={(value) => setDescription(value)}
          />
          <DropDown
            textLabel="Prioridade"
            required={true}
            itens={props.priorities}
            value={priority}
            changed={(value) => setPriority(value)}
          />
          <ButtonFormSubmit type="submit" text={textButton} />
        </form>
      </section>
    </>
  );
};

export default Form;
