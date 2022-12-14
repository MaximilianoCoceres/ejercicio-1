import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

const defaultTask = new Task('Example', 'Default description',false,LEVELS.NORMAL);

    const changeState=(id) =>{
        console.log('ToDo: Cmabiar estado de una tarea')
    }

    return (
        <div>
            <div>
               <h1>Your Tasks:</h1>  
            </div>
            {/* ToDo: aplicar un for/map para renderizar una lista */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};




export default TaskListComponent;
