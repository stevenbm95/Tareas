import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

export default function ListTask({tasks,selectTask, setOneTask, oneTask}) {

  const [selectedTask, setSelectedTask] = useState({})
  
  const prueba = (task) =>{
    

    // oneTask ? setOneTask(selectedTask) :setOneTask(null)

    // console.log(task.idTask)
    // console.log(selectedTask.idTask)
    // task.idTask !== selectedTask.idTask ? setOneTask(null) : null
      
  }

  return (
    <ListGroup as="ul">
            <ListGroup.Item as="li" active>
            Task List
            </ListGroup.Item>
            {
            
            tasks.map( (task) => ( 
                    <ListGroup.Item
                            className="list-item"
                            as="li" 
                            key={task.idTask}
                            onClick={(e)=>{                
                              selectTask(task)
                            // setSelectedTask(task) 
                                           
                        }} 
                    > {task.nameTask}
                </ListGroup.Item>
                ))
            }
    </ListGroup>

  )
 
}
