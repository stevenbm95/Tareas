import React, { useEffect, useState } from 'react'
import CreateTask from '../components/create-task'
import ListTask from '../components/list-task'
import stylesTasks from '~/styles/tasks.css'
import { Button, Col, Row } from 'react-bootstrap'
import OneTask from '../components/one-task'

export function links(){
  return[{
    rel: 'stylesheet',
    href: stylesTasks
  }]
}

export default function tasks() {

    const [tasks, setTasks] = useState([]);
	const [tasksUpdate, setTasksUpdate] = useState(tasks)

    const [showCreateTask, setShowCreateTask] = useState(false)
    const [oneTask, setOneTask] = useState(null)  

	

    const showComponent =(showCreateTask) => {
      setShowCreateTask(!showCreateTask)
      setOneTask(null)
        }

    const selectTask = (task) => {
		setOneTask(task)
		
    }

    const sendInfo = (task) =>{
		setTasks([...tasks,task]);
		setOneTask(task)  
    }


	const updateTask = (task) =>{ 
		const updateTask = tasks.map((t)=>{
				if(t.idTask === task.idTask){
					const { updatedNameTask, updatedDescriptionTask} = task

					 return {...t, nameTask: updatedNameTask, descriptionTask: updatedDescriptionTask}
				}
				
			return t
		})
		
		 setTasks(updateTask)		
		

	}
	const removeTask = (idTask) =>{ 
		const updateTasks = tasks.filter((newTasks) => newTasks.idTask !== idTask )
		setTasks(updateTasks);
		setOneTask(null)

	}

  return (
	 		<Row> 
				<h1>TASKS</h1>
				<Col />
				<Col>
				
					<ListTask    
						tasks={tasks} selectTask={selectTask} setOneTask={setOneTask}
					/>
					<Button 
							variant="primary"
							onClick={() =>{
								showComponent(showCreateTask)
								setOneTask(null) 
							}}
					> Create Task
					</Button>
				</Col>
				<Col>
					{ 
					
					oneTask ? 
					 <OneTask oneTask={oneTask} updateTask={updateTask} removeTask={removeTask} tasks={tasks} setOneTask={setOneTask} /> 
							: 	<CreateTask sendInfo={sendInfo} />
					}          
				</Col>
				<Col />
			</Row>

  )
}
