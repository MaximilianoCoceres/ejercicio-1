import React, {useState, useEffect} from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

//importamos la hoja de estilos de task.scss
import '../../styles/task.scss'


const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description',false,LEVELS.NORMAL);

    //estado del componenete
    const [tasks, setTasks] = useState(defaultTask);

    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componenete

    useEffect(() => {
        console.log('Tasks state has been modified');
        setLoading(false);
        return () => {
            console.log('Tasklist component is going to unmount..')
        };
    }, [tasks]);


    const changeCompleted=(id) =>{
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
