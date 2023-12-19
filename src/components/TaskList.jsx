import React, { useState } from 'react';
import SurveyTask from './SurveyTask';
import Task from './Task';
import '../stylesheet/TaskList.css';

function taskList() {
    const [tasks, setTask] = useState([]);

    const addTask = task => {
        const characters = /^[a-zA-Z0-9\s]+$/;
        let wordValidate = characters.test(task.text);

        if(!wordValidate){
            alert('Solo son permitidos caracteres alfanumericos');
            
        }else {

            if(task.text.trim()) {
                task.text = task.text.trim();
                const updateTasks = [task, ...tasks];
                setTask(updateTasks);

            }
            
        }
    };

    const deleteTask = id => {
        const updateTasks = tasks.filter(task => task.id !== id);
        setTask(updateTasks);
    }

    const completeTask = id => {
        const updateTasks = tasks.map(task => {
            if (task.id === id) {
                task.complete = !task.complete;
            }
            return task;
        });
        setTask(updateTasks);
    };

    return (
        <>
            <SurveyTask onSubmit={addTask} />
            <div className='container-task-list'>
                {
                    tasks.map((task) => 
                        <Task 
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            complete={task.complete}
                            completeTask={completeTask}
                            deleteTask={deleteTask} />
                    )
                }
            </div>
        </>
    );
}

export default taskList;