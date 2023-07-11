import { useEffect, useState } from "react";
import { FloatingLabel, Form, InputGroup,DisplayName, Button } from "react-bootstrap";


export default function OneTask({oneTask,updateTask,sendInfo, tasks,removeTask ,setOneTask}) {

  console.log(oneTask)

  // useEffect(() => {
    
  // }, [oneTask])
  
  const {idTask,nameTask, descriptionTask, taskState} = oneTask
  
  
  
  const [updatedNameTask, setUpdatedNameTask] = useState(nameTask);
  const [updatedDescriptionTask, setUpdatedDescriptionTask] = useState(descriptionTask)
  const [updateSave, setUpdateSave] = useState(true)

  const changeButton = () => {        
        setUpdateSave(!updateSave)        
    }

    const sendUpdate = () => {
        updateSave ? null : updateTask({idTask,updatedNameTask, updatedDescriptionTask, taskState})
        changeButton()
    }

    useEffect(() => {
      setUpdatedNameTask(nameTask)
      setUpdatedDescriptionTask(descriptionTask)
  }, [oneTask])
  
  
  return (
        <Form>
            <FloatingLabel
                
                controlId="floatingInput"
                label="Name Task"
                className="mb-3"
            >
                 <Form.Control 
                    disabled ={updateSave} 
                    type="text" 
                 
                    value={updatedNameTask}
                    onChange={ (e) => setUpdatedNameTask(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel
                
                controlId="floatingInput"
                label="Description Task"
                >
                 <Form.Control 
                    className="TextareaHeight" 
                    disabled={updateSave} 
                    as="textarea" 
                    
                    value={updatedDescriptionTask}
                    onChange={(e) => setUpdatedDescriptionTask(e.target.value)}/>
            </FloatingLabel>
           
          <Button variant="success" type="submit">
            Completar
          </Button>
          <Button variant="primary" onClick={ () => { sendUpdate()
                                                    } } > 
            { updateSave ? "Actualizar" : "Guardar" }
          </Button>
          <Button variant="danger" onClick={ () => {changeButton() 
                                                    removeTask(idTask)} }>
            Eliminar
          </Button>
      </Form>
  )
}
