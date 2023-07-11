import { useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";


export default function CreateTask({sendInfo}) {

    const [nameTask, setNameTask] = useState('');
    const [descriptionTask, setDescriptionTask] = useState('')
    
    const idTask = (Math.random().toString(36).substring(2) + Date.now());

    const isInvalid = () => {
        return  (nameTask.trim().length <= 3 || descriptionTask.trim().length <= 3) ? true : false            
        }
    
    const tasks = (e) =>{
            e.preventDefault();
            sendInfo({
                idTask,
                nameTask,
                descriptionTask,
                taskState: false });
            setNameTask('');
            setDescriptionTask('');
            }

    return (
            <>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <FloatingLabel label="Name Task" className="mb-3" >
                                <Form.Control   type="text" 
                                                placeholder="Enter task"
                                                value={nameTask}
                                                onChange={e =>{ setNameTask(e.target.value) }} 
                                />
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FloatingLabel label="Description Task" className="mb-3">                 
                            <Form.Control
                                className="TextareaHeight"
                                as="textarea"
                                placeholder="Enter description" 
                                value={descriptionTask}
                                onChange={e => { setDescriptionTask(e.target.value) }}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button
                        disabled={ isInvalid() }
                        variant="primary" 
                        type="submit"
                        onClick={ e => tasks(e) }
                    > Create Task
                    </Button>
                </Form>
            </>
     
  )
}
